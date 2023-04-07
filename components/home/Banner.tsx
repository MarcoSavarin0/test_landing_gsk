import Image from "next/image"
import localFont from "@next/font/local"

const barlowSemicondensedSemiBold = localFont({ src: '../../styles/fonts/barlowsemicondensed-semibold.woff2' })

const Banner = () => {
	return (
		<section className="relative bg-gsk-orange text-white text-center py-14">
			<div className="absolute top-0 flex w-full justify-center">
				<Image src="/shape-gsk-white.svg" width={80} height={60} alt="" />
			</div>
			<div className="space-y-2 px-6">
				<h2 className={`${barlowSemicondensedSemiBold.className} text-2xl md:text-4xl leading-relaxed uppercase font-bold`}>Activemos antes de que el virus se reactive</h2>
				<p className="text-lg md:text-xl">Consultá con tu médico o médica acerca de la prevención y el tratamiento del Herpes Zóster</p>
			</div>
		</section>
	)
}

export default Banner