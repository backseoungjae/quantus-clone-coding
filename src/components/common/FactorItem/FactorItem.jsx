import React from "react";
import classNames from "classnames/bind";
import styles from "./FactorItem.module.scss";

const cx = classNames.bind(styles);

export default function FactorItem({ factorData, handleChange }) {
  return (
    <>
      {factorData?.length > 0 && (
        <div className={cx("container")}>
          <div className={cx("inner")}>
            {factorData?.map((item, i) => (
              <div key={item?.id} className={cx("item_box")}>
                <p className={cx("item_name")}>{`${item?.name} 가중치`}</p>
                <div className={cx("input_box")}>
                  <input
                    name="aggravated"
                    value={item?.aggravated}
                    onChange={(e) => handleChange(e, i)}
                    className={cx("input")}
                    type="number"
                  />
                  <div className={cx("button_box")}>
                    <button
                      name="topAndBottom"
                      value="상위"
                      onClick={(e) => handleChange(e, i)}
                      className={cx(
                        item?.topAndBottom === "상위"
                          ? "active_button"
                          : "button"
                      )}
                    >
                      상위
                    </button>
                    <button
                      name="topAndBottom"
                      value="하위"
                      onClick={(e) => handleChange(e, i)}
                      className={cx(
                        item?.topAndBottom === "하위"
                          ? "active_button"
                          : "button"
                      )}
                    >
                      하위
                    </button>
                  </div>
                </div>
                <p className={cx("warning_text")}>
                  0 ~ 100 까지 입력할 수 있습니다.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
