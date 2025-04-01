import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

import { useCallback, useEffect, useState } from 'react';
import TouristSpotAddReview from './TouristSpotAddReview';
import formatTimeAgo from '../../utils/formatTimeAgo';
export default function TouristSpotReview({ title, touristSpot }) {
  const [reviewData, setReviewData] = useState([]);
  const [averageRating, setAverageRating] = useState('');
  const getReviewData = useCallback(async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/comments?locationId=${touristSpot.id}&_expand=user`
      );
      const data = res.data.map((item) => {
        return {
          ...item,
          timeAgo: formatTimeAgo(item.timestamp),
        };
      });
      setReviewData(data);
    } catch (error) {
      console.error(error);
    }
  }, [touristSpot]);
  useEffect(() => {
    getReviewData();
  }, [getReviewData]);

  useEffect(() => {
    if (reviewData.length) {
      const initialValue = 0;
      setAverageRating(
        (
          reviewData.reduce(
            (sum, review) => sum + review.rating,
            initialValue
          ) / reviewData.length
        ).toFixed(1)
      );
    } else {
      setAverageRating(0.0);
    }
  }, [reviewData]);

  return (
    <>
      <div className=" col-12  px-2 px-lg-12 pb-12 position-relative">
        <h2 className="evaluate-title d-flex d-lg-none title font-NaniFont text-center position-absolute start-50 translate-middle align-items-center">
          {title}
        </h2>
        <h2 className=" d-none d-lg-flex title font-NaniFont text-center position-absolute">
          {title}
        </h2>
        <div className="row d-flex flex-column-reverse flex-lg-row mt-12 mb-14 mt-lg-0">
          <div className="col-12 col-lg-8 px-lg-12 px-md-7  px-6 pb-10 tourist-evaluate  rounded-5 mt-15 mt-lg-0 bg-grid-paper">
            {reviewData.length > 0 && (
              <>
                <div className="d-flex mt-13 ">
                  <h3 className="score rounded-pill bg-primary text-white me-5">
                    {averageRating}
                  </h3>
                  <div className="evaluate d-flex flex-column">
                    <ul className="d-flex list-inline align-items-center mb-0">
                      {[...Array(5)].map((item, index) => {
                        return (
                          <li key={index}>
                            <span
                              className={`material-symbols-outlined icon-filled fs-2 ${
                                averageRating > index
                                  ? 'text-secondary'
                                  : 'text-gray'
                              } `}
                            >
                              star
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                    <p className="d-block">{reviewData.length}則評價</p>
                  </div>
                </div>
                <div className="message-share">
                  <h3 className="add-tourist-form-title font-NaniFont d-inline-block text-primary rounded bg-secondary px-5 py-1 mt-10 mb-5">
                    留言分享
                  </h3>
                  <ul className="evaluate-list list-unstyled">
                    {reviewData?.map((review, index) => {
                      return (
                        <li
                          key={index}
                          className="evaluate-list-item d-flex rounded-3 px-4 py-6 bg-white"
                        >
                          <img
                            className="evaluate-avatar me-3 object-fit-cover"
                            src={review.user.avatarImgUrl}
                          />
                          <div className="evaluate-text">
                            <div className="evaluate-text-top d-flex">
                              <p>{review.user.nickname}</p>
                              <p className="text-primary mx-3">
                                {review.timeAgo}
                              </p>
                              <div className="star-score">
                                <ul className="d-flex list-inline align-items-center">
                                  {[...Array(5)].map((item, index) => {
                                    return (
                                      <li key={index}>
                                        <span
                                          className={`material-symbols-outlined icon-filled ${
                                            review.rating > index
                                              ? 'text-secondary'
                                              : 'text-gray'
                                          } `}
                                        >
                                          star
                                        </span>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                            <div className="evaluate-text-bottom mt-2">
                              <p>{review.content}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                  {/* <button
                type="button"
                className="btn btn-white tag border-2 border-gray-400 text-primary mb-12 bg-white"
              >
                載入更多評價...
              </button> */}
                </div>
              </>
            )}
            {!reviewData.length > 0 && (
              <p className="mb-14 mt-14">
                這裡還沒有人留言，你的分享將是第一條！
                <br />
                快來留下你的體驗，幫助更多人發現這個景點的魅力！
              </p>
            )}
          </div>
          <TouristSpotAddReview
            title="評價景點"
            touristSpot={touristSpot}
            setReviewData={setReviewData}
            getReviewData={getReviewData}
          />
        </div>
      </div>
    </>
  );
}
