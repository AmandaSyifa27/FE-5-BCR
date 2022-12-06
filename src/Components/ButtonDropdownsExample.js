import React from "react";
import Form from "react-bootstrap/Form";

const ButtonDropdownsExample = () => {
  return (
    <div className="form">
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
            <option value="1">&lt;Rp.400.000</option>
            <option value="2">Rp.400.000-Rp.600.000</option>
            <option value="3">&gt;Rp.400.000</option>
          </Form.Select>
        </div>
        <div className="input-child">
          <Form.Label>Status</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Disewa</option>
            <option value="1">Disewakan</option>
          </Form.Select>
        </div>
        <button>Cari Mobil</button>
      </form>
    </div>
  );
};

export default ButtonDropdownsExample;
