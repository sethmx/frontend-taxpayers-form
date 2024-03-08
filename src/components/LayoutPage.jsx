import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TaxpayerRegister from "./TaxpayerRegister";
import TaxpayerList from "./TaxpayerList";


function LayoutPage() {
  return (
    <>
      <Router>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQFy-UG69Vegdg/company-logo_200_200/0/1631318084020?e=1718236800&v=beta&t=V7yNctKJEEn8KnuuAphBjyviBxFQcCF_yUS_O1lP_Pg"
                alt="KEA"
              ></img>

              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                KEA
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border text-white border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <nav>
                  <ul>
                    <li >
                      <Link to="/create" className="m-1 font-semibold text-xl">Create Taxpayer</Link>
                      || <Link to="/List" className="font-semibold text-xl">List Taxpayer</Link>
                    </li>
                  </ul>
                </nav>
              </ul>
            </div>
          </div>
        </nav>
        <h1 className="text-center text-orange-500 text-3xl">
          KEA- KEA I Lo hacemos porque nos gusta! Comercio Electrónico
        </h1>
        <Routes>
          <Route path="/create" element={<TaxpayerRegister />} />
          <Route path="/List" element={<TaxpayerList />} />
        </Routes>
      </Router>
    </>
  );
}

export default LayoutPage;
