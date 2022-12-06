import React, { useState, useEffect } from "react";
import axios from "axios";
import { Offcanvas, Navbar, Nav, Container, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../Components/Footer";
import { Link, useParams } from "react-router-dom";

const ubahWarna = document.getElementsByClassName('editButton');
ubahWarna.onclick = function() {
  document.body.setAttribute('className', 'red');
};

const DetailCar = () => {

  const params = useParams();
  // console.log(params.carId)

  const [car, setCar] = useState();
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const res = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${params.carId}`, { headers:{access_token:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc`}});
      if (res.status === 200) {
        setCar(res.data);
      }
      // setCar(res.data);
      console.log(car)
    };
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [params.carId]);

    return (
        <>
            <header className="header">
          {["xxl"].map((expand) => (
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
                      <Nav.Link href="#Our_container2-service">Our Service</Nav.Link>
                      <Nav.Link href="#Why_Us">Why Us</Nav.Link>
                      <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
                      <Nav.Link href="#FAQ">FAQ</Nav.Link>
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
            <div className="detail-container">
              <div className="detail-car">
                <h6>Tentang Paket</h6>
                <h6>Include</h6>
                <ul className="text-muted">
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                </ul>
                <h6>Exclude</h6>
                <ul className="text-muted">
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>ika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <Accordion defaultActiveKey="0" className="detail-accordion">
                  <Accordion.Item className="detail-accor" eventKey="0">
                    <Accordion.Header>
                      <b>Refund, Reschedule, Overtime</b>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="text-muted">
                          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                          <li>jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                          <li>Tidak termasuk akomodasi penginapan</li>
                          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                          <li>jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                          <li>Tidak termasuk akomodasi penginapan</li>
                          <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                          <li>jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                          <li>Tidak termasuk akomodasi penginapan</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              {car ? (
              <div className="detail-card">
                <div className="d-flex justify-content-center">
                  <img className="image-detail" src={car.image} alt="img"/></div>
                <div className="detail-card-article">
                  <h6>{car.name}</h6>
                  <small className="text-muted"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 10.5004V9.50043C11.4997 9.05729 11.3522 8.62682 11.0807 8.27659C10.8092 7.92636 10.4291 7.67621 10 7.56543" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 10.5V9.5C8.5 8.96957 8.28929 8.46086 7.91421 8.08579C7.53914 7.71071 7.03043 7.5 6.5 7.5H2.5C1.96957 7.5 1.46086 7.71071 1.08579 8.08579C0.710714 8.46086 0.5 8.96957 0.5 9.5V10.5" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 1.56543C8.43021 1.67558 8.81152 1.92578 9.08382 2.27658C9.35612 2.62739 9.50392 3.05884 9.50392 3.50293C9.50392 3.94701 9.35612 4.37847 9.08382 4.72927C8.81152 5.08008 8.43021 5.33028 8 5.44043" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.5 5.5C5.60457 5.5 6.5 4.60457 6.5 3.5C6.5 2.39543 5.60457 1.5 4.5 1.5C3.39543 1.5 2.5 2.39543 2.5 3.5C2.5 4.60457 3.39543 5.5 4.5 5.5Z" stroke="#8A8A8A" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> {car.category}
                  </small>
                  <div className="d-flex justify-content-between">
                    <p>Total</p>
                    <p>Rp. {car.price}</p>
                  </div>
                </div>
              </div>
              ): (<p>Loading...</p>)}
            </div>
          <Footer className="detail-footer" />
        </>
    );
};

export default DetailCar;