import Image from 'next/image'

import Intro from "@/components/home/Intro"
import localFont from "@next/font/local"

const gskPrecisionBoldItalic = localFont({ src: '../../styles/fonts/gskprecision-bolditalic.woff2' })
const gskPrecisionLight = localFont({ src: '../../styles/fonts/gskprecision-light.woff2' })

const Hero = () => {
	return (
		<section>
			<div className="relative w-full h-96 md:h-[30rem] lg:h-[34rem] xl:h-[40rem] 2xl:h-[42rem] bg-gsk-dark px-12 md:px-0 pt-12 md:pt-0 overflow-hidden">
				<Image priority src={`/assets/images/hero.jpg`} alt={`Herpes Zóster`} width="1440" height="747" className="hidden md:block w-full shadow-[inset_0_1px_1px_rgba(0,0,0,1)] h-full object-cover object-center"/>

				<article className="static md:absolute md:top-1/4 right-12 md:right-8 w-10/12 md:w-5/12 space-y-4">
					<h2 className={`${gskPrecisionBoldItalic.className} text-white text-2xl md:text-3xl xl:text-4xl font-bold italic leading-[2rem]`}>
						<span className="inline md:block">ACTIVEMOS ANTES DE</span>
						<span className="inline md:block">QUE EL VIRUS SE REACTIVE.</span>
						<span className="inline md:block">HABLEMOS DE ZÓSTER.</span>
					</h2>
					<p className={`${gskPrecisionLight} text-gsk-orange text-xl font-light`}>Conocé más sobre la enfermedad, sus síntomas y las opciones de prevención y tratamiento.</p>
				</article>
			</div>

			<Intro/>
		</section>
	)
}

export default Hero