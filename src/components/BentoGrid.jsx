import React from "react";

import data from "../imgs.json";

const BentoGrid = () => {
  return (
    <div className="bentoGrid">
      {/* TOP LEFT */}
      <div className="seven">
        <h1 className="dm-sans-500 tracking-tighter text-[28px] xl:text-[40px] leading-7 xl:leading-9 text-start">
          Create and schedule content
          <span className="text-(--purple500) dm-sans-500-italic">
            <br />
            quicker.
          </span>
        </h1>
        <img
          className="max-w-40 xl:max-w-52"
          src={data.createPost}
          alt="Create Post"
        />
      </div>
      {/* MIDDLE PURPLE */}
      <div className="one">
        <h1 className="text-[36px] xl:text-[64px] leading-10 xl:leading-14 dm-sans-500 text-center text-(--white)">
          Social Media
          <span className="text-(--yellow500)">
            &nbsp;10x
            <br />
          </span>
          <span className="dm-sans-500-italic">Faster</span> with AI
        </h1>
        <div className="flex flex-col items-center gap-2">
          <img className="max-w-52" src={data.stars} alt="Stars" />
          <p className="text-(--white) text-center text-[14px] xl:text-[18px] opacity-70">
            Over 4,000 5-star reviews
          </p>
        </div>
      </div>
      {/* RIGHT LIGHT PURPLE */}
      <div className="four">
        <h1 className="text-center xl:text-left dm-sans-500 xl:leading-8 px-0 xl:px-8 tracking-tighter text-[20px] xl:text-[34px]">
          Schedule to social media.
        </h1>
        <div className="contents xl:flex relative xl:h-80 w-full justify-end overflow-hidden">
          <div className="contents xl:block xl:w-[230px] h-full overflow-hidden">
            <img
              src={data.chart}
              alt="Chart"
              className="w-3/4 xl:w-[380px] xl:h-full object-cover object-left"
            />
          </div>
        </div>
        <p className="dm-sans-400 text-center xl:text-left leading-4 xl:leading-5 px-0 xl:px-8 text-[16px] xl:text-[18px]">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
      {/* WHITE PLATFORMS */}
      <div className="two">
        <div className="contents xl:flex relative xl:h-[68px] w-full justify-end overflow-hidden">
          <div className="contents xl:block h-[68px] w-[240px] overflow-hidden">
            <img
              className="xl:h-[68px] object-cover object-left"
              src={data.platforms}
              alt="Platforms"
            />
          </div>
        </div>
        <h1 className="dm-sans-500 px-4 xl:px-6 leading-5 xl:leading-7 tracking-tighter text-[20px] xl:text-[34px]">
          Manage multiple accounts and platforms.
        </h1>
      </div>
      {/* YELLOW SCHEDULE */}
      <div className="three">
        <h1 className="dm-sans-500 xl:px-6 leading-5 xl:leading-8 tracking-tighter text-[24px] xl:text-[34px]">
          Maintain a consistent posting schedule.
        </h1>
        <div className="contents xl:flex relative w-full justify-center items-end overflow-hidden">
          <div className="contents xl:block h-[100px] w-[220px] overflow-hidden">
            <img
              className="h-[100px] w-[220px] object-cover object-left-top"
              src={data.schedule}
              alt="Schedule"
            />
          </div>
        </div>
      </div>
      {/* YELLOW BOTTOM AI */}
      <div className="eight">
        <h1 className="dm-sans-500 text-[28px] xl:text-[40px] tracking-tighter leading-7 xl:leading-9">
          Write your content <br />
          using AI.
        </h1>
        <img className="w-[180px] xl:w-[216px]" src={data.ai} alt="AI" />
      </div>
      {/* WHITE PERCENTAGE */}
      <div className="six">
        <div className="flex flex-col gap-2">
          <h1 className="dm-sans-500 text-4xl xl:text-6xl">&#62;56%</h1>
          <p className="dm-sans-500 text-[14px] xl:text-[18px]">
            faster audience growth
          </p>
        </div>
        <img
          className="max-w-[150px] xl:max-w-[180px]"
          src={data.audience}
          alt="Audience"
        />
      </div>
      {/* PURPLE FOLLOWERS */}
      <div className="five">
        <img className="max-w-[220px]" src={data.followers} alt="Followers" />
        <h1 className="dm-sans-500 tracking-tight leading-7 xl:leading-9 text-(--white) text-center xl:text-left text-[28px] xl:text-[44px]">
          Grow followers with non-stop content.
        </h1>
      </div>
    </div>
  );
};

export default BentoGrid;
