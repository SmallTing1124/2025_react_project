
export default function TouristTags({ touristSpot }) {
  return (
    <>
      <div className="col-12 col-lg-4 pt-lg-0 pt-12">
        <h4 className="mb-5">景點標籤</h4>
        {touristSpot.tags && (
          <ul className="list-inline d-flex flex-row flex-wrap gap-2">
            {touristSpot?.tags?.map((tag, index) => (
              <li key={index}>
                <button className="btn tag border-2" type="button">
                  <span className="text-primary">#</span>
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
