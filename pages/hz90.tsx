import { NextSeo } from "next-seo"
import Image from 'next/image'

import Link from "next/link"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, EffectFade, Autoplay } from 'swiper/modules'

const Hz90 = () => {
	return (
		<>
			<NextSeo
				title="Hz 90: Campaña de concientización hZ_90 | Hablemos de Zóster"
				description="¿Te cruzaste al misterioso hZ_90 en las redes, en la calle o en los shoppings? Conocé todo sobre la campaña hZ_90 e informate sobre Herpes Zóster."
				canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/acerca-de-herpes-zoster`}
				openGraph={{
					url: `${process.env.NEXT_PUBLIC_SITE_URL}/acerca-de-herpes-zoster`,
					title: 'Hz 90: Campaña de concientización hZ_90 | Hablemos de Zóster',
					description: '¿Te cruzaste al misterioso hZ_90 en las redes, en la calle o en los shoppings? Conocé todo sobre la campaña hZ_90 e informate sobre Herpes Zóster.',
					images: [
						{
							url: `https://gsk-hdz.b-cdn.net/og.jpg`,
							width: 1200,
							height: 627,
							alt: 'Herpes Zóster',
							type: 'image/jpeg',
						}
					],
					siteName: 'Hz 90: Campaña de concientización hZ_90 | Hablemos de Zóster',
				}}
			/>

			<>
				<section className="bg-[#00070C] pb-10">
					<div className="w-full h-auto">
						<video className={`w-full h-auto object-cover bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="auto" muted={true} width="1920" height="420" autoPlay={true} controls={false} loop={true}>
							<source src={`https://gsk-hdz.b-cdn.net/hz90/header.mp4`} type="video/mp4"/>
						</video>
					</div>

					<article className="w-11/12 md:w-10/12 mx-auto about px-8 space-y-14 rounded-xl text-white">
						<div className="pt-8 space-y-12">

							<div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-8">
								<div className="space-y-8 w-full lg:w-7/12 xl:w-7/12 2xl:w-9/12">
									<h1 className={`text-gsk-orange font-bold text-2xl`}>HZ_90: de qué se trata la campaña que protagonizaron Yanina Latorre y Marcelo Tinelli.</h1>
									<div className="space-y-6 text-justify">
										<p>Con el fin de concientizar acerca del Herpes Zóster, el laboratorio GSK llevó adelante una campaña que busca visibilizar la enfermedad y poner en conocimiento a la población para que pueda consultar con su profesional de salud de cabecera sobre las distintas alternativas de prevención y tratamiento de la misma.</p>
										<p>El 13 de septiembre “hZ_90” tomó las cuentas de Instagram de Yanina Latorre y Marcelo Tinelli, cambiando durante horas sus fotos de perfil y publicando contenido interferido, que contenía frases como “perdón por ser una molestia” o “aparezco cuando menos lo esperás”.</p>
										<p>Horas después de la aparición de hZ_90 en las redes de ambas figuras, las pantallas que rodean al Obelisco, en la concurrida Avenida 9 de Julio, comenzaron a mostrar un mensaje en simultáneo que se repetía una y otra vez: hz_90 aseguraba que todas esas pantallas ahora eran suyas. Lo mismo pasaba en otras zonas de la Capital Federal, en las líneas de subte de la Ciudad de Buenos Aires y en las pantallas de los principales shoppings del país.</p>
										<p>Mientras esto sucedía, el tema despertó el interés en redes sociales y en los principales programas de TV y radio, donde crecía la incógnita acerca de qué se trataba hZ_90.</p>
										<p>No fue sino hasta el día siguiente, que las celebridades pudieron recuperar sus cuentas y explicar qué había ocurrido: hZ_90 era la representación del Herpes Zóster -coloquialmente conocido como Culebrilla-, la enfermedad causada por la reactivación del virus que genera la Varicela.</p>
										<p>El número 90 no fue elegido de forma aleatoria; se calcula que el 90% de los argentinos mayores de 50 años ha tenido contacto con la Varicela en algún momento de su vida1 y, por lo tanto, están en riesgo de desarrollar Herpes Zóster.</p>
										<p>Así como hZ_90 apareció sin previo aviso interrumpiendo las actividades cotidianas y generando grandes molestias, luego de causar Varicela, el Virus Varicela Zóster queda latente en el sistema nervioso y puede despertarse generando Herpes Zóster.</p>
									</div>
								</div>

								<div className="hz90-carousel w-full lg:w-5/12 xl:w-5/12 2xl:w-3/12 space-y-4">
									<div className="hz90-carousel w-full">
										<Swiper slidesPerView={1} spaceBetween={50} loop={true} navigation={true} modules={[EffectFade, Autoplay, Navigation]}>
											<SwiperSlide>
												<Image src={"https://gsk-hdz.b-cdn.net/hz90/01.webp"} alt={"HZ_90"} width={720} height={1000}/>
											</SwiperSlide>
											<SwiperSlide>
												<Image src={"https://gsk-hdz.b-cdn.net/hz90/02.webp"} alt={"HZ_90"} width={720} height={1000}/>
											</SwiperSlide>
											<SwiperSlide>
												<Image src={"https://gsk-hdz.b-cdn.net/hz90/03.webp"} alt={"HZ_90"} width={720} height={1000}/>
											</SwiperSlide>
											<SwiperSlide>
												<Image src={"https://gsk-hdz.b-cdn.net/hz90/04.webp"} alt={"HZ_90"} width={720} height={1000}/>
											</SwiperSlide>
											<SwiperSlide>
												<Image src={"https://gsk-hdz.b-cdn.net/hz90/05.webp"} alt={"HZ_90"} width={720} height={1000}/>
											</SwiperSlide>
										</Swiper>
									</div>

									<div className="w-full h-auto">
										<video className={`w-full h-auto object-cover bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="auto" muted={true} width="1080" height="1350" autoPlay={false} controls={true} loop={true} poster={"https://gsk-hdz.b-cdn.net/hz90/leds.webp"}>
											<source src={`https://gsk-hdz.b-cdn.net/hz90/leds.mp4`} type="video/mp4"/>
										</video>
									</div>

								</div>
							</div>

							<div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-01.webp"} alt={"HZ_90"} width={960} height={720}/>
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-02.webp"} alt={"HZ_90"} width={960} height={720}/>
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-03.webp"} alt={"HZ_90"} width={960} height={720}/>
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-04.webp"} alt={"HZ_90"} width={960} height={720}/>
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-05.webp"} alt={"HZ_90"} width={960} height={720}/>
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-06.webp"} alt={"HZ_90"} width={960} height={720}/>
							</div>

							<div className="flex flex-col justify-center gap-y-5 items-center text-center">
								<h2 className="text-lg">Para conocer más sobre Herpes Zóster, hacé click acá: </h2>
								<div className="flex flex-col md:flex-row justify-center items-center gap-x-0 sm:gap-x-2 gap-y-2">
									<Link href="https://www.hablemosdezoster.com/#que-es-herpes-zoster" className="text-base text-center text-white hover:text-gsk-orange bg-gsk-orange hover:bg-white border-2 border-transparent hover:border-gsk-orange transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold">
										<h3>¿Qué es el Herpes Zoster?</h3>
									</Link>

									<Link href="https://www.hablemosdezoster.com/autotest" className="text-base text-center text-white hover:text-gsk-orange bg-gsk-orange hover:bg-white border-2 border-transparent hover:border-gsk-orange transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold">
										<h3>Conocé tu nivel de riesgo</h3>
									</Link>

									<Link href="https://gsk-hdz.b-cdn.net/hz90/hablemos-de-zoster.pdf" target="_blank" className="text-base text-center text-white hover:text-gsk-orange bg-gsk-orange hover:bg-white border-2 border-transparent hover:border-gsk-orange transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold">
										<h3>Descargá el folleto</h3>
									</Link>
								</div>
								<p className="text-gsk-orange text-xl font-bold mt-4">Y consultá con tu médico o médica sobre su prevención y tratamiento. </p>
							</div>

							<div className="flex justify-center items-center w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/window.webp"} alt={"HZ90"} width={1018} height={396}/>
							</div>
						</div>
					</article>

				</section>
			</>
		</>
	)
}

export default Hz90
