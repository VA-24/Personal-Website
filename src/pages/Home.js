import React, { useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';


function Home(){

    return(
        
        <body class='bg-neutral-800 h-screen m-0'>
            <div class='relative w-full flex flex-col items-center'>
                <main class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl lg:flex-row-reverse gap-8 lg:gap-32 sticky top-0 px-6 py-8 bg-neutral-800'>
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
                        
                        <a href='/101scienceutopia'>
                        <button class='text-xs xl:text-lg flex items-center text-neutral-400 hover:text-white ease-linear'>
                            ‽
                        </button>
                        </a>
                    </nav>

                    <h1 class='text-xl xl:text-4xl font-medium text-neutral-100 leading-tight mt-[-36px]'>Vardhan Agnihotri</h1>
                </main>

                <section class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col justify-center lg:flex-row gap-12 px-6 pb-8 pt-12 z-[1]'>
                    <div class='relative w-full h-[16vh] lg:w-[230px] lg:h-[220px] xl:w-[300px] xl:h-[430px] flex-shrink-0 shadow-lg shadow-neutral-700 overflow-hidden rounded-lg select-none ease-linear transition mt-1 [&>.shine]:hover:block'>
                        <img
                            src={require("../assets/vardhan.jpg")}
                            alt="pfp"
                             // Adjust the width as needed
                        />
                    </div>

                    <div class='flex flex-col gap-8'>
                        <h3 class='text-xl xl:text-3xl font-medium text-neutral-100'>
                            I'm interested in leveraging autonomous robotics to move toward a more <a class='text-green-300'>sustainable future</a>.
                        </h3>

                        <p class='text-base xl:text-xl text-neutral-300'>
                            Currently a high school senior at the St. Mark's School of Texas. Next year, I plan on attending the University of Pennsylvania, where I will obtain degrees in finance from the <a class='text-blue-300'>Wharton School of Business</a> and electrical engineering/computer science from the School of <a class='text-blue-300'>Engineering and Applied Science</a> through the M&T program.
                        </p>

                        <p class='text-base xl:text-xl text-neutral-300'>
                            I'm interested in artificial intelligence, robotics, business, environmental engineering, data science, and startups. For fun, I enjoy coding, playing video games with friends, binging Tom Brady highlights, and playing football with my friends. Above all, I value determination, passion, and perseverance.
                        </p>

                        <p class='text-sm xl:text-base text-neutral-400'>
                            *Fun fact: this website's URL derives inspiration from the formula of the compound Silver Nitrate. It also sounds like my last name - Ag-NO-3!
                        </p>

                        <div class='flex flex-row gap-5 justify-center'>
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

                            <a href='https://www.instagram.com/agno_three/' target='_blank' rel='noopener noreferrer' class='-m-1'>
                                <img
                                    src={require("../assets/instagram.png")}
                                    alt="instagram"
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