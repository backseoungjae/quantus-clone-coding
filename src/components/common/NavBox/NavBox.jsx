import React from "react";
import classNames from "classnames/bind";
import styles from "./NavBox.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export default function NavBox({
  index,
  universLink,
  factorLink,
  settingLink,
}) {
  return (
    <>
      {index === 1 && (
        <div className={cx("nav_box")}>
          <Link className={cx("active_nav_item")} to={universLink}>
            유니버스 선택
          </Link>
          <Link className={cx("nav_item")} to={factorLink}>
            팩터 선택
          </Link>
          <Link className={cx("nav_item")} to={settingLink}>
            백테스트 셜졍
          </Link>
        </div>
      )}
      {index === 2 && (
        <div className={cx("nav_box")}>
          <Link className={cx("active_nav_item")} to={universLink}>
            유니버스 선택
          </Link>
          <Link className={cx("active_nav_item")} to={factorLink}>
            팩터 선택
          </Link>
          <Link className={cx("nav_item")} to={settingLink}>
            백테스트 셜졍
          </Link>
        </div>
      )}
      {index === 3 && (
        <div className={cx("nav_box")}>
          <Link className={cx("active_nav_item")} to={universLink}>
            유니버스 선택
          </Link>
          <Link className={cx("active_nav_item")} to={factorLink}>
            팩터 선택
          </Link>
          <Link className={cx("active_nav_item")} to={settingLink}>
            백테스트 셜졍
          </Link>
        </div>
      )}
    </>
  );
}
