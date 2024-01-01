import React from "react";
import classNames from "classnames/bind";
import styles from "./PurchaseLicense.module.scss";

const cx = classNames.bind(styles);

export default function PurchaseLicense({
  TAB_BUTTONS,
  tabType,
  handleTabType,
  currentItem,
  changeItem,
}) {
  return (
    <div className={cx("container")}>
      <div className={cx("button_inner")}>
        <div className={cx("button_box")}>
          {TAB_BUTTONS.map((el) => (
            <button
              key={el.id}
              onClick={() => handleTabType(el.name)}
              className={cx(el.name === tabType ? "active_button" : "button")}
            >
              {el.name}
            </button>
          ))}
        </div>
        <hr className={cx("hr")} />
      </div>
      {/* <div>{currentItem.content}</div> */}
    </div>
  );
}
