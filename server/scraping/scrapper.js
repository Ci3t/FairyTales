`use strict`;

import puppeteer from "puppeteer";
import { Tale } from "../models/tale.js";

const scrap = async (term) => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto(`https://fairytalez.com/region/${term}/`);
    const storiesArr = await page.$$eval(
      ".alphabet-section a",
      (stories, term) => {
        const tempStory = [];
        stories.forEach((storyTag, i) => {
          if (i < 5)
            tempStory.push({
              title: storyTag.innerText,
              storyLink: storyTag.href,
              culture: term,
            });
        });
        return tempStory;
      },
      term
    );
    for (const story of storiesArr) {
      await page.goto(story.storyLink);
      const contentParagraphs = await page.$$eval(".entry p", (parags) => {
        return parags.map((paraTag) => {
          return paraTag.innerText;
        });
      });
      story.data = contentParagraphs.join(",");
    }
    await Tale.insertMany([...storiesArr]);
    console.log("data saved to DB");
    browser.close();
    // }
  } catch (e) {
    console.log(e);
  }
};

export const getStories = async () => {
  await scrap("jewish");
  // await scrap("arabic");
  await scrap("russian");
};
