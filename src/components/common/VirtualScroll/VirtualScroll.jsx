import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./VirtualScroll.module.scss";
import { List } from "react-virtualized";

const cx = classNames.bind(styles);

const VirtualScroll = ({ data, partner, handleChangeAssetClassSettings }) => {
  // 검색기능
  const [search, setSearch] = useState("");
  const filteredData = data.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const rowRenderer = ({ index, key, style }) => {
    const item = filteredData[index];
    if (!item) {
      return null;
    }
    return (
      <div key={key} style={style}>
        <input
          name="assetClass"
          value={item.label}
          onClick={handleChangeAssetClassSettings}
          className={cx(
            partner?.assetClassSettings?.assetClass === item.label
              ? "active_hide_input"
              : "hide_input"
          )}
          type="text"
          readOnly
        />
      </div>
    );
  };

  return (
    <>
      <div className={cx("virtual_list_box")}>
        <div className={cx("search_box")}>
          <img
            className={cx("search_img")}
            src="/images/search.svg"
            alt="검색 이미지"
          />
          <input
            className={cx("search_input")}
            type="text"
            placeholder="검색어를 입력하세요."
            value={search}
            onChange={handleSearch}
          />
        </div>
        <List
          className={cx("virtual_list")}
          style={{ position: "absolute" }}
          width={600}
          height={400}
          rowCount={data?.length}
          rowHeight={50}
          rowRenderer={rowRenderer}
        />
      </div>
    </>
  );
};

export default VirtualScroll;
