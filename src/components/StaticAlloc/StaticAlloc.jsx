import React from "react";
import classNames from "classnames/bind";
import styles from "./StaticAlloc.module.scss";
import StrategyHeader from "components/common/StrategyHeader";
import ResetButton from "components/common/ResetButton";
import RebalancingBox from "components/common/RebalancingBox";
import SettingBox from "components/common/SettingBox";
import {
  MONTH_LIST,
  PERIODICALLOCBALANCINGLIST,
  STRATEGY_ALLOCACTION_LIST,
} from "mocks/subData";
import DateBox from "components/DateBox";
import StaticAsset from "components/StaticAsset";

const cx = classNames.bind(styles);

export default function StaticAlloc({
  alloc,
  setting,
  distributionToggle,
  rebalancingToggle,
  handleDistributionToggle,
  handleRebalancingToggle,
  handleChangeAllocSetting,
  handleChangeAllocTitle,
  handleAddMonthList,
  handleCheckedAllEntireExchangeRate,
  handleCheckedReflectExchangeRate,
  scrollRef,
  scrollToBottom,
  // 자산군 부분
  data,
  assetClass,
  kindToggle,
  assetClassToggle,
  handleAssetToggle,
  handleKindToggle,
  handleAssetClassToggle,
  handleAddAssetList,
  handleChangeAsset,
  handleRemoveAssetClass,
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
    <div ref={scrollRef} className={cx("container")}>
      <StrategyHeader
        strategy={alloc?.strategy}
        handleChangeTitle={handleChangeAllocTitle}
        handleClick={scrollToBottom}
        title="하단으로 이동"
      />
      <ResetButton />
      <div className={cx("inner")}>
        <div className={cx("sub_inner")}>
          <div className={cx("title_box")}>
            <p className={cx("title")}>자산배분 설정</p>
          </div>
          <RebalancingBox
            title="자산배분 알고리즘"
            setting={setting}
            settingValue={setting?.staticAlog}
            data={STRATEGY_ALLOCACTION_LIST}
            name="staticAlog"
            toggle={distributionToggle}
            handleToggle={handleDistributionToggle}
            handleChangeSettings={handleChangeAllocSetting}
          />
          <SettingBox
            title="초기 투자 금액"
            text="만원"
            type="number"
            warningText=""
            fieldName="initialInvestment"
            settingValue={setting?.initialInvestment}
            handleChangeSettings={handleChangeAllocSetting}
          />
          <RebalancingBox
            title="주기 리밸런싱"
            setting={setting}
            settingValue={setting?.staticRebalancing}
            data={PERIODICALLOCBALANCINGLIST}
            monthList={MONTH_LIST}
            name="staticRebalancing"
            toggle={rebalancingToggle}
            handleAddMonthList={handleAddMonthList}
            handleToggle={handleRebalancingToggle}
            handleChangeSettings={handleChangeAllocSetting}
          />
          <SettingBox
            title="밴드 리밸런싱"
            text="%"
            type="number"
            warningText="0 ~ 100 까지 입력할 수 있습니다. (0 입력시 비활성화)"
            fieldName="bandRebalancing"
            settingValue={setting?.bandRebalancing}
            handleChangeSettings={handleChangeAllocSetting}
          />
          <div className={cx("option_box")}>
            <div className={cx("exchange_rate_box")}>
              <input
                type="checkbox"
                name="isReflectEntireExchangeRate"
                id="allReflectExchangeRate"
                className={cx("hide_check_box", {
                  checked: setting?.isReflectEntireExchangeRate,
                })}
                onChange={handleCheckedAllEntireExchangeRate}
              />
              <label
                className={cx("check_box_label")}
                htmlFor="allReflectExchangeRate"
              >
                <div className={cx("check_box")}>
                  <div className={cx("check_box_checked")}></div>
                </div>
                <b className={cx("check_text")}>전체 환율 반영</b>
              </label>
            </div>
          </div>
        </div>
        <StaticAsset
          data={data}
          alloc={alloc}
          assetClass={assetClass}
          kindToggle={kindToggle}
          assetClassToggle={assetClassToggle}
          handleAssetToggle={handleAssetToggle}
          handleKindToggle={handleKindToggle}
          handleAssetClassToggle={handleAssetClassToggle}
          handleAddAssetList={handleAddAssetList}
          handleChangeAsset={handleChangeAsset}
          handleRemoveAssetClass={handleRemoveAssetClass}
          handleCheckedReflectExchangeRate={handleCheckedReflectExchangeRate}
        />
        <div className={cx("sub_inner")}>
          <DateBox
            initialDate={alloc?.period}
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
