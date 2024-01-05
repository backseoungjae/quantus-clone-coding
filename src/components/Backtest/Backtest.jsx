import React from "react";
import classNames from "classnames/bind";
import styles from "./Backtest.module.scss";
import StrategyHeader from "components/common/StrategyHeader";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { UNIVERS } from "mocks/subData";
import Popup from "components/common/Popup";
import BacktestRankingItem from "components/BacktestRankingItem";
import BacktestInitialFilter from "components/BacktestInitialFilter";
import BacktestExceptSector from "components/BacktestExceptSector";
import ResetButton from "components/common/ResetButton";
import ButtonBox from "components/common/ButtonBox";
import NavBox from "components/common/NavBox";

const cx = classNames.bind(styles);

export default function Backtest({
  backTest,
  toggle,
  initialCheckList,
  exceptLists,
  customToggle,
  handleCustomToggle,
  handleToggle,
  handleChangeBackTestTitle,
  handleChangeUniversSettings,
  onClickCheckAll,
  onCheckedItem,
  isChecked,
  onCheckedExceptItem,
  isCheckedExcept,
  moveItemHandler,
  INITIAL_FITERS,
  EXCEPT_SECTORS,
  dragStart,
  dragEnter,
  drop,
}) {
  const location = useLocation();

  return (
    <div className={cx("container")}>
      {location.pathname.includes("/backtest/backtest") && (
        <NavBox
          index={1}
          universLink="/backtest/backtest/universe"
          factorLink="/backtest/backtest/factors"
          settingLink="/backtest/backtest/backtest"
        />
      )}
      {location.pathname.includes("/backtest/decile") && (
        <NavBox
          index={1}
          universLink="/backtest/decile/universe"
          factorLink="/backtest/decile/factors"
          settingLink="/backtest/decile/backtest"
        />
      )}
      <StrategyHeader
        strategy={backTest?.strategy}
        handleChangeTitle={handleChangeBackTestTitle}
        title="백테스트"
      />
      <ResetButton index={1} />
      <div className={cx("inner")}>
        <div className={cx("inner_nav_box")}>
          <Link
            className={cx(
              location.pathname.includes("backtest/backtest")
                ? "active_inner_nav"
                : "inner_nav"
            )}
            to="/backtest/backtest/universe"
          >
            백테스트
          </Link>
          <Link
            className={cx(
              location.pathname.includes("backtest/decile")
                ? "active_inner_nav"
                : "inner_nav"
            )}
            to="/backtest/decile/universe"
          >
            10분위 테스트
          </Link>
          <hr className={cx("bottom_hr")} />
        </div>
        <div className={cx("option_box")}>
          <p className={cx("option_text")}>유니버스 선택</p>
          <div onClick={handleToggle} className={cx("option_input_box")}>
            <input
              className={cx("option_input")}
              type="text"
              readOnly
              value={
                backTest?.settings?.univers
                  ? backTest?.settings?.univers
                  : "국가를 선택해주세요."
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
              {UNIVERS.map((list) => (
                <li key={list.id}>
                  <input
                    name="univers"
                    value={list.name}
                    onClick={handleChangeUniversSettings}
                    className={cx(
                      list.name === backTest?.settings?.univers
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
        <BacktestInitialFilter
          initialCheckList={initialCheckList}
          INITIAL_FITERS={INITIAL_FITERS}
          onClickCheckAll={onClickCheckAll}
          onCheckedItem={onCheckedItem}
          isChecked={isChecked}
        />
        <div className={cx("check_list_box")}>
          <BacktestExceptSector
            exceptLists={exceptLists}
            EXCEPT_SECTORS={EXCEPT_SECTORS}
            onCheckedExceptItem={onCheckedExceptItem}
            isCheckedExcept={isCheckedExcept}
          />
          <div className={cx("add_button_box")}>
            <p className={cx("check_list_title", "add_button_text")}>
              커스텀 필터
            </p>
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
          {initialCheckList?.length ? (
            <div>
              <div className={cx("check_list_title_box")}>
                <p className={cx("check_list_title")}>필터 순위 지정</p>
                <div className={cx("ranking_box")}>
                  <p className={cx("ranking_text")}>순위 변경 방법</p>
                  <span className={cx("ranking_b")}>?</span>
                  <div className={cx("ranking_explanation_hide_box")}>
                    <div className={cx("ranking_explanation_box")}>
                      <img
                        className={cx("ranking_explanation_img")}
                        src="/images/hambargerbar.svg"
                        alt="설명 이미지"
                      />
                      <p className={cx("ranking_explanation_text")}>
                        아이콘을 잡고 원하시는 위치로 드래그해주세요.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {initialCheckList?.map((item, index) => (
                <BacktestRankingItem
                  dragStart={dragStart}
                  dragEnter={dragEnter}
                  drop={drop}
                  key={item?.id}
                  item={item}
                  id={item?.id}
                  index={index}
                  moveItemHandler={moveItemHandler}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div className={cx("button_box")}>
          {location.pathname === "/backtest/backtest/universe" && (
            <ButtonBox nextNav="/backtest/backtest/factors" />
          )}
          {location.pathname === "/backtest/decile/universe" && (
            <ButtonBox nextNav="/backtest/decile/factors" />
          )}
        </div>
      </div>
    </div>
  );
}
