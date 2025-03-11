export default function TabNavigation() {
  return (
    <>
      <nav className="">
        <div className="d-flex nav nav-underline" id="nav-tab" role="tablist">
          <button
            className="flex-fill nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            景點資訊
          </button>
          <button
            className="flex-fill nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            景點簡介
          </button>
          <button
            className="flex-fill nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            景點評價
          </button>
        </div>
      </nav>
    </>
  );
}
