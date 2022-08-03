import React, { useState } from 'react';
import bg from '../assets/homebg.webm';
import { Button, Typography, Stack } from "@mui/material";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

export default function Home({ setPage }) {



    return (
        <section className='homepage'>

            <Typography className="homeLogo" variant="h4" component="div" sx={{ position: "absolute", top: "0", left: "0", padding: 1.5, marginTop: "3%", marginLeft: "3%", zIndex: 105, color: "red" }}>
                LOGO
            </Typography>

            <video autoPlay muted loop width="100%" src={bg} type="video/webm"></video>

            <div className="overlay"></div>

            <div className='text'>
                <h2>Maung Htike</h2>
                <p>Full stack web developer (MERN) educated at UC Berkeley Ext. Eager to bring my experience from the military and civilian side to make web applications that matter</p>
                <Stack spacing={2} direction="row">
                    <Button variant="outlined" onClick={() => setPage(() => <AboutMe />)}>About Me</Button>
                    <Button variant="outlined" onClick={() => setPage(() => <Projects />)}>Projects</Button>
                    <Button variant="outlined" onClick={() => setPage(() => <Contacts />)}>Contact</Button>
                    <Button variant="outlined" >Resume</Button>
                </Stack>
            </div>
        </section>
    );
}

