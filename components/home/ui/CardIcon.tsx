import Image from 'next/image'

import H3 from "@/components/ui/H3"

interface CardIcon {
	title: string
	body: string
	image: string
}

const CardIcon = ({title, image, body}: CardIcon) => {
	return (
		<article className="flex flex-col w-full gap-y-6 items-center bg-white border border-gsk-gray rounded-xl shadow-md px-10 md:px-6 xl:px-10 py-8 text-gsk-orange">
			<Image src={`/assets/images/${image}.svg`} alt={`Ícono Varicela`} width={80} height={80}/>
			<H3 title={title}/>
			<p className="text-black text-lg">{body}</p>
		</article>
	)
}

export default CardIcon