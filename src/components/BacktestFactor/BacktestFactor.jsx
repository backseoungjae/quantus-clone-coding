import React from "react";
import classNames from "classnames/bind";
import styles from "./BacktestFactor.module.scss";
import { Link } from "react-router-dom";
import StrategyHeader from "components/common/StrategyHeader";
import { IoIosArrowDown } from "react-icons/io";
import { FACTORS } from "mocks/subData";
import InputFactor from "components/common/InputFactor";
import Popup from "components/common/Popup";

const cx = classNames.bind(styles);

export default function BacktestFactor({
  backTest,
  toggle,
  handleToggle,
  handleChagneBackTestTitle,
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
  VALUE_FACTORS,
  EV_FACTORS,
  QUALITY_FACTORS,
  PRICE_FACTORS,
  GROWTH_POTENTIAL_FACTORS,
  CONSENSUS_FACTORS,
  ACCELERATION_FACTORS,
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
        <Link className={cx("nav_item")} to="/backtest/backtest/backtest">
          백테스트 셜졍
        </Link>
      </div>
      <StrategyHeader
        strategy={backTest?.strategy}
        handleChangeTitle={handleChagneBackTestTitle}
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
          <hr className={cx("step_line")} />
          <p className={cx("step_number")}>3</p>
        </div>
      </div>
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
            data={VALUE_FACTORS}
            factorData={valueFactorData}
            onCheckedItem={onCheckedValueFactorItem}
            isChecked={isValueFactorChecked}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="가치 팩터 (EV 관련)"
            data={EV_FACTORS}
            factorData={evFactorData}
            onCheckedItem={onCheckedEvFactorItem}
            isChecked={isEvFactorChecked}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="퀄리티 팩터"
            data={QUALITY_FACTORS}
            factorData={qualityFactorData}
            onCheckedItem={onCheckedQualityFactorItem}
            isChecked={isQualityFactorChecked}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="가격 팩터"
            data={PRICE_FACTORS}
            factorData={priceFactorData}
            onCheckedItem={onCheckedPriceFactorItem}
            isChecked={isPriceFactorChecked}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="성장성 팩터"
            data={GROWTH_POTENTIAL_FACTORS}
            factorData={growthFactorData}
            onCheckedItem={onCheckedGrowthFactorItem}
            isChecked={isGrowthFactorChecked}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="가속 팩터"
            data={ACCELERATION_FACTORS}
            factorData={accelerationFactorData}
            onCheckedItem={onCheckedAccelerationFactorItem}
            isChecked={isAccelerationFactorChecked}
          />
        </div>
        <div className={cx("input_factor_inner")}>
          <InputFactor
            title="컨센서스 팩터"
            data={CONSENSUS_FACTORS}
            factorData={consensusFactorData}
            onCheckedItem={onCheckedConsensusFactorItem}
            isChecked={isConsensusFactorChecked}
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
            to="/backtest/backtest/universe"
            className={cx("button", "prev_button")}
          >
            <img
              className={cx("prev_button_img")}
              src="/images/prev_img.svg"
              alt="다음 버튼 화살표 이미지"
            />
            이전
          </Link>
          <Link to="/backtest/backtest/factors" className={cx("button")}>
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
