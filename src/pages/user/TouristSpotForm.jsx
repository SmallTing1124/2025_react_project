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
import OpeningHours from '../../components/form/touristSpots/OpeningHours';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function TouristSpotForm() {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state?.auth?.user);
  const { id: touristSpotId } = useParams(); //取得當前景點 id

  const pathLocation = useLocation();
  const [touristSpotData, setTouristSpotData] = useState([]);
  const [currentMode, setCurrentMode] = useState('');
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
      businessHours: {},
      category: [],
      subCategories: [],
      city: '',
      description: '',
      facilities: [],
      imageUrl: '',
      name: '',
      notice: '',
      phone: '',
      suitableAge: 1,
      tags: [],
      transport: [],
    },
  });
  useEffect(() => {
    if (pathLocation.pathname.includes('add')) {
      setCurrentMode('add');
      setTouristSpotData([]); 
      reset(); 
    } else if (pathLocation.pathname.includes('edit')) {
      setCurrentMode('edit');
      getTouristSpot(touristSpotId);
    }
  }, [pathLocation, touristSpotId,reset]);

  const getTouristSpot = async (touristSpotId) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/locations/${touristSpotId}?_embed=editedSpot`
      );
      setTouristSpotData(res.data);
    } catch (error) {
      console.error(error); 
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('發生錯誤，請稍後再試');
      }
    }
  };

  useEffect(() => {
    
    if (touristSpotData) {
      reset({
        address: touristSpotData.address || '',
        admissionFee: touristSpotData.admissionFee || '',
        area: touristSpotData.location?.area || '',
        city: touristSpotData.location?.city || '',
        businessStatus: touristSpotData?.statusId || 'open',
        businessHours: touristSpotData?.businessHours || {},
        description: touristSpotData.description || '',
        facilities: touristSpotData.facilities || [],
        imageUrl: touristSpotData.imageUrl || '',
        name: touristSpotData.name || '',
        notice: touristSpotData.notice || '',
        phone: touristSpotData.phone || '',
        suitableAge: touristSpotData.suitableAge || 1,
        tags: touristSpotData.tags || [],
        transport: touristSpotData.transport || [],
        category: touristSpotData.category || [],
        subCategories: touristSpotData.subCategories || [],
      });
      setValue('businessStatus', touristSpotData?.statusId || 'open');
    } else {
      reset();
    }
  }, [touristSpotData, reset, setValue]);
  const onSubmit = (data) => {
    const spotFormData = {
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
      businessHours: data.businessHours,
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
    };

   
    if (currentMode === 'add') {
      spotFormData.userId = userInfo.id || '';
      spotFormData.createdAt = new Date().toISOString();
      console.log('要新增的：', spotFormData);
      addTouristSoptData(spotFormData);
      alert('新增成功');
    }

   
    if (currentMode === 'edit') {
      const oldRecord = touristSpotData.editedSpot.find(
        (record) => String(record.userId) === String(userInfo.id)
      );
      if (oldRecord) {
       
        oldRecord.editedAt = new Date().toISOString();
        editTouristSoptData(spotFormData, touristSpotId);
        editRecord(oldRecord, oldRecord.id);
      } else {
       
        const newRecord = {
          userId: userInfo.id,
          locationId: touristSpotData.id,
          editedAt: new Date().toISOString(),
        };
        editTouristSoptData(spotFormData, touristSpotId);
        addRecord(newRecord);
      }

      alert('修改成功');
    }
    reset();
    navigate('/user/my-map');
  };

  const editTouristSoptData = async (touristSpot, touristSpotId) => {
    try {
      await axios.patch(`${BASE_URL}/locations/${touristSpotId}`, touristSpot);
    } catch (error) {
      console.error(error);
    }
  };

  const editRecord = async (record, id) => {
    try {
      await axios.patch(`${BASE_URL}/editedSpot/${id}`, record);
    } catch (error) {
      console.error(error);
    }
  };

  const addRecord = async (record) => {
    try {
      await axios.post(`${BASE_URL}/editedSpot`, record);
    } catch (error) {
      console.error(error);
    }
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
                  touristSpotData={touristSpotData}
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
                  required=""
                />

                <OpeningHours
                  label="營業時間"
                  register={register}
                  watch={watch}
                  setValue={setValue}
                />

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
                  min={1}
                  max={12}
                  register={register}
                  errors={errors}
                  required={{
                    required: '適合年紀欄位必填',
                    pattern: {
                      value: /^(?:[1-9]|1[1-2])$/,
                      message: '適合年紀必須是 1-12 之間的數字',
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
                      value: /^[0-9]+(\.[0-9]{1,2})?$/,
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

                <div className="row mb-4">
                  <label htmlFor="addTags" className="col-md-2 col-form-label">
                    新增標籤
                  </label>
                  <div className="col-md-10">
                    <TagsInput
                      register={register}
                      watch={watch}
                      setValue={setValue}
                    />
                  </div>
                </div>

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
