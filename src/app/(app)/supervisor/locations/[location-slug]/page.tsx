import { Button } from "@/components/ui/button";
import React from "react";

function LocationSlugPage() {
	return (
		<div className="container space-y-8">
			<div className="space-y-4">
				<h4 className="text-xs text-red-700">🔥 Highest Priority</h4>
				<h1 className="text-xl font-semibold">Rajnandgaon</h1>
				<div className="space-y-2">
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Total Assignments:
						</p>
						<p className="text-sm font-semibold">147</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Completed Assignments:
						</p>
						<p className="text-sm font-semibold">100</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Total Dumps:
						</p>
						<p className="text-sm font-semibold">679</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Currently Assigned To:
						</p>
						<p className="text-sm font-semibold">Ashirvad Satapathy</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Location:
						</p>
						<p className="text-sm font-semibold">
							Rajnandgaon, Chhattisgarh, India
						</p>
					</div>
				</div>
			</div>

			<div className="fixed bottom-20 left-0 right-0 bg-background border-t-2 p-4 z-50 flex gap-4">
				<Button
					className="w-full border-primary border-2"
					variant={"secondary"}>
					Edit
				</Button>
				<Button className="w-full">Add Staff</Button>
			</div>
		</div>
	);
}

export default LocationSlugPage;
