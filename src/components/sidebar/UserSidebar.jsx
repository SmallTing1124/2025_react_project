import { Link, useLocation } from 'react-router';
import LogoutButton from '../button/LogoutButton';
import { useSelector } from 'react-redux';

const userRoutes = [
  { path: '/user/my-map', name: '我的地圖', iconName: 'map' },
  { path: '/user/favorites', name: '喜愛景點', iconName: 'favorite' },
  { path: '/user/reviews', name: '景點評價', iconName: 'star' },
  { path: '/user/profile', name: '會員資料', iconName: 'settings' },
];

export default function UserSidebar() {
  const userInfo = useSelector((state) => state?.auth?.user);
  const location = useLocation(); 
  const activeRoute = userRoutes.find(
    (route) => route.path === location.pathname
  );

  return (
    <>
      <div className="card shadow">
        <div className="card-body px-0">
          {userInfo && (
            <div className="d-flex flex-column align-items-center text-center py-6 border-bottom">
              <div className="flex-shrink-0">
                <img
                  src={userInfo.avatarImgUrl || './images/user-avatar.png'}
                  className="rounded-circle object-fit-cover"
                  alt="user-avatar"
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex-grow-1">
                <h4 className="py-3">{userInfo.nickname}</h4>
                <p className="text-gray-600">{userInfo.email}</p>
              </div>
            </div>
          )}
          <ul className="list-unstyled m-0 py-4 border-bottom user-aside">
            {userRoutes.map((route) => {
              const isActive = activeRoute === route;
              return (
                <li key={route.name}>
                  <Link
                    className={`btn-link d-inline-flex align-items-center gap-3 py-4 px-8 w-100 
                      ${isActive ? 'active' : ''}`}
                    to={route.path}
                  >
                    <span
                      className={`material-symbols-outlined ${
                        isActive ? 'icon-filled' : ''
                      }`}
                    >
                      {route.iconName}
                    </span>
                    {route.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LogoutButton classStyle={'mt-4 w-100'} />
        </div>
      </div>
    </>
  );
}
