const initialState = {
  purchaseSettings: {
    period: "1년권",
    nation: "한국",
    recommender: "",
    bankTransfer: "",
    totalAmount: "",
  },
};

const PURCHASE_SETTINGS = "purchase/PURCHASE_SETTINGS";

export const changePurchaseSettings = (payload) => ({
  type: PURCHASE_SETTINGS,
  payload,
});

function purchase(state = initialState, action) {
  switch (action.type) {
    case PURCHASE_SETTINGS:
      return {
        ...state,
        purchaseSettings: {
          ...state.purchaseSettings,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export default purchase;
