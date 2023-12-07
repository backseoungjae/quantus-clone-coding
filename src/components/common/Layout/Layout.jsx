import React from "react";
import classNames from "classnames/bind";
import styles from "./Layout.module.scss";
import Header from "components/common/Header";
import Footer from "components/common/Footer";

const cx = classNames.bind(styles);

export default function Layout({ children }) {
  return (
    <div className={cx("container")}>
      <Header />
      <div className={cx("wrapper")}>{children}</div>
      <Footer />
    </div>
  );
}
