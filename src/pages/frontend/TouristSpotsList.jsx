import { useEffect, useState } from 'react';

import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

import TouristSpotCardList from '../../components/tourist-spots/TouristSpotCardList';
import FilterPanel from '../../components/search-bar/FilterPanel';

export default function TouristSpotsList() {
  // 取得景點列表
  const [touristSpotsData, setTouristSpotsData] = useState([]);
  const [filtertouristSpots, setFiltertouristSpots] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/locations`);
        setTouristSpotsData(res.data);
        setFiltertouristSpots(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);



  return (
    <>
      <section
        className="pt-lg-15 pt-12 pb-0"
        style={{ background: 'url(./images/home/bg-light.jpg)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="page-title pb-13">
                  <h2 className="font-NaniFont text-primary fs-lg-1 fs-2">
                    親子景點篩選
                  </h2>
                  <p className="text-primary fs-3 font-NaniFont">
                    Search Filter bar
                  </p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-5">
                    <img
                      src="./images/home/deco-cat.svg"
                      width={315}
                      style={{ transform: 'translateY(-56px)' }}
                      className="mw-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FilterPanel
        setFiltertouristSpots={setFiltertouristSpots}
        touristSpotsData={touristSpotsData}
      />
      <main className="pt-12 pb-15 bg-normal-gray">
        <div className="container">
          <TouristSpotCardList filtertouristSpots={filtertouristSpots} />
        </div>
      </main>
    </>
  );
}
