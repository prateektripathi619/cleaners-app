import { Folder, MapPin, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

function WorkersTaskLocationPage() {
	return (
		<div className="container space-y-8">
			<div className="space-y-4">
				<h4 className="text-xs text-red-700">🔥 Highest Priority</h4>
				<h1 className="text-xl font-semibold">Rajnandgaon</h1>
				<div className="space-y-2 w-4/5">
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Assigned to:
						</p>
						<p className="text-sm font-semibold">Ashirvad Satapathy</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Estimated Dumps:
						</p>
						<p className="text-sm font-semibold">10</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Status:
						</p>
						<p className="text-sm font-semibold">In Progress</p>
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
			<div className="grid grid-cols-3 gap-4">
				<Link
					href={"/workers/tasks/rajnandgaon/area-1"}
					className="aspect-square rounded-2xl border-2 border-primary bg-accent flex flex-col items-center justify-center">
					<Folder className="size-10" />
					<p className="text-sm font-medium">Area 1</p>
				</Link>
				<div className="aspect-square rounded-2xl border-dotted border-2 text-muted-foreground border-primary flex flex-col items-center justify-center">
					<Plus className="size-10" />
					<p className="text-sm font-medium">Add Area</p>
				</div>
			</div>
		</div>
	);
}

export default WorkersTaskLocationPage;
