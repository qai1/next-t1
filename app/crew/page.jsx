"use client";

import { useState } from "react";

const crew = [
  {
    role: "Commander",
    name: "Douglas Hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/images/DOUGLAS.png",
  },
  {
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/images/MARK.png",
  },
  {
    role: "Pilot",
    name: "Victor Glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
    image: "/images/VICTOR.png",
  },
];

export default function CrewPage() {
  const [activeContent, setActiveContent] = useState(0);

  return (
    <section className="bg-[url(/images/bg-crew.jpg)] bg-cover bg-no-repeat min-h-screen px-5">
      <div className="container md:max-w-6xl m-auto pt-28 flex flex-col lg:flex-row items-center gap-20">
        <div className="flex flex-col items-center lg:items-start">
          <p className="text-lg lg:text-2xl flex items-start uppercase tracking-widset text-white py-10 condensed">
            <span className="mr-5 font-bold text-slate-500">02</span>Meet you
            crew
          </p>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-start lg:py-40">
            <p className="belle uppercase text-[22px] sm:text-4xl text-white/35">
              {crew[activeContent].role}
            </p>
            <h1 className="belle uppercase text-[32px] sm:text-6xl">
              {crew[activeContent].name}
            </h1>
            <br />
            <p className="text-[#D0D6F9] min-w-[327px] sm:w-[512px]">
              {crew[activeContent].description}
            </p>
          </div>
          <div className="flex py-10 gap-8">
            {crew.map((crew, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setActiveContent(index)}
                  className={`${
                    activeContent === index ? "bg-white" : "bg-slate-500"
                  } rounded-full w-[15px] h-[15px] cursor-pointer transition duration-300 items-center`}
                >
                  <div className=""></div>
                </button>
              );
            })}
          </div>
        </div>
        <img
          src={crew[activeContent].image}
          alt=""
          className="w-full min-w-[327px] sm:w-[445px] md:w-[540px] bottom-0"
        />
      </div>
    </section>
  );
}
