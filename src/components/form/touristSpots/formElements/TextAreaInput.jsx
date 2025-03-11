export default function TextAreaInput({
  label,
  name,
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
        <textarea
          {...register(name, required)}
          className={`form-control rounded-1 ${errors[name] && 'is-invalid'}`}
          id={name}
          name={name}
          placeholder={`請填寫${label}，最多300文字`}
          maxLength={300}
          rows={5}
        />
        {errors[name] && (
          <div className="invalid-feedback">{errors[name]?.message}</div>
        )}
      </div>
    </div>
  );
}
