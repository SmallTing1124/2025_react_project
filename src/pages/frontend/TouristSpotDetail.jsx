import statusOptionsData from '../../assets/json/status_options.json';
import facilityOptionsData from '../../assets/json/facility_options.json';
import transportOptionsData from '../../assets/json/transport_options.json';

const statusOptions = statusOptionsData; // 取得營業狀態
const facilityOptions = facilityOptionsData; // 取得設施狀態
const transportOptions = transportOptionsData; // 取得交通狀態

import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';



import TouristSpotImages from '../../components/tourist-spots/TouristSpotImages';
import TabNavigation from '../../components/tourist-spots/TabNavigation';
import TouristSpotEditLink from '../../components/tourist-spots/TouristSpotEditLink';
import TouristSpotHeader from '../../components/tourist-spots/TouristSpotHeader';
import TabContent from '../../components/tourist-spots/TabContent';
import ThanksSection from '../../components/tourist-spots/ThanksSection';

export default function TouristSpotsDetail() {
  // loggedInUserId : 當前登入的使用者id
  const loggedInUserId = useSelector((state) => state?.auth?.user?.id);
  const { id: touristSpotId } = useParams();
  const [touristSpot, setTouristSpot] = useState({});

  const getTouristSpotData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/locations/${touristSpotId}?_embed=favoriteSpots&_embed=checkedInSpot&_embed=wishlistSpots`);
      setTouristSpot(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTouristSpotData(touristSpotId);
  }, [touristSpotId]);

  useEffect(() => {
    setTouristSpot((prev) => ({
      ...prev,
      statusLabel:
        statusOptions.find((option) => touristSpot.statusId === option.key)
          ?.label || '未知狀態',
      facilityLabels: facilityOptions.filter((option) =>
        touristSpot?.facilities?.includes(option.key)
      ),
      transportLabels: transportOptions.filter((option) =>
        touristSpot?.transport?.includes(option.key)
      ),
    }));
  }, [
    statusOptions,
    touristSpot.statusId,
    touristSpot.facilities,
    touristSpot.transport,
  ]);

  return (
    <>
      <section className="pt-lg-15 pt-12">
        <div className="container-xl">
          <div className="d-flex flex-column-reverse flex-lg-column">
            <TouristSpotHeader touristSpot={touristSpot} loggedInUserId={loggedInUserId}/>
            <TouristSpotImages touristSpot={touristSpot} />
          </div>
          <div className="d-flex flex-column-reverse flex-md-row justify-content-between align-items-baseline pt-12 ">
            <TabNavigation />
            <TouristSpotEditLink touristSpotId={touristSpotId} />
          </div>
        </div>
      </section>
      <main className="pt-12 pb-15 bg-normal-gray">
        <div className="container-xl">
          <TabContent touristSpot={touristSpot}  loggedInUserId={loggedInUserId}/>
        </div>
      </main>
      <ThanksSection touristSpot={touristSpot} />
      <div id="liveAlertPlaceholder"  />
    </>
  );
}
