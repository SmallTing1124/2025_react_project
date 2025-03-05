export default function TouristSpotsList() {
  return (
    <>
      <section
        className="pt-lg-15 pt-12 pb-0"
        style={{ background: 'url(/images/home/bg-light.jpg)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="page-title pb-13">
                  <h2 className="font-NaniFont text-primary fs-lg-1 fs-2">
                    親子景點篩選
                  </h2>
                  <p className="text-primary fs-3 font-NaniFont">
                    Search Filter bar
                  </p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-5">
                    <img
                      src="/images/home/deco-cat.svg"
                      width={315}
                      style={{ transform: 'translateY(-56px)' }}
                      className="mw-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="search-bar__area">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="search-bar__content">
                <form action="" className="row row-cols-lg-4 row-cols-1 g-3">
                  <div className="col">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label htmlFor="floatingInput">關鍵字搜尋</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="dropdown dropup-center">
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle w-100 py-2 py-4 btn-white"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-auto-close="outside"
                      >
                        地區
                      </button>
                      <div className="dropdown-menu filterOptions filterOptions_area">
                        <div className="filterOptions_content">
                          <ul className="cityGroup list-unstyled border-end mb-0">
                            <li>
                              <button className="btn">不限</button>
                            </li>
                            <li>
                              <button className="btn">臺北市</button>
                            </li>
                            <li>
                              <button className="btn">基隆市</button>
                            </li>
                            <li>
                              <button className="btn">新北市</button>
                            </li>
                            <li>
                              <button className="btn">連江縣</button>
                            </li>
                            <li>
                              <button className="btn">宜蘭縣</button>
                            </li>
                            <li>
                              <button className="btn">新竹市</button>
                            </li>
                            <li>
                              <button className="btn">新竹縣</button>
                            </li>
                            <li>
                              <button className="btn">桃園市</button>
                            </li>
                            <li>
                              <button className="btn">苗栗縣</button>
                            </li>
                            <li>
                              <button className="btn">臺中市</button>
                            </li>
                            <li>
                              <button className="btn">彰化縣</button>
                            </li>
                            <li>
                              <button className="btn">南投縣</button>
                            </li>
                            <li>
                              <button className="btn">嘉義市</button>
                            </li>
                            <li>
                              <button className="btn">嘉義縣</button>
                            </li>
                            <li>
                              <button className="btn">雲林縣</button>
                            </li>
                            <li>
                              <button className="btn">臺南市</button>
                            </li>
                            <li>
                              <button className="btn">高雄市</button>
                            </li>
                            <li>
                              <button className="btn">澎湖縣</button>
                            </li>
                            <li>
                              <button className="btn">金門縣</button>
                            </li>
                            <li>
                              <button className="btn">屏東縣</button>
                            </li>
                            <li>
                              <button className="btn">臺東縣</button>
                            </li>
                            <li>
                              <button className="btn">花蓮縣</button>
                            </li>
                          </ul>
                          <ul className="districtGroup list-unstyled mb-0">
                            <li className="py-3 px-6">
                              <label>
                                中正區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="中正區"
                                  id="中正區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                大同區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="大同區"
                                  id="大同區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                中山區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="中山區"
                                  id="中山區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                松山區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="松山區"
                                  id="松山區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                大安區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="大安區"
                                  id="大安區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                萬華區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="萬華區"
                                  id="萬華區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                信義區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="信義區"
                                  id="信義區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                士林區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="士林區"
                                  id="士林區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                北投區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="北投區"
                                  id="北投區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                內湖區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="內湖區"
                                  id="內湖區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                南港區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="南港區"
                                  id="南港區"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                文山區
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="文山區"
                                  id="文山區"
                                />
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="filterOptions_footer">
                          <div className="row g-1">
                            <div className="col-6">
                              <div className="d-grid">
                                <button
                                  type="button"
                                  className="btn justify-content-center btn-white"
                                >
                                  重置
                                </button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-grid">
                                <button
                                  type="button"
                                  className="btn justify-content-center btn-primary"
                                >
                                  確定
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="dropdown dropup-center">
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle w-100 py-2 py-4 btn-white"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-auto-close="outside"
                      >
                        類別
                      </button>
                      <div className="dropdown-menu filterOptions filterOptions_area">
                        <div className="filterOptions_content">
                          <ul className="cityGroup list-unstyled border-end mb-0">
                            <li>
                              <button className="btn">不限</button>
                            </li>
                            <li>
                              <button className="btn">自然景觀</button>
                            </li>
                            <li>
                              <button className="btn">探索學習</button>
                            </li>
                            <li>
                              <button className="btn">戶外活動</button>
                            </li>
                            <li>
                              <button className="btn">娛樂設施</button>
                            </li>
                            <li>
                              <button className="btn">休閒遊憩</button>
                            </li>
                          </ul>
                          <ul className="districtGroup list-unstyled mb-0">
                            <li className="py-3 px-6">
                              <label>
                                海邊
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="海邊"
                                  id="海邊"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                河邊
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="河邊"
                                  id="河邊"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                爬山
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="爬山"
                                  id="爬山"
                                />
                              </label>
                            </li>
                            <li className="py-3 px-6">
                              <label>
                                森林
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  name="森林"
                                  id="森林"
                                />
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="filterOptions_footer">
                          <div className="row g-1">
                            <div className="col-6">
                              <div className="d-grid">
                                <button
                                  type="button"
                                  className="btn justify-content-center btn-white"
                                >
                                  重置
                                </button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-grid">
                                <button
                                  type="button"
                                  className="btn justify-content-center btn-primary"
                                >
                                  確定
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="dropdown dropup-center">
                      <button
                        type="button"
                        className="btn btn-primary dropdown-toggle w-100 py-2 py-4 btn-white"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-auto-close="outside"
                      >
                        適齡
                      </button>
                      <div className="dropdown-menu filterOptions filterOptions_area">
                        <div className="filterOptions_content flex-column py-6">
                          <div className="filterOptions_slider">
                            <h6 className="fw-bold">最小適合年齡</h6>
                          </div>
                          <div className="px-6">
                            <label
                              htmlFor="customRange2"
                              className="form-label"
                            >
                              12歲+
                            </label>
                            <input
                              type="range"
                              className="form-range"
                              min={0}
                              max={5}
                              id="customRange2"
                            />
                          </div>
                        </div>
                        <div className="filterOptions_footer">
                          <div className="row g-1">
                            <div className="col-6">
                              <div className="d-grid">
                                <button
                                  type="button"
                                  className="btn justify-content-center btn-white"
                                >
                                  重置
                                </button>
                              </div>
                            </div>
                            <div className="col-6">
                              <div className="d-grid">
                                <button
                                  type="button"
                                  className="btn justify-content-center btn-primary"
                                >
                                  確定
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-secondary btn-search"
                    type="submit"
                  >
                    搜尋
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="pt-12 pb-15 bg-normal-gray">
        <div className="container">
          <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-6">
            {/* col */}
            <div className="col">
              <a href="tourist-info.html" className="d-block">
                <div className="card attraction-card">
                  <div className="card-body">
                    <img
                      src="/images/home/attraction_1.jpg"
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
                      src="/images/home/attraction_2.jpg"
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
                      src="/images/home/attraction_3.jpg"
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
                      src="/images/home/attraction_4.jpg"
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
            {/* col */}
            <div className="col">
              <a href="tourist-info.html" className="d-block">
                <div className="card attraction-card">
                  <div className="card-body">
                    <img
                      src="/images/home/attraction_1.jpg"
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
                      src="/images/home/attraction_2.jpg"
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
                      src="/images/home/attraction_3.jpg"
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
                      src="/images/home/attraction_4.jpg"
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
            {/* col */}
            <div className="col">
              <a href="tourist-info.html" className="d-block">
                <div className="card attraction-card">
                  <div className="card-body">
                    <img
                      src="/images/home/attraction_1.jpg"
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
                      src="/images/home/attraction_2.jpg"
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
                      src="/images/home/attraction_3.jpg"
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
                      src="/images/home/attraction_4.jpg"
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
            {/* col */}
            <div className="col">
              <a href="tourist-info.html" className="d-block">
                <div className="card attraction-card">
                  <div className="card-body">
                    <img
                      src="/images/home/attraction_1.jpg"
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
                      src="/images/home/attraction_2.jpg"
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
                      src="/images/home/attraction_3.jpg"
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
                      src="/images/home/attraction_4.jpg"
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
      </main>
    </>
  );
}
