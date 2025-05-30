import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";
import React from "react";

function PendingTasksList() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-semibold">Pending Tasks</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className="bg-gray-200 rounded-2xl p-4 flex justify-between items-center text-sm">
					<div className="flex items-center gap-2 font-medium">
						<p className="font-black">John Doe</p>
					</div>
					<div className="flex items-center gap-4 font-medium">
						<p className="font-black uppercase">0/5</p>
						<Button size={"icon"}>
							<Bell />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PendingTasksList;
