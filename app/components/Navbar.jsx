"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <nav className="p-7 md:p-5 md:pb-5 fixed flex items-center justify-between w-full">
      <div className="md:p-5">
        <Link href="/">
          <img src="/logo.svg" alt="" className="size-10" />
        </Link>
      </div>
      <div
        className="hamburger sm:hidden flex flex-col gap-1 cursor-pointer"
        onClick={() => setIsMenu(!isMenu)}
      >
        <div className="h-0.5 bg-white w-7"></div>
        <div className="h-0.5 bg-white w-7"></div>
        <div className="h-0.5 bg-white w-7"></div>
      </div>

      <ul
        className={`flex flex-col gap-10 sm:gap-12 tracking-widest uppercase bg-black/10 backdrop-blur-xl w-3/4 sm:w-fit absolute sm:static sm:flex-row h-screen sm:h-fit sm:text-xl px-5 sm:p-6 text-white top-0 transition-[right] items-end ${
          isMenu ? "right-0" : "-right-[600px]"
        }`}
      >
        <div className="garis h-[1px] absolute bg-white opacity-25 hidden 2xl:block w-full right-[130%] top-[50%]"></div>

        <li
          className="tombol-close size-10 relative cursor-pointer mt-10 sm:hidden"
          onClick={() => setIsMenu(!isMenu)}
          aria-label="close-button"
        >
          <div className="h-0.5 bg-white w-7 rotate-45 absolute"></div>
          <div className="h-0.5 bg-white w-7 -rotate-45 absolute"></div>
        </li>
        <li className="hover:text-slate-300 hover:border-r-2 sm:hover:border-r-0 sm:hover:border-b-2 h-[30px] w-full md:w-fit">
          <Link href="/">
            <p className="font-barlow text-[16px]">
              <span className="font-bold">00</span> Home
            </p>
          </Link>
        </li>
        <li className="hover:text-slate-300 hover:border-r-2 sm:hover:border-r-0 sm:hover:border-b-2 h-[30px] w-full md:w-fit">
          <Link href="/destination">
            <p className="font-barlow text-[16px]">
              <span className="font-bold">01</span> Destination
            </p>
          </Link>
        </li>
        <li className="hover:text-slate-300 hover:border-r-2 sm:hover:border-r-0 sm:hover:border-b-2 h-[30px] w-full md:w-fit">
          <Link href="/crew">
            <p className="font-barlow text-[16px]">
              <span className="font-bold">02</span> Crew
            </p>
          </Link>
        </li>
        <li className="hover:text-slate-300 hover:border-r-2 sm:hover:border-r-0 sm:hover:border-b-2 h-[30px] w-full md:w-fit">
          <Link href="/technology">
            <p className="font-barlow text-[16px]">
              <span className="font-bold">03</span> Technology
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
