import React, { useRef, useEffect } from "react";

function HostedProjects() {
  const textRef = useRef();

  useEffect(() => {
    let dx = 2;
    let dy = -2; // initial directions
    let x = 0;
    let y = 101;
    let var_x = 10;
    // change var_x to adjust for longer text
    function animate() {
      const textWidth = textRef.current.offsetWidth;
      const textHeight = textRef.current.offsetHeight;
      if (x + dx > window.innerWidth - textWidth - var_x || x + dx < 0) {
        dx = -dx;
      }
      if (y + dy > window.innerHeight - textHeight - 1 || y + dy < 100) {
        dy = -dy;
      }
      x += dx;
      y += dy;
      textRef.current.style.transform = `translate(${x}px, ${y}px)`;
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (

    <body class='bg-neutral-800 min-h-screen m-0'>
            <div class='relative w-full flex flex-col items-center'>
            <main class='w-full max-w-lg lg:max-w-3xl xl:max-w-6xl flex flex-col lg:flex-row-reverse gap-8 lg:gap-80 sticky top-0 px-6 py-8 bg-neutral-800 z-[0] mt-4'>
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

                <div style={{ height: '1px', width: '100%', background: 'white', position: 'absolute', top: '98px' }}></div>

            <a href='https://scibowlscrim.agno3.me'>
                <h1
                ref={textRef}
                style={{ position: "absolute", top: 0, left: 0, color: "white" }}
                className="translate"
                >
                  Projects coming soon, but for now, click me to look at the ScibowlScrim frontend skeleton!
                </h1>
              </a>
            </div>

        </body>
        

  );
}

export default HostedProjects;