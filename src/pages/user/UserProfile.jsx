import { useEffect, useState } from 'react';
import taiwanRegions from '../../assets/json/taiwan_regions.json';

import { useForm } from 'react-hook-form';
import { useNavigate, useOutletContext } from 'react-router';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../redux/authSlice';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function UserProfile() {
  const dispatch = useDispatch();
  const { userData } = useOutletContext();
  const navigate = useNavigate();
  const [userFormData, setUserFormData] = useState();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      area: '',
      avatarImgUrl: '',
      birthDate: '',
      city: '',
      email: '',
      fullName: '',
      gender: '',
      nickname: '',
      phone: '',
    },
  });

  const [areas, setAreas] = useState([]);
  const selectedCity = watch('city');
  const selectedAvatarImgUrl = watch('avatarImgUrl');

  useEffect(() => {
    if (selectedCity) {
      const currentCity = taiwanRegions.find(
        (city) => city.group === selectedCity
      );
      if (currentCity) {
        setAreas(currentCity.options);
      } else {
        setAreas([]); 
      }
    } else {
      setAreas([]); 
    }
  }, [selectedCity]);

  useEffect(() => {
    if (userData) {
      setUserFormData(userData);
    }
  }, [userData]);
  useEffect(() => {
    
    if (userFormData) {
      reset({
        ...userFormData,
        area: userFormData?.location?.area || '',
        avatarImgUrl: userFormData?.avatarImgUrl || '',
        birthDate: userFormData?.birthDate || '',
        city: userFormData?.location?.city || '',
        email: userFormData?.email || '',
        fullName: userFormData?.fullName || '',
        gender: userFormData?.gender || '',
        nickname: userFormData?.nickname || '',
        phone: userFormData?.phone || '',
      });

      
      const currentCity = taiwanRegions.find(
        (city) => city.group === userFormData?.location?.city
      );
      if (currentCity) {
        setAreas(currentCity.options);
      }
    }
  }, [userFormData, reset]);

  const onSubmit = (data) => {
    const formData = {
      location: {
        city: data.city,
        area: data.area,
      },
      avatarImgUrl: data.avatarImgUrl,
      birthDate: data.birthDate,
      email: data.email,
      fullName: data.fullName,
      gender: data.gender,
      nickname: data.nickname,
      phone: data.phone,
    };
    dispatch(updateUser(formData));
    updateUserProfile(formData);
    navigate('/user/profile');
    reset();
  };

  const updateUserProfile = async (data) => {
    try {
      const res = await axios.patch(`${BASE_URL}/users/${userData.id}`, data);
      setUserFormData(res.data);
      alert('修改會員資料成功！');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || '發生錯誤，請稍後再試');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card">
          <div className="card-header px-lg-6  py-4 text-lg-start text-center">
            <h5 className="text-gray-700">基本資料</h5>
          </div>
          <div className="card-body p-lg-6 p-3">
            <div className="row g-4">
              <div className="col-12">
                <div className="d-flex gap-4">
                  <div
                    className="user-avatar rounded-circle border bg-gray-400"
                    style={{
                      backgroundImage: 'url(./images/user-avatar.png)',
                      backgroundSize: 'contain',
                      width:"90px"
                    }}
                  >
                    {selectedAvatarImgUrl && (
                      <img
                        className="rounded-circle object-fit-cover"
                        width="90"
                        height="90"
                        src={selectedAvatarImgUrl}
                      />
                    )}
                  </div>
                  <div className="w-100">
                    <label htmlFor="avatarImgUrl" className="form-label">
                      頭像
                    </label>
                    <input
                      {...register('avatarImgUrl', {
                        pattern: {
                          value:
                            /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$|^https?:\/\/.*\b(auto=format)\b.*/,
                          message: '格式錯誤，檢查是否是有效的圖片',
                        },
                      })}
                      name="avatarImgUrl"
                      type="text"
                      className="form-control rounded-2"
                      id="avatarImgUrl"
                      placeholder="請輸入圖片連結"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <label htmlFor="fullName" className="form-label">
                  姓名
                  <span className="text-highligh-600 d-inlinr-block ps-1">
                    *
                  </span>
                </label>
                <input
                  {...register('fullName', {
                    required: '姓名欄位必填',
                  })}
                  name="fullName"
                  type="text"
                  className={`form-control rounded-2 ${
                    errors.fullName && 'is-invalid'
                  }`}
                  id="fullName"
                  placeholder="請輸入姓名"
                />
                {errors.fullName && (
                  <div className="invalid-feedback">
                    {errors.fullName?.message}
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <label htmlFor="nickname" className="form-label">
                  暱稱
                  <span className="text-highligh-600 d-inlinr-block ps-1">
                    *
                  </span>
                </label>
                <input
                  {...register('nickname', {
                    required: '暱稱欄位必填',
                  })}
                  type="text"
                  name="nickname"
                  className={`form-control rounded-2 ${
                    errors.nickname && 'is-invalid'
                  }`}
                  id="nickname"
                  placeholder="請輸入暱稱"
                />
                {errors?.nickname && (
                  <div className="invalid-feedback">
                    {errors?.nickname?.message}
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <label htmlFor="birthDate" className="form-label">
                  生日
                  <span className="text-highligh-600 d-inlinr-block ps-1">
                    *
                  </span>
                </label>
                <input
                  {...register('birthDate', {
                    required: '生日欄位必填',
                  })}
                  type="date"
                  name="birthDate"
                  className={`form-control rounded-2 ${
                    errors.birthDate && 'is-invalid'
                  }`}
                  id="birthDate"
                  placeholder="請輸入生日"
                />
                {errors?.nickname && (
                  <div className="invalid-feedback">
                    {errors?.birthDate?.message}
                  </div>
                )}
              </div>
              <div className="col-lg-6">
                <label htmlFor="gender" className="form-label">
                  性別
                  {/* <span className="text-highligh-600 d-inlinr-block ps-1">
                    *
                  </span> */}
                </label>
                <select
                  {...register('gender')}
                  className={`form-select rounded-2 ${
                    errors.gender && 'is-invalid'
                  }`}
                  name="gender"
                  id="gender"
                >
                  <option value="">選擇性別</option>
                  <option name="gender" value="男生">
                    男生
                  </option>
                  <option name="gender" value="女生">
                    女生
                  </option>
                  <option name="gender" value="其他">
                    其他
                  </option>
                </select>
                {errors?.nickname && (
                  <div className="invalid-feedback">
                    {errors?.gender?.message}
                  </div>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="phone" className="form-label">
                  電話
                  {/* <span className="text-highligh-600 d-inlinr-block ps-1">
                    *
                  </span> */}
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className={`form-control rounded-2 ${
                    errors.phone && 'is-invalid'
                  }`}
                  name="phone"
                  id="phone"
                  placeholder="請輸入聯絡電話"
                />
                {errors?.phone && (
                  <div className="invalid-feedback">
                    {errors?.phone?.message}
                  </div>
                )}
              </div>
              <div className="col-12">
                <label htmlFor="city" className="form-label">
                  所在地區
                  {/* <span className="text-highligh-600 d-inlinr-block ps-1">
                    *
                  </span> */}
                </label>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <select
                      {...register('city')}
                      name="city"
                      id="city"
                      className={`form-select rounded-2 ${
                        errors.city && 'is-invalid'
                      }`}
                    >
                      <option value="" disabled>
                        選擇景點縣市
                      </option>
                      {taiwanRegions.map((city) => {
                        return (
                          <option key={city.group} value={city.group}>
                            {city.group}
                          </option>
                        );
                      })}
                    </select>
                    {errors?.city && (
                      <div className="invalid-feedback">
                        {errors?.city?.message}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-6">
                    <select
                      {...register('area')}
                      name="area"
                      id="area"
                      className={`form-select rounded-2 ${
                        errors.area && 'is-invalid'
                      }`}
                    >
                      <option value="" disabled>
                        選擇景點地區
                      </option>
                      {areas.map((area) => {
                        return (
                          <option key={area.key} value={area.label}>
                            {area.label}
                          </option>
                        );
                      })}
                    </select>
                    {errors?.area && (
                      <div className="invalid-feedback">
                        {errors?.area?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-footer px-lg-6  py-2 text-lg-end text-center">
            <button
              type="submit"
              className="btn btn-primary rounded-2 d-lg-inline-block d-block py-2"
            >
              儲存
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
