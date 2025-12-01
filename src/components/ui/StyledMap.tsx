"use client";

import { useMemo } from "react";
import Image from "next/image"; // Import Image
import { GoogleMap, useJsApiLoader, OverlayView } from "@react-google-maps/api";

// 1. LIGHT / CLEAN GRAY STYLES (Matches your screenshot)
const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#f5f5f5" }] },
  { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#616161" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f5f5" }] },
  {
    featureType: "administrative.land_parcel",
    elementType: "labels.text.fill",
    stylers: [{ color: "#bdbdbd" }],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ color: "#757575" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#dadada" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#616161" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
  {
    featureType: "transit.line",
    elementType: "geometry",
    stylers: [{ color: "#e5e5e5" }],
  },
  {
    featureType: "transit.station",
    elementType: "geometry",
    stylers: [{ color: "#eeeeee" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#c9c9c9" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9e9e9e" }],
  },
];

const getPixelPositionOffset = (width: number, height: number) => ({
  x: -(width / 2),
  y: -(height / 2),
});

export const StyledMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  // Coordinates (I updated this to Puttur based on your image)
  const center = useMemo(() => ({ lat: 12.7668, lng: 75.207 }), []);

  if (!isLoaded)
    return (
      <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
        Loading Map...
      </div>
    );

  return (
    <GoogleMap
      mapContainerClassName="w-full h-full"
      center={center}
      zoom={15}
      options={{
        styles: mapStyles, // APPLY THE NEW LIGHT STYLES HERE
        disableDefaultUI: true,
        zoomControl: true,
      }}
    >
      {/* 2. CUSTOM MARKER INSIDE THE MAP (Using OverlayView) */}
      <OverlayView
        position={center}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        {/* This div holds your stacked images */}
        <div className="relative w-20 h-20 cursor-pointer hover:scale-110 transition-transform duration-300">
          {/* Layer A: Green Circle */}
          <Image
            src="/green-circle.png"
            alt="Background"
            fill
            className="object-contain"
          />

          {/* Layer B: Gold Icon */}
          <div className="absolute inset-0 flex items-center justify-center pb-1">
            <Image
              src="/gold-icon.png"
              alt="Icon"
              width={32}
              height={20}
              className="object-contain"
            />
          </div>
        </div>
      </OverlayView>
    </GoogleMap>
  );
};
