import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  MdPerson,
  MdPersonAddAlt,
  MdPersonAddAlt1,
  MdPersonOutline,
} from "react-icons/md";

const Sidebar = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="ml-3 mt-2 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto rounded-br-3xl rounded-tr-3xl bg-primary px-3 py-4 text-white shadow-lg">
          <span className="text-3xl font-bold">Logo</span>
          <ul className="mt-5 space-y-2 font-medium">
            <li>
              <Link
                to={"/clients"}
                className={`flex items-center rounded-lg p-2 hover:bg-primary-dark ${
                  pathname === "/clients" ? "bg-primary-dark" : ""
                } transition-colors`}
              >
                {pathname === "/clients" ? (
                  <MdPerson size={20} />
                ) : (
                  <MdPersonOutline size={20} />
                )}
                <span className="ml-3 text-sm">Our clients</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/client/add"}
                className={`flex items-center rounded-lg p-2 hover:bg-primary-dark ${
                  pathname === "/client/add" ? "bg-primary-dark" : ""
                } transition-colors`}
              >
                {pathname === "/client/add" ? (
                  <MdPersonAddAlt1 size={20} />
                ) : (
                  <MdPersonAddAlt size={20} />
                )}
                <span className="ml-3 text-sm">Add clients</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/project-managers"}
                className={`flex items-center rounded-lg p-2 hover:bg-primary-dark ${
                  pathname === "/project-managers" ? "bg-primary-dark" : ""
                } transition-colors`}
              >
                <MdPersonAddAlt size={20} />
                <span className="ml-3 text-sm">Project managers</span>
              </Link>
            </li>
            <li>
              <Link
                to={"/project-managers/add"}
                className={`flex items-center rounded-lg p-2 hover:bg-primary-dark ${
                  pathname === "/project-managers/add" ? "bg-primary-dark" : ""
                } transition-colors`}
              >
                <MdPersonAddAlt size={20} />
                <span className="ml-3 text-sm">Add project managers</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
