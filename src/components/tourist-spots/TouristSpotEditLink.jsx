import { useSelector } from 'react-redux';
import { Link } from 'react-router';

export default function TouristSpotEditLink({ touristSpotId }) {
  const authRole = useSelector((state) => state?.auth.role);
  return (
    <>
      {authRole !== 'guest' && (
        <Link
          to={`/user/tourist-spots/edit/${touristSpotId}`}
          className="align-items-md-end text-gray-600 ms-auto mb-lg-0 mb-6"
        >
          <span className="material-symbols-outlined me-2 align-bottom">
            edit
          </span>
          修正景點資訊
        </Link>
      )}
    </>
  );
}
