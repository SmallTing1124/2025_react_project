import axios from 'axios';
import { useEffect, useState } from 'react';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function ThanksSection({ touristSpot }) {
  const [userInfo, setUserInfo] = useState({});
  const getUserDate = async (userId) => {
    try {
      const res = await axios.get(`${BASE_URL}/users/${userId}`);
      setUserInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (touristSpot.userId) {
      getUserDate(touristSpot.userId);
    }
  }, [touristSpot.userId]);
  return (
    <>
      {touristSpot.userId && (
        <div className="thanks d-flex bg-dark-gray flex-row justify-content-center align-items-center gap-2 py-4">
          特別感謝・
          <div className="flex-shrink-0">
            <img
              src={userInfo?.avatarImgUrl || './images/user-avatar.png'}
              className="rounded-circle object-fit-cover"
              alt="user-avatar"
              width={30}
              height={30}
            />
          </div>
          {userInfo.nickname}
        </div>
      )}
    </>
  );
}
