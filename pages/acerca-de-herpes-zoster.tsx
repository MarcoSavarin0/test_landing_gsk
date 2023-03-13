import { NextSeo } from "next-seo"

import Modal from '@/components/ui/Modal'
import Hero from "@/components/home/Hero"
import Faq from "@/components/home/Faq"
import Who from "@/components/home/Who"
import Testimonial from "@/components/home/Testimonial"
import Complication from "@/components/home/Complication"
import Blog from "@/components/home/Blog"
import Banner from "@/components/home/Banner"
import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"

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
				<Hero/>
				<Faq/>
				<hr className="w-6/12 border-b border-gsk-orange m-auto my-10"/>
				<Who/>
				<hr className="w-6/12 border-b border-gsk-orange m-auto my-10"/>
				<Testimonial/>
				<hr className="w-6/12 border-b border-gsk-orange m-auto my-10"/>
				<Complication/>
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
