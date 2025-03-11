import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

import { useOutletContext } from 'react-router';
import { useEffect, useState } from 'react';
import UserStats from './management/UserStats';
import TabNavButton from '../../components/user/button/TabNavButton';
import StatusButtonGroup from '../../components/user/StatusButtonGroup';
import TouristSpotCard from '../../components/tourist-spots/TouristSpotCard';
import TabPaneCard from '../../components/user/TabPaneCard';

export default function FavoriteTouristSpots() {
  const { userData } = useOutletContext();
  const [activeTab, setActiveTab] = useState('favorites');
  const [status, setStatus] = useState('all');

  const [touristSpotList, setTouristSpotList] = useState([]);

  const [favoriteList, setFavoriteList] = useState([]);
  const [wishlistList, setWishlistList] = useState([]);
  const [checkedInList, setCheckedInList] = useState([]);

  const [filterSpotList, setFilterSpotList] = useState([]);

  const getTouristSpotList = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/locations`);
      setTouristSpotList(res.data);
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('發生錯誤，請稍後再試');
      }
    }
  };

  useEffect(() => {
    getTouristSpotList();
  }, []);

  useEffect(() => {
    if (!userData || !touristSpotList) return; // 確保變數存在

    if (activeTab === 'favorites') {
      const favoriteIdList =
        userData?.favoriteSpots?.map((item) => item?.locationId) || [];
      const favoriteIdFilter = touristSpotList?.filter((spot) =>
        favoriteIdList.includes(spot.id)
      );
      setFavoriteList(favoriteIdFilter);
    } else if (activeTab === 'wishlist') {
      const wishlIdList =
        userData?.wishlistSpots?.map((item) => item?.locationId) || [];
      const wishlistIdFilter = touristSpotList?.filter((spot) =>
        wishlIdList.includes(spot.id)
      );
      setWishlistList(wishlistIdFilter);
    } else if (activeTab === 'checkedin') {
      const checkedtIdList =
        userData.checkedInSpot?.map((item) => item?.locationId) || [];
      const checkedtIdFilter = touristSpotList?.filter((spot) =>
        checkedtIdList.includes(spot.id)
      );
      setCheckedInList(checkedtIdFilter);
    }
  }, [activeTab, userData, touristSpotList]);

  useEffect(() => {
    let filteredList = [];
    if (status === 'all') {
      if (activeTab === 'favorites') {
        filteredList = favoriteList;
      } else if (activeTab === 'wishlist') {
        filteredList = wishlistList;
      } else if (activeTab === 'checkedin') {
        filteredList = checkedInList;
      }
    } else if (status === 'open') {
      if (activeTab === 'favorites') {
        filteredList = favoriteList.filter((item) => item.statusId === status);
      } else if (activeTab === 'wishlist') {
        filteredList = wishlistList.filter((item) => item.statusId === status);
      } else if (activeTab === 'checkedin') {
        filteredList = checkedInList.filter((item) => item.statusId === status);
      }
    } else if (status === 'pause') {
      if (activeTab === 'favorites') {
        filteredList = favoriteList.filter((item) => item.statusId === status);
      } else if (activeTab === 'wishlist') {
        filteredList = wishlistList.filter((item) => item.statusId === status);
      } else if (activeTab === 'checkedin') {
        filteredList = checkedInList.filter((item) => item.statusId === status);
      }
    } else if (status === 'close') {
      if (activeTab === 'favorites') {
        filteredList = favoriteList.filter((item) => item.statusId === status);
      } else if (activeTab === 'wishlist') {
        filteredList = wishlistList.filter((item) => item.statusId === status);
      } else if (activeTab === 'checkedin') {
        filteredList = checkedInList.filter((item) => item.statusId === status);
      }
    }
    setFilterSpotList(filteredList);
  }, [status, activeTab, favoriteList, wishlistList, checkedInList]);

  return (
    <>
      <UserStats userData={userData} />
      <ul
        id="myTab"
        className="nav nav-underline mb-lg-8 mb-4 gap-0 border-bottom"
      >
        <TabNavButton
          name="喜愛的景點"
          type="favorites"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></TabNavButton>
        <TabNavButton
          name="想去的景點"
          type="wishlist"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></TabNavButton>
        <TabNavButton
          name="已打卡景點"
          type="checkedin"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></TabNavButton>
      </ul>
      
      <div id="myTabContent" className="tab-content">
        <TabPaneCard
          name="喜愛的景點"
          type="favorites"
          activeTab={activeTab}
          filterSpotList={filterSpotList}
          statu={status}
          setStatus={setStatus}
          favoriteList={favoriteList}
          wishlistList={wishlistList}
          checkedInList={checkedInList}
        ></TabPaneCard>
        <TabPaneCard
          name="想去的景點"
          type="wishlist"
          activeTab={activeTab}
          filterSpotList={filterSpotList}
          statu={status}
          setStatus={setStatus}
          favoriteList={favoriteList}
          wishlistList={wishlistList}
          checkedInList={checkedInList}
        />
        <TabPaneCard
          name="已打卡景點"
          type="checkedin"
          filterSpotList={filterSpotList}
          statu={status}
          setStatus={setStatus}
          favoriteList={favoriteList}
          wishlistList={wishlistList}
          checkedInList={checkedInList}
        />
      </div>
    </>
  );
}
