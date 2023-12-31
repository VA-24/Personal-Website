import React, { useState, useEffect} from 'react';
import '../App.css';


function BLOGboredom(){

    return(
        
        <body class='bg-neutral-800 min-h-screen m-0'>
            <div class='relative w-full flex flex-col items-center'>
            <main class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-80 sticky top-0 px-6 py-8 bg-neutral-800 z-[2] mt-4'>
                <nav class='w-full flex flex-row items-center justify-between tracking-tight'>
                    <a href='/projects'>
                    <button class='text-xs xl:text-lg flex items-center text-neutral-400 hover:text-white ease-linear transition [&>svg]:hover:rotate-45 [&>svg]:hover:translate-x-1'>
                        Projects
                    </button>
                    </a>

                    <a href='/archives'>
                    <button class='text-xs xl:text-lg flex items-center text-neutral-400 hover:text-white ease-linear transition [&>svg]:hover:rotate-45 [&>svg]:hover:translate-x-1'>
                        Archives
                    </button>
                    </a>

                    <a href='/hosted-projects'>
                    <button class='text-xs xl:text-lg flex items-center text-neutral-400 hover:text-white ease-linear transition [&>svg]:hover:rotate-45 [&>svg]:hover:translate-x-1'>
                        ‽
                    </button>
                    </a>
                </nav>

                <a href='/' class='flex-shrink-0'>
                    <h1 class='text-2xl lg:text-lg xl:text-2xl text-white font-semibold'>
                    <img
                            src={require("../assets/VA Logo.png")}
                            alt="pfp"
                            class='w-8'
                             // Adjust the width as needed
                        />
                    </h1></a>
                </main>

                <section class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl justify-left flex flex-col gap-3 px-6 pb-10 pt-8 z-[1]'>
                    <h1 class='text-4xl lg:text-lg xl:text-4xl text-white font-semibold'>Boredom</h1>
                    <p class='text-sm xl:text-base text-neutral-400'>detailing my cubing journey for fun</p>
                    <p class='text-sm xl:text-base text-neutral-400'>Dec 30, 2023</p>
                    <div class='border-t'></div>
                    
                </section>

                <section class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl justify-left flex flex-col gap-6 px-6 z-[1]'>
                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        As we near the start of the new year, I've come to realize that my goals for the break have largely been accomplished (see 
                        my first blog post for more information). Thus, out of pure boredom, I'm putting a majority of my time nowadays into
                        improving my 3x3 speedsolving times.
                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        I first started cubing in the Christmas break of 3rd grade (about nine years ago). After learning from YouTube videos and online
                        tutorials with my dad, I was able to solve the puzzle in about two minutes, a time which I relentlessly worked to bring down (as a 3rd grader,
                        I didn't have much better to do). I quickly broke the 1:30 mark, then the 1:00 mark, then the 45 second mark, eventually plateauing at about 30 seconds.
                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        Over the years, cubing remained one of my favorite hobbies. As opposed to solely investing time into the 3x3, however, I branched
                        out to other puzzles, expanding my collection by adding bigger cubes, cubes of different shapes, and more.
                    </p>

                    <img
                                src={require("../assets/blog-post-pictures/bp3p1.jpg")}
                                alt="bp1p2"
                                class='w-[30%] mt-5 rounded-lg mx-auto'
                            />
                            <p class='text-xs italic text-neutral-400 text-center max-w-[20rem] mx-auto mb-1'>
                                My cube collection.
                            </p>


                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        Coming into winter break of this year, I decided to dedicate substantial time to, among other things, improving my speedsolving skills. 
                        My plan was to first improve my cross-building and F2L (First Two Layers), steps which help solve - as the latter's name suggests - the first
                        two layers of the cube. After about two weeks of practice, I was able to reduce my average time by about five seconds, going from ~25 seconds/solve to ~20.
                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small mb-10'>
                        To further improve, I'm looking forward to learning the 57 OLL/ 21 PLL algorithms (steps which solve the remaining last layer). As I've done in the past,
                        I'm looking forward to using cubing as a method for relaxation and rewinding, albeit with (hopefully) faster solves.
                    </p>

                </section>

            </div>

        </body>
    )
}

export default BLOGboredom;