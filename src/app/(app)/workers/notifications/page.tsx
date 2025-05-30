import { BellDot, BrushCleaning, Timer } from "lucide-react";
import React from "react";

function NotificationsPage() {
	return (
		<div className="container space-y-6">
			<h1 className="text-xl font-semibold">Notifications</h1>
			<div className="space-y-4">
				<div className="p-4 space-y-3 rounded-lg bg-gray-100">
					<div className="flex items-center justify-between">
						<BrushCleaning className="size-4" />
						<p className="text-xs text-muted-foreground leading-none whitespace-nowrap">
							10:00 AM
						</p>
					</div>
					<p className="text-sm text-muted-foreground leading-none w-full">
						Your assigned to attend 5 locations today.
					</p>
				</div>
			</div>
		</div>
	);
}

export default NotificationsPage;
