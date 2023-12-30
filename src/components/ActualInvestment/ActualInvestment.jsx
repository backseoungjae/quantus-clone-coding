import React from "react";
import classNames from "classnames/bind";
import styles from "./ActualInvestment.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function ActualInvestment() {
  return (
    <div className={cx("container")}>
      <div className={cx("title_box")}>
        <p className={cx("title")}>실전투자</p>
      </div>
      <div className={cx("button_box")}>
        <p className={cx("text")}>실전 투자 다운로드 링크로 이동하세요.</p>
        <Link
          to="https://stoa-investment.notion.site/253d64b6241444a2b03c4261af76ebd1?pvs=4"
          target="_blank"
          className={cx("button")}
        >
          다운로드 링크
        </Link>
      </div>
    </div>
  );
}
