export default function UserProfile() {
  return (
    <>
      <div className="card">
        <div className="card-header px-lg-6  py-4 text-lg-start text-center">
          <h5 className="text-gray-700">基本資料</h5>
        </div>
        <div className="card-body p-lg-6 p-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <label htmlFor="formUserName" className="form-label">
                姓名
                <span className="text-highligh-600 d-inlinr-block ps-1">*</span>
              </label>
              <input
                type="text"
                className="form-control rounded-2"
                id="formUserName"
                placeholder="請輸入姓名"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="formNickname" className="form-label">
                暱稱
                <span className="text-highligh-600 d-inlinr-block ps-1">*</span>
              </label>
              <input
                type="text"
                className="form-control rounded-2"
                id="formNickname"
                placeholder="請輸入暱稱"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="formBirthdate" className="form-label">
                生日
                <span className="text-highligh-600 d-inlinr-block ps-1">*</span>
              </label>
              <input
                type="date"
                className="form-control rounded-2"
                id="formBirthdate"
                placeholder="請輸入生日"
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="formGender" className="form-label">
                性別
                <span className="text-highligh-600 d-inlinr-block ps-1">*</span>
              </label>
              <select className="form-select rounded-2">
                <option selected="">選擇性別</option>
                <option value={1}>男生</option>
                <option value={2}>女生</option>
                <option value={3}>其他</option>
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="formNickname" className="form-label">
                電話
                <span className="text-highligh-600 d-inlinr-block ps-1">*</span>
              </label>
              <input
                type="tel"
                className="form-control rounded-2"
                id="formNickname"
                placeholder="請輸入聯絡電話"
              />
            </div>
            <div className="col-12">
              <label htmlFor="formNickname" className="form-label">
                信箱
                <span className="text-highligh-600 d-inlinr-block ps-1">*</span>
              </label>
              <input
                type="email"
                className="form-control rounded-2"
                id="formNickname"
                placeholder="請輸入聯絡信箱"
              />
            </div>
            <div className="col-12">
              <label htmlFor="formNickname" className="form-label">
                所在地區
                <span className="text-highligh-600 d-inlinr-block ps-1">*</span>
              </label>
              <div className="row g-4">
                <div className="col-lg-6">
                  <select className="form-select rounded-2">
                    <option selected="">選擇所在縣市</option>
                    <option value={1}>台北市</option>
                    <option value={2}>新北市</option>
                    <option value={3}>桃園市</option>
                  </select>
                </div>
                <div className="col-lg-6">
                  <select className="form-select rounded-2">
                    <option selected="">選擇所在區域</option>
                    <option value={1}>大安區</option>
                    <option value={2}>松山區</option>
                    <option value={3}>大同區</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer px-lg-6  py-2 text-lg-end text-center">
          <a
            href="#"
            className="btn btn-primary rounded-2 d-lg-inline-block d-block py-2"
          >
            儲存
          </a>
        </div>
      </div>
    </>
  );
}
