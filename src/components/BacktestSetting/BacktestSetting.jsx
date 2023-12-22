import React from "react";
import classNames from "classnames/bind";
import styles from "./BacktestSetting.module.scss";
import { Link } from "react-router-dom";
import StrategyHeader from "components/common/StrategyHeader";

const cx = classNames.bind(styles);

export default function BacktestSetting({
  backTest,
  handleChagneBackTestTitle,
}) {
  return (
    <div className={cx("container")}>
      <div className={cx("nav_box")}>
        <Link
          className={cx("active_nav_item")}
          to="/backtest/backtest/universe"
        >
          유니버스 선택
        </Link>
        <Link className={cx("active_nav_item")} to="/backtest/backtest/factors">
          팩터 선택
        </Link>
        <Link
          className={cx("active_nav_item")}
          to="/backtest/backtest/backtest"
        >
          백테스트 셜졍
        </Link>
      </div>
      <StrategyHeader
        strategy={backTest?.strategy}
        handleChangeTitle={handleChagneBackTestTitle}
        title="백테스트"
      />
      <div className={cx("side_button_box")}>
        <button className={cx("view_button")}>
          <img
            className={cx("view_img")}
            src="/images/view.svg"
            alt="한눈에 보기 이미지"
          />
          한눈에 보기
        </button>
        <button className={cx("reset_button")}>
          <img
            className={cx("reset_img")}
            src="/images/reset.svg"
            alt="초기화 버튼 아이콘"
          />
          설정 값 초기화
        </button>
        <div className={cx("step_box")}>
          <p className={cx("step_number", "active_step_number")}>1</p>
          <hr className={cx("step_line", "active_step_line")} />
          <p className={cx("step_number", "active_step_number")}>2</p>
          <hr className={cx("step_line", "active_step_line")} />
          <p className={cx("step_number", "active_step_number")}>3</p>
        </div>
      </div>
      <div className={cx("inner")}></div>
    </div>
  );
}
