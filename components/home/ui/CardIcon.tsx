import {useState} from "react"
import Image from 'next/image'
import parse from "html-react-parser"
import ReactCardFlip from "react-card-flip"

import H3 from "@/components/ui/H3"
import va from "@vercel/analytics"

interface CardIcon {
	index: number
	title: string
	body: string
	image: string
}

const CardIcon = ({index, title, image, body}: CardIcon) => {
	const [flipped, setFlipped] = useState(false)
	const indexForVa = index + 1

	const doFlip = (bool: boolean) => {
		va.track(`CardFlip ${indexForVa} ${bool ? "Open" : "Close"}`)
		setFlipped(bool)
	}

	return (
		<ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
			<article onClick={() => doFlip(true)} className="cursor-pointer flex flex-col justify-center mx-auto w-11/12 sm:w-9/12 md:w-9/12 lg:w-full h-full gap-y-6 items-center bg-white border border-gsk-gray rounded-xl shadow-md px-10 md:px-6 xl:px-10 py-14 text-gsk-orange">
				<Image src={`/assets/images/${image}.svg`} alt={`Ícono Varicela`} width={80} height={80}/>
				<H3 title={title}/>
			</article>

			<article onClick={() => doFlip(false)} className="cursor-pointer flex flex-col justify-center mx-auto w-11/12 sm:w-9/12 md:w-9/12 lg:w-full h-full gap-y-6 items-center bg-white border border-gsk-gray rounded-xl shadow-md px-10 md:px-6 xl:px-10 py-14 text-gsk-orange">
				<p className="text-black text-lg">{parse(body)}</p>
			</article>
		</ReactCardFlip>
	)
}

export default CardIcon