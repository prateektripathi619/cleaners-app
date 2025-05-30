import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

function AdminCards() {
	return (
		<div className="grid grid-cols-2 gap-4">
			<Card>
				<CardHeader>
					<CardDescription>Total Staff</CardDescription>
					<CardTitle className="text-2xl font-semibold tabular-nums">
						150
					</CardTitle>
				</CardHeader>
			</Card>
			<Card>
				<CardHeader>
					<CardDescription>Total Locations</CardDescription>
					<CardTitle className="text-2xl font-semibold tabular-nums">
						450
					</CardTitle>
				</CardHeader>
			</Card>
			<Card className="col-span-2">
				<CardHeader>
					<CardDescription>Total Assigned Tasks</CardDescription>
					<CardTitle className="text-2xl font-semibold tabular-nums">
						970
					</CardTitle>
				</CardHeader>
			</Card>
			<Card>
				<CardHeader>
					<CardDescription>Pending Tasks</CardDescription>
					<CardTitle className="text-2xl font-semibold tabular-nums">
						150
					</CardTitle>
				</CardHeader>
			</Card>
			<Card>
				<CardHeader>
					<CardDescription>Completed Tasks</CardDescription>
					<CardTitle className="text-2xl font-semibold tabular-nums">
						450
					</CardTitle>
				</CardHeader>
			</Card>
		</div>
	);
}

export default AdminCards;
