import React from 'react';
import vacationawaits from "../assets/vacationawaits.png";
import dnc from "../assets/dnc-bg.jpg";
import workspace from "../assets/workspace.png";
import ecommerce from "../assets/back-end.png";
import passgen from "../assets/pass-gen.gif";
import memorylane from "../assets/memorylane.gif";
import 'tw-elements';

export default function Projects() {

    return (
        <div className="pt-1 bg-cover bg-[url(https://images.unsplash.com/photo-1615714258866-81a35aa47739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80)]" >

            <div className="container mt-24 px-6 mx-auto">

                <section className="text-gray-800 text-center lg:text-left">
                    <h2 className="sm:text-center ml-5 sm:ml-0 text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-extrabold mb-12 text-center uppercase text-white underline underline-offset-8 decoration-gray-500 decoration-2" style={{ textShadow: "0px 0px 5px black, 0px 0px 5px black, 0px 0px 3px black" }}>Featured Projects</h2>

                    <div className="grid lg:grid-cols-3 gap-x-6">

                        {/* Memory Lane card */}
                        <div className="mb-12 lg:mb-0">
                            <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                                style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img alt="memory lane" src={memorylane} className="w-full h-[350px]" />
                                <a href="https://the-memory-lane.herokuapp.com/" target="_blank" rel="noreferrer">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                </a>
                            </div>

                            <div className="bg-[rgba(255,255,255,0.85)] p-5 pb-0 mb-5">
                                <h5 className="text-lg font-bold mb-3">Memory Lane</h5>
                                <div className="mb-3 text-red-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                                    <img className="w-9 h-10 mx-2" src="https://icon-library.com/images/react-icon/react-icon-29.jpg" alt="react icon" viewBox="0 0 384 512" />
                                    <div>Group Project W/ Joey Bennett <br />
                                        <span className="text-gray-400">June 2022</span>
                                    </div>

                                </div>
                                <p className="text-gray-500">
                                    <b>MERN Stack project</b> - Allows users to create and share timelines they create.
                                    <br />
                                    <b>Tools</b> - Google Suite, Chrome Developer Tools, Canva, Figma, Git, GitHub, VSCode, HTML5, CSS3, JavaScript, MongoDB, Express.JS, React, Node.JS, TailwindCSS, React Router, JWT, GraphQL, ApolloClient, Heroku.
                                    <br />
                                    <b> Role: Front End Developer</b> - Worked on the front end of the webpage and also worked with the back-end developer to have code working between the two ends.
                                </p>
                                <a type="button" className="inline-block px-6 py-2.5 my-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href="https://github.com/coderbennett/memory-lane" target="_blank" rel="noreferrer">Repo</a>
                            </div>
                        </div>

                        {/* Vacation Awaits card */}
                        <div className="mb-12 lg:mb-0">
                            <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                                style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img src={vacationawaits} alt="vacation awaits" className="w-full h-[350px] object-cover" />
                                <a href="https://sfzmango.github.io/date-night-and-chill/" target="_blank" rel="noreferrer">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                </a>
                            </div>

                            <div className="bg-[rgba(255,255,255,0.85)] p-5 pb-0 mb-5">
                                <h5 className="text-lg font-bold mb-3">Vacation Awaits</h5>
                                <div className="mb-3 text-blue-600 font-medium text-sm flex items-center justify-center lg:justify-start">
                                    <img className="w-10 h-10 mx-2" src="https://static.thenounproject.com/png/390336-200.png" alt="full stack icon" viewBox="0 0 384 512" />
                                    <div>Group Project W/ Keerti Chaudhary and Callan Hunter <br />
                                        <span className="text-gray-400">May 2022</span></div>
                                </div>

                                <p className="text-gray-500">
                                    <b> Database orientated project </b>- Uses MySQL along with Node.js. Allows users to create randomly generated day plans.
                                    <br />
                                    <b>Tools</b>- Google Suite, Chrome Developer Tools, Git, GitHub, VSCode, HTML5, CSS3, JavaScript, MySQL, Express.JS, Node.JS, Sequelize, Handlebars.JS, ESLint, Babel, DotENV, Bcrypt, Heroku.
                                    <br />
                                    <b> Role:  Team Lead</b> - Handled the overall project management of the application and also worked on API implementation, ExpressJS routes, and front-end development.
                                </p>
                                <a type="button" className="inline-block px-6 py-2.5 my-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href="https://github.com/Sfzmango/date-night-and-chill" target="_blank" rel="noreferrer">Repo</a>
                            </div>
                        </div>


                        {/* Date Night & Chill card */}
                        <div className="mb-0">
                            <div className=" rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                                style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img alt="date night and chill" src={dnc} className="w-full h-[350px] object-contain" />
                                <a href="https://sfzmango.github.io/date-night-and-chill/" target="_blank" rel="noreferrer">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                </a>
                            </div>

                            <div className="bg-[rgba(255,255,255,0.85)] p-5 pb-0 mb-5">
                                <h5 className="text-lg font-bold mb-3">Date Night & Chill</h5>
                                <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center lg:justify-start">
                                    <img className="w-10 h-10 mx-2" src="https://icon-library.com/images/rest-api-icon/rest-api-icon-3.jpg" alt="api icon" viewBox="0 0 384 512" />
                                    <div>Group Project W/ Samuel Mandel and Mohammad Razvi <br />
                                        <span className="text-gray-400">April 2022</span></div>
                                </div>
                                <p className="text-gray-500">
                                    <b>Third-party API orientated project, utilizes jQuery</b> - Allows users to create randomly generated date plans.
                                    <br />
                                    <b>Tools</b>- Google Suite, Chrome Developer Tools, Git, GitHub, GitHub Pages, VSCode, HTML5, CSS3, JavaScript, MaterilzeCSS, jQuery, OMDB API, Yummly API, CocktailDB API, Deezer API.
                                    <br />
                                    <b> Role: Front End Developer </b> - HTML Development and API implementation.
                                </p>
                                <a type="button" className=" inline-block px-6 py-2.5 my-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href="https://github.com/Sfzmango/date-night-and-chill" target="_blank" rel="noreferrer">Repo</a>
                            </div>
                        </div>

                        {/* Workspace Tracker card */}
                        <div className="mb-0">
                            <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                                style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img alt="workspace tracker" src={workspace} className="w-full h-[350px]" />
                                <a href="https://github.com/Sfzmango/workspace-tracker" target="_blank" rel="noreferrer">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                </a>
                            </div>

                            <div className="bg-[rgba(255,255,255,0.85)] p-5 pb-0 mb-5">
                                <h5 className="text-lg font-bold mb-3">Workspace Tracker</h5>
                                <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center lg:justify-start">
                                    <img className="w-16 h-16 mx-2" src="https://icon-library.com/images/mysql-512.png" alt="MySQL icon" viewBox="0 0 384 512" />
                                    Solo Project
                                </div>
                                <p className="text-gray-500">
                                    <b>MySQL orientated project</b> - Allows users to create a nicely formatted workspace tracker.
                                    <br />
                                    <b>Tools</b>- Git, GitHub, GitHub Pages, VSCode, JavaScript, Node.JS, MySQL.

                                </p>
                                <a type="button" className=" inline-block px-6 py-2.5 my-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href="https://github.com/Sfzmango/workspace-tracker" target="_blank" rel="noreferrer">Repo</a>
                            </div>
                        </div>

                        {/* Maung's Shop card */}
                        <div className="mb-0">
                            <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                                style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img alt="api" src={ecommerce} className="w-full h-[350px]" />
                                <a href="https://github.com/Sfzmango/maungs-shop" target="_blank" rel="noreferrer">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                </a>
                            </div>

                            <div className="bg-[rgba(255,255,255,0.85)] p-5 pb-0 mb-5">
                                <h5 className="text-lg font-bold mb-3">Maung's Shop</h5>
                                <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center lg:justify-start">
                                    <img className="w-10 h-10 mx-2" src="https://icon-library.com/images/rest-api-icon/rest-api-icon-3.jpg" alt="api icon" viewBox="0 0 384 512" />
                                    Solo Project
                                </div>
                                <p className="text-gray-500">
                                    <b>Back-end API orientated project</b> - A back-end API for an pseudo-e-commerce site.
                                    <br />
                                    <b>Tools</b>- Git, GitHub, GitHub Pages, VSCode, JavaScript, Node.JS, MySQL, Express.JS, MySQL2, Sequelize.

                                </p>
                                <a type="button" className=" inline-block px-6 py-2.5 my-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href="https://github.com/Sfzmango/maungs-shop" target="_blank" rel="noreferrer">Repo</a>
                            </div>
                        </div>

                        {/* Passgen card */}
                        <div className="mb-0">
                            <div className="shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover mb-6"
                                style={{ backgroundPosition: "50%" }} data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <img alt="password generator" src={passgen} className="w-full h-[350px]" />
                                <a href="https://sfzmango.github.io/Pass-gen/" target="_blank" rel="noreferrer">
                                    <div
                                        className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                                </a>
                            </div>

                            <div className="bg-[rgba(255,255,255,0.85)] p-5 pb-0 mb-5">
                                <h5 className="text-lg font-bold mb-3">Passgen</h5>
                                <div className="mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center lg:justify-start">
                                    <img className="w-10 h-10 mx-2" src="https://icon-library.com/images/js-icon/js-icon-24.jpg" alt="javascript icon" viewBox="0 0 384 512" />
                                    Solo Project
                                </div>
                                <p className="text-gray-500">
                                    <b>JavaScript orientated project</b> - Allows users to be able to generate a random password or string of characters. The user is able to add or omit uppercase letters, lowercase letters, numbers, and special characters.
                                    <br />
                                    <b>Tools</b>- Chrome Web Developer Tools, Git, GitHub, GitHub Pages, VSCode, HTML5, CSS3, JavaScript.
                                </p>
                                <a type="button" className=" inline-block px-6 py-2.5 my-5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" href="https://github.com/Sfzmango/Pass-gen" target="_blank" rel="noreferrer">Repo</a>
                            </div>
                        </div>
                    </div>

                </section >
            </div >

        </div >

    );
}