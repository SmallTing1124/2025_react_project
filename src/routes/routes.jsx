import { createHashRouter } from 'react-router';
import NotFound from '../pages/error/NotFound';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Frontend/HomePage';
import TouristSpotsList from '../pages/Frontend/TouristSpotsList';
import TouristSpotsDetail from '../pages/Frontend/TouristSpotDetail';
import ContributorsList from '../pages/Frontend/ContributorsList';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import UserLayout from '../layouts/UserLayout';
import MyMap from '../pages/user/MyMap';
import FavoriteTouristSpots from '../pages/user/FavoriteTouristSpots';
import MyReviews from '../pages/user/MyReviews';
import UserProfile from '../pages/user/UserProfile';
import AdminLayout from '../layouts/AdminLayout';
import TouristSpotListAdmin from '../pages/admin/TouristSpotListAdmin';
import TouristSpotEditAdmin from '../pages/admin/TouristSpotEditAdmin';
import AuthLayout from '../layouts/AuthLayout';
import TouristSpotForm from '../pages/user/TouristSpotForm';

const router = createHashRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'tourist-spots', element: <TouristSpotsList /> },
      { path: 'tourist-spot/:id', element: <TouristSpotsDetail /> },
      { path: 'contributors', element: <ContributorsList /> },
      { path: 'user/tourist-spots/add', element: <TouristSpotForm /> },
      { path: 'user/tourist-spots/edit/:id', element: <TouristSpotForm /> },
    ],
  },
  // 認證相關的路由
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
  {
    path: '/user',
    element: <UserLayout />,
    children: [
      { path: 'my-map', element: <MyMap /> },
      { path: 'favorites', element: <FavoriteTouristSpots /> },
      { path: 'reviews', element: <MyReviews /> },
      { path: 'profile', element: <UserProfile /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { path: 'tourist-spots', element: <TouristSpotListAdmin /> },
      { path: 'tourist-spots/edit/:id', element: <TouristSpotEditAdmin /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
