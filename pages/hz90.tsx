import { NextSeo } from "next-seo"

import Blog from "@/components/home/Blog"
import Banner from "@/components/home/Banner"
import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"
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
				<section>
					<div className="space-y-3 px-4 text-center bg-gsk-dark pt-10 pb-36 shadow-xl">
						<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>HZ_90</h1>
						<H2 title={`de qué se trata la campaña que protagonizaron Yanina Latorre y Marcelo Tinelli.`}/>
						<Description title={`Conocé toda la información que necesitás saber sobre el Herpes Zóster.`} color={`text-white`}/>
					</div>

					<article className="w-11/12 md:w-10/12 mx-auto about px-10 space-y-14 bg-white rounded-xl">
						<div className="-mt-24 pt-8 space-y-12">

							<div className="space-y-6">
								<p>Con el fin de concientizar acerca del Herpes Zóster, el laboratorio GSK llevó adelante una campaña para visualizar la enfermedad y fomentar a la población a consultar con su profesional de salud de cabecera sobre la prevención y el tratamiento de la misma.</p>

								<p>El 13 de septiembre “hZ_90” tomó las cuentas de Instagram de Yanina Latorre y Marcelo Tinelli, cambiando durante horas sus fotos de perfil y publicando contenido interferido, que contenía frases como “perdón por ser una molestia” o “aparezco cuando menos lo esperás”.</p>

								<p>Horas después de la aparición de hZ_90 en las redes de ambas figuras, las pantallas que rodean al Obelisco, en la concurrida Avenida 9 de Julio, comenzaron a mostrar un mensaje en simultáneo que se repetía una y otra vez: hz_90 aseguraba que todas esas pantallas ahora eran suyas. Lo mismo pasaba en otras zonas de la Capital Federal, en las líneas de subte de la Ciudad de Buenos Aires y en las pantallas de los principales shoppings del país.</p>

								<p>Mientras esto sucedía, el tema despertó el interés en redes sociales y en los principales programas de TV y radio, donde crecía la incógnita acerca de qué se trataba hZ_90.</p>

								<p>No fue sino hasta el día siguiente, que las celebridades pudieron recuperar sus cuentas y explicar qué había ocurrido: <strong>hZ_90 era la representación del Herpes Zóster</strong> -coloquialmente conocido como Culebrilla-, la enfermedad causada por la reactivación del virus que genera la Varicela.</p>

								<p>El número 90 no fue elegido de forma aleatoria; se calcula que <strong>el 90% de los argentinos mayores de 50 años ha tenido contacto con la Varicela en algún momento de su vida</strong><sup>1</sup> y, por lo tanto, están en riesgo de desarrollar Herpes Zóster.</p>

								<p>Así como hZ_90 apareció sin previo aviso interrumpiendo las actividades cotidianas y generando grandes molestias, <strong>luego de causar Varicela, el Virus Varicela Zóster queda latente en el sistema nervioso y puede despertarse generando Herpes Zóster.</strong></p>
							</div>

							<div className="flex flex-col justify-center gap-y-5 items-center text-center">
								<p className="text-lg">Para conocer más sobre Herpes Zóster, hacé click acá: </p>
								<div className="flex flex-col md:flex-row justify-center items-center gap-2">
									<Cta title={`¿Qué es el Herpes Zoster?`} url={`https://www.hablemosdezoster.com/#que-es-herpes-zoster`}/>
									<Cta title={`Conocé tu nivel de riesgo`} url={`https://www.hablemosdezoster.com/#riesgo`}/>
									<Cta title={`Descargá el folleto`} url={`https://www.gsk.com/`}/>
								</div>
								<p className="text-gsk-orange text-xl font-bold mt-4">Y consultá con tu médico o médica sobre su prevención y tratamiento. </p>
							</div>

						</div>
					</article>

				</section>
				<hr className="w-6/12 border-b border-gsk-orange m-auto my-10"/>
				<Blog/>
				<Banner/>
			</>
		</>
	)
}

export default Hz90
