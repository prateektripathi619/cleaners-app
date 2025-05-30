import React from "react";
import SlideShow from "./slideshow";
import TodaysTasks from "./todays-tasks";
import Top5Performers from "@/components/top-5";

function WorkersDashboard() {
	return (
		<div className="container space-y-8">
			<SlideShow />
			<TodaysTasks />
			<Top5Performers />
		</div>
	);
}

export default WorkersDashboard;
