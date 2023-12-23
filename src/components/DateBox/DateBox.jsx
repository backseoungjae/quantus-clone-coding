import React from "react";
import classNames from "classnames/bind";
import styles from "./DateBox.module.scss";
import dayjs from "dayjs";
import CalendarBox from "components/common/CalendarBox";

const cx = classNames.bind(styles);

export default function DateBox({
  backTest,
  dateStart,
  dateEnd,
  startMinDate,
  endMinDate,
  handleStartDateToggle,
  handleEndDateToggle,
  handleChangeStartDate,
  handleChangeEndDate,
}) {
  const today = dayjs(new Date()).format("YYYY.MM.DD");

  return (
    <div className={cx("container")}>
      <p className={cx("title")}>기간 설정</p>
      <div className={cx("date_inner")}>
        <div className={cx("date_box")}>
          <p className={cx("date_text")}>시작일 설정</p>
          <div
            onClick={handleStartDateToggle}
            className={cx("date_toggle_box")}
          >
            <button className={cx("date_button")}>
              {backTest?.period?.startDate
                ? backTest?.period?.startDate
                : dayjs(startMinDate).format("YYYY.MM.DD")}
            </button>
            <img
              className={cx("date_img")}
              src="/images/date.svg"
              alt="기간설정 달력 이미지"
            />
          </div>
          {dateStart && (
            <CalendarBox
              minDate={startMinDate}
              date={backTest?.period?.startDate}
              startDate={backTest?.period?.startDate}
              handleChangeDate={handleChangeStartDate}
            />
          )}
        </div>
        <div className={cx("date_box")}>
          <p className={cx("date_text")}>종료일 설정</p>
          <div onClick={handleEndDateToggle} className={cx("date_toggle_box")}>
            <button className={cx("date_button")}>
              {backTest?.period?.endDate ? backTest?.period?.endDate : today}
            </button>
            <img
              className={cx("date_img")}
              src="/images/date.svg"
              alt="기간설정 달력 이미지"
            />
          </div>
          {dateEnd && (
            <CalendarBox
              minDate={endMinDate}
              date={backTest?.period?.endDate}
              endDate={backTest?.period?.endDate}
              handleChangeDate={handleChangeEndDate}
            />
          )}
        </div>
      </div>
    </div>
  );
}
