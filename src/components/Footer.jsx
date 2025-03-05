export default function Footer() {
  return (
    <>
      <footer className="bg-primary py-lg-12 py-6">
        <div className="mb-lg-12 mb-6">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-8">
                <img
                  src="//images/home/contact-logo.svg"
                  width={338}
                  className="mw-100"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container-xl">
          <div className="row justify-content-between ">
            <div className="col-lg-6 text-lg-start text-center">
              <ul className="list-unstyled d-inline-flex align-items-center text-white mb-lg-0 mb-2">
                <li>
                  <a href="" className="d-block py-2 link-white">
                    服務政策
                  </a>
                </li>
                <span className="mx-6">｜</span>
                <li>
                  <a href="" className="d-block py-2 link-white">
                    隱私條款
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 text-lg-end  text-center text-white">
              <span className="fs-lg-6 fs-7">
                © 2024 親子好趣處 unFamilyMap. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
