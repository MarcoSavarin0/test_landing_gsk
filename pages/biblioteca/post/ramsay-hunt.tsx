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

El Síndrome de Ramsay Hunt es un tipo de culebrilla (Herpes Zóster Ótico) que ocurre cuando el brote afecta al nervio facial, muy cerca de uno de los oídos. Se trata de una condición médica que afecta a muchas personas alrededor del mundo, pero, a pesar de su prevalencia, sigue siendo desconocida. Esta enfermedad presenta una serie de síntomas que pueden afectar la calidad de vida de quienes la padecen, por lo cual, conocer los detalles de la misma es clave para detectarla a tiempo.

En este artículo, te contaremos qué es el Síndrome de Ramsay Hunt, cómo se manifiesta en el cuerpo y cuánto dura, para que aprendas a identificar los síntomas y acudas a un equipo médico en caso de ser necesario.

## ¿Qué es el Síndrome de Ramsay Hunt y qué provoca?

El Síndrome de Ramsay Hunt es una complicación del virus del Herpes Zóster, una afección causada por la reactivación del virus varicela-zóster (VVZ), el mismo que causa la varicela. Este síndrome se manifiesta cuando el virus afecta el nervio facial y, en consecuencia, provoca parálisis facial y erupciones cutáneas dolorosas en el oído o en la boca.

## Síntomas del Síndrome de Ramsay Hunt

Los síntomas del Síndrome de Ramsay Hunt pueden variar en cada caso, pero a continuación te contamos algunos de los más comunes:

- **Dolor facial:** El dolor suele ser intenso y se localiza en la región afectada por el virus, generalmente alrededor del oído o en el área de la boca.
- **Erupciones cutáneas:** Estas erupciones aparecen en la piel cerca del oído, en el conducto auditivo externo, en el paladar, la lengua o incluso en el rostro.
- **Parálisis facial:** La parálisis facial puede ser repentina y afecta a un lado de la cara. Los síntomas incluyen debilidad muscular, incapacidad para cerrar el ojo, caída de la comisura de la boca y pérdida del sentido del gusto en los dos tercios anteriores de la lengua.
- **Pérdida de audición:** La afectación del nervio auditivo puede provocar pérdida de audición en el oído afectado, que puede ser temporal o permanente.
- **Vértigo y problemas de equilibrio:** El vértigo es una sensación de mareo o de que el entorno está girando, lo que puede dificultar el mantenimiento del equilibrio.
- **Zumbido en el oído (tinnitus):** Los afectados pueden experimentar un zumbido constante o intermitente en el oído afectado.
- **Sensibilidad al sonido (hiperacusia):** Algunos pacientes pueden desarrollar una mayor sensibilidad a los sonidos, lo que puede resultar molesto y doloroso.

Cabe destacar que no todos los pacientes con Síndrome de Ramsay Hunt presentarán todos estos síntomas, y la intensidad de los mismos puede variar significativamente de un caso a otro.

## ¿Cuál es la duración del Síndrome de Ramsay Hunt?

La duración del Síndrome de Ramsay Hunt varía según la severidad de la afección y la respuesta al tratamiento. En algunos casos, la recuperación puede ser rápida, mientras que en otros, puede llevar meses. La detección temprana y el tratamiento adecuado son fundamentales para mejorar el pronóstico y reducir las posibles secuelas.

Ahora ya conocés cuáles son los síntomas y la importancia de un diagnóstico temprano, esencial para una recuperación adecuada del Síndrome de Ramsay Hunt. Si sospechás que vos o alguien cercano padece Herpes Zóster, no dudes en consultar a un médico o médica para recibir el tratamiento adecuado y conocer las opciones de prevención.





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
					"title": "Síndrome de Ramsay Hunt: ¿qué es y cuánto dura?",
					"image": "sindrome-ramsay-hunt",
					"metatitle": "Síndrome de Ramsay Hunt ¿Qué es? 2024",
					"metadescription": "Te contamos todo lo que necesitas saber sobre el síndrome de ramsay hunt, síntomas y su duración.",
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
		"1 Crouch AE, Hohman MH, Moody MP, Andaloro C. Ramsay Hunt Syndrome. 2023 Mar 1. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2023 Jan–. PMID: 32491341",
		"2 Jeon Y, Lee H. Ramsay Hunt syndrome. J Dent Anesth Pain Med. 2018 Dec;18(6):333-337. doi: 10.17245/jdapm.2018.18.6.333. Epub 2018 Dec 28. PMID: 30637343; PMCID: PMC6323042.",
		"3 Kaikai SM, Dowling Evans D. Presentation, Management, and Prevention of Herpes Zoster. Adv Emerg Nurs J. 2022 Jan-Mar 01;44(1):3-10. doi: 10.1097/TME.0000000000000395. PMID: 35089273.",
		"4 Jeon Y, Lee H. Ramsay Hunt syndrome. J Dent Anesth Pain Med. 2018 Dec;18(6):333-337. doi: 10.17245/jdapm.2018.18.6.333. Epub 2018 Dec 28. PMID: 30637343; PMCID: PMC6323042.",
		"5 Khan YMT, Fatema N. Ramsay Hunt syndrome. Pan Afr Med J. 2019 Dec 16;34:201. doi: 10.11604/pamj.2019.34.201.19207. PMID: 32180875; PMCID: PMC7060913.",
		"6 Khan YMT, Fatema N. Ramsay Hunt syndrome. Pan Afr Med J. 2019 Dec 16;34:201. doi: 10.11604/pamj.2019.34.201.19207. PMID: 32180875; PMCID: PMC7060913.",
		"7 May M, Blumenthal F. Herpes zoster oticus: surgery based upon prognostic indicators and results. Laryngoscope. 1982 Jan;92(1):65-7. doi: 10.1288/00005537-198201000-00014. PMID: 7162299."
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
<<<<<<< Updated upstream
								<div>
									<span className="markdown-body">
                                    NP-AR-HZU-WCNT-230012.
									</span>
								</div>
=======
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