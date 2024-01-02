import React from "react";
import classNames from "classnames/bind";
import styles from "./PartnershipMagicSplit.module.scss";
import StrategyHeader from "components/common/StrategyHeader";
import { IoIosArrowDown } from "react-icons/io";
import DateBox from "components/DateBox";

const cx = classNames.bind(styles);

export default function PartnershipMagicSplit({
  splitMode,
  handleChagneSplit,
}) {
  return (
    <div className={cx("container")}>
      <StrategyHeader title="하단으로 이동" />
      <div className={cx("wrapper")}>
        <button className={cx("reset_button")}>
          <img
            className={cx("reset_img")}
            src="/images/reset.svg"
            alt="초기화 버튼 아이콘"
          />
          설정 값 초기화
        </button>
        <p className={cx("title")}>매직스플릿 모드</p>
        <div className={cx("exchange_rate_box")}>
          <div>
            <input
              type="checkbox"
              id="exchange_rate"
              className={cx("hide_check_box", { checked: splitMode === 1 })}
              onClick={() => handleChagneSplit(1)}
            />
            <label className={cx("check_box_label")} htmlFor="exchange_rate">
              <div className={cx("check_box")}>
                <div className={cx("check_box_checked")}></div>
              </div>
              <b className={cx("check_text")}>단일 종목</b>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="exchange_rates"
              className={cx("hide_check_box", { checked: splitMode === 2 })}
              onClick={() => handleChagneSplit(2)}
            />
            <label className={cx("check_box_label")} htmlFor="exchange_rates">
              <div className={cx("check_box")}>
                <div className={cx("check_box_checked")}></div>
              </div>
              <b className={cx("check_text")}>단일 종목 최적화</b>
            </label>
          </div>
        </div>
        <div className={cx("option_wrapper")}>
          <div className={cx("option_box")}>
            <p className={cx("option_text")}>초기 투자 금액</p>
            <div className={cx("option_input_box")}>
              <input
                type="number"
                name="initialInvestment"
                placeholder="초기 투자 금액을 입력해 주세요."
                className={cx("option_input")}
              />
              <p className={cx("option_input_text")}>만원</p>
            </div>
          </div>
          {splitMode === 1 && (
            <>
              <div className={cx("option_box")}>
                <p className={cx("option_text")}>매수 기준</p>
                <div className={cx("option_input_box")}>
                  <input
                    type="number"
                    name="initialInvestment"
                    className={cx("option_input")}
                  />
                  <p
                    className={cx("option_input_text", "option_input_percent")}
                  >
                    %
                  </p>
                  <p className={cx("warning_text")}>
                    0 ~ 100 까지 입력할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className={cx("option_box")}>
                <p className={cx("option_text")}>매도 기준</p>
                <div className={cx("option_input_box")}>
                  <input
                    type="number"
                    name="initialInvestment"
                    className={cx("option_input")}
                  />
                  <p
                    className={cx("option_input_text", "option_input_percent")}
                  >
                    %
                  </p>
                  <p className={cx("warning_text")}>
                    0 ~ 100 까지 입력할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className={cx("option_box")}>
                <p className={cx("option_text")}>진입 금액 비율</p>
                <div className={cx("option_input_box")}>
                  <input
                    type="number"
                    name="initialInvestment"
                    className={cx("option_input")}
                  />
                  <p
                    className={cx("option_input_text", "option_input_percent")}
                  >
                    %
                  </p>
                  <p className={cx("warning_text")}>
                    0 ~ 100 까지 입력할 수 있습니다.
                  </p>
                </div>
              </div>
              <div className={cx("option_box")}>
                <p className={cx("option_text")}>무위험 이자 수익</p>
                <div className={cx("option_input_box")}>
                  <input
                    type="number"
                    name="initialInvestment"
                    className={cx("option_input")}
                  />
                  <p
                    className={cx("option_input_text", "option_input_percent")}
                  >
                    %
                  </p>
                  <p className={cx("warning_text")}>
                    0 ~ 100 까지 입력할 수 있습니다.
                  </p>
                </div>
              </div>
            </>
          )}
          {splitMode === 2 && (
            <>
              <div className={cx("option_inner")}>
                <div className={cx("option_item_inner")}>
                  <div className={cx("option_item_left_box")}>
                    <p className={cx("option_text")}>매수 기준</p>
                    <div className={cx("option_item_box")}>
                      <div className={cx("option_item")}>
                        <input
                          type="number"
                          name=""
                          className={cx("option_input")}
                        />
                        <p
                          className={cx(
                            "option_input_text",
                            "option_input_percent"
                          )}
                        >
                          %
                        </p>
                        <p className={cx("warning_text")}>
                          0 ~ 100 까지 입력할 수 있습니다.
                        </p>
                      </div>
                      <p className={cx("option_item_space")}>~</p>
                      <div className={cx("option_item")}>
                        <input
                          type="number"
                          name=""
                          className={cx("option_input")}
                        />
                        <p
                          className={cx(
                            "option_input_text",
                            "option_input_percent"
                          )}
                        >
                          %
                        </p>
                        <p className={cx("warning_text")}>
                          0 ~ 100 까지 입력할 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={cx("option_item_right_box")}>
                    <p className={cx("option_text")}>간격</p>
                    <div className={cx("option_interval_item")}>
                      <input
                        type="number"
                        name=""
                        className={cx("option_input")}
                      />
                      <p
                        className={cx(
                          "option_input_text",
                          "option_input_percent"
                        )}
                      >
                        %
                      </p>
                      <p className={cx("warning_text")}>
                        간격은 범위를 벗어날 수 없습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx("option_item_inner")}>
                  <div className={cx("option_item_left_box")}>
                    <p className={cx("option_text")}>매도 기준</p>
                    <div className={cx("option_item_box")}>
                      <div className={cx("option_item")}>
                        <input
                          type="number"
                          name=""
                          className={cx("option_input")}
                        />
                        <p
                          className={cx(
                            "option_input_text",
                            "option_input_percent"
                          )}
                        >
                          %
                        </p>
                        <p className={cx("warning_text")}>
                          0 ~ 100 까지 입력할 수 있습니다.
                        </p>
                      </div>
                      <p className={cx("option_item_space")}>~</p>
                      <div className={cx("option_item")}>
                        <input
                          type="number"
                          name=""
                          className={cx("option_input")}
                        />
                        <p
                          className={cx(
                            "option_input_text",
                            "option_input_percent"
                          )}
                        >
                          %
                        </p>
                        <p className={cx("warning_text")}>
                          0 ~ 100 까지 입력할 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={cx("option_item_right_box")}>
                    <p className={cx("option_text")}>간격</p>
                    <div className={cx("option_interval_item")}>
                      <input
                        type="number"
                        name=""
                        className={cx("option_input")}
                      />
                      <p
                        className={cx(
                          "option_input_text",
                          "option_input_percent"
                        )}
                      >
                        %
                      </p>
                      <p className={cx("warning_text")}>
                        간격은 범위를 벗어날 수 없습니다.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={cx("option_item_inner")}>
                  <div className={cx("option_item_left_box")}>
                    <p className={cx("option_text")}>진입 금액 비율</p>
                    <div className={cx("option_item_box")}>
                      <div className={cx("option_item")}>
                        <input
                          type="number"
                          name=""
                          className={cx("option_input")}
                        />
                        <p
                          className={cx(
                            "option_input_text",
                            "option_input_percent"
                          )}
                        >
                          %
                        </p>
                        <p className={cx("warning_text")}>
                          0 ~ 100 까지 입력할 수 있습니다.
                        </p>
                      </div>
                      <p className={cx("option_item_space")}>~</p>
                      <div className={cx("option_item")}>
                        <input
                          type="number"
                          name=""
                          className={cx("option_input")}
                        />
                        <p
                          className={cx(
                            "option_input_text",
                            "option_input_percent"
                          )}
                        >
                          %
                        </p>
                        <p className={cx("warning_text")}>
                          0 ~ 100 까지 입력할 수 있습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={cx("option_item_right_box")}>
                    <p className={cx("option_text")}>간격</p>
                    <div className={cx("option_interval_item")}>
                      <input
                        type="number"
                        name=""
                        className={cx("option_input")}
                      />
                      <p
                        className={cx(
                          "option_input_text",
                          "option_input_percent"
                        )}
                      >
                        %
                      </p>
                      <p className={cx("warning_text")}>
                        간격은 범위를 벗어날 수 없습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("option_box")}>
                <p className={cx("option_text")}>무위험 이자 수익</p>
                <div className={cx("option_input_box")}>
                  <input type="number" name="" className={cx("option_input")} />
                  <p
                    className={cx("option_input_text", "option_input_percent")}
                  >
                    %
                  </p>
                  <p className={cx("warning_text")}>
                    0 ~ 100 까지 입력할 수 있습니다.
                  </p>
                </div>
              </div>
            </>
          )}
          {/* <IoIosArrowDown
          className={cx(assetClass ? "active_open_arrow" : "open_arrow")}
        /> */}
          <div className={cx("asset_class_wrapper")}>
            <p className={cx("title")}>자산군</p>
            <div className={cx("asset_class_box")}>
              <div className={cx("asset_class_name_box")}>
                <p className={cx("asset_class_name")}>자산 01</p>
              </div>
              <div className={cx("asset_class_option_box")}>
                <p className={cx("asset_class_option")}>종류</p>
                <div className={cx("option_input_box")}>
                  <input className={cx("option_input")} type="text" readOnly />
                  <IoIosArrowDown className={cx("option_select_arrow")} />
                </div>
              </div>
              <div className={cx("asset_class_option_box")}>
                <p className={cx("asset_class_option")}>자산군</p>
                <div className={cx("option_input_box")}>
                  <input className={cx("option_input")} type="text" readOnly />
                  <IoIosArrowDown className={cx("option_select_arrow")} />
                </div>
              </div>
            </div>
          </div>
          <DateBox />
          <div className={cx("button_box")}>
            <button className={cx("invest_button", "active_button")}>
              투자하기
            </button>
            <button className={cx("button", "active_button")}>백테스트</button>
          </div>
        </div>
      </div>
    </div>
  );
}
