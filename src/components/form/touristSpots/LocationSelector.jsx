import { useEffect, useState } from 'react';

import taiwanRegionsData from '../../../assets/json/taiwan_regions.json';
const taiwanRegions = taiwanRegionsData;

export default function LocationSelector({
  register,
  watch,
  errors,
  touristSpotData,
}) {
  const [areas, setAreas] = useState([]);
  const selectedCity = watch('city');
  useEffect(() => {
    if (selectedCity) {
      const currentCity = taiwanRegions.find(
        (city) => city.group === selectedCity
      );
      if (currentCity) {
        setAreas(currentCity.options);
      }
    }
  }, [selectedCity]);

  useEffect(() => {
    if (touristSpotData) {
      const currentCity = taiwanRegions.find(
        (city) => city.group === touristSpotData?.location?.city
      );
      if (currentCity) {
        setAreas(currentCity.options);
      }
    }
  }, [touristSpotData]);

  return (
    <>
      <div className="row align-items-center mb-4">
        <label htmlFor="location" className="col-md-2 col-form-label">
          景點位置<span className="text-danger">*</span>
        </label>
        <div className="col-md-10">
          <div className="row g-2">
            <div className="col-md-6">
              <select
                {...register('city', {
                  required: '景點位置欄位必填',
                })}
                className={`form-select rounded-1 ${
                  errors.city && 'is-invalid'
                }`}
                aria-label="Default select example"
                id="locationCity"
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
                <div className="invalid-feedback">{errors?.city?.message}</div>
              )}
            </div>
            <div className="col-md-6">
              <select
                {...register('area', {
                  required: '景點位置欄位必填',
                })}
                disabled={!selectedCity}
                className={`form-select rounded-1 ${
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
                <div className="invalid-feedback">{errors?.area?.message}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
