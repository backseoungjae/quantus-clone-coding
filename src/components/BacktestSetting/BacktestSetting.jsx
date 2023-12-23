import React from "react";
import classNames from "classnames/bind";
import styles from "./BacktestSetting.module.scss";
import { Link } from "react-router-dom";
import StrategyHeader from "components/common/StrategyHeader";
import { IoIosArrowDown } from "react-icons/io";
import {
  MONTH_LIST,
  PERIODICBALANCINGLIST,
  SPECIFICGRAVITYCONTROLLIST,
} from "mocks/subData";
import DateBox from "components/DateBox";

const cx = classNames.bind(styles);

export default function BacktestSetting({
  backTest,
  rebalancingToggle,
  specificControlToggle,
  handleChangeBackTestTitle,
  handleChangeBacktestSettings,
  handleAddMonthList,
  handleRebalancingToggle,
  handleSpecificControlToggle,
  // 기간설정부분
  dateStart,
  dateEnd,
  startMinDate,
  endMinDate,
  handleStartDateToggle,
  handleEndDateToggle,
  handleChangeStartDate,
  handleChangeEndDate,
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
        handleChangeTitle={handleChangeBackTestTitle}
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
      <div className={cx("inner")}>
        <div className={cx("sub_inner")}>
          <div className={cx("title_box")}>
            <p className={cx("title")}>백테스트 설정</p>
          </div>
          <div className={cx("option_box")}>
            <p className={cx("option_text")}>초기 투자 금액</p>
            <div className={cx("option_input_box")}>
              <input
                type="number"
                name="initialInvestmentAmount"
                onChange={handleChangeBacktestSettings}
                value={backTest?.backtestSettings?.initialInvestmentAmount}
                placeholder="초기 투자 금액을 입력해 주세요."
                className={cx("option_input")}
              />
              <p className={cx("option_input_text")}>만원</p>
            </div>
          </div>
          <div className={cx("option_box")}>
            <p className={cx("option_text")}>거래 수수료</p>
            <div className={cx("option_input_box")}>
              <input
                type="number"
                name="transactionFee"
                onChange={handleChangeBacktestSettings}
                value={backTest?.backtestSettings?.transactionFee}
                max="100"
                className={cx("option_input")}
              />
              <p className={cx("option_input_text", "option_input_percent")}>
                %
              </p>
              <p className={cx("warning_text")}>
                0 ~ 100 까지 입력할 수 있습니다. (0 입력시 비활성화)
              </p>
            </div>
          </div>
        </div>
        <div className={cx("sub_inner")}>
          <div className={cx("title_box")}>
            <p className={cx("title")}>리밸런싱 설정</p>
          </div>
          <div className={cx("option_box")}>
            <p className={cx("option_text")}>리밸런싱 기간</p>
            <div
              className={cx("option_input_box")}
              onClick={handleRebalancingToggle}
            >
              <input
                type="text"
                name="backtestRebalancing"
                value={
                  backTest?.backtestSettings?.backtestRebalancing
                    ? backTest?.backtestSettings?.backtestRebalancing
                    : "리밸런싱 기간을 선택해주세요."
                }
                readOnly
                className={cx("option_input")}
              />
              <IoIosArrowDown
                className={cx(
                  rebalancingToggle
                    ? "active_option_select_arrow"
                    : "option_select_arrow"
                )}
              />
            </div>
            {rebalancingToggle && (
              <ul className={cx("hide_box")}>
                {PERIODICBALANCINGLIST.map((list) => (
                  <li key={list.id}>
                    <input
                      name="backtestRebalancing"
                      value={list.name}
                      onClick={handleChangeBacktestSettings}
                      className={cx(
                        list.name ===
                          backTest?.backtestSettings?.backtestRebalancing
                          ? "active_hide_input"
                          : "hide_input"
                      )}
                      type="text"
                      readOnly
                      placeholder={list.name}
                    />
                  </li>
                ))}
              </ul>
            )}
            {backTest?.backtestSettings?.backtestRebalancing ===
              "시즈널리티" && (
              <div className={cx("month_list_wrapper")}>
                <div className={cx("month_list_inner")}>
                  {MONTH_LIST.map((month) => {
                    return (
                      <div
                        key={month.id}
                        value={month.month}
                        onClick={() => handleAddMonthList(month.month)}
                        className={cx(
                          backTest?.backtestSettings?.seasonalityMonthList.includes(
                            month.month
                          )
                            ? "active_month_list_box"
                            : "month_list_box"
                        )}
                      >
                        <p
                          className={cx(
                            backTest?.backtestSettings?.seasonalityMonthList.includes(
                              month.month
                            )
                              ? "active_month_list_text"
                              : "month_list_text"
                          )}
                        >
                          {month.month}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className={cx("warning_box")}>
                  <p className={cx("warning_text")}>
                    원하는 리밸런싱 기간을 선택해 주세요.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className={cx("option_box")}>
            <p className={cx("option_text")}>비중 조절 방법</p>
            <div
              className={cx("option_input_box")}
              onClick={handleSpecificControlToggle}
            >
              <input
                type="text"
                name="specificGravityControl"
                value={backTest?.backtestSettings?.specificGravityControl}
                readOnly
                className={cx("option_input")}
              />
              <IoIosArrowDown
                className={cx(
                  specificControlToggle
                    ? "active_option_select_arrow"
                    : "option_select_arrow"
                )}
              />
            </div>
            {specificControlToggle && (
              <ul className={cx("hide_box")}>
                {SPECIFICGRAVITYCONTROLLIST.map((list) => (
                  <li key={list.id}>
                    <input
                      name="specificGravityControl"
                      value={list.name}
                      onClick={handleChangeBacktestSettings}
                      className={cx(
                        list.name ===
                          backTest?.backtestSettings?.specificGravityControl
                          ? "active_hide_input"
                          : "hide_input"
                      )}
                      type="text"
                      readOnly
                      placeholder={list.name}
                      disabled={list.id !== 1}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={cx("option_box")}>
            <p className={cx("option_text")}>종목 수</p>
            <div className={cx("option_input_box")}>
              <input
                type="number"
                name="rebalancingItems"
                onChange={handleChangeBacktestSettings}
                value={backTest?.backtestSettings?.rebalancingItems}
                max="100"
                className={cx("option_input")}
              />
              <p className={cx("option_input_text", "option_input_percent")}>
                개
              </p>
              <p className={cx("warning_text")}>
                0 ~ 100 까지 입력할 수 있습니다. (0 입력시 비활성화)
              </p>
            </div>
          </div>
        </div>
        <div className={cx("sub_inner")}>
          <div className={cx("title_box")}>
            <p className={cx("title")}>손/익절 설정</p>
          </div>
          <div className={cx("option_box")}>
            <p className={cx("option_text")}>손절 기준</p>
            <div className={cx("option_input_box")}>
              <input
                type="number"
                name="stopStandard"
                onChange={handleChangeBacktestSettings}
                value={backTest?.backtestSettings?.stopStandard}
                max="70"
                className={cx("option_input")}
              />
              <p className={cx("option_input_text", "option_input_percent")}>
                %
              </p>
              <p className={cx("warning_text")}>
                0 ~ 70 까지 입력할 수 있습니다. (0 입력시 비활성화)
              </p>
            </div>
          </div>
          <div className={cx("option_box")}>
            <p className={cx("option_text")}>익절 기준</p>
            <div className={cx("option_input_box")}>
              <input
                type="number"
                name="lossStandard"
                onChange={handleChangeBacktestSettings}
                value={backTest?.backtestSettings?.lossStandard}
                max="10000"
                className={cx("option_input")}
              />
              <p className={cx("option_input_text", "option_input_percent")}>
                %
              </p>
              <p className={cx("warning_text")}>
                0 ~ 10,000 까지 입력할 수 있습니다. (0 입력시 비활성화)
              </p>
            </div>
          </div>
        </div>
        <div className={cx("sub_inner")}>
          <DateBox
            dateStart={dateStart}
            dateEnd={dateEnd}
            startMinDate={startMinDate}
            endMinDate={endMinDate}
            handleStartDateToggle={handleStartDateToggle}
            handleEndDateToggle={handleEndDateToggle}
            handleChangeStartDate={handleChangeStartDate}
            handleChangeEndDate={handleChangeEndDate}
          />
        </div>
      </div>
    </div>
  );
}
