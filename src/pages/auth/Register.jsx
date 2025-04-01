import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router';
import { loginSuccess } from '../../redux/authSlice';

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userList, seUserList] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const getUserList = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/users`);
        seUserList(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getUserList();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {},
  });

  const emailWatch = watch('email');

  const filteredUsers = useMemo(
    () => userList.filter((user) => user.email === emailWatch),
    [emailWatch, userList]
  );

  const onSubmit = (data) => {
    console.log(data);
    const registerData = {
      role: 'user',
      email: data.email,
      password: data.password,
      fullName: data.nickname,
      nickname: data.nickname,
      phone: '',
      gender: '',
      birthDate: data.birthDate,
      location: {
        city: '',
        area: '',
      },
    };
    registerUser(registerData);
  };

  const registerUser = async (data) => {
    try {
      const registerRes = await axios.post(`${BASE_URL}/register`, data);
      const { accessToken, user } = registerRes.data;

      document.cookie = `hexToken=${accessToken};`;
      axios.defaults.headers.common['Authorization'] = accessToken;

      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      dispatch(
        loginSuccess({ user: user, token: accessToken, role: user.role })
      );

      alert('已經註冊成功！');

      reset();
      navigate('/user/profile');
    } catch (error) {
      console.log(error.response.data);
      alert('註冊失敗');
    }
  };

  return (
    <>
      <div className="form-wrapper bg-white px-lg-7 px-4 py-12 rounded-5 shadow">
        <div className="d-flex justify-content-between align-items-center mb-8">
          <h2 className="form-title fs-3 text-primary">註冊</h2>
          <span>
            已經註冊，<Link to={'/auth/login'}>登入</Link>
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
                validate: () => {
                  if (filteredUsers.length > 0) {
                    return '使用者已存在！';
                  }
                  return true;
                },
              })}
              name="email"
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
              {...register('nickname', {
                required: '暱稱欄位必填',
              })}
              name="nickname"
              type="nickname"
              className={`form-control ${errors.nickname && 'is-invalid'}`}
              id="nickname"
              placeholder="name@example.com"
            />
            <label htmlFor="nickname">你的暱稱</label>
            {errors.nickname && (
              <div className="invalid-feedback">{errors.nickname?.message}</div>
            )}
          </div>

          <div className="form-floating col">
            <input
              {...register('birthDate', {
                required: '生日欄位必填',
              })}
              name="birthDate"
              type="date"
              className={`form-control ${errors.birthDate && 'is-invalid'}`}
              id="birthDate"
              placeholder="2021/09/22"
            />
            <label htmlFor="birthDate">出生日期</label>

            {errors.birthDate && (
              <div className="invalid-feedback">
                {errors.birthDate?.message}
              </div>
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
              name="password"
              type={showPassword ? 'test' : 'password'}
              className={`form-control ${errors.password && 'is-invalid'}`}
              id="password"
              placeholder="密碼"
            />

            <span
              className="material-symbols-outlined position-absolute bg-white"
              style={{ top: '17px', right: '30px', cursor: 'pointer' ,fontSize: '20px'}}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? 'visibility' : 'visibility_off'}
            </span>

            <label htmlFor="password">密碼</label>
            {errors.password && (
              <div className="invalid-feedback">{errors.password?.message}</div>
            )}
            <small className="form-text text-center">
              密碼需至少 8 碼，包含小寫字母與數字
            </small>
            <div className="text-center">
              {/* <small className="text">限8-24碼英文數字符號</small> */}
            </div>
          </div>
          <div className="form-floating col">
            <input
              {...register('confirmPassword', {
                required: '確認密碼欄位必填',
                validate: (value, context) => {
                  if (value !== context.password) {
                    return '密碼與確認密碼不相符';
                  }
                  return true;
                },
              })}
              type={showPassword ? 'test' : 'password'}
              name="confirmPassword"
              className={`form-control ${
                errors.confirmPassword && 'is-invalid'
              }`}
              id="confirmPassword"
              placeholder="密碼需至少8碼，包含小寫字母與數字"
            />
            <span
              className="material-symbols-outlined position-absolute bg-white"
              style={{ top: '17px', right: '30px', cursor: 'pointer' ,fontSize: '20px'}}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            >
              {showPassword ? 'visibility' : 'visibility_off'}
            </span>
            <label htmlFor="confirmPassword">再次輸入密碼</label>
            {errors.confirmPassword && (
              <div className="invalid-feedback">
                {errors.confirmPassword?.message}
              </div>
            )}
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
