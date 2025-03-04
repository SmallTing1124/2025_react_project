import { Outlet } from 'react-router';
import GeneralNavbar from '../components/navbar/GeneralNavbar';
import UserSidebar from '../components/sidebar/UserSidebar';
import Footer from '../components/Footer';

export default function UserLayout() {
  return (
    <>
      <GeneralNavbar />
      <section className="py-lg-14 py-8 bg-light-gray">
        <div className="container-xl">
          <div className="row">
            <div className="col-lg-3 d-none d-lg-block sticky-top">
              <UserSidebar/>
            </div>
            <div className="col-lg-9">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
