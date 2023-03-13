import Image from 'next/image'

interface Complication {
	title: string
	body: string
	image: string
	index: number
}

const MirrorContent = ({title, image, index, body}: Complication) => {
	return (
		<article className="flex flex-col md:flex-row justify-between gap-x-8 gap-y-5 md:gap-y-0">
			<div className={`${index % 2 ? 'md:order-last' : ''} w-full md:w-4/12`}>
				<Image src={`/assets/images/${image}`} alt="Alt 01" height={100} width={80} className="border border-gsk-dark/5 w-full h-auto rounded-2xl drop-shadow-md"/>
			</div>
			<div className="w-full md:w-8/12">
				<h3 className="text-gsk-orange font-bold text-2xl md:text-3xl">{title}</h3>
				<p className="text-lg md:text-xl">{body}</p>
			</div>
		</article>
	)
}

export default MirrorContent