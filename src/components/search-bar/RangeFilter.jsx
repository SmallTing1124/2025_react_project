import { Dropdown } from 'bootstrap';
import { useRef } from 'react';

export default function RangeFilter({ register, watch, setValue }) {
  const ageRange = watch('ageRange', 12);
  const handleReset = () => {
    setValue('ageRange', 0);
    if (dropdownRef.current) {
      const dropdown = Dropdown.getOrCreateInstance(dropdownRef.current);
      dropdown.hide(); // 確保有實例後再隱藏
    }
  };
  const dropdownRef = useRef(null);
  const handleCloseDropDown = () => {
    if (dropdownRef.current) {
      const dropdown = Dropdown.getOrCreateInstance(dropdownRef.current);
      dropdown.hide(); // 確保有實例後再隱藏
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
            適齡
          </button>
          <div
            ref={dropdownRef}
            className="dropdown-menu filterOptions filterOptions_area"
          >
            <div className="filterOptions_content flex-column py-6">
              <div className="filterOptions_slider">
                <h6 className="fw-bold">最小適合年齡</h6>
              </div>
              <div className="px-6">
                <label htmlFor="ageRange" className="form-label">
                  {ageRange}歲+
                </label>
                <br />
                <input
                  {...register('ageRange')}
                  type="range"
                  className="form-range"
                  id="ageRange"
                  name="ageRange"
                  min={0}
                  max={12}
                  step={1}
                />
              </div>
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
