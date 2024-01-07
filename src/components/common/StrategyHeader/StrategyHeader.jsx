import React, { useCallback } from "react";
import classNames from "classnames/bind";
import styles from "./StrategyHeader.module.scss";

const cx = classNames.bind(styles);

export default function StrategyHeader({
  strategy,
  handleChangeTitle,
  handleClick,
  title,
}) {
  const handleSave = useCallback(() => {
    alert("저장이 완료 되었습니다.");
  }, []);

  return (
    <div className={cx("title_input_box")}>
      <input
        name="strategy"
        value={strategy}
        onChange={handleChangeTitle}
        className={cx("title_input")}
        type="text"
        placeholder="전략 이름을 입력해 주세요."
      />
      <button
        className={cx(
          strategy?.length > 0 ? "active_save_button" : "save_button"
        )}
        onClick={handleSave}
        disabled={strategy?.length < 0}
      >
        저장
      </button>
      {title === "하단으로 이동" ? (
        <button onClick={handleClick} className={cx("scroll_button")}>
          {title}
        </button>
      ) : (
        <button
          onClick={() => handleClick(title)}
          className={cx("scroll_button")}
        >
          {title}
        </button>
      )}
    </div>
  );
}
