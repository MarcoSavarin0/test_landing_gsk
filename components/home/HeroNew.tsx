import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectFade, Autoplay } from "swiper/modules"

import IntroNew from "@/components/home/IntroNew"
import { FaQuoteLeft } from "react-icons/fa"
import { FaQuoteRight } from "react-icons/fa"

import "swiper/css"
import "swiper/css/effect-fade"

interface Dolor {
	title: string
	type: string
	top: string
	placeholder: string
}

const dolores: Dolor[] = [
	{
		title: `<span className="block">AFECTAN EL SISTEMA INMUNE,</span><span className="block"><span className="font-bold ">DANDO LUGAR A INFECCIONES COMO EL HERPES ZÓSTER?</span></span>`,
		type: "nuevoherobanner",
		top: "-mt-16",
		placeholder: "data:image/jpegbase64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAMBAiExEf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APBqs6svCujSyWYSFcZW18kLgh19C7jZ81Cy6eAAhsjukrAED//Z",
	},
]

const HeroNew = () => {
	const videoRefs: any = useRef([])

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
				onInit={(swiper) => {
					const index = swiper.realIndex
					const currentVideo: HTMLMediaElement = videoRefs.current[index]

					currentVideo.play()

					currentVideo.addEventListener("ended", () => {
						currentVideo.pause()
						currentVideo.currentTime = 0
						if (!swiper.destroyed) {
							swiper.slideNext()
						}
					})

					currentVideo.removeEventListener("ended", () => {
						currentVideo.pause()
						currentVideo.currentTime = 0
						if (!swiper.destroyed) {
							swiper.slideNext()
						}
					})
				}}
				onSlideChangeTransitionStart={(swiperTransition) => {
					const index = swiperTransition.realIndex
					const currentVideo: HTMLMediaElement = videoRefs.current[index]

					currentVideo.play()

					currentVideo.addEventListener("ended", () => {
						currentVideo.pause()
						currentVideo.currentTime = 0
						if (!swiperTransition.destroyed) {
							swiperTransition.slideNext()
						}
					})

					currentVideo.removeEventListener("ended", () => {
						currentVideo.pause()
						currentVideo.currentTime = 0
						if (!swiperTransition.destroyed) {
							swiperTransition.slideNext()
						}
					})
				}}
			>
				{dolores.map(({ top }: Dolor, index: number) => (
					<SwiperSlide key={index}>
						<div className="relative w-full flex flex-col bg-gsk-dark h-[21rem] md:h-[27rem] lg:h-[34rem] xl:h-[38rem] 2xl:h-[45rem] overflow-hidden hero-text">
							<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10" />
							<div className="absolute bottom-auto md:bottom-0 md:left-0 h-fit w-fit">
								<video
									ref={(e: any) => (videoRefs.current[index] = e)}
									poster={"data:image/jpegbase64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAMBAiExEf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APBqs6svCujSyWYSFcZW18kLgh19C7jZ81Cy6eAAhsjukrAED//Z"}
									className={`w-full h-[27rem] md:h-auto object-cover md:object-contain object-[75%] md:object-top brightness-75 md:brightness-100 ${top} md:mt-0 bg-gsk-dark`}
									playsInline={true}
									crossOrigin="anonymous"
									preload="none"
									muted={true}
									width="1280"
									height="700"
									autoPlay={false}
									controls={false}
									loop={false}
									style={{ opacity: 0.5 }}
								>
									<source src={`https://gsk-hdz-2.b-cdn.net/hero/nuevoherobanner.webm`} type="video/webm" />
								</video>
								<h2 className="text-2xl font-bold text-black absolute max-w-[230px] top-0 right-0 p-4 hidden md:block">
									Semana de la Concientización del Herpes Zóster
								</h2>
							</div>
							<article className="order-first absolute top-4 md:top-[12%] lg:top-[30%] text-left left-4 md:left-10 lg:left-14 xl:left-18 2xl:left-24 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-7/12 pt-6 md:pt-0 text-hero-new">
								<p className="italic text-xl md:text-6xl mb-4">
									<FaQuoteLeft className="inline text-red-500 text-lg md:text-4xl" /> No sabía que mi enfermedad crónica aumentaba el riesgo de infecciones como <span className="font-black"> Herpes Zóster. </span>Me cambió la vida. <FaQuoteRight className="inline text-red-500 text-lg md:text-4xl" />
								</p>
								<p className="p-2 sm:p-4 text-xs sm:text-2xl mb-4">
									Tenés alguna enfermedad crónica, el riesgo de Herpes Zóster aumenta.*
								</p>
								<p className="inline-block bg-gray-100 rounded-br-xl text-black p-2 font-light text-lg md:text-3xl my-4">
									¿Ya consultaste con tu médico o  médica sobre el <span className="font-bold">Herpes Zóster? </span>
								</p>
                                <p className="text-sm md:hidden">Semana de la Concientización del Herpes Zóster</p>
								<div className="mt-12 sm:mt-16">
									<p className="text-xs sm:text-sm text-gray-100">
										NP-AR-HZU-BNNR-240004 – Febrero 2025
									</p>
									<p className="text-xs sm:text-sm text-gray-100">
										Para mayor información consulte a su médico. GSK Biopharma Argentina S.A. Av del Libertador 7202, Piso 4, CABA, Buenos Aires, Argentina.
									</p>
									<p className="text-xs sm:text-sm text-gray-100">
										Para consultas sobre nuestros productos, consultas de calidad o reporte de eventos adversos puede comunicarse al 0800 220 4752.
									</p>
									<p className="text-xs text-gray-100">
										*Adaptado de: <a href="https://medlineplus.gov/shingles.html" className="text-blue-600 underline">MedlinePlus</a>
									</p>
								</div>
							</article>
							<div className="absolute bottom-0 left-0 w-full h-2 md:h-1 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<IntroNew />
		</section>
	)
}

export default HeroNew
