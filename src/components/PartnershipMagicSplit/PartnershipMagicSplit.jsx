import React from "react";
import classNames from "classnames/bind";
import styles from "./PartnershipMagicSplit.module.scss";
import StrategyHeader from "components/common/StrategyHeader";
import { IoIosArrowDown } from "react-icons/io";
import DateBox from "components/DateBox";
import ResetButton from "components/common/ResetButton";
import OptionItem from "components/common/OptionItem";
import { PARTNER_ASSET_LIST } from "mocks/subData";
import VirtualScroll from "components/common/VirtualScroll";

const cx = classNames.bind(styles);

export default function PartnershipMagicSplit({
  partner,
  partnerSetting,
  split,
  toggle,
  handleChangeStrategy,
  handleChangeSplit,
  handleChangeSingleStockOptiomizationSettings,
  handleChangeRiskFree,
  handleToggle,
  handleChangeAssetClassSettings,
  filterData,
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
      <StrategyHeader
        strategy={partner?.strategy}
        handleChangeTitle={handleChangeStrategy}
        title="하단으로 이동"
      />
      <div className={cx("wrapper")}>
        <ResetButton />
        <p className={cx("title")}>매직스플릿 모드</p>
        <div className={cx("exchange_rate_box")}>
          <div>
            <input
              type="checkbox"
              id="exchange_rate"
              className={cx("hide_check_box", { checked: split === 1 })}
              onClick={() => handleChangeSplit(1)}
            />
            <label className={cx("check_box_label")} htmlFor="exchange_rate">
              <div className={cx("check_box")}>
                <div className={cx("check_box_checked")}></div>
              </div>
              <b className={cx("check_text")}>단일 종목 최적화</b>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="exchange_rates"
              className={cx("hide_check_box", { checked: split === 2 })}
              onClick={() => handleChangeSplit(2)}
            />
            <label className={cx("check_box_label")} htmlFor="exchange_rates">
              <div className={cx("check_box")}>
                <div className={cx("check_box_checked")}></div>
              </div>
              <b className={cx("check_text")}>단일 종목</b>
            </label>
          </div>
        </div>
        <div className={cx("option_wrapper")}>
          {split === 1 && (
            <>
              <div className={cx("option_inner")}>
                <OptionItem
                  title="매수 기준"
                  category="purchaseCriteria"
                  prevField="prevCriteria"
                  nextField="nextCriteria"
                  intervalFiled="criteriaInterval"
                  prevValue={partnerSetting?.purchaseCriteria?.prevCriteria}
                  nextValue={partnerSetting?.purchaseCriteria?.nextCriteria}
                  intervalValue={
                    partnerSetting?.purchaseCriteria?.criteriaInterval
                  }
                  handleChangeSingleStockOptiomizationSettings={
                    handleChangeSingleStockOptiomizationSettings
                  }
                />
                <OptionItem
                  title="매도 기준"
                  category="sellingCriteria"
                  prevField="prevCriteria"
                  nextField="nextCriteria"
                  intervalFiled="criteriaInterval"
                  prevValue={partnerSetting?.sellingCriteria?.prevCriteria}
                  nextValue={partnerSetting?.sellingCriteria?.nextCriteria}
                  intervalValue={
                    partnerSetting?.sellingCriteria?.criteriaInterval
                  }
                  handleChangeSingleStockOptiomizationSettings={
                    handleChangeSingleStockOptiomizationSettings
                  }
                />
                <OptionItem
                  title="진입 금액 비율"
                  category="divisionOrder"
                  prevField="prevCriteria"
                  nextField="nextCriteria"
                  intervalFiled="criteriaInterval"
                  prevValue={partnerSetting?.divisionOrder?.prevCriteria}
                  nextValue={partnerSetting?.divisionOrder?.nextCriteria}
                  intervalValue={
                    partnerSetting?.divisionOrder?.criteriaInterval
                  }
                  handleChangeSingleStockOptiomizationSettings={
                    handleChangeSingleStockOptiomizationSettings
                  }
                />
              </div>
              <div className={cx("option_box")}>
                <p className={cx("option_text")}>무위험 이자 수익</p>
                <div className={cx("option_input_box")}>
                  <input
                    type="number"
                    name="riskFreeInterestIncome"
                    value={partnerSetting?.riskFreeInterestIncome}
                    onChange={handleChangeRiskFree}
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
          {split === 2 && (
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
                <div
                  onClick={() => handleToggle("kind")}
                  className={cx("option_input_box")}
                >
                  <input
                    className={cx("option_input")}
                    type="text"
                    value={partner?.assetClassSettings?.kind}
                    readOnly
                  />
                  <IoIosArrowDown
                    className={cx(
                      toggle.kind
                        ? "active_option_select_arrow"
                        : "option_select_arrow"
                    )}
                  />
                </div>
                <div className={cx("hide_kind")}>
                  {toggle.kind && (
                    <ul className={cx("hide_box")}>
                      {PARTNER_ASSET_LIST.map((list) => (
                        <li key={list.id}>
                          <input
                            name="kind"
                            value={list.name}
                            onClick={handleChangeAssetClassSettings}
                            className={cx(
                              partner?.assetClassSettings?.kind === list.name
                                ? "active_hide_input"
                                : "hide_input"
                            )}
                            type="text"
                            readOnly
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className={cx("asset_class_option_box")}>
                <p className={cx("asset_class_option")}>자산군</p>
                <div
                  onClick={() => handleToggle("assetClass")}
                  className={cx("option_input_box")}
                >
                  <input
                    className={cx("option_input")}
                    type="text"
                    value={partner?.assetClassSettings?.assetClass}
                    readOnly
                  />
                  <IoIosArrowDown
                    className={cx(
                      toggle.assetClass
                        ? "active_option_select_arrow"
                        : "option_select_arrow"
                    )}
                  />
                </div>
                {toggle.assetClass && (
                  <VirtualScroll
                    data={filterData}
                    partner={partner}
                    handleChangeAssetClassSettings={
                      handleChangeAssetClassSettings
                    }
                  />
                )}
              </div>
            </div>
          </div>
          <DateBox
            initialDate={partner?.period}
            dateStart={dateStart}
            dateEnd={dateEnd}
            startMinDate={startMinDate}
            endMinDate={endMinDate}
            handleStartDateToggle={handleStartDateToggle}
            handleEndDateToggle={handleEndDateToggle}
            handleChangeStartDate={handleChangeStartDate}
            handleChangeEndDate={handleChangeEndDate}
          />
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
