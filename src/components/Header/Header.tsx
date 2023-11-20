import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEvernote,
  faGithub,
  faLinkedin,
  faMailchimp,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const scrollToSection = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">Nikhil Bachhav</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="mailto:youremail@example.com" target="_blank">
              <FontAwesomeIcon
                icon={faMailchimp}
                size="1x"
                style={{ margin: "0px 10px 0px 10px" }}
              />
              {/* Email Icon */}
            </Nav.Link>
            <Nav.Link href="https://github.com/" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                size="1x"
                style={{ margin: "0px 10px 0px 10px" }}
              />
              {/* Git/ GitHub Icon */}
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="1x"
                style={{ margin: "0px 10px 0px 10px" }}
              />
              {/* LinkedIn Icon */}
            </Nav.Link>
            <Nav.Link href="https://medium.com" target="_blank">
              <FontAwesomeIcon
                icon={faMedium}
                size="1x"
                style={{ margin: "0px 10px 0px 10px" }}
              />
              {/* Medium Icon */}
            </Nav.Link>
            <Nav.Link href="https://stackoverflow.com/" target="_blank">
              <FontAwesomeIcon
                icon={faStackOverflow}
                size="1x"
                style={{ margin: "0px 10px 0px 10px" }}
              />
              {/* StackOverflow Icon */}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link onClick={() => scrollToSection("projects")}>
            Projects
          </Nav.Link>
          <Nav.Link onClick={() => scrollToSection("contact")}>
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
