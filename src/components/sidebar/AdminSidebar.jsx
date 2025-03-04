import { Link } from 'react-router';

export default function AdminSidebar() {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to={'/admin/tourist-spots'}>
              <span className="menu-title">景點列表</span>
              <i className="bi bi-card-list" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/admin'}>
              <span className="menu-title">評論管理</span>
              <i className="bi bi-newspaper" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/admin'}>
              <span className="menu-title">使用者帳號管理</span>
              <i className="bi bi-envelope" />
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/admin'}>
              <span className="menu-title">管理密碼修改</span>
              <i className="bi bi-key" />
            </Link>
          </li>
          <li className="nav-item d-lg-none">
            <Link className="nav-link" to={'/admin'}>
              <span className="menu-title">登出</span>
              <i className="bi bi-box-arrow-right " />
            </Link>
          </li>
          <li className="nav-item d-lg-none">
            <hr />
            <Link className="nav-link text-center" to={'/admin'}>
              <span className="menu-title">回前台頁面</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
