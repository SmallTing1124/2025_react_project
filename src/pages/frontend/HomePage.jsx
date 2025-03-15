import { Link } from 'react-router';
import TagCategories from '../../components/TagCategories';
import FeaturedTouristSpots from '../../components/FeaturedTouristSpots';

export default function HomePage() {


  return (
    <>
      <section className="banner-area">
        <img
          src="./images/home/banner-bg.svg"
          width="100%"
          className="d-none d-lg-block"
        />
        <img
          src="./images/home/banner_bg_mobile.jpg"
          width="100%"
          className="d-lg-none"
        />
      </section>
      
      <TagCategories />
      <FeaturedTouristSpots title="隨機推薦親子景點" />
      <section className="bg-secondary">
        <div className="container-xl position-relative">
          <div className="row">
            <div className="col">
              <div className="bg-grid-paper rounded-5 py-lg-14 pt-12 pb-17 position-relative mt-lg-14 mb-lg-16 my-12">
                <img
                  src="./images/home/deco_map.svg"
                  width={264}
                  className="mx-100 position-absolute top-0 mt-8 d-lg-block d-none"
                />
                <div className="text-center">
                  <h2 className="font-NaniFont text-primary fs-1  mb-lg-12 mb-6">
                    景點蒐集計畫
                  </h2>
                  <p className="mb-lg-12 mb-6">
                    讓親子旅遊更簡單
                    <br />
                    和我們一起整理親子景點
                  </p>
                  <Link
                    to={'/auth/register'}
                    className="btn btn-highligh btn-lg"
                  >
                    <span className="icon-logo-mini" />
                    JOIN US
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            src="./images/home/deco_idea.svg"
            width={373}
            className="mx-100 position-absolute bottom-0 end-0 d-lg-block d-none"
          />
          <img
            src="./images/home/deco_idea.svg"
            width={190}
            className="mx-100 position-absolute start-50  translate-middle-x bottom-0 end-0 d-lg-none"
          />
        </div>
      </section>
    </>
  );
}
