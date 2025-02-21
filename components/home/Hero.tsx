import {useRef} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {EffectFade, Autoplay} from "swiper/modules"

import { FaQuoteLeft } from "react-icons/fa"
import { FaQuoteRight } from "react-icons/fa"

import Intro from "@/components/home/Intro"
import localFont from "@next/font/local"

import 'swiper/css'
import 'swiper/css/effect-fade'

const barlowSemicondensedBoldItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-bolditalic.woff2' })

interface Dolor {
	title: string
	type: string
	top: string
	placeholder: string
}

const dolores: Dolor[] = [
	{
		title: `<span className="block">PUEDE SENTIRSE COMO</span> TENER LA <span className="font-bold ${barlowSemicondensedBoldItalic.className}">PIEL</span> <span className="block">EN <span className="font-bold ${barlowSemicondensedBoldItalic.className}">LLAMAS</span>*</span>`,
		type: "Asset-2426543",
		top: "-mt-10",
		placeholder: "",
	},
]

const Hero = () => {
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
						if(!swiper.destroyed) {
							swiper.slideNext()
						}
					})

					currentVideo.removeEventListener("ended", () => {
						currentVideo.pause()
						currentVideo.currentTime = 0
						if(!swiper.destroyed) {
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
						if(!swiperTransition.destroyed) {
							swiperTransition.slideNext()
						}
					})

					currentVideo.removeEventListener("ended", () => {
						currentVideo.pause()
						currentVideo.currentTime = 0
						if(!swiperTransition.destroyed) {
							swiperTransition.slideNext()
						}
					})
				}}
			>
				{dolores.map(({type, top}: Dolor, index: number) => (
					<SwiperSlide key={index}>
						<div className="relative w-full flex flex-col bg-gsk-dark h-[21rem] md:h-[24rem] lg:h-[32rem] xl:h-[38rem] 2xl:h-[44rem] overflow-hidden">
							<div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>

							<div className="absolute bottom-auto md:bottom-0 md:right-0 w-full h-fit">
								<video ref={(e: any) => videoRefs.current[index] = e} poster={"data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAMBAiExEf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APBqs6svCujSyWYSFcZW18kLgh19C7jZ81Cy6eAAhsjukrAED//Z"} className={`w-full h-[27rem] md:h-auto object-cover md:object-contain object-[30%] md:object-top brightness-75 md:brightness-100 ${top} md:mt-0 bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="none" muted={true} width="1280" height="700" autoPlay={false} controls={false} loop={false} style={{ opacity: 0.5 }}>
									<source src={`https://gsk-hdz-2.b-cdn.net/hero/${type}.webm`} type="video/webm"/>
								</video>
							</div>
                            <h2 className="text-2xl font-bold text-white absolute max-w-[230px] top-0 left-0 p-4 hidden md:block">
									Semana de la Concientización del Herpes Zóster
                            </h2>
							<article className="order-first absolute top-4 md:top-[7%] lg:top-[18%] text-right right-4 md:right-10 lg:right-14 xl:right-18 2xl:right-24 w-11/12 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-7/12 pt-6 md:pt-0 text-hero-new">
								<p className="italic text-xl md:text-6xl mb-4">
									<FaQuoteLeft className="inline text-red-500 text-lg md:text-4xl" /> Pense que era muy joven para tener<span className="font-black"> Herpes Zóster, </span>me equivoque. <br /> No se lo deseo a nadie. <FaQuoteRight className="inline text-red-500 text-lg md:text-4xl" />
								</p>
								<p className="p-2 sm:p-4 text-xs sm:text-xl mb-4">
									El 90% de los adultos mayores de 50 años<br /> tuvo varicela y tiene un mayor riesgo <br />de desarrollar herpes zóster.
								</p>
								<p className="inline-block bg-white font-light rounded-br-3xl text-black text-sm p-4 md:text-3xl">
									Si tenés más de 50 años o padecés alguna<br /> enfermedad crónica, <span className="font-bold">consultá con tu médico<br /> o médica sobre el herpes zóster.</span>
                                </p>
                                <p className="text-xs mt-1 md:hidden">Semana de la Concientización del Herpes Zóster</p>
								<div className="hidden md:block md:mt-6">
									<p className="text-[10px] md:text-sm text-gray-100">
										NP-AR-HZU-BNNR-240004 – Febrero 2025
									</p>
									<p className="text-[10px] md:text-sm text-gray-100">
										Para mayor información consulte a su médico. GSK Biopharma Argentina S.A. Av del Libertador 7202, Piso 4, CABA, Buenos Aires, Argentina.
									</p>
									<p className="text-[10px] md:text-sm text-gray-100">
										Para consultas sobre nuestros productos, consultas de calidad o reporte de eventos adversos puede comunicarse al 0800 220 4752.
									</p>
									<p className="text-[10px] md:text-sm text-gray-100">
										*Adaptado de: <a href="https://medlineplus.gov/shingles.html" className="text-blue-600 underline">MedlinePlus</a>
									</p>
								</div>
							</article>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Intro/>
		</section>
	)
}

export default Hero
