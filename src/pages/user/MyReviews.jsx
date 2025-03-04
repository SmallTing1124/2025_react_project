import UserStats from './management/UserStats';

export default function MyReviews() {
  return (
    <>
      <UserStats />
      <h5 className="py-3 mb-5 border-bottom">景點評價</h5>
      <div className="row row-cols-1 row-cols-lg-2 g-4 reviews-list">
        <div className="col">
          <div className="card">
            <div className="card-body p-6">
              <div className="star">
                <span className="material-symbols-outlined text-secondary-600 icon-filled">
                  star
                </span>
                <span className="material-symbols-outlined text-secondary-600 icon-filled">
                  star
                </span>
                <span className="material-symbols-outlined text-secondary-600 icon-filled">
                  star
                </span>
                <span className="material-symbols-outlined text-gray icon-filled">
                  star
                </span>
                <span className="material-symbols-outlined text-gray icon-filled">
                  star
                </span>
              </div>
              <h4 className="my-2 text-primary">九九峰動物樂園</h4>
              <div className="fs-7">
                <span>1個月前</span> 在 <b>南投縣草屯鎮</b>
              </div>
              <hr />
              <p className="text-line-2">
                園區內的恐龍設施讓孩子們興奮不已,每個角落都充滿了驚喜。雖然戶外區域會有一些蚊蟲,但園區的清潔工作做得非常好,讓人感到舒適。動線的設計讓整個遊玩過程非常流暢。對於怕蟲子的人,防蚊液一定要準備好,但這並不會影響我們對這裡的喜愛。我們肯定還會再來!
              </p>
              <a href="#" className="btn-open_new">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body p-6">
              <div className="star">
                <span className="material-symbols-outlined text-secondary-600 icon-filled">
                  star
                </span>
                <span className="material-symbols-outlined text-secondary-600 icon-filled">
                  star
                </span>
                <span className="material-symbols-outlined text-secondary-600 icon-filled">
                  star
                </span>
                <span className="material-symbols-outlined text-secondary-600 icon-filled">
                  star
                </span>
                <span className="material-symbols-outlined text-secondary-600 icon-filled">
                  star
                </span>
              </div>
              <h4 className="my-2 text-primary">百果山探索樂園</h4>
              <div className="fs-7">
                <span>1個月前</span> 在 <b>南投縣草屯鎮</b>
              </div>
              <hr />
              <p className="text-line-2">
                園區的恐龍設施令人印象深刻,驚喜不斷。因為園區靠近山區,昆蟲可能會稍多一些,特別是在戶外區域,所以防蚊措施非常重要。不過,園區的清潔程度很高,動線規劃也很順暢,讓我們玩得非常開心。這是一個我們一定會再來的地方,尤其適合家庭出遊。」
              </p>
              <a href="#" className="btn-open_new">
                <span className="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
