import { Link } from 'react-router';
import ForgotPassword from './ForgotPassword';

export default function Login() {
  return (
    <>
      <div className="form-wrapper bg-white px-lg-7 px-4 py-12 rounded-5 shadow">
        <div className="d-flex justify-content-between align-items-center mb-8">
          <h2 className="form-title fs-3 text-primary">登入</h2>
          <span>
            沒有帳號，<Link to={'/auth/register'}>註冊</Link>
          </span>
        </div>
        <form action="index.html" method="post" className="row g-3 flex-column">
          <div className="form-floating col">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">電子郵件</label>
          </div>
          <div className="form-floating col">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="密碼"
            />
            <label htmlFor="floatingPassword">密碼</label>
            <div className="text-center">
              {/* <small class="text">限8-24碼英文數字符號</small> */}
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-4 justify-content-center"
          >
            登入
          </button>
        </form>
        {/* Button trigger modal */}
        <a
          className="link-primary mt-3 d-block text-center mt-6"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          忘記密碼
        </a>
        {/* Modal */}
        <ForgotPassword />
      </div>
    </>
  );
}
