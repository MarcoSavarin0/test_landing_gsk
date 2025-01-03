import { NextSeo } from "next-seo"

import Description from "@/components/ui/Description"
import PostComponent from '@/components/biblioteca/Post'
import Banner from "@/components/home/Banner"
import { GetStaticProps } from "next"
import { ButtonFilter } from "@/components/biblioteca/ButtonFilter"
import { useEffect, useState } from "react"


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
				},
				"category": "Enfermedades autoinmunes"
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
				},
				"category": "Enfermedades autoinmunes"
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
				},
				"category": "Enfermedades Respiratorias"
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
					"image": "DIABETES",
					"title": "¿Sabías que los pacientes con diabetes tienen hasta un 40% más de riesgo de desarrollar Herpes Zóster?",
					"slug": "relacion-entre-diabetes-herpes-zoster"
				},
				"category": "Enfermedades autoinmunes"
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
				},
				"category": "Enfermedades autoinmunes"
			},
			{
				"id": 11,
				"attributes": {
					"image": "herpes-zoster-oftalmico",
					"title": "Herpes Zóster Oftálmico: ¿qué es y cuáles son sus síntomas?",
					"slug": "herpes-zoster-oftalmico"
				},
				"category": "Complicaciones del Herpes Zóster"
			},
			{
				"id": 12,
				"attributes": {
					"image": "neuralgia-postherpetica",
					"title": "Neuralgia Postherpética: qué es y cómo se relaciona con el Herpes Zóster",
					"slug": "neuralgia-postherpetica"
				},
				"category": "Complicaciones del Herpes Zóster"
			},
			{
				"id": 13,
				"attributes": {
					"image": "afecciones-piel-herpes-zoster",
					"title": "Afecciones en la piel por complicación del Herpes Zóster: cuáles son y cómo identificarlas",
					"slug": "afecciones-piel-herpes-zoster"
				}
			},
			{
				"id": 14,
				"attributes": {
					"image": "varicela-sintomas",
					"title": "¿Qué es la varicela y cuáles son sus síntomas?",
					"slug": "varicela-sintomas"
				}
			},
			{
				"id": 15,
				"attributes": {
					"image": "herpes-simple",
					"title": "¿Qué es el Herpes Simple?",
					"slug": "herpes-simple"
				}
			},
			{
				"id": 16,
				"attributes": {
					"image": "tipos-de-herpes",
					"title": "¿Qué enfermedades provocadas por el virus del Herpes existen?",
					"slug": "tipos-de-herpes"
				}
			},
			{
				"id": 17,
				"attributes": {
					"image": "urticaria-que-es",
					"title": "¿Qué es la Urticaria y qué tipos existen?",
					"slug": "urticaria-que-es"
				}
			},
			{
				"id": 18,
				"attributes": {
					"image": "que-es-eczema",
					"title": "¿Qué es el Eczema y cómo detectarlo?",
					"slug": "que-es-eczema"
				}
			},
			{
				"id": 19,
				"attributes": {
					"image": "prevenir-contagio-herpes-zoster",
					"title": "¿Cómo prevenir el contagio del Herpes Zóster?",
					"slug": "prevenir-contagio-herpes-zoster"
				}
			},
			{
				"id": 20,
				"attributes": {
					"image": "dermatitis-atopica",
					"title": "¿Qué es la dermatitis atópica y cuáles son sus causas y síntomas?",
					"slug": "dermatitis-atopica"
				}
			},
			{
				"id": 21,
				"attributes": {
					"image": "https://gsk-hdz-2.b-cdn.net/posts/herpessimple.jpeg",
					"title": "Herpes Simple: ¿en qué se diferencia del Herpes Zóster?",
					"slug": "diferencias-entre-herpes-simple-herpes-zoster"
				}
			},
			{
				"id": 22,
				"attributes": {
					"image": "importancia-controles-medicos",
					"title": "¿Por qué es importante hacerse controles médicos regulares después de los 50 años?",
					"slug": "importancia-controles-medicos"
				}
			},
			{
				"id": 23,
				"attributes": {
					"image": "factores-riesgo-herpes-zoster",
					"title": "Herpes Zóster: ¿por qué las personas con enfermedades crónicas están en mayor riesgo?",
					"slug": "factores-riesgo-herpes-zoster"
				}
			},
			{
				"id": 24,
				"attributes": {
					"image": "bienestar-emocional-adultos-mayores",
					"title": "Las mejores formas de mantener el bienestar emocional en los adultos mayores ",
					"slug": "bienestar-emocional-adultos-mayores"
				}
			},
			{
				"id": 25,
				"attributes": {
					"image": "mantener-cerebro-activo",
					"title": "Consejos para mantener el cerebro activo después de los 60 años ",
					"slug": "mantener-cerebro-activo"
				}
			},
			{
				"id": 26,
				"attributes": {
					"image": "estrenimiento",
					"title": "Consejos para mantener una buena salud digestiva en la edad adulta ",
					"slug": "estrenimiento"
				}
			},
			{
				"id": 27,
				"attributes": {
					"image": "que-es-impetigo",
					"title": "¿Qué es el Impétigo y cuáles son sus síntomas?",
					"slug": "que-es-impetigo"
				}
			},
			{
				"id": 27,
				"attributes": {
					"image": "cuidado-piel",
					"title": "¿Cómo cuidar la piel en adultos mayores y prevenir el envejecimiento prematuro?",
					"slug": "cuidado-piel"
				}
			},
			{
				"id": 27,
				"attributes": {
					"image": "varicela-sintomas",
					"title": "Síntomas de la varicela ",
					"slug": "sintomas-varicela"
				}
			},
			{
				"id": 28,
				"attributes": {
					"image": "RESPI",
					"title": "¿Sabías que las personas con enfermedades respiratorias tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster?",
					"slug": "enfermedades-respiratorias-zoster"
				}
			},
			{
				"id": 29,
				"attributes": {
					"image": "CARDIO",
					"title": "¿Sabías que las personas con enfermedades cardiovasculares tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster?",
					"slug": "enfermedades-cardiovasculares-zoster"
				},
				"category": "Enfermedades Cardiovasculares"
			},
			{
				"id": 30,
				"attributes": {
					"image": "Nota30",
					"title": "Beneficios de una dieta saludable en edad adulta",
					"slug": "dieta-saludable-adultos"
				}
			},
			{
				"id": 31,
				"attributes": {
					"image": "Nota31",
					"title": "Consejos para cuidar los riñones en la tercera edad",
					"slug": "como-cuidar-rinones"
				}
			},
			{
				"id": 32,
				"attributes": {
					"image": "importancia-del-ejercicio-en-adultos",
					"title": "La importancia del ejercicio y actividad física en la edad adulta",
					"slug": "actividad-edad-adulta"
				}
			},
			{
				"id": 33,
				"attributes": {
					"image": "N33 _HZ y Estres_",
					"title": "¿Cómo reducir el estrés crónico con técnicas de relajación?",
					"slug": "tecnicas-relajacion-estres"
				}
			},
			{
				"id": 34,
				"attributes": {
					"image": "N34 _Gravedad Herpes Zóster_",
					"title": "¿Qué tan grave es el Herpes Zóster?",
					"slug": "gravedad-herpes-zoster"
				}
			},
			{
				"id": 35,
				"attributes": {
					"image": "N35 _Duración Herpes Zóster_",
					"title": "¿Cuánto dura el virus del Herpes Zóster?",
					"slug": "cuanto-dura-herpes-zoster"
				}
			},
			{
				"id": 36,
				"attributes": {
					"image": "N-36",
					"title": "¿Cuáles son las secuelas del Herpes Zoster?",
					"slug": "secuelas-herpes-zoster"
				}
			},
			{
				"id": 37,
				"attributes": {
					"image": "N-37",
					"title": "¿Cuáles son las etapas del Herpes Zóster?",
					"slug": "etapas-herpes-zoster"
				}
			},
			{
				"id": 38,
				"attributes": {
					"image": "N-38",
					"title": "¿Requiere aislamiento el herpes zóster?",
					"slug": "aislamiento-herpes-zoster"
				}
			},
			
			{
				"id": 40,
				"attributes": {
					"image": "N40-_Herpes-Zóster-y-HIV-Existe-una-relación_-_1_",
					"title": "Herpes Zóster y HIV: ¿Existe una relación?",
					"slug": "herpes-zoster-hiv-conexion",
					
				},
				"category": "Enfermedades autoinmunes"
				
			},
			{
				"id": 41,
				"attributes": {
					"image": "N41-_Herpes-Zóster-Cómo-puede-afectar-la-visión_-_1_",
					"title": "Herpes Zóster: ¿Cómo puede afectar la visión?",
					"slug": "herpes-zoster-afectar-vision"
				}
			},
			{
				"id": 42,
				"attributes": {
					"image": "N42-_Parálisis-de-Bell_",
					"title": "Similitudes y diferencias entre la parálisis de Bell y el Herpes Zóster",
					"slug": "paralisis-bell-confundir-herpes-zoster"
				}
			},
			{
				"id": 43,
				"attributes": {
					"image": "N43-_5-mitos-sobre-el-HZ_",
					"title": "5 mitos sobre el Herpes Zóster",
					"slug": "5-mitos-herpes-zoster"
				}
			},
			{
				"id": 44,
				"attributes": {
					"image": "N44-_NPH-Cómo-impacta-en-la-vida-diaria_",
					"title": "¿Cómo impacta en la vida diaria la Neuralgia Postherpética?",
					"slug": "como-viven-pacientes-neuralgia-postherpetica"
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
	const categories = ["Enfermedades autoinmunes", "Enfermedades Respiratorias", "Enfermedades Cardiovasculares", "Complicaciones del Herpes Zóster", "Todos"]
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const [filteredNotas, setFilteredNotas] = useState<any[]>(notas.data)
    
	useEffect(() => {
		if (selectedCategory === "Todos") {
			setFilteredNotas(notas.data)
		} else if (selectedCategory) {
			const filtered = notas.data.filter((nota: any) => {
				return nota.category === selectedCategory
			})
			setFilteredNotas(filtered)
		} else {
			setFilteredNotas(notas.data)
		}
	}, [selectedCategory, notas.data])

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

			<>
				
				<section className="py-10 space-y-10">
					<div className="space-y-3 px-10 text-center">
						<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Hablemos de Salud</h1>
						<Description title={`En este blog encontrarás información actualizada y consejos útiles para prevenir y tratar el Herpes Zóster.`} />
						<Description title={`Además, abordaremos temas relevantes en el ámbito de la salud y compartiremos algunos conocimientos para contribuir a tu bienestar integral. ¡Navegá las notas y tomá acción en tu futuro!`} />
						<div>
							<ButtonFilter
								categories={categories}
								onClick={setSelectedCategory}
							/>
						</div>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-y-4 gap-x-4 px-10">
						{filteredNotas.map((item: any, index: number) => (
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
