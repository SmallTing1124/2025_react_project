import CheckInButton from './button/CheckInButton';
import FavoriteButton from './button/FavoriteButton';
import WishToGoButton from './button/WishToGoButton';

export default function TouristSpotHeader({ touristSpot, loggedInUserId }) {

  return (
    <>
      <section className="d-flex flex-lg-row flex-column justify-content-between pb-lg-12">
        <div className="touristTitle d-flex mt-lg-0 mt-6">
          <img src="./images/tourist/Open.svg" alt="" />
          <div className="d-flex flex-column ms-3">
            <h1>{touristSpot.name}</h1>
            <div className="d-flex flex-row align-items-center">
              <span className="btn btn-lg btn-secondary flag">
                {touristSpot.statusLabel}
              </span>
              <p className="ps-4">
                {touristSpot?.location?.city} {touristSpot?.location?.area}
              </p>
            </div>
          </div>
        </div>

        <form>
          <div className="btn-group flex-lg-row flex-column align-items-end gap-lg-3 gap-5 w-100">
            <div className="d-flex gap-3">
              <FavoriteButton
                touristSpot={touristSpot}
                loggedInUserId={loggedInUserId}
              />
              <WishToGoButton
                touristSpot={touristSpot}
                loggedInUserId={loggedInUserId}
              />
            </div>
            <CheckInButton
              touristSpot={touristSpot}
              loggedInUserId={loggedInUserId}
            />
          </div>
        </form>
      </section>
    </>
  );
}
