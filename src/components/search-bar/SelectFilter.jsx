import { useState, useEffect } from 'react';
import { Dropdown } from 'bootstrap';
import { useRef } from 'react';

export default function SelectFilter({
  register,
  filteredData,
  watch,
  setValue,
  labelName,
  dataType,
}) {
  const [areaOptions, setAreaQptions] = useState([]);

  const categoryFilterKey = dataType + 'Category';
  const detailFilterKey = dataType + 'Detail';

  const selectedCategory = watch(categoryFilterKey, -1);
  const selectedDetail = watch(detailFilterKey, []);

  useEffect(() => {
    if (selectedCategory >= 0) {
      const selectedCity = filteredData[selectedCategory];
      setAreaQptions(selectedCity ? selectedCity.options : []);
    } else {
      setAreaQptions([]);
    }
    setValue(detailFilterKey, []);
  }, [selectedCategory, setValue, detailFilterKey, filteredData]);

  const handleSelectedCity = (index) => {
    if (index !== selectedCategory) {
      setValue(categoryFilterKey, index);
    }
  };

  const handleSelectAllAreas = () => {
    setValue(detailFilterKey, []);
  };

  const handleReset = () => {
    setValue(categoryFilterKey, -1);
    setValue(detailFilterKey, []);
    if (dropdownRef.current) {
      const dropdown = Dropdown.getOrCreateInstance(dropdownRef.current);
      dropdown.hide(); 
    }
  };

  const dropdownRef = useRef(null);
  const handleCloseDropDown = () => {
    if (dropdownRef.current) {
      const dropdown = Dropdown.getOrCreateInstance(dropdownRef.current);
      dropdown.hide(); 
    }
  };

  return (
    <>
      <div className="col">
        <div className="dropdown dropup-center">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle w-100 py-2 py-4 btn-white"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-auto-close="outside"
          >
            {labelName}
          </button>

          <div
            ref={dropdownRef}
            className="dropdown-menu filterOptions filterOptions_area"
          >
            <div className="filterOptions_content">
              {/* cityGroup 選擇城市 */}
              <ul className="cityGroup list-unstyled border-end mb-0">
                <input
                  type="hidden"
                  name={categoryFilterKey}
                  {...register(categoryFilterKey)}
                />
                <li className={selectedCategory === -1 ? 'active' : ''}>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {
                      handleSelectedCity(-1);
                    }}
                  >
                    不限
                  </button>
                </li>
                {filteredData.map((item, index) => {
                  return (
                    <li
                      className={selectedCategory === index ? 'active' : ''}
                      key={item.group}
                      onClick={() => {
                        handleSelectedCity(index);
                      }}
                    >
                      <button type='button' className="btn">{item.group}</button>
                    </li>
                  );
                })}
              </ul>
              {/* districtGroup 選擇地區 */}
              {areaOptions.length > 0 && (
                <ul className="districtGroup list-unstyled mb-0">
                  <li className="py-3 px-6 d-flex justify-content-evenly">
                    <label htmlFor="selectAllAreas">全部</label>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name={`${dataType}Detail`}
                      id="selectAllAreas"
                      value="All"
                      checked={selectedDetail.length === 0}
                      onChange={handleSelectAllAreas}
                    />
                  </li>
                  {areaOptions.map((item) => {
                    return (
                      <li
                        key={item.key}
                        className="py-3 px-6 d-flex justify-content-evenly"
                      >
                        <label htmlFor={item.key}>{item.label}</label>
                        <input
                          {...register(detailFilterKey)}
                          type="checkbox"
                          className="form-check-input"
                          name={`${dataType}Detail`}
                          id={item.key}
                          value={item.label}
                        />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className="filterOptions_footer">
              <div className="row g-1">
                <div className="col-6">
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn justify-content-center btn-white"
                      onClick={handleReset}
                    >
                      重置
                    </button>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn justify-content-center btn-primary"
                      onClick={handleCloseDropDown}
                    >
                      確定
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
