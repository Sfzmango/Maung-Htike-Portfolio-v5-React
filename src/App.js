import React, { useState, useEffect } from "react";
import { Drawer, Box, Typography, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Collapse, } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from "@mui/icons-material/Menu";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
// import Contacts from "./components/Contacts";
import resume from "./assets/resume.pdf";

// const footerStyle = {
//   color: "black"
// };

export default function App() {
  const [page, setPage] = useState();

  const [menuDrawer, setMenuDrawer] = useState(false);

  const [contactCollapse, setContactCollapse] = useState(true);

  const handleClick = () => {
    setContactCollapse(!contactCollapse);
  };

  useEffect(() => {
    if (!page) {
      setPage(() => <Home setPage={setPage} />);
    }
  });

  return (
    <div>

      <div>
        <IconButton
          sx={{ position: "fixed", top: "0", right: "0", padding: 1.5, marginTop: "3%", marginRight: "3%", zIndex: 200, color: "white" }}
          color="inherit"
          aria-label="logo"
          onClick={() => { setMenuDrawer(true) }}>
          <MenuIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
        <Drawer
          anchor='right'
          open={menuDrawer}
          onClose={() => { setMenuDrawer(false) }}>
          <Box p={2} width="250px" textAlign="center" role="presentation" sx={{ backgroundColor: "rgba(20,20,20,1)", height: "100%", color: "rgba(145,55,122,1)" }}>
            <List
              sx={{ width: '100%', maxWidth: 360, color: "white" }}
              component="nav">
              <ListItemButton>
                <ListItemText sx={{ fontSize: "3rem" }} primary="Home" align="center" onClick={() => setPage(() => <Home setPage={setPage} />)} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="About Me" align="center" onClick={() => setPage(() => <AboutMe />)} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Projects" align="center" onClick={() => setPage(() => <Projects />)} />
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
            </List>
          </Box>
        </Drawer>
      </div>

      {page}

      {/* <footer className="uk-container uk-margin-large-top uk-text-center" style={footerStyle}>
        <div className="contactsContents">

          <a href="https://github.com/Sfzmango" target="_blank" rel="noreferrer" style={footerStyle}>
            <span
              uk-icon="icon: github-alt; ratio: 1.5"></span>
          </a>

          <a href="https://twitter.com/Sfzm_" target="_blank" rel="noreferrer" style={footerStyle} className="uk-margin-large-left uk-margin-large-right">
            <span
              uk-icon="icon: twitter; ratio: 1.5"></span>
          </a>

          <a href="https://www.aedin.com/in/maung-htike-482b4b143/" target="_blank" rel="noreferrer" style={footerStyle}>
            <span
              uk-icon="icon: linkedin; ratio: 1.5"></span>
          </a>

        </div>
        <p>- © Maung Htike, 2022 MIT. Made using the UIkit CSS framework -</p>
      </footer> */}
    </div>
  );
}