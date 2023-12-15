import React from "react";
import classNames from "classnames/bind";
import styles from "./Popup.module.scss";

const cx = classNames.bind(styles);

export default function Popup({ title, text, handleToggle }) {
  return (
    <div className={cx("container")}>
      <div className={cx("text_box")}>
        <p className={cx("title")}>{title}</p>
      </div>
      <div className={cx("text_box")}>
        <pre className={cx("text")}>{text}</pre>
      </div>
      <div className={cx("button_box")}>
        <button onClick={handleToggle} className={cx("button")}>
          취소
        </button>
        <button onClick={handleToggle} className={cx("button")}>
          확인
        </button>
      </div>
    </div>
  );
}
