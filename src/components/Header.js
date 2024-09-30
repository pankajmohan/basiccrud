import React from "react";
import "../header.css";
// Assuming you're storing the styles in a CSS file

const Header = () => {
  return (
    <header className="bg-white shadow-lg h-24 hidden md:flex">
      <a
        href=""
        className="border flex-shrink-0 flex items-center justify-center px-4 lg:px-6 xl:px-8"
      >
        <img
          src="https://i.ibb.co/W6ZXdqN/2021-10-26-16h20-21.png"
          alt="Logo"
        />
      </a>
      <nav className="header-links contents font-semibold text-base lg:text-lg">
        <ul className="flex items-center ml-4 xl:ml-8 mr-auto">
          <li className="p-3 xl:p-6 active">
            <a href="">
              <span>Home</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>Services</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>About</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>Projects</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>Skills</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="">
              <span>Contacts</span>
            </a>
          </li>
          <li className="p-3 xl:p-6">
            <a href="" className="flex items-center">
              <span>Pages</span>
              <svg
                className="h-3 opacity-30 ml-2"
                aria-hidden="true"
                focusable="false"
                data-prefix="far"
                data-icon="chevron-down"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <nav className="hidden xl:contents">
        <ul className="flex items-center mr-4 lg:mr-6 xl:mr-8">
          <li className="p-1">
            <a
              href=""
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="twitter"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="p-1">
            <a
              href=""
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="facebook-f"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="p-1">
            <a
              href=""
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="linkedin-in"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                ></path>
              </svg>
            </a>
          </li>
          <li className="p-1">
            <a
              href=""
              className="inline-block rounded-full border p-2 hover:shadow-lg hover:border-opacity-0 duration-200 hover:-translate-y-0.5"
            >
              <svg
                className="h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186.5c-39.5 0-71.6-32.1-71.6-71.6s32.1-71.6 71.6-71.6 71.6 32.1 71.6 71.6-32.1 71.6-71.6 71.6zm146.4-194.3c0 14.9-12 26.9-26.9 26.9-14.9 0-26.9-12-26.9-26.9s12-26.9 26.9-26.9c14.9 0 26.9 12 26.9 26.9zm76.1 27.2c-.1-54.9-4.9-103.6-28.1-138.9-23-35-54-58.9-91.2-77.4C271.4-5 222.4 0 160.7 0 99.7 0 50.6-5 12.9 19.5-19.9 43.1-43.7 75.4-58.7 111.5-72 148.7-77 199.4-77 255.4v.6c0 56.5 4.9 107.2 18.4 144.6 13.7 38.4 36.7 69.7 72.9 89.4 32.6 16.8 82.5 22.7 144.4 22.7 61.7 0 110.7 0 144.4-22.7 36.2-19.7 59.2-51 72.9-89.4 13.4-37.4 18.4-88.1 18.4-144.6v-.6zM398.8 378.2c-10.1 26.5-28.9 48.4-57.1 64.1-39 19.9-96.6 25.7-159.5 25.7s-120.5-5.8-159.5-25.7c-28.2-15.7-47-37.6-57.1-64.1-13.5-35.3-17.9-82.3-17.9-131.2v-.6c0-49 4.4-95.9 17.9-131.2 10.1-26.5 28.9-48.4 57.1-64.1 39-19.9 96.6-25.7 159.5-25.7 62.9 0 120.5 5.8 159.5 25.7 28.2 15.7 47 37.6 57.1 64.1 13.5 35.3 17.9 82.3 17.9 131.2v.6c-.1 48.9-4.4 95.9-17.9 131.2z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
