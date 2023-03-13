import Image from 'next/image'

import Intro from "@/components/home/Intro"
import localFont from "@next/font/local"

const gskPrecisionBoldItalic = localFont({ src: '../../styles/fonts/gskprecision-bolditalic.woff2' })
const gskPrecisionLight = localFont({ src: '../../styles/fonts/gskprecision-light.woff2' })

const Hero = () => {
	return (
		<section>
			<div className="relative w-full flex flex-col h-auto md:h-[30rem] lg:h-[34rem] xl:h-[40rem] 2xl:h-[42rem] bg-gsk-dark gap-y-8 md:gap-y-0">
				<Image priority src={`/assets/images/hero.jpg`} alt={`Herpes Zóster`} width="1440" height="747" className=" block w-full shadow-[inset_0_1px_1px_rgba(0,0,0,1)] h-full object-cover object-center"/>

				<article className="order-first static md:absolute md:top-1/4 right-12 md:right-8 w-11/12 md:w-5/12 space-y-2 sm:space-y-4 px-6 md:px-0 pt-12 md:pt-0">
					<h2 className={`${gskPrecisionBoldItalic.className} text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold italic leading-[2rem]`}>
						<span className="inline sm:inline-block md:block">ACTIVEMOS ANTES DE</span>
						<span className="block sm:inline-block md:block">QUE EL VIRUS SE REACTIVE.</span>
						<span className="inline sm:inline-block md:block">HABLEMOS DE ZÓSTER.</span>
					</h2>
					<p className={`${gskPrecisionLight} text-gsk-orange text-xl font-light`}>Conocé más sobre la enfermedad, sus síntomas y las opciones de prevención y tratamiento.</p>
				</article>
			</div>

			<Intro/>
		</section>
	)
}

export default Hero