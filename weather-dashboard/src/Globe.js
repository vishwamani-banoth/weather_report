import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';

export default function GlobeComponent({ cityCoordinates }) {
  const globeEl = useRef();
  // const markersEl = useRef();

  const latitude = cityCoordinates[0];
  const longitude = cityCoordinates[1];

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 1;
      globeEl.current.controls().enableZoom = false;
      globeEl.current.pointOfView({
        lat: latitude,
        lng: longitude,
        altitude: 2.5,
      });
    }

    // if (markersEl.current) {
    //   markersEl.current.add([
    //     {
    //       id: '1',
    //       coordinates: [40.7128, -74.0060],
    //       type: 'dot',
    //       color: 'red',
    //       label: 'Selected City',
    //       city: 'New York',
    //     },
    //   ]);
    // }
  }, [latitude, longitude]);

  return (
    <div id="mainGlobe">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundImageUrl="https://upload.wikimedia.org/wikipedia/commons/d/d3/City_Lights_2012_-_Flat_map_crop.jpg"
        backgroundColor="black"
        
      >
        {/* <Globe.Layers>
          <Globe.Markers ref={markersEl} />
        </Globe.Layers> */}
      </Globe>
    </div>
  );
}