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
const CHECKED_FACTORS = "backTest/CHECKED_FACTORS";
const CHANGE_FACTORS = "backTest/CHANGE_FACTORS";

// 백테스트 설정 부분
const CHANGE_BACKTEST_SETTINGS = "backTest/CHANGE_BACKTEST_SETTINGS";
const CHANGE_MONTH = "backTest/CHANGE_MONTH";
const CHANGE_MACRO_MARKET_SETTINGS = "backTest/CHANGE_MACRO_MARKET_SETTINGS";
const ADD_MACRO_MARKET_SETTINGS = "backTest/ADD_MACRO_MARKET_SETTINGS";
const REMOVE_MACRO_MARKET_SETTINGS = "backTest/REMOVE_MACRO_MARKET_SETTINGS";
const ALL_REMOVE_MACRO_MARKET_SETTINGS =
  "backTest/ALL_REMOVE_MACRO_MARKET_SETTINGS";
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
export const changeCalculationWeight = (payload) => ({
  type: CHANGE_CALCULATIONWEIGHT,
  payload,
});

export const checkedFactors = (payload, factorType) => ({
  type: CHECKED_FACTORS,
  payload,
  factorType,
});

export const changeFactors = (factorType, index, name, value) => ({
  type: CHANGE_FACTORS,
  payload: {
    factorType,
    index,
    name,
    value,
  },
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

export const changeMacroMarketSettings = (index, name, value) => ({
  type: CHANGE_MACRO_MARKET_SETTINGS,
  payload: {
    index,
    name,
    value,
  },
});

export const addMacroMarketSettings = (payload) => ({
  type: ADD_MACRO_MARKET_SETTINGS,
  payload,
});

export const removeMacroMarketSettings = (payload) => ({
  type: REMOVE_MACRO_MARKET_SETTINGS,
  payload,
});

export const allRemoveMacroMarketSettings = () => ({
  type: ALL_REMOVE_MACRO_MARKET_SETTINGS,
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
    case CHECKED_FACTORS:
      console.log("[action.factorType] ", [action.factorType]);

      console.log("[...action.payload] ", [...action.payload]);

      return {
        ...state,
        factors: {
          ...state.factors,
          [action.factorType]: [...action.payload],
        },
      };
    case CHANGE_FACTORS: {
      const { factorType, index, name, value } = action.payload;
      return {
        ...state,
        factors: {
          ...state.factors,
          [factorType]: state.factors[factorType].map((item, i) => {
            if (i === index) {
              return {
                ...item,
                [name]: value,
              };
            }
            return item;
          }),
        },
      };
    }
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
    case CHANGE_MACRO_MARKET_SETTINGS: {
      const { index, name, value } = action.payload;
      return {
        ...state,
        macroMarketTiming: state.macroMarketTiming.map((item, i) => {
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
    case ADD_MACRO_MARKET_SETTINGS:
      return {
        ...state,
        macroMarketTiming: state.macroMarketTiming.concat(action.payload),
      };
    case REMOVE_MACRO_MARKET_SETTINGS:
      return {
        ...state,
        macroMarketTiming: state.macroMarketTiming.filter(
          (item, i) => i !== action.payload
        ),
      };
    case ALL_REMOVE_MACRO_MARKET_SETTINGS:
      return {
        ...state,
        macroMarketTiming: [],
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
