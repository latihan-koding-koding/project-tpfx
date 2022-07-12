import React, { useEffect, useRef } from 'react';

interface LatLng {
  lat: number;
  lng: number;
}

let map: google.maps.Map;
const Map = ({ center, zoom }: { center: LatLng; zoom: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    map = new window.google.maps.Map(document.getElementById('map') as HTMLElement, {
      center,
      zoom
    });

    const marker = new window.google.maps.Marker({
      position: center,
      map: map
    });

    const infowindow = new window.google.maps.InfoWindow({
      content: '<p>TPFX - PT Trijaya Pratama Futures </p>'
    });

    window.google.maps.event.addListener(marker, 'click', () => {
      infowindow.open(map, marker);
    });
  });

  return <div ref={ref} id="map" className="w-full h-full" />;
};

export default Map;
