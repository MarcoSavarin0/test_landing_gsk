import Testimonial from "@/components/home/Testimonial"
import { NextSeo } from "next-seo"
const PrimeraPersona = () => {
    
	return (
		<>
			<NextSeo
				title="En primera persona| Hablemos de Zoster"
				description="El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento."
				canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/blog`}
				openGraph={{
					url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
					title: 'Blog de Salud | Hablemos de Zoster',
					description: 'El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento.',
					images: [
						{
							url: `https://gsk-hdz-2.b-cdn.net/og.jpg`,
							width: 1200,
							height: 627,
							alt: 'Herpes Zóster',
							type: 'image/jpeg',
						}
					],
					siteName: 'Hablemos de Zóster | Campaña de concientización y prevención',
				}}
			/>
			<Testimonial />
		</>
	)
}

export default PrimeraPersona