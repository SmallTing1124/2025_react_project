import { useEffect, useState } from 'react';
// 取得台灣地區資料
import categoryData from '../../../assets/json/category_options.json';
const category = categoryData;

export default function CategorySelector({ register, watch, errors }) {
  const [subCategories, setSubCategories] = useState([]);
  const selectedCategory = watch('category');
  useEffect(() => {
    if (selectedCategory) {
      const currentCategory = category.find(
        (item) => item.group === selectedCategory
      );
      if (currentCategory) {
        setSubCategories(currentCategory.options);
      }
    }
  }, [selectedCategory]);

  return (
    <>
      <div className="row align-items-center mb-4">
        <label htmlFor="potCategory" className="col-md-2 col-form-label">
          景點類別<span className="text-danger">*</span>
        </label>
        <div className="col-md-10">
          <div className="row g-2">
            <div className="col-md-6">
              <select
                {...register('category', {
                  required: '景點類別欄位必填',
                })}
                className={`form-select rounded-1 ${
                  errors?.category && 'is-invalid'
                }`}
                id="inputCity"
              >
                <option value="" disabled>
                  選擇景點類別
                </option>
                {category.map((item) => {
                  return (
                    <option key={item.group} value={item.group}>
                      {item.group}
                    </option>
                  );
                })}
              </select>
              {errors?.category && (
                <div className="invalid-feedback">
                  {errors?.category?.message}
                </div>
              )}
            </div>
            <div className="col-md-6">
              <select
                {...register('subCategories', {
                  required: '景點類別欄位必填',
                })}
                disabled={!selectedCategory}
                className={`form-select rounded-1 ${
                  errors.subCategories && 'is-invalid'
                }`}
                id="inputDistrict"
              >
                <option value="" disabled>
                  選擇景點項目
                </option>

                {subCategories.map((item) => {
                  return (
                    <option key={item.key} value={item.label}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
              {errors?.selectedCategory && (
                <div className="invalid-feedback">{errors?.selectedCategory?.message}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
