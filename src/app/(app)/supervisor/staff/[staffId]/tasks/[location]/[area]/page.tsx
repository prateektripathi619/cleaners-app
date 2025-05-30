import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import React from "react";

function AreaPage() {
	const beforeScore: number = 5;
	const afterScore: number = 9;
	return (
		<div className="container space-y-8">
			<div className="space-y-4">
				<h1 className="text-xl font-semibold">Rajnandgaon / Area 1</h1>
				<div className="space-y-2 w-4/5">
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Task Status:
						</p>
						<p className="text-sm font-semibold">Completed</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Time Taken:
						</p>
						<p className="text-sm font-semibold">47 mins</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Before Coordinates:
						</p>
						<p className="text-sm font-semibold">22.123456, 79.123456</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							After Coordinates:
						</p>
						<p className="text-sm font-semibold">22.123456, 79.123456</p>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4">
				<h1 className="font-semibold text-center bg-foreground text-background rounded-xl py-2">
					Before
				</h1>
				<h1 className="font-semibold text-center bg-foreground text-background rounded-xl py-2">
					After
				</h1>
				<div className="aspect-square rounded-2xl border-2 border-primary border-dashed bg-accent flex flex-col items-center justify-center">
					<Plus className="size-10" />
					<p className="text-sm font-medium">Add Photo</p>
				</div>
				<div className="aspect-square rounded-2xl border-2 border-primary border-dashed bg-accent flex flex-col items-center justify-center">
					<Plus className="size-10" />
					<p className="text-sm font-medium">Add Photo</p>
				</div>
				<h1
					className={cn(
						"font-semibold text-center rounded-xl py-2",
						beforeScore === 1 && "bg-red-900 text-black",
						beforeScore === 2 && "bg-red-800 text-black",
						beforeScore === 3 && "bg-red-600 text-black",
						beforeScore === 4 && "bg-red-500 text-black",
						beforeScore === 5 && "bg-red-400 text-white",
						beforeScore === 6 && "bg-green-500 text-white",
						beforeScore === 7 && "bg-green-600 text-white",
						beforeScore === 8 && "bg-green-700 text-white",
						beforeScore === 9 && "bg-green-800 text-white",
						beforeScore === 10 && "bg-green-900 text-white"
					)}>
					Score : 5
				</h1>
				<h1
					className={cn(
						"font-semibold text-center rounded-xl py-2",
						afterScore === 1 && "bg-red-900 text-black",
						afterScore === 2 && "bg-red-800 text-black",
						afterScore === 3 && "bg-red-600 text-black",
						afterScore === 4 && "bg-red-500 text-black",
						afterScore === 5 && "bg-red-400 text-white",
						afterScore === 6 && "bg-green-500 text-white",
						afterScore === 7 && "bg-green-600 text-white",
						afterScore === 8 && "bg-green-700 text-white",
						afterScore === 9 && "bg-green-800 text-white",
						afterScore === 10 && "bg-green-900 text-white"
					)}>
					Score : 9
				</h1>
			</div>
			<div className="space-y-4">
				<h1 className="text-xl font-semibold">Analysis</h1>
				<div className="space-y-2 w-4/5">
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Task Status:
						</p>
						<p className="text-sm font-semibold">Completed</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Time Taken:
						</p>
						<p className="text-sm font-semibold">47 mins</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							Before Coordinates:
						</p>
						<p className="text-sm font-semibold">22.123456, 79.123456</p>
					</div>
					<div className="grid grid-cols-2">
						<p className="text-sm text-muted-foreground font-semibold">
							After Coordinates:
						</p>
						<p className="text-sm font-semibold">22.123456, 79.123456</p>
					</div>
				</div>
			</div>
			<div className="fixed bottom-20 left-0 right-0 bg-background border-t-2 p-4 z-50 flex gap-4">
				<Button className="w-full" variant={"destructive"}>
					Reject
				</Button>
				<Button className="w-full bg-green-500">Approve</Button>
			</div>
		</div>
	);
}

export default AreaPage;
