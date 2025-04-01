import { Outlet } from 'react-router';
import GeneralNavbar from '../components/navbar/GeneralNavbar';
import UserSidebar from '../components/sidebar/UserSidebar';
import Footer from '../components/footer/Footer';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import ScrollToTop from '../utils/ScrollToTop';
import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function UserLayout() {
  const currentRole = useSelector((state) => state.auth.role);
  const loggedInUserId = useSelector((state) => state?.auth?.user?.id);
  const [userData, setuserData] = useState({});

  const getUserData = useCallback(async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/users/${loggedInUserId}?_embed=favoriteSpots&_embed=checkedInSpot&_embed=locations&_embed=editedSpot&_embed=comments&_embed=wishlistSpots`
      );
      setuserData(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [loggedInUserId]);

  useEffect(() => {
    getUserData(loggedInUserId);
  }, [loggedInUserId, getUserData]);
  return (
    <>
      <ScrollToTop />
      <GeneralNavbar currentRole={currentRole} />
      <section className="py-lg-14 py-8 bg-light-gray">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block sticky-top">
              <UserSidebar />
            </div>
            <div className="col-lg-9">
              <Outlet context={{ userData }}></Outlet>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
