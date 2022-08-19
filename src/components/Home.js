import React, { useState } from 'react';
import bggif from '../assets/homebg.gif';
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contacts";


export default function Home({ setPage, setMenuDrawer, setHomeCheck }) {


    return (
        <>
            <section className='absolute w-screen min-h-screen flex items-center bg-black color-white -z-50'>

                <img src={bggif} alt="background" className='absolute top-0 left-0 w-screen h-screen object-cover opacity-90' />

                <div className="absolute top-0 left-0 w-screen h-screen bg-[#9a6724] mix-blend-overlay"></div>
            </section>


            {/* textbox */}
            <section>
                <div className="text-center bg-[#0000008b] text-gray-800 py-24 px-6 grid md:absolute md:inset-1/4 h-screen sm:h-fit">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white uppercase" style={{ textShadow: "0px 0px 5px black" }}>Maung Htike</h1>
                    <p className='text-xl my-5 text-white text-center mx-10 my-10 max-w-fit' style={{ textShadow: "0px 0px 5px black" }}>Full stack web developer (MERN) educated at UC Berkeley. Eager to bring my experience from the military and civilian side to make apps that matter.</p>
                    <div className="grid gap-4 md:flex justify-center">
                        <button className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={() => { setPage(() => <AboutMe />); setHomeCheck(false) }} style={{ textShadow: "0px 0px 3px black" }}>About Me</button>
                        <button className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={() => { setMenuDrawer(true) }} style={{ textShadow: "0px 0px 3px black" }}>MENU BTN
                        </button>
                        <button className="inline-block px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-orange-600 hover:shadow-lg focus:bg-orange-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-700 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={() => { setPage(() => <Contact />); setHomeCheck(false) }} style={{ textShadow: "0px 0px 3px black" }}>Contact</button>
                    </div>
                </div>
            </section>
        </>
    );
}

