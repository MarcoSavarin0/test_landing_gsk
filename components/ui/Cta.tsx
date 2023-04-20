import Link from 'next/link'
import va from "@vercel/analytics"

interface CtaContent {
	title: string
	url: string
	location?: string
}

const Cta = ({title, url, location}: CtaContent) => {
	return (
		<Link href={url} onClick={() => va.track(`${location}`)} className="text-base text-white hover:text-gsk-orange bg-gsk-orange hover:bg-white border-2 border-transparent hover:border-gsk-orange transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold">
			<span>{title}</span>
		</Link>
	)
}

export default Cta