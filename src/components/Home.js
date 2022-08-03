import React, { useState } from 'react';
import bg from '../assets/homebg.webm';
import { Button, Typography, Stack } from "@mui/material";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import logo from "../assets/logo.png";
import resume from "../assets/resume.pdf";

export default function Home({ setPage }) {

    return (
        <section className='gifbg'>

            <Typography className="homeLogo" component="div" sx={{ position: "absolute", top: "0", left: "0", padding: 1.5, marginTop: "3%", marginLeft: "3%", zIndex: 105 }}>
                <img src={logo} alt="website logo" width="200px" />
            </Typography>

            <video autoPlay muted loop width="100%" src={bg} type="video/webm"></video>

            <div className="overlay"></div>

            <div className='text'>
                <h2>Maung Htike</h2>
                <p>Full stack web developer (MERN) educated at UC Berkeley Ext. Eager to bring my experience from the military and civilian side to make apps that matter</p>
                <Stack spacing={3} direction={{ xs: 'column', sm: 'row' }}>
                    <Button variant="contained" color="warning" onClick={() => setPage(() => <AboutMe />)}>About Me</Button>
                    <Button variant="contained" color="warning" onClick={() => setPage(() => <Projects />)}>Projects</Button>
                    <Button variant="contained" color="warning" onClick={() => setPage(() => <Contacts />)}>Contact</Button>
                    <Button href={resume} target="_blank" rel="noreferrer" color="warning" variant="contained" >Resume</Button>
                </Stack>
            </div>
        </section>
    );
}

