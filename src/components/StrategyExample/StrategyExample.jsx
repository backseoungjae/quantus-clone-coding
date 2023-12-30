import React from "react";
import classNames from "classnames/bind";
import styles from "./StrategyExample.module.scss";

const cx = classNames.bind(styles);

export default function StrategyExample() {
  return (
    <div className={cx("container")}>
      <div className={cx("title_box")}>
        <p className={cx("title")}>전략 예시</p>
      </div>
      <div className={cx("loading_box")}>
        <p className={cx("text")}>준비 중 입니다...</p>
        <img className={cx("loading")} src="/images/loading.gif" alt="로딩" />
      </div>
    </div>
  );
}
