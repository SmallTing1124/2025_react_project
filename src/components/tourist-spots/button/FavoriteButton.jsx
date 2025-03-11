import { useEffect, useState } from 'react';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function FavoriteButton({ touristSpot, loggedInUserId }) {
  const [userFavoriteData, setUserFavoriteData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userFavorite = touristSpot?.favoriteSpots?.find(
      (favoriteSpot) => String(favoriteSpot.userId) === String(loggedInUserId)
    );
    setUserFavoriteData(userFavorite ? userFavorite : null);
  }, [touristSpot, loggedInUserId]);

  const handleIsFavorite = async () => {
    setIsLoading(true)
    try {
      const touristSpotId = touristSpot.id;
      if (userFavoriteData) {
        await axios.delete(
          `${BASE_URL}/favoriteSpots/${userFavoriteData.id}`
        );
        setUserFavoriteData(null);
        setIsLoading(false)
      } else {
        const res = await axios.post(`${BASE_URL}/favoriteSpots`, {
          userId: loggedInUserId,
          locationId: touristSpotId,
          likedAt: new Date(),
        });
        setUserFavoriteData(res.data)
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
          id="pc-btn-check"
          autoComplete="off"
          checked={Boolean(userFavoriteData)}
          onChange={handleIsFavorite}
          disabled={isLoading}
        />
        <label
          className="btn btn-light btn-sm rounded-pill"
          htmlFor="pc-btn-check"
        >
          <span className="d-none d-lg-block">喜愛的景點</span>
          <span className="isUnchecked iconify-favorite_add" />
          <span className="isChecked material-symbols-outlined icon-filled">
            favorite
          </span>
        </label>
      </div>
    </>
  );
}
