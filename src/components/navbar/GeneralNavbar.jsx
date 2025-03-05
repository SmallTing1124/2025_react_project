import { Link } from 'react-router';

const routes = [
  { path: '/tourist-spots', name: '景點列表' },
  { path: '/contributors', name: '景點開拓者' },
  { path: '/user/tourist-spots/add', name: '新增景點' },
];

export default function GeneralNavbar() {
  return (
    <nav className="navbar navbar-expand-lg shadow sticky-top w-100 py-lg-4 py-2">
      <div className="container-xl">
        <div className="d-flex flex-nowrap  align-items-center w-100 position-relative">
          <Link className="navbar-brand me-xl-12 me-3" href="/">
            <img
              src="/images/logo.svg"
              alt="親子好趣處"
              className="d-none d-lg-block"
            />
            <img
              src="/images/logo-mini.svg"
              alt="親子好趣處"
              className="d-lg-none"
            />
            <h1>親子好趣處 FunFamilyMap</h1>
          </Link>
          <form
            id="searchForm"
            className="px-lg-4 px-2 rounded-pill ms-lg-0 ms-auto"
            role="search"
          >
            <label htmlFor="searchInput" className="d-flex align-items-center">
              <span className="material-symbols-outlined">search</span>
            </label>
            <input
              className="form-control py-3 px-0"
              id="searchInput"
              type="search"
              placeholder="您想要找什麼景點？"
              aria-label="Search"
            />
          </form>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            data-bs-auto-close="outside"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <div className="d-none d-lg-inline-flex align-items-center column-gap-xl-6 column-gap-1 ms-auto">
            <ul className="navbar-nav mb-0 column-gap-xl-6 column-gap-1">
              {routes.map((route) => {
                return (
                  <li className="nav-item" key={route.path}>
                    <Link to={route.path} className="nav-link text-center">
                      {route.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="d-flex justify-content-center column-gap-lg-lg-4 column-gap-1">
              <Link
                to={'/auth/login'}
                className="btn rounded-pill btn-sm btn-white w-lg-auto w-100 justify-content-center"
              >
                登入
              </Link>
              <Link
                to={'/auth/register'}
                className="btn rounded-pill btn-sm btn-primary w-lg-auto w-100 justify-content-center"
              >
                註冊
              </Link>
            </div>
            <div className="dropdown">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/images/user-avatar.jpg"
                  alt="mdo"
                  width={48}
                  height={48}
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu dropdown-menu-end mt-7 pt-0 pb-4">
                <li>
                  <div className="d-flex align-items-center py-6 px-8">
                    <div className="flex-shrink-0">
                      <img
                        src="/images/user-avatar.jpg"
                        className="rounded-circle"
                        alt="user-avatar"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6>陳大廷</h6>
                      <p className="text-gray-600">userName@mail.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider mt-0 mb-4" />
                </li>

                <li>
                  <Link
                    className="dropdown-item d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8"
                    to={`/user/my-map`}
                  >
                    <span className="material-symbols-outlined">map</span>
                    我的地圖
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8"
                    to={`/user/favorites`}
                  >
                    <span className="material-symbols-outlined">favorite</span>
                    喜愛景點
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8"
                    to={`/user/reviews`}
                  >
                    <span className="material-symbols-outlined">star</span>
                    景點評價
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8"
                    to={`/user/profile`}
                  >
                    <span className="material-symbols-outlined">settings</span>
                    會員資料
                  </Link>
                  <Link
                    className="dropdown-item d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8"
                    to={`/admin/tourist-spots`}
                  >
                    <span className="material-symbols-outlined">settings</span>
                    後台管理
                  </Link>

                  
                </li>
                <li>
                  <hr className="dropdown-divider my-4" />
                </li>
                <li>
                  <a
                    className="dropdown-item  d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8"
                    href="#"
                  >
                    <span className="material-symbols-outlined">logout</span>
                    登出
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul
            className="nav nav-underline nav-justified w-100 column-gap-0 border-top"
            id="nav-tab"
            role="tablist"
          >
            <li className="nav-item">
              <button
                className="nav-link active"
                id="nav-menu-group"
                data-bs-toggle="tab"
                data-bs-target="#nav-menu"
                type="button"
                role="tab"
                aria-controls="nav-menu"
                aria-selected="true"
              >
                探索
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="nav-member-group"
                data-bs-toggle="tab"
                data-bs-target="#nav-member"
                type="button"
                role="tab"
                aria-controls="nav-member"
                aria-selected="false"
              >
                關於我
              </button>
            </li>
          </ul>
          <div className="tab-content  w-100 h-100" id="nav-tabContent">
            <div
              className="tab-pane h-100 fade show active"
              id="nav-menu"
              role="tabpanel"
              aria-labelledby="nav-menu-group"
              tabIndex={0}
            >
              <div className="d-flex flex-column h-100 py-6">
                <ul className="navbar-nav mb-0 row-gap-6">
                  <li className="nav-item">
                    <a
                      className="nav-link text-center"
                      href="tourist-spots.html"
                    >
                      景點列表
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-center"
                      href="contributors.html"
                    >
                      景點開拓者
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-center" href="#">
                      新增景點
                    </a>
                  </li>
                </ul>
                <div className="d-flex justify-content-center column-gap-6 px-3 mt-auto border-top py-6 position-absolute bottom-0 w-100">
                  <a
                    href=""
                    className="btn rounded-pill btn-sm btn-white w-lg-auto w-100 justify-content-center"
                  >
                    登入
                  </a>
                  <a
                    href=""
                    className="btn rounded-pill btn-sm btn-primary w-lg-auto w-100 justify-content-center"
                  >
                    註冊
                  </a>
                </div>
              </div>
            </div>
            <div
              className="tab-pane h-100 fade"
              id="nav-member"
              role="tabpanel"
              aria-labelledby="nav-member-group"
              tabIndex={0}
            >
              <div className="h-100">
                <ul className="navbar-nav mb-0">
                  <li>
                    <div className="d-flex align-items-center py-6 px-8 border-bottom">
                      <div className="flex-shrink-0">
                        <img
                          src="/images/user-avatar.jpg"
                          className="rounded-circle"
                          alt="user-avatar"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6>陳大廷</h6>
                        <p className="text-gray-600">userName@mail.com</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a
                      className="d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8 w-100"
                      href="user-maps.html"
                    >
                      <span className="material-symbols-outlined">map</span>
                      我的地圖
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8 w-100"
                      href="#"
                    >
                      <span className="material-symbols-outlined">
                        favorite
                      </span>
                      喜愛景點
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8 w-100"
                      href="#"
                    >
                      <span className="material-symbols-outlined">star</span>
                      景點評價
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8 w-100"
                      href="#"
                    >
                      <span className="material-symbols-outlined">
                        settings
                      </span>
                      會員資料
                    </a>
                  </li>
                  <li>
                    <a
                      className=" d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8 w-100"
                      href="#"
                    >
                      <span className="material-symbols-outlined">logout</span>
                      登出
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
