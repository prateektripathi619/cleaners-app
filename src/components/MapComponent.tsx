"use client";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import { Coordinates } from "./MapPinpoint";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// Fix Leaflet default icon issue
const DefaultIcon = L.Icon.Default as any;
if (DefaultIcon.prototype._getIconUrl) {
	delete DefaultIcon.prototype._getIconUrl;
}
DefaultIcon.mergeOptions({
	iconRetinaUrl:
		"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
	iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
	shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface MapComponentProps {
	coordinates: Coordinates;
	setCoordinates: (coords: Coordinates) => void;
}

const MapWithEvents = ({
	setCoordinates,
}: {
	setCoordinates: (coords: Coordinates) => void;
}) => {
	useMapEvents({
		click(e) {
			setCoordinates([e.latlng.lat, e.latlng.lng]);
		},
	});
	return null;
};

const MapComponent = ({ coordinates, setCoordinates }: MapComponentProps) => {
	useEffect(() => {
		// undefined window error fix
		if (typeof window !== "undefined") {
			window.L = L;
		}
	}, [coordinates]);
	return (
		<MapContainer
			center={[21.25, 81.63]} // Raipur
			zoom={13}
			style={{ height: "100%", width: "100%" }}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
			/>
			<MapWithEvents setCoordinates={setCoordinates} />
			{coordinates && <Marker position={coordinates} />}
		</MapContainer>
	);
};

export default MapComponent;
