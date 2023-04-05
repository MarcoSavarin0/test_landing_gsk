import {Swiper, SwiperSlide} from "swiper/react"
import {EffectFade, Autoplay} from "swiper"

import Intro from "@/components/home/Intro"
import localFont from "@next/font/local"

import VideoHero from "@/components/home/ui/VideoHero"
import ImageHero from "@/components/home/ui/ImageHero"

import 'swiper/css'
import 'swiper/css/effect-fade'

const gskPrecisionBoldItalic = localFont({ src: '../../styles/fonts/gskprecision-bolditalic.woff2' })
const gskPrecisionLight = localFont({ src: '../../styles/fonts/gskprecision-light.woff2' })

interface Dolor {
	title: string
	type: string
	file: string
}

const dolores: Dolor[] = [
	{
		title: "\"como sentir un ardor desesperante\"",
		type: "ardor",
		file: "video",
	},
	{
		title: "\"como sentir un ardor desesperante\"",
		type: "ardor",
		file: "image",
	},
	{
		title: "\"como clavos atravesando la piel\"",
		type: "clavos",
		file: "video",
	},
	{
		title: "\"como quemarse con agua hirviendo\"",
		type: "quemadura",
		file: "video",
	},
	{
		title: "\"como quemarse con agua hirviendo\"",
		type: "quemadura",
		file: "image",
	},
	{
		title: "\"como fuego recorriendo los nervios\"",
		type: "fuego",
		file: "video",
	},
	{
		title: "\"como fuego recorriendo los nervios\"",
		type: "fuego",
		file: "image",
	},
	{
		title: "\"como sentir descargas eléctricas en el cuerpo\"",
		type: "electricidad",
		file: "video",
	},
	{
		title: "\"como sentir una puntada perforante\"",
		type: "puntada",
		file: "video",
	},
	{
		title: "\"como sentir una puntada perforante\"",
		type: "puntada",
		file: "image",
	},
	{
		title: "\"como tener la piel en llamas\"",
		type: "llamas",
		file: "video",
	},
	{
		title: "\"como tener la piel en llamas\"",
		type: "llamas",
		file: "image",
	},
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
					delay: 600000,
					pauseOnMouseEnter: false,
					disableOnInteraction: false,
					stopOnLastSlide: false,
				}}
			>
				{dolores.map((item: Dolor, index: number) => (
					<SwiperSlide key={index}>
						<div className="relative w-full flex flex-col h-auto  bg-gsk-dark md:h-[27rem] lg:h-[34rem] xl:h-[46rem] 2xl:h-[54rem] overflow-hidden"> {/* md:h-[27rem] lg:h-[34rem] xl:h-[46rem] 2xl:h-[44rem]  */}
							{item.file == "video" ? <VideoHero type={item.type}/> : <ImageHero type={item.type}/> }

							<article className="order-first static md:absolute md:top-1/4 right-12 md:right-8 w-11/12 md:w-5/12 space-y-2 sm:space-y-4 px-6 md:px-0 pt-12 md:pt-0">
								<h2 className={`${gskPrecisionBoldItalic.className} text-white text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold italic leading-[2rem]`}>
									{item.title}
								</h2>
								<p className={`${gskPrecisionLight} hidden md:block text-gsk-orange text-xl 2xl:text-3xl font-light`}>Así describe el dolor una persona que sufrió Herpes Zóster. Conocé más sobre la enfermedad, sus síntomas y las opciones de prevención y tratamiento. Hablemos de Zóster.</p>
							</article>

							<p className={`${gskPrecisionLight} block md:hidden text-gsk-orange text-xl 2xl:text-3xl font-light`}>Así describe el dolor una persona que sufrió Herpes Zóster. Conocé más sobre la enfermedad, sus síntomas y las opciones de prevención y tratamiento. Hablemos de Zóster.</p>

							<div className="static md:absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 mt-4 md:mt-0 z-10"/>
							<div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<Intro/>
		</section>
	)
}

export default Hero