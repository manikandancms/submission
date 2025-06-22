import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);

  return (
    <div className="2xl:container mx-auto mt-1 ">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 h-[10vh] ">
        <div className="flex flex-row justify-items-center justify-between">
          <img
            src="https://ik.imagekit.io/jap5d6wbb/image/logo-2.png?updatedAt=1749057417889"
            alt="logo-2"
            className="h-[20px] md:h-[85px] hover:scale-75  transition-transform duration-500 rounded-lg cursor-pointer"
          />

          {/* Mobile Menu Icons */}
          <div className="md:hidden flex gap-2 items-center">
            {!menuOpen ? (
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.5em"
                height="1.5em"
                className="hover:scale-125 transition-transform duration-500 cursor-pointer bg-green-500 text-black rounded-md "
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M10 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0m0 12a4 4 0 1 0-8 0a4 4 0 0 0 8 0M22 6a4 4 0 1 0-8 0a4 4 0 0 0 8 0m0 12a4 4 0 1 0-8 0a4 4 0 0 0 8 0"
                />
              </svg>
            ) : (
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1.5em"
                height="1.5em"
                className="hover:scale-125 transition-transform duration-500 cursor-pointer bg-red-700 text-white rounded-lg "
              >
                <g fill="none" fillRule="evenodd">
                  <path d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879 6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                  />
                </g>
              </svg>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12  bg-slate-800 rounded-lg py-4 px-2  md:h-[15vh]`}
        >
          {["Home", "Sales", "Contact Us", "About"].map((item) => (
            <p
              key={item}
              className="text-slate-300 hover:text-white hover:scale-125 transition-transform duration-500 cursor-pointer"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header