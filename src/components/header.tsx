import React from "react";
import { ModeToggle } from "./mode-toggle";
import { BellDot, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

function Header() {
	return (
		<header className="h-20">
			<nav className="container h-full flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div className="flex flex-col gap-0.5">
						<p className="text-xs text-muted-foreground leading-none">
							Welcome back 👋,
						</p>
						<p className="text-sm font-medium leading-none">John Doe</p>
					</div>
				</div>
				{/* <Button
					variant="outline"
					className="border rounded-full flex items-center justify-center w-10 h-10">
					<BellDot size={18} />
				</Button> */}
			</nav>
		</header>
	);
}

export default Header;
