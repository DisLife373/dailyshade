import React from "react";
import "./styles/verify.css";
export const Verify = () => {
  return (
    <div className="verify-wrapper">
      <main className="verify-container">
        <div className="card-verify ">
          <div className="header-verify ">
            <div className="div_image_v">
              <div className="image-verify">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M20 7L9.00004 18L3.99994 13"
                      stroke="#000000"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <div className="content-verify">
              <span className="title-verify">ยืนยันอีเมลเรียบร้อยแล้ว</span>
              <p className="message-verify">
                ขณะนี้คุณสามารถเข้าสู่ระบบด้วยอีเมลที่คุณได้ลงทะเบียนไว้
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
