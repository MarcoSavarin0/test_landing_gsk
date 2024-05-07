import Image from 'next/image'
import { NextSeo } from "next-seo"
import Markdown from 'markdown-to-jsx'

import Banner from "@/components/home/Banner"

import dynamic from "next/dynamic"
import { GetStaticProps } from "next"
import parse from "html-react-parser"
import Link from "next/link"
import CollapsibleList from '@/components/biblioteca/Collapsible'

const DynamicSpeechBlog = dynamic(() => import('@/components/blog/SpeechBlog'), {
	ssr: false,
})


const info = `

Mantener una buena salud digestiva en edad avanzada es fundamental para disfrutar de una vida plena y activa en la tercera edad. A medida que envejecemos, nuestro sistema digestivo puede experimentar cambios que dificultan la absorción de nutrientes y el tránsito intestinal. En esta nota, te ofrecemos consejos prácticos que podés aplicar para cuidar de tu salud digestiva y prevenir problemas comunes en adultos mayores.

## Hábitos Alimenticios para una Buena Salud Digestiva

Una dieta equilibrada y rica en fibra es esencial para mantener una buena salud digestiva en edad avanzada. Por ejemplo, para mejorar el tránsito intestinal y prevenir el estreñimiento, se recomienda incrementar el consumo de los siguientes alimentos: 
- Frutas
- Verduras
- Cereales integrales
- Legumbres

Es importante también mantener una hidratación adecuada, tomando alrededor de 2 litros de agua por día y evitando bebidas azucaradas o con cafeína. Además, se recomienda realizar comidas más pequeñas y frecuentes en lugar de pocas y abundantes, ya que esto puede facilitar la digestión y disminuir la acidez estomacal.

## Ejercicios y Técnicas de Relajación para Mejorar la Salud Digestiva en Adultos Mayores

La actividad física regular puede mejorar la función intestinal y mantener una buena salud digestiva en adultos mayores. Caminar, nadar o practicar yoga son opciones ideales para mantenerse activo sin someter al cuerpo a un estrés excesivo. Además, aprender técnicas de relajación como la meditación o la respiración profunda puede ayudar a reducir el estrés y mejorar la digestión.

## Prevención de Enfermedades Digestivas Comunes en Adultos Mayores

Para mantener una buena salud digestiva en edad avanzada, también hay que prevenir enfermedades que suelen ser comunes en este sector etario. Entre las enfermedades digestivas más comunes en la tercera edad se encuentran:
- Estreñimiento o constipación
- Enfermedad por reflujo gastroesofágico (ERGE)
- Diverticulosis

Para prevenir estas afecciones, es fundamental seguir una dieta rica en fibra, evitar alimentos picantes o grasos, reducir el consumo de alcohol y tabaco, y mantener un peso saludable. Además, consultar con un médico ante cualquier síntoma persistente es crucial para un diagnóstico temprano y un tratamiento adecuado.

## Relación entre el Herpes Zóster y la Salud Digestiva

Aunque el Herpes Zóster no está relacionado de forma directa con la salud digestiva, pueden coexistir, particularmente respecto al debilitamiento del sistema inmunológico, que es uno de los factores de riesgo para desarrollar Herpes Zóster. Para entender mejor esta posible conexión, primero es importante explicar que el Herpes Zóster es causado por la reactivación del virus de la varicela-zóster (VZV) cuando el sistema inmunológico se debilita.

La salud digestiva, por otro lado, está vinculada al sistema inmunológico, ya que una gran parte del sistema inmunitario se encuentra en el tracto gastrointestinal. De esta manera, un sistema inmunológico saludable es esencial para prevenir la reactivación del VZV, que deriva en Herpes Zóster.

## Cómo Fortalecer el Sistema Inmunológico y la Salud Digestiva

Un desequilibrio en la flora intestinal (disbiosis o disbacteriosis) puede afectar negativamente la función del sistema inmunológico y, en última instancia, aumentar el riesgo de infecciones y enfermedades, como por ejemplo el Herpes Zóster. Además, el estrés crónico puede afectar la salud digestiva, causando alteraciones en la función gastrointestinal, lo que puede resultar en problemas digestivos como el síndrome del intestino irritable (SII) o la enfermedad inflamatoria intestinal (EII).

En conclusión, una dieta equilibrada y rica en nutrientes es fundamental para mantener la salud digestiva y fortalecer el sistema inmunológico. Mantener una buena salud digestiva a edad avanzada a través de una dieta adecuada, controlar los niveles de estrés, hacer ejercicio físico y mantener un estilo de vida saludable en general puede tener un impacto positivo en el sistema inmunológico y, en última instancia, reducir el riesgo de desarrollar Herpes Zóster.

Ante cualquier duda que tengas, siempre es importante consultar a tu médico de confianza para recibir un diagnóstico adecuado. 

**NP-AR-HZU-WCNT-230014**



`

export const getStaticProps: GetStaticProps = async (context) => {
	// const res = await fetch(`${process.env.STRAPI_API_URL}/notas?populate=*&filters[slug][$in][0]=${context.params?.slug}`, {
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json',
	// 		'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
	// 	}
	// })
	// const nota = await res.json()
	console.log(context)

	const nota = {
		"data": [
			{
				"id": 1,
				"attributes": {
					"title": "¿Cómo mantener la salud digestiva en edad avanzada?",
					"image": "estrenimiento",
					"metatitle": "Consejos para mantener una buena salud digestiva en la edad adulta",
					"metadescription": "Consejos para cuidar la salud digestiva en adultos mayores: dieta, actividad física y prevención de enfermedades comunes. ¡Mantente saludable!",
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
		"1 Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.",
		"2 Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.",
		"3 Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.",
		"4 Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697.",
		"5 https://www.cdc.gov/shingles/hcp/clinical-overview.html",
		"6 https://www.cdc.gov/shingles/hcp/clinical-overview.html",
		"7 P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009",
		"8 P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009",
		"9 Hayderi L et al. Am J Clin Dermatol 2018;19:893–897.",
		"10 Hayderi L et al. Am J Clin Dermatol 2018;19:893–897.",
		"11 Kawai K, Gebremeskel BG, Acosta CJ. Systematic review of incidence and complications of herpes zoster: towards a global perspective. BMJ Open. 2014.",
		"12 https://www.cdc.gov/shingles/hcp/clinical-overview.html"
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
				<div className="space-y-8 pb-10">
					<div className="flex w-full h-96 md:h-[25rem] lg:h-[34rem] xl:h-[42rem] overflow-hidden">
						<Image src={`https://gsk-hdz.b-cdn.net/notas/${image}.webp`}
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
							</article>


							<CollapsibleList list={list} />



							{/* <div className="space-y-2 mt-10">
								<h3 className="text-lg md:text-xl text-gsk-orange">Relacionados</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
									{releated.map(({id, title, date}: Post) => (
										<PostComponent key={id} id={id} title={title} date={date}/>
									))}
								</div>
							</div> */}
							<div className="space-y-2 mt-2">
								{/* <p>Cuidá la salud de quienes te rodean:</p> */}
								{/* <Share cta={`Compartir en`} url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`} quote={title} hashtag={`#${categoria.data.attributes.slug.replaceAll('-', '')}`}/> */}
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