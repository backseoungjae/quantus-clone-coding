import React, { useCallback, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { Link } from "react-router-dom";
import PriceModal from "components/common/PriceModal";

const cx = classNames.bind(styles);

export default function Product({
  tabType,
  seasonTicket,
  foreignCountry,
  handleTicket,
  handleForeignCountry,
  ticketData,
  FOREIGN_COUNTRY_LIST,
  items,
  toggle,
  handleToggle,
  step,
  handleStep,
  purchase,
  handleChagnePurchaseSettings,
  handleAmount,
}) {
  return (
    <div className={cx("container")}>
      <div className={cx("button_inner")}>
        <div
          className={cx(
            tabType === "구독권" ? "button_box" : "active_button_box"
          )}
        >
          {ticketData.map((ticket) => (
            <button
              key={ticket.id}
              onClick={() => handleTicket(ticket.name)}
              className={cx(
                tabType === "구독권"
                  ? seasonTicket === ticket.name
                    ? "active_button"
                    : "button"
                  : seasonTicket === ticket.name
                  ? "active_investment_button"
                  : "button"
              )}
            >
              {ticket.name}
            </button>
          ))}
        </div>
        {tabType === "구독권" && (
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
        )}
      </div>
      <div className={cx("item_inner")}>
        {items.map((item) => (
          <div
            key={item.id}
            className={cx(
              tabType === "구독권" ? "item_box" : "active_item_box"
            )}
          >
            <p className={cx("title")}>
              {item.name}
              <br />
              {tabType === "구독권" && (
                <>
                  {seasonTicket} ({foreignCountry})
                </>
              )}
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
              {tabType === "구독권" ? (
                <p className={cx("title")}>
                  {foreignCountry === "글로벌" &&
                    seasonTicket === "1년권" &&
                    item.globalPrice}
                  {foreignCountry === "글로벌" &&
                    seasonTicket !== "1년권" &&
                    item.monthGlobalPrice}{" "}
                  {foreignCountry !== "글로벌" &&
                    seasonTicket === "1년권" &&
                    item.price}
                  {foreignCountry !== "글로벌" &&
                    seasonTicket !== "1년권" &&
                    item.monthPrice}
                </p>
              ) : (
                <p className={cx("title")}>
                  {seasonTicket === "1년권" ? item.price : item.monthPrice}
                </p>
              )}
            </div>
            <button
              onClick={handleToggle}
              className={cx(
                tabType === "구독권"
                  ? "purchase_button"
                  : "active_purchase_button"
              )}
            >
              구매하기
            </button>
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
      {toggle && (
        <PriceModal
          tabType={tabType}
          handleToggle={handleToggle}
          toggle={toggle}
          step={step}
          handleStep={handleStep}
          purchase={purchase}
          handleChagnePurchaseSettings={handleChagnePurchaseSettings}
          handleAmount={handleAmount}
        />
      )}
    </div>
  );
}
