import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import GeneralNavbar from '../components/navbar/GeneralNavbar';
import { useSelector } from 'react-redux';
import ScrollToTop from '../utils/ScrollToTop';

export default function MainLayout() {
  const currentRole = useSelector((state) => {
    return state.auth.role;
  });

  return (
    <>
      <ScrollToTop />
      <GeneralNavbar currentRole={currentRole} />
      <Outlet />
      <Footer />
    </>
  );
}
