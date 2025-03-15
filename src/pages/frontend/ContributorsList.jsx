import RankingList from '../../components/contributors/RankingList';
import SpotContributorThanks from '../../components/contributors/SpotContributorThanks';

export default function ContributorsList() {
  return (
    <>
      <section className="py-lg-14 py-8 bg-secondary">
        <div className="container-xl">
          <div className="row">
            <div className="col-12 g-0">
              <SpotContributorThanks title="景點開拓者" />
            </div>
          </div>
        </div>
      </section>
      <main className="py-lg-15 py-12">
        <div className="container-xl">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <div className="page-title pb-13">
                  <h2 className="font-NaniFont bg-deco-msg bg-deco-msg-secondary text-primary fs-lg-1 fs-2 d-flex justify-content-center gap-4  align-items-center">
                    <div>
                      開拓排行榜
                      <span className="text-white font-NaniFont d-block">
                        Ranking List
                      </span>
                    </div>
                    <img
                      src="./images/contributors/deco-hill.svg"
                      height={70}
                    />
                  </h2>
                </div>
              </div>
            </div>
            <RankingList />
          </div>
        </div>
      </main>
    </>
  );
}
