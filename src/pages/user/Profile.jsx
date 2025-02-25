import React from "react";
import { Footer, Navbar } from "../../components";

function Profile() {
	return (
		<div className="h-screen px-4 py-4 flex flex-col">
			{/* Header and Navigation Bar */}
			<Navbar />

			{/* Main Body */}
			<main className="flex-grow"></main>

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default Profile;
