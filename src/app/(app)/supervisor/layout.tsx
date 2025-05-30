import FloatingNavWorkers from "@/components/floating-nav-workers";
import Header from "@/components/header";
import React from "react";

function SupervisorLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			{children}
			<FloatingNavWorkers />
		</div>
	);
}

export default SupervisorLayout;
