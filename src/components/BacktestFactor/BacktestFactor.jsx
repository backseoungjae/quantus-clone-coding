import React from "react";
import classNames from "classnames/bind";
import styles from "./BacktestFactor.module.scss";
import { Link, useLocation } from "react-router-dom";
import StrategyHeader from "components/common/StrategyHeader";
import { IoIosArrowDown } from "react-icons/io";
import { FACTORS } from "mocks/subData";
import InputFactor from "components/common/InputFactor";
import Popup from "components/common/Popup";
import FactorItem from "components/common/FactorItem";
import ResetButton from "components/common/ResetButton";

const cx = classNames.bind(styles);

export default function BacktestFactor({
  backTest,
  toggle,
  handleToggle,
  handleChangeBackTestTitle,
  handleChangeCalculationWeight,
  valueFactorData,
  evFactorData,
  qualityFactorData,
  priceFactorData,
  growthFactorData,
  accelerationFactorData,
  consensusFactorData,
  onCheckedValueFactorItem,
  isValueFactorChecked,
  onCheckedEvFactorItem,
  isEvFactorChecked,
  onCheckedQualityFactorItem,
  isQualityFactorChecked,
  onCheckedPriceFactorItem,
  isPriceFactorChecked,
  onCheckedGrowthFactorItem,
  isGrowthFactorChecked,
  onCheckedAccelerationFactorItem,
  isAccelerationFactorChecked,
  onCheckedConsensusFactorItem,
  isConsensusFactorChecked,
  customToggle,
  handleCustomToggle,
  handleOnChangeValueFactor,
  handleOnChangeEvFactors,
  handleOnChangeQualityFactors,
  handleOnChangePriceFactors,
  handleOnChangeGrowthFactors,
  handleOnChangeAccelerationFactors,
  handleOnChangeConsensusFactors,
  handleCheckedFactors,
  VALUE_FACTORS,
  EV_FACTORS,
  QUALITY_FACTORS,
  PRICE_FACTORS,
  GROWTH_POTENTIAL_FACTORS,
  CONSENSUS_FACTORS,
  ACCELERATION_FACTORS,
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
          className={cx("nav_item")}
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
      <ResetButton index={2} />
      <div className={cx("inner")}>
        <div className={cx("option_box")}>
          <p className={cx("option_text")}>팩터 선택</p>
          <p className={cx("option_sub_text")}>팩터 비중 산출</p>
          <div onClick={handleToggle} className={cx("option_input_box")}>
            <input
              className={cx("option_input")}
              type="text"
              readOnly
              value={
                backTest?.factor?.calculationWeight
                  ? backTest?.factor?.calculationWeight
                  : "동일 비중 결합"
              }
            />
            <IoIosArrowDown
              className={cx(
                toggle ? "active_option_select_arrow" : "option_select_arrow"
              )}
            />
          </div>
          {toggle && (
            <ul className={cx("hide_box")}>
              {FACTORS.map((list) => (
                <li key={list.id}>
                  <input
                    name="calculationWeight"
                    value={list.name}
                    onClick={handleChangeCalculationWeight}
                    className={cx(
                      list.name === backTest?.factor?.calculationWeight
                        ? "active_hide_input"
                        : "hide_input"
                    )}
                    type="text"
                    readOnly
                    disabled={list.id !== 1}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="가치 팩터 (Price 관련)"
            factorType="valueFactors"
            handleCheckedFactors={handleCheckedFactors}
            data={VALUE_FACTORS}
            factorData={backTest?.factors?.valueFactors}
          />
          <FactorItem
            factorData={backTest?.factors?.valueFactors}
            handleChange={handleOnChangeValueFactor}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="가치 팩터 (EV 관련)"
            factorType="evFactors"
            handleCheckedFactors={handleCheckedFactors}
            data={EV_FACTORS}
            factorData={backTest?.factors?.evFactors}
          />
          <FactorItem
            factorData={backTest?.factors?.evFactors}
            handleChange={handleOnChangeEvFactors}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="퀄리티 팩터"
            factorType="qualityFactors"
            handleCheckedFactors={handleCheckedFactors}
            data={QUALITY_FACTORS}
            factorData={backTest?.factors?.qualityFactors}
          />
          <FactorItem
            factorData={backTest?.factors?.qualityFactors}
            handleChange={handleOnChangeQualityFactors}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="가격 팩터"
            factorType="priceFactors"
            handleCheckedFactors={handleCheckedFactors}
            data={PRICE_FACTORS}
            factorData={backTest?.factors?.priceFactors}
          />
          <FactorItem
            factorData={backTest?.factors?.priceFactors}
            handleChange={handleOnChangePriceFactors}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="성장성 팩터"
            factorType="growthPotentialFactors"
            handleCheckedFactors={handleCheckedFactors}
            data={GROWTH_POTENTIAL_FACTORS}
            factorData={backTest?.factors?.growthPotentialFactors}
          />
          <FactorItem
            factorData={backTest?.factors?.growthPotentialFactors}
            handleChange={handleOnChangeGrowthFactors}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="가속 팩터"
            factorType="accelerationFactors"
            handleCheckedFactors={handleCheckedFactors}
            data={ACCELERATION_FACTORS}
            factorData={backTest?.factors?.accelerationFactors}
          />
          <FactorItem
            factorData={backTest?.factors?.accelerationFactors}
            handleChange={handleOnChangeAccelerationFactors}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="컨센서스 팩터"
            factorType="consensusFactors"
            handleCheckedFactors={handleCheckedFactors}
            data={CONSENSUS_FACTORS}
            factorData={backTest?.factors?.consensusFactors}
          />
          <FactorItem
            factorData={backTest?.factors?.consensusFactors}
            handleChange={handleOnChangeConsensusFactors}
          />
        </div>
        <div className={cx("add_button_box")}>
          <p className={cx("option_text", "add_button_text")}>커스텀 필터</p>
          <button onClick={handleCustomToggle} className={cx("add_button")}>
            추가하기
          </button>
          {customToggle && (
            <Popup
              title="사용권 미보유"
              text={`사용권을 보유하고 있지 않습니다.\n사용권을 구매하러 가시겠어요?`}
              handleToggle={handleCustomToggle}
            />
          )}
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
          <Link
            to={
              location.pathname.includes("backtest/backtest")
                ? "/backtest/backtest/backtest"
                : "/backtest/decile/backtest"
            }
            className={cx("button")}
          >
            다음
            <img
              className={cx("button_img")}
              src="/images/next_button.svg"
              alt="다음 버튼 화살표 이미지"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
