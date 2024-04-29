import Places from "./Places.jsx";
import { useState, useEffect } from "react";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          const sortedPlaces = sortPlacesByDistance(
            places,
            latitude,
            longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({
          message:
            error.message ||
            "요청이 올바르지 않습니다. 다시 확인하시고 시도하세요.",
        });
        setIsFetching(false);
      }
      // setAvailablePlaces(resData.places);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="응답에러 발생" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="장소 불러오는 중..."
      fallbackText="선택 가능한 장소가 없습니다."
      onSelectPlace={onSelectPlace}
    />
  );
}
