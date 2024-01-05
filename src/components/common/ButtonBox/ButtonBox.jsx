import React from "react";
import classNames from "classnames/bind";
import styles from "./ButtonBox.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function ButtonBox({ prevNav, nextNav }) {
  return (
    <>
      {prevNav?.length > 0 && nextNav?.length > 0 && (
        <>
          <Link to={prevNav} className={cx("button", "prev_button")}>
            <img
              className={cx("prev_button_img")}
              src="/images/prev_img.svg"
              alt="다음 버튼 화살표 이미지"
            />
            이전
          </Link>
          <Link to={nextNav} className={cx("button")}>
            다음
            <img
              className={cx("button_img")}
              src="/images/next_button.svg"
              alt="다음 버튼 화살표 이미지"
            />
          </Link>
        </>
      )}
      {nextNav?.length > 0 && !prevNav && (
        <Link to={nextNav} className={cx("button")}>
          다음
          <img
            className={cx("button_img")}
            src="/images/next_button.svg"
            alt="다음 버튼 화살표 이미지"
          />
        </Link>
      )}
      {prevNav?.length > 0 && !nextNav && (
        <Link to={prevNav} className={cx("button", "prev_button")}>
          <img
            className={cx("prev_button_img")}
            src="/images/prev_img.svg"
            alt="다음 버튼 화살표 이미지"
          />
          이전
        </Link>
      )}
    </>
  );
}
