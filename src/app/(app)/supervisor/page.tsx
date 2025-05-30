import Top5Performers from "@/components/top-5";
import AdminCards from "./admin-cards";
import PendingTasksList from "./pending-tasks-list";

function SupervisorPage() {
	return (
		<div className="container space-y-6">
			<AdminCards />
			<PendingTasksList />
			<Top5Performers />
		</div>
	);
}

export default SupervisorPage;
