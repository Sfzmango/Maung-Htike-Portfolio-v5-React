import React, { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bg from "../assets/aboutmebg.webm";
import sep from '../assets/sep.JPG';
import mil from '../assets/mil.JPG';
import tech from '../assets/tech.PNG';
import intern from '../assets/digitalmedia.JPG';

export default function AboutMe() {

    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // useEffect(() => {
    //     function handleResize() {

    //         setWindowWidth({
    //             width: window.innerWidth,
    //             height: window.innerHeight,
    //         });
    //     }
    // });

    // window.addEventListener("resize", handleResize);

    // handleResize();

    // if (window.innerWidth > "1000") {
    return (
        <section className="gifbg">
            <video autoPlay playsInline muted loop width="100%" src={bg} type="video/webm"></video>

            <div className="overlay2"></div>
            <div>

                {/* about me card */}
                <div className="text">
                    <h3>About Me</h3>
                    <p>Hi, I’m Maung, and I am a junior Full Stack Developer (MERN). I am a hard-working individual with a passion for going out of my comfort zone and learning new things. I have recently received a certificate in Full Stack Development and my Associate in Science in Business Administration. I am currently open for any opportunites that might be available for someone at my level.</p>
                    <p style={{ textTransform: "uppercase" }} >Recent graduate from UC Berkeley's Full Stack Development Course
                    </p>
                </div>

                {/* cards */}
                <Grid container>
                    <div className="text" style={{ background: "none", border: "none" }}>
                        <h4>
                            Here are some of the thing's I have
                            worked on in the past:</h4>
                    </div>
                    <div style={{ position: "relative" }}>
                        {/* <Carousel width="100%" interval="10000" autoPlay="true" infiniteLoop="true" swipeable="true" showStatus="false" className="expCards"> */}

                        <Grid container>
                            {/* solar consultant card */}
                            <Grid item sm={12} md={6}>
                                <Card align="center" sx={{ margin: "5%" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={sep}
                                            alt="solar consultant"
                                        />
                                        <CardContent>
                                            <div style={{ margin: "2% 0 4% 0" }}>
                                                <Typography component="div" variant="h5">
                                                    Solar Consultant
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Solar Energy Partners - North Bay, CA <br />
                                                    October 2020 - Present
                                                </Typography>
                                            </div>
                                            <Typography component="p" sx={{ fontSize: "1.2em" }}>
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
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            {/* military card */}
                            <Grid item sm={12} md={6}>
                                <Card align="center" sx={{ margin: "5%" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={mil}
                                            alt="military"
                                        />
                                        <CardContent>
                                            <div style={{ margin: "2% 0 4% 0" }}>
                                                <Typography component="div" variant="h5">
                                                    2171-Electro-Optical Ordinance Technician
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    United States Marine Corps - San Jose, CA <br />
                                                    June 2018 - Present
                                                </Typography>
                                            </div>
                                            <Typography component="p" sx={{ fontSize: "1.2em", marginTop: "5%" }}>
                                                Currently I'm a reservist LCPL in the Marine Corps as an
                                                2171-Electro-Optical Ordnance
                                                Repairer. In better terms I worked on anything optical related gear. This range from night
                                                vision cameras, thermals, and targeting systems on a LAV, JAVELIN, SABER, Howitzer, as well
                                                as many more military equipment. Overall my primary duties was to inspect, take inventory,
                                                to maintain,and if needed, repair the specified gear utilizing atechnical manual.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            {/* solar test tech card  */}
                            <Grid item sm={12} md={6}>
                                <Card align="center" sx={{ margin: "5%" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={tech}
                                            alt="solar test tech"
                                        />
                                        <CardContent>
                                            <div style={{ margin: "2% 0 4% 0" }}>
                                                <Typography component="div" variant="h5">
                                                    Solar Test Technician
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    PVEL - Berkeley, CA
                                                    <br />
                                                    June 2019 - July 2020
                                                </Typography>
                                            </div>
                                            <Typography component="p" sx={{ fontSize: "1.2em", marginTop: "5%" }}>
                                                Before the COVID-19 pandemic I worked as a Solar Lead Test
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
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            {/* digital media intern card */}
                            <Grid item sm={12} md={6}>
                                <Card align="center" sx={{ margin: "5%" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="100%"
                                            image={intern}
                                            alt="intern"
                                        />
                                        <CardContent>
                                            <div style={{ margin: "2% 0 4% 0" }}>
                                                <Typography component="div" variant="h5">
                                                    Digital Media Intern
                                                </Typography>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Board of Directors - Redwood City, CA <br />
                                                    September 2017 to June 2018
                                                </Typography>
                                            </div>
                                            <Typography component="p" sx={{ fontSize: "1.2em", marginTop: "5%" }}>
                                                I interned for David J. Canepa, the District 5 Supervisor of San Mateo
                                                County. I handled things in the office occasionally, but I mostly handled media related jobs
                                                such as taking pictures or videos of events and also editing them using software such as
                                                Adobe Premiere. I have received a letter of recommendation from David J. Canepa for my work.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                        {/* </Carousel> */}
                    </div>
                </Grid>
            </div>
        </section >
    );
}
//     else {
//         return (<>
//             SORRY WIP
//         </>)
//     }
// }