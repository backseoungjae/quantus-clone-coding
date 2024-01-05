import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./DateBox.module.scss";
import dayjs from "dayjs";
import CalendarBox from "components/common/CalendarBox";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

export default function DateBox({
  initialDate,
  dateStart,
  dateEnd,
  endMinDate,
  startMinDate,
  selected,
  handleStartDateToggle,
  handleEndDateToggle,
  handleChangeStartDate,
  handleChangeEndDate,
  handleChangeLastYears,
}) {
  const today = dayjs(new Date()).format("YYYY.MM.DD");
  const location = useLocation();

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
              {initialDate?.startDate
                ? initialDate?.startDate
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
              minDate={null}
              date={initialDate?.startDate}
              handleChangeDate={handleChangeStartDate}
            />
          )}
        </div>
        <div className={cx("date_box")}>
          <p className={cx("date_text")}>종료일 설정</p>
          <div onClick={handleEndDateToggle} className={cx("date_toggle_box")}>
            <button className={cx("date_button")}>
              {initialDate?.endDate ? initialDate?.endDate : today}
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
              date={initialDate?.endDate}
              handleChangeDate={handleChangeEndDate}
            />
          )}
        </div>
      </div>
      {location?.pathname.includes("/partnership/magic_split") && (
        <div className={cx("year_button_box")}>
          <button
            onClick={() => handleChangeLastYears(1)}
            className={cx("year_button", { selected: selected === 1 })}
          >
            최근 1년
          </button>
          <button
            onClick={() => handleChangeLastYears(3)}
            className={cx("year_button", { selected: selected === 3 })}
          >
            최근 3년
          </button>
          <button
            onClick={() => handleChangeLastYears(5)}
            className={cx("year_button", { selected: selected === 5 })}
          >
            최근 5년
          </button>
          <button
            onClick={() => handleChangeLastYears(10)}
            className={cx("year_button", { selected: selected === 10 })}
          >
            최근 10년
          </button>
          <button
            onClick={() => handleChangeLastYears(21)}
            className={cx("year_button", { selected: selected === 21 })}
          >
            전체
          </button>
        </div>
      )}
    </div>
  );
}
