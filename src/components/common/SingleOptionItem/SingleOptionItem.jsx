import React from "react";
import classNames from "classnames/bind";
import styles from "./SingleOptionItem.module.scss";

const cx = classNames.bind(styles);

export default function SingleOptionItem({
  title,
  name,
  handleChange,
  singleValue,
}) {
  return (
    <div className={cx("option_box")}>
      <p className={cx("option_text")}>{title}</p>
      <div className={cx("option_input_box")}>
        <input
          onChange={handleChange}
          type="number"
          value={singleValue}
          name={name}
          className={cx("option_input")}
        />
        <p className={cx("option_input_text", "option_input_percent")}>%</p>
        <p className={cx("warning_text")}>0 ~ 100 까지 입력할 수 있습니다.</p>
      </div>
    </div>
  );
}
