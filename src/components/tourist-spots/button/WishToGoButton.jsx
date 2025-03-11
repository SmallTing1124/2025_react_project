import { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function WishToGoButton({touristSpot, loggedInUserId}) {
  const [usercheckedInData, setUsercheckedInData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const usercheckedIn = touristSpot?.wishlistSpots?.find(
      (wishlistSpots) => String(wishlistSpots.userId) === String(loggedInUserId)
    );
    setUsercheckedInData(usercheckedIn ? usercheckedIn : null);
  }, [touristSpot, loggedInUserId]);

  const handleIscheckedIn = async () => {
    setIsLoading(true)
    try {
      const touristSpotId = touristSpot.id;
      if (usercheckedInData) {
        await axios.delete(
          `${BASE_URL}/wishlistSpots/${usercheckedInData.id}`
        );
        setUsercheckedInData(null);
        setIsLoading(false)
      } else {
        const res = await axios.post(`${BASE_URL}/wishlistSpots`, {
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
      <div className="btn-item">
        <input
          type="checkbox"
          className="btn-check"
          id="pc-btn-check-2"
          autoComplete="off"
          checked={Boolean(usercheckedInData)}
          onChange={handleIscheckedIn}
          disabled={isLoading}
        />
        <label
          className="btn btn-light btn-sm rounded-pill "
          htmlFor="pc-btn-check-2"
        >
          <span className="d-none d-lg-block">想去的景點</span>
          <span className="isUnchecked iconify-fbookmark_add material-symbols-outlined">
            bookmark_add
          </span>
          <span className="isChecked material-symbols-outlined icon-filled">
            bookmark
          </span>
        </label>
      </div>
    </>
  );
}
