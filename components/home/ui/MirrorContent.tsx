import Image from 'next/image'
import Link from "next/link"
import parse from "html-react-parser"
import slugify from "slugify"

interface Complication {
	title: string
	body: string
	image: string
	index: number
	cta: boolean
}

const MirrorContent = ({title, image, index, body, cta}: Complication) => {
	return (
		<>
			<div className={`${index % 2 ? 'md:order-last' : ''} w-full md:w-4/12`}>
				<Image src={`/assets/images/${image}`} alt="Complicación" height={1024} width={560} className="border border-gsk-dark/5 w-full h-auto rounded-2xl drop-shadow-md"/>
			</div>
			<div className="w-full md:w-8/12">
				<h3 className="text-gsk-orange font-bold text-2xl">{title}</h3>
				<p className="text-lg md:text-xl text-justify">{parse(body)}</p>
				{cta ? <Link href={`/blog/${slugify(title, {replacement: '-', lower: true})}`} className="text-lg underline text-gsk-orange hover:text-gsk-dark transition-colors duration-200 ease-out">Conocé más</Link> : ""}
			</div>
		</>
	)
}

export default MirrorContent