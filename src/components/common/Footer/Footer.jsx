import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <div className={cx("left_info_box")}>
          <img className={cx("logo")} src="/images/logo.png" alt="logo" />
          <p className={cx("title")}>주식회사 퀀터스테크놀로지스</p>
          <p className={cx("info_text")}>
            대표자명: 이재민 ┃ 주소: 서울특별시 강남구 선릉로 93길 54, 6층
            6062호 (역삼동, 일환빌딩)
          </p>
          <p className={cx("info_text")}>사업자등록번호: 245-88-02569</p>
          <p className={cx("info_text")}>문의: info@quantus.kr</p>
          <p className={cx("info_text")}>
            비즈니스 관련 문의: 070-4193-5192 (퀀터스 이용 문의는 고객지원의 1:1
            문의, <br />
            혹은 메일로 문의주세요.)
          </p>
          <p className={cx("info_text")}>
            © 2023 Quantus Technologies. All rights reserved.
          </p>
        </div>
        <div className={cx("right_info_box")}>
          <div className={cx("nav_box")}>
            <Link
              to="https://www.alphafinder.dev/login"
              target="_blank"
              className={cx("nav_link")}
            >
              알파파인더
            </Link>
            <Link
              to="https://fire.quantus.kr/"
              target="_blank"
              className={cx("nav_link")}
            >
              FIRE로 가는길
            </Link>
            <Link
              to="https://stoa-investment.notion.site/654f1c9d044749c5a415694f0d24d68e?pvs=4"
              target="_blank"
              className={cx("nav_link")}
            >
              채용공고
            </Link>
          </div>
          <div className={cx("terms_box")}>
            <Link
              to="https://www.quantus.kr/service/useservice"
              target="_blank"
              className={cx("terms_link")}
            >
              개인정보처리방침
            </Link>
            <Link
              to="https://www.quantus.kr/service"
              target="_blank"
              className={cx("terms_link")}
            >
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
