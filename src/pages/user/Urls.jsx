import React from "react";
import { Footer, Navbar } from "../../components";

function Urls() {
	return (
		<div className="h-screen w-full flex flex-col">
			{/* Header and Navigation Bar */}
			<Navbar />

			{/* Main Body */}
			<main className="flex-grow w-full my-6 px-4 space-y-6 overflow-y-visible overflow-x-scroll">

				<table className="m-auto">
					<thead className=" sticky top-0 z-10">
						<tr className="bg-secondary text-white">
							<th className="px-4 py-2 rounded-tl-lg whitespace-nowrap">S.No.</th>
							<th className="px-4 py-2 whitespace-nowrap">Original URL</th>
							<th className="px-4 py-2 whitespace-nowrap">Shorten URL</th>
							<th className="px-4 py-2 rounded-tr-lg whitespace-nowrap">Click Count</th>
						</tr>
					</thead>

					<tbody className="text-sm">
						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 ">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 ">10</td>
						</tr>

						<tr className="even:bg-secondary/80 even:text-white">
							<td className="text-center px-4 py-2 rounded-bl-lg">1</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsdsddddddddddddddd</td>
							<td className="text-center px-4 py-2  max-w-96 overflow-auto">https://www.google.comsddddd</td>
							<td className="text-center px-4 py-2 rounded-br-lg">10</td>
						</tr>
					</tbody>
				</table>
			</main>

			{/* Footer */}
			<Footer />

		</div>
	);
}

export default Urls;
