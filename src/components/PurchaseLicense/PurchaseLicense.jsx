import React from "react";
import classNames from "classnames/bind";
import styles from "./PurchaseLicense.module.scss";
import Product from "components/Product";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function PurchaseLicense({
  TAB_BUTTONS,
  tabType,
  handleTabType,
  seasonTicket,
  foreignCountry,
  handleSeasonTicket,
  handleInvestmentTicket,
  handleForeignCountry,
  toggle,
  handleToggle,
  step,
  handleStep,
  purchase,
  handleChagnePurchaseSettings,
  handleAmount,
  SEASON_TICKET_LIST,
  INVESTMENT_TICKET_LIST,
  FOREIGN_COUNTRY_LIST,
  SUBSCRIPTION_ITEMS,
  INVESTMENT_ITEMS,
}) {
  return (
    <div className={cx("container")}>
      <div className={cx("button_inner")}>
        <div className={cx("button_box")}>
          {TAB_BUTTONS.map((el) => (
            <button
              key={el.id}
              onClick={() => handleTabType(el.name)}
              className={cx(
                tabType === "구독권" ? "first_button" : "second_button"
              )}
            >
              {el.name}
            </button>
          ))}
          <Link
            className={cx(
              tabType === "구독권" ? "first_button" : "second_button"
            )}
            target="_blank"
            to="https://stoa-investment.notion.site/9d6b4b4b27fa42d885410db036a3a0e0"
          >
            패키지
          </Link>
        </div>
        <hr className={cx(tabType === "구독권" ? "first_hr" : "second_hr")} />
      </div>
      {tabType === "구독권" && (
        <div className={cx("tab_inner")}>
          <Product
            tabType={tabType}
            seasonTicket={seasonTicket}
            foreignCountry={foreignCountry}
            handleTicket={handleSeasonTicket}
            handleForeignCountry={handleForeignCountry}
            ticketData={SEASON_TICKET_LIST}
            FOREIGN_COUNTRY_LIST={FOREIGN_COUNTRY_LIST}
            items={SUBSCRIPTION_ITEMS}
            toggle={toggle}
            handleToggle={handleToggle}
            step={step}
            handleStep={handleStep}
            purchase={purchase}
            handleChagnePurchaseSettings={handleChagnePurchaseSettings}
            handleAmount={handleAmount}
          />
        </div>
      )}
      {tabType === "실전 투자권" && (
        <div className={cx("tab_inner")}>
          <Product
            tabType={tabType}
            seasonTicket={seasonTicket}
            handleTicket={handleInvestmentTicket}
            ticketData={INVESTMENT_TICKET_LIST}
            items={INVESTMENT_ITEMS}
            toggle={toggle}
            handleToggle={handleToggle}
            step={step}
            handleStep={handleStep}
            purchase={purchase}
            handleChagnePurchaseSettings={handleChagnePurchaseSettings}
            handleAmount={handleAmount}
          />
        </div>
      )}
    </div>
  );
}
