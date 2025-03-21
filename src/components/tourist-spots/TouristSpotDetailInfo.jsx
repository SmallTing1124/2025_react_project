export default function TouristSpotDetailInfo({ title, touristSpot }) {
  return (
    <>
      <div className="col-12 col-lg-8 tourist-information rounded-5 px-2 px-lg-12 position-relative bg-grid-paper">
        <h2 className="d-flex d-lg-none title font-NaniFont text-center position-absolute  top-0 start-50 translate-middle align-items-center">
          {title}
        </h2>
        <h2 className=" d-none d-lg-flex title font-NaniFont text-center position-absolute">
          {title}
        </h2>
        <ul className="list-unstyled d-flex flex-column gap-2 py-15">
          {touristSpot.phone?.trim() && (
            <li className="d-flex gap-2 align-items-center">
              <span className="iconify-bi--telephone-fill text-secondary" />
              <b>電話號碼・</b>
              {touristSpot.phone}
            </li>
          )}
          {touristSpot.address && (
            <li className="d-flex gap-2 align-items-center pt-3">
              <span className="iconify-rivet-icons--map-pin-solid text-secondary" />
              <b>景點位置・</b>
              {touristSpot.address}
            </li>
          )}
          {touristSpot.googleMapEmbed && (
            <li>
              <div
                className="googleMapEmbed"
                dangerouslySetInnerHTML={{
                  __html: touristSpot.googleMapEmbed,
                }}
              />
            </li>
          )}
          {touristSpot?.businessHours && (
            <li className="d-flex gap-2">
              <span className="iconify-bi--telephone-fill text-secondary"></span>
              <b>營業時間・</b>
              <ul className="list-unstyled">
                {Object.keys(touristSpot?.businessHours).map(
                  (weekday, index) => {
                    return (
                      <li className="mb-2 d-flex gap-2" key={index}>
                        <span>{weekday}</span>
                        {touristSpot?.businessHours[weekday].length === 0
                          ? '休息'
                          : touristSpot?.businessHours[weekday].map(
                              (timeSlots, index) => {
                                return (
                                  <span key={index}>
                                    {timeSlots.startTime}-{timeSlots.endTime}
                                  </span>
                                );
                              }
                            )}
                      </li>
                    );
                  }
                )}
              </ul>
            </li>
          )}
          {touristSpot.suitableAge && (
            <li className="d-flex align-items-center gap-2">
              <span className="iconify-mingcute--baby-fill text-secondary"></span>
              <b>最小適齡・</b>
              {touristSpot.suitableAge} 歲+
            </li>
          )}
          {touristSpot.admissionFee && (
            <li className="d-flex align-items-center gap-2">
              <span className="iconify-rivet-icons--map-pin-solid text-secondary"></span>
              <b>最低消費・</b>NT${touristSpot.admissionFee}
            </li>
          )}
          {touristSpot?.facilities?.length > 0 && (
            <li className="d-flex align-items-center gap-2">
              <span className="iconify-ph--tree-fill text-secondary"></span>
              <b>周邊環境・</b>
              <ul className="tourist-infomation-label d-flex flex-row list-inline flex-wrap gap-2">
                {touristSpot?.facilityLabels?.map((facility) => {
                  return (
                    <li
                      key={facility.key}
                      className="tourist-information-label-item pe-3 bg-normal-gray rounded px-2 py-1 me-2"
                    >
                      <span
                        className={`${facility?.iconClass} align-middle text-gray-600  me-2`}
                      >
                        {facility?.iconName}{' '}
                      </span>
                      {facility?.name}
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
          {touristSpot?.transport?.length > 0 && (
            <li className="d-flex align-items-center gap-2">
              <span className="iconify-ph--tree-fill text-secondary"></span>
              <b>交通工具・</b>
              <ul className="tourist-infomation-label d-flex flex-row list-inline flex-wrap gap-2">
                {touristSpot?.transportLabels?.map((transport) => {
                  return (
                    <li
                      key={transport.key}
                      className="tourist-information-label-item pe-3 bg-normal-gray rounded px-2 py-1 me-2"
                    >
                      <span
                        className={`${transport?.iconClass} align-middle text-gray-600  me-2`}
                      ></span>
                      {transport?.name}
                    </li>
                  );
                })}
              </ul>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
