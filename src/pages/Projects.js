import React, { useState, useEffect} from 'react';
import '../App.css';


function Projects(){

    return(
        
        <body class='bg-zinc-800'>
            <div class='relative w-full flex flex-col items-center'>
                <main class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl lg:flex-row-reverse gap-8 lg:gap-32 sticky top-0 px-6 py-8 bg-zinc-800'>
                    <nav class='w-full flex flex-row items-center gap-32 justify-end'>
                        <a href='/projects'>
                        <button class='text-xs xl:text-lg flex items-center text-neutral-400 hover:text-white ease-linear'>
                            Projects
                        </button>
                        </a>

                        <a href='/archives'>
                        <button class='text-xs xl:text-lg flex items-center text-neutral-400 hover:text-white ease-linear'>
                            Archives
                        </button>
                        </a>

                        <button class='text-xs xl:text-lg flex items-center text-neutral-400 hover:text-white ease-linear'>
                            ‽
                        </button>
                    </nav>

                    <a href='/'><h1 class='text-xl xl:text-4xl font-medium text-neutral-100 leading-tight mt-[-36px]'>Vardhan Agnihotri</h1></a>
                </main>

                <section id='projects' class='w-full h-full flex flex-col items-center gap-1'>
                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 mt-8 bg-white rounded-xl' href='https://pavedai.tech/'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>PavedAI</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Developing a fully-autonomous robot capable of filling cracks in concrete + continuing to secure funding for the endeavor ($11,000 already secured).</p>
                    </div>
                    <div class='relative w-full h-[28vh] lg:h-[50vh] max-h-[380px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                    <img
                            src={require("../assets/pavedai.png")}
                            alt="pavedai"
                        />
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl' href='https://mints.utdallas.edu/'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>Research @ MINTS Laboratory</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Worked on projects dealing with electrical engineering/circuit design, data science, and machine learning, publishing 3 papers.</p>
                    </div>
                    <div class='relative w-full h-[28vh] lg:h-[50vh] max-h-[380px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                    <img
                            src={require("../assets/mints.png")}
                            alt="mints"
                        />
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl' href='https://metrohacks.dev/'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>MetroHacks</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Organized virtual international hackathons with over 2,500+ hackers from 30+ countries and $150,000+ in sponsorships.</p>
                    </div>
                    <div class='relative w-full h-[28vh] lg:h-[50vh] max-h-[380px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                    <img
                            src={require("../assets/metrohacks.png")}
                            alt="metrohacks"
                        />
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl' href='https://opho.physoly.tech/'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>Online Physics Olympiad</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Hosted an international physics contest with 5,000+ hackers from 50+ countries and $10,000+ in sponsorships.</p>
                    </div>
                    <div class='relative w-full h-[28vh] lg:h-[50vh] max-h-[380px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                    <img
                            src={require("../assets/opho.png")}
                            alt="metrohacks"
                        />
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl' href='https://devpost.com/software/mealthyme'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>MealThyme</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Built an app to help people with eating disorders schedule recovery meal plans with the use of the Monte Carlo algorithm, React, and FastAPI.</p>
                    </div>
                    <div class='relative w-full h-[30vh] lg:h-[50vh] max-h-[400px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                        <img
                                src={require("../assets/mealthyme.png")}
                                alt="metrohacks"
                            />
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl' href='https://devpost.com/software/tripgpt'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>TripGPT</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Built a website that helps tourists plan vacations by using bootstrapping, FastAPI, and OpenAI's API.</p>
                    </div>
                    <div class='relative w-full h-[28vh] lg:h-[45vh] max-h-[350px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                        <img
                                src={require("../assets/tripgpt.png")}
                                alt="metrohacks"
                            />
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl' href='https://devpost.com/software/gardenwise'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>GardenWise</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Built a website that allows community gardeners to coordinate their growing schedules and manage their own crops/learn how to grow new ones with the help of OpenAI's API and the Flask framework (frontend WIP).</p>
                    </div>
                    <div class='relative w-full h-[28vh] lg:h-[45vh] max-h-[355px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                        <img
                                src={require("../assets/gardenwise.png")}
                                alt="metrohacks"
                            />
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl' href='https://www.joinnova.xyz/'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>nova</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Helped develop a machine learning algorithm to filter out noise in manufacturing data and worked with interns to design a mock dash/landing page for the startup.</p>
                    </div>
                    <div class='relative w-full h-[30vh] lg:h-[50vh] max-h-[400px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                        <img
                                src={require("../assets/nova.png")}
                                alt="metrohacks"
                            />
                        <div class='w-full h-full shine'></div>
                    </div>

                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl' href='https://github.com/VA-24/ScibowlScrim-Backend'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>ScibowlScrim</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Developing a multiplayer scrimmage website for science bowlers by parsing and processing past questions. Currently a work in progress: FastAPI backend almost fully set up, frontend yet to be started.</p>
                    </div>
                    <div class='relative w-full h-[30vh] lg:h-[50vh] max-h-[400px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                        <img
                                src={require("../assets/scibowlscrim.png")}
                                alt="metrohacks"
                            />
                    </div>
                </a>

                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl' href='/'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>agno3.me</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Designed and built custom portfolio website with React.js and TailwindCSS.</p>
                    </div>
                    <div class='relative w-full h-[28vh] lg:h-[50vh] max-h-[378px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                        <img
                                src={require("../assets/agno3me.png")}
                                alt="metrohacks"
                            />
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100'></div>
                    </div>

                </a>


                <a target='_blank' class='sticky z-[2] top-0 lg:top-32 [&>div>.shine]:hover:block w-full max-w-lg lg:max-w-3xl xl:max-w-6xl h-[60vh] lg:h-[75vh] lg:max-h-[600px] flex flex-col xl:flex-row justify-start gap-8 px-4 py-12 lg:px-6 xl:px-12 xl:py-24 bg-white rounded-xl' href='https://pavedai.tech/'>
                    <div class='flex flex-col gap-4'>
                        <h3 class='font-medium text-xl xl:text-2xl 2xl:text-3xl text-black'>Miscellaneous Projects</h3>
                        <p class='text-base xl:text-lg 2xl:text-xl text-neutral-700'>Worked on dozens of projects ranging from a speedtyping bot to a personalized voice assistant to an AI that plays the game Snake. </p>
                    </div>
                    <div class='relative w-full h-[30vh] lg:h-[50vh] max-h-[400px] xl:w-2/3 flex-shrink-0 overflow-hidden rounded-md select-none shadow-lg shadow-neutral-500'>
                        <img
                                src={require("../assets/randomprojects.png")}
                                alt="metrohacks"
                            />
                    </div>
                </a>

            </section>
            </div>

            
            

        </body>
    )
}

export default Projects;