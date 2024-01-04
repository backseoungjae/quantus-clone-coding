import React from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const NAV_MENU = [
  {
    id: 1,
    path: "/backtest/backtest/universe",
    pathname: "백테스트",
  },
  {
    id: 2,
    path: "/alloc/static_alloc",
    pathname: "자산배분",
  },
  {
    id: 3,
    path: "/port/trade/universe",
    pathname: "포트폴리오 추출",
  },
  {
    id: 4,
    path: "/invest/accounts",
    pathname: "실전 투자",
  },
  {
    id: 5,
    path: "/strategy",
    pathname: "전략 예시",
  },
  {
    id: 6,
    path: "/products",
    pathname: "사용권 구매",
  },
  {
    id: 7,
    path: "/partnership",
    pathname: "파트너쉽",
  },
];

const OPTIONS = [
  {
    id: 1,
    option: "초급",
  },
  {
    id: 2,
    option: "중급",
  },
  {
    id: 3,
    option: "고급",
  },
];

export default function Header() {
  const location = useLocation();

  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <img className={cx("logo")} src="/images/logo.png" alt="logo" />
        <div className={cx("menu_box")}>
          <div className={cx("button_box")}>
            {OPTIONS.map((option) => {
              return (
                <button key={option.id} className={cx("button")}>
                  {option.option}
                </button>
              );
            })}
          </div>
          <Link className={cx("login_link")} to="/login">
            로그인 하러가기
          </Link>
        </div>
      </div>
      <div className={cx("nav_wrapper")}>
        <div className={cx("nav_inner")}>
          <nav className={cx("nav_box")}>
            {NAV_MENU.map((nav) => (
              <Link
                className={cx(
                  nav.path.includes(location.pathname.split("/", 2)[1])
                    ? "active_nav_link"
                    : "nav_link"
                )}
                to={nav.path}
                key={nav.id}
              >
                {nav.pathname}
              </Link>
            ))}
          </nav>
          <Link
            className={cx("notification")}
            to="https://opposite-theater-c57.notion.site/4affdd3dae7b4b3287345f0122931d29"
            target="_blank"
          >
            공지사항
          </Link>
        </div>
      </div>
    </div>
  );
}
