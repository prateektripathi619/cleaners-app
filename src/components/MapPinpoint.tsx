"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Button } from "./ui/button";

export type Coordinates = [number, number] | null;

interface MapWithEventsProps {
	setCoordinates: (coords: Coordinates) => void;
}

interface MapPinpointProps {
	onCoordinatesSave: (data: {
		latitude: number;
		longitude: number;
		accuracy: number;
	}) => void;
}

// Client-side only map component
const MapWithEvents = ({ setCoordinates }: MapWithEventsProps) => {
	useMapEvents({
		click(e) {
			setCoordinates([e.latlng.lat, e.latlng.lng]);
		},
	});
	return null;
};

// Dynamic import for client-side rendering
const Map = dynamic(() => import("./MapComponent"), {
	ssr: false,
	loading: () => (
		<div className="h-[60vh] w-full bg-gray-100 animate-pulse rounded-lg" />
	),
	suspense: false,
});

const MapPinpoint = ({ onCoordinatesSave }: MapPinpointProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [coordinates, setCoordinates] = useState<Coordinates>(null);

	const handleSave = () => {
		if (coordinates) {
			onCoordinatesSave({
				latitude: coordinates[0],
				longitude: coordinates[1],
				accuracy: 10,
			}); // Mock accuracy
			setIsOpen(false);
			setCoordinates(null);
		}
	};

	useEffect(() => {
		if (window) {
			// Fix Leaflet default icon issue
			const DefaultIcon = L.Icon.Default as any;
			if (DefaultIcon.prototype._getIconUrl) {
				delete DefaultIcon.prototype._getIconUrl;
			}
			DefaultIcon.mergeOptions({
				iconRetinaUrl:
					"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
				iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
				shadowUrl:
					"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
			});
		}
	}, []);

	return (
		<div>
			<Button
				onClick={() => setIsOpen(true)}
				className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
				Pinpoint Location
			</Button>

			{isOpen && (
				<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
					<div className="bg-white rounded-lg p-4 w-full max-w-2xl h-[80vh] relative">
						<Button
							onClick={() => setIsOpen(false)}
							className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
							✕
						</Button>
						<h2 className="text-lg font-semibold mb-2">Select Location</h2>
						<div className="h-[60vh] w-full">
							<Map coordinates={coordinates} setCoordinates={setCoordinates} />
						</div>
						<div className="mt-4 flex justify-between">
							<p className="text-sm">
								{coordinates
									? `Lat: ${coordinates[0].toFixed(
											6
									  )}, Lng: ${coordinates[1].toFixed(6)}`
									: "Click map to select"}
							</p>
							<Button
								onClick={handleSave}
								disabled={!coordinates}
								className={`px-4 py-2 rounded-lg ${
									coordinates
										? "bg-green-600 text-white hover:bg-green-700"
										: "bg-gray-400 text-gray-200"
								}`}>
								Save Coordinates
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default MapPinpoint;
