import React from "react";
import classNames from "classnames/bind";
import styles from "./SettingBox.module.scss";

const cx = classNames.bind(styles);

export default function SettingBox({
  title,
  text,
  type,
  warningText,
  fieldName,
  settingValue,
  pathname,
  handleChangeBacktestSettings,
}) {
  return (
    <div className={cx("option_box")}>
      <p className={cx("option_text")}>{title}</p>
      <div className={cx("option_input_box")}>
        <input
          type={type}
          name={fieldName}
          onChange={handleChangeBacktestSettings}
          value={settingValue}
          placeholder="초기 투자 금액을 입력해 주세요."
          className={cx("option_input")}
        />
        <p
          className={cx(
            text === "%" || text === "개"
              ? "option_input_percent"
              : "option_input_text"
          )}
        >
          {text}
        </p>
        <p className={cx("warning_text")}>{warningText}</p>
      </div>
    </div>
  );
}
