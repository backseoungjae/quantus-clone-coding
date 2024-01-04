import React from "react";
import classNames from "classnames/bind";
import styles from "./OptionItem.module.scss";

const cx = classNames.bind(styles);

export default function OptionItem({
  title,
  category,
  prevField,
  nextField,
  intervalFiled,
  prevValue,
  nextValue,
  intervalValue,
  handleChangeSingleStockOptiomizationSettings,
}) {
  return (
    <div className={cx("option_item_inner")}>
      <div className={cx("option_item_left_box")}>
        <p className={cx("option_text")}>{title}</p>
        <div className={cx("option_item_box")}>
          <div className={cx("option_item")}>
            <input
              type="number"
              name="prevCriteria"
              value={prevValue}
              onChange={(e) =>
                handleChangeSingleStockOptiomizationSettings(
                  category,
                  prevField,
                  e.target.value
                )
              }
              className={cx("option_input")}
            />
            <p className={cx("option_input_text", "option_input_percent")}>%</p>
            <p className={cx("warning_text")}>
              0 ~ 100 까지 입력할 수 있습니다.
            </p>
          </div>
          <p className={cx("option_item_space")}>~</p>
          <div className={cx("option_item")}>
            <input
              type="number"
              name="nextCriteria"
              value={nextValue}
              onChange={(e) =>
                handleChangeSingleStockOptiomizationSettings(
                  category,
                  nextField,
                  e.target.value
                )
              }
              className={cx("option_input")}
            />
            <p className={cx("option_input_text", "option_input_percent")}>%</p>
            <p className={cx("warning_text")}>
              0 ~ 100 까지 입력할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className={cx("option_item_right_box")}>
        <p className={cx("option_text")}>간격</p>
        <div className={cx("option_interval_item")}>
          <input
            type="number"
            name="criteriaInterval"
            value={intervalValue}
            onChange={(e) =>
              handleChangeSingleStockOptiomizationSettings(
                category,
                intervalFiled,
                e.target.value
              )
            }
            className={cx("option_input")}
          />
          <p className={cx("option_input_text", "option_input_percent")}>%</p>
          <p className={cx("warning_text")}>
            간격은 범위를 벗어날 수 없습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
