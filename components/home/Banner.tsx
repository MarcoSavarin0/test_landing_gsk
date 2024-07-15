import Image from "next/image"
import localFont from "@next/font/local"

interface TypeShape {
	color?: string
}

const barlowSemicondensedBoldItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-bolditalic.woff2' })
const barlowSemicondensedItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-italic.woff2' })

const Banner = ({color}: TypeShape) => {
	return (
		<section className="relative bg-gsk-orange text-white text-center py-14">
			<div className="absolute top-0 flex w-full justify-center">
				{color != `dark` ? <Image src="/shape-gsk-light.svg" width={80} height={60} alt="" /> : <Image src="/shape-gsk-dark.svg" width={80} height={60} alt="" />}
			</div>
			<div className="space-y-2 px-3 sm:px-6">
				<p className={`${barlowSemicondensedItalic.className} text-2xl md:text-4xl leading-relaxed uppercase font-bold`}><span className={`${barlowSemicondensedBoldItalic.className} text-4xl md:text-5xl`}>Activemos</span> <span className="block">antes de que el <span className={`${barlowSemicondensedBoldItalic.className}`}>virus se reactive</span></span></p>
				<p className="text-lg md:text-xl">¿Ya consultaste con tu médico o médica sobre el Herpes Zóster?</p>
			</div>
		</section>
	)
}

export default Banner
