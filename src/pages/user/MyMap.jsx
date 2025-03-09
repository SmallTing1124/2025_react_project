import UserStats from "./management/UserStats";

export default function MyMap() {
  
  return (
    <>
      <UserStats />
      <ul
        className="nav nav-underline mb-lg-8 mb-4 gap-0 border-bottom"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="add-maps-tab"
            data-bs-toggle="tab"
            data-bs-target="#add-maps-tab-pane"
            type="button"
            role="tab"
            aria-controls="add-maps-tab-pane"
            aria-selected="true"
          >
            我新增的景點
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="edit-map-tab"
            data-bs-toggle="tab"
            data-bs-target="#edit-map-tab-pane"
            type="button"
            role="tab"
            aria-controls="edit-map-tab-pane"
            aria-selected="false"
          >
            編輯過的景點
          </button>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="add-maps-tab-pane"
          role="tabpanel"
          aria-labelledby="add-maps-tab"
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
                          src="./images/home/attraction_1.jpg"
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
                          src="./images/home/attraction_2.jpg"
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
                          src="./images/home/attraction_3.jpg"
                          className="rounded-top"
                          alt=""
                        />
                        <h3 className="fs-lg-4 fs-5 fw-bold mb-4">
                          春室 Glass Studio
                        </h3>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                          <li className="d-flex gap-2 align-items-center">
                            <span className="iconify-rivet-icons--map-pin-solid text-secondary" />
                            新竹市 東區
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
                          src="./images/home/attraction_4.jpg"
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
          id="edit-map-tab-pane"
          role="tabpanel"
          aria-labelledby="edit-map-tab"
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
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">2小時前</span>
                          <span>編修</span>
                          <span className="text-primary">彰化縣芬園鄉</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          古生物奇幻樂園
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">2天前</span>
                          <span>編修</span>
                          <span className="text-primary">彰化縣員林市</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          百果山探索樂園
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">12天前</span>
                          <span>編修</span>
                          <span className="text-primary">台中市北區</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          國立自然科學博物館
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">1個月前</span>
                          <span>編修</span>
                          <span className="text-primary">南投縣草屯鎮</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          九九峰動物樂園
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">3個月前</span>
                          <span>編修</span>
                          <span className="text-primary">台中市北屯區</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          啵比星球
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">1年前</span>
                          <span>編修</span>
                          <span className="text-primary">新竹縣關西鎮</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          六福村主題遊樂園
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">1年前</span>
                          <span>編修</span>
                          <span className="text-primary">苗栗縣 竹南鎮</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          四方鮮乳酪故事館
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">1年前</span>
                          <span>編修</span>
                          <span className="text-primary">桃園市 中壢區</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          Xpark
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">1年前</span>
                          <span>編修</span>
                          <span className="text-primary">屏東縣 車城</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          國立海洋生物博物館
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">1年前</span>
                          <span>編修</span>
                          <span className="text-primary">桃園市龍潭區</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          小人國主題樂園
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">1年前</span>
                          <span>編修</span>
                          <span className="text-primary">台南市學甲區</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          頑皮世界野生動物園
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">1年前</span>
                          <span>編修</span>
                          <span className="text-primary">台北市士林區</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          臺北市立兒童新樂園
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col">
                  <a href="#">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex mb-2 fs-lg-6 fs-7">
                          <span className="text-gray-600">1年前</span>
                          <span>編修</span>
                          <span className="text-primary">台北市文山區</span>
                        </div>
                        <h4 className="fw-bold text-primary fs-lg-4 fs-5">
                          臺北市立動物園
                        </h4>
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
  );
}
