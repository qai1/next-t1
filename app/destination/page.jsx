"use client";

import { useState } from "react";

const destinations = [
  {
    planet: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384.400",
    travel_time: "3 days",
    image: "/images/Moon.png",
  },
  {
    planet: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. ",
    travel_time: "9 MONTHS",
    image: "/images/Mars.png",
  },
  {
    planet: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL.",
    travel_time: "3 YEARS",
    image: "/images/Europa.png",
  },
  {
    planet: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL.",
    travel_time: "7 YEARS",
    image: "/images/Titan.png",
  },
];

export default function Destination() {
  const [activeContent, setActiveContent] = useState(0);

  return (
    <section className="bg-[url(/images/bg-destination.jpg)] bg-cover bg-no-repeat min-h-screen px-5">
      <div className="container lg:max-w-6xl m-auto pt-28">
        <div className="page-title flex justify-center lg:justify-start text-lg md:text-2xl condensed uppercase tracking-widset text-white pb-20">
          <p>
            <span className="mr-5 font-blod text-slate-500">01</span>Pick your
            destination
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <img
            src={destinations[activeContent].image}
            alt=""
            className="flex flex-1 w-[150px] md:w-[300px]"
          />

          <div className="flex-1 flex flex-col justify-center items-center lg:items-start gap-5">
            <div className="flex gap-5 lg:gap-8">
              {destinations.map((destinations, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => setActiveContent(index)}
                    className="text-[17px] cursor-pointer h-[35px]"
                  >
                    {destinations.planet}
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col gap-5 text-center lg:text-left">
              <h1 className="uppercase belle text-7xl tracking-widest">
                {destinations[activeContent].planet}
              </h1>
              <p className="w-full md:w-[515px] text-[#D0D6F9]">
                {destinations[activeContent].description}
              </p>
              <div className="h-[1px] w-[100% bg-white ]"></div>
            </div>

            <div className="flex">
              <div className="flex flex-col sm:flex-row gap-5 lg:gap-20 mt-10">
                <div className="flex flex-col gap-2">
                  <p className="text-slate-500 text-sm condensed uppercase">
                    Avg. distance
                  </p>
                  <h2 className="text-[28px] belle">
                    {destinations[activeContent].distance} km
                  </h2>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-slate-500 text-sm condensed uppercase">
                    Est. travel time
                  </p>
                  <h2 className="text-[28px] belle">
                    {destinations[activeContent].travel_time}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
