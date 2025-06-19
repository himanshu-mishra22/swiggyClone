import { Link } from "react-router";

function RestaurantCard({ restArr }) {
  return (
    <div className="flex flex-wrap justify-center gap-8 w-11/12 mx-auto py-6">
      {restArr.map((restDetails) => {
        const info = restDetails.info;

        return (
          <Link to={`/restraunts/${info.id}`}>
            <div
            key={info.id}
            className="w-72 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 p-4"
          >
            <img
              className="w-full h-40 object-cover rounded-xl"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/${info.cloudinaryImageId}`}
              alt={info.name}
            />

            <h2 className="text-lg font-bold mt-3 truncate">{info.name}</h2>

            <div className="flex flex-wrap text-sm text-gray-600 mt-2 space-x-3">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-semibold">
                ⭐ {info.avgRating}
              </span>
              <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                ⏱ {info.sla.slaString}
              </span>
            </div>

            <p className="mt-2 text-gray-500 truncate">🍽 {info.cuisines.join(", ")}</p>
            <p className="text-gray-400 text-sm mt-1">📍 {info.locality}</p>
          </div> 
          </Link>
          
        );
      })}
    </div>
  );
}

export default RestaurantCard;
