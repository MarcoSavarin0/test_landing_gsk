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

A medida que envejecemos, nuestro sistema inmunológico puede debilitarse, haciéndonos más susceptibles a infecciones y enfermedades. Es por eso que mantener una buena salud del sistema inmunológico en la edad adulta es fundamental para disfrutar de una vida plena y saludable. En este artículo, exploraremos diferentes estrategias que se pueden implementar para mantener tu sistema inmunológico fuerte y protegido.

## Alimentos y Suplementos para un Sistema Inmunológico Saludable

Una alimentación equilibrada es esencial para mantener un sistema inmunológico fuerte. Incluye en tu dieta alimentos ricos en vitaminas A, C y E, así como minerales como zinc y selenio. Algunos de estos alimentos incluyen:

- Frutas cítricas
- Frutos rojos
- Pescado
- Frutos secos
- Semillas

Además, podés considerar la ingesta de suplementos con el asesoramiento de tu médico.

## Ejercicio y Sueño

Realizar actividad física regularmente impacta positivamente en el sistema inmune. Tratá de realizar ejercicios aeróbicos, como caminar o nadar, y combínalos con actividades de fuerza y flexibilidad. Además, asegurate de dormir lo suficiente, ya que el sueño reparador es fundamental para la recuperación del organismo y la función inmunitaria.

## Evitar Hábitos que Debilitan el Sistema Inmunológico

Algunos hábitos pueden debilitar tu sistema inmunológico, como el consumo excesivo de alcohol, fumar y llevar una vida sedentaria. Es importante tratar de reducir estos comportamientos y adoptar un estilo de vida más saludable para proteger tu sistema inmunológico. Asimismo, la soledad y el estrés crónico pueden tener un impacto negativo en tu sistema inmunológico. Te recomendamos mantener una vida social activa, así como aprender técnicas de manejo del estrés, como la meditación, el yoga o la respiración profunda.

## Relación entre el Herpes Zóster y la Salud del Sistema Inmunológico

El Herpes Zóster está directamente relacionado con la salud del sistema inmunológico, ya que la reactivación del virus de la varicela-zóster (VVZ), que provoca el Herpes Zóster, ocurre cuando el sistema inmunológico se debilita. Cuando una persona se infecta con varicela, el virus VVZ permanece en el organismo en estado latente, alojándose en los ganglios nerviosos. En algunas personas, especialmente aquellas con un sistema inmunológico mayormente debilitado, el virus puede reactivarse y causar el Herpes Zóster.

El sistema inmunológico puede debilitarse por diversas razones, como:

- Envejecimiento
- Estrés
- Enfermedades autoinmunitarias
- Infección por VIH
- Cáncer
- Tratamientos médicos como la quimioterapia y la radioterapia, entre otros.

Cuando el sistema inmunológico no funciona de manera óptima, el cuerpo tiene dificultades para combatir infecciones y enfermedades. Si sospechás que tenés algún síntoma de Herpes Zóster o tu sistema inmunológico está debilitado, no dudes en consultar a un médico.


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
					"title": "¿Cómo mantener una buena salud del sistema inmunológico en la edad adulta? ",
					"image": "sistema-inmunologico-saludable",
					"metatitle": " Cómo tener una buena salud del sistema inmunológico | 2024",
					"metadescription": "Te enseñaremos como tener una buena salud, junto con algunas estrategias que podés implementar para mantener tu sistema inmunológico fuerte y protegido.",
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
		"1 Simon AK et al. Proc Biol Sci 2015;282:2014–3085; 2. Del Giudice G et al. NPJ Aging Mech Dis 2017;4:1; 3. Liu BC et al. Clin Infect Dis 2012;55:1450–1456",
		"2 Mora JR, Iwata M, von Andrian UH. Vitamin effects on the immune system: vitamins A and D take centre stage. Nat Rev Immunol. 2008 Sep;8(9):685-98. doi: 10.1038/nri2378. PMID: 19172691; PMCID: PMC2906676.",
		"3 Christ A, Lauterbach M, Latz E. Western Diet and the Immune System: An Inflammatory Connection. Immunity. 2019 Nov 19;51(5):794-811. doi: 10.1016/j.immuni.2019.09.020. PMID: 31747581.",
		"4 Rico-Rosillo MG, Vega-Robledo GB. Sueño y sistema immune [Sleep and immune system]. Rev Alerg Mex. 2018 Apr-Jun;65(2):160-170. Spanish. doi: 10.29262/ram.v65i2.359. PMID: 29983013.",
		"5 Díaz LE, Montero A, González-Gross M, Vallejo AI, Romeo J, Marcos A. Influence of alcohol consumption on immunological status: a review. Eur J Clin Nutr. 2002 Aug;56 Suppl 3:S50-3. doi: 10.1038/sj.ejcn.1601486. PMID: 12142963.",
		"6 Vitlic A, Lord JM, Phillips AC. Stress, ageing and their influence on functional, cellular and molecular aspects of the immune system. Age (Dordr). 2014 Jun;36(3):9631. doi: 10.1007/s11357-014-9631-6. Epub 2014 Feb 25. PMID: 24562499; PMCID: PMC4082590.",
		"7 Kaikai SM, Dowling Evans D. Presentation, Management, and Prevention of Herpes Zoster. Adv Emerg Nurs J. 2022 Jan-Mar 01;44(1):3-10. doi: 10.1097/TME.0000000000000395. PMID: 35089273.",
		"8 Kaikai SM, Dowling Evans D. Presentation, Management, and Prevention of Herpes Zoster. Adv Emerg Nurs J. 2022 Jan-Mar 01;44(1):3-10. doi: 10.1097/TME.0000000000000395. PMID: 35089273.",
		"9 Parkin J, Cohen B. An overview of the immune system. Lancet. 2001 Jun 2;357(9270):1777-89. doi: 10.1016/S0140-6736(00)04904-7. PMID: 11403834."
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
                                    NP-AR-HZU-WCNT-230013
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