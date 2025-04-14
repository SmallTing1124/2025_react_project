import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import { Link } from 'react-router';
import { useRef } from 'react';

export default function SwiperSpotList({ newSpotThankList }) {
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
    <div className="position-relative  px-lg-14 px-13">
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
        {newSpotThankList?.map((spot) => {
          return (
            <SwiperSlide key={spot.id}>
              <div className="card contribution-card">
                <div className="card-body">
                  <div className="avatar-img">
                    <img
                      src={spot.user.avatarImgUrl}
                      alt={spot.user.nickname}
                      width={72}
                      height={72}
                      className="object-cover"
                    />
                  </div>
                  <h3>{spot.user.nickname}</h3>
                  <p className="py-4 text-dark">
                    感謝您 新增
                    <Link
                      href={`tourist-spot/${spot.id}`}
                      className="link-primary"
                    >
                      {spot.name}
                    </Link>
                  </p>
                  <small className="text-gray-600">
                    最新開拓日・2024-08-15
                  </small>
                </div>
              </div>
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
  );
}
