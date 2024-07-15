import {useRef} from "react"
import {Swiper, SwiperSlide} from "swiper/react"
import {EffectFade, Autoplay} from "swiper/modules"

import IntroNew from "@/components/home/IntroNew"

import 'swiper/css'
import 'swiper/css/effect-fade'

interface Dolor {
	title: string
	type: string
	top: string
	placeholder: string
}

const dolores: Dolor[] = [
	{
		title: `<span className="block">AFECTAN EL SISTEMA INMUNE,</span><span className="block"><span className="font-bold ">DANDO LUGAR A INFECCIONES COMO EL HERPES ZÓSTER?</span></span>`,
		type: "ardor",
		top: "-mt-16",
		placeholder: "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAMBAiExEf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APBqs6svCujSyWYSFcZW18kLgh19C7jZ81Cy6eAAhsjukrAED//Z",
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
				{dolores.map(({top}: Dolor, index: number) => (
					<SwiperSlide key={index}>
						<div className="relative w-full flex flex-col bg-gsk-dark h-[21rem] md:h-[27rem] lg:h-[34rem] xl:h-[38rem] 2xl:h-[45rem] overflow-hidden hero-text">
							<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>

							<div className="absolute bottom-auto md:bottom-0 md:left-0 w-full h-fit">
								<video ref={(e: any) => videoRefs.current[index] = e} poster={"data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAMBAiExEf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APBqs6svCujSyWYSFcZW18kLgh19C7jZ81Cy6eAAhsjukrAED//Z"} className={`w-full h-[27rem] md:h-auto object-cover md:object-contain object-[30%] md:object-top brightness-75 md:brightness-100 ${top} md:mt-0 bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="none" muted={true} width="1280" height="700" autoPlay={false} controls={false} loop={false}>
									<source src={`https://gsk-hdz-2.b-cdn.net/hero/fuego.webm`} type="video/webm"/>
								</video>
								{/* <Image src={"https://gsk-hdz-2.b-cdn.net/hero/fuego.webp"} alt={"Semana de Concientización"} width={720} height={1000} className={`w-full h-auto object-cover bg-gsk-dark`}/> */}

							</div>

							<article className="order-first absolute top-4 md:top-[12%] lg:top-[30%] text-left left-8 md:left-10 lg:left-14 xl:left-18 2xl:left-24 w-10/12 md:w-7/12 lg:w-6/12 xl:w-7/12 pt-6 md:pt-0 text-hero-new">
								<h1 className={` uppercase inline text-white w-full sm:w-fit text-2xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl md:leading-[2rem] `}>
									¿SABÍAS QUE LAS <br /><span className="bold">ENFERMEDADES CRÓNICAS</span> <br />AFECTAN EL SISTEMA INMUNE, <span className="bold"> DANDO LUGAR A INFECCIONES COMO EL HERPES ZÓSTER?</span>
								</h1>
								{/* {(
									<h1 className={` text-white leading-none uppercase text-4xl sm:text-6xl lg:text-7xl xl:text-8xl`}>
										ENFERMEDADES CRÓNICAS
									</h1>
								)}
								<div className="space-y-2 sm:space-y-4">
									<p className={` uppercase inline text-white w-full sm:w-fit text-2xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl md:leading-[2rem]`}>
										{parse(title)}
									</p> */}
								{/* <div className={`${gskPrecisionLight} hidden md:block text-gsk-orange text-xl 2xl:text-3xl font-light space-y-3`}>
										<div>
											<p>Conocé más sobre la enfermedad, sus síntomas <span className="lg:block">y las opciones de prevención y tratamiento.</span></p>
											<p><Button activeClass="active" className="hover:text-white transition ease-out duration-300 cursor-pointer" type="submit" value="Hablemos de Zóster" to="que-es-herpes-zoster" spy={true} smooth={true} offset={0} duration={800} />.</p>
										</div>
									</div> */}
								{/* </div> */}
							</article>

							{/* <span className="absolute bottom-6 md:bottom-10 xl:bottom-14 right-8 md:right-10 lg:right-14 2xl:right-24 text-white z-20 text-[0.50rem] text-right w-fit leading-tight">*BASADO EN TESTIMONIOS REALES DE PACIENTES. <span className="block lg:inline">LOS SÍNTOMAS DEL HERPES ZOSTER PUEDEN VARIAR.</span></span> */}

							<div className="absolute bottom-0 left-0 w-full h-2 md:h-1 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			

			<IntroNew/>
			
		</section>
	)
}

export default HeroNew
