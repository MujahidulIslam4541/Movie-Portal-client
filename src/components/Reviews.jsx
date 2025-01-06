import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
// react awesome rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { RiClockwise2Fill } from "react-icons/ri";

const Testimonial = () => {
  // Loaded reviews in json file
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="shadow-xl py-10 mt-10">
      <h1 className="text-4xl font-bold text-center my-8">
        What Our Users Are Saying
      </h1>
      {/* swiper slider */}
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className=" flex flex-col items-center my--16 mx-24">
                <div className="flex gap-2 text-5xl my-4">
                  <RiClockwise2Fill />
                  <RiClockwise2Fill />
                </div>
                <Rating style={{ maxWidth: 90 }} value={movie.rating} readOnly />
                <p>{review.details}</p>
                <h2 className="text-orange-500 text-2xl uppercase font-semibold">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
