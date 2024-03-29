import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./InputFactor.module.scss";

const cx = classNames.bind(styles);

export default function InputFactor({
  title,
  factorType,
  handleCheckedFactors,
  data,
  factorData,
}) {
  const [factorsList, setFactorsList] = useState(factorData);

  const onCheckedFactorItem = useCallback(
    (list) => {
      if (factorsList.every((el) => el.id !== list.id)) {
        setFactorsList([...factorsList, list]);
      } else {
        const result = factorsList.filter((el) => el.id !== list.id);
        setFactorsList(result);
      }
    },
    [factorsList]
  );

  const isFactorChecked = useCallback(
    (list) => {
      return factorsList.some((el) => el.id === list.id);
    },
    [factorsList]
  );

  useEffect(() => {
    handleCheckedFactors([...factorsList], factorType);
  }, [handleCheckedFactors, factorsList, factorType]);

  return (
    <div className={cx("container")}>
      <p className={cx("title")}>{title}</p>
      <div className={cx("check_list_box")}>
        <div className={cx("filters_list_inner")}>
          {data.map((factor) => (
            <div
              key={factor.name}
              className={cx(
                title === "컨센서스 팩터" || title === "가속 팩터"
                  ? "consensus_filter_item"
                  : "filter_item"
              )}
            >
              <div className={cx("explanation_hide_box")}>
                <div className={cx("explanation_box")}>
                  <p className={cx("explanation_text")}>{factor.text}</p>
                </div>
              </div>
              <input
                type="checkbox"
                onChange={() => onCheckedFactorItem(factor)}
                checked={isFactorChecked(factor)}
                className={cx("hide_check_box", {
                  checked: factorsList.filter((el) => el?.name === factor?.name)
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
