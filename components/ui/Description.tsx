import parse from "html-react-parser"

import localFont from "@next/font/local"
const gskPrecisionRegular = localFont({ src: '../../styles/fonts/gskprecision-regular.woff2' })

interface Paragraph {
	title: string
	color?: string
}

const Description = ({title, color}: Paragraph) => {
	return (
		<div className={`${gskPrecisionRegular.className} text-lg md:text-xl ${color}`}>{parse(title)}</div>
	)
}

export default Description