// 유니버스 부분

export const UNIVERS = [
  {
    id: 1,
    name: "한국",
  },
  {
    id: 2,
    name: "미국",
  },
  {
    id: 3,
    name: "KOSPI",
  },
  {
    id: 4,
    name: "KOSDAQ",
  },
];

export const INITIAL_FITERS = [
  {
    id: 1,
    name: "금융주 제외",
  },
  {
    id: 2,
    name: "지주사 제외",
  },
  {
    id: 3,
    name: "관리종목 제외",
  },
  {
    id: 4,
    name: "적자기업 제외",
  },
  {
    id: 5,
    name: "적자기업 제외(년간)",
  },
  {
    id: 6,
    name: "중국기업 제외",
  },
  {
    id: 7,
    name: "PTP 기업 제외",
  },
  {
    id: 8,
    name: "소형주 하위 20%만",
  },
];

export const EXCEPT_SECTORS = [
  {
    id: 1,
    name: "건강관리",
  },
  {
    id: 2,
    name: "자동차",
  },
  {
    id: 3,
    name: "화장품,의류,완구",
  },
  {
    id: 4,
    name: "보험",
  },
  {
    id: 5,
    name: "필수 소비재",
  },
  {
    id: 6,
    name: "운송",
  },
  {
    id: 7,
    name: "상사,자본재",
  },
  {
    id: 8,
    name: "비철,목재 등",
  },
  {
    id: 9,
    name: "화학",
  },
  {
    id: 10,
    name: "건설,건축관련",
  },
  {
    id: 11,
    name: "에너지",
  },
  {
    id: 12,
    name: "기계",
  },
  {
    id: 13,
    name: "철강",
  },
  {
    id: 14,
    name: "반도체",
  },
  {
    id: 15,
    name: "IT 하드웨어",
  },
  {
    id: 16,
    name: "통신서비스",
  },
  {
    id: 17,
    name: "증권",
  },
  {
    id: 18,
    name: "디스플레이",
  },
  {
    id: 19,
    name: "IT 가전",
  },
  {
    id: 20,
    name: "소매(유통)",
  },
  {
    id: 21,
    name: "유틸리티",
  },
  {
    id: 22,
    name: "미디어,교육",
  },
  {
    id: 23,
    name: "은행",
  },
  {
    id: 24,
    name: "호텔,레저서비스",
  },
  {
    id: 25,
    name: "소프트웨어",
  },
  {
    id: 26,
    name: "조선",
  },
];

// 팩터 부분

export const FACTORS = [
  {
    id: 1,
    name: "동일 비중 결합",
  },
  {
    id: 2,
    name: "가변 비중 결합(지원 예정)",
  },
  {
    id: 3,
    name: "최적 비중 산출(지원 예정)",
  },
];

export const VALUE_FACTORS = [
  {
    id: 1,
    name: "시가총액",
    text: "기업의 시가총액. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 2,
    name: "PER",
    text: "PER = 시가총액 / 당기순이익(지배, 최근분기). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 3,
    name: "PER (TTM)",
    text: "PER (TTM) = 시가총액 / 당기순이익(지배, 최근 4분기 합산). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 4,
    name: "PBR",
    text: "PBR = 시가총액 / 자본총계(지배, 최근분기). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 5,
    name: "PSR",
    text: "PSR = 시가총액 / 매출액(최근분기). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 6,
    name: "PSR (TTM)",
    text: "PSR (TTM) = 시가총액 / 매출액(최근 4분기 합산). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 7,
    name: "POR",
    text: "POR = 시가총액 / 영업이익(최근분기). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 8,
    name: "POR (TTM)",
    text: "POR (TTM) = 시가총액 / 영업이익(최근 4분기 합산). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 9,
    name: "PCR",
    text: "PCR = 시가총액 / 영업활동으로 인한 현금으로(최근분기). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 10,
    name: "PCR (TTM)",
    text: "PCR (TTM) = 시가총액 / 영업활동으로 인한 현금으로(최근 4분기 합산). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 11,
    name: "PFCR",
    text: "PFCR = 시가총액 / Free Cash Flow. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 12,
    name: "PRR",
    text: "PRR = 시가총액 / 연구 개발비. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 13,
    name: "PGPR",
    text: "PGPR = (최근분기). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 14,
    name: "PGPR (TTM)",
    text: "PGPR (TTM) = 시가총액 / 매출 총이익 (최근 4분기 합산). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 15,
    name: "PEG",
    text: "PEG = PER / EPS성장률 (1년). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 16,
    name: "PAR",
    text: "PAR = 시가총액 / 자산총계. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 17,
    name: "PACR",
    text: "PACR = 시가총액 / 발생액(영업활동으로 인한 현금흐름 - 순이익). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 18,
    name: "PITR",
    text: "PITR = 시가총액 / 무형자산. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 19,
    name: "NCAV",
    text: "NCAV = 기업의 청산가치 (유동자산 - 총부채) / 시가총액. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 20,
    name: "배당수익률",
    text: "배당수익률. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 21,
    name: "주주수익률",
    text: "주주수익률, 배당수익률 + 자사주매입으로 인한 수익률 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
];
export const EV_FACTORS = [
  {
    id: 1,
    name: "EV",
    text: "EV = 시가총액 + 순부채. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 2,
    name: "EV/Net",
    text: "EV/Net = EV / 당기순이익(지베, 최근분기). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 3,
    name: "EV/Sales",
    text: "EV/Sales = EV / 매출액. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 4,
    name: "EV/EBITDA",
    text: "EV/EBITDA = EV / EBITDA. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 5,
    name: "EV/EBIT",
    text: "EV/EBIT = EV / EBIT. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 6,
    name: "EV/GP",
    text: "EV/GP = EV / 매출총이익. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 7,
    name: "EV/R&D",
    text: "EV/R&D = EV / 연구개발비. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 8,
    name: "EV/CF",
    text: "EV/AC = EV / 영업활동으로 인한 현금흐름. 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 9,
    name: "EV/AC",
    text: "EV/AC = EV / 발생액(영업활동으로 인한 현금흐름 - 순이익). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
];
export const QUALITY_FACTORS = [
  {
    id: 1,
    name: "ROE",
    text: "ROE = 당기 순이익 (지베, 최근분기) / 자본총계 (지배, 최근분기). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 2,
    name: "ROE (TTM)",
    text: "ROE (TTM) = 당기 순이익 (지베, 최근 4분기 합산) / 자본총계 (지배, 최근분기). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 3,
    name: "ROA",
    text: "ROA = 당기 순이익 (지베, 최근분기) / 자산총계. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 4,
    name: "ROA (TTM)",
    text: "ROA (TTM) = 당기 순이익 (지베, 최근 4분기 합산) / 자본총계 (지배, 최근분기). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 5,
    name: "ROIC",
    text: "ROIC = 영업이익 / 투하 자본. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 6,
    name: "GPIC",
    text: "GPIC = 매출 총이익 / 투하자본. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 7,
    name: "RIC",
    text: "RIC = 매출액 / 투하자본. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 8,
    name: "GP/E",
    text: "GP/E = 매출총이익 / 자본총계 (지배, 최근분기). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 9,
    name: "GP/A",
    text: "GP/A = 매출총이익 / 자산총계. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 10,
    name: "GP/A (TTM)",
    text: "GP/A (TTM) = 매출총이익 (지배, 최근 4분기 합산) / 자산총계. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 11,
    name: "GP/IT",
    text: "GP/IT = 매출총이익 / 무형자산. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 12,
    name: "무형자산 Turnover",
    text: "무형자산 Turnover = 매출액 / 무형자산. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 13,
    name: "OP/IT",
    text: "OP/IT = 영업이익 / 무형자산. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 14,
    name: "ROIT",
    text: "ROIT = 순이익 / 무형자산. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 15,
    name: "Asset Turnover",
    text: "Asset Turnover = 매출액 / 자산총계. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 16,
    name: "Asset Turnover (TTM)",
    text: "Asset Turnover (TTM) = 매출액(TTM) / 자산총계. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 17,
    name: "GPM",
    text: "GPM = 매출총이익 / 매출액. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 18,
    name: "OPM",
    text: "OPM = 영업이익 / 매출액. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 19,
    name: "NPM",
    text: "NPM = 순이익 / 매출액. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 20,
    name: "F-source",
    text: "F-source = 기업의 우량성을 평가하는 평가항목 9개로 구성. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 21,
    name: "R&D / 매출액",
    text: "R&D / 매출액. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 22,
    name: "R&D / 매출총이익",
    text: "R&D / 매출총이익. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 23,
    name: "R&D / 영업이익",
    text: "R&D / 영업이익. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 24,
    name: "R&D / 순이익",
    text: "R&D / 순이익. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 25,
    name: "AC/A",
    text: "AC/A = 발생액 / 자산총계. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 26,
    name: "AC/E",
    text: "AC/E = 발생액 / 자본총계 (지배). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 27,
    name: "변동성 (52주)",
    text: "변동성 (52주). 낮으면 낮을수록 주가의 등락폭이 낮음을 의미합니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 28,
    name: "변동성 (60일)",
    text: "변동성 (60일). 낮으면 낮을수록 주가의 등락폭이 낮음을 의미합니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 29,
    name: "영업이익 / 차입금",
    text: "영업이익 / 차입금 비율. 높을수록 영업이익 대비 차입금 비율이 우수함을 의미합니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 30,
    name: "차입금비율",
    text: "차입금비율 = 차입금 / 자본총계. 낮으면 낮을수록 기업의 재무진정성이 우수함을 의미합니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 31,
    name: "유보율",
    text: "유보율. (자본잉여금 + 이익잉여금)/자본금. 높으면 높을수록 기업의 유보금이 자본 대비 많아 안정적임을 의미합니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 32,
    name: "이익변동성",
    text: "이익변동성 (지난 12분기). 낮으면 낮을수록 기업의 이익변동성이 작고 안정적임을 의미합니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 33,
    name: "유동비율",
    text: "유동비율. 유동자산 / 유동부채. 높으면 높을수록 기업의 재무건전성이 우수함을 의미합니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 34,
    name: "Altman Z-source",
    text: "Altman Z-source. 기업의 건전성을 스코어화 시킨 지표로, 높을수록 재무건전성이 우수함을 의미합니다.",
    aggravated: 1,
    topAndBottom: "",
  },
];
export const PRICE_FACTORS = [
  {
    id: 1,
    name: "1개월 모멘텀",
    text: "1개월 모멘텀. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 2,
    name: "3개월 모멘텀",
    text: "3개월 모멘텀. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 3,
    name: "6개월 모멘텀",
    text: "6개월 모멘텀. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 4,
    name: "12개월 모멘텀",
    text: "12개월 모멘텀. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 5,
    name: "종가 (수정 전)",
    text: "종가 (수정주가 적용 전)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 6,
    name: "샤프비율",
    text: "샤프비율 = 1년간 수익률 / 1년간 일별수익률의 변동성 ",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 7,
    name: "샤프비율 모멘텀 (20일)",
    text: "샤프비율 모멘텀 (20일)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 8,
    name: "샤프비율 모멘텀 (60일)",
    text: "샤프비율 모멘텀 (60일)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 9,
    name: "샤프비율 모멘텀 (120일)",
    text: "샤프비율 모멘텀 (120일)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 10,
    name: "샤프비율 모멘텀 (200일)",
    text: "샤프비율 모멘텀 (200일)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 11,
    name: "Sortino 비율",
    text: "Sortino 비율 = 1년간 수익률 / 1년간 일별수익률의 하락 변동성",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 12,
    name: "Sortino 비율 모멘텀 (20일)",
    text: "Sortino 비율 모멘텀 (20일)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 13,
    name: "Sortino 비율 모멘텀 (60일)",
    text: "Sortino 비율 모멘텀 (60일)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 14,
    name: "Sortino 비율 모멘텀 (120일)",
    text: "Sortino 비율 모멘텀 (120일)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 15,
    name: "Sortino 비율 모멘텀 (200일)",
    text: "Sortino 비율 모멘텀 (200일)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 16,
    name: "RSI (9일)",
    text: "RSI (상대강도지수 9일). 과매수와 과매도를 측정하는 지표입니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 17,
    name: "RSI (14일)",
    text: "RSI (상대강도지수 14일). 과매수와 과매도를 측정하는 지표입니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 18,
    name: "RSI (25일)",
    text: "RSI (상대강도지수 25일). 과매수와 과매도를 측정하는 지표입니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 19,
    name: "베타",
    text: "베타. 시장과 상관성을 의미합니다.(최근 1년)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 20,
    name: "베타 (60일)",
    text: "베타. 시장과 상관성을 의미합니다.(최근 60일)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 21,
    name: "절대값 베타",
    text: "절대값 베타. 낮으면 낮을수록 음이든 양이든 시장과 상관성이 0으로 수렴함을 의미합니다.(최근 1년)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 22,
    name: "절대값 베타 (60일)",
    text: "절대값 베타. 낮으면 낮을수록 음이든 양이든 시장과 상관성이 0으로 수렴함을 의미합니다.(최근 60일)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 23,
    name: "개인순매수강도",
    text: "개인순매수강도 (개인순매수대금 / 시가총액)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 24,
    name: "기관순매수강도",
    text: "기관순매수강도 (기관순매수대금 / 시가총액)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 25,
    name: "외인순매수강도",
    text: "외인순매수강도 (외인순매수대금 / 시가총액)",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 26,
    name: "기관/외인순매수강도",
    text: "기관/외인순매수강도 (기관/외인순매수대금 / 시가총액) ",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 27,
    name: "거래대금 회전율",
    text: "거래대금 회전율 (20일 평균값)",
    aggravated: 1,
    topAndBottom: "",
  },
];
export const GROWTH_POTENTIAL_FACTORS = [
  {
    id: 1,
    name: "순이익성장률 (QoQ)",
    text: "순이익성장률 (QoQ). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 2,
    name: "순이익성장률 (YoY)",
    text: "순이익성장률 (YoY). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 3,
    name: "영업이익성장률 (QoQ)",
    text: "영업이익성장률 (QoQ). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 4,
    name: "영업이익성장률(YoY)",
    text: "영업이익성장률(YoY). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 5,
    name: "매출총이익성장률 (QoQ)",
    text: "매출총이익성장률 (QoQ). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 6,
    name: "매출총이익성장률 (YoY)",
    text: "매출총이익성장률 (YoY). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 7,
    name: "매출액성장률 (QoQ)",
    text: "매출액성장률 (QoQ). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 8,
    name: "매출액성장률 (YoY)",
    text: "매출액성장률 (YoY). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 9,
    name: "자산성장률(QoQ)",
    text: "자산성장률(QoQ). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 10,
    name: "자산성장률 (YoY)",
    text: "자산성장률 (YoY). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 11,
    name: "자본성장률 (QoQ)",
    text: "자본성장률 (QoQ). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 12,
    name: "자본성장률 (YoY)",
    text: "자본성장률 (YoY). 통계적으로 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 13,
    name: "GP/A성장률 (QoQ)",
    text: "GP/A성장률 (QoQ). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 14,
    name: "GP/A성장률 (YoY)",
    text: "GP/A성장률 (YoY). 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 15,
    name: "영업이익 / 차입금 성장 (YoY)",
    text: "영업이익 / 차입금 성장 (YoY). 높을수록 영업이익 대비 차입금 비율이 개선되고 있음을 의미합니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 16,
    name: "영업이익 / 차입금 성장 (QoQ)",
    text: "영업이익 / 차입금 성장 (QoQ). 높을수록 영업이익 대비 차입금 비율이 개선되고 있음을 의미합니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 17,
    name: "현금흐름 성장 (QoQ)",
    text: "현금흐름 성장 (QoQ). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 18,
    name: "현금흐름 성장 (YoY)",
    text: "현금흐름 성장 (YoY). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 19,
    name: "연구개발비 지출 성장 (QoQ)",
    text: "연구개발비 지출 성장 (QoQ). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 20,
    name: "연구개발비 지출 성장 (YoY)",
    text: "연구개발비 지출 성장 (YoY). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 21,
    name: "보유 현금성자산 성장(QoQ)",
    text: "보유 현금성자산 성장(QoQ). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 22,
    name: "보유 현금성자산 성장 (YoY)",
    text: "보유 현금성자산 성장 (YoY). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 23,
    name: "차입금 성장 (QoQ)",
    text: "차입금 성장 (QoQ). 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 24,
    name: "차입금 성장 (YoY)",
    text: "차입금 성장 (YoY). 낮을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 25,
    name: "배당수익률 성장(QoQ)",
    text: "배당수익률 성장(QoQ). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 26,
    name: "배당수익률 성장 (YoY)",
    text: "배당수익률 성장 (YoY). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
];
export const CONSENSUS_FACTORS = [
  {
    id: 1,
    name: "이동평균 모멘텀 가속 (3/3/10)",
    text: "3일동안 이동평균선의 3개월 모멘텀의 10일 변화율을 측정한 지표입니다. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 2,
    name: "이동평균 모멘텀 가속(3 / 12 / 5)",
    text: "3일동안 이동평균선의 1년 모멘텀의 5일 변화율을 측정한 지표입니다. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 3,
    name: "이동평균 모멘텀 가속(10 / 1 / 5)",
    text: "10일동안 이동평균선의 1개월 모멘텀의 5일 변화율을 측정한 지표입니다. 통계적으로 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 4,
    name: "순이익성장 가속 (YoY)",
    text: "YOY 순이익 성장의 성장률을 측정한 지표입니다.(YoY). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 5,
    name: "순이익성장 가속 (QoQ)",
    text: "YOY 순이익 성장의 성장률을 측정한 지표입니다.(QoQ). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 6,
    name: "매출액성장 가속 (YoY)",
    text: "YOY 매출액 성장의 성장률을 측정한 지표입니다.(YoY). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 7,
    name: "매출액성장 가속 (QoQ)",
    text: "YOY 매출액 성장의 성장률을 측정한 지표입니다.(QoQ). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 8,
    name: "매출총이익 성장 가속 (YoY)",
    text: "YOY 매출총이익 성장의 성장률을 측정한 지표입니다.(YoY). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 9,
    name: "매출총이익 성장 가속 (QoQ)",
    text: "YOY 매출총이익 성장의 성장률을 측정한 지표입니다.(QoQ). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 10,
    name: "영업이익 성장 가속 (YoY)",
    text: "YOY 영업이익 성장의 성장률을 측정한 지표입니다.(YoY). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 11,
    name: "영업이익 성장 가속 (QoQ)",
    text: "YOY 영업이익 성장의 성장률을 측정한 지표입니다.(QoQ). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 12,
    name: "영업활동현금흐름 성장 가속 (YoY)",
    text: "YOY 영업활동현금흐름 성장의 성장률을 측정한 지표입니다.(YoY). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 13,
    name: "영업활동현금흐름 성장 가속 (QoQ)",
    text: "YOY 영업활동현금흐름 성장의 성장률을 측정한 지표입니다.(QoQ). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 14,
    name: "발생액 성장 가속 (YoY)",
    text: "YOY 발생액 성장의 성장률을 측정한 지표입니다(YoY). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 15,
    name: "발생액 성장 가속 (QoQ)",
    text: "YOY 발생액 성장의 성장률을 측정한 지표입니다(QoQ). 높을수록 초과수익률이 높습니다.",
    aggravated: 1,
    topAndBottom: "",
  },
];
export const ACCELERATION_FACTORS = [
  {
    id: 1,
    name: "매출액 어닝서프라이즈 (%)",
    text: "매출액 어닝서프라이즈 (%). 분기 매출액의 컨센선스 대비 증가폭을 나타냅니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 2,
    name: "영업이익 어닝서프라이즈 (%)",
    text: "영업이익 어닝서프라이즈 (%). 분기 매출액의 컨센선스 대비 증가폭을 나타냅니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 3,
    name: "순이익 어닝서프라이즈 (%)",
    text: "순이익 어닝서프라이즈 (%). 분기 매출액의 컨센선스 대비 증가폭을 나타냅니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 4,
    name: "매출액 어닝서프라이즈 성장 (QoQ)",
    text: "매출액 어닝서프라이즈 성장 (QoQ). 매출액 어닝서프라이즈의 전분기 대비 증가폭을 나타냅니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 5,
    name: "영업이익 어닝서프라이즈 성장 (QoQ)",
    text: "영업이익 어닝서프라이즈 성장 (QoQ). 영업이익 어닝서프라이즈의 전분기 대비 증가폭을 나타냅니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 6,
    name: "순이익 어닝서프라이즈 성장(QoQ)",
    text: "순이익 어닝서프라이즈 성장(QoQ). 순이익 어닝서프라이즈의 전분기 대비 증가폭을 나타냅니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 7,
    name: "매출액 어닝서프라이즈 성장 (YoY)",
    text: "매출액 어닝서프라이즈 성장 (YoY). 매출액 어닝서프라이즈의 전년동기 대비 증가폭을 나타냅니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 8,
    name: "영업이익 어닝서프라이즈 성장 (YoY)",
    text: "영업이익 어닝서프라이즈 성장 (YoY). 영업이익 어닝서프라이즈의 전년동기 대비 증가폭을 나타냅니다.",
    aggravated: 1,
    topAndBottom: "",
  },
  {
    id: 9,
    name: "순이익 어닝서프라이즈 성장 (YoY)",
    text: "순이익 어닝서프라이즈 성장 (YoY). 순이익 어닝서프라이즈의 전년동기 대비 증가폭을 나타냅니다.",
    aggravated: 1,
    topAndBottom: "",
  },
];

export const PERIODICBALANCINGLIST = [
  {
    id: 1,
    name: "월별",
  },
  {
    id: 2,
    name: "분기별",
  },
  {
    id: 3,
    name: "반기별",
  },
  {
    id: 4,
    name: "매년",
  },
  {
    id: 5,
    name: "시즈널리티",
  },
];

export const MONTH_LIST = [
  { id: 1, month: "01월" },
  { id: 2, month: "02월" },
  { id: 3, month: "03월" },
  { id: 4, month: "04월" },
  { id: 5, month: "05월" },
  { id: 6, month: "06월" },
  { id: 7, month: "07월" },
  { id: 8, month: "08월" },
  { id: 9, month: "09월" },
  { id: 10, month: "10월" },
  { id: 11, month: "11월" },
  { id: 12, month: "12월" },
];

export const SPECIFICGRAVITYCONTROLLIST = [
  {
    id: 1,
    name: "동일 비중",
  },
  {
    id: 2,
    name: "가치 가중(지원 예정)",
  },
  {
    id: 3,
    name: "변동성 최저(지원 예정)",
  },
  {
    id: 4,
    name: "샤프 극대화(지원 예정)",
  },
];

export const MACRO_MARKET_LIST = [
  {
    id: 1,
    name: "미)장단기금리차 (10년-2년)",
  },
  {
    id: 2,
    name: "미)장단기금리차 (10년-3개월)",
  },
  {
    id: 3,
    name: "미)장단기금리차 (10년-1년)",
  },
  {
    id: 4,
    name: "현)장단기금리차 (10년-1년)",
  },
  {
    id: 5,
    name: "미) 하이일드 스프레드",
  },
  {
    id: 6,
    name: "원/달러 환율",
  },
  {
    id: 7,
    name: "구리선물",
  },
  {
    id: 8,
    name: "코스피 이격도 (3일)",
  },
  {
    id: 9,
    name: "코스피 이격도 (5일)",
  },
  {
    id: 10,
    name: "코스피 이격도 (10일)",
  },
  {
    id: 11,
    name: "코스피 이격도 (20일)",
  },
  {
    id: 12,
    name: "코스피 이격도 (60일)",
  },
  {
    id: 13,
    name: "코스피 이격도 (200일)",
  },
  {
    id: 14,
    name: "코스닥 이격도 (3일)",
  },
  {
    id: 15,
    name: "코스닥 이격도 (5일)",
  },
  {
    id: 16,
    name: "코스닥 이격도 (10일)",
  },
  {
    id: 17,
    name: "코스닥 이격도 (20일)",
  },
  {
    id: 18,
    name: "코스닥 이격도 (60일)",
  },
  {
    id: 19,
    name: "코스닥 이격도 (200일)",
  },
  {
    id: 20,
    name: "S&P500 이격도 (3일)",
  },
  {
    id: 21,
    name: "S&P500 이격도 (5일)",
  },
  {
    id: 22,
    name: "S&P500 이격도 (10일)",
  },
  {
    id: 23,
    name: "S&P500 이격도 (20일)",
  },
  {
    id: 24,
    name: "S&P500 이격도 (60일)",
  },
  {
    id: 25,
    name: "S&P500 이격도 (200일)",
  },
  {
    id: 26,
    name: "나스닥 이격도 (3일)",
  },
  {
    id: 27,
    name: "나스닥 이격도 (5일)",
  },
  {
    id: 28,
    name: "나스닥 이격도 (10일)",
  },
  {
    id: 29,
    name: "나스닥 이격도 (20일)",
  },
  {
    id: 30,
    name: "나스닥 이격도 (60일)",
  },
  {
    id: 31,
    name: "나스닥 이격도 (200일)",
  },
];

export const PARTNER_ASSET_LIST = [
  {
    id: 1,
    name: "한국 ETF",
  },
  {
    id: 2,
    name: "한국 주식",
  },
];

export const STRATEGY_REBALNCINGS = [
  {
    id: 1,
    name: "전량 매수/매도",
  },
  {
    id: 2,
    name: "분할 매수/매도",
  },
];

export const STRATEGY_ALLOCACTION_LIST = [
  {
    id: 1,
    name: "전략배분 (정적자산배분)",
  },
  {
    id: 2,
    name: "듀얼모멘텀",
  },
  {
    id: 3,
    name: "VAA",
  },
  {
    id: 4,
    name: "DAA",
  },
  {
    id: 5,
    name: "BAA 공격형",
  },
  {
    id: 6,
    name: "BAA 중도형",
  },
  {
    id: 7,
    name: "LAA",
  },
  {
    id: 8,
    name: "HAA",
  },
  {
    id: 9,
    name: "변형듀얼모멘텀",
  },
  {
    id: 10,
    name: "가속듀얼모멘텀",
  },
];

export const PERIODICALLOCBALANCINGLIST = [
  {
    id: 1,
    name: "월별",
  },
  {
    id: 2,
    name: "분기별",
  },
  {
    id: 3,
    name: "반기별",
  },
  {
    id: 4,
    name: "매년",
  },
  {
    id: 5,
    name: "시즈널리티",
  },
  {
    id: 6,
    name: "하지 않음 (Buy-and-Hold)",
  },
];

export const STRATEGYLIST = [
  {
    id: 1,
    kind: "한국 자산군",
    value: "KR",
  },
  {
    id: 2,
    kind: "미국 자산군",
    value: "US",
  },
  {
    id: 3,
    kind: "전략",
    value: "",
  },
  {
    id: 4,
    kind: "한국 ETF",
    value: "KR",
  },
  {
    id: 5,
    kind: "미국 ETF",
    value: "US",
  },
  {
    id: 6,
    kind: "한국 주식",
    value: "KR",
  },
  {
    id: 7,
    kind: "미국 주식",
    value: "US",
  },
];
