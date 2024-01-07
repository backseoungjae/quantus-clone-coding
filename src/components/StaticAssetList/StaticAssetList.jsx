import React from "react";
import classNames from "classnames/bind";
import styles from "./StaticAssetList.module.scss";
import { STRATEGYLIST } from "mocks/subData";
import { AiOutlineClose } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const cx = classNames.bind(styles);

export default function StaticAssetList({
  asset,
  i,
  data,
  kindToggle,
  handleKindToggle,
  handleAssetClassToggle,
  assetClassToggle,
  handleChangeAsset,
  handleRemoveAssetClass,
  handleCheckedReflectExchangeRate,
}) {
  return (
    <div className={cx("add_list_box")}>
      <div className={cx("close_box")}>
        <AiOutlineClose
          onClick={() => handleRemoveAssetClass(i)}
          className={cx("close_img")}
        />
      </div>
      <div className={cx("add_info_box")}>
        <div className={cx("add_info_title_box")}>
          <p className={cx("add_info_title")}>
            자산
            {String(i + 1).padStart(2, "0")}
          </p>
        </div>
      </div>
      <div className={cx("option_wrapper")}>
        <div className={cx("option_box")}>
          <p className={cx("option_text")}>종류</p>
          <div
            onClick={() => handleKindToggle(i)}
            className={cx("option_input_box")}
          >
            <input
              className={cx("option_input")}
              type="text"
              readOnly
              value={asset?.kind}
            />
            <IoIosArrowDown
              className={cx(
                kindToggle[i]
                  ? "active_option_select_arrow"
                  : "option_select_arrow"
              )}
            />
          </div>
          {kindToggle[i] && (
            <ul className={cx("hide_box")}>
              {STRATEGYLIST.map((list) => (
                <li key={list.id}>
                  <input
                    name="kind"
                    value={list.kind}
                    onClick={(e) => handleChangeAsset(e, i)}
                    className={cx(
                      list.kind === asset?.kind
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
        <div className={cx("option_box")}>
          <p className={cx("option_text")}>자산군</p>
          <div
            onClick={() => handleAssetClassToggle(i)}
            className={cx("option_input_box")}
          >
            <input
              className={cx("option_input")}
              type="text"
              readOnly
              value={asset?.class}
            />
            <IoIosArrowDown
              className={cx(
                assetClassToggle[i]
                  ? "active_option_select_arrow"
                  : "option_select_arrow"
              )}
            />
          </div>
          {assetClassToggle[i] && (
            <ul className={cx("hide_box")}>
              <div className={cx("search_box")}>
                <img
                  className={cx("search_img")}
                  src="/images/search.svg"
                  alt="검색 이미지"
                />
                <input
                  className={cx("search_input")}
                  type="text"
                  placeholder="검색어를 입력해 주세요."
                />
              </div>
              {data?.map((item) => (
                <li key={item?.label}>
                  <input
                    onClick={(e) => handleChangeAsset(e, i)}
                    name="class"
                    value={item?.label}
                    className={cx(
                      item?.name === asset?.class
                        ? "active_hide_input"
                        : "hide_input"
                    )}
                    type="text"
                    readOnly
                    placeholder={item?.label}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={cx("option_box")}>
          <p className={cx("option_text")}>비중</p>
          <div className={cx("option_input_box")}>
            <input
              type="number"
              name="ratio"
              onChange={(e) => handleChangeAsset(e, i)}
              value={asset?.ratio}
              className={cx("option_input")}
            />
            <p className={cx("option_input_text")}>%</p>
          </div>
          <div className={cx("warning_box")}>
            <p className={cx("warning_text")}>
              0 ~ 100 까지 입력할 수 있습니다.
            </p>
          </div>
        </div>
        {asset?.kind.includes("미국") && (
          <div className={cx("option_box")}>
            <p className={cx("option_text")}>환율 반영</p>
            <div className={cx("exchange_rate_box")}>
              <input
                type="checkbox"
                name="isReflectExchangeRate"
                id={`reflectExchangeRate${i}`}
                className={cx("hide_check_box", {
                  checked: asset?.isReflectExchangeRate,
                })}
                onChange={() => handleCheckedReflectExchangeRate(i)}
              />
              <label
                className={cx("check_box_label")}
                htmlFor={`reflectExchangeRate${i}`}
              >
                <div className={cx("check_box")}>
                  <div className={cx("check_box_checked")}></div>
                </div>
                <b className={cx("check_text")}>반영</b>
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
