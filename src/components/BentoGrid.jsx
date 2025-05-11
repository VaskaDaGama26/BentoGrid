import React from "react";

import stars from "../imgs/illustration-five-stars.webp";
import createPost from "../imgs/illustration-create-post.webp";
import chart from "../imgs/illustration-schedule-posts.webp";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-8 justify-items-center max-w-6xl mx-auto">
      {/* TOP LEFT */}
      <div className="flex flex-col gap-6 w-full h-fit px-8 py-20 bg-(--yellow100) rounded-xl">
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
      <div className="flex flex-col gap-6 w-full h-fit items-center px-10 py-16 col-span-2 bg-(--purple500) rounded-xl">
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
      <div className="flex flex-col relative overflow-hidden gap-6 rounded-xl bg-(--purple100) py-12">
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
    </div>
  );
};

export default BentoGrid;
