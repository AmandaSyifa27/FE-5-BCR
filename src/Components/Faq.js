import React from "react";
import Accordion from "react-bootstrap/Accordion";

function Faq() {
  return (
    <div className="container5-faq" id="FAQ">
      <div className="article5">
        <h2>
          <strong>Frequently Asked Question</strong>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <Accordion defaultActiveKey="0" className="accordion">
        <Accordion.Item eventKey="0" className="faq">
          <Accordion.Header>
            <strong>Apa saja syarat yang dibutuhkan?</strong>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ad
            vitae nesciunt ipsa, quae hic!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="faq">
          <Accordion.Header>
            <strong>Berapa hari minimal sewa mobil lepas kunci?</strong>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
            excepturi!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="faq">
          <Accordion.Header>
            <strong>
              Berapa hari sebelumnya sabaiknya booking sewa mobil?
            </strong>
          </Accordion.Header>
          <Accordion.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
            maxime molestias? Similique necessitatibus soluta consequatur
            repellat, delectus autem officiis incidunt.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="faq">
          <Accordion.Header>
            <strong>Apakah Ada biaya antar-jemput?</strong>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
            ullam perferendis.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" className="faq">
          <Accordion.Header>
            <strong>Bagaimana jika terjadi kecelakaan?</strong>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, corrupti quae eligendi soluta nam esse hic dolores
            veniam tempore! Libero.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;
