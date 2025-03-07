import { Link, Outlet } from 'react-router';

export default function AuthLayout() {
  return (
    <>
      <section className="auth-container">
        <div className="container">
          <div className="row min-vh-100 align-content-center">
            <div className="col-lg-8 d-flex align-items-center justify-content-center">
              <Link
                to={'/'}
                className="d-block col-lg-6 col-8 pb-lg-0 pb-6 pe-lg-8"
              >
                <img
                  src="./images/home/contact-logo.svg"
                  alt="親子好趣處"
                  width="100%"
                />
              </Link>
            </div>
            <div className="col-lg-4">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
