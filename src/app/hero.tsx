"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

function Hero() {
  return (
    <header className="bg-white p-8 mb-10">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl text-teal-600"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Welcome!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            I&apos;m Dharma Wiguna, a passionate frontend developer based in
            BALI. Here, you&apos;ll get a glimpse of my journey in the world of
            web development, where creativity meets functionality.
          </Typography>
        </div>
        <div className="mb-20">
          <div className="h-48 flex flex-wrap content-center">
            <div>
              <Image
                alt="test"
                width={600}
                height={500}
                className="inline-block mt-28 xl:block"
                src="/image/code-typing.png"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
