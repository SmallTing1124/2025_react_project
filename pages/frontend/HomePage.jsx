import { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router';

export default function HomePage() {
  const [locationsData, setLocationsData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/locations`);
        setLocationsData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <section className="banner-area">
        <img
          src="src/assets/images/home/banner-bg.svg"
          width="100%"
          className="d-none d-lg-block"
        />
        <img
          src="src/assets/images/home/banner_bg_mobile.jpg"
          width="100%"
          className="d-lg-none"
        />
      </section>
      <section className="page01 pt-14 ">
        <div className="container-xl">
          <div className="text-center">
            <h2 className="font-NaniFont text-primary page-title fs-1">
              週末不知道<span className="d-block d-lg-inline">帶小孩</span>
              <span className="d-block">去哪裡嗎？</span>
            </h2>
          </div>
          <div className="p-lg-8 p-6 border border-primary border-3 rounded-5 bg-white">
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-6">
              <div className="col">
                <div className="card tag-card rounded-4 overflow-hidden border-0">
                  <div className="inner-img">
                    <img src="src/assets/images/home/where_1.jpg" alt="戶外" />
                  </div>
                  <h3 className="tag-title">＃戶外</h3>
                </div>
              </div>
              <div className="col">
                <div className="card tag-card rounded-4 overflow-hidden border-0">
                  <div className="inner-img">
                    <img src="src/assets/images/home/where_2.jpg" alt="玩水" />
                  </div>
                  <h3 className="tag-title">＃玩水</h3>
                </div>
              </div>
              <div className="col">
                <div className="card tag-card rounded-4 overflow-hidden border-0">
                  <div className="inner-img">
                    <img src="src/assets/images/home/where_3.jpg" alt="室內" />
                  </div>
                  <h3 className="tag-title">＃室內</h3>
                </div>
              </div>
              <div className="col">
                <div className="card tag-card rounded-4 overflow-hidden border-0">
                  <div className="inner-img">
                    <img
                      src="src/assets/images/home/where_4.jpg"
                      alt="＃露營"
                    />
                  </div>
                  <h3 className="tag-title">＃露營</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="deco-vehicle position-relative pt-lg-18 pt-16">
          <img
            src="src/assets/images/home/deco_taxi.svg"
            width={138}
            className="position-absolute bottom-0"
          />
          <img
            src="src/assets/images/home/deco_bus_move.svg"
            width={172}
            className="position-absolute bottom-0"
          />
        </div>
      </section>
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
                  src="src/assets/images/home/deco-cat.svg"
                  width={315}
                  style={{ transform: 'translateY(-48px)' }}
                  className="mw-100"
                />
              </div>
            </div>
          </div>
          <div className="position-relative px-14">
            <Swiper slidesPerView={3}>
              {locationsData.map((locations) => {
                return (
                  <SwiperSlide key={locations.id}>
                    <Link to={`tourist-spot/${locations.id}`} href="tourist-info.html" className="d-block mx-3 mb-3">
                      <div className="card attraction-card">
                        <div className="card-body">
                          <img
                            src={locations.imageUrl}
                            className="rounded-top"
                            alt=""
                          />
                          <h3 className="fs-lg-4 fs-5 fw-bold mb-4">
                            {locations.name}
                          </h3>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            <li className="d-flex gap-2 align-items-center ">
                              <span className="iconify-rivet-icons--map-pin-solid text-secondary"></span>
                              {locations.location.area}
                              {locations.location.city}
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-mingcute--baby-fill text-secondary"></span>
                              最小適齡 {locations.suitableAge} 歲
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
          </div>
          <div className="mt-lg-15 mt-12 text-center">
            <Link to="/tourist-spots" className="btn btn-primary">
              查看更多景點
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-secondary">
        <div className="container-xl position-relative">
          <div className="row">
            <div className="col">
              <div className="bg-grid-paper rounded-5 py-lg-14 pt-12 pb-17 position-relative mt-lg-14 mb-lg-16 my-12">
                <img
                  src="src/assets/images/home/deco_map.svg"
                  width={264}
                  className="mx-100 position-absolute top-0 mt-8 d-lg-block d-none"
                />
                <div className="text-center">
                  <h2 className="font-NaniFont text-primary fs-1  mb-lg-12 mb-6">
                    景點蒐集計畫
                  </h2>
                  <p className="mb-lg-12 mb-6">
                    讓親子旅遊更簡單
                    <br />
                    和我們一起整理親子景點
                  </p>
                  <a href="#" className="btn btn-highligh btn-lg">
                    <span className="icon-logo-mini" />
                    JOIN US
                  </a>
                </div>
              </div>
            </div>
          </div>
          <img
            src="src/assets/images/home/deco_idea.svg"
            width={373}
            className="mx-100 position-absolute bottom-0 end-0 d-lg-block d-none"
          />
          <img
            src="src/assets/images/home/deco_idea.svg"
            width={190}
            className="mx-100 position-absolute start-50  translate-middle-x bottom-0 end-0 d-lg-none"
          />
        </div>
      </section>
    </>
  );
}
