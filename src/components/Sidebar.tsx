"use client";

import { useState } from "react";
import { NAV_MENU } from "@/config/navbar";
import Link from "next/link";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <div onClick={handleToggle}>
        <Hamburgur />
      </div>
      <div>
        {sidebarOpen && (
          <div
            className="h-full w-full fixed inset-0  bg-black/30 backdrop-blur-xs"
            onClick={handleToggle}
          ></div>
        )}
        {
          <div
            className={`fixed top-0 left-0 h-full w-[70%] max-w-[300px] bg-custom-yellow transform transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="absolute right-0 p-4" onClick={handleToggle}>
              <Cross />
            </div>
            <ul className="flex flex-col gap-6 p-4 sm:p-6 ">
              {NAV_MENU.map((nav) => (
                <li
                  key={nav.id}
                  onClick={handleToggle}
                  className="text-xl font-semibold border-b-2 border-transparent  hover:border-black text-custom-black font-nunito max-w-max"
                >
                  <Link href={nav.link}>{nav.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    </>
  );
}

export function Hamburgur() {
  return (
    <div className="flex flex-col gap-1 w-6">
      <div className="rounded-full h-0.5 bg-black w-full"></div>
      <div className="rounded-full h-0.5 bg-black w-full"></div>
      <div className="rounded-full h-0.5 bg-black w-full"></div>
    </div>
  );
}

export function Cross() {
  return (
    <div className="relative w-6 h-6">
      <div className="absolute left-0 top-1/2 h-0.5 w-full bg-black rotate-45"></div>
      <div className="absolute left-0 top-1/2 h-0.5 w-full bg-black -rotate-45"></div>
    </div>
  );
}
