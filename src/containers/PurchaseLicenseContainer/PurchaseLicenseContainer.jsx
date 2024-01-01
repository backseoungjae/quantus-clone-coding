import React, { useCallback, useState } from "react";
import PurchaseLicense from "components/PurchaseLicense";
import Product from "components/Product";

const TAB_BUTTONS = [
  {
    id: 1,
    name: "구독권",
    content: <Product />,
  },
  {
    id: 2,
    name: "실전 투자권",
    content: <Product />,
  },
  {
    id: "package",
    name: "패키지",
    content: <Product />,
  },
];

export default function PurchaseLicenseContainer() {
  const [tabType, setTabType] = useState("구독권");

  const handleTabType = useCallback((tab) => {
    setTabType(tab);
  }, []);

  return (
    <PurchaseLicense
      TAB_BUTTONS={TAB_BUTTONS}
      tabType={tabType}
      handleTabType={handleTabType}
    />
  );
}
