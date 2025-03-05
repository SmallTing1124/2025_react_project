import { useEffect, useState } from 'react';

import axios from 'axios';
import { Link, useParams } from 'react-router';
const BASE_URL = import.meta.env.VITE_BASE_URL;

import statusOptionsData from '../../assets/json/status_options.json';
import facilityOptionsData from '../../assets/json/facility_options.json';
import transportOptionsData from '../../assets/json/transport_options.json';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function TouristSpotsDetail() {
  const statusOptions = statusOptionsData; // 取得營業狀態
  const facilityOptions = facilityOptionsData; // 取得設施狀態
  const transportOptions = transportOptionsData; // 取得交通狀態

console.log(statusOptions);


  const { id: touristSpotId } = useParams();
  const [touristSpot, setTouristSpot] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/locations/${touristSpotId}`);
        setTouristSpot(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [touristSpotId]);



  return (
    <>
      <section className="pt-lg-15 pt-12">
        <div className="container-xl">
          <div className="d-flex flex-column-reverse flex-lg-column">
            <div className="mobileTitle d-lg-none">
              <div className="d-flex flex-column justify-content-between mt-5 mb-3">
                <div className="touristTitle d-flex">
                  <img src="src/assets/images/tourist/Open.svg" alt="" />
                  <div className="d-flex flex-column ms-3">
                    <h1 className="fs-4 fs-lg-1">{touristSpot.name}</h1>
                    <div className="d-flex flex-row align-items-center">
                      <span className="d-none d-lg-inline btn-lg btn-secondary flag">
                        {statusOptions[touristSpot.statusId]}
                      </span>
                      <span className="d-lg-none btn btn-secondary flag">
                        {statusOptions[touristSpot.statusId]}
                      </span>
                      <p className="ps-4">
                        {touristSpot?.location?.city}{' '}
                        {touristSpot?.location?.area}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="toggles d-flex align-self-start ms-auto mt-3 mt-md-0">
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="mb-btn-check"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-light btn-sm rounded-pill border-0"
                    htmlFor="mb-btn-check"
                  >
                    <span className="isUnchecked iconify-favorite_add" />
                    <span className="isChecked material-symbols-outlined icon-filled">
                      favorite
                    </span>
                  </label>
                  <input
                    type="checkbox"
                    className="btn-check"
                    id="mb-btn-check-2"
                    autoComplete="off"
                  />
                  <label
                    className="btn btn-light btn-sm rounded-pill mx-4 border-0"
                    htmlFor="mb-btn-check-2"
                  >
                    <span className="isUnchecked iconify-fbookmark_add material-symbols-outlined">
                      bookmark_add
                    </span>
                    <span className="isChecked material-symbols-outlined">
                      bookmark
                    </span>
                  </label>
                </div>
              </div>
              <div className="toggles d-flex">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="mb-btn-check-3"
                  autoComplete="off"
                />
                <label
                  className="btn btn-light btn-sm rounded-pill w-100 justify-content-center"
                  htmlFor="mb-btn-check-3"
                >
                  打卡
                  <span className="isUnchecked iconify-add_a_photo material-symbols-outlined">
                    add_a_photo
                  </span>
                  <span className="isChecked iconify-rivet-icons--map-pin-solid" />
                </label>
              </div>
            </div>
            <div className="pcTitle d-none d-lg-flex flex-column flex-md-row justify-content-between pb-12">
              <div className="touristTitle d-flex">
                <img src="src/assets/images/tourist/Open.svg" alt="" />
                <div className="d-flex flex-column ms-3">
                  <h1>{touristSpot.name}</h1>
                  <div className="d-flex flex-row align-items-center">
                    <span className="btn btn-lg btn-secondary flag">
                      {statusOptions[touristSpot.statusId]}
                    </span>
                    <p className="ps-4">
                      {touristSpot?.location?.city}{' '}
                      {touristSpot?.location?.area}
                    </p>
                  </div>
                </div>
              </div>
              <div className="toggles d-flex align-items-end mt-7 mt-md-0">
                <input
                  type="checkbox"
                  className="btn-check"
                  id="pc-btn-check"
                  autoComplete="off"
                />
                <label
                  className="btn btn-light btn-sm rounded-pill"
                  htmlFor="pc-btn-check"
                >
                  喜愛的景點
                  <span className="isUnchecked iconify-favorite_add" />
                  <span className="isChecked material-symbols-outlined icon-filled">
                    favorite
                  </span>
                </label>
                <input
                  type="checkbox"
                  className="btn-check"
                  id="pc-btn-check-2"
                  autoComplete="off"
                />
                <label
                  className="btn btn-light btn-sm rounded-pill mx-4"
                  htmlFor="pc-btn-check-2"
                >
                  想去的景點
                  <span className="isUnchecked iconify-fbookmark_add material-symbols-outlined">
                    bookmark_add
                  </span>
                  <span className="isChecked material-symbols-outlined icon-filled">
                    bookmark
                  </span>
                </label>
                <input
                  type="checkbox"
                  className="btn-check"
                  id="pc-btn-check-3"
                  autoComplete="off"
                />
                <label
                  className="btn btn-light btn-sm rounded-pill"
                  htmlFor="pc-btn-check-3"
                >
                  打卡
                  <span className="isUnchecked iconify-add_a_photo material-symbols-outlined">
                    add_a_photo
                  </span>
                  <span className="isChecked material-symbols-outlined icon-filled">
                    photo_camera
                  </span>
                </label>
              </div>
            </div>
            <div className="d-flex flex-column mb-md-5">
              {touristSpot?.imagesUrl?.length > 0 ? (
                <Swiper slidesPerView={1}>
                  {touristSpot?.imagesUrl?.map?.((imageUrl, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={imageUrl}
                        alt={touristSpot?.name}
                        className="rounded w-100"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img
                  src={touristSpot.imageUrl}
                  alt={touristSpot.name}
                  className="rounded w-100"
                />
              )}
            </div>
          </div>
          <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-baseline pt-12 ">
            <nav>
              <div
                className="d-flex nav nav-underline"
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="flex-fill nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  景點資訊
                </button>
                <button
                  className="flex-fill nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  景點簡介
                </button>
                <button
                  className="flex-fill nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  景點評價
                </button>
              </div>
            </nav>
            <Link
              to={`/user/tourist-spots/edit/${touristSpotId}`}
              className="align-items-md-end text-gray-600 ms-auto"
            >
              <span className="material-symbols-outlined me-2 align-bottom">
                edit
              </span>
              修正景點資訊
            </Link>
          </div>
        </div>
        <div className="container-xl"></div>
      </section>
      <main className="pt-12 pb-15 bg-normal-gray">
        <div className="container-xl">
          {/* 景點資訊 */}
          <div
            className="tab-content pt-lg-15 pt-4 mx-md-5"
            id="nav-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div className="row">
                <div className="col-12 col-lg-8 tourist-information rounded-5 px-2 px-lg-12 position-relative bg-grid-paper">
                  <h2 className="d-flex d-lg-none title font-NaniFont text-center position-absolute  top-0 start-50 translate-middle align-items-center">
                    景點資訊
                  </h2>
                  <h2 className=" d-none d-lg-flex title font-NaniFont text-center position-absolute">
                    景點資訊
                  </h2>
                  <ul className="list-unstyled d-flex flex-column gap-2 py-15">
                    <li className="d-flex gap-2 align-items-center">
                      <span className="iconify-bi--telephone-fill text-secondary" />
                      電話號碼・{touristSpot.phone}
                    </li>
                    <li className="d-flex gap-2 align-items-center pt-3">
                      <span className="iconify-rivet-icons--map-pin-solid text-secondary" />
                      景點位置・{touristSpot.address}
                    </li>
                    <li>
                      <div
                        className="googleMapEmbed"
                        dangerouslySetInnerHTML={{
                          __html: touristSpot.googleMapEmbed,
                        }}
                      />
                    </li>
                    <li className="d-flex gap-2">
                      <span className="iconify-bi--telephone-fill text-secondary"></span>
                      <b>營業時間・</b>
                      <ul className="list-unstyled">
                        {touristSpot?.businessHours?.map(
                          ({ day, timeSlots }) => {
                            return (
                              <li className="mb-2 d-flex gap-2" key={day}>
                                <span>{day}</span>
                                {timeSlots.length > 0
                                  ? timeSlots
                                      .map(
                                        (slot) => `${slot.start}-${slot.end}`
                                      )
                                      .join(', ')
                                  : '休息'}
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="iconify-mingcute--baby-fill text-secondary"></span>
                      <b>最小適齡・</b>
                      {touristSpot.suitableAge} 歲+
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="iconify-rivet-icons--map-pin-solid text-secondary"></span>
                      <b>消費金額・</b>NT${touristSpot.admissionFee}
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="iconify-ph--tree-fill text-secondary"></span>
                      <b>周邊環境・</b>
                      <ul className="tourist-infomation-label d-flex flex-row list-inline flex-wrap gap-2">
                        {touristSpot?.facilities?.map((facility, index) => {
                          console.log(facility);
                          return (
                            <li
                              key={index}
                              className="tourist-information-label-item pe-3 bg-normal-gray rounded px-2 py-1 me-2"
                            >
                              <span
                                className={`${facilityOptions[facility]?.iconClass} align-middle text-gray-600  me-2`}
                              >
                                {facilityOptions[facility]?.iconName}{' '}
                              </span>
                              {facilityOptions[facility]?.name}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <span className="iconify-ph--tree-fill text-secondary"></span>
                      <b>交通工具・</b>
                      <ul className="tourist-infomation-label d-flex flex-row list-inline flex-wrap gap-2">
                        {touristSpot?.transport?.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="tourist-information-label-item pe-3 bg-normal-gray rounded px-2 py-1 me-2"
                            >
                              <span
                                className={`${transportOptions[item]?.iconClass} align-middle text-gray-600  me-2`}
                              ></span>
                              {transportOptions[item]?.name}
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-lg-4 pt-12">
                  <h4>景點標籤</h4>
                  <div className="tags pcTags d-none d-lg-block pt-5">
                    <ul className="list-inline d-flex flex-row flex-wrap gap-2">
                      <li>
                        <a className="btn tag" href="#" role="button">
                          <span className="text-primary">#</span>
                          探索學習
                        </a>
                      </li>
                      <a className="btn tag" href="#" role="button">
                        <span className="text-primary">#</span>
                        動物園
                      </a>
                      <li className="newTag">
                        <a className="btn tag tag-add" href="#" role="button">
                          <span className="material-symbols-outlined">
                            add_circle
                          </span>
                          新增標籤
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tags mobileTags d-lg-none pt-5">
                    <ul className="list-inline d-flex flex-row gap-1">
                      <li>
                        <a className="btn tag" href="#" role="button">
                          <span className="text-primary">#</span>
                          探索學習
                        </a>
                      </li>
                      <li />
                      <a className="btn tag" href="#" role="button">
                        <span className="text-primary">#</span>
                        動物園
                      </a>
                    </ul>
                    <div className="addTags d-flex">
                      <a
                        className="btn tag tag-add w-100 justify-content-center"
                        href="#"
                        role="button"
                      >
                        <span className="material-symbols-outlined">
                          add_circle
                        </span>
                        新增標籤
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 景點簡介 */}
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div className="col-12  rounded-5 px-2 px-lg-12 pb-12 position-relative tourist-information tourist-detail bg-grid-paper">
                <h2 className="d-flex d-lg-none title font-NaniFont text-center position-absolute  top-0 start-50 translate-middle align-items-center">
                  景點簡介
                </h2>
                <h2 className=" d-none d-lg-flex title font-NaniFont text-center position-absolute">
                  景點簡介
                </h2>
                <p className="pt-12 lh-base">{touristSpot.description}</p>
                <p className=" pt-12 lh-base">{touristSpot.notice}</p>
              </div>
            </div>
            {/* 景點評價 */}
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div className=" col-12  px-2 px-lg-12 pb-12 position-relative">
                <h2 className="evaluate-title d-flex d-lg-none title font-NaniFont text-center position-absolute start-50 translate-middle align-items-center">
                  景點評價
                </h2>
                <h2 className=" d-none d-lg-flex title font-NaniFont text-center position-absolute">
                  景點評價
                </h2>
                <div className="row d-flex flex-column-reverse flex-lg-row mt-12 mt-lg-0">
                  <div className="col-12 col-lg-8 px-2 px-lg-12 tourist-evaluate  rounded-5 mt-15 mt-lg-0 bg-grid-paper">
                    <div className="d-flex mt-10">
                      <h3 className="score rounded-pill bg-primary text-white me-5">
                        5.0
                      </h3>
                      <div className="evaluate d-flex flex-column">
                        <ul className="d-flex list-inline align-items-center">
                          <li>
                            <span className="material-symbols-outlined icon-filled text-secondary">
                              star
                            </span>
                          </li>
                          <li>
                            <span className="material-symbols-outlined icon-filled text-secondary">
                              star
                            </span>
                          </li>
                          <li>
                            <span className="material-symbols-outlined icon-filled text-secondary">
                              star
                            </span>
                          </li>
                          <li>
                            <span className="material-symbols-outlined icon-filled text-secondary">
                              star
                            </span>
                          </li>
                          <li>
                            <span className="material-symbols-outlined icon-filled text-secondary">
                              star
                            </span>
                          </li>
                        </ul>
                        <p className="d-block">4則評價</p>
                      </div>
                    </div>
                    <div className="message-share">
                      <h3 className="add-tourist-form-title font-NaniFont d-inline-block text-primary rounded bg-secondary px-5 py-1 mt-10 mb-5">
                        留言分享
                      </h3>
                      <ul className="evaluate-list list-unstyled">
                        <li className="evaluate-list-item d-flex rounded-3 px-4 py-6 bg-white">
                          <img
                            className="evaluate-avatar me-3"
                            src="src/assets/images/user-avatar.jpg"
                            alt=""
                          />
                          <div className="evaluate-text">
                            <div className="evaluate-text-top d-flex">
                              <p>小明媽咪</p>
                              <p className="text-primary mx-3">2週前</p>
                              <div className="star-score">
                                <ul className="d-flex list-inline align-items-center">
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="evaluate-text-bottom mt-2">
                              <p>
                                小朋友超喜歡餵羊跟小兔子,場地乾淨,還有很棒的戶外遊樂設施!
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="evaluate-list-item d-flex rounded-3 px-4 py-6 bg-white">
                          <img
                            className="evaluate-avatar me-3"
                            src="src/assets/images/user-avatar.jpg"
                            alt=""
                          />
                          <div className="evaluate-text">
                            <div className="evaluate-text-top d-flex">
                              <p>小明媽咪</p>
                              <p className="text-primary mx-3">2週前</p>
                              <div className="star-score">
                                <ul className="d-flex list-inline align-items-center">
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="evaluate-text-bottom mt-2">
                              <p>
                                小朋友超喜歡餵羊跟小兔子,場地乾淨,還有很棒的戶外遊樂設施!
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="evaluate-list-item d-flex rounded-3 px-4 py-6 bg-white">
                          <img
                            className="evaluate-avatar me-3"
                            src="src/assets/images/user-avatar.jpg"
                            alt=""
                          />
                          <div className="evaluate-text">
                            <div className="evaluate-text-top d-flex">
                              <p>小明媽咪</p>
                              <p className="text-primary mx-3">2週前</p>
                              <div className="star-score">
                                <ul className="d-flex list-inline align-items-center">
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                  <li>
                                    <span className="material-symbols-outlined icon-filled text-secondary">
                                      star
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="evaluate-text-bottom mt-2">
                              <p>
                                小朋友超喜歡餵羊跟小兔子,場地乾淨,還有很棒的戶外遊樂設施!
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <button
                        type="button"
                        className="btn btn-white tag border-2 border-gray-400 text-primary mb-12 bg-white"
                      >
                        載入更多評價...
                      </button>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <h5 className="px-7 py-12 bg-white rounded-top">
                      和大家分享你在景點的體驗心得吧!
                    </h5>
                    <button className="btn btn-primary w-100 rounded-0 d-flex justify-content-center">
                      <span className="material-symbols-outlined icon-filled text-secondary">
                        star
                      </span>
                      評價景點
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="thanks d-flex bg-dark-gray flex-row justify-content-center align-items-center gap-2 py-4">
        特別感謝・
        <div className="flex-shrink-0">
          <img
            src="src/assets/images/user-avatar.jpg"
            className="rounded-circle"
            alt="user-avatar"
            width={30}
            height={30}
          />
        </div>
        大寶媽
      </div>
      {/* 通知 */}
      <div id="liveAlertPlaceholder" />
    </>
  );
}
