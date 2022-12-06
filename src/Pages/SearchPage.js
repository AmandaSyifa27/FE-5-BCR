// import axios from "axios";
import axios from "axios";
import React, { useState } from "react";
import {
  Offcanvas,
  Navbar,
  Nav,
  Container,
  Form,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import APICar from "../apis/APICar";
import Footer from "../Components/Footer";


const SearchPage = () => {

  const navigate = useNavigate();


  const [cars, setCars] = useState([]); 

  const handelSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const category = formData.get("category");
    const isRented = formData.get("isRented") === "true" ? true : false;
    const price = formData.get("price");

    let minPrice = 0;
    let maxPrice = 0;

    if (price === "cheap") {
      minPrice = 0; 
      maxPrice = 400000;
    }
    if (price === "medium") {
      minPrice = 400000;
      maxPrice = 600000;
    }
    if (price === "expensive") {
      minPrice = 600000;
      maxPrice = 10000000;
    }
    
    const params = {
      name,
      category,
      isRented,
      minPrice,
      maxPrice,
    };

    const result = await axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car", {params, headers:{access_token:`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc`}});
    if (result.status === 200) {
      console.log(result.data)
      setCars(result.data.cars)
      navigate("/result", {
        state: {
          cars: result.data.cars,
          params
        }
      })
    }

  }

  // useEffect(() => {
  //   fetch('https://bootcamp-rent-cars.herokuapp.com/customer/car')
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(data => {
  //     setCars(data);
  //     console.log(data)
  //   })
  // }, [])

  return (
    <div>
      <header>
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
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
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
                    <Nav.Link href="FAQ">FAQ</Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}

        <div className="container1-header" id="yoo">
          <div className="article1">
            <h1>
              <strong>Sewa & Rental Mobil Terbaik di kawasan Indramayu</strong>
            </h1>
            <br />
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div className="imgcar">
            <img src="img_car2.png" alt="gambar" />
          </div>
        </div>
      </header>
      <div className="form">
        <form onSubmit={handelSearch} className="input">
          <div className="input-child">
            <Form.Label>Nama Mobil</Form.Label>
            <Form.Control name="name"
              placeholder="Ketik nama/tipe mobil"
              aria-describedby="passwordHelpBlock"
              // onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="input-child">
            <Form.Label>Kategori</Form.Label>
            <Form.Select name="category" aria-label="Default select example">
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
            <Form.Select name="price" aria-label="Default select example">
              <option disabled selected option>
                Masukan Harga Sewa per Hari
              </option>
              <option value="cheap">&lt;Rp.400.000</option>
              <option value="medium">Rp.400.000-Rp.600.000</option>
              <option value="expensive">&gt;Rp.600.000</option>
            </Form.Select>
          </div>
          <div className="input-child">
            <Form.Label>Status</Form.Label>
            <Form.Select name="isRented" aria-label="Default select example">
              <option value="true">Disewa</option>
              <option value="false">Tersedia</option>
            </Form.Select>
          </div>
            <button type="submit">
            <strong>Cari Mobil</strong>
          </button>
        </form>
      </div>
      
      {/* <div className="row card-group mx-auto d-flex flex-wrap justify-content-between">
      {cars.map((car) => (
          <div className="col-4 card-hasil" key={car.id}>
          <div className="content-hasil">
            <div className="img-hasil">
              <img alt="carResult" src={car.image} className="img-fluid"></img>
            </div>
            <div className="article-hasil">
              <p><small>{car.name}</small></p>
              <p className="car-price">Rp. {car.price} / hari</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <button className="button2 d-flex align-items-end"
            onClick={(e) => {
              e.preventDefault((window.location.href = "/detail"));
            }}>Pilih Mobil</button>
            </div>
          </div>
        </div>
      ))}
      </div> */}
      <Footer />
    </div>
  );
};


export default SearchPage;
