const initialState = {
  strategy: "",
  settings: {
    univers: "",
    initialFilters: [],
    exceptSectors: [],
  },
  factors: {
    calculationWeight: "",
    valueFactors: [],
    evFactors: [],
    qualityFactors: [],
    priceFactors: [],
    growthPotentialFactors: [],
    accelerationFactors: [],
    consensusFactors: [],
  },
  backtestSettings: {
    initialInvestmentAmount: 0,
    transactionFee: 0,
    backtestRebalancing: "",
    specificGravityControl: "동일 비중",
    rebalancingItems: 0,
    seasonalityMonthList: [],
    stopStandard: 0,
    lossStandard: 0,
  },
  macroMarketTiming: [],
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

// 백테스트 공통 제목 부분
const CHANGE_TITLE = "backTest/CHANGE_TITLE";

// 유니버스 부분
const CHANGE_SETTING = "backTest/CHANGE_SETTING";
const CHANGE_INITIALFILTERS = "backTest/CHANGE_INITIALFILTERS";
const CHANGE_EXCEPTSECTORS = "backTest/CHANGE_EXCEPTSECTORS";

// 팩터 부분
const CHANGE_CALCULATIONWEIGHT = "backTest/CHANGE_CALCULATIONWEIGHT";
const CHANGE_VALUE_FACTORS = "backTest/CHANGE_VALUE_FACTORS";
const CHANGE_EV_FACTORS = "backTest/CHANGE_EV_FACTORS";
const CHANGE_QUALITY_FACTORS = "backTest/CHANGE_QUALITY_FACTORS";
const CHANGE_PRICE_FACTORS = "backTest/CHANGE_PRICE_FACTORS";
const CHANGE_GROWTH_POTENTIAL_FACTORS =
  "backTest/CHANGE_GROWTH_POTENTIAL_FACTORS";
const CHANGE_ACCELERATION_FACTORS = "backTest/CHANGE_ACCELERATION_FACTORS";
const CHANGE_CONSENSUS_FACTORS = "backTest/CHANGE_CONSENSUS_FACTORS";

// 백테스트 설정 부분
const CHANGE_BACKTEST_SETTINGS = "backTest/CHANGE_BACKTEST_SETTINGS";
const CHANGE_MONTH = "backTest/CHANGE_MONTH";
const CHANGE_MACRO_MARKET_SETTINGS = "backTest/CHANGE_MACRO_MARKET_SETTINGS";
const ADD_MACRO_MARKET_SETTINGS = "backTest/ADD_MACRO_MARKET_SETTINGS";
const REMOVE_MACRO_MARKET_SETTINGS = "backTest/REMOVE_MACRO_MARKET_SETTINGS";
const CHANGE_REENTRY_MARKET_SETTINGS = "backTest/REENTRY_MARKET_SETTINGS";
const CHANGE_DATE = "backTest/CHANGE_DATE";
const CHANGE_SPLITMODE = "backTest/CHANGE_SPLITMODE";

// 백테스트 공통 제목 부분
export const changeBackTestTitle = (payload) => ({
  type: CHANGE_TITLE,
  payload,
});

// 유니버스 부분
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

// 팩터 부분
export const chagneCalculationWeight = (payload) => ({
  type: CHANGE_CALCULATIONWEIGHT,
  payload,
});

export const changeValueFactors = (payload) => ({
  type: CHANGE_VALUE_FACTORS,
  payload,
});

export const changeEvFactors = (payload) => ({
  type: CHANGE_EV_FACTORS,
  payload,
});

export const chagneQualityFactors = (payload) => ({
  type: CHANGE_QUALITY_FACTORS,
  payload,
});

export const chagnePriceFactors = (payload) => ({
  type: CHANGE_PRICE_FACTORS,
  payload,
});

export const changeGrowthPotentialFactors = (payload) => ({
  type: CHANGE_GROWTH_POTENTIAL_FACTORS,
  payload,
});

export const changeAccelerationFactors = (payload) => ({
  type: CHANGE_ACCELERATION_FACTORS,
  payload,
});

export const chagneConsensusFactors = (payload) => ({
  type: CHANGE_CONSENSUS_FACTORS,
  payload,
});

// 백테스트 설정 부분
export const changeBacktestSettings = (payload) => ({
  type: CHANGE_BACKTEST_SETTINGS,
  payload,
});

export const changeMonthList = (payload) => ({
  type: CHANGE_MONTH,
  payload,
});

export const changeMacroMarketSettings = (payload) => ({
  type: CHANGE_MACRO_MARKET_SETTINGS,
  payload,
});

export const addMacroMarketSettings = (payload) => ({
  type: ADD_MACRO_MARKET_SETTINGS,
  payload,
});

export const removeMacroMarketSettings = (payload) => ({
  type: REMOVE_MACRO_MARKET_SETTINGS,
  payload,
});

export const changeReentryMarketSettings = (payload) => ({
  type: CHANGE_REENTRY_MARKET_SETTINGS,
  payload,
});

export const changeSplitMode = (payload) => ({
  type: CHANGE_SPLITMODE,
  payload,
});

export const changeDate = (payload) => ({
  type: CHANGE_DATE,
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
    case CHANGE_CALCULATIONWEIGHT:
      return {
        ...state,
        factors: {
          ...state.factors,
          ...action.payload,
        },
      };
    case CHANGE_VALUE_FACTORS:
      return {
        ...state,
        factors: {
          ...state.factors,
          valueFactors: [...action.payload],
        },
      };
    case CHANGE_EV_FACTORS:
      return {
        ...state,
        factors: {
          ...state.factors,
          evFactors: [...action.payload],
        },
      };
    case CHANGE_QUALITY_FACTORS:
      return {
        ...state,
        factors: {
          ...state.factors,
          qualityFactors: [...action.payload],
        },
      };
    case CHANGE_PRICE_FACTORS:
      return {
        ...state,
        factors: {
          ...state.factors,
          priceFactors: [...action.payload],
        },
      };
    case CHANGE_GROWTH_POTENTIAL_FACTORS:
      return {
        ...state,
        factors: {
          ...state.factors,
          growthPotentialFactors: [...action.payload],
        },
      };
    case CHANGE_ACCELERATION_FACTORS:
      return {
        ...state,
        factors: {
          ...state.factors,
          accelerationFactors: [...action.payload],
        },
      };
    case CHANGE_CONSENSUS_FACTORS:
      return {
        ...state,
        factors: {
          ...state.factors,
          consensusFactors: [...action.payload],
        },
      };
    case CHANGE_BACKTEST_SETTINGS:
      return {
        ...state,
        backtestSettings: {
          ...state.backtestSettings,
          ...action.payload,
        },
      };
    case CHANGE_MONTH:
      return {
        ...state,
        backtestSettings: {
          ...state.backtestSettings,
          seasonalityMonthList: [...action.payload],
        },
      };
    case CHANGE_MACRO_MARKET_SETTINGS:
      return {
        ...state,
        macroMarketTiming: [...state.macroMarketTiming, action.payload],
      };
    case ADD_MACRO_MARKET_SETTINGS:
      return {
        ...state,
        macroMarketTiming: state.macroMarketTiming.concat(action.payload),
      };
    case REMOVE_MACRO_MARKET_SETTINGS:
      return {
        ...state,
        macroMarketTiming: [...state.macroMarketTiming].splice(
          action.payload,
          1
        ),
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
export default backTest;
