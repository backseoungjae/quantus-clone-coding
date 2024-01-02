import React from "react";
import classNames from "classnames/bind";
import styles from "./Partnership.module.scss";

const cx = classNames.bind(styles);

export default function Partnership({ handleMagicSplit }) {
  return (
    <div className={cx("container")}>
      <div className={cx("title_box")}>
        <p className={cx("title")}>매직스플릿</p>
        <div onClick={handleMagicSplit} className={cx("image_box")}>
          <img
            className={cx("img")}
            src="/images/partnership.png"
            alt="파트너 이미지"
          />
        </div>
      </div>
    </div>
  );
}
