import React, { useEffect, useState, useCallback, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./AdressMap.css";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCoordinates } from "./getCoordinates"; // Importez la fonction depuis le fichier

function AdressMap() {
  const { id } = useParams();
  mapboxgl.accessToken =
    "pk.eyJ1IjoiY2FjYTEyMzQiLCJhIjoiY2x5N2NpOGNiMDU0bzJpczc0djB0NzVsaCJ9.DWNbM7W4ta-HbcGPMK7qbA";

  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [userMarker, setUserMarker] = useState(null); // Pour stocker le marqueur utilisateur
  const [targetMarker, setTargetMarker] = useState(null); // Pour stocker le marqueur cible
  const [route, setRoute] = useState(null); // Pour stocker l'itinéraire
  const [questMessage, setQuestMessage] = useState(""); // Pour stocker le message de la quête en cours

  const hasShownWelcomeToasts = useRef(false); // Use ref to track if welcome toasts have been shown

  const toastTimeouts = useRef([]);

  useEffect(() => {
    if (!hasShownWelcomeToasts.current) {
      toast.info("En route pour ton entretien", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Slide,
      });

      toast.info(
        "Allez tu vas tout déchirer , ce poste est à toi !",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          transition: Slide,
        }
      );

      hasShownWelcomeToasts.current = true; // Mark welcome toasts as shown
    }

    const initializeMap = ({ setMap, mapboxgl }) => {
      const map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [0, 0],
        zoom: 1,
      });

      map.on("load", () => {
        setMap(map);
        map.resize();

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { longitude, latitude } = position.coords;
              setUserLocation([longitude, latitude]);

              // Animate the camera to the user's location
              map.flyTo({
                center: [longitude, latitude],
                zoom: 14,
                speed: 1.2,
                curve: 1.42,
                duration: 2000, // Shorter duration for faster geolocation
              });

              const marker = new mapboxgl.Marker({ color: "blue" })
                .setLngLat([longitude, latitude])
                .addTo(map);

              setUserMarker(marker);
            },
            (error) => console.error(error),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
          );

          navigator.geolocation.watchPosition(
            (position) => {
              const { longitude, latitude } = position.coords;
              setUserLocation([longitude, latitude]);

              if (userMarker) {
                userMarker.setLngLat([longitude, latitude]);
              } else {
                const marker = new mapboxgl.Marker({ color: "blue" })
                  .setLngLat([longitude, latitude])
                  .addTo(map);

                setUserMarker(marker);
              }
            },
            (error) => console.error(error),
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
          );
        }
      });
    };

    if (!map) initializeMap({ setMap, mapboxgl });
  }, [map, userMarker]);

  const clearAllTimeouts = () => {
    toastTimeouts.current.forEach((timeout) => clearTimeout(timeout));
    toastTimeouts.current = [];
  };

  const setRandomTargetLocation = (map) => {
    clearAllTimeouts(); // Clear existing timeouts
    const target = getCoordinates();
    if (target) {
      const { lng, lat, name } = target;

      if (targetMarker) {
        targetMarker
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setText(
              `Point à atteindre: ${name}`
            )
          )
          .addTo(map);
      } else {
        const el = document.createElement("div");
        el.className = "marker";
        el.style.backgroundColor = "green";
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.borderRadius = "50%";

        const newTargetMarker = new mapboxgl.Marker(el)
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setText(
              `Point à atteindre: ${name}`
            )
          )
          .addTo(map);

        setTargetMarker(newTargetMarker);
      }

      map.flyTo({
        center: [lng, lat],
        zoom: 14,
        speed: 1.2,
        curve: 1.42,
        duration: 3000, // Shorter duration to target location
        essential: true,
      });

      setTimeout(() => {
        if (userLocation) {
          map.flyTo({
            center: userLocation,
            zoom: 14,
            speed: 1.2,
            curve: 1.42,
            duration: 3000, // Shorter duration for returning to user location
            essential: true,
          });
        }
      }, 6000); // Reduced delay before returning to user location

      getRoute([lng, lat]);
    } else {
      console.error("Invalid coordinates");
    }
  };

  const getRoute = async (end) => {
    const [endLng, endLat] = end;
    const [startLng, startLat] = userLocation;

    const query = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${startLng},${startLat};${endLng},${endLat}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
      { method: "GET" }
    );
    const json = await query.json();
    const data = json.routes[0];
    const route = data.geometry.coordinates;

    if (map.getSource("route")) {
      map.getSource("route").setData({
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      });
    } else {
      map.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: route,
            },
          },
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#3887be",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }

    setRoute(route);
  };

  const centerOnUserLocation = useCallback(() => {
    if (userLocation && map) {
      map.flyTo({
        center: userLocation,
        zoom: 14,
        speed: 1.2,
        curve: 1.42,
        duration: 3000, // Duration for centering on user location
        essential: true,
      });
    }
  }, [userLocation, map]);

  return (
    <div>
      <div
        id="map"
        style={{ width: "100%", height: "100vh", cursor: "grab" }}
      />
      <ToastContainer
        position="top-center"
        autoClose={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={() => setRandomTargetLocation(map)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Commencez la navigation
        </button>
        <button
          onClick={centerOnUserLocation}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Centrer
        </button>
        <Link to={`/company/${id}`}>
        <button
           style={{
            padding: "10px 20px",
            backgroundColor: "#FF0000",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
            X
        </button>
        </Link>
      </div>
      {questMessage && (
        <div className="quest-widget">
          <span className="quest-widget-icon">🌿</span>
          {questMessage}
        </div>
      )}
    </div>
  );
}

export default AdressMap;
