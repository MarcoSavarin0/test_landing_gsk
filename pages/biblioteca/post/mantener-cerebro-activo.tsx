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

Mantener el cerebro activo después de los 60 años es fundamental para prevenir el deterioro cognitivo y disfrutar de una buena calidad de vida. ¿Te preguntás cómo mantener el cerebro activo y prevenir el deterioro cognitivo? A continuación, te ofrecemos una serie de consejos para mantener tu mente en forma.

## Ejercicios cognitivos para prevenir el deterioro mental

Realizar ejercicios cognitivos es una excelente manera de mantener el cerebro activo después de los 60 años y mejorar nuestras habilidades mentales. Entre las actividades que pueden ayudarnos a mantener la mente ágil se encuentran:
- Juegos de memoria
- Pasatiempos como crucigramas o sudokus
- Leer libros
- Practicar habilidades de cálculo mental

Estas actividades estimulan diferentes áreas del cerebro y contribuyen a mantenerlo en forma.

## Los beneficios de la actividad física y la alimentación para prevenir el deterioro cognitivo

La actividad física y una alimentación adecuada también juegan un papel fundamental para mantener el cerebro activo después de los 60 años. El ejercicio físico, como caminar, nadar o practicar yoga, mejora la circulación sanguínea y aporta oxígeno al cerebro. Por otro lado, una dieta rica en antioxidantes, ácidos grasos omega-3 y vitaminas del grupo B es clave para proteger el cerebro y prevenir el deterioro cognitivo.

Algunos de los alimentos que contienen estos ingredientes son:
- Frutos Rojos: arándanos, frambuesas, fresas y moras
- Frutos Secos: nueces, semillas de chía y semillas de lino
- Pescados grasos: salmón, caballa, atún, trucha y sardinas
- Vegetales de hoja verde oscuro: espinaca, repollo rizado (kale), brócoli y acelga
- Frutas cítricas: naranjas, limas, limones y mandarinas
- Legumbres y granos enteros: lentejas, garbanzos, arroz, quinoa y porotos

## El papel de la socialización y el aprendizaje continuo en la prevención del deterioro cognitivo

Por su parte, la socialización y el aprendizaje continuo son aspectos cruciales para mantener el cerebro activo. El contacto con otras personas nos permite ejercitar habilidades cognitivas como la memoria, el lenguaje y la atención. Además, el aprendizaje de nuevas habilidades o la práctica de actividades creativas, como la pintura o la música, estimulan el cerebro y favorecen su plasticidad.

## La importancia de un sueño reparador para la salud cognitiva después de los 60 años

El sueño es un factor clave para mantener el cerebro activo y prevenir el deterioro cognitivo. Durante el sueño, nuestro cerebro realiza procesos de limpieza y consolidación de la memoria, lo que es esencial para mantener una buena salud cognitiva. En consecuencia, es importante asegurar una cantidad adecuada de sueño de calidad cada noche y mantener una rutina regular para optimizar el descanso.

## ¿En qué se relaciona el Herpes Zóster con mantener el cerebro activo?

Aunque no existe una relación directa entre el Herpes Zóster y mantener el cerebro activo, ambos aspectos pueden verse influenciados por la salud del sistema inmunológico y el bienestar general. El Herpes Zóster es causado por la reactivación del virus de la varicela-zóster en personas que han tenido varicela. El virus puede reactivarse cuando el sistema inmunológico se debilita debido a la edad, el estrés, ciertas enfermedades o tratamientos médicos.

Si creés que tenés Herpes Zóster o querés conocer cómo cuidar tu salud después de los 60 años, te recomendamos consultar a tu médico de cabecera.





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
					"title": "Consejos para mantener el cerebro activo después de los 60 años",
					"image": "mantener-cerebro-activo",
					"metatitle": "¿Cómo mantener el cerebro activo después de los 60 años? ",
					"metadescription": "Descubrí cómo mantener el cerebro activo después de los 60 años y aprendé a prevenir el deterioro cognitivo. ¡Disfrutá una vida plena!",
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
		"1 Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.",
		"2 Christenson SA, Smith BM, Bafadhel M, Putcha N. Chronic obstructive pulmonary disease. Lancet. 2022 Jun 11;399(10342):2227-2242. doi: 10.1016/S0140-6736(22)00470-6. Epub 2022 May 6. PMID: 35533707.",
		"3 Enfermedad Pulmonar Obstructiva Crónica (EPOC) | subsection title | section title | site title (cdc.gov) Enfermedad pulmonar obstructiva crónica (EPOC) (who.int)",
		"4 Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.",
		"5 https://medlineplus.gov/ency/patientinstructions/000701.htm",
		"6 https://medlineplus.gov/ency/patientinstructions/000701.htm",
		"7 https://medlineplus.gov/ency/patientinstructions/000700.htm"
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