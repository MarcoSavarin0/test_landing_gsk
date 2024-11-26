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

El Eczema es una irritación en la piel que genera incomodidad y picazón. ¿Sabés cuáles son los síntomas y cómo identificarlos? En esta nota explicaremos todo lo que necesitás saber sobre el Eczema.

## ¿Qué es el Eczema?

El Eczema es una enfermedad inflamatoria crónica de la piel que afecta a millones de personas en todo el mundo. Se caracteriza por la aparición de erupciones rojas, descamación, picazón e inflamación. 

Aunque es más común en niños, también puede afectar a adultos. La causa del Eczema aún no se conoce con exactitud, pero se cree que es una combinación de factores genéticos y ambientales.

## Síntomas del Eczema

El Eczema puede manifestarse de diferentes maneras en cada persona. Debés tener en cuenta los síntomas del Eczema más comunes:
- Piel seca y sensible
- Enrojecimiento e inflamación
- Picazón intensa
- Erupciones en la piel que pueden aparecer y desaparecer
- Descamación o costras en las áreas afectadas

## ¿Qué tan grave es el eczema?

La gravedad del Eczema varía de persona a persona. Para algunos, puede ser una molestia menor que se controla fácilmente y para otros, el Eczema puede ser debilitante, afectando su calidad de vida y requiriendo tratamientos más intensivos. En casos extremos, las infecciones bacterianas secundarias pueden complicar aún más la situación.

## ¿Cómo saber si tenés Eczema?

Para conocer si tenés o no Eczema, el especialista al cual acudís debe realizar un diagnóstico. El diagnóstico del Eczema se basa en la observación de los síntomas y en la historia clínica del paciente por parte de un médico. En algunos casos, se pueden realizar pruebas adicionales, como biopsias de piel o análisis de sangre, para descartar otras condiciones de la piel o identificar posibles desencadenantes.

## Causas del Eczema

El Eczema es una afección cutánea inflamatoria crónica cuyas causas pueden ser diversas y, en muchos casos, difíciles de identificar. 

No obstante, se ha observado que existen factores que pueden contribuir al desarrollo del Eczema. Algunas de las causas y factores de riesgo más comunes incluyen:
- Genética: La predisposición genética juega un papel importante en el Eczema. Si uno o ambos padres tienen Eczema, asma o rinitis alérgica, es más probable que sus hijos también padezcan Eczema.
- Alergias: Las alergias a ciertos alimentos, sustancias químicas o materiales pueden desencadenar brotes de Eczema en algunas personas.
- Factores ambientales: El contacto con irritantes como detergentes, jabones, perfumes, sustancias químicas y polvo, puede provocar la aparición de Eczema en individuos susceptibles.
- Cambios climáticos: Los cambios bruscos de temperatura, la humedad y la exposición al calor o al frío extremo pueden agravar el Eczema.
- Estrés: Si bien el estrés no es una causa directa del Eczema, puede empeorar los síntomas en algunas personas, ya que puede afectar el sistema inmunológico.
- Condiciones de la piel: Algunas personas con piel seca o con otras enfermedades cutáneas como la dermatitis atópica tienen mayor riesgo de desarrollar Eczema.
- Sistema inmunológico: El Eczema puede estar relacionado con un sistema inmunológico que responde de manera exagerada a ciertos estímulos, provocando inflamación en la piel.


## ¿En qué se relaciona el Eczema con el Herpes Zóster?

Aunque el Eczema y el Herpes Zóster son dos afecciones cutáneas distintas, pueden compartir algunos síntomas. 

Por un lado, el herpes zóster, también conocido como culebrilla, es una infección causada por el virus varicela-zóster, el mismo que provoca la varicela. En la etapa aguda de esta enfermedad luego de una persistente sensación de dolor y picazón en la piel, aparecen ampollas agrupadas rodeadas de enrojecimiento. 

Por el otro, el Eczema es una condición de la piel común y molesta que puede afectar tanto a niños como a adultos.

Si sospechás que tenés Eczema, es importante buscar la atención de un profesional de la salud para recibir el diagnóstico y tratamiento adecuado. Cuanto antes se detecte esta enfermedad, más fácil será tratarla y controlar sus síntomas.



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
					"title": "¿Qué es el Eczema y cómo detectarlo?",
					"image": "que-es-eczema",
					"metatitle": "¿Qué es un Eczema en la piel? ",
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
                                    NP-AR-HZU-WCNT-230006
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