import { useState } from 'react';
import taiwanRegionsData from '../../assets/json/taiwan_regions.json';

export default function SearchBarArea() {
  const taiwanRegions = taiwanRegionsData; // 取得台灣地區資料
  const [searchCity, setSearchCity] = useState(null);
  

  return (
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
                  <li
                    key="不限"
                    onClick={() => {
                      setSearchCity(-1); // 設定為 -1，表示選擇 "不限"
                    }}
                  >
                    <button className="btn">不限</button>
                  </li>
                  {taiwanRegions.map((taiwanRegion, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          setSearchCity(index);
                        }}
                      >
                        <button className="btn">{taiwanRegion.city}</button>
                      </li>
                    );
                  })}
                </ul>
                <ul className="districtGroup list-unstyled mb-0">
                  {taiwanRegions[searchCity]?.areas.length > 0 && (
                    <li className="py-3 px-6 d-flex justify-content-evenly">
                      <label htmlFor="all">全部</label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name="all"
                        id="all"
                        checked
                      />
                    </li>
                  )}

                  {searchCity >= 0 &&
                    taiwanRegions[searchCity]?.areas.length > 0 &&
                    taiwanRegions[searchCity]?.areas?.map((area) => {
                      return (
                        <li
                          key={area}
                          className="py-3 px-6 d-flex justify-content-evenly"
                        >
                          <label htmlFor={area}>{area} </label>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            name={area}
                            id={area}
                          />
                        </li>
                      );
                    })}
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
                  <label htmlFor="customRange2" className="form-label">
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
        <button className="btn btn-secondary btn-search" type="submit">
          搜尋
        </button>
      </form>
    </div>
  );
}
