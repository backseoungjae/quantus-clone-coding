import React from "react";
import classNames from "classnames/bind";
import styles from "./StaticAsset.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import StaticAssetList from "components/StaticAssetList";

const cx = classNames.bind(styles);

export default function StaticAsset({
  data,
  alloc,
  assetClass,
  kindToggle,
  assetClassToggle,
  handleAssetToggle,
  handleKindToggle,
  handleAssetClassToggle,
  handleAddAssetList,
  handleChangeAsset,
  handleRemoveAssetClass,
  handleCheckedReflectExchangeRate,
}) {
  return (
    <div className={cx("container")}>
      <div className={cx("wrapper")}>
        <div onClick={handleAssetToggle} className={cx("header_box")}>
          <p className={cx("text")}>자산군 추가</p>
          <div className={cx("open_box")}>
            <button className={cx("button")}>
              {assetClass ? "접기" : "펼치기"}
            </button>
            <IoIosArrowDown
              className={cx(assetClass ? "active_open_arrow" : "open_arrow")}
            />
          </div>
        </div>
        {alloc?.assetList.length > 0 && !assetClass && (
          <div className={cx("asset_preview_inner")}>
            {alloc?.assetList?.map((asset, i) => (
              <div className={cx("asset_preview_box")} key={i}>
                <p className={cx("asset_preview_text")}>
                  자산 {String(i + 1).padStart(2, "0")}
                </p>
                {asset?.assetClass?.length > 0 ? (
                  <div className={cx("asset_preview_selected_box")}>
                    <p className={cx("asset_preview_selected_text")}>
                      {asset?.assetClass}
                    </p>
                  </div>
                ) : (
                  <div className={cx("asset_preview_un_selected_box")}>
                    <p className={cx("asset_preview_selected_text")}>
                      선택 안함
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {assetClass && (
          <div className={cx("add_inner")}>
            {alloc?.assetList?.map((asset, i) => (
              <StaticAssetList
                key={i}
                asset={asset}
                i={i}
                data={data}
                kindToggle={kindToggle}
                assetClassToggle={assetClassToggle}
                handleKindToggle={handleKindToggle}
                handleAssetClassToggle={handleAssetClassToggle}
                handleChangeAsset={handleChangeAsset}
                handleRemoveAssetClass={handleRemoveAssetClass}
                handleCheckedReflectExchangeRate={
                  handleCheckedReflectExchangeRate
                }
              />
            ))}
            <div onClick={handleAddAssetList} className={cx("add_box")}>
              <img src="/images/add.svg" alt="자산군 추가 버튼 이미지" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
