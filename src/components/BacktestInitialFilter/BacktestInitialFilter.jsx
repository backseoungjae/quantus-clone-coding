import React from "react";
import classNames from "classnames/bind";
import styles from "./BacktestInitialFilter.module.scss";

const cx = classNames.bind(styles);

export default function BacktestInitialFilter({
  initialCheckList,
  INITIAL_FITERS,
  onClickCheckAll,
  onCheckedItem,
  isChecked,
}) {
  return (
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
          <label className={cx("check_box_label")} htmlFor="initial_filter_all">
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
  );
}
