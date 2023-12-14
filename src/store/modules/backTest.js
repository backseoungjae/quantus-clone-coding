const initialState = {
  strategy: "",
  settings: {
    univers: "",
  },
};

const CHANGE_SETTING = "backTest/CHANGE_SETTING";
const CHANGE_TITLE = "backTest/CHANGE_TITLE";

export const changeBackTestTitle = (payload) => ({
  type: CHANGE_TITLE,
  payload,
});

export const changeUniversSettings = (payload) => ({
  type: CHANGE_SETTING,
  payload,
});

function backTest(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SETTING:
      return {
        ...state,
        settings: {
          ...state.settings,
          ...action.payload,
        },
      };
    case CHANGE_TITLE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
export default backTest;
