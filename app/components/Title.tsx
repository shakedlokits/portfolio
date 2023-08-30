"use client";

import Typewriter from 'typewriter-effect';

export const Title = ({ funny }: { funny?: boolean }) => {  
  return (
    <div className="pb-8">
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] ">
        Hi! I’m Shaked Lokits,<br />Technically&nbsp;
        <span className="hightlight inline whitespace-nowrap">
          <Typewriter
            options={{
              strings: [
                'a Developer',
                'an Artist',
                'a Teacher',
                'a Designer',
                'a Sailor',
                'an Engineer',
                'a Researcher',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
      {funny && <p className="sm:left-8 left-4 relative sm:pt-0 pt-2">*Well, it’s complicated</p>}
    </div>
  );
};
