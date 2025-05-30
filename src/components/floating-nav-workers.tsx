"use client";
import { cn } from "@/lib/utils";
import {
	BellDot,
	ClipboardCheck,
	Home,
	MapPin,
	User,
	Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const workersLink = [
	{
		title: "Home",
		icon: Home,
		href: "/workers",
	},
	{
		title: "Tasks",
		icon: ClipboardCheck,
		href: "/workers/tasks",
	},
	{
		title: "Notifications",
		icon: BellDot,
		href: "/workers/notifications",
	},
	{
		title: "Account",
		icon: User,
		href: "#",
	},
];

const supervisorLink = [
	{
		title: "Home",
		icon: Home,
		href: "/supervisor",
	},
	{
		title: "Staff",
		icon: Users,
		href: "/supervisor/staff",
	},
	{
		title: "Locations",
		icon: MapPin,
		href: "/supervisor/locations",
	},
	{
		title: "Account",
		icon: User,
		href: "#",
	},
];

function FloatingNavWorkers() {
	const pathname = usePathname();
	const isSupervisor = pathname.includes("/supervisor");
	return (
		<div className="fixed bottom-0 left-0 w-full bg-transparent shadow-lg">
			<nav className="px-2 py-6 max-w-md mx-auto h-20 bg-background shadow-xl border-t-2 backdrop-filter backdrop-blur-sm">
				<div className="flex items-center justify-between h-full container">
					{isSupervisor
						? supervisorLink.map((item) => (
								<Link
									href={item.href}
									key={item.title}
									className={cn(
										"flex flex-col items-center gap-0.5 justify-center",
										pathname === item.href && "text-blue-500"
									)}>
									<item.icon className="size-5" />
									<span className="text-xs font-medium">{item.title}</span>
								</Link>
						  ))
						: workersLink.map((item) => (
								<Link
									href={item.href}
									key={item.title}
									className={cn(
										"flex flex-col items-center gap-0.5 justify-center",
										pathname === item.href && "text-blue-500"
									)}>
									<item.icon className="size-5" />
									<span className="text-xs font-medium">{item.title}</span>
								</Link>
						  ))}
					{/* <Link href="#" className="flex flex-col items-center gap-0.5">
						<Menu className="size-5" />
						<span className="text-xs font-medium">Menu</span>
					</Link> */}
				</div>
			</nav>
		</div>
	);
}

export default FloatingNavWorkers;

// {link.map((item) => (
//     <Link
//         href={item.link}
//         key={item.label}
//         className={cn(
//             "",
//             pathname === item.link &&
//                 "bg-background text-primary rounded-full h-8 px-4 flex items-center justify-center gap-1"
//         )}>
//         <item.icon
//             className={cn(
//                 "size-5",
//                 pathname === item.link && "size-4 stroke-2"
//             )}
//         />
//         <span
//             className={cn(
//                 "text-sm font-medium",
//                 pathname !== item.link && "hidden"
//             )}>
//             {item.label}
//         </span>
//     </Link>
// ))}
