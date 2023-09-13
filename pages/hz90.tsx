import { NextSeo } from "next-seo"
import Image from 'next/image'

import Cta from "@/components/ui/Cta"

const Hz90 = () => {
	return (
		<>
			<NextSeo
				title="¿Qué es el Herpes Zoster (culebrilla)? | Hablemos de Zóster"
				description="El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento."
				canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/acerca-de-herpes-zoster`}
				openGraph={{
					url: `${process.env.NEXT_PUBLIC_SITE_URL}/acerca-de-herpes-zoster`,
					title: '¿Qué es el Herpes Zoster (culebrilla)? | Hablemos de Zóster',
					description: 'El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento.',
					images: [
						{
							url: `https://gsk-hdz.b-cdn.net/og.jpg`,
							width: 1200,
							height: 627,
							alt: 'Herpes Zóster',
							type: 'image/jpeg',
						}
					],
					siteName: 'Hablemos de Zóster | Campaña de concientización y prevención',
				}}
			/>

			<>
				<section className="bg-[#00070C] pb-10">
					<div className="w-full h-auto">
						<video className={`w-full h-auto object-cover bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="none" muted={true} width="1920" height="1080" autoPlay={true} controls={false} loop={true} poster={"data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASACADASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAMBAiExEf/EABYBAQEBAAAAAAAAAAAAAAAAAAIBA//EABcRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/APBqs6svCujSyWYSFcZW18kLgh19C7jZ81Cy6eAAhsjukrAED//Z"}>
							<source src={`/header.mp4`} type="video/mp4"/>
						</video>
					</div>

					<article className="w-11/12 md:w-10/12 mx-auto about px-10 space-y-14 rounded-xl text-white">
						<div className="pt-8 space-y-12">

							<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
								<div className="space-y-8">
									<h1 className={`text-gsk-orange font-bold text-2xl`}>HZ_90: de qué se trata la campaña que protagonizaron Yanina Latorre y Marcelo Tinelli.</h1>

									<div className="space-y-6">
										<p>Con el fin de concientizar acerca del Herpes Zóster, el laboratorio GSK llevó adelante una campaña que busca visibilizar la enfermedad y poner en conocimiento a la población para que pueda consultar con su profesional de salud de cabecera sobre las distintas alternativas de prevención y tratamiento de la misma.</p>
										<p>El 13 de septiembre “hZ_90” tomó las cuentas de Instagram de Yanina Latorre y Marcelo Tinelli, cambiando durante horas sus fotos de perfil y publicando contenido interferido, que contenía frases como “perdón por ser una molestia” o “aparezco cuando menos lo esperás”.</p>
										<p>Horas después de la aparición de hZ_90 en las redes de ambas figuras, las pantallas que rodean al Obelisco, en la concurrida Avenida 9 de Julio, comenzaron a mostrar un mensaje en simultáneo que se repetía una y otra vez: hz_90 aseguraba que todas esas pantallas ahora eran suyas. Lo mismo pasaba en otras zonas de la Capital Federal, en las líneas de subte de la Ciudad de Buenos Aires y en las pantallas de los principales shoppings del país.</p>
										<p>Mientras esto sucedía, el tema despertó el interés en redes sociales y en los principales programas de TV y radio, donde crecía la incógnita acerca de qué se trataba hZ_90.</p>
										<Image src={"/imageholder.webp"} alt={"HZ90"} width={1018} height={396}/>
									</div>
								</div>
								<div className="space-y-6">
									<Image src={"/imageholder.webp"} alt={"HZ90"} width={1018} height={396}/>
									<p>No fue sino hasta el día siguiente, que las celebridades pudieron recuperar sus cuentas y explicar qué había ocurrido: hZ_90 era la representación del Herpes Zóster -coloquialmente conocido como Culebrilla-, la enfermedad causada por la reactivación del virus que genera la Varicela.</p>
									<p>El número 90 no fue elegido de forma aleatoria; se calcula que el 90% de los argentinos mayores de 50 años ha tenido contacto con la Varicela en algún momento de su vida1 y, por lo tanto, están en riesgo de desarrollar Herpes Zóster.</p>
									<p>Así como hZ_90 apareció sin previo aviso interrumpiendo las actividades cotidianas y generando grandes molestias, luego de causar Varicela, el Virus Varicela Zóster queda latente en el sistema nervioso y puede despertarse generando Herpes Zóster.</p>
									<Image src={"/imageholder.webp"} alt={"HZ90"} width={1018} height={396}/>
								</div>
							</div>

							<div className="flex flex-col justify-center gap-y-5 items-center text-center">
								<p className="text-lg">Para conocer más sobre Herpes Zóster, hacé click acá: </p>
								<div className="flex flex-col md:flex-row justify-center items-center gap-2">
									<Cta title={`¿Qué es el Herpes Zoster?`} url={`https://www.hablemosdezoster.com/#que-es-herpes-zoster`}/>
									<Cta title={`Conocé tu nivel de riesgo`} url={`https://www.hablemosdezoster.com/#riesgo`}/>
									<Cta title={`Descargá el folleto`} location={`_blank`} url={`https://www.gsk.com/`}/>
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
