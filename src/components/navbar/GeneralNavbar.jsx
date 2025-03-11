import { Link, NavLink } from 'react-router';
import LogoutButton from '../button/LogoutButton';
import LoginButton from '../button/LoginButton';
import RegisterButton from '../button/RegisterButton';
import KeywordSearch from '../SearchForm';
import { useSelector } from 'react-redux';

const routes = [
  { path: '/tourist-spots', name: '景點列表' },
  { path: '/contributors', name: '景點開拓者' },
];
const userRoutes = [
  { path: '/user/my-map', name: '我的地圖', iconName: 'map' },
  { path: '/user/favorites', name: '喜愛景點', iconName: 'favorite' },
  { path: '/user/reviews', name: '景點評價', iconName: 'star' },
  { path: '/user/profile', name: '會員資料', iconName: 'settings' },
];

export default function GeneralNavbar({ currentRole }) {
  const userInfo = useSelector((state) => state?.auth?.user);

  return (
    <nav className="navbar navbar-expand-lg shadow sticky-top w-100 py-lg-4 py-2">
      <div className="container-xl">
        <div className="d-flex flex-nowrap  align-items-center w-100 position-relative">
          <Link to={'/'} className="navbar-brand me-xl-12 me-3">
            <img
              src="./images/logo.svg"
              alt="親子好趣處"
              className="d-none d-lg-block"
            />
            <img
              src="./images/logo-mini.svg"
              alt="親子好趣處"
              className="d-lg-none"
            />
            <h1>親子好趣處 FunFamilyMap</h1>
          </Link>
          <KeywordSearch />
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
                    <NavLink to={route.path} className="nav-link text-center">
                      {route.name}
                    </NavLink>
                  </li>
                );
              })}
              {currentRole && currentRole !== 'guest' && (
                <li className="nav-item">
                  <NavLink
                    to="/user/tourist-spots/add"
                    className="nav-link text-center"
                    title="新增景點"
                  >
                    新增景點
                  </NavLink>
                </li>
              )}
            </ul>
            {currentRole && currentRole == 'admin' && (
              <NavLink to={'/admin/tourist-spots'} className=" btn btn-primary">
                後台管理
              </NavLink>
            )}
            {currentRole && currentRole === 'guest' && (
              <div className="d-flex justify-content-center column-gap-lg-lg-4 column-gap-1">
                <LoginButton classStyle={''} />
                <RegisterButton classStyle={''} />
              </div>
            )}
            {currentRole && currentRole === 'user' && (
              <div className="dropdown">
                {userInfo && (
                  <a
                    href="#"
                    className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src={userInfo?.avatarImgUrl || ''}
                      alt="mdo"
                      width={48}
                      height={48}
                      className="rounded-circle object-fit-cover"
                    />
                  </a>
                )}

                <ul className="dropdown-menu dropdown-menu-end mt-7 pt-0 pb-4">
                  {userInfo && (
                    <li>
                      <div className="d-flex align-items-center py-6 px-8">
                        <div className="flex-shrink-0">
                          <img
                            src={userInfo?.avatarImgUrl || ''}
                            className="rounded-circle  object-fit-cover"
                            alt="user-avatar"
                            width={60}
                            height={60}
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6>{userInfo?.nickname || ''}</h6>
                          <p className="text-gray-600">
                            {userInfo?.email || ''}
                          </p>
                        </div>
                      </div>
                    </li>
                  )}

                  <li>
                    <hr className="dropdown-divider mt-0 mb-4" />
                  </li>
                  {userRoutes.map((route) => {
                    return (
                      <li key={route.name}>
                        <Link
                          className="dropdown-item d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8"
                          to={route.path}
                        >
                          <span className="material-symbols-outlined">
                            {route.iconName}
                          </span>
                          {route.name}
                        </Link>
                      </li>
                    );
                  })}
                  <li>
                    <hr className="dropdown-divider my-4" />
                  </li>
                  <li>
                    <LogoutButton classStyle={'dropdown-item'} />
                  </li>
                </ul>
              </div>
            )}
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
            {currentRole && currentRole !== 'guest' && (
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
            )}
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
                  {routes.map((route) => {
                    return (
                      <li className="nav-item" key={route.path}>
                        <NavLink
                          to={route.path}
                          className="nav-link text-center"
                        >
                          {route.name}
                        </NavLink>
                      </li>
                    );
                  })}
                  {currentRole && currentRole !== 'guest' && (
                    <li className="nav-item">
                      <NavLink
                        to={'/user/tourist-spots/add'}
                        className="nav-link text-center"
                      >
                        新增景點
                      </NavLink>
                    </li>
                  )}
                </ul>
                {currentRole && currentRole === 'guest' && (
                  <div className="d-flex justify-content-center column-gap-6 px-3 mt-auto border-top py-6 position-absolute bottom-0 w-100">
                    <LoginButton classStyle={''} />
                    <RegisterButton classStyle={''} />
                  </div>
                )}
              </div>
            </div>
            {currentRole && currentRole !== 'guest' && (
              <div
                className="tab-pane h-100 fade"
                id="nav-member"
                role="tabpanel"
                aria-labelledby="nav-member-group"
                tabIndex={0}
              >
                <div className="h-100">
                  <ul className="navbar-nav mb-0">
                    {userInfo && (
                      <li>
                        <div className="d-flex align-items-center py-6 px-8 border-bottom">
                          <div className="flex-shrink-0">
                            <img
                              src={userInfo?.avatarImgUrl || ''}
                              className="rounded-circle  object-fit-cover"
                              alt="user-avatar"
                              width={60}
                              height={60}
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6>{userInfo?.nickname || ''}</h6>
                            <p className="text-gray-600">
                              {userInfo?.email || ''}
                            </p>
                          </div>
                        </div>
                      </li>
                    )}

                    {userRoutes.map((route) => {
                      return (
                        <li key={route.name}>
                          <Link
                            className="d-inline-flex align-items-center link-gray-600 gap-3 py-4 px-8 w-100"
                            to={route.path}
                          >
                            <span className="material-symbols-outlined">
                              {route.iconName}
                            </span>
                            {route.name}
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <LogoutButton classStyle={'w-100'} />
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
