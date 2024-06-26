import React from "react";
import DSlogo from "../assets/DSlogo.png";

function Footer() {
  return (
    <>
      <footer className=" bg-base-pink text-slate-800">
        <div className="p-10 flex flex-wrap flex-col sm:flex-row gap-y-10 justify-center items-start">
          <div className="flex flex-col justify-center place-items-center sm:w-2/6">
            <img src={DSlogo} className="max-w-28 rounded-xl mb-3"></img>
            <h2 className="text-2xl font-serif text-text-color mb-2">
              DailyShade
            </h2>
            <p className="font-inter tracking-normal px-10 leading-relaxed text-pretty">
              จดบันทึกอารมณ์และความรู้สึกที่เกิดขึ้นในแต่ละวัน
              เพื่อให้รู้จักหรือเข้าใจตัวเองมากขึ้นผ่านการทำ Mood Tracking
            </p>
          </div>
          <div className="flex justify-center sm:w-2/6">
            <div className="flex flex-col gap-y-10 place-items-start">
              <div className="">
                <h3 className="text-2xl text-left pb-2">ติดต่อเรา</h3>
                <a href="mailto:keerataphant@gmail.com?subject=Hello&body=How are you?">
                  <div className="flex">
                    <span className="inline-flex items-center text-lg text-gray-800 pr-3 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 hover:animate-bounce"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                      </svg>
                    </span>
                    <p>keerataphant@gmail.com</p>
                  </div>
                </a>
                <a href="mailto:tsittidet@gmail.com?subject=Hello&body=How are you?">
                  <div className="flex">
                    <span className="inline-flex items-center text-lg text-gray-800 pr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 hover:animate-bounce"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                      </svg>
                    </span>
                    <p>tsittidet@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center sm:w-2/6">
            <div className="flex flex-col place-items-start">
              <h3 className="text-2xl text-left pb-2">ติดตามเรา</h3>
              <div className="flex">
                <span className="inline-flex items-center text-lg text-gray-800 pr-3">
                  <a
                    href="https://www.instagram.com/my.dailyshade/"
                    target="_blank"
                    className="text-gray-800 hover:text-ins-color dark:hover:text-white dark:text-gray-400 "
                  >
                    <svg
                      className="w-8 h-8"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </span>
                <p className="inline-flex items-center ">my.dailyshade</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
