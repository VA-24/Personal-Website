import React, { useState, useEffect} from 'react';
import '../App.css';


function BLOGwinterbreakthoughts(){

    return(
        
        <body class='bg-neutral-800'>
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
                    <h1 class='text-4xl lg:text-lg xl:text-4xl text-white font-semibold'>First Post</h1>
                    <p class='text-sm xl:text-base text-neutral-400'>random winter break thoughts</p>
                    <p class='text-sm xl:text-base text-neutral-400'>Dec 27, 2023</p>
                    <div class='border-t'></div>
                    
                </section>

                <section class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl justify-left flex flex-col gap-6 px-6 z-[1]'>
                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        To recap my winter break thus far:
                    </p>

                    <ol class='text-sm xl:text-base text-neutral-100 font-small'>
                        <li class='mb-3 pl-5'>- I spent the first few days chilling (listened to a bunch of Tom Brady videos, went on a couple of walks, ate some nice food with friends, etc).</li>

                        <img
                            src={require("../assets/blog-post-pictures/bp1p1.jpg")}
                            alt="bp1p1"
                            class='w-[25%] mt-10 mb-2 rounded-lg mx-auto'
                        />
                        <p class='text-xs italic text-neutral-400 text-center mb-10'>Some nice weather on a morning walk.</p>

                        <li class='mb-3 pl-5'>- After a while, I felt like I wasn't really doing anything meaningful with my break, so I started to grind quizbowl again (for those who don't know, quizbowl is 
                            an academic buzzer-based competition) by spending a few hours each day studying flashcards and practicing with a friend on <a href='qbreader.org' class='text-blue-300'>qbreader</a>,
                            a site that allows you to play past tournament questions in real time.</li>

                            <img
                                src={require("../assets/blog-post-pictures/bp1p2.jpg")}
                                alt="bp1p2"
                                class='w-[25%] mt-10 mb-2 rounded-lg mx-auto'
                            />
                            <p class='text-xs italic text-neutral-400 text-center max-w-[20rem] mx-auto mb-10'>
                                Over the break, my quizbowl teammates and I played alumni of the quizbowl program in a series of five matches. This was the only
                                match we won.
                            </p>

                        <li class='mb-3 pl-5'>- I then started going through a chemistry textbook and past chemistry/physics olympiad questions as a part of my never-ending quest to make the semifinal stage of both contests.</li>
                        <li class='mb-3 pl-5'>- I also got back into cubing. I'll write about this in another blog post.</li>
                        <li class='mb-3 pl-5'>- That brings us to yesterday, when I decided to start work on my personal website. I figured it was a good idea to build
                            since many say an online portfolio is a good tool to use to showcase your achievements and projects. I also wanted to make this website as an excuse to learn TailwindCSS,
                            a task I've been putting off for far too long now. </li>
                    </ol>

                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        All this leaves me with about a week left of break, time which I don't know how to spend. I might put in a bit more 
                        work on ScibowlScrim, my latest project that's currently still a work-in-progress, or I might just continue to work on this website. I'm not so sure.
                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small mb-10'>
                        Regardless of what I do in the upcoming week, I'm eagerly anticipating the impending school year.
                        I hope to use the ensuing months as a time for relative relaxation (although I can't let my grades drop, since Penn probably won't like that),
                        and I'm sure that reflecting on my experiences and thoughts in this blog will allow me to reflect meaningfully on the weeks ahead.
                    </p>

                </section>

            </div>

        </body>
    )
}

export default BLOGwinterbreakthoughts;