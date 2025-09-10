import React from "react";

const headsData = [
	{ name: "Jayesh Jain", role: "AI-ML" },
	{ name: "Pranav Tiwari", role: "AI-ML" },
	{ name: "Jay Jariwala", role: "App-Dev" },
	{ name: "Nishtha Goyal", role: "Web-Dev" },
	{ name: "Ashneet Jha", role: "Web-Dev" },
	{ name: "Brindha S", role: "Corporate" },
	{ name: "Shreyas B", role: "Corporate" },
	{ name: "Allan Roy", role: "Corporate" },
	{ name: "Atharv Dwivedi", role: "Corporate" },
	{ name: "Archit Patre", role: "Creatives" },
	{ name: "Ananya Mahajan", role: "Creatives" },
	{ name: "Malvi Sood", role: "Editorial" },
	{ name: "Jay Agrawal", role: "Editorial" },
	{ name: "Head1", role: "Sponsorship" },
	{ name: "Head2", role: "Sponsorship" },
];

const imageUrl = "/public/images/vikrant.png.jpg"; // Use your image path
const frameUrl = "/public/images/frame.png"; // Use your frame image path
const headsHeadingUrl = "/public/images/Heads.png";

const Heads = () => {
	// Split data for grid rows
	const rows = [
		headsData.slice(0, 4),
		headsData.slice(4, 8),
		headsData.slice(8, 12),
		headsData.slice(12, 15),
	];

	// Helper to get image per head
	const getImageUrl = (name) => {
		if (name === "Jayesh Jain") {
			return "/images/Jayesh_Jain(HEAD).jpg"; // Make sure this path matches your saved image
		}
		return "/images/vikrant.png.jpg";
	};

	return (
		<section className="w-full flex flex-col items-center pt-10 pb-6">
			<img
				src={headsHeadingUrl}
				alt="Heads"
				className="mb-10 w-[180px] md:w-[220px] lg:w-[260px] object-contain"
			/>
			<div className="w-full flex flex-col items-center">
				{/* First 3 rows: 4 columns */}
				{rows.slice(0, 3).map((row, rowIdx) => (
					<div
						key={rowIdx}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10 mb-8 w-full max-w-6xl"
					>
						{row.map((head, idx) => (
							<div key={idx} className="flex flex-col items-center">
								<div className="relative w-[180px] h-[220px] md:w-[220px] md:h-[260px] lg:w-[240px] lg:h-[280px] flex items-center justify-center">
									{/* Head image fitted inside the frame */}
									<img
										src={getImageUrl(head.name)}
										alt={head.name}
										className="absolute z-10 object-cover"
										style={{
											top: "15%",
											left: "15%",
											width: "70%",
											height: "70%",
											clipPath: "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
										}}
									/>
									{/* Frame image on top */}
									<img
										src={frameUrl}
										alt="Frame"
										className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
									/>
								</div>
								<div className="mt-3 text-center">
									<span className="block text-white text-base md:text-lg font-semibold leading-tight">
										{head.name}
									</span>
									<span className="text-gray-300 text-xs italic mt-1">
										{head.role}
									</span>
								</div>
							</div>
						))}
					</div>
				))}
				{/* Last row: center aligned */}
				<div className="flex justify-center gap-x-10 mb-8 w-full">
					{rows[3].map((head, idx) => (
						<div key={idx} className="flex flex-col items-center">
							<div className="relative w-[180px] h-[220px] md:w-[220px] md:h-[260px] lg:w-[240px] lg:h-[280px] flex items-center justify-center">
								{/* Head image fitted inside the frame */}
								<img
									src={getImageUrl(head.name)}
									alt={head.name}
									className="absolute z-10 object-cover"
									style={{
										top: "15%",
										left: "15%",
										width: "70%",
										height: "70%",
										clipPath: "polygon(18% 0%, 82% 0%, 100% 18%, 100% 82%, 82% 100%, 18% 100%, 0% 82%, 0% 18%)",
									}}
								/>
								{/* Frame image on top */}
								<img
									src={frameUrl}
									alt="Frame"
									className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none"
								/>
							</div>
							<div className="mt-3 text-center">
								<span className="block text-white text-base md:text-lg font-semibold leading-tight">
									{head.name}
								</span>
								<span className="text-gray-300 text-xs italic mt-1">
									{head.role}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Heads;