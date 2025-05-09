import { useEffect, useState } from 'react';

import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

import TouristSpotCardList from '../../components/tourist-spots/TouristSpotCardList';
import FilterPanel from '../../components/search-bar/FilterPanel';

export default function TouristSpotsList() {
  const [touristSpotsData, setTouristSpotsData] = useState([]);
  const [filtertouristSpots, setFiltertouristSpots] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${BASE_URL}/locations`);
        const data = res.data.sort(() => Math.random() - 0.5);
        setTouristSpotsData(data);
        setFiltertouristSpots(data);
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
                <div
                  className="page-title
                "
                >
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
                      alt="deco-cat"
                      src="./images/home/deco-cat.svg"
                      width={200}
                      style={{ transform: 'translateY(16px)' }}
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
