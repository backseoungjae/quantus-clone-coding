import React from "react";
import classNames from "classnames/bind";
import styles from "./BacktestExceptSector.module.scss";

const cx = classNames.bind(styles);

export default function BacktestExceptSector({
  exceptLists,
  EXCEPT_SECTORS,
  onCheckedExceptItem,
  isCheckedExcept,
}) {
  return (
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
                checked: exceptLists.filter((el) => el?.name === filter?.name)
                  ?.length,
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
