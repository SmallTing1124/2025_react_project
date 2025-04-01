import axios from 'axios';
import { useEffect, useState } from 'react';
import TabPaneCreators from './TabPaneCreators';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function RankingList() {
  const [rankingData, setRankingData] = useState([]);
  const [spotCreatorsRanking, setSpotCreatorsRanking] = useState([]);
  const [spotEditorsRanking, setSpotEditorsRanking] = useState([]);
  const [commentersRanking, setCommentersRanking] = useState([]);
  useEffect(() => {
    const getRankingData = async () => {
      try {
        const res = await axios.get(
          `${BASE_URL}/users?&_embed=comments&_embed=editedSpot&_embed=locations`
        );
        const rankingList = res?.data
          .filter((item) => item.role !== 'admin')
          .map((item) => {
            return {
              userName: item?.nickname,
              userImage: item?.avatarImgUrl,
              added: {
                count: item?.locations?.length,
                latestTime: item?.locations
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((item) => item.createdAt)
                  .shift(),
                timeAgo: item?.locations
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map(
                    (item) =>
                      new Date(item.createdAt)
                        .toLocaleDateString('zh-TW', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })
                        .replace(/\//g, '年')
                        .replace('年', '年') + '日'
                  )
                  .shift(),
              },
              comments: {
                count: item?.comments?.length,
                latestTime: item?.comments
                  .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                  .map((item) => item.timestamp)
                  .shift(),
                timeAgo: item?.comments
                  .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
                  .map(
                    (item) =>
                      new Date(item.timestamp)
                        .toLocaleDateString('zh-TW', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })
                        .replace(/\//g, '年')
                        .replace('年', '年') + '日'
                  )
                  .shift(),
              },
              edited: {
                count: item?.editedSpot?.length,
                latestTime: item?.editedSpot
                  .sort((a, b) => new Date(b.editedAt) - new Date(a.editedAt))
                  .map((item) => item.editedAt)
                  .shift(),
                timeAgo: item?.editedSpot
                  .sort((a, b) => new Date(b.editedAt) - new Date(a.editedAt))
                  .map(
                    (item) =>
                      new Date(item.editedAt)
                        .toLocaleDateString('zh-TW', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })
                        .replace(/\//g, '年')
                        .replace('年', '年') + '日'
                  )
                  .shift(),
              },
            };
          });
        setRankingData(rankingList);
      } catch (error) {
        console.log(error);
      }
    };
    getRankingData();
  }, []);

  useEffect(() => {
    if (rankingData) {
      const creatorsShort = rankingData
        .filter((item) => item.added.count > 0)
        .sort((a, b) => b.added.count - a.added.count);

      setSpotCreatorsRanking(creatorsShort);

      const editorsShort = rankingData
        .filter((item) => item.edited.count > 0)
        .sort((a, b) => b.edited.count - a.edited.count);

      setSpotEditorsRanking(editorsShort);

      const commentersShort = rankingData
        .filter((item) => item.comments.count > 0)
        .sort((a, b) => b.comments.count - a.comments.count);

      setCommentersRanking(commentersShort);
    }
  }, [rankingData]);

  return (
    <>
      <div className="col-12">
        <ul
          className="nav nav-underline border-bottom justify-content-center gap-0 flex-nowrap"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-lg-10 px-6 active"
              id="creators-tab"
              data-bs-toggle="tab"
              data-bs-target="#creators-tab-pane"
              type="button"
              role="tab"
            >
              最多新增
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-lg-10 px-6"
              id="editors-tab"
              data-bs-toggle="tab"
              data-bs-target="#editors-tab-pane"
              type="button"
              role="tab"
              aria-controls="editors-tab-pane"
              aria-selected="false"
            >
              最多編修
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link px-lg-10 px-6"
              id="commenters-tab"
              data-bs-toggle="tab"
              data-bs-target="#commenters-tab-pane"
              type="button"
              role="tab"
              aria-controls="commenters-tab-pane"
              aria-selected="false"
            >
              最多評價
            </button>
          </li>
        </ul>
        <div
          className="tab-content text-center pt-lg-12 pt-6"
          id="myTabContent"
        >
          <div
            className="tab-pane fade show active"
            id="creators-tab-pane"
            role="tabpanel"
            aria-labelledby="creators-tab"
            tabIndex={0}
          >
            <TabPaneCreators spotRanking={spotCreatorsRanking} />
          </div>
          <div
            className="tab-pane fade"
            id="editors-tab-pane"
            role="tabpanel"
            aria-labelledby="editors-tab"
            tabIndex={0}
          >
            <TabPaneCreators spotRanking={spotEditorsRanking} />
          </div>
          <div
            className="tab-pane fade"
            id="commenters-tab-pane"
            role="tabpanel"
            aria-labelledby="commenters-tab"
            tabIndex={0}
          >
            <TabPaneCreators spotRanking={commentersRanking} />
          </div>
        </div>
      </div>
    </>
  );
}
