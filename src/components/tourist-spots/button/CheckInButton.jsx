import { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function CheckInButton({touristSpot, loggedInUserId}) {
  const [usercheckedInData, setUsercheckedInData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const usercheckedIn = touristSpot?.checkedInSpot?.find(
      (checkedInSpot) => String(checkedInSpot.userId) === String(loggedInUserId)
    );
    setUsercheckedInData(usercheckedIn ? usercheckedIn : null);
  }, [touristSpot, loggedInUserId]);

  const handleIscheckedIn = async () => {
    setIsLoading(true)
    try {
      const touristSpotId = touristSpot.id;
      if (usercheckedInData) {
        await axios.delete(
          `${BASE_URL}/checkedInSpot/${usercheckedInData.id}`
        );
        setUsercheckedInData(null);
        setIsLoading(false)
      } else {
        const res = await axios.post(`${BASE_URL}/checkedInSpot`, {
          userId: loggedInUserId,
          locationId: touristSpotId,
          likedAt: new Date(),
        });
        setUsercheckedInData(res.data)
        setIsLoading(false)
      }
    } catch (error) {
      console.log('操作失敗:', error);
      
    }
  };


  return (
    <>
      <div className="btn-itme col-lg-auto col-12">
        <input
          type="checkbox"
          className="btn-check"
          id="pc-btn-check-3"
          autoComplete="off"
          checked={Boolean(usercheckedInData)}
          onChange={handleIscheckedIn}
          disabled={isLoading}
        />
        <label
          className="btn btn-light btn-sm rounded-pill justify-content-center col-lg-auto col-12"
          htmlFor="pc-btn-check-3"
        >
          打卡
          <span className="isUnchecked iconify-add_a_photo material-symbols-outlined">
            add_a_photo
          </span>
          <span className="isChecked material-symbols-outlined icon-filled">
            photo_camera
          </span>
        </label>
      </div>
    </>
  );
}
