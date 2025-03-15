import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

import { Modal } from 'bootstrap';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

export default function TouristSpotAddReview({ touristSpot, getReviewData }) {
  const loggedInUserId = useSelector((state) => state?.auth?.user?.id);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      rating: 5,
      content: '',
    },
  });
  const handleRating = (index) => {
    setValue('rating', index + 1);
  };

  const selectedRating = watch('rating');

  const onSubmit = (data) => {
    const commentData = {
      userId: loggedInUserId,
      locationId: touristSpot.id,
      rating: data.rating,
      content: data.content,
      timestamp: new Date().toISOString(),
    };
    creactCommentData(commentData);
    handleCloseAddReviewModal();
    reset();
  };

  const creactCommentData = async (data) => {
    try {
      await axios.post(`${BASE_URL}/comments`, data);
      getReviewData()
    } catch (error) {
      console.error(error);
    }
  };

  //   處理Modal
  const AddReviewModal = useRef(null);
  useEffect(() => {
    new Modal(AddReviewModal.current);
  }, []);

  const handleOpenAddReviewModal = () => {
    const modalInstance = Modal.getInstance(AddReviewModal.current);
    modalInstance.show();
  };

  const handleCloseAddReviewModal = () => {
    const modalInstance = Modal.getInstance(AddReviewModal.current);
    modalInstance.hide();
  };

  return (
    <div className="col-12 col-lg-4">
      <h5 className="px-7 py-12 bg-white rounded-top">
        和大家分享你在景點的體驗心得吧!
      </h5>
      <button
        className="btn btn-primary w-100 rounded-0 d-flex justify-content-center"
        onClick={handleOpenAddReviewModal}
      >
        <span className="material-symbols-outlined icon-filled text-secondary">
          star
        </span>
        評價景點
      </button>

      <div ref={AddReviewModal} className="modal fade">
        <div className="modal-dialog modal-dialog-centered">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  填寫景點評價
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <small>
                  歡迎你給予鼓勵、提出建議,你的體驗與想法,都將是尚未探索這些親子景點的家長們的最佳參考!
                </small>

                <h6 className="mt-10">
                  課程評分
                  <small className="text-gray-600">
                    ｜點一下星星來評，若未點選則預設五顆星
                  </small>
                </h6>

                <div className="star-score">
                  <ul className="d-flex list-inline align-items-center">
                    <input
                      type="hidden"
                      name="rating"
                      {...register('rating')}
                    />
                    {[...Array(5)].map((item, index) => {
                      return (
                        <li
                          style={{ cursor: 'pointer' }}
                          key={index}
                          onClick={() => {
                            handleRating(index);
                          }}
                        >
                          <span
                            className={`material-symbols-outlined icon-filled ${
                              selectedRating > index
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
                <div className="mb-3">
                  <label htmlFor="content" className="form-label h6">
                    景點評價內容
                  </label>
                  <textarea
                    {...register('content', {
                      required: '景點評價欄位必填',
                    })}
                    className={`form-control rounded-2 ${
                      errors.content && 'is-invalid'
                    }`}
                    id="content"
                    rows="3"
                  ></textarea>
                  {errors.content && (
                    <div className="invalid-feedback">
                      {errors.content?.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  關閉
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    // handleColseModal();
                  }}
                >
                  送出
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
