import { useReducer } from "react";
import { DEFAULT_FILTERS } from "constants/search";
import { ACTIONS, formReducer } from "./useForm.reducer";

const useForm = ({
  initialKeyword = DEFAULT_FILTERS.keyword,
  initialRating = DEFAULT_FILTERS.rating,
  initialLanguage = DEFAULT_FILTERS.language
} = {}) => {
  const [state, dispatch] = useReducer(formReducer, {
    keyword: initialKeyword,
    rating: initialRating,
    language: initialLanguage
  });

  const { keyword, rating, language } = state;

  return {
    keyword,
    rating,
    language,
    updateKeyword: keyword => dispatch({ type: ACTIONS.SET_KEYWORD, payload: keyword }),
    updateRating: rating => dispatch({ type: ACTIONS.SET_RATING, payload: rating }),
    updateLanguage: language => dispatch({ type: ACTIONS.SET_LANGUAGE, payload: language }),
    resetFilters: () => dispatch({ type: ACTIONS.RESET_FILTERS })
  };
};

export default useForm;
