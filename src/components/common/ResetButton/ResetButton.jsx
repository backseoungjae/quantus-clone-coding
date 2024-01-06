import React, { useCallback } from "react";
import classNames from "classnames/bind";
import styles from "./ResetButton.module.scss";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

export default function ResetButton({ index }) {
  const location = useLocation();

  const isHidden =
    location.pathname.includes("/backtest") ||
    location.pathname.includes("/port");

  // 설정 값 초기화 이벤트
  const handleReset = useCallback(() => {
    if (window.confirm("설정 값을 초기화 하시겠습니까?")) {
      sessionStorage.clear();
      window.location.reload();
    }
  }, []);

  return (
    <div className={cx("side_button_box")}>
      {isHidden ? (
        <>
          <button className={cx("view_button")}>
            <img
              className={cx("view_img")}
              src="/images/view.svg"
              alt="한눈에 보기 이미지"
            />
            한눈에 보기
          </button>
          <button onClick={handleReset} className={cx("reset_button")}>
            <img
              className={cx("reset_img")}
              src="/images/reset.svg"
              alt="초기화 버튼 아이콘"
            />
            설정 값 초기화
          </button>
          {index === 1 && (
            <div className={cx("step_box")}>
              <p className={cx("step_number", "active_step_number")}>1</p>
              <hr className={cx("step_line")} />
              <p className={cx("step_number")}>2</p>
              <hr className={cx("step_line")} />
              <p className={cx("step_number")}>3</p>
            </div>
          )}
          {index === 2 && (
            <div className={cx("step_box")}>
              <p className={cx("step_number", "active_step_number")}>1</p>
              <hr className={cx("step_line", "active_step_line")} />
              <p className={cx("step_number", "active_step_number")}>2</p>
              <hr className={cx("step_line")} />
              <p className={cx("step_number")}>3</p>
            </div>
          )}
          {index === 3 && (
            <div className={cx("step_box")}>
              <p className={cx("step_number", "active_step_number")}>1</p>
              <hr className={cx("step_line", "active_step_line")} />
              <p className={cx("step_number", "active_step_number")}>2</p>
              <hr className={cx("step_line", "active_step_line")} />
              <p className={cx("step_number", "active_step_number")}>3</p>
            </div>
          )}
        </>
      ) : (
        <button onClick={handleReset} className={cx("reset_button")}>
          <img
            className={cx("reset_img")}
            src="/images/reset.svg"
            alt="초기화 버튼 아이콘"
          />
          설정 값 초기화
        </button>
      )}
    </div>
  );
}
