import React from "react";

function AppLayout({ children }: { children: React.ReactNode }) {
	return <div className="pb-32">{children}</div>;
}

export default AppLayout;
