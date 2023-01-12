import React from "react"
import { Offcanvas, Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import carImg from "../assets/img_car2.png"

const Header = () => {
  return (
    <header>
      {["xl"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar mb-3">
          <Container fluid>
            <div className="logo">
              <svg
                width="100"
                height="34"
                viewBox="0 0 100 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100" height="34" fill="#0D28A6" />
              </svg>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              className="navig"
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="side-bar justify-content-end flex-grow-1 pe-3 color-black">
                  <Nav.Link href="#Our_container2-service">Our Service</Nav.Link>
                  <Nav.Link href="#Why_Us">Why Us</Nav.Link>
                  <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                  <Nav.Link href="#FAQ">FAQ</Nav.Link>
                  <button className="button1 register-btn"><Link to="/signup"><strong>Register</strong></Link></button>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <div className="container1-header">
        <div className="article1">
          <h1>
            <strong>Sewa & Rental Mobil Terbaik di kawasan Indramayu</strong>
          </h1>
          <br />
          <p>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          <button className="button1"><Link to="/search">
            <strong>Mulai Sewa Mobil</strong>
            </Link>
          </button>
        </div>
        <div className="imgcar text-end">
          <img src={carImg} alt="gambar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
