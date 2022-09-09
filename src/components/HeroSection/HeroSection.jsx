import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSection.css"



// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Products from "../Product/Products";



export default function HeroSection() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>  
           <div className="Container-Slide-1">
                        <div className="container-image-1">
                          
                        </div>
                        <div className="container-content">
                            <p className="container-paragraph">Best Collection</p>
                            <h1 className="container-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit natus dolore doloremque commodi vitae.</h1>
                            <p className="container-sub"><em>Slay.Shine</em></p>
                        </div>
                    </div>
                    </SwiperSlide>
        <SwiperSlide>  
          <div className="Container-Slide-1">
                        <div className="container-image-2">
                           
                        </div>
                        <div className="container-content">
                            <p className="container-paragraph">Best Collection</p>
                            <h1 className="container-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero culpa, facilis asperiores quaerat laudantium ullam illo . </h1>
                            <p className="container-sub"><em>Slay.Shine</em></p>
                        </div>
                    </div>
                    </SwiperSlide>
        <SwiperSlide> 
          <div className="Container-Slide-1">
                        <div className="container-image-3">
                        
                        </div>
                        <div className="container-content">
                            <p className="container-paragraph">Best Collection</p>
                            <h1 className="container-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum est amet odio quaerat officiis nobis officia ipsa delectus.</h1>
                            <p className="container-sub"><em>Slay.Shine</em></p>
                        </div>
                    </div>
                    </SwiperSlide>
        <SwiperSlide> 
          <div className="Container-Slide-1">
                        <div className="container-image-4">
                            
                        </div>
                        <div className="container-content">
                            <p className="container-paragraph">Best Collection</p>
                            <h1 className="container-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum est amet odio quaerat officiis nobis officia ipsa delectus.</h1>
                            <p className="container-sub"><em>Slay.Shine</em></p>
                        </div>
                    </div>
                    </SwiperSlide>
      </Swiper>
<Products/>
    </>
  );
}
