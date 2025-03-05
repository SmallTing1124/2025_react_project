import SearchBarArea from '../../components/search-bar/SearchBarArea';
import TouristSpotCardList from '../../components/tourist-spots/TouristSpotCardList';

export default function TouristSpotsList() {
  return (
    <>
      <section
        className="pt-lg-15 pt-12 pb-0"
        style={{ background: 'url(/images/home/bg-light.jpg)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="page-title pb-13">
                  <h2 className="font-NaniFont text-primary fs-lg-1 fs-2">
                    親子景點篩選
                  </h2>
                  <p className="text-primary fs-3 font-NaniFont">
                    Search Filter bar
                  </p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-5">
                    <img
                      src="./images/home/deco-cat.svg"
                      width={315}
                      style={{ transform: 'translateY(-56px)' }}
                      className="mw-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="search-bar__area">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <SearchBarArea />
            </div>
          </div>
        </div>
      </section>
      <main className="pt-12 pb-15 bg-normal-gray">
        <div className="container">
          <TouristSpotCardList />
        </div>
      </main>
    </>
  );
}
