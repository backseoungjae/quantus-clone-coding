import React from "react";
import classNames from "classnames/bind";
import styles from "./MacroMarketBox.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MACRO_MARKET_LIST } from "mocks/subData";

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

export default function MacroMarketBox({
  backTest,
  splitMode,
  macroToggle,
  pathname,
  handleChagneSplit,
  handleChangeReentryMarketSettings,
  handleMacroToggle,
  handleChangeMacroMarketSettings,
  handleRemoveMacroMarketSettings,
  handleAddMacroMarketSettings,
}) {
  return (
    <div className={cx("sub_inner")}>
      <div className={cx("check_inner")}>
        <div className={cx("check_item")}>
          <div className={cx("explanation_hide_box")}>
            <div className={cx("explanation_box")}>
              <p className={cx("explanation_text")}>
                다양한 매크로 지표를 기준으로 손절 로직이 적용됩니다. (실전투자
                진행 시 자동 적용됩니다.)
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
                해당 전략의 수익률 N일 이격도를 기준으로 손절 및 재진입 로직이
                적용됩니다. (실전투자 진행 시 자동 적용됩니다.)
              </p>
            </div>
          </div>
          <input
            type="checkbox"
            className={cx("hide_check_box", { checked: splitMode === 2 })}
            id="reentry_timing"
            onClick={() => handleChagneSplit(2)}
            disabled={pathname === "/port/past/port"}
          />
          <label className={cx("check_box_label")} htmlFor="reentry_timing">
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
          {backTest?.macroMarketTiming?.map((macro, i) => (
            <div className={cx("split_box")} key={i}>
              <p className={cx("macro_text")}>
                매크로 마켓 타이밍 필터 {String(i + 1).padStart(2, "0")}
              </p>
              <div className={cx("option_box", "macro_input_box")}>
                <div className={cx("macro_box")}>
                  <div
                    className={cx("option_input_box", "macro_option_input_box")}
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
                    onClick={(e) => handleChangeMacroMarketSettings(e, i)}
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
                    onClick={(e) => handleChangeMacroMarketSettings(e, i)}
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
                    onClick={(e) => handleChangeMacroMarketSettings(e, i)}
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
                  onChange={(e) => handleChangeMacroMarketSettings(e, i)}
                  className={cx("value_input")}
                  placeholder="값 입력"
                />
                {macro?.marketTimingFilter === "범위" && (
                  <input
                    type="number"
                    name="marketTimingRangeValue"
                    value={macro?.marketTimingRangeValue || ""}
                    onChange={(e) => handleChangeMacroMarketSettings(e, i)}
                    className={cx("value_input")}
                    placeholder="값 입력"
                  />
                )}
                <div className={cx("option_input_box")}>
                  <input
                    type="text"
                    value="값"
                    readOnly
                    className={cx("option_input")}
                  />
                  <IoIosArrowDown className={cx("option_select_arrow")} />
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
          ))}
        </div>
      )}
      {splitMode === 2 && (
        <div className={cx("split_inner")}>
          <div className={cx("radio_item_box")}>
            {radio_inputs.map((reentry) => (
              <div key={reentry.id} className={cx("radio_item")}>
                <div className={cx("explanation_hide_box")}>
                  <div className={cx("explanation_box")}>
                    <p className={cx("explanation_text")}>{reentry.text}</p>
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
            ))}
          </div>
          <div className={cx("option_box")}>
            <p className={cx("option_text")}>전략 이동평균선 기간</p>
            <div className={cx("option_input_box")}>
              <input
                type="number"
                name="movingAverageLineDate"
                onChange={handleChangeReentryMarketSettings}
                value={
                  backTest?.reentryMarketTiming?.movingAverageLineDate || 20
                }
                className={cx("option_input")}
              />
              <p className={cx("option_input_text", "option_input_percent")}>
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
  );
}
