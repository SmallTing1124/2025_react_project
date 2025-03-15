import { useNavigate } from "react-router";

export default function TagCategories() {
  const navigate = useNavigate();
  const handleTagClick = (tag) => {
    navigate(`/tourist-spots?keyword=${encodeURIComponent(tag)}`)
  };
  return (
    <>
      <section className="page01 pt-14 ">
        <div className="container-xl">
          <div className="text-center">
            <h2 className="font-NaniFont text-primary page-title fs-1">
              週末不知道<span className="d-block d-lg-inline">帶小孩</span>
              <span className="d-block">去哪裡嗎？</span>
            </h2>
          </div>
          <div className="p-lg-8 p-6 border border-primary border-3 rounded-5 bg-white">
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 gy-6">
              {[
                { src: './images/home/where_1.jpg', alt: '戶外', tag: '戶外' },
                { src: './images/home/where_5.jpg', alt: '恐龍', tag: '恐龍' },
                { src: './images/home/where_3.jpg', alt: '室內', tag: '室內' },
                { src: './images/home/where_6.jpg', alt: '螢火蟲', tag: '螢火蟲' },
              ].map(({ src, alt, tag }) => (
                <div className="col" key={tag}>
                  <div
                    className="card tag-card rounded-4 overflow-hidden border-0"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleTagClick(tag)}
                  >
                    <div className="inner-img">
                      <img src={src} alt={alt} />
                    </div>
                    <h3 className="tag-title">＃{tag}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="deco-vehicle position-relative pt-lg-18 pt-16">
          <img
            src="./images/home/deco_taxi.svg"
            width={138}
            className="position-absolute bottom-0"
          />
          <img
            src="./images/home/deco_bus_move.svg"
            width={172}
            className="position-absolute bottom-0"
          />
        </div>
      </section>
    </>
  );
}
