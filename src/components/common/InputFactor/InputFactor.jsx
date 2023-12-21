import React from "react";
import classNames from "classnames/bind";
import styles from "./InputFactor.module.scss";

const cx = classNames.bind(styles);

export default function InputFactor({
  title,
  data,
  factorData,
  onCheckedItem,
  isChecked,
}) {
  return (
    <div className={cx("container")}>
      <p className={cx("title")}>{title}</p>
      <div className={cx("check_list_box")}>
        <div className={cx("filters_list_inner")}>
          {data.map((factor) => (
            <div key={factor.name} className={cx("filter_item")}>
              <div className={cx("explanation_hide_box")}>
                <div className={cx("explanation_box")}>
                  <p className={cx("explanation_text")}>{factor.text}</p>
                </div>
              </div>
              <input
                type="checkbox"
                onChange={() => onCheckedItem(factor)}
                checked={isChecked(factor)}
                className={cx("hide_check_box", {
                  checked: factorData.filter((el) => el?.name === factor?.name)
                    ?.length,
                })}
                id={factor.name}
              />
              <label className={cx("check_box_label")} htmlFor={factor.name}>
                <div className={cx("check_box")}>
                  <div className={cx("check_box_checked")}></div>
                </div>
                <b className={cx("check_text")}>{factor.name}</b>
                <span className={cx("check_b")}>?</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
