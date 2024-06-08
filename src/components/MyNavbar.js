import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/envelope-regular-light.svg";

const MyNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <BootstrapNavbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/Home"
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Skills"
                className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateLink("skills")}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/Projects"
                className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateLink("projects")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/ContactMe"
                className={activeLink === "contactme" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateLink("contactme")}
              >
                Contact Me
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ajinkya-sawale/">
                  <img src={navIcon1} alt="linkedln-img"></img>
                </a>
                <a href="https://github.com/AjinkyaSawale">
                  <img src={navIcon2} alt="github-img"></img>
                </a>
                <a href="mailto:ajinkyasawale.work@gmail.com">
                  <img src={navIcon3} alt="email-img"></img>
                </a>
              </div>
              <button
                className="vvd"
                onClick={() => {
                  console.log("connect");
                }}
              >
                <span>Let's Connect</span>
              </button>
            </span>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </>
  );
};

export { MyNavbar };


