import { NextSeo } from "next-seo"
import Image from 'next/image'

import va from '@vercel/analytics'

import Link from "next/link"
import 'swiper/css'
import 'swiper/css/navigation'

const Conciencia = () => {
	return (
		<>
			<NextSeo
				title="Concientización y Prevención | Herpes Zóster ⚠️ SAW"
				description="Información clave sobre la prevención del herpes zóster y cómo cuidar tu bienestar. ¡Accedé a nuestro sitio web ahora!"
				canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/acerca-de-herpes-zoster`}
				openGraph={{
					url: `${process.env.NEXT_PUBLIC_SITE_URL}/acerca-de-herpes-zoster`,
					title: 'SAW | Semana de Concientización sobre el Herpes Zóster | Hablemos de Zóster',
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
					siteName: 'Concientización y Prevención | Herpes Zóster ⚠️ SAW',
				}}
			/>

			<>
				<section className="bg-[##FFFFFF] pb-10 md:pb-20">
					<div className="w-full h-auto">
						<Image src={"https://gsk-hdz-2.b-cdn.net/conciencia/herobanner.png"} alt={"Semana de Concientización"} width={720} height={1000} className={`w-full h-auto object-cover bg-gsk-dark`}/>

						{/* <video className={`w-full h-auto object-cover bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="auto" muted={true} width="1920" height="420" autoPlay={true} controls={false} loop={true}>
							<source src={`https://gsk-hdz-2.b-cdn.net/conciencia/bannerGSK.webp`} type="video/mp4"/>
						</video> */}
					</div>

					<article className="w-11/12 md:w-10/12 mx-auto about px-8 space-y-14 rounded-xl ">
						<div className="pt-10 md:pt-20 space-y-12">

							<div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 gap-x-8 items-center">
								<div className="space-y-8 w-full lg:w-7/12 xl:w-7/12 2xl:w-9/12">
									<h1 className={`text-gsk-blue text-2xl md:text-4xl leading-relaxed  font-bold`}>Semana de Concientización sobre el Herpes Zóster</h1>
									<div className="space-y-6 text-justify ">
										<p>En el marco de la Semana de Concientización del Herpes Zóster (Shingles Awareness Week o SAW, por sus siglas en inglés), que se celebra entre el 26 de febrero y el 3 de marzo, buscamos generar conciencia sobre los riesgos y el impacto de esta patología. Se calcula que más del 90% de los adultos mayores de 50 años, han sido infectados por el virus que causa la varicela y, por lo tanto, están en riesgo de que se reactive, desarrollando Herpes Zóster.</p>
										<p>Cualquier persona que haya tenido varicela puede desarrollar Herpes Zóster, incluso aquellas que llevan un estilo de vida saludable.  </p>
										{/* <p>Horas después de la aparición de hZ_90 en las redes de ambas figuras, las pantallas que rodean al Obelisco, en la concurrida Avenida 9 de Julio, comenzaron a mostrar un mensaje en simultáneo que se repetía una y otra vez: hz_90 aseguraba que todas esas pantallas ahora eran suyas. Lo mismo pasaba en otras zonas de la Capital Federal, en las líneas de subte de la Ciudad de Buenos Aires y en las pantallas de los principales shoppings del país.</p>
										<p>Mientras esto sucedía, el tema despertó el interés en redes sociales y en los principales programas de TV y radio, donde crecía la incógnita acerca de qué se trataba hZ_90.</p>
										<p>No fue sino hasta el día siguiente, que las celebridades pudieron recuperar sus cuentas y explicar qué había ocurrido: hZ_90 era la representación del Herpes Zóster -coloquialmente conocido como Culebrilla-, la enfermedad causada por la reactivación del virus que genera la Varicela.</p>
										<p>El número 90 no fue elegido de forma aleatoria; se calcula que el 90% de los argentinos mayores de 50 años ha tenido contacto con la Varicela en algún momento de su vida1 y, por lo tanto, están en riesgo de desarrollar Herpes Zóster.</p>
										<p>Así como hZ_90 apareció sin previo aviso interrumpiendo las actividades cotidianas y generando grandes molestias, luego de causar Varicela, el Virus Varicela Zóster queda latente en el sistema nervioso y puede despertarse generando Herpes Zóster.</p> */}
									</div>
								</div>

								<div className="w-full lg:w-5/12 xl:w-5/12 2xl:w-3/12 space-y-4">
									
									<div className="w-full h-auto">
										<Image src={"https://gsk-hdz-2.b-cdn.net/conciencia/gsk_side_final.png"} alt={"Semana de Concientización"} width={720} height={1000} className={`w-full h-auto object-cover bg-gsk-dark`}/>

										{/* <div className="hz90-carousel w-full">
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
										</div> */}

										{/* <video onPlay={() => console.log("Hz90-play")} className={`w-full h-auto object-cover bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="auto" muted={true} width="960" height="540" autoPlay={false} controls={true} loop={true} poster={"https://gsk-hdz.b-cdn.net/hz90/leds.webp"}>
												<source src={`https://gsk-hdz.b-cdn.net/hz90/obelisco.mp4`} type="video/mp4"/>
											</video> */}
									</div>
										

								</div>
							</div>
							

							{/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-01.webp"} alt={"HZ_90"} width={960} height={720}/>
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-02.webp"} alt={"HZ_90"} width={960} height={720}/>
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-03.webp"} alt={"HZ_90"} width={960} height={720}/>
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-04.webp"} alt={"HZ_90"} width={960} height={720}/>
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-05.webp"} alt={"HZ_90"} width={960} height={720}/>
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/grid-06.webp"} alt={"HZ_90"} width={960} height={720}/>
							</div> */}

							

							{/* <div className="flex justify-center items-center w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
								<Image src={"https://gsk-hdz.b-cdn.net/hz90/window.webp"} alt={"HZ90"} width={1018} height={396}/>
							</div> */}
						</div>
					</article>

				</section>
				<section className="w-full h-auto bg-[#00B8AC] pb-10 md:pb-20">
					<div className="w-11/12 md:w-10/12 mx-auto about px-8 space-y-14 rounded-xl ">
						<h2 className="text-white font-bold text-2xl md:text-3xl pt-10 md:pt-20">Queremos concientizar sobre qué es el Herper Zóster</h2>
						<p className="text-white">El Herpes Zóster, también conocido como culebrilla, es una enfermedad causada por la reactivación del virus varicela-zóster (VVZ), el mismo virus que causa la varicela. Luego de que una persona contrae Varicela, el virus permanece latente en su sistema nervioso. A mayor edad se produce un debilitamiento del sistema inmune que puede aumentar el riesgo de que el virus se reactive. </p>
					</div>
				</section>
				<section className="w-full h-auto bg-[#F8F8F8] pb-20">
					<div className="w-11/12 md:w-10/12 mx-auto about px-8 space-y-14 rounded-xl">
						<h2 className="text-gsk-blue font-bold text-2xl md:text-3xl pt-10 md:pt-20">Conocé sus principales síntomas:</h2>
						<p>Generalmente los primeros síntomas del Herpes Zóster son picazón, dolor, hormigueo, sensación molesta o sensibilidad al tacto en el tórax, el abdomen o el rostro. Tras los primeros días, comienza la fase aguda de la enfermedad, en la que aparece la erupción cutánea, con ampollas en las zonas afectadas, acompañas de un dolor agudo. Al cabo de unos 10 días, las ampollas se convierten en costras que, normalmente, duran entre 2 a 4 semanas. </p>
					</div>
				</section>
				<section className="w-full h-auto  pb-10 md:pb-20">

					<h2 className="text-gsk-black text-center font-bold text-2xl md:text-3xl pt-10 md:pt-20">¿Estás en riesgo de desarrollar Herpes Zóster?</h2>
					<p className="pt-10 text-gsk-blue underline text-center text-xl">Estás en riesgo si: </p>

					<article className="w-11/12 md:w-10/12 mx-auto about px-8 space-y-8 rounded-xl risks_container pt-10">
						<div className="risk bg-[#00B8AC] text-white px-8 py-10 rounded-xl">
							<h3 className="font-bold text-xl md:text-2xl">Ya tuviste varicela</h3>
							<p>Todas las personas que tuvieron varicela, ya llevan el virus del Herpes Zóster en su cuerpo. 1 de cada 3 lo manifestará a lo largo de su vida.</p>
						</div>
						<div className="risk bg-[#00B8AC] text-white px-8 py-10 rounded-xl">
							<h3 className="font-bold text-xl md:text-2xl">Tenés 50 años o más</h3>
							<p>A partir de los 50 años las células del sistema inmune se debilitan, lo que puede aumentar el riesgo de desarrollar la enfermedad.</p>
						</div>
						<div className="risk bg-[#00B8AC] text-white px-8 py-10 rounded-xl">
							<h3 className="font-bold text-xl md:text-2xl">Posees enfermedades crónicas</h3>
							<p>Personas que padecen enfermedades crónicas puede aumentar el riesgo de desarrollar la enfermedad.</p>
						</div>
						<div className="risk bg-[#00B8AC] text-white px-8 py-10 rounded-xl">
							<h3 className="font-bold text-xl md:text-2xl">Posees enfermedades autoinmunes o tratamientos inmunosupresores</h3>
							<p>Si tenés otros factores de riesgo, como por ejemplo enfermedades autoinmunes, tratamientos inmunosupresores, como la quimioterapia o el consumo de corticoides</p>
						</div>
						
					
					</article>

					<div className="flex flex-col justify-center gap-y-5 items-center text-center pt-10 md:pt-20">
						<h2 className="text-lg">Para conocer más sobre Herpes Zóster, hacé click acá: </h2>
						<div className="flex flex-col md:flex-row justify-center items-center gap-x-0 sm:gap-x-2 gap-y-2">
							<Link href="https://www.hablemosdezoster.com/#que-es-herpes-zoster" onClick={() => va.track('Hz90-Cta-queesherpeszoster')} className="w-full md:w-auto text-base text-center text-white hover:text-gsk-blue bg-gsk-blue hover:bg-white border-2 border-transparent hover:border-gsk-blue transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold">
								<h3>¿Qué es el Herpes Zoster?</h3>
							</Link>

							<Link href="https://www.hablemosdezoster.com/autotest" onClick={() => va.track('Hz90-Cta-autotest')} className="w-full md:w-auto text-base text-center text-white hover:text-gsk-blue bg-gsk-blue hover:bg-white border-2 border-transparent hover:border-gsk-blue transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold">
								<h3>Conocé tu nivel de riesgo</h3>
							</Link>

							<Link href="https://gsk-hdz-2.b-cdn.net/conciencia/folleto_saw_2024.pdf" onClick={() => va.track('SAW-Cta-pdf')} target="_blank" className="w-full md:w-auto text-base text-center text-white hover:text-gsk-blue bg-gsk-blue hover:bg-white border-2 border-transparent hover:border-gsk-blue transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold">
								<h3>Descargá el folleto</h3>
							</Link>
						</div>
						<p className="text-gsk-blue text-xl font-bold mt-4">Y consultá con tu médico o médica sobre su prevención y tratamiento. </p>
					</div>
				</section>
				<section className="w-full h-auto  pb-10 md:pb-20">

					{/* <h2 className="text-gsk-black text-center font-bold text-2xl md:text-3xl pt-10 md:pt-20">¿Estás en riesgo de desarrollar Herpes Zóster?</h2> */}
					<p className="pt-10  text-center text-xl">Referencias </p>

					<p className="w-11/12 md:w-10/12 mx-auto  px-8 space-y-8 text-center flex flex-col justify-center gap-y-5 items-center text-center pt-5 text-xs">
						*Basado en testimonios reales de pacientes. Los síntomas del Herpes Zóster pueden variar.
						- Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30
						- Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. -Neurologic Clinics.
						2008;26;675-697
						-Chen SY et al. Infection. 2014; 42:325-34. En: https://link.springer.com/content/pdf/10.1007/s15010-013-0550-8.pdf .
						-Marra F, Parhar K, Huang B, Vadlamudi N. Risk Factors for Herpes Zoster Infection: A Meta-Analysis. Open Forum Infect Dis.
						2020;7(1):ofaa005. Published 2020 Jan 9. doi:10.1093/ofid/ofaa005
					</p>

					
				</section>
			</>
		</>
	)
}

export default Conciencia
