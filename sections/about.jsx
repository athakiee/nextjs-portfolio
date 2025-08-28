"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <div
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='about'
        ref={aboutRef}
      >
        <h2 className='text-3xl font-bold text-center pt-4 pb-8 flex justify-center items-center gap-3'>
          About me
        </h2>
        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] md:flex gap-[50px]'>
          <Image
            alt='about image'
            className={
              "shadow-zinc-300 dark:shadow-zinc-700 shadow-sm transition-all duration-700 translate-x-[-900px] bg-blue-200 m-auto bg-cover bg-no-repeat max-h-[500px] rounded object-contain"
            }
            height={350}
            ref={profile2Ref}
            src='/images/atha.jpg'
            width={350}
          />
          <div
            className='text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-4 md:mt-0 md:w-[50%] text-center md:text-left rounded'
            ref={aboutInfoRef}
          >
            <p className='text-3xl text-center md:text-left font-semibold text-black dark:text-white'>
              Atharizky Ade Santosa
            </p>
            <p className='text-center md:text-left text-black mt-1 dark:text-white'>
              Front-End Developer
            </p>
            {/* Location */}
            <div className='flex flex-wrap justify-center md:justify-normal gap-2'>
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='font-semibold text-center md:text-left text-black dark:text-white'>
                    Location
                  </p>
                </div>
                <p className='text-center md:text-left text-[#0b0c0c] dark:text-white'>
                  Osaka, Japan
                </p>
              </div>
              {/* Experience */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='font-semibold text-center md:text-left text-black dark:text-white'>
                    Experience
                  </p>
                </div>
                <p className='text-center md:text-left text-black dark:text-white'>
                  3 Years{" "}
                </p>
              </div>
              {/* JLPT */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='font-semibold text-center md:text-left text-black dark:text-white'>
                    JLPT Level
                  </p>
                </div>
                <p className='text-center md:text-left text-black dark:text-white'>
                  N2
                </p>
              </div>
              {/* English CEFR */}
              <div className='w-fit px-4 py-2 mt-5 border border-gray-400 rounded flex flex-col items-center gap-2'>
                <div className='flex gap-3 items-center'>
                  <p className='font-semibold text-center md:text-left text-black dark:text-white'>
                    English CEFR
                  </p>
                </div>
                <p className='text-center md:text-left text-black dark:text-white'>
                  C1 Advanced
                </p>
              </div>
            </div>

            <div className='mt-5 justify-evenly text-justify'>
              <p className='text-gray-600 dark:text-gray-300'>
              I'm a Front-End Developer with three years experience developing responsive web applications using React Js, Next Js, JavaScript. I
              have experience in using Software development methodologies such as Agile, Waterfall and SDLC. Highly accomplished and user-focused in collaborating
              with UX and design teams to plan the technical writing and execution of functional specifications for websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
