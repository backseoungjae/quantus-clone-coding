import React from "react";
import classNames from "classnames/bind";
import styles from "./BacktestSetting.module.scss";
import { Link, useLocation } from "react-router-dom";
import StrategyHeader from "components/common/StrategyHeader";
import { IoIosArrowDown } from "react-icons/io";
import {
  MACRO_MARKET_LIST,
  MONTH_LIST,
  PERIODICBALANCINGLIST,
  SPECIFICGRAVITYCONTROLLIST,
} from "mocks/subData";
import DateBox from "components/DateBox";
import ResetButton from "components/common/ResetButton";

const cx = classNames.bind(styles);

const radio_inputs = [
  {
    id: 1,
    name: "SMA",
    text: "단순 이동평균선 이격도를 이용해 손절 및 재진입 로직이 적용됩니다.",
  },
  {
    id: 2,
    name: "EMA",
    text: "자수 이동평균선 이격도를 이용해 손절 및 재진입 로직이 적용됩니다.",
  },
  {
    id: 3,
    name: "HMA",
    text: "HULL 이동평균선 이격도를 이용해 손절 및 재진입 로직이 적용됩니다.",
  },
];

export default function BacktestSetting({
  backTest,
  rebalancingToggle,
  specificControlToggle,
  splitMode,
  handleChagneSplit,
  handleChangeBackTestTitle,
  handleChangeBacktestSettings,
  handleAddMonthList,
  handleRebalancingToggle,
  handleSpecificControlToggle,
  handleChangeReentryMarketSettings,
  macroToggle,
  handleMacroToggle,
  handleChangeMacroMarketSettings,
  handleAddMacroMarketSettings,
  handleRemoveMacroMarketSettings,
  handleVerification,
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
  const location = useLocation();

  return (
    <div className={cx("container")}>
      <div className={cx("nav_box")}>
        <Link
          className={cx("active_nav_item")}
          to={
            location.pathname.includes("backtest/backtest")
              ? "/backtest/backtest/universe"
              : "/backtest/decile/universe"
          }
        >
          유니버스 선택
        </Link>
        <Link
          className={cx("active_nav_item")}
          to={
            location.pathname.includes("backtest/backtest")
              ? "/backtest/backtest/factors"
              : "/backtest/decile/factors"
          }
        >
          팩터 선택
        </Link>
        <Link
          className={cx("active_nav_item")}
          to={
            location.pathname.includes("backtest/backtest")
              ? "/backtest/backtest/backtest"
              : "/backtest/decile/backtest"
          }
        >
          백테스트 셜졍
        </Link>
      </div>
      <StrategyHeader
        strategy={backTest?.strategy}
        handleChangeTitle={handleChangeBackTestTitle}
        title="백테스트"
      />
      <ResetButton index={3} />
      <div className={cx("inner")}>
        {location.pathname.includes("backtest/backtest") && (
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
        )}
        <div className={cx("sub_inner")}>
          <div className={cx("title_box")}>
            <p className={cx("title")}>
              {location.pathname.includes("backtest/backtest")
                ? "리밸런싱 설정"
                : "10분위 테스트 리밸런싱 설정"}
            </p>
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
          {location.pathname.includes("backtest/backtest") && (
            <>
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
                  <p
                    className={cx("option_input_text", "option_input_percent")}
                  >
                    개
                  </p>
                  <p className={cx("warning_text")}>
                    0 ~ 100 까지 입력할 수 있습니다. (0 입력시 비활성화)
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        {location.pathname.includes("backtest/backtest") && (
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
        )}
        {location.pathname.includes("backtest/backtest") && (
          <div className={cx("sub_inner")}>
            <div className={cx("check_inner")}>
              <div className={cx("check_item")}>
                <div className={cx("explanation_hide_box")}>
                  <div className={cx("explanation_box")}>
                    <p className={cx("explanation_text")}>
                      다양한 매크로 지표를 기준으로 손절 로직이 적용됩니다.
                      (실전투자 진행 시 자동 적용됩니다.)
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className={cx("hide_check_box", { checked: splitMode === 1 })}
                  id="macro_timing"
                  onClick={() => handleChagneSplit(1)}
                />
                <label className={cx("check_box_label")} htmlFor="macro_timing">
                  <div className={cx("check_box")}>
                    <div className={cx("check_box_checked")}></div>
                  </div>
                  <b className={cx("check_text")}>매크로 마켓 타이밍</b>
                  <span className={cx("check_b")}>?</span>
                </label>
              </div>
              <div className={cx("check_item")}>
                <div className={cx("explanation_hide_box")}>
                  <div className={cx("explanation_box")}>
                    <p className={cx("explanation_text")}>
                      해당 전략의 수익률 N일 이격도를 기준으로 손절 및 재진입
                      로직이 적용됩니다. (실전투자 진행 시 자동 적용됩니다.)
                    </p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  className={cx("hide_check_box", { checked: splitMode === 2 })}
                  id="reentry_timing"
                  onClick={() => handleChagneSplit(2)}
                />
                <label
                  className={cx("check_box_label")}
                  htmlFor="reentry_timing"
                >
                  <div className={cx("check_box")}>
                    <div className={cx("check_box_checked")}></div>
                  </div>
                  <b className={cx("check_text")}>재진입 마켓 타이밍</b>
                  <span className={cx("check_b")}>?</span>
                </label>
              </div>
            </div>
            {splitMode === 1 && (
              <div className={cx("split_inner")}>
                {backTest?.macroMarketTiming?.map((macro, i) => {
                  return (
                    <div className={cx("split_box")} key={i}>
                      <p className={cx("macro_text")}>
                        매크로 마켓 타이밍 필터 {String(i + 1).padStart(2, "0")}
                      </p>
                      <div className={cx("option_box", "macro_input_box")}>
                        <div className={cx("macro_box")}>
                          <div
                            className={cx(
                              "option_input_box",
                              "macro_option_input_box"
                            )}
                            onClick={() => handleMacroToggle(i)}
                          >
                            <input
                              type="text"
                              name="specificGravityControl"
                              value={
                                macro?.marketTimingList
                                  ? macro?.marketTimingList
                                  : "미)장단기금리차 (10년-2년)"
                              }
                              readOnly
                              className={cx("option_input")}
                            />
                            <IoIosArrowDown
                              className={cx(
                                macroToggle[i]
                                  ? "active_option_select_arrow"
                                  : "option_select_arrow"
                              )}
                            />
                          </div>
                          {macroToggle[i] && (
                            <ul className={cx("hide_box")}>
                              {MACRO_MARKET_LIST.map((list) => {
                                return (
                                  <li key={list.id}>
                                    <input
                                      type="text"
                                      name="marketTimingList"
                                      value={list.name}
                                      onClick={(e) =>
                                        handleChangeMacroMarketSettings(e, i)
                                      }
                                      className={cx(
                                        list.name === macro?.marketTimingList
                                          ? "active_hide_input"
                                          : "hide_input"
                                      )}
                                      readOnly
                                    />
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </div>
                        <p className={cx("text")}>을(를)</p>
                        <div className={cx("macro_button_box")}>
                          <button
                            name="marketTimingFilter"
                            value="상위"
                            onClick={(e) =>
                              handleChangeMacroMarketSettings(e, i)
                            }
                            className={cx(
                              macro?.marketTimingFilter === "상위"
                                ? "active_macro_button"
                                : "macro_button"
                            )}
                          >
                            상위 {`(>)`}
                          </button>
                          <button
                            name="marketTimingFilter"
                            value="하위"
                            onClick={(e) =>
                              handleChangeMacroMarketSettings(e, i)
                            }
                            className={cx(
                              macro?.marketTimingFilter === "하위"
                                ? "active_macro_button"
                                : "macro_button"
                            )}
                          >
                            하위 {`(<)`}
                          </button>
                          <button
                            name="marketTimingFilter"
                            value="범위"
                            onClick={(e) =>
                              handleChangeMacroMarketSettings(e, i)
                            }
                            className={cx(
                              macro?.marketTimingFilter === "범위"
                                ? "active_macro_button"
                                : "macro_button"
                            )}
                          >
                            범위
                          </button>
                        </div>
                      </div>
                      <div className={cx("value_input_box")}>
                        <input
                          type="number"
                          name="marketTimingValue"
                          value={macro?.marketTimingValue || ""}
                          onChange={(e) =>
                            handleChangeMacroMarketSettings(e, i)
                          }
                          className={cx("value_input")}
                          placeholder="값 입력"
                        />
                        <div className={cx("option_input_box")}>
                          <input
                            type="text"
                            value="값"
                            readOnly
                            className={cx("option_input")}
                          />
                          <IoIosArrowDown
                            className={cx("option_select_arrow")}
                          />
                        </div>
                      </div>
                      <div className={cx("macro_add_button_box")}>
                        <button
                          onClick={() => handleRemoveMacroMarketSettings(i)}
                          className={cx("remove_button")}
                        >
                          삭제하기
                        </button>
                        <button
                          onClick={handleAddMacroMarketSettings}
                          className={cx("add_button")}
                        >
                          추가하기
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {splitMode === 2 && (
              <div className={cx("split_inner")}>
                <div className={cx("radio_item_box")}>
                  {radio_inputs.map((reentry) => {
                    return (
                      <div key={reentry.id} className={cx("radio_item")}>
                        <div className={cx("explanation_hide_box")}>
                          <div className={cx("explanation_box")}>
                            <p className={cx("explanation_text")}>
                              {reentry.text}
                            </p>
                          </div>
                        </div>
                        <input
                          className={cx("radio_input", {
                            checked:
                              reentry.name ===
                              backTest?.reentryMarketTiming?.movingAverageLine,
                          })}
                          type="checkbox"
                          id={reentry.name}
                          name="movingAverageLine"
                          readOnly
                          onClick={handleChangeReentryMarketSettings}
                          value={reentry.name || ""}
                        />
                        <label className={cx("label")} htmlFor={reentry.name}>
                          <img
                            className={cx("radio_img")}
                            src="/images/radio.svg"
                            alt="라디오 선택 안 된 이미지"
                          />
                          <img
                            className={cx("active_radio_img")}
                            src="/images/active_radio.svg"
                            alt="라디오 선택 된 이미지"
                          />
                          {reentry.name}
                        </label>
                        <span className={cx("check_b")}>?</span>
                      </div>
                    );
                  })}
                </div>
                <div className={cx("option_box")}>
                  <p className={cx("option_text")}>전략 이동평균선 기간</p>
                  <div className={cx("option_input_box")}>
                    <input
                      type="number"
                      name="movingAverageLineDate"
                      onChange={handleChangeReentryMarketSettings}
                      value={
                        backTest?.reentryMarketTiming?.movingAverageLineDate ||
                        20
                      }
                      max="200"
                      min="5"
                      className={cx("option_input")}
                    />
                    <p
                      className={cx(
                        "option_input_text",
                        "option_input_percent"
                      )}
                    >
                      일
                    </p>
                    <p className={cx("warning_text")}>
                      5 ~ 200 까지 입력할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
        <div className={cx("sub_inner")}>
          <DateBox
            initialDate={backTest?.period}
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
        <div className={cx("button_box")}>
          <Link
            to={
              location.pathname.includes("backtest/backtest")
                ? "/backtest/backtest/universe"
                : "/backtest/decile/universe"
            }
            className={cx("button", "prev_button")}
          >
            <img
              className={cx("prev_button_img")}
              src="/images/prev_img.svg"
              alt="다음 버튼 화살표 이미지"
            />
            이전
          </Link>
          <button
            onClick={() =>
              handleVerification(
                location.pathname.includes("backtest/backtest")
                  ? "백테스트가"
                  : "검증이"
              )
            }
            className={cx("button")}
          >
            {location.pathname.includes("backtest/backtest")
              ? "백테스트"
              : "검증"}
            <img
              className={cx("button_img")}
              src="/images/next_button.svg"
              alt="다음 버튼 화살표 이미지"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
