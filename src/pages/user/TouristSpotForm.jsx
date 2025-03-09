// import categoriesData from '../../assets/json/category_options.json';
// const categories = categoriesData;
import { useForm } from 'react-hook-form';
import LocationSelector from '../../components/form/touristSpots/LocationSelector';
import BusinessStatusRadio from '../../components/form/touristSpots/BusinessStatusRadio';
import TagsInput from '../../components/form/touristSpots/TagsInput';
import CategorySelector from '../../components/form/touristSpots/CategorySelector';
import MainImageInput from '../../components/form/touristSpots/MainImageInput';
import TransportationCheckbox from '../../components/form/touristSpots/TransportationCheckbox';
import FacilitiesCheckbox from '../../components/form/touristSpots/FacilitiesCheckbox';
import TextInput from '../../components/form/touristSpots/formElements/TextInput';
import TextAreaInput from '../../components/form/touristSpots/formElements/TextAreaInput';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function TouristSpotForm() {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state?.auth?.user); // 取得使用者id
  const { id: touristSpotId } = useParams(); //取得當前景點 id

  const pathLocation = useLocation();
  const [touristSpotData, setTouristSpotData] = useState([]);
  const [currentMode, setCurrentMode] = useState('');

  useEffect(() => {
    if (pathLocation.pathname.includes('add')) {
      setCurrentMode('add');
    } else if (pathLocation.pathname.includes('edit')) {
      setCurrentMode('edit');
      getTouristSpot(touristSpotId);
    }
  }, [pathLocation, touristSpotId]);

  const getTouristSpot = async (touristSpotId) => {
    try {
      const res = await axios.get(`${BASE_URL}/locations/${touristSpotId}`);
      setTouristSpotData(res.data);
    } catch (error) {
      console.error(error); // 打印錯誤詳情
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('發生錯誤，請稍後再試');
      }
    }
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      address: '',
      admissionFee: '',
      area: '',
      businessStatus: 'open',
      category: [],
      subCategories: [],
      city: '',
      description: '',
      facilities: [],
      imageUrl: '',
      name: '',
      notice: '',
      phone: '',
      suitableAge: 0,
      tags: [],
      transport: [],
    },
  });

  useEffect(() => {
    // 編輯景點：如果有取到景點資料，更新 form 的初始資料
    if (touristSpotData) {
      reset({
        address: touristSpotData.address || '',
        admissionFee: touristSpotData.admissionFee || '',
        area: touristSpotData.location?.area || '',
        city: touristSpotData.location?.city || '',
        businessStatus: touristSpotData.businessStatus || 'open',
        description: touristSpotData.description || '',
        facilities: touristSpotData.facilities || [],
        imageUrl: touristSpotData.imageUrl || '',
        name: touristSpotData.name || '',
        notice: touristSpotData.notice || '',
        phone: touristSpotData.phone || '',
        suitableAge: touristSpotData.suitableAge || 0,
        tags: touristSpotData.tags || [],
        transport: touristSpotData.transport || [],
        category: touristSpotData.category || [],
        subCategories: touristSpotData.subCategories || [],
      });
    }
  }, [touristSpotData, reset]);
  const onSubmit = (data) => {
    // const createBusinessHours = () => {
    //   return [
    //     { day: '星期一', timeSlots: [{ start: '11:00', end: '21:30' }] },
    //     { day: '星期二', timeSlots: [{ start: '11:00', end: '21:30' }] },
    //     { day: '星期三', timeSlots: [{ start: '11:00', end: '21:30' }] },
    //     { day: '星期四', timeSlots: [{ start: '11:00', end: '21:30' }] },
    //     { day: '星期五', timeSlots: [{ start: '11:00', end: '22:00' }] },
    //     { day: '星期六', timeSlots: [{ start: '11:00', end: '22:00' }] },
    //     { day: '星期日', timeSlots: [{ start: '11:00', end: '21:30' }] },
    //   ];
    // };
    const touristSpot = {
      isPublished: true,
      name: data.name,
      location: {
        city: data.city,
        area: data.area,
      },
      address: data.address,
      googleMapEmbed: '',
      googleMapLink: '',
      description: data.description,
      notice: data.notice,
      phone: data.phone,
      // businessHours: createBusinessHours(),
      statusId: data.businessStatus,
      category: data.category,
      subCategories: data.subCategories,
      suitableAge: data.suitableAge,
      admissionFee: data.admissionFee,
      facilities: data.facilities,
      transport: data.transport,
      tags: data.tags,
      imageUrl: data.imageUrl,
      imagesUrl: [],
      userId: !userInfo.id && '',
      createdAt: new Date(),
    };

    if(currentMode === "add"){
      addTouristSoptData(touristSpot);
    }
    if(currentMode === "edit"){
      editTouristSoptData(touristSpot,touristSpotId);
    }
    reset();
    navigate('/tourist-spots');
  };

  const addTouristSoptData = async (touristSpot) => {
    try {
      await axios.post(`${BASE_URL}/locations`, touristSpot);
    } catch (error) {
      console.error(error); 
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('發生錯誤，請稍後再試');
      }
    }
  };
  const editTouristSoptData = async (touristSpot,index) => {
    try {
      await axios.patch(`${BASE_URL}/locations/${index}`, touristSpot);
    } catch (error) {
      console.error(error); // 打印錯誤詳情
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('發生錯誤，請稍後再試');
      }
    }
  };
  return (
    <>
      <section className="p-lg-15 p-0 py-13  bg-normal-gray tourist-edit">
        {/* title */}
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="bg-white rounded px-lg-10 px-3">
              <div className="tourist-add mt-7 pb-5 position-relative">
                <div className="tourist-add-title d-flex flex-column align-items-center">
                  <img
                    className="position-absolute"
                    src="./images/tourist/Open.svg"
                    alt=""
                  />
                  <div className="tourist-add-text font-NaniFont text-center mt-13 px-8">
                    <h1 className="text-primary ">
                      {currentMode && currentMode === 'add' ? '新增' : '編輯'}
                      景點
                    </h1>
                    <span className="text-primary">
                      {currentMode && currentMode === 'add'
                        ? 'Add New '
                        : 'Edit '}
                      Location
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="add-tourist-form-title font-NaniFont text-lg-start text-center">
                <b className="bg-secondary text-primary">景點資訊</b>
              </h3>
              <div className="add-tourist-form g-3 pb-lg-14 pt-5  pb-1">
                <TextInput
                  label="景點名稱"
                  name="name"
                  type="text"
                  register={register}
                  errors={errors}
                  required={{
                    required: '景點名稱欄位必填',
                  }}
                />
                <LocationSelector
                  label="景點位置"
                  register={register}
                  watch={watch}
                  errors={errors}
                />
                <TextInput
                  label="詳細地址"
                  name="address"
                  type="text"
                  register={register}
                  errors={errors}
                  required={{
                    required: '詳細地址欄位必填',
                  }}
                />
                <TextInput
                  label="聯絡電話"
                  name="phone"
                  type="tel"
                  register={register}
                  errors={errors}
                  required={{
                    required: '聯絡電話欄位必填',
                  }}
                />

                <div className="row mb-4">
                  <label
                    htmlFor="inputOpenTime"
                    className="col-md-2 col-form-label"
                  >
                    營業時間<span className="text-danger">*</span>
                  </label>
                  <div className="col-md-10">
                    <button
                      type="button"
                      className="btn btn-primary w-100 d-flex justify-content-center rounded-1"
                    >
                      新增營業時間
                      <span className="iconify-mingcute--time-fill" />
                    </button>
                  </div>
                </div>
                <BusinessStatusRadio
                  label="經營狀態"
                  register={register}
                  watch={watch}
                />
                <CategorySelector
                  label="景點類別"
                  register={register}
                  errors={errors}
                  watch={watch}
                  setValue={setValue}
                  value={touristSpotData.category}
                />
                <TextInput
                  label="適合年紀"
                  name="suitableAge"
                  type="number"
                  min={0}
                  max={12}
                  register={register}
                  errors={errors}
                  required={{
                    required: '適合年紀欄位必填',
                    pattern: {
                      value: /^(?:[0-9]|1[0-2])$/,
                      message: '適合年紀必須是 0-12 之間的數字',
                    },
                  }}
                />

                <TextInput
                  label="最低消費"
                  name="admissionFee"
                  type="number"
                  min={0}
                  register={register}
                  errors={errors}
                  required={{
                    required: '最低消費欄位必填',
                    pattern: {
                      value: /^[0-9]+(\.[0-9]{1,2})?$/, // 允許數字及最多兩位小數
                      message: '最低消費必須是正數或零',
                    },
                  }}
                />
                <FacilitiesCheckbox
                  label="周邊環境"
                  register={register}
                  errors={errors}
                />
                <TransportationCheckbox label="交通工具" register={register} />
                <TagsInput
                  register={register}
                  watch={watch}
                  setValue={setValue}
                />
                <TextAreaInput
                  label="景點簡介"
                  name="description"
                  register={register}
                  errors={errors}
                  required={{
                    required: '景點簡介欄位必填',
                  }}
                />
                <TextAreaInput
                  label="注意事項"
                  name="notice"
                  register={register}
                  errors={errors}
                  required={{
                    required: '注意事項欄位必填',
                  }}
                />
                <h3 className="add-tourist-form-title font-NaniFont text-lg-start text-center">
                  <b className="bg-secondary text-primary">景點圖片</b>
                </h3>
                <MainImageInput
                  label="景點圖片"
                  register={register}
                  errors={errors}
                  watch={watch}
                />
                {/* <MultipleImageInput register={register} watch={watch} /> */}
              </div>
            </div>
            <div className="d-flex justify-content-center mt-10">
              <Link
                to="/tourist-spots"
                className="btn btn-white me-3 px-10 px-md-15"
              >
                返回
              </Link>
              <button type="submit" className="btn btn-primary px-10 px-md-15">
                儲存
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
