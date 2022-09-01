import React from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";

const settings = {
  fade: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  cssEase: "linear"
};

interface IBannerProps {
  pageValues: any,
}
const Banner = ({ pageValues }: IBannerProps) => {
  const router = useRouter()
  const images = pageValues[5]?.items
  return (
    <div className="damarket">
      <div className="main-slider">
        <Slider {...settings}>
          {images?.map((item: any, index: any) => (
            <div key={index} className="slide-content">
              <div className="slide-continn">
                <span>Weekend Discount</span>
                <h1><span>Enhance Your</span>Entertainment</h1>
                <p>{item?.home_slider_image?.text}<span>20%</span>off!</p>
                <button onClick={() => router.push(`${item?.home_slider_link?.value}`)} >{item?.home_slider_link?.text}</button>
              </div>
              <div className="slide-img">
                <img src={item?.home_slider_image?.public_image} alt="slideimg" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Banner
