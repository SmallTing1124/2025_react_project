import { Link } from "react-router";

export default function AdminNavbar() {
  return (
    <>
      <div className="container-scroller ">
        <nav className="navbar fixed-top d-flex">
          <div className="navbar-brand-wrapper text-lg-center d-flex align-items-center">
            <Link to={`/admin/tourist-spots`} className="navbar-brand text-primary brand-logo">
              <img src="src/assets/images/logo.svg" alt="logo" />
              {/* 管理後台 */}
            </Link>
            <Link to={`/admin/tourist-spots`} className="navbar-brand text-primary brand-logo-mini">
              <img src="src/assets/images/logo-mini.svg" alt="logo" />
            </Link>
          </div>
          <div className="navbar-menu-wrapper d-flex justify-content-lg-between justify-content-end align-items-center">
            <button
              className="navbar-toggler navbar-toggler"
              type="button"
              data-toggle="minimize"
            >
              <i className="bi bi-list" />
            </button>
            <ul className="navbar-nav  flex-row   align-items-center">
              <div className="dropdown d-lg-block d-none">
                <a
                  className="btn dropdown-toggle"
                  href="#"
                  role="button"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="nav-profile-img">
                    <i className="bi bi-person-circle text-primary" />
                  </div>
                </a>
                <ul className="dropdown-menu" aria-labelledby="profileDropdown">
                  <a className="dropdown-item" href="admin_pass.php">
                    <i className="bi bi-person-fill text-primary me-2" />
                    修改密碼
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="admin_login.php">
                    <i className="bi bi-box-arrow-right  me-2 text-primary" />
                    登出
                  </a>
                </ul>
              </div>
              <Link to={"/"} className="btn mx-4 d-lg-block d-none">
                返回前台頁面 <i className="bi bi-box-arrow-in-up-right" />
              </Link>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-toggle="offcanvas"
              >
                <i className="bi bi-list" />
              </button>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
