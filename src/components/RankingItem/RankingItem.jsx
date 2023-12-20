import React from "react";
import classNames from "classnames/bind";
import styles from "./RankingItem.module.scss";

const cx = classNames.bind(styles);

export default function RankingItem({
  item,
  index,
  dragStart,
  dragEnter,
  drop,
}) {
  return (
    <div
      draggable
      onDragStart={() => dragStart(index)}
      onDragEnter={() => dragEnter(index)}
      onDragEnd={drop}
      onDragOver={(e) => e.preventDefault()}
      className={cx("ranking_list_box")}
    >
      <div className={cx("ranking_item")}>
        <p className={cx("ranking_text")}>
          {String(index + 1).padStart(2, "0")}
        </p>
        <img
          className={cx("ranking_img")}
          src="/images/hambargerbar.svg"
          alt="설명 이미지"
        />
        <p className={cx("ranking_text")}>{item?.name}</p>
      </div>
    </div>
  );
}
