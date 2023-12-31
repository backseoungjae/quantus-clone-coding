import React from "react";
import PurchaseLicense from "components/PurchaseLicense";
import { useTab } from "hooks/useTab";
import Product from "components/Product";

const TAB_BUTTONS = [
  {
    id: "subscription",
    name: "구독권",
    content: <Product />,
  },
  {
    id: "investment",
    name: "실전 투자권",
    content: <Product />,
  },
  // {
  //   id: "package",
  //   name: "패키지",
  //   content: <Product />,
  // },
];

export default function PurchaseLicenseContainer() {
  const { currentItem, changeItem } = useTab(0, TAB_BUTTONS);

  return (
    <PurchaseLicense
      TAB_BUTTONS={TAB_BUTTONS}
      currentItem={currentItem}
      changeItem={changeItem}
    />
  );
}
