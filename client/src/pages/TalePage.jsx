import { useEffect, useState } from "react";
import { getSingleStory } from "../components/api/fetch";

export default function TalePage({ taleID, children }) {
  const [state, setState] = useState({
    error: null,
    loading: false,
    tale: null,
  });
  useEffect(() =>
    setTimeout(async () => {
      setState((st) => ({ ...st, loading: true }));
      try {
        const tale = await getSingleStory(taleID);
        setState((st) => ({ ...st, tale }));
      } catch (error) {
        setState((st) => ({ ...st, error }));
      } finally {
        setState((st) => ({ ...st, loading: false }));
      }
    }, 0)
  );
  return "";
}
