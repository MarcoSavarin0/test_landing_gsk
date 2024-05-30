import localFont from "@next/font/local"
const gskPrecisionBold = localFont({ src: '../../styles/fonts/gskprecision-bold.woff2' })

interface Header2 {
	title: string
}

const SUPERTEXT = ({title}: Header2) => {
	return (
		<h2 className={`${gskPrecisionBold.className} uppercase text-gsk-orange font-bold text-center text-3xl super-text`}>{title}</h2>
	)
}

export default SUPERTEXT