import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "@/api/RestaurantApi";

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);

  return (
    <span>
      User searched for {city}
      <span>
        {results?.data.map((restaurant) => (
          <span>
            found - {restaurant.restaurantName}, {restaurant.city}
          </span>
        ))}
      </span>
    </span>
  );
};

export default SearchPage;
