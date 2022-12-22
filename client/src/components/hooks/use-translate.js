import translate from "translate";

function useTranslate(setFunction) {
  const translateStringFunc = async (text, language) => {
    let translatedStr = await translate(text, language);
    setFunction((prev) => translatedStr);
  };

  return { translateStringFunc };
}
export default useTranslate;
