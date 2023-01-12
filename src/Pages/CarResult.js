import React from "react";
import { Offcanvas, Navbar, Nav, Container, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";

const CarResult = () => {

  const location = useLocation();
  console.log({location})

  const {cars, payload} = location.state

  return (
    <>
        <header className="header">
          {["xl"].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3">
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
                      <Nav.Link href="/#Our_container2-service">Our Service</Nav.Link>
                      <Nav.Link href="/#Why_Us">Why Us</Nav.Link>
                      <Nav.Link href="/#Testimonial">Testimonial</Nav.Link>
                      <Nav.Link href="/#FAQ">FAQ</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))};
      </header>
      <div className="form justifty-content-center form2">
          <p>Pencarianmu</p>
        <form className="input">
          <div className="input-child">
            <Form.Label>Nama Mobil</Form.Label>
            <Form.Control
              placeholder="Ketik nama/tipe mobil"
              aria-describedby="passwordHelpBlock"
            />
          </div>
          <div className="input-child">
            <Form.Label>Kategori</Form.Label>
            <Form.Select aria-label="Default select example">
              <option disabled selected>
                Masukkan Kapasitas Mobil
              </option>
              <option value="small">2-4 orang</option>
              <option value="medium">4-6 orang</option>
              <option value="large">6-8 orang</option>
            </Form.Select>
          </div>
          <div className="input-child">
            <Form.Label>Harga</Form.Label>
            <Form.Select aria-label="Default select example">
              <option disabled selected>
                Masukan Harga Sewa per Hari
              </option>
              <option value="<Rp.400.000">&lt;Rp.400.000</option>
              <option value="Rp.400.000-Rp.600.000">Rp.400.000-Rp.600.000</option>
              <option value=">Rp.400.000">&gt;Rp.400.000</option>
            </Form.Select>
          </div>
          <div className="input-child">
            <Form.Label>Status</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="false">Disewa</option>
              <option value="true">Disewakan</option>
            </Form.Select>
          </div>
          <button className="editButton">
            <Link to='/search'>
            <b>Edit</b>
            </Link>
            </button>
        </form>
      </div>
      <div className=" card-group mx-auto d-flex justify-content-between">
      {cars.map((car) =>  (
          <div className="card-hasil" key={car.id}>
          <div className="content-hasil">
            <div className="img-hasil">
              <img alt="carResult" src={car.image} className="img-fluid"></img>
            </div>
            <div className="article-hasil">
              <p><small>{car.name}</small></p>
              <p className="car-price">Rp. {car.price} / hari</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button className="button2 d-flex align-items-end"
            >
              <Link to={`/detail/${car.id}`}>
                <strong>Pilih Mobil</strong>
              </Link>
            </button>
            </div>
          </div>
        </div>
      ))}
      </div>
      <Footer />
    </>
  );
};

export default CarResult;
