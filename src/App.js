import React, { useState, useEffect } from "react";
import { Drawer, Box, Typography, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Collapse, } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import resume from "./assets/resume.pdf";
import MediumIcon from "./assets/mediumlogo.png"
import logo from "./assets/logo.png";

// const footerStyle = {
//   color: "black"
// };

export default function App() {
  const [page, setPage] = useState();

  const [menuDrawer, setMenuDrawer] = useState(false);

  const [contactCollapse, setContactCollapse] = useState(true);

  const [homeCheck, setHomeCheck] = useState(true);

  const handleClick = () => {
    setContactCollapse(!contactCollapse);
  };

  useEffect(() => {
    if (!page) {
      setPage(() => <Home setPage={setPage} setMenuDrawer={setMenuDrawer} setHomeCheck={setHomeCheck} />);
    }
  });

  return (
    <>
      <div>

        {homeCheck ? <></> : <nav className="w-full flex flex-wrap items-center justify-between py-4 bg-neutral-900 text-gray-200 shadow-lg hover:text-gray-700 focus:text-gray-700 navbar navbar-expand-lg navbar-light fixed mb-20 z-50">
          <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">

            {/* left navbar */}
            <div className="flex-grow items-center">
              <img src={logo} className="w-20" alt="logo" />
            </div>

            {/* right navbar */}
            <div className="flex items-center relative">
              {/* <IconButton color="inherit" aria-label="logo" onClick={() => { setMenuDrawer(true) }}>
                <MenuIcon sx={{ fontSize: "2rem" }} />
              </IconButton> */}
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                  <button className="text-base text-gray-200 focus:outline-none bg-transparent focus:ring-0 hover:underline" onClick={() => { setPage(() => <Home setPage={setPage} setHomeCheck={setHomeCheck} setMenuDrawer={setMenuDrawer} />); setHomeCheck(true) }}>
                    Home
                  </button>
                </li>
                <li>
                  <button className="text-base text-gray-200 focus:outline-none  bg-transparent focus:ring-0 hover:underline" onClick={() => { setPage(() => <AboutMe />); setHomeCheck(false) }}>
                    About
                  </button>
                </li>
                <li>
                  <button className="text-base text-gray-200 focus:outline-none bg-transparent focus:ring-0 hover:underline" onClick={() => { setPage(() => <Projects />); setHomeCheck(false) }}>
                    Projects
                  </button>
                </li>
                <li>
                  <button className="text-base text-gray-200 focus:outline-none  bg-transparent focus:ring-0 hover:underline" onClick={() => { setPage(() => <Contacts />); setHomeCheck(false) }}>
                    Contact
                  </button>
                </li>
                <li>
                  <a href={resume} target="_blank" rel="noreferrer" className="text-base text-gray-200 focus:outline-none bg-transparent focus:ring-0 hover:underline">
                    Resume
                  </a>
                </li>
              </ul>
              <ul className="w-8/12 md:hidden items-center justify-center space-x-8">
                <li>
                  <button className="text-base text-gray-200 focus:outline-none  bg-transparent focus:ring-0 hover:underline" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={() => { setMenuDrawer(true) }} style={{ textShadow: "0px 0px 3px black" }}>MENU
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>}



        <Drawer
          anchor='right'
          open={menuDrawer}
          onClose={() => { setMenuDrawer(false) }}>
          <Box p={2} width="250px" textAlign="center" role="presentation" sx={{ backgroundColor: "rgba(20,20,20,1)", height: "100%", color: "rgba(145,55,122,1)" }}>
            <List
              sx={{ width: '100%', maxWidth: 360, color: "white" }}
              component="nav">
              <ListItemButton>
                <ListItemText sx={{ fontSize: "3rem" }} primary="Home" align="center" onClick={() => { setPage(() => <Home setPage={setPage} setHomeCheck={setHomeCheck} setMenuDrawer={setMenuDrawer} />); setHomeCheck(true) }} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="About Me" align="center" onClick={() => { setPage(() => <AboutMe />); setHomeCheck(false) }} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Projects" align="center" onClick={() => { setPage(() => <Projects />); setHomeCheck(false) }} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Contact" align="center" onClick={() => { setPage(() => <Contacts />); setHomeCheck(false) }} />
              </ListItemButton>
              <ListItemButton>
                <a style={{ textDecoration: "none", width: "100%", textAlign: "center", color: "white" }} href={resume} target="_blank" rel="noreferrer"><ListItemText primary="Resume" /></a>
              </ListItemButton>
              <ListItemButton>
                <a style={{ textDecoration: "none", width: "100%", textAlign: "center", color: "white" }} href="https://www.linkedin.com/in/maung-htike-482b4b143/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
              </ListItemButton>
              <ListItemButton>
                <a style={{ textDecoration: "none", width: "100%", textAlign: "center", color: "white" }} href="https://github.com/Sfzmango" target="_blank" rel="noreferrer"><GitHubIcon /></a>
              </ListItemButton>
              <ListItemButton>
                <a style={{ textDecoration: "none", width: "100%", textAlign: "center", color: "white" }} href="mailto:maunghtikebusiness@gmail.com" target="_blank" rel="noreferrer"><EmailIcon /></a>
              </ListItemButton>
              <ListItemButton>
                <a style={{ textDecoration: "none", width: "100%", color: "white" }} href="https://medium.com/@maunghtike" target="_blank" rel="noreferrer"><img src={MediumIcon} alt="medium blog" style={{ width: "15%", color: "white", marginLeft: "42%" }} /></a>
              </ListItemButton>
              <ListItemButton>
                <a style={{ textDecoration: "none", width: "100%", color: "white" }} href="https://www.youtube.com/channel/UCiDOm1tx0nbYuCVQyITv5LQ" target="_blank" rel="noreferrer"><img src="https://pnggrid.com/wp-content/uploads/2021/07/White-YouTube-Logo-Transparent.png" alt="medium blog" style={{ width: "15%", color: "white", marginLeft: "42%" }} /></a>
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </div>

      <div className="">
        {page}
      </div>
    </>
  );
}