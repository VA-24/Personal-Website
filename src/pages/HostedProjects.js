import React, { useRef, useEffect} from 'react';
import { useRaf } from 'react-use';
import '../App.css';


function HostedProjects(){

    const labelRef = useRef();
    const speed = useRef({ x: 5, y: 3 });
    const direction = useRef({ x: 1, y: 1 });

    useEffect(() => {
        checkBoundary();
    }, []); // Adds the initial bounding box sizes.

    // Using the requestAnimationFrame hook from react-use.
    useRaf(() => {
        if (!labelRef.current) return;
        let { x, y } = speed.current;
        let newX = labelRef.current.offsetLeft + direction.current.x * x;
        let newY = labelRef.current.offsetTop + direction.current.y * y;

        labelRef.current.style.left = `${newX}px`;
        labelRef.current.style.top = `${newY}px`;
        checkBoundary();
    });

    const checkBoundary = () => {
        if (!labelRef.current) return;
        let { x, y } = speed.current;

        // Check for right boundary
        if (labelRef.current.offsetLeft + labelRef.current.offsetWidth > window.innerWidth) {
            direction.current.x = -1;
        } 
        // Check for left boundary
        else if (labelRef.current.offsetLeft < 0) {
            direction.current.x = 1;
        } 
        // Check for bottom boundary
        if (labelRef.current.offsetTop + labelRef.current.offsetHeight > window.innerHeight) {
            direction.current.y = -1;
        } 
        // Check for top boundary
        else if (labelRef.current.offsetTop < 0) {
            direction.current.y = 1;
        }
    };

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

                    <a href='/101scienceutopia'>
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
            </div>
            <h1 ref={labelRef} className="bounce" style={{ position: "absolute", left: 0, top: 0 }}>
                projects coming soon!
            </h1>
        </body>
    )
}

export default HostedProjects;