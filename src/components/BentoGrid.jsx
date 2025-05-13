import React from "react";

import stars from "../imgs/illustration-five-stars.webp";
import createPost from "../imgs/illustration-create-post.webp";
import chart from "../imgs/illustration-schedule-posts.webp";
import platforms from "../imgs/illustration-multiple-platforms.webp";
import schedule from "../imgs/illustration-consistent-schedule.webp";
import ai from "../imgs/illustration-ai-content.webp";
import audience from "../imgs/illustration-audience-growth.webp";
import followers from "../imgs/illustration-grow-followers.webp";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
      {/* TOP LEFT */}
      <div className="flex flex-col gap-6 row-span-2 w-full h-full px-8 py-20 bg-(--yellow100) rounded-xl">
        <h1 className="dm-sans-500 tracking-tighter text-[40px] leading-9 text-start">
          Create and schedule content
          <span className="text-(--purple500) dm-sans-500-italic">
            <br />
            quicker.
          </span>
        </h1>
        <img className="max-w-52" src={createPost} alt="Create Post" />
      </div>
      {/* MIDDLE PURPLE */}
      <div className="flex flex-col gap-6 w-full h-fit items-center px-10 py-16 col-span-2 row-span-1 bg-(--purple500) rounded-xl">
        <h1 className="text-[64px] leading-14 dm-sans-500 text-center text-(--white)">
          Social Media
          <span className="text-(--yellow500)">
            &nbsp;10x
            <br />
          </span>
          <span className="dm-sans-500-italic">Faster</span> with AI
        </h1>
        <div className="flex flex-col items-center gap-2">
          <img className="max-w-52" src={stars} alt="Stars" />
          <p className="text-(--white) text-center text-[18px] opacity-70">
            Over 4,000 5-star reviews
          </p>
        </div>
      </div>
      {/* RIGHT LIGHT PURPLE */}
      <div className="flex flex-col row-span-3 relative overflow-hidden gap-6 rounded-xl bg-(--purple100) py-12">
        <h1 className="dm-sans-500 leading-8 px-8 tracking-tighter text-[34px]">
          Schedule to social media.
        </h1>
        <div className="relative h-80 w-full flex justify-end overflow-hidden">
          <div className="w-[230px] h-full overflow-hidden">
            <img
              src={chart}
              alt="Chart"
              className="w-[380px] h-full object-cover object-left"
            />
          </div>
        </div>
        <p className="dm-sans-400 leading-5 px-8 text-[18px]">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </div>
      {/* WHITE PLATFORMS */}
      <div className="flex flex-col gap-4 py-6 dm-sans-500 bg-(--white) row-span-2 rounded-xl">
        <div className="relative h-[68px] w-full flex justify-end overflow-hidden">
          <div className="h-[68px] w-[240px] overflow-hidden">
            <img
              className="h-[68px] object-cover object-left"
              src={platforms}
              alt="Platforms"
            />
          </div>
        </div>
        <h1 className="dm-sans-500 px-6 leading-7 tracking-tighter text-[34px]">
          Manage multiple accounts and platforms.
        </h1>
      </div>
      {/* YELLOW SCHEDULE */}
      <div className="flex flex-col gap-4 pt-6 dm-sans-500 bg-(--yellow500) row-span-2 rounded-xl">
        <h1 className="dm-sans-500 px-6 leading-8 tracking-tighter text-[34px]">
          Maintain a consistent posting schedule.
        </h1>
        <div className="relative w-full flex justify-center items-end overflow-hidden">
          <div className="h-[100px] w-[220px] overflow-hidden">
            <img
              className="h-[100px] w-[220px] object-cover object-left-top"
              src={schedule}
              alt="Schedule"
            />
          </div>
        </div>
      </div>
      {/* YELLOW BOTTOM AI */}
      <div className="bg-(--yellow500) p-6 flex flex-col gap-12 items-center rounded-xl w-full row-span-4">
        <h1 className="dm-sans-500 text-[40px] tracking-tighter leading-9">
          Write your content <br />
          using AI.
        </h1>
        <img className="w-full" src={ai} alt="AI" />
      </div>
      {/* WHITE PERCENTAGE */}
      <div className="bg-(--white) flex flex-col justify-between p-6 w-full rounded-xl row-span-3">
        <div className="flex flex-col gap-2">
          <h1 className="dm-sans-500 text-6xl">&#62;56%</h1>
          <p className="dm-sans-500 text-[18px]">faster audience growth</p>
        </div>
        <img className="max-w-[180px]" src={audience} alt="Audience" />
      </div>
      {/* PURPLE FOLLOWERS */}
      <div className="bg-(--purple500) p-6 flex flex-row w-full items-center justify-between gap-6 row-span-3 rounded-xl col-span-2">
        <img className="max-w-[220px]" src={followers} alt="Followers" />
        <h1 className="dm-sans-500 tracking-tight leading-9 text-(--white) text-[44px]">Grow followers with non-stop content.</h1>
      </div>
    </div>
  );
};

export default BentoGrid;
