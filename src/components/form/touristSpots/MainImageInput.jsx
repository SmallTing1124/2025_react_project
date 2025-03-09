export default function MainImageInput({ register, watch, errors }) {
  const imageUrl = watch('imageUrl');
  return (
    <div className="row mt-3 mb-4">
      <label htmlFor="imageUrl" className="col-md-2 col-form-label">
        主要照片
        {errors.imageUrl && <span className="text-danger">*</span>}
      </label>
      <div className="col-md-10">
        <input
          {...register('imageUrl', {
            required: '主要照片欄位必填',
            // pattern: {
            //   value:
            //     /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$|^https?:\/\/.*\b(auto=format)\b.*/,
            //   message: '格式錯誤，檢查是否是有效的圖片',
            // },
          })}
          name="imageUrl"
          className={`form-control rounded-1 ${
            errors.imageUrl && 'is-invalid'
          }`}
          type="text"
          id="imageUrl"
          placeholder="請填寫圖片網址"
          value={imageUrl}
        />
        {errors?.imageUrl && (
          <div className="invalid-feedback">{errors?.imageUrl?.message}</div>
        )}
        {imageUrl && (
          <div
            className=" mt-2 rounded rounded-5 border border-1 text-end"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#eee',
              height: '20vh',
            }}
          >
            <button type="button" className="btn btn-sm btn-danger m-3">
              刪除照片
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
