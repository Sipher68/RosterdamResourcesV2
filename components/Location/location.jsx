// 'use client';

// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// import React from 'react';

// const center = {
//   lat: 14.451800481276926,
//   lng: 120.97294118650795,
// };

// 14.451800481276926, 120.97294118650795;

// const containerStyle = {
//   width: '100vw',
//   height: '300px',
// };

// export default function Location() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: '',
//   });

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     // This is just an example of getting and using the map instance!!! don't just blindly copy!
//     const bounds = new window.google.maps.LatLngBounds(center);
//     map.fitBounds(bounds);

//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   return isLoaded ? (
//     <div className="card d-flex align-items-center p-2">
//       <GoogleMap
//         mapContainerStyle={containerStyle}
//         center={center}
//         zoom={3}
//         onLoad={onLoad}
//         onUnmount={onUnmount}
//       >
//         {/* Child components, such as markers, info windows, etc. */}
//         <></>
//       </GoogleMap>
//     </div>
//   ) : (
//     <></>
//   );
// }
