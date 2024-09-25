'use client';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const customIcon = new L.Icon({
  iconUrl: markerIcon.src as string,
  iconRetinaUrl: markerIcon2x.src as string,
  shadowUrl: markerShadow.src as string,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Locations = () => {
  const locations = [
    {
      id: 4,
      href: 'https://maps.app.goo.gl/7EgtKZiD6erGW4cx9',
      position: [24.1139, 38.2689] as [number, number],
      displayText: 'Glow Arabia Trading Est Yanbu Branch',
    },
    {
      id: 5,
      href: 'https://maps.app.goo.gl/6vnrkmckNTFHzR7V6',
      position: [25.0, 37.0] as [number, number],
      displayText: 'Glow Arabia Trading Est Duba Branch',
    },
  ];

  return (
    <section className="container my-6">
      <h1 className="text-xl font-semibold">فروعي</h1>
      <div className="mt-6 flex max-w-7xl flex-col md:flex-row">
        <div className="w-full pr-0 md:w-1/2 md:pr-4">
          {/* Map container */}
          <MapContainer
            center={[24.5, 37.5]}
            zoom={7}
            scrollWheelZoom={false}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={location.position}
                icon={customIcon}
              >
                <Popup>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-red-500" />
                    <a
                      href={location.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {location.displayText}
                    </a>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <div className="mt-4 w-full pl-0 md:mt-0 md:w-1/2 md:pl-4">
          {/* Locations list container */}
          <div className="max-h-96 overflow-y-auto rounded-lg bg-white p-4 shadow-lg">
            <ul className="list-none">
              {locations.map((location) => (
                <li key={location.id} className="mb-4 flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-red-500" />
                  <a
                    href={location.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-blue-600 transition duration-200 hover:underline"
                  >
                    {location.displayText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
