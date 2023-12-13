const initialState = {
  strategy: "",
  settings: {
    univers: "",
  },
};

const CHANGE_SETTING = "backTest/CHANGE_SETTING";

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
    default:
      return state;
  }
}
export default backTest;
