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
      <div className="container md:max-w-6xl m-auto pt-28">
        <div className="page-title text-lg md:text-2xl flex justify-center lg:justify-start uppercase tracking-widset text-white pb-20">
          <p className="condensed">
            <span className="mr-5 font-bold text-slate-500">02</span>Meet you
            crew
          </p>
        </div>
        <div>
          <div className="flex flex-col text-center">
            <p className="belle">{crew[activeContent].role}</p>
            <h1 className="belle">{crew[activeContent].name}</h1>
            <p className="text-[#D0D6F9] min-w-[327px] sm:min-w-[512px]">
              {crew[activeContent].description}
            </p>
          </div>
          <div className="flex justify-center">
            {crew.map((crew, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setActiveContent(index)}
                  className="cursor-pointer] p-5"
                >
                  <div className="bg-white/20 hover:bg-white h-5 w-5 rounded-full"></div>
                </button>
              );
            })}
          </div>
          <img
            src={crew[activeContent].image}
            alt=""
            className="w-full min-w-[327px]"
          />
        </div>
      </div>
    </section>
  );
}
