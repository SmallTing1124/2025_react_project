import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

const statusList = [
  {
    key: 'all',
    label: '全部',
  },
  {
    key: 'open',
    label: '營業中',
  },
  {
    key: 'pause',
    label: '暫停營業',
  },
  {
    key: 'close',
    label: '永久休業',
  },
];
import { useOutletContext } from 'react-router';
import { useEffect, useState } from 'react';
import UserStats from './management/UserStats';
import TabNavButton from '../../components/user/button/TabNavButton';

import StatusButtonGroup from '../../components/user/StatusButtonGroup';
import TouristSpotCard from '../../components/tourist-spots/TouristSpotCard';
import EditHistoryCard from '../../components/tourist-spots/EditHistoryCard';

export default function MyMap() {
  const { userData } = useOutletContext();
  const [activeTab, setActiveTab] = useState('add-maps');
  const [status, setStatus] = useState('all');

  const [touristSpotList, setTouristSpotList] = useState([]);
  const [addSpotList, setaddSpotList] = useState([]);
  const [editSpotList, setEditSpotList] = useState([]);
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

  // 處理 addSpotList & editSpotList
  useEffect(() => {
    if (!userData || !touristSpotList) return; // 確保變數存在

    if (activeTab === 'add-maps') {
      // console.log('addIdFilter:', userData.locations);
      setaddSpotList(userData.locations);
    } else if (activeTab === 'edit-maps') {
      const editIdList =
        userData?.editedSpot?.map((item) => item?.locationId) || [];
      const editIdFilter = touristSpotList?.filter((spot) =>
        editIdList.includes(spot.id)
      );
      // console.log('editIdFilter:', editIdFilter);
      setEditSpotList(editIdFilter);
    }
  }, [activeTab, userData, touristSpotList]);

  useEffect(() => {
    let filteredList = [];
    if (status === 'all') {
      filteredList = activeTab === 'add-maps' ? addSpotList : editSpotList;
    } else {
      filteredList =
        activeTab === 'add-maps'
          ? addSpotList.filter((item) => item.statusId === status)
          : editSpotList.filter((item) => item.statusId === status);
    }
    setFilterSpotList(filteredList);
  }, [status, activeTab, addSpotList, editSpotList]);

  const [statusCount, setStatusCount] = useState({
    open: 0,
    pause: 0,
    close: 0,
  });
  useEffect(() => {
    if (activeTab === 'add-maps') {
      setStatusCount({
        all: addSpotList?.length, // 計算所有景點數量
        open: addSpotList?.filter((item) => item?.statusId === 'open')?.length,
        pause: addSpotList?.filter((item) => item?.statusId === 'pause')
          ?.length,
        close: addSpotList?.filter((item) => item?.statusId === 'close')
          ?.length,
      });
    } else if (activeTab === 'edit-maps') {
      setStatusCount({
        all: editSpotList?.length, // 計算所有景點數量
        open: editSpotList?.filter((item) => item?.statusId === 'open')?.length,
        pause: editSpotList?.filter((item) => item?.statusId === 'pause')
          ?.length,
        close: editSpotList?.filter((item) => item?.statusId === 'close')
          ?.length,
      });
    }
  }, [activeTab, addSpotList, editSpotList]);

  return (
    <>
      <UserStats userData={userData} />
      <ul
        id="myTab"
        className="nav nav-underline mb-lg-8 mb-4 gap-0 border-bottom"
      >
        <TabNavButton
          name="我新增的景點"
          type="add-maps"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></TabNavButton>
        <TabNavButton
          name="編輯過的景點"
          type="edit-maps"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></TabNavButton>
      </ul>

      <div id="myTabContent" className="tab-content">
        {/* tab-pane */}
        <div
          className={`tab-pane fade ${
            'add-maps' === activeTab ? 'show active' : ''
          }`}
          id={`add-maps-tab-pane`}
          role="tabpanel"
          aria-labelledby={`add-maps-tab`}
          tabIndex="0"
        >
          <div className="card shadow">
            <div className="card-body p-lg-8 p-3">
              <StatusButtonGroup
                status={status}
                statusList={statusList}
                setStatus={setStatus}
                statusCount={statusCount}
              />
              <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-lg-4 g-3">
                {filterSpotList?.map((location) => (
                  <div className="col" key={location.id}>
                    <TouristSpotCard touristSpot={location} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`tab-pane fade ${
            'edit-maps' === activeTab ? 'show active' : ''
          }`}
          id={`edit-maps-tab-pane`}
          role="tabpanel"
          aria-labelledby={`edit-maps-tab`}
          tabIndex="0"
        >
          <div className="card shadow">
            <div className="card-body p-lg-8 p-3">
            <StatusButtonGroup
                status={status}
                statusList={statusList}
                setStatus={setStatus}
                statusCount={statusCount}
              />
              <div className="row row-cols-lg-2 row-cols-md-2 row-cols-1 g-lg-4 g-3">
                {filterSpotList?.map((location) => (
                  <div className="col" key={location.id}>
                    <EditHistoryCard touristSpot={location} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
