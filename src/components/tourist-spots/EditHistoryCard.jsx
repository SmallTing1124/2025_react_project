import { Link } from 'react-router';

export default function EditHistoryCard({ touristSpot }) {
  return (
    <>
      <Link to={`/tourist-spot/${touristSpot.id}`}>
        <div className="card">
          <div className="card-body">
            <div className="d-flex mb-2 fs-lg-6 fs-7">
              <span className="text-gray-600">
                2天前
                {/* {touristSpot.createdAt} */}
              </span>
              <span>編修</span>
              <span className="text-primary">
                {touristSpot?.location?.city}
                {touristSpot?.location?.area}
              </span>
            </div>
            <h4 className="fw-bold text-primary fs-lg-4 fs-5">
              {touristSpot?.name}
            </h4>
          </div>
        </div>
      </Link>
    </>
  );
}
