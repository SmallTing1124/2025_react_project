export default function MultipleImageInput({ register, watch }) {
  return (
    <>
      <div className="row mb-4">
        <label htmlFor="inputTouristName" className="col-md-2 col-form-label">
          補充照片<span className="text-danger">*</span>
        </label>
        <div className="col-md-10">
          <div className="row ">
            <div className="col-md-6 mb-4">
              <input
                {...register('imagesUrl1')}
                name="imagesUrl1"
                className="form-control"
                type="text"
                id="imageUrl"
                placeholder="請填寫圖片網址"
              />
              <img
                className="img-fluid mt-2 rounded rounded-5 border border-1"
                src="https://raw.githubusercontent.com/ahmomoz/img0106/main/ziongmei01.jpg"
              />
            </div>
            <div className="col-md-6 mb-4">
              <input
                {...register('imagesUrl2')}
                name="imagesUrl2"
                className="form-control"
                type="text"
                id="imageUrl"
                placeholder="請填寫圖片網址"
              />
              <img
                className="img-fluid mt-2 rounded rounded-5 border border-1"
                src="https://raw.githubusercontent.com/ahmomoz/img0106/main/ziongmei01.jpg"
              />
            </div>

            <div className="col-md-6 mb-4">
              <input
                {...register('imagesUrl3')}
                name="imagesUrl3"
                className="form-control"
                type="text"
                id="imageUrl"
                placeholder="請填寫圖片網址"
              />
              <img
                className="img-fluid mt-2 rounded rounded-5 border border-1"
                src="https://raw.githubusercontent.com/ahmomoz/img0106/main/ziongmei01.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
