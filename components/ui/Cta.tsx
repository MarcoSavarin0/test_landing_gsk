import Link from 'next/link'

interface CtaContent {
	title: string
	url: string
}

const Cta = ({title, url}: CtaContent) => {
	return (
		<Link href={url} className="text-base text-white bg-gsk-orange rounded px-8 py-3 uppercase font-bold">
			<span>{title}</span>
		</Link>
	)
}

export default Cta