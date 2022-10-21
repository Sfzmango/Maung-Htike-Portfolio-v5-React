import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import { Carousel } from 'react-responsive-carousel';
import bg from "../assets/aboutmebg.png";
import bglg from "../assets/char.png";
import sep from '../assets/sep.JPG';
import mil from '../assets/mil.JPG';
import tech from '../assets/tech.PNG';
import hcdl from '../assets/hcdl.png';
import intern from '../assets/digitalmedia.JPG';
import skylinedegree from '../assets/skylinedegree.png'
import ucbcert from "../assets/ucbcert.jpg";
import milcert from "../assets/milcert.jpg";
import 'tw-elements';

export default function AboutMe() {

    return (
        <>
            <div className="absolute w-screen min-h-screen items-center color-white bg-contain -z-50 bg-cover bg-[url(https://images.unsplash.com/photo-1579547621706-1a9c79d5c9f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)]">

                {/* about me card */}
                <Fullpage>
                    <FullpageNavigation />
                    <FullPageSections>
                        <FullpageSection style={{ height: "100vh", width: "100%", justifyContent: "center", alignItems: "center" }}>

                            <img src={bg} alt="character" className='absolute w-full -z-40 lg:hidden absolute top-40 opacity-60' />
                            <img src={bglg} alt="character" className='absolute w-full -z-40 hidden lg:block absolute -top-30 xl:-top-20' />

                            <section>
                                <h1 className="sm:text-center ml-5 sm:ml-0 text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white uppercase relative mt-1 invisible">. </h1>
                                <h1 className="sm:text-center ml-5 sm:ml-0 text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white uppercase relative mt-14" style={{ textShadow: "0px 0px 5px black, 0px 0px 5px black, 0px 0px 3px black" }}>About Me</h1>
                                <div className="text-center bg-[#000000ad] text-gray-800 p-6 grid relative sm:mt-[25%] md:mx-10 h-fit lg:inset-0 lg:static lg:mt-[10%] lg:ml-10 xl:ml-28 lg:w-[40%] xl:w-[30%]">
                                    <p className='text-xl text-white text-center mx-10 max-w-fit' style={{ textShadow: "0px 0px 1px black" }}>Hi, I’m Maung, and I am a Full Stack Developer (MERN). I am a hard-working individual with a passion for going out of my comfort zone and learning new things. I have recently received a certificate in Full Stack Development and my AS in Business Administration. I am currently open for any opportunites that might be available for someone at my level.</p>
                                    <p className='text-xl mt-10 text-white text-center mx-10 max-w-fit uppercase'>Recent graduate from UC Berkeley's Full Stack Development Course
                                    </p>
                                </div>
                            </section>
                        </FullpageSection>

                        {/* page 2 */}
                        <FullpageSection style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} className="bg-cover bg-[url(https://images.unsplash.com/photo-1512551980832-13df02babc9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80)]">

                            <section>



                                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold text-white uppercase text-center mb-10" style={{ textShadow: "0px 0px 5px black" }}>Skills</h1>
                                <div className=" text-gray-800 grid md:grid-cols-2 gap-4">

                                    <div className="flex justify-center">
                                        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                                            <div className="py-3 px-6 border-b border-gray-300">
                                                <b>Technical Skills</b>
                                            </div>
                                            <div className="p-6">

                                                <div className="accordion accordion-flush" id="accordionFlush">
                                                    <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                                        <h2 className="accordion-header mb-0" id="flush-headingOne">
                                                            <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                                                aria-expanded="false" aria-controls="flush-collapseOne">
                                                                Front-End Development
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse border-0 collapse"
                                                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                                                            <div className="accordion-body py-4 px-5 grid grid-cols-3 gap-4">
                                                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                                                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                                                                <img src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                                                                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
                                                                <img src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery" />
                                                                <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
                                                                <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                                        <h2 className="accordion-header mb-0" id="flush-headingOne">
                                                            <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                                                aria-expanded="false" aria-controls="flush-collapseOne">
                                                                Back-End Development
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse"
                                                            aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
                                                            <div className="accordion-body py-4 px-5 grid grid-cols-3 gap-4">
                                                                <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js" />
                                                                <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                                                                <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                                                                <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.JS" />
                                                                <img src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL" />
                                                                <img src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens" alt="JWT" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                                        <h2 className="accordion-header mb-0" id="flush-headingOne">
                                                            <button className="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                                                aria-expanded="false" aria-controls="flush-collapseOne">
                                                                Etc
                                                            </button>
                                                        </h2>
                                                        <div id="flush-collapseThree" className="accordion-collapse border-0 collapse"
                                                            aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush">
                                                            <div className="accordion-body py-4 px-5 grid grid-cols-3 gap-4">
                                                                <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS code" />
                                                                <img src="https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown" />
                                                                <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack" />
                                                                <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                                                                <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                                                                <img src="https://img.shields.io/badge/Command%20Line-%234D4D4D.svg?style=for-the-badge&logo=windows-terminal&logoColor=white" alt="Command Line" />
                                                                <img src="https://img.shields.io/badge/Microsoft_Office-D83B01?style=for-the-badge&logo=microsoft-office&logoColor=white" alt="Microsoft Office" />
                                                                <img src="https://img.shields.io/badge/LibreOffice-%2318A303?style=for-the-badge&logo=LibreOffice&logoColor=white" alt="Libre Office" />
                                                                <img src="https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE" alt="Insomnia" />
                                                                <img src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white" alt="Heroku" />
                                                                <img src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
                                                                {/* <img src="" alt="" /> */}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                                            <div className="py-3 px-6 border-b border-gray-300">
                                                <b>Certs</b>
                                            </div>
                                            <div className="p-6">
                                                <Carousel className='z-20' infiniteLoop="true" emulateTouch="true" allowFullscreen="true" style={{ minWidth: "0" }}>
                                                    <div>
                                                        <img src={ucbcert} alt="Coding Certificate from UC Berkeley" />
                                                        <p className="legend"><span className="font-extrabold text-lg">Full Stack Development Certificate<br /> </span>                                                     <span><i>UC Berkeley Extension – Berkeley, CA<br /> Jun 2022 <br /></i></span>
                                                            A 12-week intensive program focused on gaining technical programming skills in HTML5, CSS3,
                                                            Javascript, JQuery, Bootstrap, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS.
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <img src={skylinedegree} alt="AS-T Business Administration" />
                                                        <p className="legend"><span className="font-extrabold text-lg">AS-T in Business Administration<br /> </span>                                                     <span><i>Skyline College – San Bruno, CA  <br /> May 2022 <br /></i></span>
                                                            ● Member of MESA program. <br />
                                                            ● A 60-unit undergraduate program that goes over the core principles and practices in the field of
                                                            business with concepts such as Business Law, Economics, Accounting, Business Information Systems,
                                                            and Communications.</p>
                                                    </div>
                                                    <div>
                                                        <img src={milcert} alt="Military diploma" />
                                                        <p className="legend"><span className="font-extrabold text-lg">Diploma in Electro-Optical Ordnance Repairer<br /> </span>                                                     <span><i>United States Army Ordnance School – Fort Lee, VA <br /> Apr 2019 <br /></i></span>
                                                            A 6-month military training program that covers the foundations of inspecting, troubleshooting,
                                                            maintaining, and repairing electro-optical military equipment such as night vision devices, thermal
                                                            optics, laser equipment, small missile systems, LAV, and M777 Howitzer targeting systems, and more.</p>
                                                    </div>
                                                </Carousel>
                                            </div>
                                            <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                                                2 days ago
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                        </FullpageSection>

                        <FullpageSection style={{ width: "100%", objectFit: "cover", alignItems: "center", display: "flex" }} className="bg-cover bg-[url(https://images.unsplash.com/photo-1579547944963-bb18d21c396a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80)]">

                            <div className=" w-screen items-center color-white  mt-0 flex-none min-w-0">

                                {/* <img src={expbg} alt="hexagon bg" className="hidden sm:block absolute h-[100%] w-screen opacity-30" /> */}
                                <h1 className="text-center ml-5 sm:ml-0 text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white uppercase mt-8 pt-10 relative top-8" style={{ textShadow: "0px 0px 3px black, 0px 0px 3px black, 0px 0px 3px black" }}>Experiences</h1>

                                <section className='relative lg:inset-1/4'>
                                    <Carousel className='relative py-10 h-fit lg:w-[60%] lg:-ml-16 xl:ml-0 xl:w-[50%] z-10' infiniteLoop="true" emulateTouch="true" style={{ minWidth: "0" }}>
                                        <div>
                                            <img src={hcdl} alt="hcdl pic" />
                                            <p className="legend"><span className="font-extrabold text-[.9rem]">Dev Team Full Stack Developer Intern<br /> </span><span><i>HCDL Inc. - Remote <br />
                                                October 2022 - Present <br /></i></span>
                                                Recently started an internship at a start-up company called Healthcare Download Inc (HCDL Inc). Current responsibilities are to design wireframe for the web application of the company using Figma, use React for the front-end, SQL for the back-end development, Postman to test the implimentation of third party APIs, and to attend company and one-on-one meetings with a senior developer to discuss code.</p>
                                        </div>
                                        <div>
                                            <img src={mil} alt="military pic" />
                                            <p className="legend"><span className="font-extrabold text-[.9rem]">2171-Electro-Optical Ordinance Technician<br /> </span><span><i>United States Marine Corps - San Jose, CA <br />
                                                June 2018 - Present <br /></i></span>
                                                Currently a reservist in the Marine Corps as an 2171-Electro-Optical Ordnance Repairer. I work on optic related gear. This range from night vision cameras, thermals, and targeting systems on a LAV, JAVELIN, SABER, Howitzer, as well as many more military equipment. Overall my primary duties was to inspect, take inventory, to maintain,and if needed, repair the specified gear utilizing a technical manual.</p>
                                        </div>
                                        <div>
                                            <img src={sep} alt="solar consultant pic" />
                                            <p className="legend"><span className="font-extrabold text-lg">Solar Consultant<br /> </span>                                                     <span><i>Solar Energy Partners ~ North Bay, CA <br /> October 2020 - September 2022 <br /></i></span>
                                                Currently working as a solar consultant where my job responsibilities are to find possible qualifying households for solar and direct them into going green while also saving them money on their electricity bill. I work with the client to try to fulfill their needs and goals for solar. Not only do I have to generate leads, but I also have to prepare a design proposal with our partners for the customer and negotiate with them to close a deal that they are happy with.</p>
                                        </div>
                                        <div>
                                            <img src={tech} alt="solar test tech pic" />
                                            <p className="legend"><span className="font-extrabold text-lg">Solar Test Technician<br /> </span>                                                     Solar <span><i>PVEL - Berkeley, CA
                                                <br />
                                                June 2019 - July 2020<br /></i></span>
                                                Worked as a night shift Solar Lead Test
                                                Technician at PV Evolution Labs. My duties involved leading a small group of test
                                                technicians to put solar panels through various different tests which measured
                                                their efficiency in a varity of aspects. For example, in one of the tests, we isolate a solar cell in order to tech efficiency at different light angles. Occasionally, I worked with upstream and downstream customers to help facilitate the logistics side of the testing process.</p>
                                        </div>
                                        <div>
                                            <img src={intern} alt="intern pic" />
                                            <p className="legend"><span className="font-extrabold text-lg">Digital Media Intern<br /> </span>                                                     Solar <span><i>Board of Directors - Redwood City, CA <br />
                                                September 2017 to June 2018 <br /></i></span>
                                                Interned for David J. Canepa, the District 5 Supervisor of San Mateo
                                                County. I handled things in the office occasionally, but I mostly handled media related jobs such as taking pictures or videos of events and also editing them using software such as Adobe Premiere. I have received a letter of recommendation from David J. Canepa for my work.</p>
                                        </div>
                                    </Carousel>
                                </section>
                            </div>
                        </FullpageSection>
                    </FullPageSections>
                </Fullpage>
                {/* <h1 className="text-center ml-5 sm:ml-0 my-5 text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight text-white uppercase" style={{ textShadow: "0px 0px 5px black" }}>Experiences</h1> */}
            </div >
        </>
    );
}
