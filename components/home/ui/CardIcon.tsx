import Image from 'next/image'

import H3 from "@/components/ui/H3"

interface CardIcon {
	title: string
	image: string
}

const CardIcon = ({title, image}: CardIcon) => {
	return (
		<article className="flex flex-col w-full gap-y-6 items-center bg-gsk-gray rounded-xl shadow-md px-10 py-8 text-gsk-orange">
			<Image src={`/assets/images/${image}.svg`} alt={`Ícono Varicela`} width={80} height={80}/>
			<H3 title={title}/>
		</article>
	)
}

export default CardIcon