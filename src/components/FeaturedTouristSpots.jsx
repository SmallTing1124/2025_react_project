import { useEffect, useRef, useState } from 'react';

import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Link } from 'react-router';

export default function FeaturedTouristSpots() {
  const [touristSpotsData, setTouristSpotsData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/locations`);
        const data = res.data.sort(() => Math.random() - 0.5);
        setTouristSpotsData(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const swiperRef = useRef(null);

  const handlePrevSlide = () => {
    if (swiperRef.current.isBeginning) {
      swiperRef.current.slideTo(swiperRef.current.slides.length - 1);
    } else {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextSlide = () => {
    if (swiperRef.current.isEnd) {
      swiperRef.current.slideTo(0);
    } else {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="page02 bg-normal-gray py-lg-15 py-12">
      <div className="container-xl">
        <div className="text-center">
          <div className="page-title bg-deco-msg pb-13">
            <h2 className="font-NaniFont text-secondary fs-lg-1 fs-2">
              隨機推薦親子景點
            </h2>
            <p className="text-white fs-5">從幼兒到小學生都有適合的景點</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-5">
              <img
                alt="裝飾圖片，是一隻貓"
                src="./images/home/deco-cat.svg"
                width={315}
                style={{ transform: 'translateY(-48px)' }}
                className="mw-100"
              />
            </div>
          </div>
        </div>
        <div className="position-relative px-lg-14 px-13">
          <Swiper
            slidesPerView={1}
            spaceBetween={4}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {touristSpotsData.map((touristSpot) => {
              return (
                <SwiperSlide key={touristSpot.id}>
                  <Link
                    to={`tourist-spot/${touristSpot.id}`}
                    href="tourist-info.html"
                    className="d-block mb-3"
                  >
                    <div className="card attraction-card">
                      <div className="card-body">
                        <img
                          alt={touristSpot.name}
                          src={touristSpot.imageUrl}
                          className="rounded-top"
                        />
                        <h3 className="fs-lg-4 fs-5 fw-bold mb-4">
                          {touristSpot.name}
                        </h3>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2 align-items-center ">
                            <span className="iconify-rivet-icons--map-pin-solid text-secondary"></span>
                            {touristSpot?.location?.area}
                            {touristSpot?.location?.city}
                          </li>
                          <li className="d-flex gap-2 align-items-center">
                            <span className="iconify-mingcute--baby-fill text-secondary"></span>
                            最小適齡 {touristSpot.suitableAge} 歲
                          </li>
                        </ul>
                        <div className="text-end">
                          <div className="d-inline-flex align-items-center gap-2 fw-bold text-primary">
                            查看詳情
                            <span className="material-symbols-outlined">
                              arrow_forward
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            className="btn btn-primary p-3 position-absolute top-50 start-0 translate-middle-y"
            onClick={handlePrevSlide}
          >
            <span className="material-symbols-outlined">arrow_left</span>
          </button>
          <button
            className="btn btn-primary p-3 position-absolute top-50 end-0 translate-middle-y"
            onClick={handleNextSlide}
          >
            <span className="material-symbols-outlined">arrow_right</span>
          </button>
        </div>
        <div className="mt-lg-15 mt-12 text-center">
          <Link to={'/tourist-spots'} className="btn btn-primary">
            查看更多景點
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
