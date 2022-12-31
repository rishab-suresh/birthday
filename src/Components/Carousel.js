import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../Assets/WhatsApp Image 2022-12-31 at 10.53.24 (1).jpeg";
import img2 from "../Assets/WhatsApp Image 2022-12-31 at 10.53.24 (2).jpeg"
import img3 from "../Assets/WhatsApp Image 2022-12-31 at 10.53.24.jpeg";
import img4 from "../Assets/WhatsApp Image 2022-12-31 at 10.53.25.jpeg";
import '../App.css'
const CarouselPhoto = () => {
    
  return (
    <Carousel className="carousel"
        showArrows={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        dynamicHeight={true}
        width={500}
        >
    
      <div>
        <img src={img1} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={img2} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={img3} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={img4} />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default CarouselPhoto;
