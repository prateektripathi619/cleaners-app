import React from "react";

function Top5Performers() {
	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-xl font-semibold">Top 5 Performers</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				<div className="bg-yellow-500 rounded-2xl p-4 flex justify-between items-center text-sm">
					<div className="flex items-center gap-2 font-medium">
						<p className="font-black">#1</p>
						<p className="">John Doe</p>
					</div>
					<p className="font-black">285 PT</p>
				</div>
				<div className="bg-gray-500 rounded-2xl p-4 flex justify-between items-center text-sm">
					<div className="flex items-center gap-2 font-medium">
						<p className="font-black">#2</p>
						<p className="">John Doe</p>
					</div>
					<p className="font-black">285 PT</p>
				</div>
				<div className="bg-amber-700 rounded-2xl p-4 flex justify-between items-center text-sm">
					<div className="flex items-center gap-2 font-medium">
						<p className="font-black">#3</p>
						<p className="">John Doe</p>
					</div>
					<p className="font-black">285 PT</p>
				</div>
				<div className="bg-gray-200 rounded-2xl p-4 flex justify-between items-center text-sm">
					<div className="flex items-center gap-2 font-medium">
						<p className="font-black">#4</p>
						<p className="">John Doe</p>
					</div>
					<p className="font-black">285 PT</p>
				</div>
			</div>
		</div>
	);
}

export default Top5Performers;
