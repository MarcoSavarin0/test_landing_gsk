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
# La Relación Entre la EPOC y el Herpes Zóster: Impacto en la Calidad de Vida

El Herpes Zóster, también conocido como culebrilla, es una afección causada por la reactivación del virus varicela-zóster, el mismo que provoca la varicela. Por otro lado, la enfermedad pulmonar obstructiva crónica (EPOC) es una afección respiratoria crónica que afecta a los pulmones y las vías respiratorias.

## Las Consecuencias de un Sistema Inmunológico Debilitado

La Enfermedad Pulmonar Obstructiva Crónica o EPOC es un grupo de enfermedades que causan obstrucción de la circulación del aire y generan problemas relacionados con la respiración. Entre estas enfermedades se encuentran el enfisema, la bronquitis crónica y, en algunos casos, el asma. Aunque no existen datos específicos que indiquen la incidencia exacta de Herpes Zóster en personas con EPOC, se sabe que las personas con enfermedades crónicas como la EPOC pueden tener un sistema inmunológico comprometido, lo que aumenta el riesgo de enfermedades, incluido el Herpes Zóster.

Por su parte, el Herpes Zóster es una reactivación del virus varicela-zóster, el mismo virus que causa la varicela. Después de que una persona se recupera de la varicela, el virus puede permanecer inactivo en el cuerpo y reactivarse años después, causando Herpes Zóster. Este riesgo es mayor en personas con sistemas inmunológicos debilitados. En esta línea, las personas con EPOC a menudo tienen un sistema inmunológico debilitado debido a la enfermedad en sí y a los medicamentos utilizados para tratarla, como los corticosteroides, que pueden suprimir la respuesta inmunológica del cuerpo.

## La Inflamación Crónica como Factor de Riesgo de la EPOC

Muchas enfermedades crónicas causan inflamación a largo plazo en el cuerpo, lo que puede dañar los tejidos y órganos y aumentar el riesgo de otras enfermedades. Por su parte, la EPOC puede provocar una inflamación sistémica, lo que puede contribuir a una mayor susceptibilidad a enfermedades, incluido el Herpes Zóster.

## El Estrés como Agravante de las Enfermedades Crónicas

Además, el estrés y la fatiga asociados con la progresión de una enfermedad crónica como la EPOC también pueden contribuir a la generación de otras enfermedades, siendo posible el desarrollo del Herpes Zóster.

Si tienes EPOC y experimentas síntomas de Herpes Zóster, es importante hablar con tu médico para obtener un diagnóstico adecuado y discutir las opciones de tratamiento.


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
					"title": "¿Cómo la Enfermedad Pulmonar Obstructiva Crónica (EPOC) se convierte en un factor de riesgo para desarrollar Herpes Zóster?",
					"image": "herpes-zoster-epoc",
					"metatitle": "Herpes Zóster y EPOC | Factores de Riesgo | 2024",
					"metadescription": "Te contamos la principal relación que existe entre el herpes zoster y el EPOC. Los principales riesgos pueden surgir y cómo prevenir estos problemas",
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
<<<<<<< Updated upstream

								<div className="w-auto my-5">
									<Cta title={'INICIAR TEST'} url={`/autotest`} gtm={true} gtmTrackName="Autotest"/>
								</div>

								<div>
									<span className="markdown-body">NP-AR-HZU-WCNT-230009</span>
								</div>
=======
								<div className="w-auto my-5">
									<Cta title={'INICIAR TEST'} url={`/autotest`} gtm={true} gtmTrackName="Autotest"/>
								</div>
>>>>>>> Stashed changes
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