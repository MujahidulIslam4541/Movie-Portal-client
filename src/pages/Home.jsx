import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import braveImage from '../assets/brave.jpg'
import kombatImage from '../assets/great.jpg'
import RRRImage from '../assets/rrr.jpg'
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Carousel = () => {
  return (
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
      modules={[Autoplay, Pagination, ]}
      className="mySwiper"
    >
      <SwiperSlide><img className="w-full h-[600px]" src="https://i.ibb.co.com/zPSjq8w/marvel-movie-km5otxtmsqb0ijdb.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[600px]" src="https://i.ibb.co.com/yqm5WNZ/71670-Spider-Man-3-Spider.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[600px]" src="https://i.ibb.co.com/Vj3gWtw/desktop-wallpaper-thor-movie-wide-poster-best.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[600px]" src={braveImage} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[600px]" src={kombatImage} alt="" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-[600px]"  src={RRRImage} alt="" /></SwiperSlide>
    </Swiper>
   
  );
};

export default Carousel;
