import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Folder } from "lucide-react";

function StaffSinglePage() {
	return (
		<div className="container space-y-8">
			<div className="flex flex-col items-center gap-4 justify-center">
				<Avatar className="size-24">
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div className="flex flex-col items-center gap-2 w-4/5 mx-auto">
					<h1 className="text-2xl font-semibold text-center leading-none w-full line-clamp-1 text-ellipsis">
						Ashirvad Satapathy
					</h1>
					<p className="text-muted-foreground font-semibold leading-none uppercase">
						clr-05902
					</p>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<Card>
					<CardHeader>
						<CardDescription>Assigned Tasks</CardDescription>
						<CardTitle className="text-2xl font-semibold tabular-nums">
							150
						</CardTitle>
					</CardHeader>
				</Card>
				<Card>
					<CardHeader>
						<CardDescription>Completed Tasks</CardDescription>
						<CardTitle className="text-2xl font-semibold tabular-nums">
							126
						</CardTitle>
					</CardHeader>
				</Card>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<h1 className="text-lg font-semibold text-muted-foreground col-span-3">
					Today's Tasks
				</h1>

				<Link
					href={"/supervisor/staff/john-doe/tasks/rajnandgaon"}
					className="flex flex-col items-center justify-center gap-1 rounded-2xl aspect-square bg-gray-200">
					<Folder className="size-16" />
					<p className="text-sm font-medium text-center line-clamp-1 text-ellipsis w-full">
						Rajnandgaon
					</p>
				</Link>
			</div>
		</div>
	);
}

export default StaffSinglePage;
