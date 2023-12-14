const initialState = {
  strategy: "",
  settings: {
    univers: "",
    initialFilters: [],
    exceptSectors: [],
  },
};

const CHANGE_TITLE = "backTest/CHANGE_TITLE";
const CHANGE_SETTING = "backTest/CHANGE_SETTING";
const CHANGE_INITIALFILTERS = "backTest/CHANGE_INITIALFILTERS";
const CHANGE_EXCEPTSECTORS = "backTest/CHANGE_EXCEPTSECTORS";

export const changeBackTestTitle = (payload) => ({
  type: CHANGE_TITLE,
  payload,
});

export const changeUniversSettings = (payload) => ({
  type: CHANGE_SETTING,
  payload,
});

export const changeInitialfilters = (payload) => ({
  type: CHANGE_INITIALFILTERS,
  payload,
});

export const changeExceptSectors = (payload) => ({
  type: CHANGE_EXCEPTSECTORS,
  payload,
});

function backTest(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return {
        ...state,
        ...action.payload,
      };
    case CHANGE_SETTING:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload,
        },
      };
    case CHANGE_INITIALFILTERS:
      return {
        ...state,
        settings: {
          ...state.settings,
          initialFilters: [...action.payload],
        },
      };
    case CHANGE_EXCEPTSECTORS:
      return {
        ...state,
        settings: {
          ...state.settings,
          exceptSectors: [...action.payload],
        },
      };
    default:
      return state;
  }
}
export default backTest;
