export default function TouristSpotDescription({touristSpot}) {
  return (
    <div className="col-12  rounded-5 px-2 px-lg-12 pb-12 position-relative tourist-information tourist-detail bg-grid-paper">
      <h2 className="d-flex d-lg-none title font-NaniFont text-center position-absolute  top-0 start-50 translate-middle align-items-center">
        景點簡介
      </h2>
      <h2 className=" d-none d-lg-flex title font-NaniFont text-center position-absolute">
        景點簡介
      </h2>
      <p className="pt-12 lh-base">{touristSpot.description}</p>
      <p className=" pt-12 lh-base">{touristSpot.notice}</p>
    </div>
  );
}
