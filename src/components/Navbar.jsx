import { List, UserCircle } from "@phosphor-icons/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbMenu3 } from "react-icons/tb";

function Navbar() {
	const menu = [
		{
			title: "Dashboard",
			path: "/dashboard",
		},
		{
			title: "My URL(s)",
			path: "/user/urls",
		},
		// {
		// 	title: "Profile",
		// 	path: "/user/profile",
		// },
	];

	return (
		<header className="flex flex-col sm:flex-row gap-4 justify-between items-center shadow shadow-primary  p-4 relative">
			<div className="flex flex-col cursor-default">
				<p className="text-primary text-xl md:text-2xl 2xl:text-3xl font-bold whitespace-nowrap">
					URL Shortener
				</p>
				<span className="text-xs 2xl:text-sm whitespace-nowrap">
					Shorten, Share, and Track.
				</span>
			</div>

			<nav className="text-sm flex flex-row items-center gap-6">
				{menu.map(({ title, path }, index) => {
					return (
						<NavLink
							to={path}
							key={index}
							className={({ isActive }) =>
								`hover:text-primary hover:underline underline-offset-4 cursor-pointer ${
									isActive
										? "text-primary font-medium underline"
										: ""
								}`
							}
						>
							{title}
						</NavLink>
					);
				})}
			</nav>
		</header>
	);
}

export default Navbar;
