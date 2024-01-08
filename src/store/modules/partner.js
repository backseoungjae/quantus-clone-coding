import dayjs from "dayjs";

const initialState = {
  strategy: "",
  magicSplit: 1,
  singleStockOptimizationSettings: {
    purchaseCriteria: getCriteriaInitialState(),
    sellingCriteria: getCriteriaInitialState(),
    divisionOrder: getCriteriaInitialState(),
    riskFreeInterestIncome: 0,
  },
  assetClassSettings: {
    kind: "한국 ETF",
    class: "",
  },
  singleStockSettings: {
    purchaseCriteria: 0,
    sellingCriteria: 0,
    entryAmountRatio: 0,
    riskFreeInterestIncome: 0,
  },
  period: {
    startDate: null,
    endDate: dayjs(new Date()).format("YYYY.MM.DD"),
  },
};

function getCriteriaInitialState() {
  return {
    prevCriteria: 0,
    nextCriteria: 0,
    criteriaInterval: 0,
  };
}

// 제목 변경 부분
const CHANGE_STRATEGY = "partner/CHANGE_STRATEGY";

// 스플릿 변경 부분
const CHANGE_SPLIT = "partner/CHANGE_SPLIT";

// 단일종목 최적화 부분
const CHANGE_SINGLE_STOCK_OPTIMIZATION_SETTINGS =
  "partner/CHANGE_SINGLE_STOCK_OPTIMIZATION_SETTINGS";
const CHANGE_RISK_FREE = "partner/CHANGE_RISK_FREE";

// 단일 종목 부분
const CHANGE_SINGLE_STOCK_SETTINGS = "partner/CHANGE_SINGLE_STOCK_SETTINGS";

// 자산군 부분
const CHANGE_ASSET_SETTINGS = "partner/CHANGE_ASSET_SETTINGS";

// 날짜 부분
const CHANGE_DATE = "partner/CHANGE_DATE";

export const changeStrategy = (payload) => ({
  type: CHANGE_STRATEGY,
  payload,
});

export const changeSplit = (payload) => ({
  type: CHANGE_SPLIT,
  payload,
});

export const changeSingleStockOptiomizationSettings = (
  category,
  field,
  value
) => ({
  type: CHANGE_SINGLE_STOCK_OPTIMIZATION_SETTINGS,
  payload: {
    category,
    field,
    value,
  },
});

export const changeRiskFree = (payload) => ({
  type: CHANGE_RISK_FREE,
  payload,
});

export const changeSingleStockSettings = (payload) => ({
  type: CHANGE_SINGLE_STOCK_SETTINGS,
  payload,
});

export const changeAssetClassSettings = (payload) => ({
  type: CHANGE_ASSET_SETTINGS,
  payload,
});

// 날짜 부분
export const changeDate = (payload) => ({
  type: CHANGE_DATE,
  payload,
});

function partner(state = initialState, action) {
  switch (action.type) {
    case CHANGE_STRATEGY:
      return {
        ...state,
        ...action.payload,
      };
    case CHANGE_SPLIT:
      return {
        ...state,
        magicSplit: action.payload,
      };
    case CHANGE_SINGLE_STOCK_OPTIMIZATION_SETTINGS:
      return {
        ...state,
        singleStockOptimizationSettings: {
          ...state.singleStockOptimizationSettings,
          [action.payload.category]: {
            ...state.singleStockOptimizationSettings[action.payload.category],
            [action.payload.field]: action.payload.value,
          },
        },
      };
    case CHANGE_RISK_FREE:
      return {
        ...state,
        singleStockOptimizationSettings: {
          ...state.singleStockOptimizationSettings,
          ...action.payload,
        },
      };
    case CHANGE_SINGLE_STOCK_SETTINGS:
      return {
        ...state,
        singleStockSettings: {
          ...state.singleStockSettings,
          ...action.payload,
        },
      };
    case CHANGE_ASSET_SETTINGS:
      return {
        ...state,
        assetClassSettings: {
          ...state.assetClassSettings,
          ...action.payload,
        },
      };
    case CHANGE_DATE:
      return {
        ...state,
        period: {
          ...state.period,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

export default partner;
