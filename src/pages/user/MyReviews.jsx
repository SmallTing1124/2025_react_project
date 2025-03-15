import axios from 'axios';
const BASE_URL = import.meta.env.VITE_BASE_URL;
import { Link, useOutletContext } from 'react-router';
import UserStats from './management/UserStats';
import {  useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import formatTimeAgo from '../../utils/formatTimeAgo';


export default function MyReviews() {
  const { userData } = useOutletContext();
  // 取得登入使用者id
  const loggedInUserId = useSelector((state) => state?.auth?.user?.id);
  //儲存 留言含景點詳情
  const [userComments, setUserComments] = useState([]);
  const [newUserComments, setNewUserComments] = useState([]);

  // 取得 登入會員的留言 含->景點詳情
  const getUserComments = async (loggedInUserId) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/comments?userId=${loggedInUserId}&_expand=location`
      );
      setUserComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserComments(loggedInUserId);
  }, [loggedInUserId]);

  useEffect(() => {
    const updataComments = userComments.map((comment) => {
      // dispatch(timeAgo(comment.timestamp));
      const timeAgo =  formatTimeAgo(comment.timestamp)
      return { ...comment, timeAgo };
    });
    setNewUserComments(updataComments);
  }, [userComments]);

  return (
    <>

      <UserStats userData={userData} />
      <h5 className="py-3 mb-5 border-bottom">景點評價</h5>
      <div className="row row-cols-1 row-cols-lg-2 g-4 reviews-list">

        {newUserComments?.map((comment) => {

          return (
            <div className="col" key={comment.id}>
              <div className="card">
                <div className="card-body p-6">
                  <div className="star">
                    {[...Array(5)].map((item, index) => {
                      return (
                        <span key={index} className={`material-symbols-outlined icon-filled ${ (index < comment.rating )?"text-secondary-600":"text-gray"}`}>
                          star
                        </span>
                      );
                    })}
                  </div>
                  <h4 className="my-2 text-primary">
                    {comment?.location?.name}
                  </h4>
                  <div className="fs-7">
                    <span>{comment.timeAgo}</span> 在
                    <b>
                      {comment?.location?.location?.city}
                      {comment?.location?.location?.area}
                    </b>
                  </div>
                  <hr />
                  <p className="text-line-2">{comment?.content}</p>
                  <Link to={`/tourist-spot/${comment.location.id}`} className="btn-open_new">
                    <span className="material-symbols-outlined">
                      open_in_new
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div className="col">
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
        </div> */}
      </div>
    </>
  );
}
