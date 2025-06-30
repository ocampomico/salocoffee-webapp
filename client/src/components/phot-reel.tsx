import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SaloEvent1 from "@/assets/salo-event1.jpg";
import SaloEvent2 from "@/assets/salo-event2.jpg";
import SaloEvent3 from "@/assets/salo-event3.jpg";


const carouselImages = [
	SaloEvent1,
	SaloEvent2,
	SaloEvent3,
];

export default function PhotoReel() {
	const [selectedIdx, setSelectedIdx] = useState(0);
	const carouselRef = useRef<HTMLDivElement>(null);

	const handlePrev = () => {
		setSelectedIdx((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setSelectedIdx((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
	};

	const handleThumbnailClick = (idx: number) => {
		setSelectedIdx(idx);
	};

	return (
		<section className="mt-12 warm-gradient">
			<div className="container mx-auto px-6">
				<div className="max-w-2xl mx-auto mb-12">
					<div className="relative flex items-center justify-center">
						<Button
							variant="ghost"
							size="icon"
							className="absolute left-0 z-10"
							onClick={handlePrev}
							aria-label="Previous"
						>
							<ArrowLeft className="w-6 h-6" />
						</Button>
						<div className="w-full">
							<img
								src={carouselImages[selectedIdx]}
								alt={`Featured coffee ${selectedIdx + 1}`}
								className="w-full h-full object-cover rounded-xl shadow-lg"
							/>
						</div>
						<Button
							variant="ghost"
							size="icon"
							className="absolute right-0 z-10"
							onClick={handleNext}
							aria-label="Next"
						>
							<ArrowRight className="w-6 h-6" />
						</Button>
					</div>
					{/* Thumbnails */}
					<div className="flex justify-center gap-4 mt-6">
						{carouselImages.map((src, idx) => (
							<button
								key={idx}
								onClick={() => handleThumbnailClick(idx)}
								className={`border-2 rounded-lg p-1 transition-all ${
									idx === selectedIdx
										? "border-[#5e7136] opacity-100"
										: "border-transparent opacity-60 hover:opacity-100"
								}`}
								aria-label={`Select photo ${idx + 1}`}
							>
								<img
									src={src}
									alt={`Preview ${idx + 1}`}
									className="w-16 h-16 object-cover rounded-md"
								/>
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
