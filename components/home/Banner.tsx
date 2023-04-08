import Image from "next/image"
import localFont from "@next/font/local"

const barlowSemicondensedBold = localFont({ src: '../../styles/fonts/barlowsemicondensed-bold.woff2' })
const barlowSemicondensedRegular = localFont({ src: '../../styles/fonts/barlowsemicondensed-regular.woff2' })

const Banner = () => {
	return (
		<section className="relative bg-gsk-orange text-white text-center py-14">
			<div className="absolute top-0 flex w-full justify-center">
				<Image src="/shape-gsk-white.svg" width={80} height={60} alt="" />
			</div>
			<div className="space-y-2 px-6">
				<h2 className={`${barlowSemicondensedRegular.className} text-2xl md:text-4xl leading-relaxed uppercase font-bold`}><span className={`${barlowSemicondensedBold.className} text-4xl md:text-5xl`}>Activemos</span> <span className="block">antes de que el <span className={`${barlowSemicondensedBold.className}`}>virus se reactive</span></span></h2>
				<p className="text-lg md:text-xl">Consultá con tu médico o médica acerca de la prevención y el tratamiento del Herpes Zóster</p>
			</div>
		</section>
	)
}

export default Banner