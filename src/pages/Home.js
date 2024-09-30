import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';


function Home(){

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


                <section class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col justify-center lg:flex-row gap-12 px-6 pb-8 pt-12 z-[1] border border-neutral-200 p-2 rounded-md mt-10 mb-3'>
                    <div class='relative w-full h-[16vh] lg:w-[230px] lg:h-[220px] xl:w-[300px] xl:h-[430px] flex-shrink-0 shadow-lg shadow-neutral-700 overflow-hidden rounded-lg select-none ease-linear transition mt-1 [&>.shine]:hover:block'>
                        <img
                            src={require("../assets/vardhan.jpg")}
                            alt="pfp"
                             // Adjust the width as needed
                        />
                    </div>

                    <div class='flex flex-col gap-8'>
                        <h3 class='text-xl xl:text-3xl font-medium text-neutral-100'>
                            Vardhan Agnihotri
                        </h3>

                        <p class='text-base xl:text-xl text-neutral-300'>
                            I'm currently a freshman at the University of Pennsylvania pursuing dual degrees in Finance from the Wharton School of Business and Electrical Engineering from the School of Engineering and Applied Sciences through the M&T program.
                        </p>

                        <p class='text-base xl:text-xl text-neutral-300'>
                            I'm interested in artificial intelligence, engineering, business, data science, venture capital, and startups. One day, I hope to leverage autonomous robotics and move toward a more <a class='text-green-300'>sustainable future</a>.
                        </p>

                        <p class='text-sm xl:text-base text-neutral-400'>
                            *This website's URL comes from the compound Silver Nitrate. It also sounds like my last name.
                        </p>

                        <div class='flex flex-row gap-5 justify-center bt-3'>
                            <a href='https://www.linkedin.com/in/agno3/' target='_blank' rel='noopener noreferrer' class='-m-1'>
                                <img
                                    src={require("../assets/linkedin.png")}
                                    alt="linkedin"
                                    class='w-8'
                                    
                                />
                            </a>

                            <a href='mailto:va648314@gmail.com' target='_blank' rel='noopener noreferrer' class='-m-1'>
                                <img
                                    src={require("../assets/gmail.png")}
                                    alt="gmail"
                                    class='w-8'
                                />
                            </a>

                            <a href='https://github.com/VA-24' target='_blank' rel='noopener noreferrer' class='-m-1'>
                                <img
                                    src={require("../assets/github.png")}
                                    alt="github"
                                    class='w-8'
                                    
                                />
                            </a>

                            <a href='https://www.youtube.com/channel/UC5edMbbmcxUaNUjfluM3mkw' target='_blank' rel='noopener noreferrer' class='mt-0.5'>
                                <img
                                    src={require("../assets/youtube.png")}
                                    alt="youtube"
                                    class='w-8'
                                    
                                />
                            </a>

                            
                        </div>
                    </div>
                </section>   

                
                
            </div>

        </body>
    )
}

export default Home;