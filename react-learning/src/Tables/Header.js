import Button from "./common/button/Button";
import "./Header.scss";
import { Fragment, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ReactComponent as DropDownIcon } from "./images/svgIcons/dropdown.svg";
import { ReactComponent as DropDownIcon1 } from "./images/svgIcons/dropdown-down.svg";
import { ReactComponent as Features } from "./images/svgIcons/Features.svg";
import { ReactComponent as Dollar } from "./images/svgIcons/dollar-sign.svg";
import { ReactComponent as Heart } from "./images/svgIcons/heart.svg";
import { ReactComponent as Help } from "./images/svgIcons/help-circle.svg";
import { ReactComponent as Alert } from "./images/svgIcons/alert-circle.svg";
import { ReactComponent as Phone } from "./images/svgIcons/phone.svg";
import { ReactComponent as Globe } from "./images/svgIcons/globe.svg";
import { ReactComponent as Polygon } from "./images/svgIcons/Polygon.svg";

import Awards from "./images/svgIcons/Awards.svg";
import Volunteering from "./images/svgIcons/Volunteering.svg";
const Header = () => {
  const [showSubLinks, setShowSubLinks] = useState(false);

  const handleFeaturesClick = () => {
    setShowSubLinks(!showSubLinks);
  };
  return (
    <Fragment>
      <header className="header-main">
        <Navbar expand="lg" className="">
          <Container className="d-flex">
            <div className="d-flex">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                className="m-2 custom-toggle"
              />
              <Navbar.Brand href="/" className="m-2 logo-text">
                EFSP
              </Navbar.Brand>
            </div>
            <Navbar.Offcanvas id="basic-navbar-nav">
              <Offcanvas.Body className="me-auto">
                <Nav.Link onClick={handleFeaturesClick}>
                  <Features className="d-lg-none px-1 " />
                  Features
                  {showSubLinks ? (
                    <DropDownIcon1 className="px-1" />
                  ) : (
                    <DropDownIcon className="px-1" />
                  )}
                  {showSubLinks && (
                    <div className="sub-links active">
                      <div className="polygon">
                        <Polygon className="px-1" />
                      </div>
                      <Nav className="sub-menu">
                        <Nav.Link href="#feature1" className="feature">
                          <img
                            src={Awards}
                            className="px-1"
                            alt="Volunteering"
                          />
                          Awards
                        </Nav.Link>
                        <Nav.Link href="#feature1" className="feature">
                          <img
                            src={Volunteering}
                            className="px-1"
                            alt="Volunteering"
                          />
                          Volunteering
                        </Nav.Link>
                      </Nav>
                      <Nav className="sub-menu">
                        <Nav.Link href="#feature1" className="feature">
                          <img
                            src={Volunteering}
                            className="px-1"
                            alt="Volunteering"
                          />
                          Funded Organisation
                        </Nav.Link>
                        <Nav.Link href="#feature1" className="feature">
                          <img
                            src={Volunteering}
                            className="px-1"
                            alt="Volunteering"
                          />
                          Seeking Assistance
                        </Nav.Link>
                      </Nav>
                      <Nav className="sub-menu">
                        <Nav.Link href="#feature1" className="feature">
                          <img
                            src={Volunteering}
                            className="px-1"
                            alt="Volunteering"
                          />
                          Your Community
                        </Nav.Link>
                        <Nav.Link href="#feature1" className="feature">
                          <img
                            src={Volunteering}
                            className="px-1"
                            alt="Volunteering"
                          />
                          Getting Funding
                        </Nav.Link>
                      </Nav>
                    </div>
                  )}
                </Nav.Link>
                <Nav.Link>
                  <Dollar className="d-lg-none px-1" />
                  Funding Information
                </Nav.Link>
                <Nav.Link>
                  <Heart className="d-lg-none px-1" />
                  Humanitarian
                </Nav.Link>
                <Nav.Link>
                  <Help className="d-lg-none px-1" />
                  FAQ
                </Nav.Link>
                <Nav.Link>
                  <Alert className="d-lg-none px-1" />
                  About
                </Nav.Link>
                <Nav.Link>
                  <Phone className="d-lg-none px-1" />
                  Contact
                </Nav.Link>
                <Nav.Link>
                  <Globe className="d-lg-none px-1" />
                  News
                </Nav.Link>
                <Nav.Link className="botton">
                  <div className="d-lg-none d-flex flex-row " >Version I</div>
                </Nav.Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Nav className="d-flex align-items-center flex-row">
              <div className="border"></div>
              <Nav.Link href="/" className="m-2">
                Sign Up
              </Nav.Link>
              <Nav.Link className="m-2">
                <Button title="Log In" />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
};

export default Header;
