import { DEFAULT_FILTERS } from "constants/search";

export const ACTIONS = {
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
  [ACTIONS.RESET_FILTERS]: () => ({
    ...DEFAULT_FILTERS
  })
};

export const formReducer = (state, action) => {
  const handler = ACTIONS_REDUCERS[action.type];
  return handler ? handler(state, action) : state;
};
