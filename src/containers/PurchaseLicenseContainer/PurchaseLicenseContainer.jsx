import React, { useCallback, useState } from "react";
import PurchaseLicense from "components/PurchaseLicense";
import usePurchase from "hooks/usePurchase";

const TAB_BUTTONS = [
  {
    id: 1,
    name: "구독권",
  },
  {
    id: 2,
    name: "실전 투자권",
  },
];

const SEASON_TICKET_LIST = [
  { id: 1, name: "1년권" },
  { id: 2, name: "3개월권" },
];

const INVESTMENT_TICKET_LIST = [
  { id: 1, name: "1년권" },
  { id: 2, name: "1개월권" },
];

const FOREIGN_COUNTRY_LIST = [
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
    name: "글로벌",
  },
];

export default function PurchaseLicenseContainer() {
  const [tabType, setTabType] = useState("구독권");

  const handleTabType = useCallback((tab) => {
    setTabType(tab);
  }, []);

  // 하단에 나오는 구매 상품
  const [seasonTicket, setSeasonTicket] = useState("1년권");
  const [foreignCountry, setForeignCountry] = useState("한국");
  const [toggle, setToggle] = useState(false);

  const SUBSCRIPTION_ITEMS = [
    {
      id: 1,
      name: "매일 30게이지",
      text: `매일 매일 30게이지가 ${seasonTicket.slice(
        0,
        -1
      )}동안\n지급됩니다.`,
      list: [
        {
          id: 1,
          name: "백테스트 가능",
        },
        {
          id: 2,
          name: "자산배분 가능",
        },
        {
          id: 3,
          name: "포트 추출 무제한",
        },
      ],
      price: "월 16,583원",
      monthPrice: "월 19,667원",
      monthGlobalPrice: "월 33,000원",
      globalPrice: "월 24,917원",
    },
    {
      id: 2,
      name: "매일 100게이지",
      text: `매일 매일 100게이지가 ${seasonTicket.slice(
        0,
        -1
      )}동안\n지급됩니다.`,
      list: [
        {
          id: 1,
          name: "백테스트 가능",
        },
        {
          id: 2,
          name: "자산배분 가능",
        },
        {
          id: 3,
          name: "포트 추출 무제한",
        },
      ],
      price: "월 21,583원",
      monthPrice: "월 29,667원",
      monthGlobalPrice: "월 46,333원",
      globalPrice: "월 31,583원",
    },
    {
      id: 3,
      name: "매일 무제한 게이지",
      text: `매일 매일 무제한 게이지게이지가 ${seasonTicket.slice(
        0,
        -1
      )}동안\n지급됩니다.`,
      list: [
        {
          id: 1,
          name: "백테스트 가능",
        },
        {
          id: 2,
          name: "자산배분 가능",
        },
        {
          id: 3,
          name: "포트 추출 무제한",
        },
      ],
      price: "월 29,917원",
      monthPrice: "월 43,000원",
      monthGlobalPrice: "월 66,333원",
      globalPrice: "월 41,583원",
    },
  ];

  const INVESTMENT_ITEMS = [
    {
      id: 1,
      name: `베이직 ${seasonTicket}`,
      text: `4,000만원 이하로 \n실전 투자가 가능합니다.`,
      list: [
        {
          id: 1,
          name: "TWAP 무제한",
        },
        {
          id: 2,
          name: "손절 가능 (지원 예정)",
        },
        {
          id: 3,
          name: "마켓 타이밍 가능",
        },
        {
          id: 4,
          name: "실시간 질의응답 불가능 (텔레그램)",
        },
      ],
      price: "월 12,500원",
      monthPrice: "월 15,000원",
    },
    {
      id: 2,
      name: `플로스 ${seasonTicket}`,
      text: `1억원 이후로 \n실전 투자가 가능합니다.`,
      list: [
        {
          id: 1,
          name: "TWAP 무제한",
        },
        {
          id: 2,
          name: "손절 가능 (지원 예정)",
        },
        {
          id: 3,
          name: "마켓 타이밍 가능",
        },
        {
          id: 4,
          name: "실시간 질의응답 불가능 (텔레그램)",
        },
      ],
      price: "월 25,000원",
      monthPrice: "월 33,000원",
    },
    {
      id: 3,
      name: `프리미엄 ${seasonTicket}`,
      text: `금액 제한 없이 \n실전 투자가 가능합니다.`,
      list: [
        {
          id: 1,
          name: "TWAP 무제한",
        },
        {
          id: 2,
          name: "손절 가능 (지원 예정)",
        },
        {
          id: 3,
          name: "마켓 타이밍 가능",
        },
        {
          id: 4,
          name: "실시간 질의응답 불가능 (텔레그램)",
        },
      ],
      price: "월 37,500원",
      monthPrice: "월 50,000원",
    },
  ];

  const handleSeasonTicket = useCallback((season) => {
    setSeasonTicket(season);
  }, []);

  const handleInvestmentTicket = useCallback((season) => {
    setSeasonTicket(season);
  }, []);

  const handleForeignCountry = useCallback((foreign) => {
    setForeignCountry(foreign);
  }, []);

  // 모달 나오는 부분 이벤트
  const { purchase, handlePurchaseSettings } = usePurchase();
  const [step, setStep] = useState(1);

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);

  const handleStep = useCallback((i) => {
    setStep(i);
  }, []);

  const handleChagnePurchaseSettings = useCallback(
    (e) => {
      handlePurchaseSettings({
        [e.target.name]: e.target.value,
      });
    },
    [handlePurchaseSettings]
  );

  const handleAmount = useCallback(() => {
    alert("결제가 완료 되었습니다.");
    setToggle(false);
  }, []);

  return (
    <PurchaseLicense
      TAB_BUTTONS={TAB_BUTTONS}
      tabType={tabType}
      handleTabType={handleTabType}
      foreignCountry={foreignCountry}
      seasonTicket={seasonTicket}
      handleSeasonTicket={handleSeasonTicket}
      handleInvestmentTicket={handleInvestmentTicket}
      handleForeignCountry={handleForeignCountry}
      toggle={toggle}
      handleToggle={handleToggle}
      step={step}
      handleStep={handleStep}
      purchase={purchase}
      handleChagnePurchaseSettings={handleChagnePurchaseSettings}
      handleAmount={handleAmount}
      SEASON_TICKET_LIST={SEASON_TICKET_LIST}
      INVESTMENT_TICKET_LIST={INVESTMENT_TICKET_LIST}
      FOREIGN_COUNTRY_LIST={FOREIGN_COUNTRY_LIST}
      SUBSCRIPTION_ITEMS={SUBSCRIPTION_ITEMS}
      INVESTMENT_ITEMS={INVESTMENT_ITEMS}
    />
  );
}
