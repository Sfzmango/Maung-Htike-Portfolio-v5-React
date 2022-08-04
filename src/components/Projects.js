import React from 'react';
import { Box, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import vacationawaits from "../assets/vacationawaits.png";
import dnc from "../assets/dnc-bg.jpg";
import workspace from "../assets/workspace.png";
import ecommerce from "../assets/back-end.png";
import passgen from "../assets/pass-gen.gif";
import memorylane from "../assets/memorylane.gif";
import bg from "../assets/projectsbg.webm";

export default function AboutMe() {

    return (
        <div className="gifbg">
            <video autoPlay muted loop width="100%" src={bg} type="video/webm"></video>

            <div className="overlay2"></div>

            <div style={{ zIndex: "110", margin: "10px" }}>

                <div className='text' style={{ background: "none", border: "none" }}>
                    <h3>Featured Projects:</h3>
                </div>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={4}>
                        <Card >
                            <CardMedia
                                component="img"
                                alt="memory lane"
                                height="500px"
                                image={memorylane}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Memory Lane
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Group Project W/ Joey Bennett<br />
                                    June 2022.
                                </Typography>
                                <Typography component="p" sx={{ fontSize: "1.2em" }}>
                                    <b>MERN Stack project</b> - Allows users to create and share timelines they create.
                                    <br />
                                    <b>Tools</b> - Google Suite, Chrome Developer Tools, Canva, Figma, Git, GitHub, VSCode, HTML5, CSS3, JavaScript, MongoDB, Express.JS, React, Node.JS, TailwindCSS, React Router, JWT, GraphQL, ApolloClient, Heroku.
                                    <br />
                                    <b> Role: Front End Developer</b> - Worked on the front end of the webpage and also worked with the back-end developer to have code working between the two ends.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large" style={{ textDecoration: "none" }} href="https://github.com/coderbennett/memory-lane" target="_blank" rel="noreferrer">Repo</Button>
                                <Button size="large" style={{ textDecoration: "none" }} href="https://the-memory-lane.herokuapp.com/" target="_blank" rel="noreferrer">Link</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item sm={12} md={4}>
                        <Card >
                            <CardMedia
                                component="img"
                                alt="vacation awaits"
                                height="500px"
                                image={vacationawaits}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Vacation Awaits
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Group Project W/ Keerti Chaudhary and Callan Hunter<br />
                                    May 2022
                                </Typography>
                                <Typography component="p" sx={{ fontSize: "1.2em" }}>
                                    <b> Database orientated project </b>- Uses MySQL along with Node.js. Allows users to create randomly generated day plans.
                                    <br />
                                    <b>Tools</b>- Google Suite, Chrome Developer Tools, Git, GitHub, VSCode, HTML5, CSS3, JavaScript, MySQL, Express.JS, Node.JS, Sequelize, Handlebars.JS, ESLint, Babel, DotENV, Bcrypt, Heroku.
                                    <br />
                                    <b> Role:  Team Lead</b> - Handled the overall project management of the application and also worked on API implementation, ExpressJS routes, and front-end development.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large" style={{ textDecoration: "none" }} href="https://github.com/Sfzmango/vacation-awaits" target="_blank" rel="noreferrer">Repo</Button>
                                <Button size="large" style={{ textDecoration: "none" }} href="https://vacation-awaits.herokuapp.com/" target="_blank" rel="noreferrer">Link</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item sm={12} md={4}>
                        <Card >
                            <CardMedia
                                component="img"
                                alt="date night and chill"
                                height="500px"
                                image={dnc}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Date Night & Chill
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Group Project W/ Samuel Mandel and Mohammad Razvi <br />
                                    April 2022
                                </Typography>
                                <Typography component="p" sx={{ fontSize: "1.2em" }}>
                                    <b>Third-party API orientated project, utilizes jQuery</b> - Allows users to create randomly generated date plans.
                                    <br />
                                    <b>Tools</b>- Google Suite, Chrome Developer Tools, Git, GitHub, GitHub Pages, VSCode, HTML5, CSS3, JavaScript, MaterilzeCSS, jQuery, OMDB API, Yummly API, CocktailDB API, Deezer API.
                                    <br />
                                    <b> Role: Front End Developer </b> - HTML Development and API implementation.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large" style={{ textDecoration: "none" }} href="https://github.com/Sfzmango/date-night-and-chill" target="_blank" rel="noreferrer">Repo</Button>
                                <Button size="large" style={{ textDecoration: "none" }} href="https://sfzmango.github.io/date-night-and-chill/" target="_blank" rel="noreferrer">Link</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* workspace tracker card */}
                    <Grid item sm={12} md={4}>
                        <Card >
                            <CardMedia
                                component="img"
                                alt="workspace tracker"
                                height="500px"
                                image={workspace}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Workspace Tracker
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Solo Project  <br />
                                </Typography>
                                <Typography component="p" sx={{ fontSize: "1.2em" }}>
                                    <b>MySQL orientated project</b> - Allows users to create a nicely formatted workspace tracker.
                                    <br />
                                    <b>Tools</b>- Git, GitHub, GitHub Pages, VSCode, JavaScript, Node.JS, MySQL.
                                    <br />
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large" style={{ textDecoration: "none" }} href="https://github.com/Sfzmango/workspace-tracker" target="_blank" rel="noreferrer">Repo</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    {/* maung's shop card */}
                    <Grid item sm={12} md={4}>
                        <Card >
                            <CardMedia
                                component="img"
                                alt="workspace tracker"
                                height="500px"
                                image={ecommerce}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Maung's Shop
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Solo Project  <br />
                                </Typography>
                                <Typography component="p" sx={{ fontSize: "1.2em" }}>
                                    <b>Back-end API orientated project</b> - A back-end API for an pseudo-e-commerce site.
                                    <br />
                                    <b>Tools</b>- Git, GitHub, GitHub Pages, VSCode, JavaScript, Node.JS, MySQL, Express.JS, MySQL2, Sequelize.
                                    <br />
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large" style={{ textDecoration: "none" }} href="https://github.com/Sfzmango/maungs-shop" target="_blank" rel="noreferrer">Repo</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item sm={12} md={4}>
                        <Card >
                            <CardMedia
                                component="img"
                                alt="workspace tracker"
                                height="500px"
                                image={passgen}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Pass-Gen
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Solo Project  <br />
                                </Typography>
                                <Typography component="p" sx={{ fontSize: "1.2em" }}>
                                    <b>JavaScript orientated project</b> - Allows users to be able to generate a random password or string of characters. The user is able to add or omit uppercase letters, lowercase letters, numbers, and special characters.
                                    <br />
                                    <b>Tools</b>- Chrome Web Developer Tools, Git, GitHub, GitHub Pages, VSCode, HTML5, CSS3, JavaScript.
                                    <br />
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large" style={{ textDecoration: "none" }} href="https://github.com/Sfzmango/Pass-gen" target="_blank" rel="noreferrer">Repo</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>

    );
}