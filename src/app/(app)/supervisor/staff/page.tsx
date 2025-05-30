import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Folder, User } from "lucide-react";
import Link from "next/link";
import React from "react";

function StaffPage() {
	return (
		<div className="container space-y-6">
			<div className="flex justify-between items-center">
				<h1 className="text-xl font-semibold">Staff</h1>
				<Button>Add Staff</Button>
			</div>
			<div className="grid grid-cols-3 gap-4">
				<Link
					href={"/supervisor/staff/john-doe"}
					className="flex flex-col items-center justify-center gap-1 rounded-2xl aspect-square bg-gray-200">
					<Avatar className="size-12">
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>
							<User className="size-12" />
						</AvatarFallback>
					</Avatar>
					<p className="text-sm font-medium text-center line-clamp-1 text-ellipsis w-full">
						John Doe
					</p>
				</Link>
			</div>
		</div>
	);
}

export default StaffPage;
