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
const barlowSemicondensedBoldItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-bolditalic.woff2' })
const barlowSemicondensedItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-italic.woff2' })

interface Dolor {
	title: string
	type: string
	top: string
}

const dolores: Dolor[] = [
	{
		title: `<span className="md:block">PUEDE SENTIRSE COMO UN</span><span className="md:block font-bold ${barlowSemicondensedBoldItalic.className}">ARDOR DESESPERANTE*</span>`,
		type: "ardor",
		top: "-mt-16",
	},
	{
		title: `<span className="md:block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">CLAVOS ATRAVESANDO</span> <span className="md:block">LA <span className="font-bold ${barlowSemicondensedBoldItalic.className}">PIEL*</span></span>`,
		type: "clavos",
		top: "-mt-24",
	},
	{
		title: `<span className="md:block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">QUEMARSE</span> CON AGUA <span className="md:block"><span className="font-bold ${barlowSemicondensedBoldItalic.className}">HIRVIENDO*</span></span>`,
		type: "quemadura",
		top: "-mt-24",
	},
	{
		title: `<span className="md:block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">FUEGO RECORRIENDO</span> <span className="md:block">LOS <span className="font-bold ${barlowSemicondensedBoldItalic.className}">NERVIOS*</span></span>`,
		type: "llamas",
		top: "-mt-8",
	},
	{
		title: `<span className="md:block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">DESCARGAS ELÉCTRICAS</span> <span className="md:block">EN EL <span className="font-bold ${barlowSemicondensedBoldItalic.className}">CUERPO*</span></span>`,
		type: "electricidad",
		top: "-mt-8",
	},
	{
		title: `<span className="md:block">PUEDE SENTIRSE COMO UNA</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">PUNTADA PERFORANTE*</span>`,
		type: "puntada",
		top: "-mt-24",
	},
	{
		title: `<span className="md:block">PUEDE SENTIRSE COMO</span> TENER LA <span className="font-bold ${barlowSemicondensedBoldItalic.className}">PIEL</span> <span className="md:block">EN <span className="font-bold ${barlowSemicondensedBoldItalic.className}">LLAMAS*</span></span>`,
		type: "fuego",
		top: "-mt-10",
	}
]

const Hero = () => {
	return (
		<section className="bg-gsk-dark">
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
				{dolores.map(({title, type, top}: Dolor, index: number) => (
					<SwiperSlide key={index}>
						<div className="relative w-full flex flex-col bg-gsk-dark h-[21rem] md:h-[27rem] lg:h-[34rem] xl:h-[46rem] 2xl:h-[54rem]">
							<div className="hidden md:block static md:absolute top-0 left-0 w-full h-2 md:h-10 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 mt-4 md:mt-0 z-10"/>

							<VideoHero type={type} top={top}/>

							<article className="order-first absolute top-4 md:top-[12%] lg:top-[20%] text-right right-8 md:right-10 lg:right-14 xl:right-18 2xl:right-24 w-10/12 md:w-7/12 lg:w-6/12 xl:w-7/12 pt-6 md:pt-0">
								<h2 className={`${barlowSemicondensedItalic.className} uppercase inline text-white w-full sm:w-fit text-2xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl md:leading-[2rem]`}>
									El dolor ocasionado por
								</h2>
								<h1 className={`${barlowSemicondensedBoldItalic.className} text-white leading-none uppercase text-4xl sm:text-6xl lg:text-7xl xl:text-8xl`}>Herpes Zóster</h1>
								<div className="space-y-2 sm:space-y-4">
									<h2 className={`${barlowSemicondensedItalic.className} uppercase inline text-white w-full sm:w-fit text-2xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl md:leading-[2rem]`}>
										{parse(title)}
									</h2>
									<div className={`${gskPrecisionLight} hidden md:block text-gsk-orange text-xl 2xl:text-3xl font-light space-y-3`}>
										<div>
											<p>Conocé más sobre la enfermedad, sus síntomas <span className="lg:block">y las opciones de prevención y tratamiento.</span></p>
											<p><Link href={`/#que-es-herpes-zoster`} scroll={false} className="hover:text-white transition ease-out duration-300">Hablemos de Zóster</Link>.</p>
										</div>
									</div>
								</div>

							</article>

							<span className="absolute bottom-6 md:bottom-10 xl:bottom-14 right-8 md:right-10 lg:right-14 2xl:right-24 text-white z-20 text-[0.50rem] text-right w-fit leading-tight">*BASADO EN TESTIMONIOS REALES DE PACIENTES. <span className="block lg:inline">LOS SÍNTOMAS DEL HERPES ZOSTER PUEDEN VARIAR.</span></span>

							<div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className={`${gskPrecisionLight} bg-gsk-dark block md:hidden text-gsk-orange text-xl 2xl:text-3xl font-light px-8 md:px-0 my-4`}>
				<p>Conocé más sobre la enfermedad, sus síntomas <span className="lg:block">y las opciones de prevención y tratamiento.</span></p>
				<p><Link href={`/#que-es-herpes-zoster`} scroll={false} className="hover:text-white transition ease-out duration-300">Hablemos de Zóster</Link>.</p>
			</div>

			<Intro/>
		</section>
	)
}

export default Hero