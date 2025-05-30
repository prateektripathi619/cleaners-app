import React from "react";

function TodaysTasks() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-semibold">Today's Tasks</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className="bg-gray-200 rounded-2xl p-4 flex justify-between items-center text-sm">
					<p className="font-medium">Survey 5 locations</p>
					<p className="text-muted-foreground">Completed 0/5</p>
				</div>
				<ul className="pl-8 space-y-3">
					<li>
						<div className="bg-gray-200 rounded-2xl p-4 flex justify-between items-center text-sm">
							<p className="font-medium">Rajnandgaon</p>
							<p className="text-red-500">Not Completed</p>
						</div>
					</li>
					<li>
						<div className="bg-gray-200 rounded-2xl p-4 flex justify-between items-center text-sm">
							<p className="font-medium">Rajiv Nagar</p>
							<p className="text-green-500">Completed</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default TodaysTasks;
