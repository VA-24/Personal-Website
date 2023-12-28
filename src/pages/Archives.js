import React, { useState, useEffect} from 'react';
import '../App.css';


function Archives(){

    return(
        <body class='bg-neutral-800 h-screen m-0'>
            <div class='relative w-full flex flex-col items-center'>
            <main class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-80 sticky top-0 px-6 py-8 bg-neutral-800 z-[2]'>
                <nav class='w-full flex flex-row items-center justify-between tracking-tight mt-4'>
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

                    <a href='/101scienceutopia'>
                    <button class='text-xs xl:text-lg flex items-center text-neutral-400 hover:text-white ease-linear transition [&>svg]:hover:rotate-45 [&>svg]:hover:translate-x-1'>
                        ‽
                    </button>
                    </a>
                </nav>

                <a href='/' class='flex-shrink-0 mt-4'><h1 class='text-2xl lg:text-lg xl:text-2xl text-white font-semibold'>Vardhan Agnihotri</h1></a>
                </main>
            </div>
            
            <section class='w-full text-center gap-12 px-6 pb-8 pt-12 z-[1]'>
                    <h1 class='text-xl xl:text-3xl font-medium text-neutral-100 mb-6'>My Blog/Ideaboard</h1>
                    <p class='text-xl xl:text-xl font-medium text-neutral-300'>Here, you can find blog posts detailing trips I take or ideas I have. Inspired by MIT admissions' blog.</p>
            </section>

                    
            <section class='flex flex-wrap justify-left ml-40 mt-20'>

            <a href='/archives/winter-break-thoughts'>
                    <div class='relative justify-center border border-neutral-200 p-4 rounded-md mb-20 mx-20'>
                            <h3 class='text-xl xl:text-xl font-small text-neutral-100'>Beginning the Ideaboard</h3>
                            <p class='text-sm xl:text-base font-small text-neutral-400'>December 28th, 2023</p>
                            <p class='text-sm xl:text-base font-small text-neutral-400 mt-2'>the start of a long journey</p>
                    </div>
                </a>
                
                <a href='/archives/winter-break-thoughts'>
                    <div class='relative justify-center border border-neutral-200 p-4 rounded-md mb-20 mx-20'>
                            <h3 class='text-xl xl:text-xl font-small text-neutral-100'>First post</h3>
                            <p class='text-sm xl:text-base font-small text-neutral-400'>December 27th, 2023</p>
                            <p class='text-sm xl:text-base font-small text-neutral-400 mt-2'>random winter break thoughts</p>
                    </div>
                </a>
                    
            </section>

            
        </body>
    )
}

export default Archives;