import React from "react";
import classNames from "classnames/bind";
import styles from "./BacktestSetting.module.scss";
import { useLocation } from "react-router-dom";
import StrategyHeader from "components/common/StrategyHeader";
import {
  SPECIFICGRAVITYCONTROLLIST,
  PERIODICBALANCINGLIST,
  MONTH_LIST,
  STRATEGY_REBALNCINGS,
} from "mocks/subData";
import DateBox from "components/DateBox";
import ResetButton from "components/common/ResetButton";
import ButtonBox from "components/common/ButtonBox";
import NavBox from "components/common/NavBox";
import SettingBox from "components/common/SettingBox";
import RebalancingBox from "components/common/RebalancingBox";
import MacroMarketBox from "components/common/MacroMarketBox";

const cx = classNames.bind(styles);

export default function BacktestSetting({
  backTest,
  setting,
  rebalancingToggle,
  specificControlToggle,
  splitMode,
  handleChangeSplit,
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
  strategyRebalancingToggle,
  handleStrategyRebalancingToggleToggle,
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
      <div className={cx("fixed_box")}>
        {location.pathname.includes("/backtest/backtest") && (
          <NavBox
            index={3}
            universPathname="유니버스 선택"
            factorPathname="팩터 선택"
            settingPathname="백테스트 셜졍"
            universLink="/backtest/backtest/universe"
            factorLink="/backtest/backtest/factors"
            settingLink="/backtest/backtest/backtest"
          />
        )}
        {location.pathname.includes("/backtest/decile") && (
          <NavBox
            index={3}
            universPathname="유니버스 선택"
            factorPathname="팩터 선택"
            settingPathname="백테스트 셜졍"
            universLink="/backtest/decile/universe"
            factorLink="/backtest/decile/factors"
            settingLink="/backtest/decile/backtest"
          />
        )}
        {location.pathname.includes("/port/trade") && (
          <NavBox
            index={3}
            universPathname="유니버스 선택"
            factorPathname="팩터 선택"
            settingPathname="트레이딩 설정 셜졍"
            universLink="/port/trade/universe"
            factorLink="/port/trade/factors"
            settingLink="/port/trade/port"
          />
        )}
        {location.pathname.includes("/port/past") && (
          <NavBox
            index={3}
            universPathname="유니버스 선택"
            factorPathname="팩터 선택"
            settingPathname="트레이딩 설정 셜졍"
            universLink="/port/past/universe"
            factorLink="/port/past/factors"
            settingLink="/port/past/port"
          />
        )}
        <StrategyHeader
          strategy={backTest?.strategy}
          handleChangeTitle={handleChangeBackTestTitle}
          title="백테스트"
        />
      </div>
      <ResetButton index={3} />
      <div className={cx("inner")}>
        <div className={cx("sub_inner")}>
          <div className={cx("title_box")}>
            <p className={cx("title")}>
              {location.pathname === "/backtest/backtest/backtest" &&
                "백테스트 설정"}
              {location?.pathname === "/port/trade/port" && "포트폴리오 설정"}
            </p>
          </div>
          {location?.pathname !== "/backtest/decile/backtest" && (
            <SettingBox
              title="초기 투자 금액"
              text="만원"
              type="number"
              warningText=""
              fieldName="initialInvestmentAmount"
              placeholder="초기 투자 금액을 입력해 주세요."
              settingValue={setting?.initialInvestmentAmount}
              pathname={location.pathname}
              handleChangeSettings={handleChangeBacktestSettings}
            />
          )}
          {(location.pathname === "/backtest/backtest/backtest" ||
            location.pathname === "/port/past/port") && (
            <SettingBox
              title="거래 수수료"
              text="%"
              type="number"
              warningText="0 ~ 100 까지 입력할 수 있습니다. (0 입력시 비활성화)"
              fieldName="transactionFee"
              settingValue={setting?.transactionFee}
              pathname={location.pathname}
              handleChangeSettings={handleChangeBacktestSettings}
            />
          )}
        </div>
        <div className={cx("sub_inner")}>
          <div className={cx("title_box")}>
            <p className={cx("title")}>
              {(location?.pathname === "/backtest/backtest/backtest" ||
                location.pathname === "/port/past/port") &&
                "리밸런싱 설정"}
              {location?.pathname === "/backtest/decile/backtest" &&
                "10분위 테스트 리밸런싱 설정"}
            </p>
          </div>
          {location?.pathname !== "/port/trade/port" && (
            <RebalancingBox
              title="리밸런싱 기간"
              setting={setting}
              settingValue={setting?.backtestRebalancing}
              data={PERIODICBALANCINGLIST}
              monthList={MONTH_LIST}
              name="backtestRebalancing"
              pathname={location.pathname}
              toggle={rebalancingToggle}
              handleAddMonthList={handleAddMonthList}
              handleToggle={handleRebalancingToggle}
              handleSpecificControlToggle={handleSpecificControlToggle}
              handleChangeSettings={handleChangeBacktestSettings}
            />
          )}
          {location?.pathname === "/backtest/backtest/backtest" && (
            <RebalancingBox
              title="비중 조절 방법"
              setting={setting}
              settingValue={setting?.specificGravityControl}
              data={SPECIFICGRAVITYCONTROLLIST}
              name="specificGravityControl"
              pathname={location.pathname}
              toggle={specificControlToggle}
              handleToggle={handleSpecificControlToggle}
              handleChangeSettings={handleChangeBacktestSettings}
            />
          )}
          {location?.pathname !== "/backtest/decile/backtest" && (
            <SettingBox
              title="종목 수"
              text="개"
              type="number"
              warningText="0 ~ 100 까지 입력할 수 있습니다. (0 입력시 비활성화)"
              fieldName="rebalancingItems"
              settingValue={setting?.rebalancingItems}
              pathname={location.pathname}
              handleChangeSettings={handleChangeBacktestSettings}
              readOnly={true}
            />
          )}
          {location?.pathname === "/port/past/port" && (
            <RebalancingBox
              title="리밸런싱 전략"
              setting={setting}
              settingValue={setting?.strategyRebalancing}
              data={STRATEGY_REBALNCINGS}
              name="strategyRebalancing"
              pathname={location.pathname}
              toggle={strategyRebalancingToggle}
              handleToggle={handleStrategyRebalancingToggleToggle}
              handleChangeSettings={handleChangeBacktestSettings}
            />
          )}
        </div>
        {(location.pathname === "/backtest/backtest/backtest" ||
          location.pathname === "/port/past/port") && (
          <div className={cx("sub_inner")}>
            <div className={cx("title_box")}>
              <p className={cx("title")}>손/익절 설정</p>
            </div>
            <SettingBox
              title="손절 기준"
              text="%"
              type="number"
              warningText="0 ~ 70 까지 입력할 수 있습니다. (0 입력시 비활성화)"
              fieldName="stopStandard"
              settingValue={setting?.stopStandard}
              pathname={location.pathname}
              handleChangeSettings={handleChangeBacktestSettings}
            />
            <SettingBox
              title="익절 기준"
              text="%"
              type="number"
              warningText="0 ~ 10,000 까지 입력할 수 있습니다. (0 입력시 비활성화)"
              fieldName="lossStandard"
              settingValue={setting?.lossStandard}
              pathname={location.pathname}
              handleChangeSettings={handleChangeBacktestSettings}
            />
          </div>
        )}
        <div className={cx("sub_inner")}>
          <div className={cx("title_box")}>
            <p className={cx("title")}>마켓 타이밍 설정</p>
          </div>
          <MacroMarketBox
            setting={backTest}
            splitMode={splitMode}
            macroToggle={macroToggle}
            handleChangeSplit={handleChangeSplit}
            handleChangeReentryMarketSettings={
              handleChangeReentryMarketSettings
            }
            handleMacroToggle={handleMacroToggle}
            handleChangeMacroMarketSettings={handleChangeMacroMarketSettings}
            handleRemoveMacroMarketSettings={handleRemoveMacroMarketSettings}
            handleAddMacroMarketSettings={handleAddMacroMarketSettings}
          />
        </div>
        {location.pathname !== "/port/trade/port" && (
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
        )}
        <div className={cx("button_box")}>
          {location.pathname === "/backtest/backtest/backtest" && (
            <ButtonBox prevNav="/backtest/backtest/factors" />
          )}
          {location.pathname === "/backtest/decile/backtest" && (
            <ButtonBox prevNav="/backtest/decile/factors" />
          )}
          {location.pathname === "/port/trade/port" && (
            <ButtonBox prevNav="/port/trade/factors" />
          )}
          {location.pathname === "/port/past/port" && (
            <ButtonBox prevNav="/port/past/factors" />
          )}
          {location.pathname.includes("backtest/backtest") ||
          location.pathname.includes("decile/backtest") ? (
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
            </button>
          ) : (
            <button
              onClick={() =>
                handleVerification(
                  location.pathname.includes("trade/port")
                    ? "포트추출이"
                    : "과거 거래내역 보기가"
                )
              }
              className={cx("button")}
            >
              {location.pathname.includes("trade/port")
                ? "포트추출"
                : "과거 거래내역 보기"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
