import * as React from "react";
import { Drawer, Box, Typography, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Collapse, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import logo from "./assets/logo.png";
import resume from "./assets/resume.pdf";
import background from "./assets/background.png";

const bg = {
  backgroundImage: `url(${background})`,
  backgroundSize: "cover",
}

const navStyle = {
  background: "#222222",
};

const footerStyle = {
  color: "black"
};

export default function App() {
  const [page, setPage] = React.useState(() => <AboutMe />);

  const [menuDrawer, setMenuDrawer] = React.useState(false);

  const [contactCollapse, setContactCollapse] = React.useState(true);

  const handleClick = () => {
    setContactCollapse(!contactCollapse);
  };


  return (
    <div> {/*style={bg}*/}

      <div>
        <IconButton
          size="large"
          sx={{ position: "absolute", top: "0", right: "0", padding: 1.5, margin: 2 }}

          color="inherit"
          aria-label="logo"
          onClick={() => { setMenuDrawer(true) }}>
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor='right'
          open={menuDrawer}
          onClose={() => { setMenuDrawer(false) }}>
          <Box p={2} width="250px" textAlign="center" role="presentation" sx={{ height: "100%", color: "rgba(95,55,122,1)" }}>
            <Typography variant="h6" component="div">
              MENU
            </Typography>
            <List
              sx={{ width: '100%', maxWidth: 360 }}
              component="nav">
              <ListItemButton>
                <ListItemText variant="h2" primary="About Me" align="center" onClick={() => setPage(AboutMe)} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Projects" align="center" onClick={() => setPage(Projects)} />
              </ListItemButton>
              <ListItemButton>
                <ListItemText primary="Resume" align="center" onClick={() => setPage(Contacts)} />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </div>

      {/* <header>
        <nav className="uk-width-1-1\@s uk-background-cover" uk-navbar="uk-navbar" style={navStyle}>
          <div className="uk-navbar-left">
            <ul className="uk-margin-small-left uk-navbar-nav">
              <li><img src={logo} alt="website logo" width="100px" /></li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-margin-medium-right">
              <a href="#">
                <span uk-icon="icon: menu; ratio: 1.5" className="uk-text-muted"></span>
              </a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li><a onClick={() => setPage(AboutMe)}>About Me</a></li>
                  <li><a onClick={() => setPage(Projects)}>Projects</a></li>
                  <li><a onClick={() => setPage(Contacts)}>Contact</a></li>
                  <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
              </div>
            </ul>
          </div>
        </nav>
      </header> */}



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