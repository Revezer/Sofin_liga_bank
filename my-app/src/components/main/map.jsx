import React, {useEffect, useRef} from 'react';
import leaflet from 'leaflet';
import "leaflet/dist/leaflet.css";
import iconPoint from '../../img/location.svg';

const region = {
  "latitude": 55,
  "longitude": 65,
  "zoom": `5`
};

const points = [
  {
    latitude: 57.1522200,
    longitude: 65.5272200
  },
  {
    latitude: 54.9924400,
    longitude: 73.3685900
  },
  {
    latitude: 55.7887400,
    longitude: 49.1221400
  }
]

const Map = () => {

  const mapRef = useRef();

  useEffect(() => {
    const map = leaflet.map(mapRef.current, {
      center: {
        lat: region.latitude,
        lon: region.longitude
      },
      zoom: region.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: iconPoint,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: point.latitude,
        lon: point.longitude
      },
      {
        icon: customIcon
      })
      .addTo(map);
    });
    return () => {
      map.remove();
    };
  }, [points]);

  return (
    <>
      <span className='titleMap'>Отделения Лига Банка</span>
      <div ref={mapRef} className='map' id='map'></div>
    </>
  );
};

export default Map;
