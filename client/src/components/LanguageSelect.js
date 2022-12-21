import React from "react";

function LanguageSelect({ setLanguage }) {
  const selectHandler = ({ target }) => {
    setLanguage(target.value);
  };
  return (
    <select name="language" id="languge-select" onChange={selectHandler}>
      <option value="en">English</option>
      <option value="ar">Arabic</option>
      <option value="rs">Russian</option>
      <option value="hb">Hebrew</option>
    </select>
  );
}

export default LanguageSelect;
