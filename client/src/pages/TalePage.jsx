import { useEffect, useState } from "react";
import "./story.css";
import { getSingleStory } from "../components/api/fetch";
import { useParams } from "react-router-dom";
import useTranslate from "../components/hooks/use-translate";

export default function TalePage() {
  const { id } = useParams();
  const [storyText, setStoryText] = useState(null);

  const [state, setState] = useState({
    error: null,
    loading: false,
    story: null,
  });

  const { translateStringFunc } = useTranslate(setStoryText);

  useEffect(() => {
    const some = async () => {
      setState((st) => ({ ...st, loading: true }));
      try {
        const story = await getSingleStory(id);
        // console.log(story);
        setState((st) => ({ ...st, story }));
        setStoryText(story.data);
      } catch (error) {
        setState((st) => ({ ...st, error }));
      } finally {
        setState((st) => ({ ...st, loading: false }));
        // console.log(state.story);
      }
    };
    some();
  }, [id]);

  const handleLanguageSelect = ({ target }) => {
    if (!target.value) return;
    translateStringFunc(state.story.data, target.value);
  };

  return (
    <div>
      <select onChange={handleLanguageSelect}>
        <option>select language</option>
        <option value="en">english</option>
        <option value="he">hebrew</option>
        <option value="ar">arabic</option>
      </select>
      <div className="story">
        <p className="story__category">{state.story?.culture}</p>
        <h1 className="story__title">{state.story?.title}</h1>

        <div className="story__content">
          {storyText && storyText}
          {/* <p className="story__paragraph">
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                </p>
                <p className="story__paragraph">
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                </p>
                <p className="story__paragraph">
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                Arabic story content pargraph Arabic story content pargraph Arabic story content pargraph.
                </p> */}
        </div>
      </div>
    </div>
  );
}
