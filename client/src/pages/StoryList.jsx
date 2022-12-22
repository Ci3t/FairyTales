import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getStories } from "../components/api/fetch";

const StoryList = ({ culture, setCultureSelected }) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const Allstories = async () => {
      const story = await getStories();
      setStories(story);
      console.log(story);
    };
    Allstories();
  }, []);

  const handleBackButton = (e) => {
    setCultureSelected((prev) => null);
  };
  return (
    <header>
      <ul>
        {stories?.map((story) => {
          if (story.culture === culture)
            return (
              <li key={story._id}>
                <Link to={`/stories/${story._id}`}>{story.title}</Link>
              </li>
            );
          else return false;
        })}
      </ul>
      <button onClick={handleBackButton}>back</button>
    </header>
  );
};
export default StoryList;
