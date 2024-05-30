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
	// link: string
}

const CardIcon = ({ title, image, body}: CardIcon) => {
	const [flipped, setFlipped] = useState(false)
	// const indexForVa = index + 1

	const handleMouseEnterFront = () => {
		setFlipped(true)
	}

	const handleMouseLeaveBack = () => {
		setFlipped(false)
	}
	let link = ''

	if(title == 'NEURALGIA POSTHERPÉTICA'){
		link = '/biblioteca/post/neuralgia-postherpetica'
	}else if(title == 'HERPES ZÓSTER OFTÁLMICO'){
		link = '/biblioteca/post/herpes-zoster-oftalmico'
	}else if(title == 'CAMBIOS EN LA PIEL'){
		link = '/biblioteca/post/afecciones-piel-herpes-zoster'
	}else if(title == 'OTRAS CONSECUENCIAS'){
		link = ''
	}
		

	return (
		<ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
			<article
				onMouseEnter={handleMouseEnterFront}
				className="cursor-pointer relative flex flex-col justify-center mx-auto w-11/12 sm:w-9/12 md:w-9/12 lg:w-full min-h-[400px] gap-y-6 items-center border border-gsk-gray rounded-xl shadow-md px-10 md:px-6 xl:px-10 py-14 text-gsk-orange group mt-4"
			>
				<div
					className="absolute inset-0 bg-cover bg-center rounded-xl transition-transform ease-in-out duration-500 group-hover:scale-105"
					style={{ backgroundImage: `url(https://gsk-hdz-2.b-cdn.net/notas/${image}.webp)` }}
				>
					<div className="w-full h-full bg-black opacity-50 rounded-xl"></div>
				</div>
				<div className="relative z-10 text-center text-white text-lg">
					<H3 title={title} />
				</div>
			</article>

			<article
				onMouseLeave={handleMouseLeaveBack}
				className="cursor-pointer relative flex flex-col justify-center mx-auto w-11/12 sm:w-9/12 md:w-9/12 lg:w-full min-h-[400px] gap-y-6 items-center bg-orange border border-gsk-gray rounded-xl shadow-md px-10 md:px-6 xl:px-10 py-14 card-flipped text-white group mt-4"
			>
				<div
					className="absolute inset-0 bg-cover bg-center rounded-xl transition-transform ease-in-out duration-500 group-hover:scale-105"
					style={{ backgroundImage: `url(https://gsk-hdz-2.b-cdn.net/notas/${image}.webp)` }}
				>
					<div className="w-full h-full bg-orange opacity-75 rounded-xl"></div>
				</div>
				<div className="relative z-10 text-center text-white text-lg">
					<H3 title={title} />
					<p className="text-white text-lg">{parse(body)}</p>
					{link !='' ?
						<Link className="cursor" href={link}>Leer más {">"}</Link>
						: <></>}
				</div>
			</article>
		</ReactCardFlip>
	)
}
	
export default CardIcon