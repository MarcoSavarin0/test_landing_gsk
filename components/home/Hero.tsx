import {Swiper, SwiperSlide} from "swiper/react"
import {EffectFade, Autoplay} from "swiper"

import Intro from "@/components/home/Intro"
import localFont from "@next/font/local"

import 'swiper/css'
import 'swiper/css/effect-fade'
import parse from "html-react-parser"
import {Button} from "react-scroll"
import dynamic from "next/dynamic"

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
		title: `<span className="block">PUEDE SENTIRSE COMO UN</span><span className="block"><span className="font-bold ${barlowSemicondensedBoldItalic.className}">ARDOR DESESPERANTE</span>*</span>`,
		type: "ardor",
		top: "-mt-16",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">CLAVOS ATRAVESANDO</span> <span className="block">LA <span className="font-bold ${barlowSemicondensedBoldItalic.className}">PIEL</span>*</span>`,
		type: "clavos",
		top: "-mt-24",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">QUEMARSE</span> CON AGUA <span className="block"><span className="font-bold ${barlowSemicondensedBoldItalic.className}">HIRVIENDO</span>*</span>`,
		type: "quemadura",
		top: "-mt-24",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">FUEGO RECORRIENDO</span> <span className="block">LOS <span className="font-bold ${barlowSemicondensedBoldItalic.className}">NERVIOS</span>*</span>`,
		type: "llamas",
		top: "-mt-8",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">DESCARGAS ELÉCTRICAS</span> <span className="block">EN EL <span className="font-bold ${barlowSemicondensedBoldItalic.className}">CUERPO</span>*</span>`,
		type: "electricidad",
		top: "-mt-8",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO UNA</span> <span className="font-bold ${barlowSemicondensedBoldItalic.className}">PUNTADA PERFORANTE</span>*`,
		type: "puntada",
		top: "-mt-24",
	},
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> TENER LA <span className="font-bold ${barlowSemicondensedBoldItalic.className}">PIEL</span> <span className="block">EN <span className="font-bold ${barlowSemicondensedBoldItalic.className}">LLAMAS</span>*</span>`,
		type: "fuego",
		top: "-mt-10",
	}
]

const DynamicVideoPlayer = dynamic(() => import('@/components/home/ui/VideoPlayerSlide'), {
	ssr: false,
})

const Hero = () => {
	// const refPlayer = useRef(null)

	return (
		<section className="bg-gsk-dark">
			<Swiper
				spaceBetween={0}
				slidesPerView={1}
				effect={"fade"}
				className="bg-gsk-dark"
				modules={[EffectFade, Autoplay]}
				allowTouchMove={false}
				loop={true}
				speed={2000}
				autoplay={{
					delay: 7000,
					pauseOnMouseEnter: false,
					disableOnInteraction: false,
					stopOnLastSlide: false,
				}}
				onSwiper={(swiper) => {
					const currentSlide = swiper.slides[0]

					currentSlide.querySelector("video")?.play()
				}}
				onSlideChangeTransitionStart={(swiper) => {
					const prevSlide = swiper.slides[swiper.activeIndex - 1]

					prevSlide.querySelector("video")?.pause()
				}}
				onSlideNextTransitionStart={(swiper) => {
					const currentSlide = swiper.slides[swiper.activeIndex]

					currentSlide.querySelector("video")?.play()
					currentSlide.querySelector("video")?.addEventListener("ended", () => {
						swiper.slideNext()
					})
				}}
			>
				{dolores.map(({title, type, top}: Dolor, index: number) => (
					<SwiperSlide key={index}>
						<div className="relative w-full flex flex-col bg-gsk-dark h-[21rem] md:h-[27rem] lg:h-[34rem] xl:h-[46rem] 2xl:h-[54rem] overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>

							<div className="absolute bottom-auto md:bottom-0 md:left-0 w-full h-fit">
								<DynamicVideoPlayer index={index} type={type} top={top}/>
							</div>

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
											<p><Button activeClass="active" className="hover:text-white transition ease-out duration-300 cursor-pointer" type="submit" value="Hablemos de Zóster" to="que-es-herpes-zoster" spy={true} smooth={true} offset={0} duration={800} />.</p>
										</div>
									</div>
								</div>
							</article>

							<span className="absolute bottom-6 md:bottom-10 xl:bottom-14 right-8 md:right-10 lg:right-14 2xl:right-24 text-white z-20 text-[0.50rem] text-right w-fit leading-tight">*BASADO EN TESTIMONIOS REALES DE PACIENTES. <span className="block lg:inline">LOS SÍNTOMAS DEL HERPES ZOSTER PUEDEN VARIAR.</span></span>

							<div className="absolute bottom-0 left-0 w-full h-2 md:h-1 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className={`${gskPrecisionLight.className} bg-gsk-dark block md:hidden text-gsk-orange text-xl 2xl:text-3xl font-light px-8 md:px-0 my-4`}>
				<p>Conocé más sobre la enfermedad, sus síntomas <span className="lg:block">y las opciones de prevención y tratamiento.</span></p>
				<p><Button activeClass="active" className="hover:text-white transition ease-out duration-300 cursor-pointer" type="submit" value="Hablemos de Zóster" to="que-es-herpes-zoster" spy={true} smooth={true} offset={0} duration={800} />.</p>
			</div>

			<Intro/>
		</section>
	)
}

export default Hero