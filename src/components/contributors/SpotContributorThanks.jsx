import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

import { useEffect, useState } from 'react';

import SwiperSpotList from '../../components/contributors/SwiperSpotList';
import formatTimeAgo from '../../utils/formatTimeAgo';

export default function SpotContributorThanks() {
  const [newSpotThankList, setNewSpotThankList] = useState([]);

  const getTouristSpotData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/locations?_expand=user`);
      const updatedList = res.data
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .filter((spot) => spot.user.role !== 'admin')
        .map((spot) => {
          const timeAgo = formatTimeAgo(spot.createdAt);
          return { ...spot, timeAgo };
        });
      setNewSpotThankList(updatedList);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTouristSpotData();
  }, []);

  return (
    <>
      <div className="text-center">
        <div className="page-title">
          <h2 className="font-NaniFont bg-deco-msg text-secondary fs-lg-1 fs-2">
            景點開拓者
            <span className="text-white font-NaniFont d-block">
              Contributors
            </span>
          </h2>
        </div>
        <img
          src="./images/contributors/deco_idea.svg"
          alt="deco_idea"
          style={{ transform: 'translateY(-24px)' }}
          className="mw-100 col-lg-3 col-4"
        />
      </div>
      <SwiperSpotList newSpotThankList={newSpotThankList} />
      <p className="text-center text-gray-600 pt-lg-14 pt-8">
        以上是系統記錄的熱心貢獻者名單，
        <span className="d-lg-inline d-block">
          感謝大家共同收集和整理資料。
        </span>
      </p>
    </>
  );
}
