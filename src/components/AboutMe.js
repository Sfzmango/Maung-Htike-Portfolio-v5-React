import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import bg from "../assets/aboutmebg.webm";
import sep from '../assets/sep.JPG';
import mil from '../assets/mil.JPG';
import tech from '../assets/tech.PNG';
import intern from '../assets/digitalmedia.JPG';

export default function AboutMe() {

    const theme = useTheme();

    return (
        <section className="gifbg2">
            <div>
                {/* <video autoPlay muted loop width="100%" src={bg} type="video/webm"></video>

            <div className="overlay"></div> */}

                {/* about me card */}
                <article
                    className="text">
                    <h3 className="uk-text-center">About Me</h3>
                    <header>
                        <div className="uk-grid-small uk-flex-center uk-text-center" uk-grid="uk-grid">

                            <div className="uk-grid-small">

                                <p style={{ textTransform: "none" }} className="uk-text-center">Hi, I’m Maung. I am currently a student at UC Berkeley Extension taking a Full Stack Development course which goes over the basics of the MERN stack. At the same time, I am working as a solar consultant and as a Lance Corporal in the Marine Corps.</p>
                                <p className="uk-comment-meta uk-margin-remove-top">Recent graduate from UC Berkeley's Full Stack Development Course
                                </p>
                            </div>
                        </div>
                    </header>
                    <h4>
                        Here are some of the thing's I have
                        worked on in the past:</h4>
                </article>


                {/* cards */}

                <div className="expCards">

                    {/* solar consultant card */}
                    <Card sx={{ display: 'flex', width: "80%", height: "20%", }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Solar Consultant
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Solar Energy Partners - North Bay, CA <br />
                                    October 2020 to Present
                                </Typography>
                                <Typography component="p" sx={{ fontSize: "1em" }}>
                                    I am currently working as a solar consultant where my job responsibilities are
                                    to find possible qualifying households that might qualify for solar and hopefully direct them into
                                    going green while also saving them money on their electricity bill. I work with the customer to try
                                    to fulfill their needs and goals for solar. Not only do I have to generate leads, but I also have to
                                    prepare a design proposal with our upstream and downstream partners for the customer and negotiate
                                    with them to close a deal that they are happy with. After an agreement has been signed off, I follow
                                    up with the customers and our partners occasionally for status updates and, if possible, to expedite
                                    them up the schedule until the solar system has been given “Permission To Operate.”
                                </Typography>
                            </CardContent>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: "40%" }}
                            image={sep}
                            alt="solar consultant"
                        />
                    </Card>


                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin-large-bottom uk-box-shadow-hover-xlarge"
                        uk-grid="uk-grid">

                        <div className="uk-card-media-left uk-cover-container">
                            <img width="150px" src={sep} alt="solar consultant" uk-cover="uk-cover" />
                            <canvas width="600" height="400"></canvas>
                        </div>

                        <div>
                            <div className="uk-card-body">
                                <h1></h1>
                                <h3 className="uk-card-title">Solar Energy Partners - North Bay, CA <br />
                                    October 2020 to Present
                                </h3>
                                <p className="uk-text-muted">
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* military card */}
                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin-large-bottom uk-border-rounded uk-box-shadow-hover-xlarge"
                        uk-grid="uk-grid">
                        <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img width="150px" src={mil} alt="military" uk-cover="uk-cover" />
                            <canvas width="600" height="400"></canvas>
                        </div>
                        <div>
                            <div className="uk-card-body">
                                <h1>2171-Electro-Optical Ordinance Technician</h1>
                                <h3 className="uk-card-title">United States Marine Corps - San Jose, CA <br />
                                    June 2018 to Present
                                </h3>
                                <p className="uk-text-muted">Currently I'm a reservist LCPL in the Marine Corps as an
                                    2171-Electro-Optical Ordnance
                                    Repairer. In better terms I worked on anything optical related gear. This range from night
                                    vision cameras, thermals, and targeting systems on a LAV, JAVELIN, SABER, Howitzer, as well
                                    as many more military equipment. Overall my primary duties was to inspect, take inventory,
                                    to maintain,and if needed, repair the specified gear utilizing atechnical manual.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* solar test tech card  */}
                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin-large-bottom uk-border-rounded uk-box-shadow-hover-xlarge"
                        uk-grid="uk-grid">
                        <div className="uk-card-media-left uk-cover-container">
                            <img width="150px" src={tech} alt="tech" uk-cover="uk-cover" />
                            <canvas width="600" height="400"></canvas>
                        </div>
                        <div>
                            <div className="uk-card-body">
                                <h1>Solar Test Technician</h1>
                                <h3 className="uk-card-title">PVEL - Berkeley, CA
                                    <br />
                                    June 2019 to July 2020
                                </h3>
                                <p className="uk-text-muted">Before the COVID-19 pandemic I worked as a Solar Lead Test
                                    Technician
                                    (night shift) at PV
                                    Evolution Labs. In simple terms, my duties involved leading a small group of test
                                    technicians at night to put solar panels through various different tests which measured
                                    their efficiency in a varity of aspects. For example, in one of the tests, we used a
                                    dremel
                                    to expose the backside of a solar panel and solder certain joints together to isolate
                                    individual cells. Occasionally I worked with upstream and downstream customers to help
                                    facilitate the logistics side of the testing process. My company would send me on work
                                    related trips to places such as Texas to inspect and test the solar plant’s solar
                                    panels.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* digital media intern card */}
                    <div className="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-box-shadow-hover-xlarge"
                        uk-grid="uk-grid">
                        <div className="uk-flex-last@s uk-card-media-right uk-cover-container">
                            <img width="150px" src={intern} alt="intern" uk-cover="uk-cover" />
                            <canvas width="600" height="400"></canvas>
                        </div>
                        <div>
                            <div className="uk-card-body">
                                <h1>Digital Media Intern</h1>
                                <h3 className="uk-card-title">Board of Directors - Redwood City, CA <br />
                                    September 2017 to June 2018
                                </h3>
                                <p className="uk-text-muted">I interned for David J. Canepa, the District 5 Supervisor of San Mateo
                                    County. I handled things in the office occasionally, but I mostly handled media related jobs
                                    such as taking pictures or videos of events and also editing them using software such as
                                    Adobe Premiere.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}