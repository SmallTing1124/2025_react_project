export default function TouristSpotForm() {
  return (
    <>
      <section className="p-lg-15 p-0 py-13  bg-normal-gray tourist-edit">
        {/* title */}
        <div className="container">
          <div className="bg-white rounded px-lg-10 px-3">
            <div className="tourist-add mt-7 pb-5 position-relative">
              <div className="tourist-add-title d-flex flex-column align-items-center">
                <img
                  className="position-absolute"
                  src="./images/tourist/Open.svg"
                  alt=""
                />
                <div className="tourist-add-text font-NaniFont text-center mt-13 px-8">
                  <h1 className="text-primary ">新增景點</h1>
                  <span className="text-primary">Add New Location</span>
                </div>
              </div>
            </div>
            <h3 className="add-tourist-form-title font-NaniFont text-lg-start text-center">
              <b className="bg-secondary text-primary">景點資訊</b>
            </h3>
            <div className="add-tourist-form g-3 pb-lg-14 pt-5  pb-1">
              <form>
                <div className="row mb-4">
                  <label
                    htmlFor="inputTouristName"
                    className="col-md-2 col-form-label"
                  >
                    景點名稱<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control  rounded-1"
                      id="inputTouristName"
                      placeholder="請輸入景點名稱"
                    />
                  </div>
                </div>
                <div className="row align-items-center mb-4">
                  <label
                    htmlFor="inputCity"
                    className="col-md-2 col-form-label"
                  >
                    景點位置<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <div className="row g-2">
                      <div className="col-md-6">
                        <select
                          className="form-select rounded-1"
                          aria-label="Default select example"
                          id="inputCity"
                        >
                          <option selected="">選擇景點縣市</option>
                          <option value="台北市">台北市</option>
                          <option value="新北市">新北市</option>
                          <option value="桃園市">桃園市</option>
                          <option value="台中市">台中市</option>
                          <option value="台南市">台南市</option>
                          <option value="高雄市">高雄市</option>
                          <option value="基隆市">基隆市</option>
                          <option value="新竹市">新竹市</option>
                          <option value="嘉義市">嘉義市</option>
                          <option value="新竹縣">新竹縣</option>
                          <option value="苗栗縣">苗栗縣</option>
                          <option value="彰化縣">彰化縣</option>
                          <option value="南投縣">南投縣</option>
                          <option value="雲林縣">雲林縣</option>
                          <option value="嘉義縣">嘉義縣</option>
                          <option value="屏東縣">屏東縣</option>
                          <option value="宜蘭縣">宜蘭縣</option>
                          <option value="花蓮縣">花蓮縣</option>
                          <option value="台東縣">台東縣</option>
                          <option value="澎湖縣">澎湖縣</option>
                          <option value="金門縣">金門縣</option>
                          <option value="連江縣（馬祖）">連江縣（馬祖）</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-select rounded-1"
                          aria-label="Default select example"
                          id="inputDistrict"
                        >
                          <option selected="">選擇景點地區</option>
                          <option value={1}>中正區</option>
                          <option value={2}>大同區</option>
                          <option value={3}>中山區</option>
                          <option value={1}>松山區</option>
                          <option value={2}>大安區</option>
                          <option value={3}>萬華區</option>
                          <option value={1}>信義區</option>
                          <option value={2}>士林區</option>
                          <option value={3}>北投區</option>
                          <option value={1}>內湖區</option>
                          <option value={2}>南港區</option>
                          <option value={3}>文山區</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <label
                    htmlFor="inputAddress"
                    className="col-md-2 col-form-label"
                  >
                    詳細地址<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <input
                      type="test"
                      className="form-control  rounded-1"
                      id="inputAddress"
                      placeholder="請填寫景點地址"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <label htmlFor="inputTel" className="col-md-2 col-form-label">
                    聯絡電話<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <input
                      type="tel"
                      className="form-control rounded-1"
                      id="inputTel"
                      placeholder="請填寫景點聯絡電話"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <label
                    htmlFor="inputOpenTime"
                    className="col-md-2 col-form-label"
                  >
                    營業時間<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <button
                      type="button"
                      className="btn btn-primary w-100 d-flex justify-content-center rounded-1"
                    >
                      新增營業時間
                      <span className="iconify-mingcute--time-fill" />
                    </button>
                  </div>
                </div>
                <div className="row align-items-center mb-4">
                  <label
                    htmlFor="inputOpenTime"
                    className="col-md-2 col-form-label"
                  >
                    經營狀態<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <div className="row gx-2">
                      <div className="col">
                        <div className="form-check check-status">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="statusRadios"
                            id="btn-open-check"
                            defaultValue="status-open"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label label-open"
                            htmlFor="btn-open-check"
                          >
                            <i className="icon-open" />
                            <span>營業中</span>
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check check-status">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="statusRadios"
                            id="btn-pause-check"
                            defaultValue="status-pause"
                          />
                          <label
                            className="form-check-label label-pause"
                            htmlFor="btn-pause-check"
                          >
                            <i className="icon-pause" />
                            <span>暫停營業</span>
                          </label>
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-check check-status">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="statusRadios"
                            id="btn-close-check"
                            defaultValue="status-close"
                          />
                          <label
                            className="form-check-label label-close"
                            htmlFor="btn-close-check"
                          >
                            <i className="icon-close" />
                            <span>永久休業</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mb-4">
                  <label
                    htmlFor="potCategory"
                    className="col-md-2 col-form-label"
                  >
                    景點類別<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <div className="row g-2">
                      <div className="col-md-6">
                        <select
                          className="form-select rounded-1"
                          id="inputCity"
                        >
                          <option selected="">選擇景點類別</option>
                          <option value="自然景觀">自然景觀</option>
                          <option value="探索學習">探索學習</option>
                          <option value="戶外活動">戶外活動</option>
                          <option value="娛樂設施">娛樂設施</option>
                          <option value="休閒遊憩">休閒遊憩</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <select
                          className="form-select rounded-1"
                          id="inputDistrict"
                        >
                          <option selected="">選擇景點項目</option>
                          <option value="海邊">海邊</option>
                          <option value="河邊">河邊</option>
                          <option value="爬山">爬山</option>
                          <option value="森林">森林</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <label
                    htmlFor="suitableAge"
                    className="col-md-2 col-form-label"
                  >
                    適合年紀<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <input
                      type="number"
                      className="form-control rounded-1"
                      id="suitableAge"
                      name="suitableAge"
                      min={0}
                      max={12}
                      placeholder="請填寫最小適合年紀"
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <label
                    htmlFor="expenseAmount"
                    className="col-md-2 col-form-label"
                  >
                    消費金額<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <input
                      type="number"
                      className="form-control rounded-1"
                      id="expenseAmount"
                      name="expenseAmount"
                      placeholder="請填寫消費金額"
                      min={0}
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <label
                    htmlFor="inputNearbyFacilitiese"
                    className="col-md-2 col-form-label"
                  >
                    周邊環境<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10 d-flex flex-wrap gap-2">
                    <div className="form-check form-check-inline btn-form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="parking"
                        id="NearbyParking"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="NearbyParking"
                      >
                        <span className="iconify-mingcute--parking-fill" />
                        停車場
                      </label>
                    </div>
                    <div className="form-check form-check-inline btn-form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="restroom"
                        id="NearbyRestroom"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="NearbyRestroom"
                      >
                        <span className="material-symbols-outlined ">wc </span>
                        廁所
                      </label>
                    </div>
                    <div className="form-check form-check-inline btn-form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="nursingRoom"
                        id="NearbyNursingRoom"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="NearbyNursingRoom"
                      >
                        <span className="iconify-mdi--mother-nurse " />
                        哺乳室
                      </label>
                    </div>
                    <div className="form-check form-check-inline btn-form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="babyCareRoom"
                        id="NearbyBabyCareRoom"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="NearbyBabyCareRoom"
                      >
                        <span className="iconify-material-symbols--baby-changing-station-rounded " />
                        育嬰室
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <label
                    htmlFor="inputTransport"
                    className="col-md-2 col-form-label"
                  >
                    交通工具<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10 d-flex flex-wrap gap-2">
                    <div className="form-check form-check-inline btn-form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="parking"
                        id="transportMetro"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="transportMetro"
                      >
                        <span className="iconify-mingcute--parking-fill" />
                        捷運
                      </label>
                    </div>
                    <div className="form-check form-check-inline btn-form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="restroom"
                        id="transportBus"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="transportBus"
                      >
                        <span className="iconify-mdi--bus" />
                        公車
                      </label>
                    </div>
                    <div className="form-check form-check-inline btn-form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="nursingRoom"
                        id="transportCar"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="transportCar"
                      >
                        <span className="iconify-ri--car-fill " />
                        汽車
                      </label>
                    </div>
                    <div className="form-check form-check-inline btn-form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue="nursingRoom"
                        id="transportUbike"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="transportUbike"
                      >
                        <span className="icons-bike" />
                        ubike
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <label
                    htmlFor="inputOpenTime"
                    className="col-md-2 col-form-label"
                  >
                    新增標籤<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <ul className="list-inline d-flex flex-row flex-wrap gap-2">
                      <li>
                        <a className="btn tag border-2" role="button">
                          <span className="text-primary">#</span>
                          探索學習
                        </a>
                      </li>
                      <a className="btn tag border-2" role="button">
                        <span className="text-primary">#</span>
                        動物園
                      </a>
                      <li className="newTag">
                        <button
                          className="btn tag tag-add"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseExample"
                          aria-expanded="false"
                          aria-controls="collapseExample"
                        >
                          <span className="material-symbols-outlined">
                            add_circle
                          </span>
                          新增標籤
                        </button>
                      </li>
                    </ul>
                    <div className="collapse" id="collapseExample">
                      <div className="col-lg-6  mb-5">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="請填景點標籤"
                          />
                          <button
                            className="btn btn-primary"
                            type="button"
                            id="addTag"
                          >
                            新增
                          </button>
                        </div>
                        <small className="text-gray-600 d-inline-block ps-6 pt-3">
                          再次點擊你提交的標籤可刪除。
                          <br />{' '}
                          為了管理質量，新建的標籤需審核，審核結果不會另外通知
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <label
                    htmlFor="inputTouristName"
                    className="col-md-2 col-form-label"
                  >
                    景點簡介<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <textarea
                      className="form-control  rounded-1"
                      id="inputTouristName"
                      placeholder="請填寫敘述，最多300文字"
                      max={300}
                      rows={5}
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <label
                    htmlFor="inputTouristName"
                    className="col-md-2 col-form-label"
                  >
                    注意事項<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <textarea
                      className="form-control  rounded-1"
                      id="inputTouristName"
                      placeholder="請填寫注意事項，最多300文字"
                      max={300}
                      rows={5}
                      defaultValue={''}
                    />
                  </div>
                </div>
                <h3 className="add-tourist-form-title font-NaniFont text-lg-start text-center">
                  <b className="bg-secondary text-primary">景點圖片</b>
                </h3>
                <div className="row mt-3 mb-4">
                  <label
                    htmlFor="inputTouristName"
                    className="col-md-2 col-form-label"
                  >
                    主要照片<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <a className="" href="#" role="button"></a>
                    <label
                      htmlFor="mainImgFile"
                      className="btn tag tag-add mb-4"
                    >
                      <span className="material-symbols-outlined">
                        add_circle
                      </span>
                      新增主要照片
                    </label>
                    <input
                      className="form-control d-none"
                      type="file"
                      id="mainImgFile"
                    />
                    <div className="row gx-2">
                      <div className="col-md-6">
                        <img
                          className="img-fluid"
                          src="./images/tourist/attraction_1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <label
                    htmlFor="inputTouristName"
                    className="col-md-2 col-form-label"
                  >
                    補充照片<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <a className="" href="#" role="button"></a>
                    <label
                      htmlFor="multipleImgFile"
                      className="btn tag tag-add mb-4"
                    >
                      <span className="material-symbols-outlined">
                        add_circle
                      </span>
                      新增補充照片
                    </label>
                    <input
                      className="form-control d-none"
                      type="file"
                      id="multipleImgFile"
                      multiple=""
                    />
                    <div className="row g-2">
                      <div className="col-md-4 col-6">
                        <img
                          className="img-fluid"
                          src="./images/tourist/attraction_1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-4 col-6">
                        <img
                          className="img-fluid"
                          src="./images/tourist/attraction_1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="col-md-4 col-6">
                        <img
                          className="img-fluid"
                          src="./images/tourist/attraction_1.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-10">
            <button type="button" className="btn btn-white me-3 px-10 px-md-15">
              返回
            </button>
            <button type="button" className="btn btn-primary px-10 px-md-15">
              儲存
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
