import { Link } from "react-router";

export default function Register() {
  return (
    <>
      <div className="form-wrapper bg-white px-lg-7 px-4 py-12 rounded-5 shadow">
        <div className="d-flex justify-content-between align-items-center mb-8">
          <h2 className="form-title fs-3 text-primary">註冊</h2>
          <span>
            已經註冊，<Link to={'/auth/login'}>登入</Link>
          </span>
        </div>
        <form action="login.html" method="post" className="row g-3 flex-column">
          <div className="form-floating col">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <label htmlFor="email">電子郵件</label>
          </div>
          <div className="form-floating col">
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="2021/09/22"
            />
            <label htmlFor="date">出生日期</label>
          </div>
          <div className="form-floating col">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="密碼"
            />
            <label htmlFor="password">密碼</label>
            <div className="text-center">
              {/* <small class="text">限8-24碼英文數字符號</small> */}
            </div>
          </div>
          <div className="form-floating col">
            <input
              type="password"
              className="form-control"
              id="checkpassword"
              placeholder="密碼(限8-24碼英文數字符號)"
            />
            <label htmlFor="checkpassword">再次輸入密碼</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-4 justify-content-center"
          >
            註冊
          </button>
        </form>
      </div>
    </>
  );
}
