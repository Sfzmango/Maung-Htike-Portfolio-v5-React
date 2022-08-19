import React from 'react';
import emailjs from "emailjs-com";
import githubLogo from "../assets/githublogo.png"
import MediumIcon from "../assets/mediumlogo.png"

export default function Contacts() {

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.message.value);
        console.log(e.target.userEmail.value);
        emailjs.send("service_so9evuv", "template_7n5681d", {
            name: e.target.name.value,
            message: e.target.message.value,
            emailAddress: e.target.userEmail.value,
        }, "d0pKnOXbHA4AdAf2h")
            .then(res => { console.log(res); alert("Form successful!") })
            .catch(err => console.error(err))
    }

    return (
        <>
            <div className="container py-24 px-6 mx-auto">

                <section className="mb-32 text-gray-800">
                    <div className="flex justify-center">
                        <div className="text-center lg:max-w-3xl md:max-w-xl">
                            <h2 className="text-3xl font-bold mb-12 px-6">Contact me</h2>
                        </div>
                    </div>

                    <div className="flex flex-wrap">
                        <div className="grow-0 shrink-0 basis-auto mb-12 lg:mb-0 w-full lg:w-5/12 px-3 lg:px-6">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-6">
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-orange-700 bg-white bg-clip-padding border border-solid border-orange-300 rounded transition ease-in-out m-0 focus:text-orange-700 focus:bg-white focus:border-orange-500 focus:outline-none" name="name"
                                        placeholder="Name" />
                                </div>
                                <div className="form-group mb-6">
                                    <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-orange-700 bg-white bg-clip-padding border border-solid border-orange-300 rounded transition ease-in-out m-0 focus:text-orange-700 focus:bg-white focus:border-orange-500 focus:outline-none" name="userEmail"
                                        placeholder="Email address" />
                                </div>
                                <div className="form-group mb-6">
                                    <textarea className=" form-control block w-full px-3 py-1.5 text-base font-normal text-orange-700 bg-white bg-clip-padding border border-solid border-orange-300 rounded transition ease-in-out m-0 focus:text-orange-700 focus:bg-white focus:border-orange-500 focus:outline-none" name="message" rows="3" placeholder="Message"></textarea>
                                </div>
                                <button type="submit" className="w-full px-6 py-2.5 bg-orange-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg transition duration-150 ease-in-out">Send</button>
                            </form>
                        </div>
                        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
                            <div className="flex flex-wrap">
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <div className="shrink-0">
                                            <div className="p-4 bg-orange-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                            </div>
                                        </div>
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1">My Contact</p>
                                            <p className="text-gray-500" href="mailto:maunghtikebusiness@gmail.com">maunghtikebusiness@gmail.com</p>
                                            <p className="text-gray-500" href="tel:+1 415-373-1317">+1 415-373-1317</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                    <div className="flex items-start">
                                        <a href="https://www.linkedin.com/in/maung-htike-482b4b143/" target="_blank" rel="noreferrer">
                                            <div className="shrink-0">
                                                <div className="p-1 bg-orange-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <img className="w-12 mx-2" src="https://icon-library.com/images/linkedin-icon-no-background/linkedin-icon-no-background-11.jpg" alt="react icon" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1">LinkedIn</p>
                                            <a href="https://www.linkedin.com/in/maung-htike-482b4b143/" target="_blank" rel="noreferrer"><p className="text-gray-500">https://www.linkedin.com/in/maung-htike-482b4b143/</p></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                    <div className="flex align-start">
                                        <a href="https://github.com/Sfzmango" target="_blank" rel="noreferrer">
                                            <div className="shrink-0">
                                                <div className="p-1 bg-orange-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <img className="w-10 mx-2" src={githubLogo} alt="react icon" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1">GitHub</p>
                                            <a href="https://github.com/Sfzmango" target="_blank" rel="noreferrer"><p className="text-gray-500">https://github.com/Sfzmango</p></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6">
                                    <div className="flex align-start">
                                        <a href="https://medium.com/@maunghtike" target="_blank" rel="noreferrer">
                                            <div className="shrink-0">
                                                <div className="p-1 bg-orange-500 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                                                    <img className="w-8 mx-2" src={MediumIcon} alt="react icon" />
                                                </div>
                                            </div>
                                        </a>
                                        <div className="grow ml-6">
                                            <p className="font-bold mb-1">Medium</p>
                                            <a href="https://medium.com/@maunghtike" target="_blank" rel="noreferrer"><p className="text-gray-500">https://medium.com/@maunghtike</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}