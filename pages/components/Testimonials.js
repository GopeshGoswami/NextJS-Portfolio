import React, { useEffect, useState } from "react";
import Image from "next/image";
import nishant from "../../public/Nishant.jpeg";
import divya from "../../public/Divya.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Testimonials() {
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMobileScreen(true);
    }
  }, []);

  return (
    <>
      <h3 className=" text-3xl py-1 dark:text-teal-600">Testimonials</h3>
      <p className=" text-sm py-2 leading-8 text-gray-800 dark:text-white">
        People I've worked with have said some nice things...
      </p>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={
          mobileScreen
            ? false
            : {
                clickable: true,
                dynamicBullets: true,
                hiddenClass: "swiper-pagination-hidden",
              }
        }
        autoplay={{ delay: 3000 }}
        navigation={mobileScreen ? true : false}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <section className=" flex flex-col">
          <div className=" mx-auto flex items-center">
            <SwiperSlide className=" my-10">
              <div className="">
                <Image
                  src={nishant}
                  width={150}
                  height={150}
                  className=" mx-auto rounded-full"
                />
                <p className=" text-sm max-w-xl mx-auto py-10 text-center dark:text-white md:text-lg">
                  "Whether it's UI design, coding or illustration, Gopesh does
                  it all. I worked with him on several social media campaigns
                  and the growth I saw was incredible. His positive attitude and
                  attention to detail make him a welcome addition to any team."
                </p>
                <p className=" text-xl font-bold pb-0 mx-auto text-center dark:text-teal-600">
                  Nishant Patyal
                </p>
                <p className="text-center text-sm dark:text-white">
                  Video Ads Expert | Content Marketer at iMumz
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className=" my-10">
              <div>
                <Image
                  src={divya}
                  width={150}
                  height={150}
                  className=" mx-auto rounded-full"
                />
                <p className=" text-sm max-w-2xl mx-auto py-10 text-center dark:text-white md:text-lg">
                  "Gopesh is a very talented, sincere and hardworking person. He
                  has passionately worked on many projects and given great ideas
                  to implement. He is an asset to any organisation he works
                  with."
                </p>
                <p className=" text-xl font-bold pb-0 mx-auto text-center dark:text-teal-600">
                  Divya Srinivasan
                </p>
                <p className="text-center text-sm dark:text-white">
                  Lead Product Designer at iMumz
                </p>
              </div>
            </SwiperSlide>
          </div>
        </section>
      </Swiper>
    </>
  );
}
