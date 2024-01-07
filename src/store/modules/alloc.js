const initialState = {
  strategy: "",
  settings: {
    staticAlog: "전략배분 (정적자산배분)",
    initialInvestment: "",
    staticRebalancing: "",
    seasonalityMonthList: [],
    bandRebalancing: "",
    isReflectEntireExchangeRate: false,
  },
  assetList: [],
  reentryMarketTiming: {
    movingAverageLine: "",
    movingAverageLineDate: 20,
  },
  period: {
    startDate: null,
    endDate: null,
  },
  splitMode: 0,
};

export const CHANGE_STRATEGY = "alloc/CHANGE_STRATEGY";
export const CHANGE_SETTING = "alloc/CHANGE_SETTING";
export const CHANGE_MONTH = "alloc/CHANGE_MONTH";
export const ADD_ASSETS = "alloc/ADD_ASSETS";
export const CHANGE_ASSET = "alloc/CHANGE_ASSET";
export const REMOVE_ASSET = "alloc/REMOVE_ASSET";
export const CHANGE_DATE = "alloc/CHANGE_DATE";
export const CHECKED_ALL_EXCHANGE_RATE = "alloc/CHECKED_ALL_EXCHANGE_RATE";
export const CHECKED_EXCHANGE_RATE = "alloc/CHECKED_EXCHANGE_RATE";
const CHANGE_REENTRY_MARKET_SETTINGS = "backTest/REENTRY_MARKET_SETTINGS";
const CHANGE_SPLITMODE = "backTest/CHANGE_SPLITMODE";

export const chagneStrategy = (payload) => ({
  type: CHANGE_STRATEGY,
  payload,
});

export const changeAllocSetting = (payload) => ({
  type: CHANGE_SETTING,
  payload,
});

export const changeAllocMonthList = (payload) => ({
  type: CHANGE_MONTH,
  payload,
});

export const addAsset = (payload) => ({
  type: ADD_ASSETS,
  payload,
});

export const changeAsset = (index, name, value) => ({
  type: CHANGE_ASSET,
  payload: {
    index,
    name,
    value,
  },
});

export const removeAsset = (payload) => ({
  type: REMOVE_ASSET,
  payload,
});

export const changeDate = (payload) => ({
  type: CHANGE_DATE,
  payload,
});

export const checkedAllEntireExchangeRate = () => ({
  type: CHECKED_ALL_EXCHANGE_RATE,
});

export const checkedReflectExchangeRate = (payload) => ({
  type: CHECKED_EXCHANGE_RATE,
  payload,
});

// 마켓 부분
export const changeReentryMarketSettings = (payload) => ({
  type: CHANGE_REENTRY_MARKET_SETTINGS,
  payload,
});

export const changeSplitMode = (payload) => ({
  type: CHANGE_SPLITMODE,
  payload,
});

function alloc(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRATEGY:
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
    case CHANGE_MONTH:
      return {
        ...state,
        settings: {
          ...state.settings,
          seasonalityMonthList: [...action.payload],
        },
      };
    case ADD_ASSETS:
      return {
        ...state,
        assetList: state.assetList.concat(action.payload),
      };
    case CHANGE_ASSET: {
      const { index, name, value } = action.payload;
      return {
        ...state,
        assetList: state.assetList.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              [name]: value,
            };
          }
          return item;
        }),
      };
    }
    case REMOVE_ASSET:
      return {
        ...state,
        assetList: state.assetList.filter((itme, i) => i !== action.payload),
      };
    case CHANGE_DATE:
      return {
        ...state,
        period: {
          ...state.period,
          ...action.payload,
        },
      };
    case CHECKED_ALL_EXCHANGE_RATE:
      return state.assetList.some((asset) => asset.kind.includes("미국"))
        ? {
            ...state,
            settings: {
              ...state.settings,
              isReflectEntireExchangeRate:
                !state.settings.isReflectEntireExchangeRate,
            },
            assetList: state.assetList.map((asset) => ({
              ...asset,
              isReflectExchangeRate:
                !state.settings.isReflectEntireExchangeRate,
            })),
          }
        : state;
    case CHECKED_EXCHANGE_RATE:
      const isChecked = state.assetList.map((asset, index) =>
        index === action.payload
          ? asset.kind.includes("미국")
            ? { ...asset, isReflectExchangeRate: !asset.isReflectExchangeRate }
            : asset
          : asset
      );

      const unChecked = isChecked.some((asset) => !asset.isReflectExchangeRate);

      return {
        ...state,
        settings: {
          ...state.settings,
          isReflectEntireExchangeRate: !unChecked,
        },
        assetList: isChecked,
      };
    case CHANGE_REENTRY_MARKET_SETTINGS:
      return {
        ...state,
        reentryMarketTiming: {
          ...state.reentryMarketTiming,
          ...action.payload,
        },
      };
    case CHANGE_SPLITMODE:
      return {
        ...state,
        splitMode: action.payload,
      };
    default:
      return state;
  }
}

export default alloc;
