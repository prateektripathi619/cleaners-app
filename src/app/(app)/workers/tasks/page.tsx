import { Folder } from "lucide-react";
import Link from "next/link";
import React from "react";

function WorkersTasks() {
	return (
		<div className="container space-y-8">
			<div className="space-y-4">
				<h1 className="text-xl font-semibold">Today's Tasks</h1>
				<div className="space-y-2 w-4/5">
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Total Tasks:
						</p>
						<p className="text-sm font-semibold">5 Locations</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Estimated Dumps:
						</p>
						<p className="text-sm font-semibold">25 Dumps</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Points:
						</p>
						<p className="text-sm font-semibold">+100 Points</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<Link
					href={"/workers/tasks/rajnandgaon"}
					className="flex flex-col items-center justify-center gap-1 rounded-2xl aspect-square bg-gray-200">
					<Folder className="size-16" />
					<p className="text-sm font-medium text-center line-clamp-1 text-ellipsis w-full">
						Rajnandgaon
					</p>
				</Link>
				<div className="flex flex-col items-center justify-center gap-1 rounded-2xl aspect-square bg-gray-200">
					<Folder className="size-16" />
					<p className="text-sm font-medium text-center line-clamp-1 text-ellipsis w-full">
						Rajnandgaon
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-1 rounded-2xl aspect-square bg-gray-200">
					<Folder className="size-16" />
					<p className="text-sm font-medium text-center line-clamp-1 text-ellipsis w-full">
						Rajnandgaon
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-1 rounded-2xl aspect-square bg-gray-200">
					<Folder className="size-16" />
					<p className="text-sm font-medium text-center line-clamp-1 text-ellipsis w-full">
						Rajnandgaon
					</p>
				</div>
				<div className="flex flex-col items-center justify-center gap-1 rounded-2xl aspect-square bg-gray-200">
					<Folder className="size-16" />
					<p className="text-sm font-medium text-center line-clamp-1 text-ellipsis w-full">
						Rajnandgaon
					</p>
				</div>
			</div>
		</div>
	);
}

export default WorkersTasks;
