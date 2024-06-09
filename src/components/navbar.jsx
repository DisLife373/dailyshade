import React from "react";
import { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import DSlogo from "../assets/logo.png";
import happy from "../assets/E4_Happy.png";
import "./navbar.css";
function toggleDropdown() {
  const list = document.querySelector("#dropdown");
  list.classList.toggle("hidden");
}
function gotoCalendar() {
  document.getElementById("section2").scrollIntoView({
    behavior: "smooth",
  });
}
function gotoEmotions() {
  document.getElementById("section3").scrollIntoView({
    behavior: "smooth",
  });
}
function gotoIns() {
  document.getElementById("section4").scrollIntoView({
    behavior: "smooth",
  });
}
function StickyNavbar() {
  const [userData, setUserData] = useState();
  const [isFindUser, setFindUser] = useState(true);
  const [userEmail, setUserEmail] = useState();
  const navigate = useNavigate();
  const [isToggle, setIstoggle] = useState(false);

  useEffect(() => {
    if (isFindUser) {
      GetUserData();
    }
  }, [isFindUser]);

  const GetUserData = () => {
    axios
      .get("http://localhost:5000/user/getUser")
      .then((res) => {
        if (res.data.isLogin) {
          setUserEmail(res.data.email);
          axios
            .post("http://localhost:5000/user/getUserData", {
              email: res.data.email,
            })
            .then((res) => {
              setUserData(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
        setFindUser(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logOut = () => {
    axios
      .get("http://localhost:5000/user/logout")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/auth");
  };
  function myFunction() {
    var x = document.getElementById("myTopnav");

    if (x.classList.contains("topnav") && isToggle == false) {
      x.classList.add("responsive");
      setIstoggle(true);
    }
    if (x.classList.contains("topnav") && isToggle == true) {
      x.classList.remove("responsive");
      setIstoggle(false);
    }
  }
  axios.defaults.withCredentials = true;

  return (
    <>
      <header className="sticky inset-x-0 top-0 z-30 mx-auto border  bg-snow py-3 shadow backdrop-blur-lg max-w-full">
        <div className="px-10">
          <div className="flex items-center justify-between ">
            <div className="flex shrink-0 w-1/5 ssm:w-2/4">
              <a aria-current="page" className="flex items-center" href="/">
                <img className="h-10 w-auto rounded-lg" src={DSlogo} alt="" />
                <p className="inline-block rounded-lg px-3 py-1 text-lg font-medium font-serif text-text-color transition-all duration-200 ">
                  DailyShade
                </p>
              </a>
            </div>
            <div className="w-3/5 lg:flex lg:w-auto ssm:flex ssm:justify-end ssm:place-content-end ssm:w-2/4 ">
              <ul className=" flex  p-4 md:p-0 mt-4 flex-row md:space-x-8 md:mt-0 ssm:hidden justify-center">
                <li>
                  <a
                    aria-current="page"
                    className="group inline-block  px-6 py-1  text-text-color"
                    href="/"
                  >
                    หน้าหลัก
                    <div className="bg-base-pink h-[3px] w-0 group-hover:w-full transition-all duration-500 "></div>
                  </a>
                </li>
                <li>
                  <a
                    className="group inline-block  px-6 py-1  text-text-color cursor-pointer"
                    onClick={gotoCalendar}
                  >
                    ปฏิทิน
                    <div className="bg-base-pink h-[3px] w-0 group-hover:w-full transition-all duration-500 "></div>
                  </a>
                </li>
                <li>
                  <a
                    className="group inline-block  px-6 py-1  text-text-color cursor-pointer"
                    onClick={gotoEmotions}
                  >
                    รู้จักอารมณ์
                    <div className="bg-base-pink h-[3px] w-0 group-hover:w-full transition-all duration-500 "></div>
                  </a>
                </li>
                <li>
                  <a
                    className="group inline-block  px-6 py-1  text-text-color cursor-pointer"
                    onClick={gotoIns}
                  >
                    Instagram
                    <div className="bg-base-pink h-[3px] w-0 group-hover:w-full transition-all duration-500 "></div>
                  </a>
                </li>
              </ul>
              <a
                className="hidden ssm:block ssm:absolute ssm:right-5 ssm:top-4 "
                onClick={myFunction}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </a>
            </div>
            <div className="flex items-center justify-end gap-4 w-1/5 ">
              {userEmail ? (
                <div className="flex topnav " id="myTopnav">
                  <img
                    onClick={toggleDropdown}
                    id="dropdownButton"
                    className="h-10 w-auto inline-block rounded-full hover:ring-2 hover:ring-pink-darker ssm:hidden border-2 border-base-pink "
                    src={happy}
                    alt=""
                  ></img>
                  <div
                    id="dropdown"
                    className=" divide-y rounded border-[1px] border-gray-300 backdrop-blur-md bg-snow py-3 px-4 absolute top-14 right-10 max-w-64 w-64 shadow-md text-left hidden "
                  >
                    <ul>
                      <li className="cursor-pointer rounded hover:bg-gray-300 p-2 ">
                        <img
                          className="h-10 w-auto ssm:inline-block rounded-full hover:ring-2 hidden"
                          src={DSlogo}
                          alt=""
                        ></img>
                        <p>@{userData ? userData.username : "johndoe123"}</p>
                        <p className=" p-2 font-semibold">
                          {userData ? userData.email : "johndoe123@gmail.com"}
                        </p>
                      </li>
                    </ul>
                    <ul>
                      <a href="/account">
                        <li className="flex rounded hover:bg-gray-300 p-2 max-w-full">
                          <label className="inline-flex items-center w-full space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="cursor-pointer">การตั้งค่า</span>
                          </label>
                        </li>
                      </a>

                      <li className="flex rounded hover:bg-gray-300 p-2 max-w-full">
                        <label className="inline-flex items-center w-full space-x-20">
                          <div className="flex space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="cursor-pointer">โหมดมืด</span>
                          </div>
                          <input
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                          />
                          <div className="relative w-9 h-5 bg-gray-400 peer-focus:outline-none  rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-black"></div>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="flex rounded hover:bg-gray-300 p-2 max-w-full">
                        <label className="inline-flex items-center w-full space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="cursor-pointer">คำถามที่พบบ่อย</span>
                        </label>
                      </li>
                      <li className="flex rounded hover:bg-gray-300 p-2 max-w-full">
                        <label className="inline-flex items-center w-full space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.478 5.559A1.5 1.5 0 0 1 6.912 4.5H9A.75.75 0 0 0 9 3H6.912a3 3 0 0 0-2.868 2.118l-2.411 7.838a3 3 0 0 0-.133.882V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0 0 17.088 3H15a.75.75 0 0 0 0 1.5h2.088a1.5 1.5 0 0 1 1.434 1.059l2.213 7.191H17.89a3 3 0 0 0-2.684 1.658l-.256.513a1.5 1.5 0 0 1-1.342.829h-3.218a1.5 1.5 0 0 1-1.342-.83l-.256-.512a3 3 0 0 0-2.684-1.658H3.265l2.213-7.191Z"
                              clipRule="evenodd"
                            />
                            <path
                              fillRule="evenodd"
                              d="M12 2.25a.75.75 0 0 1 .75.75v6.44l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 0 1 1.06-1.06l1.72 1.72V3a.75.75 0 0 1 .75-.75Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="cursor-pointer">ติดต่อเรา</span>
                        </label>
                      </li>
                    </ul>
                    <ul>
                      <li className="flex rounded hover:bg-gray-300 p-2 max-w-full">
                        <label className="inline-flex items-center w-full space-x-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span
                            className="cursor-pointer text-red-600"
                            onClick={logOut}
                          >
                            ออกจากระบบ
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="flex gap-2 ssm:hidden ipad:items-end ipad:justify-end topnav">
                  <a
                    className="inline-flex items-center justify-center rounded-full bg-base-pink px-3 py-2 text-sm  text-text-color shadow-sm transition-all duration-150 hover:bg-pink-darker focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    href="/auth"
                  >
                    เข้าสู่ระบบ
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default StickyNavbar;
