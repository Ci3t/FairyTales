import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStories } from "../components/api/fetch";

const StoryList = () => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    const Allstories = async () => {
      const story = await getStories();
      setStories(story);
      console.log(story);
    };
    Allstories();
  }, []);

  return (
    <header>
      <ul>
        {stories?.map((story) => (
          <li key={story._id}>
            <Link to={`/stories/${story._id}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
export default StoryList;
