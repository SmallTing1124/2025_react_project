import { Link } from 'react-router';

export default function UserStats() {
  return (
    <div className="row mb-lg-8 mb-4 g-lg-4 g-2">
      <div className="col-4">
        <Link to={"/user/my-map"} className="d-block">
          <div className="card shadow">
            <div className="card-body p-lg-6 p-4 text-lg-start text-center">
              <span>新增景點</span>
              <b className="d-block fs-1 mt-lg-1 mt-2">10</b>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-4">
        <Link to={`/user/my-map`} className="d-block">
          <div className="card shadow">
            <div className="card-body p-lg-6 p-4 text-lg-start text-center">
              <span>編修景點</span>
              <b className="d-block fs-1 mt-lg-1 mt-2">22</b>
            </div>
          </div>
        </Link>
      </div>
      <div className="col-4">
        <Link to={`/user/reviews`} className="d-block">
          <div className="card shadow">
            <div className="card-body p-lg-6 p-4 text-lg-start text-center">
              <span>景點評價</span>
              <b className="d-block fs-1 mt-lg-1 mt-2">35</b>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
