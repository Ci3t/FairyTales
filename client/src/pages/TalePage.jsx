import { useEffect, useState } from "react";
import "./story.css";
import { getSingleStory } from "../components/api/fetch";
import { NavLink } from "react-router-dom";
import back from "../assets/images/back.png";
export default function TalePage({ taleID }) {
  const [state, setState] = useState({
    error: null,
    loading: false,
    story: null,
  });
  useEffect(() =>
    setTimeout(async () => {
      setState((st) => ({ ...st, loading: true }));
      try {
        const story = await getSingleStory(taleID);
        setState((st) => ({ ...st, story }));
      } catch (error) {
        setState((st) => ({ ...st, error }));
      } finally {
        setState((st) => ({ ...st, loading: false }));
        console.log(state.story);
      }
    }, 0)
  );
  return (
    <div>
      <div className="story">
        <NavLink to="/">
          <button className="story__btn">
            <img style={{ width: "20px" }} src={back} alt=""></img> Back to home
            page
          </button>
        </NavLink>
        <p className="story__category">{state.story.culture}</p>
        <h1 className="story__title">{state.story.title}</h1>

        <div className="story__content">
          {state.story.data}
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
