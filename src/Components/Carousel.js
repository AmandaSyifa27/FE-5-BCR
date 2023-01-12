import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testiImage2 from "../assets/testiimg2.png";
import testiImage1 from "../assets/testiimg1.png";

// function SampleNextArrow(props) {
//   const { nextArrow, style, onClick } = props;
//   return (
//     <div
//       className={nextArrow}
//       style={{
//         ...style,
//         background: "#5CB85F",
//         width: "32px",
//         height: "32px",
//         borderRadius: "50%",
//         justifyContent: "center",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { prevArrow, style, onClick } = props;
//   return (
//     <div
//       className={prevArrow}
//       style={{
//         ...style,
//         background: "#5CB85F",
//         width: "32px",
//         height: "32px",
//         borderRadius: "50%",
//       }}
//       onClick={onClick}
//     />
//   );
// }

class Carousel extends Component {
  render() {
    const settings = {
      className: "center",
      width:"auto",
      centerPadding: "60px",
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 1,
    };
    const myStyle = {
      width: "auto",
    };

    return (
      <div>
      <Slider className="sliding-card" {...settings} style={myStyle}>
        <div className="card">
          <div className="card-content">
            <div className="card2img">
              <img src={testiImage2} alt="gambar" />
            </div>
            <div className="card2text">
              <svg
                width="80"
                height="16"
                viewBox="0 0 80 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                  fill="#F9CC00"
                />
              </svg>
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
              <p style={{fontWeight: "400"}}>John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div className="card-content">
            <div className="card2img">
              <img src={testiImage1} alt="gambar" />
            </div>
            <div className="card2text">
              <svg
                width="80"
                height="16"
                viewBox="0 0 80 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                  fill="#F9CC00"
                />
              </svg>
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
              <p style={{fontWeight: "400"}}>John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div className="card-content">
            <div className="card2img">
              <img src={testiImage2} alt="gambar" />
            </div>
            <div className="card2text">
              <svg
                width="80"
                height="16"
                viewBox="0 0 80 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                  fill="#F9CC00"
                />
              </svg>
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
              <p style={{fontWeight: "400"}}>John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div className="card-content">
            <div className="card2img">
              <img src={testiImage1} alt="gambar" />
            </div>
            <div className="card2text">
              <svg
                width="80"
                height="16"
                viewBox="0 0 80 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                  fill="#F9CC00"
                />
              </svg>
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
              <p style={{fontWeight: "400"}}>John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div className="card-content">
            <div className="card2img">
              <img src={testiImage2} alt="gambar" />
            </div>
            <div className="card2text">
              <svg
                width="80"
                height="16"
                viewBox="0 0 80 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                  fill="#F9CC00"
                />
              </svg>
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
              <p style={{fontWeight: "400"}}>John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div className="card-content">
            <div className="card2img">
              <img src={testiImage1} alt="gambar" />
            </div>
            <div className="card2text">
              <svg
                width="80"
                height="16"
                viewBox="0 0 80 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                  fill="#F9CC00"
                />
              </svg>
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
              <p style={{fontWeight: "400"}}>John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
        <div class="card">
          <div className="card-content">
            <div className="card2img">
              <img src={testiImage2} alt="gambar" />
            </div>
            <div className="card2text">
              <svg
                width="80"
                height="16"
                viewBox="0 0 80 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M24 0L25.7961 5.52786H31.6085L26.9062 8.94427L28.7023 14.4721L24 11.0557L19.2977 14.4721L21.0938 8.94427L16.3915 5.52786H22.2039L24 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M40 0L41.7961 5.52786H47.6085L42.9062 8.94427L44.7023 14.4721L40 11.0557L35.2977 14.4721L37.0938 8.94427L32.3915 5.52786H38.2039L40 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M56 0L57.7961 5.52786H63.6085L58.9062 8.94427L60.7023 14.4721L56 11.0557L51.2977 14.4721L53.0938 8.94427L48.3915 5.52786H54.2039L56 0Z"
                  fill="#F9CC00"
                />
                <path
                  d="M72 0L73.7961 5.52786H79.6085L74.9062 8.94427L76.7023 14.4721L72 11.0557L67.2977 14.4721L69.0938 8.94427L64.3915 5.52786H70.2039L72 0Z"
                  fill="#F9CC00"
                />
              </svg>
              <br />
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod”
              <p style={{fontWeight: "400"}}>John Dee 32, Bromo</p>
            </div>
          </div>
        </div>
      </Slider>
      </div>
    );
  };
};

export default Carousel;