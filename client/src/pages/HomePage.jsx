import "./homepage.css";
import hebrewIcon from "../assets/images/hebrewIcon.png";
import arabicIcon from "../assets/images/arabicIcon.png";
import { useState } from "react";
import StoryList from "../pages/StoryList";

const HomePage = () => {
  const [cultureSelected, setCultureSelected] = useState(null);

  const handleClick = ({ target }) => {
    setCultureSelected(target["name"]);
  };

  if (cultureSelected)
    return (
      <StoryList
        culture={cultureSelected}
        setCultureSelected={setCultureSelected}
      />
    );

  return (
    <>
      <div className="header">
        <div className="header__motd">
          <div className="header__slogen">
            All of the Hebrew and Arabic stories
          </div>
          <div className="header__small">In one place</div>
        </div>
      </div>
      <div className="languageSelector">
        <h1>what would you like to read today?</h1>
        <div className="languageSelector__options">
          <div className="languageSelector__option">
            <button onClick={handleClick}>
              <img src={arabicIcon} alt="" name="arabic" />
            </button>
          </div>
          <div className="languageSelector__option">
            <button onClick={handleClick}>
              <img src={hebrewIcon} alt="" name="jewish" />
            </button>
          </div>
          <div className="languageSelector__option">
            <button name="russian" onClick={handleClick}>
              russian
              {/* <img src={hebrewIcon} alt="" />//todo */}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
