import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
	return (
		<footer className="flex flex-col-reverse sm:flex-row gap-2 items-center justify-between pt-4 cursor-default bg-secondary shadow shadow-primary text-white p-4">
			<p className="text-sm text-center">
				Copyright &copy; {new Date().getFullYear()} | Made By&nbsp;
				<span className="font-bold text-white whitespace-nowrap">Gaurav Singh.</span>
			</p>

			{/* Social Links */}
			<p className="flex flex-row gap-8 items-center">
				<a
					href="https://leetcode.com/u/Gaurav__Singh/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiLeetcode className="hover:text-primary text-lg cursor-pointer" />
				</a>

				<a
					href="https://www.linkedin.com/in/gauravsingh-dev/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedinIn className="hover:text-primary text-lg cursor-pointer" />
				</a>

				<a
					href="https://github.com/GS-GauravSingh"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="hover:text-primary text-lg cursor-pointer" />
				</a>
			</p>
		</footer>
	);
}

export default Footer;
