import { useReducer } from "react";

const ACTIONS = {
  SET_KEYWORD: "SET_KEYWORD",
  SET_RATING: "SET_RATING",
  SET_LANGUAGE: "SET_LANGUAGE",
  RESET_FILTERS: "RESET_FILTERS"
};

const ACTIONS_REDUCERS = {
  [ACTIONS.SET_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload
  }),
  [ACTIONS.SET_RATING]: (state, action) => ({
    ...state,
    rating: action.payload
  }),
  [ACTIONS.SET_LANGUAGE]: (state, action) => ({
    ...state,
    language: action.payload
  }),
  [ACTIONS.RESET_FILTERS]: state => ({
    ...state,
    keyword: "",
    rating: "g",
    language: "en"
  })
};

const REDUCER = (state, action) => {
  const handler = ACTIONS_REDUCERS[action.type];
  return handler ? handler(state, action) : state;
};

const useForm = ({ initialKeyword, initialRating, initialLanguage }) => {
  const [state, dispatch] = useReducer(REDUCER, {
    keyword: initialKeyword ? decodeURIComponent(initialKeyword) : "",
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
