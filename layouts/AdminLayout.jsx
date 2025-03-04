import { Outlet } from 'react-router';
import AdminNavbar from '../components/navbar/AdminNavbar';
import AdminSidebar from '../components/sidebar/AdminSidebar';

export default function AdminLayout() {
  return (
    <>
      <AdminNavbar />
      <div className="page-body-wrapper">
        <AdminSidebar />
        <section className="main-panel">
          <Outlet />
        </section>
      </div>
    </>
  );
}
