'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const technicians = [
  { city: 'London',      lat: 51.505,  lng: -0.09,   active: 8 },
  { city: 'Birmingham',  lat: 52.48,   lng: -1.9,    active: 5 },
  { city: 'Manchester',  lat: 53.483,  lng: -2.244,  active: 4 },
  { city: 'Leeds',       lat: 53.8,    lng: -1.549,  active: 3 },
  { city: 'Edinburgh',   lat: 55.953,  lng: -3.188,  active: 2 },
  { city: 'Cardiff',     lat: 51.481,  lng: -3.179,  active: 2 },
  { city: 'Bristol',     lat: 51.454,  lng: -2.587,  active: 3 },
  { city: 'Sheffield',   lat: 53.383,  lng: -1.466,  active: 2 },
  { city: 'Liverpool',   lat: 53.4,    lng: -2.983,  active: 3 },
  { city: 'Nottingham',  lat: 52.954,  lng: -1.158,  active: 2 },
  { city: 'Southampton', lat: 50.9,    lng: -1.404,  active: 2 },
  { city: 'Glasgow',     lat: 55.864,  lng: -4.252,  active: 3 },
  { city: 'Newcastle',   lat: 54.978,  lng: -1.617,  active: 2 },
  { city: 'Leicester',   lat: 52.636,  lng: -1.133,  active: 2 },
  { city: 'Norwich',     lat: 52.628,  lng: 1.293,   active: 1 },
];

export default function UKMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const initialisingRef = useRef(false);

  useEffect(() => {
    if (initialisingRef.current) return;
    initialisingRef.current = true;

    let cancelled = false;

    const init = async () => {
      if (cancelled || !containerRef.current) {
        initialisingRef.current = false;
        return;
      }

      // Clean up previous map
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }

      const map = L.map(containerRef.current, {
        center: [54.5, -3.5],
        zoom: 5.5,
        scrollWheelZoom: false,
        zoomControl: true,
        fadeAnimation: true,
        zoomAnimation: true,
      });
      mapRef.current = map;
      initialisingRef.current = false;

      // Modern tile layer (CartoDB Voyager - clean and bright)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; CartoDB',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Add markers with animations
      technicians.forEach(({ city, lat, lng, active }) => {
        // Circle marker with theme colors
        const marker = L.circleMarker([lat, lng], {
          radius: active * 2 + 5,
          color: '#FBBF24', // yellow border
          fillColor: '#DC2626', // red fill
          fillOpacity: 0.8,
          weight: 2.5,
          opacity: 1,
          className: 'map-marker-pulse', // for CSS animation
        }).addTo(map);

        // Custom popup with theme styling
        marker.bindPopup(`
          <div style="
            background: white;
            border-radius: 12px;
            padding: 12px;
            min-width: 110px;
            text-align: center;
            border: 2px solid #FBBF24;
            box-shadow: 0 8px 20px rgba(0,0,0,0.15);
          ">
            <p style="font-weight: 800; color: #DC2626; font-size: 16px; margin: 0 0 4px;">${city}</p>
            <p style="font-weight: 900; color: #FBBF24; font-size: 24px; margin: 0; text-shadow: 0 2px 4px rgba(220,38,38,0.2);">
              ${active}
            </p>
            <p style="color: #6B7280; font-size: 11px; margin: 2px 0 0;">technicians active</p>
          </div>
        `, {
          className: 'custom-popup', // to remove default arrow if needed
        });
      });

      // Add a small legend overlay
      const legend = L.control({ position: 'bottomright' });
      legend.onAdd = () => {
        const div = L.DomUtil.create('div', 'map-legend');
        div.innerHTML = `
          <div style="
            background: white;
            border-radius: 8px;
            padding: 8px 12px;
            border: 1px solid #FBBF24;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            font-size: 12px;
            color: #DC2626;
            font-weight: 500;
          ">
            <span style="display:inline-block; width:12px; height:12px; background:#DC2626; border-radius:50%; margin-right:6px; border:2px solid #FBBF24;"></span>
            Active technicians
          </div>
        `;
        return div;
      };
      legend.addTo(map);
    };

    init();

    return () => {
      cancelled = true;
      initialisingRef.current = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* CSS animations for markers */}
      <style jsx global>{`
        .map-marker-pulse {
          animation: pulse-animation 2s infinite;
          transform-origin: center;
        }
        @keyframes pulse-animation {
          0% {
            filter: drop-shadow(0 0 0 rgba(220, 38, 38, 0.7));
          }
          50% {
            filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.9));
          }
          100% {
            filter: drop-shadow(0 0 0 rgba(220, 38, 38, 0.7));
          }
        }
        .custom-popup .leaflet-popup-content-wrapper {
          background: transparent;
          box-shadow: none;
          border-radius: 0;
          padding: 0;
        }
        .custom-popup .leaflet-popup-content {
          margin: 0;
          line-height: 1.4;
        }
        .custom-popup .leaflet-popup-tip {
          background: white;
          border: 2px solid #FBBF24;
        }
      `}</style>
      <div
        ref={containerRef}
        style={{ width: '100%', height: '100%' }}
        className="z-0 rounded-xl overflow-hidden shadow-xl border-2 border-red-100"
      />
    </>
  );
}