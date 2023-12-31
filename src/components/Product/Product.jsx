import React, { useCallback, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const SEASON_TICKET_LIST = [
  { id: 1, name: "1년권" },
  { id: 2, name: "3개월권" },
];

const FOREIGN_COUNTRY_LIST = [
  {
    id: 1,
    name: "한국",
  },
  {
    id: 2,
    name: "미국",
  },
  {
    id: 3,
    name: "글로벌",
  },
];

export default function Product() {
  const [seasonTicket, setSeasonTicket] = useState("1년권");
  const [foreignCountry, setForeignCountry] = useState("한국");

  const ITEMS = [
    {
      id: 1,
      name: "매일 30게이지",
      text: `매일 매일 30게이지가 ${seasonTicket.slice(
        0,
        -1
      )}동안\n지급됩니다.`,
      list: [
        {
          id: 1,
          name: "백테스트 가능",
        },
        {
          id: 2,
          name: "자산배분 가능",
        },
        {
          id: 3,
          name: "포트 추출 무제한",
        },
      ],
      price: "월 16,583원",
      globalPrice: "월 24,917원",
    },
    {
      id: 2,
      name: "매일 100게이지",
      text: `매일 매일 100게이지가 ${seasonTicket.slice(
        0,
        -1
      )}동안\n지급됩니다.`,
      list: [
        {
          id: 1,
          name: "백테스트 가능",
        },
        {
          id: 2,
          name: "자산배분 가능",
        },
        {
          id: 3,
          name: "포트 추출 무제한",
        },
      ],
      price: "월 21,583원",
      globalPrice: "월 31,583원",
    },
    {
      id: 3,
      name: "매일 무제한 게이지",
      text: `매일 매일 무제한 게이지게이지가 ${seasonTicket.slice(
        0,
        -1
      )}동안\n지급됩니다.`,
      list: [
        {
          id: 1,
          name: "백테스트 가능",
        },
        {
          id: 2,
          name: "자산배분 가능",
        },
        {
          id: 3,
          name: "포트 추출 무제한",
        },
      ],
      price: "월 29,917원",
      globalPrice: "월 41,583원",
    },
  ];

  const handleSeasonTicket = useCallback((season) => {
    setSeasonTicket(season);
  }, []);

  const handleForeignCountry = useCallback((foreign) => {
    setForeignCountry(foreign);
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("button_inner")}>
        <div className={cx("button_box")}>
          {SEASON_TICKET_LIST.map((ticket) => (
            <button
              key={ticket.id}
              onClick={() => handleSeasonTicket(ticket.name)}
              className={cx(
                seasonTicket === ticket.name ? "active_button" : "button"
              )}
            >
              {ticket.name}
            </button>
          ))}
        </div>
        <div className={cx("foreign_button_box")}>
          {FOREIGN_COUNTRY_LIST.map((foreign) => (
            <button
              onClick={() => handleForeignCountry(foreign.name)}
              className={cx(
                foreign.name === foreignCountry
                  ? "active_foreign_button"
                  : "foreign_button"
              )}
              key={foreign.id}
            >
              {foreign.name}
            </button>
          ))}
        </div>
      </div>
      <div className={cx("item_inner")}>
        {ITEMS.map((item) => (
          <div key={item.id} className={cx("item_box")}>
            <p className={cx("title")}>
              {item.name}
              <br />
              {seasonTicket} ({foreignCountry})
            </p>
            <pre className={cx("text")}>{item.text}</pre>
            {item.list.map((list) => (
              <p key={list.id} className={cx("list_text")}>
                <img
                  className={cx("img")}
                  src="/images/list_check.svg"
                  alt="리스트 체크 이미지"
                />
                {list.name}
              </p>
            ))}
            <div className={cx("price_box")}>
              <p className={cx("title")}>
                {foreignCountry === "글로벌" ? item.globalPrice : item.price}
              </p>
            </div>
            <button className={cx("purchase_button")}>구매하기</button>
          </div>
        ))}
      </div>
      <div className={cx("refund_box")}>
        <p className={cx("refund")}>
          환불 정책은{" "}
          <Link
            target="_blank"
            className={cx("refund_b")}
            to="https://www.quantus.kr/service"
          >
            이용약관
          </Link>{" "}
          '제 20조 (환불규정)'의 내용을 따릅니다.
        </p>
      </div>
    </div>
  );
}
