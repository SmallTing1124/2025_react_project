export default function TouristSpotReview({ title }) {
  return (
    <>
      <div className=" col-12  px-2 px-lg-12 pb-12 position-relative">
        <h2 className="evaluate-title d-flex d-lg-none title font-NaniFont text-center position-absolute start-50 translate-middle align-items-center">
          {title}
        </h2>
        <h2 className=" d-none d-lg-flex title font-NaniFont text-center position-absolute">
          {title}
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
                    src="./images/user-avatar.jpg"
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
                    src="./images/user-avatar.jpg"
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
                    src="./images/user-avatar.jpg"
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
    </>
  );
}
