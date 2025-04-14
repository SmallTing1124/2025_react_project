import { Link } from 'react-router';

export default function TouristSpotCard({ touristSpot }) {
  return (
    <Link to={`/tourist-spot/${touristSpot.id}`} className="d-block">
      <div className="card attraction-card">
        <div className="card-body">
          <img src={touristSpot.imageUrl} className="rounded-top" alt={touristSpot.name} />
          <h3 className="fs-lg-4 fs-5 fw-bold mb-4">{touristSpot.name}</h3>
          <ul className="list-unstyled d-flex flex-column gap-2">
            <li className="d-flex gap-2 align-items-center">
              <span className="iconify-rivet-icons--map-pin-solid text-secondary" />
              {touristSpot?.location?.city} {touristSpot?.location?.area}
            </li>
            <li className="d-flex gap-2 align-items-center">
              <span className="iconify-mingcute--baby-fill text-secondary" />
              最小適齡 {touristSpot.suitableAge} 歲
            </li>
          </ul>
          <div className="text-end">
            <div className="d-inline-flex align-items-center gap-2 fw-bold text-primary">
              查看詳情
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
