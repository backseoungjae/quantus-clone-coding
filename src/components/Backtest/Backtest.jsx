import React from "react";
import classNames from "classnames/bind";
import styles from "./Backtest.module.scss";
import StrategyHeader from "components/common/StrategyHeader";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { NAV_ITEM, UNIVERS } from "mocks/subData";

const cx = classNames.bind(styles);

export default function Backtest({
  backTest,
  toggle,
  initialCheckList,
  exceptLists,
  handleToggle,
  handleChagneBackTestTitle,
  handleChangeUniversSettings,
  onClickCheckAll,
  onCheckedItem,
  isChecked,
  onCheckedExceptItem,
  isCheckedExcept,
  INITIAL_FITERS,
  EXCEPT_SECTORS,
}) {
  const location = useLocation();

  return (
    <div className={cx("container")}>
      <div className={cx("nav_box")}>
        {NAV_ITEM.map((nav) => (
          <Link
            className={cx(
              location?.pathname === nav.path ? "active_nav_item" : "nav_item"
            )}
            key={nav.id}
            to={nav.path}
          >
            {`${nav.pathName}`}
          </Link>
        ))}
      </div>
      <StrategyHeader
        strategy={backTest?.strategy}
        handleChangeTitle={handleChagneBackTestTitle}
        title="백테스트"
      />
      <button className={cx("reset_button")}>
        <img
          className={cx("reset_img")}
          src="/images/reset.svg"
          alt="초기화 버튼 아이콘"
        />
        설정 값 초기화
      </button>
      <div className={cx("inner")}>
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
        <div className={cx("check_list_box")}>
          <div className={cx("check_list_title_box")}>
            <p className={cx("check_list_title")}>기본 필터</p>
            <div>
              <input
                type="checkbox"
                onChange={onClickCheckAll}
                className={cx("hide_check_box", {
                  checked: INITIAL_FITERS.length === initialCheckList.length,
                })}
                id="initial_filter_all"
              />
              <label
                className={cx("check_box_label")}
                htmlFor="initial_filter_all"
              >
                <div className={cx("check_box")}>
                  <div className={cx("check_box_checked")}></div>
                </div>
                <b className={cx("check_text")}>전체 선택</b>
              </label>
            </div>
          </div>
          <div className={cx("filters_list_inner")}>
            {INITIAL_FITERS.map((filter) => (
              <div key={filter.name} className={cx("filter_item")}>
                <input
                  type="checkbox"
                  onChange={() => onCheckedItem(filter)}
                  checked={isChecked(filter)}
                  className={cx("hide_check_box", {
                    checked: initialCheckList.filter(
                      (el) => el?.name === filter?.name
                    )?.length,
                  })}
                  id={filter.name}
                />
                <label className={cx("check_box_label")} htmlFor={filter.name}>
                  <div className={cx("check_box")}>
                    <div className={cx("check_box_checked")}></div>
                  </div>
                  <b className={cx("check_text")}>{filter.name}</b>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("check_list_box")}>
          <div className={cx("check_list_title_box")}>
            <p className={cx("check_list_title")}>제외할 섹터</p>
          </div>
          <div className={cx("filters_list_inner")}>
            {EXCEPT_SECTORS.map((filter) => (
              <div key={filter.name} className={cx("filter_item")}>
                <input
                  type="checkbox"
                  onChange={() => onCheckedExceptItem(filter)}
                  checked={isCheckedExcept(filter)}
                  className={cx("hide_check_box", {
                    checked: exceptLists.filter(
                      (el) => el?.name === filter?.name
                    )?.length,
                  })}
                  id={filter.name}
                />
                <label className={cx("check_box_label")} htmlFor={filter.name}>
                  <div className={cx("check_box")}>
                    <div className={cx("check_box_checked")}></div>
                  </div>
                  <b className={cx("check_text")}>{filter.name}</b>
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className={cx("add_button_box")}>
          <p className={cx("check_list_title", "add_button_text")}>
            커스텀 필터
          </p>
          <button className={cx("add_button")}>추가하기</button>
        </div>
      </div>
    </div>
  );
}
