// 取得台灣地區資料
import BusinessStatusData from '../../../assets/json/status_options.json';
const BusinessStatus = BusinessStatusData;

export default function BusinessStatusRadio({ register, watch ,errors}) {
  const selectedStatus = watch('businessStatus');

  return (
    <>
      <div className="row align-items-center mb-4">
        <label htmlFor="inputOpenTime" className="col-md-2 col-form-label">
          經營狀態
          {errors?.businessStatus && <span className="text-danger">*</span>}
        </label>
        <div className="col-md-10">
          <div className="row gx-2">
            {BusinessStatus.map((state) => {
              return (
                <div className="col" key={state.key}>
                  <div className="form-check check-status">
                    <input
                      {...register('businessStatus',{
                        required: '經營狀態欄位必填',
                      })}
                      className="form-check-input"
                      type="radio"
                      name="businessStatus"
                      id={`btn-${state.key}-check`}
                      value={state.key} 
                      checked={selectedStatus === state.key} 
                    />
                    <label
                      className={`form-check-label label-${state.key}`}
                      htmlFor={`btn-${state.key}-check`}
                    >
                      <i className={`icon-${state.key}`} />
                      <span>{state.label}</span>
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
