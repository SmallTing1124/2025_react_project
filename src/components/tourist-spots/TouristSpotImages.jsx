import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function TouristSpotImages({touristSpot}) {
  return (
    <>
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
    </>
  );
}
