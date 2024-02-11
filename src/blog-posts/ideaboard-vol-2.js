import React, { useState, useEffect} from 'react';
import '../App.css';


function BLOGideaboard2(){

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
                    <h1 class='text-4xl lg:text-lg xl:text-4xl text-white font-semibold'>Ideaboard vol. 2</h1>
                    <p class='text-sm xl:text-base text-neutral-400'>second ideaboard entry</p>
                    <p class='text-sm xl:text-base text-neutral-400'>Feb 11, 2024</p>
                    <div class='border-t'></div>
                    
                </section>

                <section class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl justify-left flex flex-col gap-6 px-6 z-[1]'>
                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        I'm a lazy person.
                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        After getting up, I often lay on my bed in the darkness of my room, too lazy to turn my lights on. In the summers, 
                        I find myself too lazy to turn off or adjust the temperature of my room's AC unit. Laziness, unfortunately, is a common theme
                        that pervades much of my life.
                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        I already have an Amazon Echo Show in my room, so why not couple it with some homemade electronics to alleviate my problems? I could
                        start by developing my own Alexa command to control an Arduino Uno and a motor capable of turning my room's light switch on and off. Later on,
                        I would probably move to using a Raspberry Pi Zero for regulating my room's temperature.
                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        I'm looking forward to starting this project not only since I don't have much else to do right now but also because it would
                        allow me to 3D print my own designs for the first time. For my startup PavedAI, most of the CAD for the robot is done by my partner, and 
                        although I have input on the designs of our components/drivetrain, I don't do any of the 3D modeling itself. Additionally, I would get to further
                        hone my skills with microcontrollers and sensors - devices I've worked with before in past research and projects.

                    </p>

                    <p class='text-sm xl:text-base text-neutral-100 font-small'>
                        I think I'll name it "AC²L:" Alexa-Controlled AC and Lights (AC x ACL = AC²L).
                    </p>


                    <ol class='text-sm xl:text-base text-neutral-100 font-small'>
                        <li class='mb-3'>Current items on the ideaboard:</li>
                        <li class='mb-3 pl-5'>- ScibowlScrim multiplayer (singleplayer already complete)</li>
                        <li class='mb-3 pl-5'>- CoCube (will start after learning how to work with websockets from building ScibowlScrim multiplayer)</li>
                        <li class='mb-3 pl-5'>-  AC²L</li>
                    </ol>

                </section>

            </div>

        </body>
    )
}

export default BLOGideaboard2;