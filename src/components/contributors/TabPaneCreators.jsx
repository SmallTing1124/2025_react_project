import { useEffect, useState } from 'react';

export default function TabPaneCreators({ spotRanking }) {
  const [rank4to10List, setRank4to10List] = useState([]);
  useEffect(() => {
    setRank4to10List(spotRanking?.slice(3, 10));
  }, [spotRanking]);
  return (
    <>
      <section className="leaderboard">
        <div className="row row-cols-lg-3 row-cols-1 align-items-end gy-13     justify-content-center">
          {spotRanking[0] && (
            <div className="col order-lg-2">
              <article className="card rank-badeg gold">
                <div className="card-body ">
                  <div className="avatar-img mb-4">
                    <img
                      src={spotRanking[0]?.userImage}
                      alt={spotRanking[0]?.userName}
                      width={144}
                      height={144}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="mb-4">{spotRanking[0]?.userName}</h4>
                  <time dateTime="2024-08-15" className="text-gray-600 fs-7">
                    最新開拓日：{spotRanking[0]?.added?.timeAgo}
                  </time>
                  <ul className="rank-list mt-lg-12 mt-8">
                    <li>
                      <span>新增景點</span>
                      <span>
                        <b className="fs-4">{spotRanking[0]?.added?.count}</b>筆
                      </span>
                    </li>
                    <li>
                      <span>編修景點</span>
                      <span>
                        <b className="fs-4">{spotRanking[0]?.edited.count}</b>筆
                      </span>
                    </li>
                    <li>
                      <span>景點評價</span>
                      <span>
                        <b className="fs-4">{spotRanking[0]?.comments.count}</b>
                        筆
                      </span>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          )}
          {spotRanking[1] && (
            <div className="col order-lg-1">
              <article className="card rank-badeg silver">
                <div className="card-body ">
                  <div className="avatar-img mb-4">
                    <img
                      src={spotRanking[1]?.userImage}
                      alt={spotRanking[1]?.userName}
                      width={144}
                      height={144}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="mb-4">{spotRanking[1]?.userName}</h4>
                  <time dateTime="2024-08-15" className="text-gray-600 fs-7">
                    最新開拓日：{spotRanking[1]?.added?.timeAgo}
                  </time>
                  <ul className="rank-list mt-lg-12 mt-8">
                    <li>
                      <span>新增景點</span>
                      <span>
                        <b className="fs-4">{spotRanking[1]?.added?.count}</b>筆
                      </span>
                    </li>
                    <li>
                      <span>編修景點</span>
                      <span>
                        <b className="fs-4">{spotRanking[1]?.edited?.count}</b>
                        筆
                      </span>
                    </li>
                    <li>
                      <span>景點評價</span>
                      <span>
                        <b className="fs-4">
                          {spotRanking[1]?.comments?.count}
                        </b>
                        筆
                      </span>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          )}
          {spotRanking[2] && (
            <div className="col order-lg-3">
              <article className="card rank-badeg copper">
                <div className="card-body ">
                  <div className="avatar-img mb-4">
                    <img
                      src={spotRanking[2]?.userImage}
                      alt={spotRanking[2]?.userName}
                      width={144}
                      height={144}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="mb-4">{spotRanking[2]?.userName}</h4>
                  <time dateTime="2024-08-15" className="text-gray-600 fs-7">
                    最新開拓日：{spotRanking[2]?.added.timeAgo}
                  </time>
                  <ul className="rank-list mt-lg-12 mt-8">
                    <li>
                      <span>新增景點</span>
                      <span>
                        <b className="fs-4">{spotRanking[2]?.added.count}</b>筆
                      </span>
                    </li>
                    <li>
                      <span>編修景點</span>
                      <span>
                        <b className="fs-4">{spotRanking[2]?.edited.count}</b>筆
                      </span>
                    </li>
                    <li>
                      <span>景點評價</span>
                      <span>
                        <b className="fs-4">{spotRanking[2]?.comments.count}</b>
                        筆
                      </span>
                    </li>
                  </ul>
                </div>
              </article>
            </div>
          )}
        </div>
      </section>
      {rank4to10List?.length > 0 && (
        <section className="mt-12">
          <article className="card rank-badeg p-lg-12 px-3 py-6">
            <div className="table-responsive">
              <table className="table table-striped text-start table-light-gray fw-medium align-middle">
                <thead>
                  <tr>
                    <th className="text-center ">排行</th>
                    <th>景點開拓者</th>
                    <th>筆數</th>
                    <th className="text-end ">最新開拓日</th>
                  </tr>
                </thead>
                <tbody>
                  {rank4to10List.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center fs-4">{index + 4}</td>
                        <td>
                          <div className="d-flex align-items-center gap-2">
                            <div className="avatar-img">
                              <img
                                src={item?.userImage}
                                alt={item?.userName}
                                width={40}
                                height={40}
                              />
                            </div>
                            {item?.userName}
                          </div>
                        </td>
                        <td>
                          新增景點<b className="fs-4">{item?.added?.count}</b>筆
                        </td>
                        <td className="text-end text-gray-600 fs-7">
                          最新開拓日・{item?.added?.timeAgo}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </article>
        </section>
      )}
    </>
  );
}
