import React from "react";
import classNames from "classnames/bind";
import styles from "./MacroMarket.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MACRO_MARKET_LIST } from "mocks/subData";

const cx = classNames.bind(styles);

export default function MacroMarket({
  i,
  macro,
  macroToggle,
  handleMacroToggle,
  handleChangeMacroMarketSettings,
  handleAddMacroMarketSettings,
  handleRemoveMacroMarketSettings,
}) {
  return (
    <div className={cx("split_inner")}>
      <div className={cx("split_box")}>
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
                        onClick={handleChangeMacroMarketSettings}
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
              onClick={handleChangeMacroMarketSettings}
              className={cx("macro_ton")}
            >
              상위 {`(>)`}
            </button>
            <button
              name="marketTimingFilter"
              value="하위"
              onClick={handleChangeMacroMarketSettings}
              className={cx("macro_ton")}
            >
              하위 {`(<)`}
            </button>
            <button
              name="marketTimingFilter"
              value="범위"
              onClick={handleChangeMacroMarketSettings}
              className={cx("macro_button")}
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
            onChange={handleChangeMacroMarketSettings}
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
    </div>
  );
}
