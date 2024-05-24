import { useState } from "react"
import parse from "html-react-parser"
import ReactCardFlip from "react-card-flip"
import Link from "next/link"

import H3 from "@/components/ui/H3"

interface CardIcon {
	index?: number
	title: string
	body: string
	image: string
}

const CardIcon = ({ title, image, body }: CardIcon) => {
	const [flipped, setFlipped] = useState(false)
	// const indexForVa = index + 1

	const doFlip = (bool: boolean) => {
		// va.track(`CardFlip ${indexForVa} ${bool ? "Open" : "Close"}`)
		setFlipped(bool)
	}

	return (
		<ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
			<article
				onMouseOver={() => doFlip(true)}
				className="cursor-pointer relative flex flex-col justify-center mx-auto w-11/12 sm:w-9/12 md:w-9/12 lg:w-full min-h-[400px] gap-y-6 items-center border border-gsk-gray rounded-xl shadow-md px-10 md:px-6 xl:px-10 py-14 text-gsk-orange group mt-4"
			>
				<div
					className="absolute inset-0 bg-cover bg-center rounded-xl transition-transform ease-in-out duration-500 "
					style={{ backgroundImage: `url(https://gsk-hdz-2.b-cdn.net/notas/${image}.webp)` }}
				>
					<div className="w-full h-full bg-black opacity-50 rounded-xl"></div>
				</div>
				<div className="relative z-10 text-center text-white text-lg">
					<H3 title={title} />
				</div>
			</article>

			<article
				onMouseOver={() => doFlip(false)}
				className="cursor-pointer relative flex flex-col justify-center mx-auto w-11/12 sm:w-9/12 md:w-9/12 lg:w-full min-h-[400px] gap-y-6 items-center bg-orange border border-gsk-gray rounded-xl shadow-md px-10 md:px-6 xl:px-10 py-14 card-flipped text-white group mt-4"
			>
				<div
					className="absolute inset-0 bg-cover bg-center rounded-xl transition-transform ease-in-out duration-500 "
					style={{ backgroundImage: `url(https://gsk-hdz-2.b-cdn.net/notas/${image}.webp)` }}
				>
					<div className="w-full h-full bg-orange opacity-75 rounded-xl"></div>
				</div>
				<div className="relative z-10 text-center text-white text-lg">
					<H3 title={title} />
					<p className="text-white text-lg">{parse(body)}</p>
					<Link href={`/conciencia`}>Leer más {">"}</Link>
				</div>
			</article>
		</ReactCardFlip>





	)
}

export default CardIcon