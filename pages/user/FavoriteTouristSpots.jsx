import UserStats from './management/UserStats';

export default function FavoriteTouristSpots() {
  return (
    <>
      <UserStats />
      <>
        <ul
          className="nav nav-underline mb-lg-8 mb-4 gap-0 border-bottom"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="favorites-tab"
              data-bs-toggle="tab"
              data-bs-target="#favorites-tab-pane"
              type="button"
              role="tab"
              aria-controls="favorites-tab-pane"
              aria-selected="true"
            >
              喜愛的景點
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="wishlist-tab"
              data-bs-toggle="tab"
              data-bs-target="#wishlist-tab-pane"
              type="button"
              role="tab"
              aria-controls="wishlist-tab-pane"
              aria-selected="false"
            >
              想去的景點
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="checkedIn-tab"
              data-bs-toggle="tab"
              data-bs-target="#checkedIn-tab-pane"
              type="button"
              role="tab"
              aria-controls="checkedIn-tab-pane"
              aria-selected="false"
            >
              已打卡景點
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="favorites-tab-pane"
            role="tabpanel"
            aria-labelledby="favorites-tab"
            tabIndex={0}
          >
            <div className="card shadow">
              <div className="card-body p-lg-8 p-3">
                <div className="btn-gruop bg-light-gray d-inline-flex p-1 rounded-5 mb-lg-12 mb-6 gap-2">
                  <a href="#" className="btn btn-white active">
                    營業中(13)
                  </a>
                  <a href="#" className="btn btn-white">
                    暫停營業(7)
                  </a>
                  <a href="#" className="btn btn-white">
                    永久歇業(2)
                  </a>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2  row-cols-1 g-lg-4 g-3">
                  {/* col */}
                  <div className="col">
                    <a href="tourist-info.html" className="d-block">
                      <div className="card attraction-card">
                        <div className="card-body">
                          <img
                            src="src/assets/images/home/attraction_1.jpg"
                            className="rounded-top"
                            alt=""
                          />
                          <h3 className="fs-lg-4 fs-5 fw-bold mb-4">
                            新竹市立動物園
                          </h3>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-rivet-icons--map-pin-solid text-secondary" />
                              新竹市東區
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-mingcute--baby-fill text-secondary" />
                              最小適齡 1 歲
                            </li>
                          </ul>
                          <div className="text-end">
                            <div
                              href="#"
                              className="d-inline-flex align-items-center gap-2 fw-bold text-primary"
                            >
                              查看詳情
                              <span className="material-symbols-outlined">
                                arrow_forward
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* col */}
                  <div className="col">
                    <a href="tourist-info.html" className="d-block">
                      <div className="card attraction-card">
                        <div className="card-body">
                          <img
                            src="src/assets/images/home/attraction_2.jpg"
                            className="rounded-top"
                            alt=""
                          />
                          <h3 className="fs-lg-4 fs-5 fw-bold mb-4">
                            廢物媽媽育兒農場
                          </h3>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-rivet-icons--map-pin-solid text-secondary" />
                              新竹市 香山區
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-mingcute--baby-fill text-secondary" />
                              最小適齡 1 歲
                            </li>
                          </ul>
                          <div className="text-end">
                            <div
                              href="#"
                              className="d-inline-flex align-items-center gap-2 fw-bold text-primary"
                            >
                              查看詳情
                              <span className="material-symbols-outlined">
                                arrow_forward
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* col */}
                  <div className="col">
                    <a href="tourist-info.html" className="d-block">
                      <div className="card attraction-card">
                        <div className="card-body">
                          <img
                            src="src/assets/images/home/attraction_4.jpg"
                            className="rounded-top"
                            alt=""
                          />
                          <h3 className="fs-lg-4 fs-5 fw-bold mb-4">
                            台北市立兒童新樂園
                          </h3>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-rivet-icons--map-pin-solid text-secondary" />
                              台北市 士林區
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-mingcute--baby-fill text-secondary" />
                              最小適齡 1 歲
                            </li>
                          </ul>
                          <div className="text-end">
                            <div
                              href="#"
                              className="d-inline-flex align-items-center gap-2 fw-bold text-primary"
                            >
                              查看詳情
                              <span className="material-symbols-outlined">
                                arrow_forward
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="wishlist-tab-pane"
            role="tabpanel"
            aria-labelledby="wishlist-tab"
            tabIndex={0}
          >
            <div className="card shadow">
              <div className="card-body p-lg-8 p-3">
                <div className="btn-gruop bg-light-gray d-inline-flex p-1 rounded-5 mb-lg-12 mb-6 gap-2">
                  <a href="#" className="btn btn-white active">
                    營業中(13)
                  </a>
                  <a href="#" className="btn btn-white">
                    暫停營業(7)
                  </a>
                  <a href="#" className="btn btn-white">
                    永久歇業(2)
                  </a>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2  row-cols-1 g-lg-4 g-3">
                  {/* col */}
                  <div className="col">
                    <a href="tourist-info.html" className="d-block">
                      <div className="card attraction-card">
                        <div className="card-body">
                          <img
                            src="src/assets/images/home/attraction_1.jpg"
                            className="rounded-top"
                            alt=""
                          />
                          <h3 className="fs-lg-4 fs-5 fw-bold mb-4">
                            新竹市立動物園
                          </h3>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-rivet-icons--map-pin-solid text-secondary" />
                              新竹市東區
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-mingcute--baby-fill text-secondary" />
                              最小適齡 1 歲
                            </li>
                          </ul>
                          <div className="text-end">
                            <div
                              href="#"
                              className="d-inline-flex align-items-center gap-2 fw-bold text-primary"
                            >
                              查看詳情
                              <span className="material-symbols-outlined">
                                arrow_forward
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  {/* col */}
                  <div className="col">
                    <a href="tourist-info.html" className="d-block">
                      <div className="card attraction-card">
                        <div className="card-body">
                          <img
                            src="src/assets/images/home/attraction_2.jpg"
                            className="rounded-top"
                            alt=""
                          />
                          <h3 className="fs-lg-4 fs-5 fw-bold mb-4">
                            廢物媽媽育兒農場
                          </h3>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-rivet-icons--map-pin-solid text-secondary" />
                              新竹市 香山區
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-mingcute--baby-fill text-secondary" />
                              最小適齡 1 歲
                            </li>
                          </ul>
                          <div className="text-end">
                            <div
                              href="#"
                              className="d-inline-flex align-items-center gap-2 fw-bold text-primary"
                            >
                              查看詳情
                              <span className="material-symbols-outlined">
                                arrow_forward
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="checkedIn-tab-pane"
            role="tabpanel"
            aria-labelledby="checkedIn-tab"
            tabIndex={0}
          >
            <div className="card shadow">
              <div className="card-body p-lg-8 p-3">
                <div className="btn-gruop bg-light-gray d-inline-flex p-1 rounded-5 mb-lg-12 mb-6 gap-2">
                  <a href="#" className="btn btn-white active">
                    營業中(13)
                  </a>
                  <a href="#" className="btn btn-white">
                    暫停營業(7)
                  </a>
                  <a href="#" className="btn btn-white">
                    永久歇業(2)
                  </a>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-2  row-cols-1 g-lg-4 g-3">
                  {/* col */}
                  <div className="col">
                    <a href="tourist-info.html" className="d-block">
                      <div className="card attraction-card">
                        <div className="card-body">
                          <img
                            src="src/assets/images/home/attraction_4.jpg"
                            className="rounded-top"
                            alt=""
                          />
                          <h3 className="fs-lg-4 fs-5 fw-bold mb-4">
                            台北市立兒童新樂園
                          </h3>
                          <ul className="list-unstyled d-flex flex-column gap-2">
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-rivet-icons--map-pin-solid text-secondary" />
                              台北市 士林區
                            </li>
                            <li className="d-flex gap-2 align-items-center">
                              <span className="iconify-mingcute--baby-fill text-secondary" />
                              最小適齡 1 歲
                            </li>
                          </ul>
                          <div className="text-end">
                            <div
                              href="#"
                              className="d-inline-flex align-items-center gap-2 fw-bold text-primary"
                            >
                              查看詳情
                              <span className="material-symbols-outlined">
                                arrow_forward
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
