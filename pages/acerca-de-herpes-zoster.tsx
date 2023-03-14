import { NextSeo } from "next-seo"

import Modal from '@/components/ui/Modal'
import Blog from "@/components/home/Blog"
import Banner from "@/components/home/Banner"
import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"
import AboutAccordion from "@/components/acercade/AboutAccordion"

const AcercaDe = () => {
	return (
		<>
			<NextSeo
				title="¿Qué es el Herpes Zoster (culebrilla)? | Hablemos de Zóster"
				description="El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento."
				canonical={process.env.NEXT_PUBLIC_SITE_URL}
				openGraph={{
					url: process.env.NEXT_PUBLIC_SITE_URL,
					title: '¿Qué es el Herpes Zoster (culebrilla)? | Hablemos de Zóster',
					description: 'El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento.',
					images: [
						{
							url: '/og.jpg',
							width: 1200,
							height: 627,
							alt: 'Herpes Zóster',
							type: 'image/jpeg',
						}
					],
					siteName: 'Hablemos de Zóster | Campaña de concientización y prevensión',
				}}
			/>

			<>
				<section className="bg-gsk-dark py-10">
					<div className="space-y-3 px-4 text-center">
						<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Herpes Zóster</h1>
						<H2 title={`¿QUÉ TENÉS QUE SABER?`}/>
						<Description title={`Conocé toda la información que necesitás saber sobre el Herpes Zóster.`} color={`text-white`}/>
					</div>

					<article className="w-10/12 mx-auto">
						<div className="accordion py-12">
							<AboutAccordion/>
						</div>
						<div>
							<p className="text-xs text-white font-light"><sup>3</sup> Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697.</p>
						</div>
					</article>

				</section>
				<hr className="w-6/12 border-b border-gsk-orange m-auto my-10"/>
				<Blog/>
				<Banner/>
			</>

			<Modal>
				<H2 title={`¿QUÉ ES EL HERPES ZÓSTER?`}/>
				<Description title={`El Herpes Zóster, también llamado coloquialmente culebrilla, es una enfermedad causada por la reactivación del Virus Varicela Zóster (VVZ), el mismo virus que causa la varicela. Luego de que una persona contrae varicela <sup>1 2</sup>, el virus permanece latente en su sistema nervioso, por lo general, sin causar síntomas hasta su reactivación.`}/>
			</Modal>
		</>
	)
}

export default AcercaDe
