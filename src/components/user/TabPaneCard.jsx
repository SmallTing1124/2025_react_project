import { useCallback, useEffect, useState } from 'react';
import TouristSpotCard from '../tourist-spots/TouristSpotCard';
import StatusButtonGroup from './StatusButtonGroup';

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

export default function TabPaneCard({
  type,
  activeTab,
  filterSpotList,
  status,
  setStatus,
  favoriteList,
  wishlistList,
  checkedInList,
}) {
  const [statusCount, setStatusCount] = useState({
    open: 0,
    pause: 0,
    close: 0,
  });
  const updateStatusCount = useCallback(
    (list) => ({
      activeTab,
      all: list?.length || 0,
      open: list?.filter((item) => item?.statusId === 'open')?.length || 0,
      pause: list?.filter((item) => item?.statusId === 'pause')?.length || 0,
      close: list?.filter((item) => item?.statusId === 'close')?.length || 0,
    }),
    [activeTab]
  );

  useEffect(() => {
    if (activeTab === 'favorites') {
      setStatusCount(updateStatusCount(favoriteList));
    } else if (activeTab === 'wishlist') {
      setStatusCount(updateStatusCount(wishlistList));
    } else {
      setStatusCount(updateStatusCount(checkedInList));
    }
  }, [activeTab, favoriteList, wishlistList, checkedInList, updateStatusCount]);

  return (
    <>
      <div
        className={`tab-pane fade ${type === activeTab ? 'show active' : ''}`}
        id={`${type}-tab-pane`}
        role="tabpanel"
        aria-labelledby={`${type}-tab`}
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
    </>
  );
}
