import React from "react";
import Image from "next/image";
import Link from "next/link";
import FloatingTechStacks from "./FloatingTechStacks";

const Hero = () => {
  return (
    <section
      id="me"
      className="w-full h-screen flex px-40 shadow-[0_4px_44.7px_22px_rgba(0,0,0,.5)_inset] bg-background snap-start"
    >
      <div className="w-full h-full flex justify-center items-center relative">
        <FloatingTechStacks />
      </div>
      <div className="w-full flex justify-start items-center relative">
        <Image
          src="/assets/hero/SUBJECT.png"
          alt="Subject"
          width={700}
          height={700}
          className="object-contain"
        />

        <div className="absolute top-60 right-10">
          <div className="w-fit min-w-[200px] text-theme1-secondary relative">
            <h1 className="font-oswald font-semibold text-8xl text-right tracking-wider">
              Aziel <br /> <span className="-mt-4 block">Randel</span>
            </h1>
            {/* 
            <Image
              src={"/assets/hero/dots2.png"}
              alt={"asdf"}
              width={500}
              height={500}
              className="object-contain min-w-[400px] h-auto absolute  top-[70%] left-[30%] opacity-90 contrast-0"
            /> */}
          </div>
          <div className="w-fit min-w-[210px] text-theme1-accent3">
            <p className="font-inter text-lg text-right">
              Software & Web Developer
            </p>
          </div>
        </div>

        <div className="absolute -left-[120px] bottom-55 flex items-center gap-2">
          <a
            className="text-[26px] font-bold text-theme1-accent3 "
            href="#projects"
          >
            VIEW PROJECTS
          </a>
          <div className="w-[150px] h-[6px] rounded-full bg-theme1-secondary border-[1px] border-black"></div>
        </div>
      </div>

      <Image
        src={"/assets/hero/dots1.png"}
        alt={"asdf"}
        width={500}
        height={500}
        className="object-contain w-[1100px] h-auto absolute -bottom-0 left-[0%] opacity-[10%] invert"
      />
    </section>
  );
};

export default Hero;
