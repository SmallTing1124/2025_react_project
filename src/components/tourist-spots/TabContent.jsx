import TouristSpotReview from '../../components/tourist-spots/TouristSpotReview';
import TouristSpotDetailInfo from '../../components/tourist-spots/TouristSpotDetailInfo';
import TouristTags from '../../components/tourist-spots/TouristTags';
import TouristSpotDescription from '../../components/tourist-spots/TouristSpotDescription';

export default function TabContent({ touristSpot }) {
  return (
    <div className="tab-content pt-md-12 pt-4 mx-md-5" id="nav-tabContent">
      <div
        className="tab-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div className="row">
          <TouristSpotDetailInfo title="景點資訊" touristSpot={touristSpot} />
          <TouristTags title="景點標籤" touristSpot={touristSpot} />
        </div>
      </div>

      <div
        className="tab-pane fade"
        id="nav-profile"
        role="tabpanel"
        aria-labelledby="nav-profile-tab"
      >
        <TouristSpotDescription title="景點簡介" touristSpot={touristSpot} />
      </div>
      {/* 景點評價 */}
      <div
        className="tab-pane fade"
        id="nav-contact"
        role="tabpanel"
        aria-labelledby="nav-contact-tab"
      >
        <TouristSpotReview title="景點評價" touristSpot={touristSpot} />
      </div>
    </div>
  );
}
