export default function TextInput({
  label,
  name,
  type = 'text',
  min,
  max,
  register,
  errors,
  required,
}) {
  return (
    <div className="row mb-4">
      <label htmlFor={name} className="col-md-2 col-form-label">
        {label}
        {errors[name] && <span className="text-danger">*</span>}
      </label>
      <div className="col-md-10">
        <input
          {...register(name, required)}
          type={type}
          className={`form-control rounded-1 ${errors[name] && 'is-invalid'}`}
          id={name}
          min={min}
          max={max}
          placeholder={`請輸入${label}`}
        />

        {errors[name] && (
          <div className="invalid-feedback">{errors[name]?.message}</div>
        )}
      </div>
    </div>
  );
}
