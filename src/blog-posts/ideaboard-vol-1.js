import React, { useState, useEffect} from 'react';
import '../App.css';


function BLOGideaboard1(){

    return(
        
        <body class='bg-neutral-800 h-screen m-0'>
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
                    <h1 class='text-4xl lg:text-lg xl:text-4xl text-white font-semibold'>Ideaboard vol. 1</h1>
                    <p class='text-sm xl:text-base text-neutral-400'>first ideaboard</p>
                    <p class='text-sm xl:text-base text-neutral-400'>Dec 28, 2023</p>
                    <div class='border-t'></div>
                    
                </section>

                <section class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl justify-left flex flex-col gap-6 px-6 z-[1]'>
                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        This is my ideaboard. I want it to be a form of continuous documentation of random technological ideas that pop 
                        into my head, but who knows what it'll turn out to be.
                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        We'll start this first ideaboard off with my latest idea: a website that lets users race to see who can solve a cube the fastest
                        given the exact same scramble (thinking of calling the app "CoCube"). Although many cube timers already exist, none to my knowledge allow users to enter races against their friends
                        or random people from across the world.
                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        This new website could start off simple but could eventually scale to a platform upon which global cubing events could be hosted.
                        I think it would be best for me to start small, though, as I've never really dabbled in the world of websockets (a component which I'm guessing
                        will be essential for CoCube).
                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        As for hosting, I think it would be best for CoCube to live on this website under the mysterious "‽" tab you see 
                        on the top right. In the future, I hope to post later projects to this same space.
                    </p>


                    <ol class='text-sm xl:text-base text-neutral-100 font-small'>
                        <li>Current items on the ideaboard:</li>
                        <li class='mb-3 pl-5'>- CoCube (first entry 🥳)</li>
                    </ol>

                </section>

            </div>

        </body>
    )
}

export default BLOGideaboard1;