import Image from 'next/image'

import Intro from "@/components/home/Intro"
import localFont from "@next/font/local"

const gskPrecisionBoldItalic = localFont({ src: '../../styles/fonts/gskprecision-bolditalic.woff2' })
const gskPrecisionLight = localFont({ src: '../../styles/fonts/gskprecision-light.woff2' })

const Hero = () => {
	return (
		<section>
			<div className="relative w-full flex flex-col h-auto md:h-[27rem] lg:h-[34rem] xl:h-[40rem] 2xl:h-[44rem] bg-gsk-dark overflow-hidden">
				<video className="order-last md:order-first block w-full h-auto object-cover object-center aspect-video -mt-10 md:mt-0 lg:-mt-8 xl:-mt-20 2xl:-mt-40" playsInline={true} crossOrigin="anonymous" preload="metadata" muted={true} width="1280" height="700" autoPlay={true} controls={false} loop={true}>
					<source src="/assets/videos/hero.mp4" type="video/mp4"/>
					<Image priority src={`/assets/images/hero.jpg`} alt={`Herpes Zóster`} width="1440" height="747" className="block w-full h-full object-cover object-center"/>
				</video>

				<article className="order-first static md:absolute md:top-1/4 right-12 md:right-8 w-11/12 md:w-5/12 space-y-2 sm:space-y-4 px-6 md:px-0 pt-12 md:pt-0">
					<h2 className={`${gskPrecisionBoldItalic.className} text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold italic leading-[2rem]`}>
						<span className="inline sm:inline-block md:block">ACTIVEMOS ANTES DE</span>
						<span className="block sm:inline-block md:block">QUE EL VIRUS SE REACTIVE.</span>
						<span className="inline sm:inline-block md:block">HABLEMOS DE ZÓSTER.</span>
					</h2>
					<p className={`${gskPrecisionLight} text-gsk-orange text-xl 2xl:text-3xl font-light`}>Conocé más sobre la enfermedad, sus síntomas <span className="inline md:block">y las opciones de prevención y tratamiento.</span></p>
				</article>
				<div className="static md:absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 mt-4 md:mt-0 z-10"/>
				<div className="absolute bottom-0 left-0 w-full h-14 lg:h-20 xl:h-14 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>
			</div>

			<Intro/>
		</section>
	)
}

export default Hero