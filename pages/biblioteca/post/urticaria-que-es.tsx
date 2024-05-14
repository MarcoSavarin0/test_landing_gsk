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


La Urticaria es una condición de la piel que afecta a muchas personas y puede ser bastante molesta. Pero, ¿sabes exactamente qué es y cuántos tipos de urticaria existen? 

En esta nota te contamos en detalle qué es la Urticaria, sus diferentes tipos y cómo reconocerlos, para que puedas estar informado y preparado en caso de experimentar esta afección cutánea.

## Síntomas de la Urticaria

La Urticaria se caracteriza por la aparición de ronchas rojas, elevadas y que generan picazón en la piel. Estas ronchas pueden variar en tamaño y forma, y a menudo se unen entre sí para formar áreas más grandes. 

Además, pueden aparecer y desaparecer en cuestión de horas. Otros síntomas asociados a la Urticaria incluyen ardor y en algunos casos, hinchazón en áreas del cuerpo como labios, lengua y párpados.

## Causas de la Urticaria

Existen varias causas de Urticaria, algunas de las más comunes son:
- **Alergias:** La Urticaria puede ser causada por una reacción alérgica a alimentos, medicamentos, picaduras de insectos, entre otros.
- **Infecciones:** Algunas infecciones virales, bacterianas o fúngicas pueden provocar Urticaria.
- **Factores físicos:** La exposición a estímulos físicos como la presión, el calor, el frío o la luz solar puede desencadenar la aparición de ronchas en la piel.
- **Estrés:** La ansiedad y el estrés también pueden ser causantes de Urticaria en algunas personas.

## ¿Cuándo la Urticaria es grave?

La Urticaria puede ser grave cuando, en el contexto de una Urticaria de causa alérgica, se acompaña de dificultad para respirar, hinchazón en la cara, la lengua o la garganta, mareos o desmayos. Estos síntomas pueden indicar una reacción alérgica grave llamada anafilaxia, que requiere atención médica de urgencia.

## Tipos de Urticaria

Existen varios tipos de Urticaria, y a continuación, te explicaremos en detalle los más comunes:
- **Urticaria aguda:** Este tipo de Urticaria es la forma más común y suele durar menos de seis semanas. Por lo general, se debe a una reacción alérgica a ciertos alimentos, medicamentos o picaduras de insectos.
- **Urticaria crónica:** La Urticaria crónica es aquella que persiste por más de seis semanas. A menudo, no se puede identificar una causa específica, lo que dificulta su tratamiento.
- **Urticaria física:** Se produce como resultado de la exposición a estímulos físicos, como la presión, el calor, el frío o la luz solar.
- **Urticaria por estrés:** También conocida como Urticaria nerviosa, se presenta cuando la ansiedad o el estrés desencadenan la aparición de ronchas en la piel.

## ¿Cómo saber qué tipo de urticaria tengo?

Para determinar qué tipo de Urticaria tienes, es fundamental prestar atención a los síntomas y su duración, así como a los posibles desencadenantes. Si experimentas síntomas de Urticaria, no dudes en consultar con tu médico de cabecera para obtener un diagnóstico y tratamiento adecuados.

Comprender los distintos tipos de Urticaria y sus desencadenantes es fundamental para poder abordar esta condición de manera efectiva y mejorar la calidad de vida de quienes la padecen. 


## ¿En qué se relaciona la Urticaria con el Herpes Zóster?

La Urticaria y el Herpes Zóster son dos afecciones cutáneas diferentes, pero pueden estar relacionadas en algunos casos debido a sus síntomas.

En algunos casos, la Urticaria puede ser causada por una infección viral, aunque es menos común que las causas alérgicas. Por otro lado, aunque el Herpes Zóster no causa Urticaria directamente, los síntomas de ambas afecciones pueden confundirse, ya que ambas presentan erupciones cutáneas y picazón.

Si experimentas síntomas de cualquiera de estas afecciones, es fundamental que consultes a un equipo médico.

NP-AR-HZU-WCNT-230006




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
					"title": "¿Qué es la Urticaria y qué tipos existen?",
					"image": "urticaria-que-es",
					"metatitle": "¿Qué es la Urticaria y qué tipos existen?",
					"metadescription": " Descubrí qué es la urticaria, sus síntomas y las causas de esta afección en la piel. Aprende cómo reconocerla para mejorar tu bienestar y calidad de vida. ",
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
		"https://medlineplus.gov/spanish/hives.html#:~:text=La/20urticaria%20son%20ronchas/20rojizas,v%20se%20tormen%201as%20ronchas",
		"Sohn A, Frankel A, Patel RV, Goldenberg G. Eczema. Mt Sinai J Med. 2011 Sep-Oct;78(5):730-9. doi: 10.1002/msj.20289. PMID: 21913202.",
		"Sohn A, Frankel A, Patel RV, Goldenberg G. Eczema. Mt Sinai J Med. 2011 Sep-Oct;78(5):730-9. doi: 10.1002/msj.20289. PMID: 21913202.",
		"Katelaris CH, Peake JE. 5. Allergy and the skin: eczema and chronic urticaria. Med J Aust. 2006 Nov 6;185(9):517-22. doi: 10.5694/j.1326-5377.2006.tb00670.x. PMID: 17137459."
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