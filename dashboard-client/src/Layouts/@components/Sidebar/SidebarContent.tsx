import { routes } from "@/utils/constants/sidebar";
import SidebarSubmenu from "./SidebarSubmenu";
import { Route } from "@/utils/types";
import { Link, useLocation } from "react-router-dom";
import React from "react";

const SidebarContent: React.FC = React.memo(() => {
  const {pathname} = useLocation();

  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <Link
        to="/"
        className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
      >
        LMS System
      </Link>
      <ul className="mt-6">
        {routes.map((route: Route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <Link
                to={route.path || "/"}
                className={`inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 ${
                  pathname === route.path
                    ? "text-gray-800 dark:text-gray-100"
                    : ""
                }`}
              >
                <span
                  className={`absolute inset-y-0 left-0 w-1 ${
                    pathname === route.path
                      ? "bg-purple-600 rounded-tr-lg rounded-br-lg"
                      : ""
                  }`}
                ></span>
                <span>{route.icon}</span>
                <span className="ml-4">{route.name}</span>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
});

export default SidebarContent;
