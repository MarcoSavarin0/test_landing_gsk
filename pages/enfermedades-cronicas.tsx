import { NextSeo } from "next-seo"

import HeroNew from "@/components/home/HeroNew"
import 'swiper/css'
import 'swiper/css/navigation'
import ComplicationNew from "@/components/home/ComplicationNew"
import FooterNew from "@/components/home/footerNew"

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
				<section className="bg-[##FFFFFF]">
					
					<HeroNew />

					<ComplicationNew />
					<FooterNew />
				</section>
				
			</>
		</>
	)
}

export default Conciencia
