import Image from 'next/image'
import { NextSeo } from "next-seo"
import Markdown from 'markdown-to-jsx'

import Banner from "@/components/home/Banner"

import dynamic from "next/dynamic"
import { GetStaticProps } from "next"
import parse from "html-react-parser"
import Link from "next/link"
import CollapsibleList from '@/components/biblioteca/Collapsible'
import { Botoninformacion } from '@/components/blog/Botoninformacion'
import Cta from '@/components/ui/Cta'

const DynamicSpeechBlog = dynamic(() => import('@/components/blog/SpeechBlog'), {
	ssr: false,
})


const info = `

A medida que envejecemos, el riesgo de padecer diversas enfermedades crónicas y afecciones médicas aumenta. Por ello, es fundamental realizar controles médicos regulares después de los 50 años. Estos controles pueden ayudar a detectar problemas de salud en etapas tempranas y permiten el tratamiento adecuado, lo que mejora vida.

En este artículo, abordaremos la importancia y beneficios de los controles médicos regulares después de los 50 años y, también, las pruebas de por qué son fundamentales para los adultos mayores.

## Los beneficios de los controles médicos regulares después de los 50 años


Los controles médicos regulares son esenciales para mantener una buena salud a medida que envejecemos. Algunos de los beneficios de realizar controles médicos regulares después de los 50 años incluyen:

- **Prevención y detección temprana de enfermedades:** Detectar enfermedades en etapas tempranas aumenta las posibilidades de un tratamiento con mejores resultados.
- **Control de enfermedades crónicas:** Ayudan a controlar enfermedades como la diabetes, la hipertensión y el colesterol alto.
- **Mantenimiento de un estilo de vida saludable:** Proporcionan información sobre nuestro estado de salud y nos ayudan a tomar decisiones informadas para mantener un estilo de vida saludable.

## ¿Qué pruebas médicas son importantes para adultos mayores?

En los controles médicos regulares se pueden realizar pruebas específicas que permitan detectar diversas condiciones médicas a tiempo. Algunas de las pruebas importantes incluyen:

- **Análisis de sangre:** Indica problemas como anemia, infecciones, enfermedades del corazón, riñón y hígado, y diabetes.
- **Pruebas de detección de cáncer:** Ayudan a detectar el cáncer en etapas tempranas, como el cáncer de mama, el cáncer de colon y el cáncer de próstata.
- **Exámenes cardiológicos:** Evalúan la función cardíaca y detectan enfermedades cardiovasculares.
- **Exámenes de la vista y audición:** Detectan problemas de visión y audición para proporcionar tratamientos adecuados.
- **Pruebas de densidad ósea:** Identifican la osteoporosis y determinan el riesgo de fracturas óseas.

## La importancia de la prevención y el diagnóstico temprano de enfermedades crónicas

La detección temprana de enfermedades es fundamental para mejorar el pronóstico y la calidad de vida de los pacientes, particularmente en enfermedades como el cáncer, la diabetes, las enfermedades del corazón y algunas enfermedades infecciosas, donde el tratamiento temprano puede ser más efectivo.

En este sentido, los controles médicos regulares permiten realizar un mayor reconocimiento y tratamiento de enfermedades crónicas y control de factores de riesgos. 

No esperes a que aparezcan síntomas o problemas de salud, la prevención y el diagnóstico temprano son la clave para mantener el bienestar físico y emocional. Consultá a tu médico de confianza para recibir la atención adecuada.






`

export const getStaticProps: GetStaticProps = async (context) => {
	console.log(context)

	// const res = await fetch(`${process.env.STRAPI_API_URL}/notas?populate=*&filters[slug][$in][0]=${context.params?.slug}`, {
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json',
	// 		'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
	// 	}
	// })
	// const nota = await res.json()
	const nota = {
		"data": [
			{
				"id": 1,
				"attributes": {
					"title": "¿Por qué es importante hacerse controles médicos regulares después de los 50 años?",
					"image": "importancia-controles-medicos",
					"metatitle": "Controles médicos después de los 50 años",
					"metadescription": "Conocé por qué los controles médicos regulares después de los 50 años mejoran la calidad de vida y previenen enfermedades. ¡Cuidá tu salud!",
					"slug": "note-slug",
					"categoria": "Note Category",
					"tags": ["tag1", "tag2", "tag3"]
				}
			}
		]
	}
	return {
		props: {
			nota
		},
		revalidate: 10,
	}
}

// export const getStaticPaths: GetStaticPaths = async () => {
// 	// const res = await fetch(`${process.env.STRAPI_API_URL}/notas?fields[0]=slug&sort[0]=publishedAt%3Adesc&pagination[pageSize]=26`, {
// 	// 	headers: {
// 	// 		'Accept': 'application/json',
// 	// 		'Content-Type': 'application/json',
// 	// 		'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
// 	// 	}
// 	// })
// 	// const slugs = await res.json()
// 	const slugs ={
// 		"data": [
// 			{
// 			  "id": 1,
// 			  "attributes": {
// 				"slug": "note-slug-1"
// 			  }
// 			},
// 			{
// 			  "id": 2,
// 			  "attributes": {
// 				"slug": "note-slug-2"
// 			  }
// 			},
// 			{
// 			  "id": 3,
// 			  "attributes": {
// 				"slug": "note-slug-3"
// 			  }
// 			}
// 		  ]
// 	}
// 	const paths = slugs.data.map((item: any) => ({
// 		params: {slug: item.attributes.slug},
// 	}))

// 	return {
// 		paths: paths,
// 		fallback: false,
// 	}
// }

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str)

const Blog = ({ nota }: any) => {
	const { title, image, metatitle, metadescription, slug } = nota.data[0].attributes

	const list = [
		"Okura M, Ogita M, Yamamoto M, Nakai T, Numata T, Arai H. Health checkup behavior and individual health beliefs in older adults. Geriatr Gerontol Int. 2018 Feb; 18(2):338-351. doi: 10.1111/ggi.13169. Epub 2017 Sep 7. PMID: 28880484.",
		"Prohaska TR, Leventhal EA, Leventhal H, Keller ML. Health practices and illness cognition in young, middle aged, and elderly adults. J Gerontol. 1985 Sep;40(5):569-78. doi: 10.1093/geronj/40.5.569. PMID: 4031405.",
		"Liss DT, Uchida T, Wilkes CL, Radakrishnan A, Linder JA. General Health Checks in Adult Primary Care: A Review. JAMA. 2021 Lun 8;325(22):2294-2306. doi: 10.1001/jama.2021.6524. PMID: 34100866."
	]
	




	return (
		<>
			<NextSeo
				title={`${metatitle} | Blog | Hablemos de Zoster`}
				description={`${metadescription}`}
				canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`}
				openGraph={{
					url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
					title: `${metatitle} | Blog |Hablemos de Zoster`,
					description: `${metadescription}`,
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
				<div className="space-y-8 pb-10">
					<div className="flex w-full h-96 md:h-[25rem] lg:h-[34rem] xl:h-[42rem] overflow-hidden">
						<Image src={`https://gsk-hdz-2.b-cdn.net/notas/${image}.webp`}
							className="w-full h-auto object-cover" alt="Post" width={1920} height={1080}
							placeholder="blur"
							blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
							style={{
								maxWidth: '100%',
								height: 'auto'
							}}
						/>
					</div>

					<div className="flex flex-col lg:flex-row px-12 gap-x-14">
						<article className="flex flex-col flex-1 gap-y-4 texto">
							<header className="space-y-6">
								{/* <span className="text-xs">01/04/2023 · 8 MINUTOS DE LECTURA</span> */}

								<div className="space-y-1">
									<DynamicSpeechBlog text={parse(title) + " " + parse(info)} />

									<h1 className="text-gsk-orange font-bold leading-none text-4xl sm:text-5xl">{title}</h1>
									{/* <h2 className="text-gsk-orange text-xl">Ut enim ad minim veniam, quis nostrud exercitation elit.</h2> */}
								</div>
							</header>

							<article>
								<Markdown
									options={{
										overrides: {
											a: ({ href, children }) => {
												return (
													<Link href={href}>
														{children}
													</Link>
												)
											},
										}
									}}
									className="markdown-body">{info}</Markdown>
							</article>							<div>
								<div className="mb-8">
									<Botoninformacion />
								</div>
								<div className="w-auto my-5">
									<Cta title={'INICIAR TEST'} url={`/autotest`} gtm={true} gtmTrackName="Autotest"/>
								</div>
								<div>
									<span className="markdown-body">
                                    NP-AR-HZU-WCNT-230008
									</span>
								</div>
								<CollapsibleList list={list} />
							</div>
						</article>
						
					</div>
				</div>
				<Banner />
			</>
		</>
	)
}

export default Blog