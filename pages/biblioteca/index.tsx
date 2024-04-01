import { NextSeo } from "next-seo"

import Description from "@/components/ui/Description"
import PostComponent from '@/components/biblioteca/Post'
import Banner from "@/components/home/Banner"
import { GetStaticProps } from "next"

export const getStaticProps: GetStaticProps = async () => {
	// const res = await fetch(`${process.env.STRAPI_API_URL}/notas?populate=*&sort[0]=publishedAt%3Adesc&pagination[pageSize]=26`, {
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json',
	// 		'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
	// 	}
	// })
	// const notas = await res.json()
	const notas = {
		"data": [
			{
				"id": 1,
				"attributes": {
					"image": "sistema-inmunologico-saludable",
					"title": "¿Cómo mantener una buena salud del sistema inmunológico en la edad adulta?",
					"slug": "sistema-inmunologico-edad-adulta"
				}
			},
			{
				"id": 2,
				"attributes": {
					"image": "sintomas-herpes-zoster-cuales-son",
					"title": "Síntomas del Herpes Zóster: cuáles son y cómo evoluciona el virus",
					"slug": "sintomas-zoster"
				}
			},
			{
				"id": 3,
				"attributes": {
					"image": "sindrome-ramsay-hunt",
					"title": "Síndrome de Ramsay Hunt: ¿qué es y cuánto dura?",
					"slug": "ramsay-hunt"
				}
			},
			{
				"id": 4,
				"attributes": {
					"image": "relacion-herpes-zoster-lupus",
					"title": "Herpes Zóster y Lupus: cómo aumenta el riesgo de contraer Herpes Zóster en personas con Lupus",
					"slug": "lupus"
				}
			},
			{
				"id": 5,
				"attributes": {
					"image": "dermatitis-herpetiforme",
					"title": "¿Qué es y cuál es la causa de la dermatitis herpetiforme?",
					"slug": "herpetiforme"
				}
			},
			{
				"id": 6,
				"attributes": {
					"image": "herpes-zoster-epoc",
					"title": "¿Cómo la Enfermedad Pulmonar Obstructiva Crónica (EPOC) se convierte en un factor de riesgo para desarrollar Herpes Zóster?",
					"slug": "epoc"
				}
			},
			{
				"id": 7,
				"attributes": {
					"image": "enfermedades-cronicas-adultos-mayores",
					"title": "¿Cómo prevenir enfermedades crónicas en los adultos mayores?",
					"slug": "enfermedades-cronicas"
				}
			},
			{
				"id": 8,
				"attributes": {
					"image": "relacion-entre-diabetes-herpes-zoster",
					"title": "¿Hay relación entre el Herpes Zóster y la diabetes? La diabetes como factor de riesgo",
					"slug": "diabetes"
				}
			},
			{
				"id": 9,
				"attributes": {
					"image": "dermatitis-contacto",
					"title": "¿Qué es la dermatitis de contacto y cuáles son sus síntomas?",
					"slug": "dermatitis-contacto"
				}
			},
			{
				"id": 10,
				"attributes": {
					"image": "relacion-artritis-reumatoide-herpes-zoster",
					"title": "¿Existe una relación entre el Herpes Zóster y la Artritis Reumatoide?",
					"slug": "artritis-reumatoide"
				}
			},
		]
	}
	return {
		props: {
			notas
		},
		revalidate: 10,
	}
}



const Blog = ({ notas }: any) => {
	return (
		<>
			<NextSeo
				title="Blog de Salud | Hablemos de Zoster"
				description="El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento."
				canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/blog`}
				openGraph={{
					url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
					title: 'Blog de Salud | Hablemos de Zoster',
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
				<section className="py-10 space-y-10">
					<div className="space-y-3 px-10 text-center">
						<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Hablemos de Salud</h1>
						<Description title={`En este blog encontrarás información actualizada y consejos útiles para prevenir y tratar el Herpes Zóster.`} />
						<Description title={`Además, abordaremos temas relevantes en el ámbito de la salud y compartiremos algunos conocimientos para contribuir a tu bienestar integral. ¡Navegá las notas y tomá acción en tu futuro!`} />
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-y-4 gap-x-4 px-10">
						{notas.data.map((item: any, index: number) => (
							<PostComponent key={index} image={item.attributes.image} title={item.attributes.title} slug={item.attributes.slug} />
						))}
					</div>

				</section>
				<Banner />
			</>
		</>
	)
}

export default Blog