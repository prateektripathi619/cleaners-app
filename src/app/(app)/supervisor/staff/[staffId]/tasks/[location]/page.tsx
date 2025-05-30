import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Folder } from "lucide-react";
import Link from "next/link";

function TaskLocations() {
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
			<Tabs defaultValue="results">
				<TabsList>
					<TabsTrigger value="results">Result</TabsTrigger>
					<TabsTrigger value="progress">Progress</TabsTrigger>
				</TabsList>
				<TabsContent value="results">
					<div className="space-y-2 w-4/5 mt-4">
						<div className="grid grid-cols-2">
							<p className="text-sm text-muted-foreground font-semibold">
								Total Dumps:
							</p>
							<p className="text-sm font-semibold">10</p>
						</div>
						<div className="grid grid-cols-2">
							<p className="text-sm text-muted-foreground font-semibold">
								Completed Dumps:
							</p>
							<p className="text-sm font-semibold">10</p>
						</div>
						<div className="grid grid-cols-2">
							<p className="text-sm text-muted-foreground font-semibold">
								Canceled Dumps:
							</p>
							<p className="text-sm font-semibold">0</p>
						</div>
					</div>
				</TabsContent>
				<TabsContent value="progress">
					<div className="grid grid-cols-3 gap-4 mt-4">
						<Link
							href={"/supervisor/staff/john-doe/tasks/rajnandgaon/area-1"}
							className="aspect-square rounded-2xl border-2 border-primary bg-accent flex flex-col items-center justify-center">
							<Folder className="size-10" />
							<p className="text-sm font-medium">Area 1</p>
						</Link>
					</div>
				</TabsContent>
			</Tabs>
		</div>
	);
}

export default TaskLocations;
