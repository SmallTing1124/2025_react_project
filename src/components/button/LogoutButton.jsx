import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../../redux/authSlice';

export default function LogoutButton({ classStyle }) {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      <div
        className={`${classStyle} d-inline-flex align-items-center gap-3 py-4 px-8 link-gray-600`}
        style={{ cursor: 'pointer' }}
        onClick={handleLogout}
      >
        <span className="material-symbols-outlined">logout</span>
        登出
      </div>
    </>
  );
}
