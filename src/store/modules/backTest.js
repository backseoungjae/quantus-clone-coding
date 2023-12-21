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
  },
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
    default:
      return state;
  }
}
export default backTest;
