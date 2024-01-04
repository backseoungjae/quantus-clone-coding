import React from "react";
import classNames from "classnames/bind";
import styles from "./PriceModal.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function PriceModal({
  tabType,
  handleToggle,
  step,
  handleStep,
  purchase,
  handleChagnePurchaseSettings,
  handleAmount,
}) {
  return (
    <div className={cx("modal_inner")}>
      <div className={cx("modal_bg")} onClick={handleToggle} />
      {step === 1 && (
        <div className={cx("modal_box")}>
          <div className={cx("modal_header")}>
            <p className={cx("modal_title")}>사용권 구매하기</p>
            <p className={cx("step_text")}>1 /3 단계</p>
          </div>
          <div className={cx("select_inner")}>
            <div className={cx("select_box")}>
              <p className={cx("select_text")}>기간</p>
              <div className={cx("check_box_inner")}>
                <div className={cx("check_box_item")}>
                  <input
                    type="checkbox"
                    name="period"
                    value="1년권"
                    className={cx("hide_check_box", {
                      checked: purchase?.purchaseSettings?.period === "1년권",
                    })}
                    id="period_year"
                    onChange={handleChagnePurchaseSettings}
                  />
                  <label
                    className={cx("check_box_label")}
                    htmlFor="period_year"
                  >
                    <div className={cx("check_box")}>
                      <div className={cx("check_box_checked")}></div>
                    </div>
                    <b className={cx("check_text")}>1년권</b>
                  </label>
                </div>
                {tabType === "구독권" ? (
                  <div className={cx("check_box_item")}>
                    <input
                      type="checkbox"
                      name="period"
                      value="3개월권"
                      onChange={handleChagnePurchaseSettings}
                      className={cx("hide_check_box", {
                        checked:
                          purchase?.purchaseSettings?.period === "3개월권",
                      })}
                      id="period_month"
                    />
                    <label
                      className={cx("check_box_label")}
                      htmlFor="period_month"
                    >
                      <div className={cx("check_box")}>
                        <div className={cx("check_box_checked")}></div>
                      </div>
                      <b className={cx("check_text")}>3개월권</b>
                    </label>
                  </div>
                ) : (
                  <div className={cx("check_box_item")}>
                    <input
                      type="checkbox"
                      name="period"
                      value="1개월권"
                      onChange={handleChagnePurchaseSettings}
                      className={cx("hide_check_box", {
                        checked:
                          purchase?.purchaseSettings?.period === "1개월권",
                      })}
                      id="period_month"
                    />
                    <label
                      className={cx("check_box_label")}
                      htmlFor="period_month"
                    >
                      <div className={cx("check_box")}>
                        <div className={cx("check_box_checked")}></div>
                      </div>
                      <b className={cx("check_text")}>1개월권</b>
                    </label>
                  </div>
                )}
              </div>
            </div>
            {tabType === "구독권" && (
              <div className={cx("select_box")}>
                <p className={cx("select_text")}>국가</p>
                <div className={cx("check_box_inner")}>
                  <div className={cx("check_box_item")}>
                    <input
                      type="checkbox"
                      className={cx("hide_check_box", {
                        checked: purchase?.purchaseSettings?.nation === "한국",
                      })}
                      id="korea"
                      name="nation"
                      value="한국"
                      onChange={handleChagnePurchaseSettings}
                    />
                    <label className={cx("check_box_label")} htmlFor="korea">
                      <div className={cx("check_box")}>
                        <div className={cx("check_box_checked")}></div>
                      </div>
                      <b className={cx("check_text")}>한국</b>
                    </label>
                  </div>
                  <div className={cx("check_box_item")}>
                    <input
                      type="checkbox"
                      className={cx("hide_check_box", {
                        checked: purchase?.purchaseSettings?.nation === "미국",
                      })}
                      id="US"
                      name="nation"
                      value="미국"
                      onChange={handleChagnePurchaseSettings}
                    />
                    <label className={cx("check_box_label")} htmlFor="US">
                      <div className={cx("check_box")}>
                        <div className={cx("check_box_checked")}></div>
                      </div>
                      <b className={cx("check_text")}>미국</b>
                    </label>
                  </div>
                  <div className={cx("check_box_item")}>
                    <input
                      type="checkbox"
                      className={cx("hide_check_box", {
                        checked:
                          purchase?.purchaseSettings?.nation === "글로벌",
                      })}
                      id="global"
                      name="nation"
                      value="글로벌"
                      onChange={handleChagnePurchaseSettings}
                    />
                    <label className={cx("check_box_label")} htmlFor="global">
                      <div className={cx("check_box")}>
                        <div className={cx("check_box_checked")}></div>
                      </div>
                      <b className={cx("check_text")}>글로벌</b>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={cx("info_box")}>
            <p className={cx("info_text")}>
              사용권명:{" "}
              {tabType === "구독권"
                ? "[구독권] 매일 100게이지"
                : "[실전 투자권] 플러스"}{" "}
              {purchase?.purchaseSettings?.period}{" "}
              {tabType === "구독권" && (
                <>({purchase?.purchaseSettings?.nation})</>
              )}
            </p>
            <p className={cx("info_text")}>
              가격:{" "}
              {tabType === "구독권" ? (
                <b className={cx("info_text_b")}>
                  {purchase?.purchaseSettings?.period === "1년권" &&
                    purchase?.purchaseSettings?.nation !== "글로벌" &&
                    "총 259,000원"}
                  {purchase?.purchaseSettings?.period === "3개월권" &&
                    purchase?.purchaseSettings?.nation !== "글로벌" &&
                    "총 89,000원"}
                  {purchase?.purchaseSettings?.period === "1년권" &&
                    purchase?.purchaseSettings?.nation === "글로벌" &&
                    "총 379,000원"}
                  {purchase?.purchaseSettings?.period === "3개월" &&
                    purchase?.purchaseSettings?.nation === "글로벌" &&
                    "총 139,000원"}
                </b>
              ) : (
                <b className={cx("info_text_b")}>
                  {purchase?.purchaseSettings?.period === "1년권"
                    ? "총 300,000원"
                    : "총 33,000원"}
                </b>
              )}
            </p>
          </div>
          <div className={cx("select_button_box")}>
            <button
              onClick={() => handleStep(2)}
              className={cx("select_button")}
            >
              다음
            </button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={cx("modal_box")}>
          <div className={cx("modal_header")}>
            <p className={cx("modal_title")}>사용권 구매하기</p>
            <p className={cx("step_text")}>2 /3 단계</p>
          </div>
          <div className={cx("modal_second_inner")}>
            <div className={cx("modal_second_box")}>
              <p className={cx("modal_text")}>
                추천인 코드가 있으시다면 입력해주세요.
              </p>
            </div>
            <div className={cx("modal_second_box")}>
              <input
                className={cx("modal_input")}
                name="recommender"
                value={purchase?.purchaseSettings?.recommender}
                onChange={handleChagnePurchaseSettings}
                type="text"
                placeholder="추천인 코드를 입력해주세요."
              />
            </div>
            <div className={cx("modal_second_box")}>
              <p className={cx("modal_info_text")}>
                추천인 코드가 맞지 않는 경우{" "}
                <b className={cx("modal_info_text_b")}>cs@quantus.kr</b>로 메일
                주시면 해결 해드리겠습니다.
              </p>
            </div>
          </div>
          <div className={cx("select_button_box", "select_second_button_box")}>
            <button
              onClick={() => handleStep(1)}
              className={cx("select_prev_button")}
            >
              이전
            </button>
            <button
              onClick={() => handleStep(3)}
              className={cx("select_next_button")}
            >
              다음
            </button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div className={cx("modal_box")}>
          <div className={cx("modal_header")}>
            <p className={cx("modal_title")}>사용권 구매하기</p>
            <p className={cx("step_text")}>3 /3 단계</p>
          </div>
          <div className={cx("modal_third_box")}>
            <p className={cx("modal_text")}>결제 수단을 선택해주세요.</p>
          </div>
          <div className={cx("bank_transfer_box")}>
            <div className={cx("check_box_item")}>
              <input
                type="checkbox"
                name="bankTransfer"
                value="무통장입금"
                onChange={handleChagnePurchaseSettings}
                className={cx("hide_check_box", {
                  checked: purchase?.purchaseSettings?.bankTransfer,
                })}
                id="bank_transfer"
              />
              <label className={cx("check_box_label")} htmlFor="bank_transfer">
                <div className={cx("check_box")}>
                  <div className={cx("check_box_checked")}></div>
                </div>
                <b className={cx("check_text")}>무통장입금</b>
              </label>
            </div>
          </div>
          <div className={cx("warning_text_box")}>
            <p className={cx("warning_text")}>
              결제 진행 전{" "}
              <Link
                className={cx("warning_text")}
                to="https://www.quantus.kr/service"
              >
                환불관련 정책
              </Link>
              을 꼭 읽어주세요!
            </p>
          </div>
          <div className={cx("select_button_box", "select_second_button_box")}>
            <button
              onClick={() => handleStep(2)}
              className={cx("select_prev_button")}
            >
              이전
            </button>
            <button
              onClick={handleAmount}
              disabled={purchase?.purchaseSettings?.bankTransfer?.length <= 0}
              className={cx(
                purchase?.purchaseSettings?.bankTransfer?.length <= 0
                  ? "disabled_select_next_button"
                  : "select_next_button"
              )}
            >
              완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
