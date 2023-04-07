import {Swiper, SwiperSlide} from "swiper/react"
import {EffectFade, Autoplay} from "swiper"

import Intro from "@/components/home/Intro"
import localFont from "@next/font/local"

import VideoHero from "@/components/home/ui/VideoHero"

import 'swiper/css'
import 'swiper/css/effect-fade'
import Link from "next/link"
import parse from "html-react-parser"

const gskPrecisionLight = localFont({ src: '../../styles/fonts/gskprecision-light.woff2' })
const barlowSemicondensedExtraBoldItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-extrabolditalic.woff2' })
const barlowSemicondensedMediumItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-mediumitalic.woff2' })

interface Dolor {
	title: string
	type: string
}

const dolores: Dolor[] = [
	{
		title: `"UN DOLOR QUE PUEDE SENTIRSE COMO UN <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">ARDOR DESESPERANTE</span>"`,
		type: "ardor",
	},
	{
		title: `"UN DOLOR QUE PUEDE SENTIRSE COMO <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">CLAVOS ATRAVESANDO</span> LA <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">PIEL</span>"`,
		type: "clavos",
	},
	{
		title: `"UN DOLOR QUE PUEDE SENTIRSE COMO <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">QUEMARSE</span> CON AGUA <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">HIRVIENDO</span>"`,
		type: "quemadura",
	},
	{
		title: `"UN DOLOR QUE PUEDE SENTIRSE COMO <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">FUEGO RECORRIENDO</span> LOS <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">NERVIOS</span>"`,
		type: "llamas",
	},
	{
		title: `"UN DOLOR QUE PUEDE SENTIRSE COMO <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">DESCARGAS ELÉCTRICAS</span> EN EL <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">CUERPO</span>"`,
		type: "electricidad",
	},
	{
		title: `"UN DOLOR QUE PUEDE SENTIRSE COMO UNA <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">PUNTADA PERFORANTE</span>"`,
		type: "puntada",
	},
	{
		title: `"UN DOLOR QUE PUEDE SENTIRSE COMO TENER LA <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">PIEL</span> EN <span className="font-bold ${barlowSemicondensedExtraBoldItalic.className}">LLAMAS</span>"`,
		type: "fuego",
	}
]

const Hero = () => {
	return (
		<section>
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				effect={"fade"}
				className="bg-gsk-dark"
				modules={[EffectFade, Autoplay]}
				allowTouchMove={true}
				loop={true}
				autoplay={{
					delay: 6000,
					pauseOnMouseEnter: false,
					disableOnInteraction: false,
					stopOnLastSlide: false,
				}}
			>
				{dolores.map(({title, type}: Dolor, index: number) => (
					<SwiperSlide key={index}>
						<div className="relative w-full flex flex-col bg-gsk-dark h-[20rem] md:h-[27rem] lg:h-[34rem] xl:h-[46rem] 2xl:h-[54rem] overflow-hidden">
							<div className="static md:absolute top-0 left-0 w-full h-2 md:h-10 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 mt-4 md:mt-0 z-10"/>

							<VideoHero type={type}/>

							<article className="order-first absolute top-4 md:top-[20%] text-right right-auto md:right-8 w-11/12 sm:w-fit md:w-5/12 lg:w-6/12 space-y-2 sm:space-y-4 px-6 md:px-0 pt-6 md:pt-0">
								<h2 className={`${barlowSemicondensedMediumItalic.className} drop-shadow-[14px_18px_3px_rgba(255,255,255,0.50)] sm:drop-shadow-[12px_12px_3px_rgba(255,255,255,0.50)] uppercase text-white w-full sm:w-fit text-4xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl md:leading-[2rem]`}>
									{parse(title)}
								</h2>
								<div className={`${gskPrecisionLight} hidden md:block text-gsk-orange text-xl 2xl:text-3xl font-light space-y-3`}>
									{/* <p className="text-white">Así describe el dolor una persona que sufrió Herpes Zóster.</p> */}
									<div>
										<p>Conocé más sobre la enfermedad, sus síntomas y las opciones de prevención y tratamiento.</p>
										<p><Link href={`/#que-es-herpes-zoster`} scroll={false} className="underline hover:text-white transition ease-out duration-300">Hablemos de Zóster</Link>.</p>
									</div>
								</div>
							</article>

							<div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className={`${gskPrecisionLight} bg-gsk-dark block md:hidden text-gsk-orange text-xl 2xl:text-3xl font-light space-y-3 px-6 md:px-0`}>
				<p className="text-white">Así describe el dolor una persona que sufrió Herpes Zóster.</p>
				<div>
					<p>Conocé más sobre la enfermedad, sus síntomas y las opciones de prevención y tratamiento.</p>
					<p><Link href={`/#que-es-herpes-zoster`} scroll={false} className="underline hover:text-white transition ease-out duration-300">Hablemos de Zóster</Link>.</p>
				</div>
			</div>

			<Intro/>
		</section>
	)
}

export default Hero