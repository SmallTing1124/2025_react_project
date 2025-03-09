import { useEffect, useState } from 'react';
import categoryData from '../../../assets/json/category_options.json';
export default function CategorySelector({ register, setValue, value, watch }) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSubOptions, setSelectedSubOptions] = useState([]);
  const category = watch('category');
  useEffect(() => {
    if (value) {
      setSelectedSubOptions(value.flatMap((item) => item.subCategories));
    }
  }, [value]);

  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
  };
  const handleSubOptionToggle = (label) => {
    setSelectedSubOptions((prev) => {
      if (prev.includes(label)) {
        return prev.filter((item) => item !== label);
      } else {
        return [...prev, label];
      }
    });
  };
  useEffect(() => {
    setValue('subCategories', selectedSubOptions);
    const groups = categoryData
      .filter((category) =>
        category.options.some((option) =>
          selectedSubOptions.includes(option.label)
        )
      )
      .map((category) => ({
        group: category.group,
        subCategories: category.options
          .filter((option) => selectedSubOptions.includes(option.label))
          .map((option) => option.label),
      }));

    setValue('category', groups);
  }, [selectedSubOptions, setValue]);
  return (
    <>
      <div className="row align-items-top mb-4">
        <label htmlFor="potCategory" className="col-md-2 col-form-label">
          景點類別<span className="text-danger">*</span>
        </label>
        <div className="col-md-10">
          <div className="category_content">
            <ul>
              <li>
                <span>自然景觀：</span>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineCheckbox1">
                    海邊
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    河邊
                  </label>
                </div>
              </li>
              <li>
                <span>自然景觀：</span>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineCheckbox1">
                    海邊
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    河邊
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <hr />
          <div className="filterOptions filterOptions_area border rounded-1 w-100">
            <div className="filterOptions_content ">
              <input type="hidden" {...register('category')} />
              <input type="hidden" {...register('subCategories')} />

              <ul className="categoryGroup list-unstyled border-end mb-0">
                {categoryData.map((category, index) => {
                  return (
                    <li
                      key={index}
                      className={`category-item ${
                        category.options.some((option) =>
                          selectedSubOptions.includes(option.label)
                        )
                          ? 'active'
                          : ''
                      }`}
                    >
                      <button
                        type="button"
                        className="btn w-100 justify-content-center"
                        onClick={() => {
                          handleCategorySelect(index);
                        }}
                      >
                        {category.group}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <ul className="d-flex flex-column w-50 list-unstyled mb-0">
                {categoryData[selectedCategory]?.options.map(
                  (subOption, index) => (
                    <li key={index} className="btn-group">
                      <input
                        type="checkbox"
                        className="btn-check"
                        name={subOption.key}
                        id={subOption.key}
                        checked={selectedSubOptions.includes(subOption.label)}
                        onChange={() => {
                          handleSubOptionToggle(subOption.label);
                        }}
                      />
                      <label
                        htmlFor={subOption.key}
                        className="btn btn-outline-normal-gray text-dark justify-content-center rounded-0 border-end"
                      >
                        {subOption.label}
                      </label>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
