import ForgotPassword from './ForgotPassword';
import { Link, useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/authSlice';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Login() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (accountData) => {
    handleLogin(accountData);
  };

  const handleLogin = async (account) => {
    try {
      // 登入請求
      const accountRes = await axios.post(`${BASE_URL}/login`, account);
      const { accessToken, user } = accountRes.data;

      // 設置 Cookie 和 localStorage
      document.cookie = `hexToken=${accessToken};`;
      axios.defaults.headers.common['Authorization'] = accessToken;
      // 存儲 token
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      // 更新 Redux 狀態
      dispatch(
        loginSuccess({ user: user, token: accessToken, role: user.role })
      );

      // 重置表單並導航
      reset();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="form-wrapper bg-white px-lg-7 px-4 py-12 rounded-5 shadow">
        <div className="d-flex justify-content-between align-items-center mb-8">
          <h2 className="form-title fs-3 text-primary">登入</h2>
          <span>
            沒有帳號，<Link to={'/auth/register'}>註冊</Link>
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3 flex-column">
          <div className="form-floating col">
            <input
              {...register('email', {
                required: 'Email欄位必填',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: '格式錯誤，請輸入有效的 Email',
                },
              })}
              type="email"
              className={`form-control ${errors.email && 'is-invalid'}`}
              id="email"
              placeholder="name@example.com"
            />
            <label htmlFor="email">電子郵件</label>
            {errors.email && (
              <div className="invalid-feedback">{errors.email?.message}</div>
            )}
          </div>
          <div className="form-floating col">
            <input
              {...register('password', {
                required: '密碼欄位必填',
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-_=+]{8,}$/,
                  message: '密碼欄位格式錯誤',
                },
              })}
              type="password"
              className={`form-control ${errors.password && 'is-invalid'}`}
              id="password"
              placeholder="password"
            />
            <label htmlFor="password">密碼</label>
            {errors.username && (
              <div className="invalid-feedback">{errors.password?.message}</div>
            )}
            <small className="form-text text-center">
              密碼需至少 8 碼，包含小寫字母與數字
            </small>
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
