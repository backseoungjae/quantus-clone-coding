import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./RebalancingBox.module.scss";
import { IoIosArrowDown } from "react-icons/io";

const cx = classNames.bind(styles);

export default function RebalancingBox({
  title,
  setting,
  settingValue,
  data,
  monthList,
  name,
  pathname,
  toggle,
  handleAddMonthList,
  handleToggle,
  handleChangeSettings,
}) {
  return (
    <div className={cx("option_box")}>
      <p className={cx("option_text")}>{title}</p>
      <div className={cx("option_input_box")} onClick={handleToggle}>
        <input
          type="text"
          name={name}
          value={settingValue}
          placeholder="리밸런싱 기간을 선택해주세요."
          readOnly
          className={cx("option_input")}
        />
        <IoIosArrowDown
          className={cx(
            toggle ? "active_option_select_arrow" : "option_select_arrow"
          )}
        />
      </div>
      {toggle && (
        <ul className={cx("hide_box")}>
          {data.map((list) => (
            <li key={list.id}>
              <input
                name={name}
                value={list.name}
                onClick={handleChangeSettings}
                className={cx(
                  list.name === settingValue
                    ? "active_hide_input"
                    : "hide_input"
                )}
                type="text"
                readOnly
                disabled={
                  (pathname === "/backtest/decile/backtest" &&
                    list.name === "시즈널리티") ||
                  (settingValue === "동일 비중" && list.id !== 1)
                }
              />
            </li>
          ))}
        </ul>
      )}
      {settingValue === "시즈널리티" && (
        <div className={cx("month_list_wrapper")}>
          <div className={cx("month_list_inner")}>
            {monthList.map((month) => (
              <div
                key={month.id}
                value={month.month}
                onClick={() => handleAddMonthList(month.month)}
                className={cx(
                  setting?.seasonalityMonthList.includes(month.month)
                    ? "active_month_list_box"
                    : "month_list_box"
                )}
              >
                <p
                  className={cx(
                    setting?.seasonalityMonthList.includes(month.month)
                      ? "active_month_list_text"
                      : "month_list_text"
                  )}
                >
                  {month.month}
                </p>
              </div>
            ))}
          </div>
          <div className={cx("warning_box")}>
            <p className={cx("warning_text")}>
              원하는 리밸런싱 기간을 선택해 주세요.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
