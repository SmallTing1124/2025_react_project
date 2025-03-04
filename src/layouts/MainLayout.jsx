import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import GeneralNavbar from '../components/navbar/GeneralNavbar';

export default function MainLayout() {
  return (
    <>
      <GeneralNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
