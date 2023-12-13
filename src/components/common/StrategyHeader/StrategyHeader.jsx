import React from "react";
import classNames from "classnames/bind";
import styles from "./StrategyHeader.module.scss";

const cx = classNames.bind(styles);

export default function StrategyHeader({
  strategy,
  handleChangeStrategy,
  title,
}) {
  return (
    <div className={cx("title_input_box")}>
      <input
        name="strategy"
        value={strategy}
        onChange={handleChangeStrategy}
        className={cx("title_input")}
        type="text"
        placeholder="전략 이름을 입력해 주세요."
      />
      <button
        className={cx(
          strategy?.length > 0 ? "active_save_button" : "save_button"
        )}
        disabled={strategy?.length < 0}
      >
        저장
      </button>
      <button className={cx("scroll_button")}>{title}</button>
    </div>
  );
}
