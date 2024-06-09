import React from "react";
import reccircle from "../assets/reccircle.png";
import uparrow from "../assets/uparrow.png";
import { NavLink, useNavigate } from "react-router-dom";
import CLIENT_PATH from "../clientPath";
import dayjs from "dayjs";

export function MomentaryBtn({ selectDate = dayjs() }) {
  return (
    <>
      <button
        type="button"
        className="absolute rounded-full bg-snow border-2 border-white cursor-pointer pl-5"
        onClick={() => {
          const select_date = selectDate;
          if (window.localStorage.getItem("selectDate")) {
            window.localStorage.removeItem("selectDate");
            window.localStorage.setItem(
              "selectDate",
              JSON.stringify(select_date)
            );
          } else {
            window.localStorage.setItem(
              "selectDate",
              JSON.stringify(select_date)
            );
          }
          window.location.href = CLIENT_PATH + "/momentary";
        }}
      >
        <div className="flex place-content-center place-items-center  ">
          <img src={uparrow} alt="" className="w-7 absolute shake z-10" />
          <img
            src={reccircle}
            alt=""
            className="w-16 transition delay-900 animate-spin-slow"
          />
        </div>
      </button>
    </>
  );
}
