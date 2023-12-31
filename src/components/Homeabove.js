import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Homefold = () => {
  return (
    <>
      <div className="bg-[heading] relative h-[620px] shadow-lg">
        <div className=" mx-auto max-w-[90%] sm:max-w-[80%] md:max-w-[80%] lg:max-w-[80%]  py-12 sm:py-20 relative">
          <div className="block sm:flex   justify-center  gap-10">
            <div>
              <p
                className={
                  "text-center   font-bold mt-[60px]   w-[40%] sm:w-[136px] m-auto text-base py-1 sm:mt-8  px-1  focus:ring-yellow-300 text-white rounded-[20px] bg-primary hover:bg-black dark:focus:ring-yellow-900"
                }
              >
                INTRODUCING{" "}
              </p>
              <div className="relative flex items-center gap-4 w-full my-6 sm:my-0 sm:w-[60%] mx-auto">
                <div
                  data-line-position="left"
                  class="connect-heading-line  sm:mt-8 mt-4"
                ></div>
                <h1 className=" font-bold  m-auto text-center sm:mt-8 mt-4 sm:text-[50px] text-h2 text-heading  sm:leading-none  ">
                  True-Edu
                </h1>
              </div>

              <div className="font-bold text-2xl m-auto w-[300px] sm:w-full text-center mt-4  md:text-h3 lg:text-h3 sm:text-h3 t  sm:mt-8 mb-2 sm:mb-4 text-heading">
                Your Journey, Our Books{" "}
              </div>

              <p className=" text-xl text-center  md:text-xl sm:max-w-[632px] sm:ml-[1rem] sm:mt-8   mt-[1.5rem] mb-[1.5rem] sm:mb-4 text-heading">
                Empowering students with enriching books. Explore, learn, and
                thrive with every page. Your journey to knowledge and success
                starts here
              </p>
              <div className="block sm:grid md:grid lg:grid grid-cols-1 mx-auto sm:w-[60%] gap-4 sm:mt-8 mt-3 sm:mb-8">
                <button
                  className={
                    "py-2 px-8 mb-[12px] sm:mb-0 w-full first-letter:w-full focus:ring-yellow-300 text-lg font-semibold text-white bg-[red] hover:bg-[black] dark:focus:ring-yellow-900 rounded-lg"
                  }
                >
                  <div className="trytempo">
                    <Link to="/checkout">Start Exploring</Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homefold;
