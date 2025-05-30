import { Button } from "@/components/ui/button";
import { Folder, User } from "lucide-react";
import Link from "next/link";
import React from "react";

function LocationsPage() {
	return (
		<div className="container space-y-4">
			<div className="flex justify-between items-center">
				<h1 className="text-xl font-semibold">Locations</h1>
				<Button>Add Location</Button>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<Link
					href={"/supervisor/locations/rajnandgaon"}
					className="flex flex-col items-center justify-center gap-1 rounded-2xl aspect-square bg-gray-200">
					<Folder className="size-12" />
					<p className="text-sm font-medium text-center line-clamp-1 text-ellipsis w-full">
						Rajnandgaon
					</p>
				</Link>
			</div>
		</div>
	);
}

export default LocationsPage;
