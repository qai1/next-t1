export default function Home() {
  return (
    <main className="bg-[url(/images/bg-home.jpg)] p- flex justify-center items-center bg-cover h-screen">
      <div className="flex flex-col lg:flex-row p-7 items-center gap-20">
        <div className="flex flex-col w-full max-w-[540px] text-center lg:text-left">
          <p className="condensed text-[28px] text-[#D0D6F9]">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <h1 className="belle uppercase text-[100px] lg:text-[144px]">
            Space
          </h1>
          <p className="text-[#D0D6F9] text-[18px] max-w-[540px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="hover:bg-white/15 transition duration-700 p-10 md:p-10 rounded-full">
          <p className="belle uppercase bg-white text-black flex justify-center items-center text-[24px] sm:text-[38px] w-[170px] h-[170px] sm:w-[272px] sm:h-[272px] rounded-full">
            Explore
          </p>
        </div>
      </div>
    </main>
  );
}
