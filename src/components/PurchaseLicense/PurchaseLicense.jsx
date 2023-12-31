import React from "react";
import classNames from "classnames/bind";
import styles from "./PurchaseLicense.module.scss";

const cx = classNames.bind(styles);

export default function PurchaseLicense({
  TAB_BUTTONS,
  currentItem,
  changeItem,
}) {
  return (
    <div className={cx("container")}>
      <div className={cx("button_box")}>
        {TAB_BUTTONS.map((el, i) => (
          <button
            onClick={() => changeItem(i)}
            className={cx("button", "active_button")}
            key={el.id}
          >
            {el.name}
          </button>
        ))}
      </div>
      <div>{currentItem.content}</div>
    </div>
  );
}
