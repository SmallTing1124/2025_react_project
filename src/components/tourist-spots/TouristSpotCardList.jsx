import TouristSpotCard from './TouristSpotCard';

export default function TouristSpotCardList({filtertouristSpots}) {
  
  return (
    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-6">
      {filtertouristSpots.map((touristSpot) => {
        return (
          <div className="col" key={touristSpot.id}>
            <TouristSpotCard touristSpot={touristSpot}></TouristSpotCard>
          </div>
        );
      })}
    </div>
  );
}
