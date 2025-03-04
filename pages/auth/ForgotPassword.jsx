export default function ForgotPassword() {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <form action="" method="post" className="">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  重設密碼
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <p className="text-center mb-3">請填寫你的會員電子郵件</p>
                <div className="row g-3 flex-column">
                  <div className="form-floating col">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">電子郵件</label>
                  </div>
                  <div className="form-floating col">
                    <input
                      type="date"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="生日"
                    />
                    <label htmlFor="floatingPassword">生日</label>
                    <div className="text-center">
                      {/* <small class="text">限8-24碼英文數字符號</small> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  data-bs-dismiss="modal"
                >
                  取消
                </button>
                <button type="button" className="btn btn-primary">
                  送出
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
