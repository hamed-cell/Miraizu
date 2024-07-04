// import {useParams} from "react-router-dom";
import { companies as companiesData } from "../../data/companies";

export const getCoordinates = () => {
  const id = window.location.href.split('/').reverse()[0]
  const target = companiesData[id];

  if (target && target.coordinates && Array.isArray(target.coordinates) && target.coordinates.length === 2) {
    const [lng, lat] = target.coordinates;
    if (!isNaN(lng) && !isNaN(lat)) {
      return {
        lng,
        lat,
        name: target.name,
      };
    }
  }
  return null;
};