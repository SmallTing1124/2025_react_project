import TouristSpotCard from './TouristSpotCard';
import { useEffect, useState } from 'react';

import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function TouristSpotCardList() {
  const [touristSpotsData, setTouristSpotsData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/locations`);
        setTouristSpotsData(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-6">
      {touristSpotsData.map((touristSpot) => {
        return (
          <div className="col" key={touristSpot.id}>
            <TouristSpotCard touristSpot={touristSpot}></TouristSpotCard>
          </div>
        );
      })}
    </div>
  );
}
