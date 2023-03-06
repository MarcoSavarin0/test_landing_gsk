import Link from 'next/link'

interface CtaContent {
	title: string
	url: string
}

const Cta = ({title, url}: CtaContent) => {
	return (
		<Link href={url}>
			<span>{title}</span>
		</Link>
	)
}

export default Cta