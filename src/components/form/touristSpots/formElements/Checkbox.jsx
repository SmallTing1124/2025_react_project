export default function Checkbox({
  label,
  name,
  CheckboxData,
  register,
}) {
  return (
    <>
      <div className="row mb-4">
        <label htmlFor={name} className="col-md-2 col-form-label">
          {label}
          {/* <span className="text-danger">*</span> */}
        </label>
        <div className="col-md-10 d-flex flex-wrap gap-2">
          {CheckboxData.map((item, index) => {
            return (
              <div
                key={`${item.key}-${index}`}
                className="form-check form-check-inline btn-form-check"
              >
                <input
                  {...register(name)}
                  name={name}
                  className="form-check-input"
                  type="checkbox"
                  id={`${name}-${item.key}`}
                  value={item.key}
                />
                <label
                  className="form-check-label"
                  htmlFor={`${name}-${item.key}`}
                >
                  <span className={item.iconClass}>{item?.iconName}</span>
                  {item.name}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
