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

El Herpes Zóster, también conocido como culebrilla, es una infección causada por la reactivación del virus varicela-zóster, el mismo que provoca la varicela. 

Aunque el Herpes Zóster no es directamente contagioso, si una persona tiene Herpes Zóster, el contacto directo con las secreciones de las vesículas del sarpullido puede propagar el virus varicela-zóster (VVZ) a personas que nunca han tenido varicela, causándoles la infección primaria de varicela. 

Por lo tanto, es esencial saber cómo prevenir el contagio del Herpes Zóster en estos casos. En este artículo, te contamos cuáles son las medidas que se pueden tomar para evitar la propagación del virus.

El Herpes Zóster puede ser una enfermedad dolorosa y, aunque en general no es contagiosa, es importante tomar medidas para evitar la transmisión del virus a personas que no hayan tenido contacto con la varicela. Algunas de las medidas para prevenir el contagio del Herpes Zóster son:

### **1. Cubrir las lesiones:** 
Para minimizar la propagación del virus, te recomendamos cubrir las áreas afectadas con un vendaje limpio y seco. Esto ayuda a evitar que el líquido de las vesículas entre en contacto con otras personas y, en consecuencia, previene el contagio del Herpes Zóster.

### **2. Evitar el contacto cercano con personas en riesgo:** 
Tratar de evitar el contacto con personas en riesgo es una medida para prevenir el contagio del Herpes Zóster. Estos grupos incluyen a aquellos que nunca han tenido varicela, mujeres embarazadas, recién nacidos, personas con sistemas inmunológicos debilitados y personas mayores. 

Estos grupos son más susceptibles a contraer el virus y pueden desarrollar complicaciones graves si se infectan. Y, aquellas personas que nunca tuvieron varicela, desarrollarán esta enfermedad al contagiarse de una persona con Herpes Zóster.

### **3. No rascar ni tocar las lesiones:** 
Evitar tocarse o rascarse las lesiones producidas por el Herpes Zóster es otra de las maneras de prevenir su contagio a personas que no tuvieron varicela. Además, es importante saber que el Herpes Zóster no es contagioso antes de que aparezcan las lesiones, o luego de que se forman las costras. Por eso, evitar tocarlas es una de las mejores maneras de prevenir el contagio.

Al seguir las pautas mencionadas anteriormente, como cubrir las lesiones, mantener una buena higiene personal, evitar el contacto cercano con personas en riesgo y no compartir objetos personales, se puede prevenir eficazmente el contagio del Herpes Zóster y proteger a aquellos que nos rodean.

Si sospechás que vos o alguien de tu entorno cercano tiene Herpes Zóster, no dudes en consultar con un equipo médico para obtener el diagnóstico y tratamiento adecuado.

**NP-AR-HZU-WCNT-230007**


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
					"title": "¿Cómo prevenir el contagio del Herpes Zóster?",
					"image": "prevenir-contagio-herpes-zoster",
					"metatitle": "Contagio del Herpes Zóster",
					"metadescription": " ¿Sabías que el líquido de las ampollas causadas por el Herpes Zóster son contagiosas? ¡Averiguá cómo evitarlo!",
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
		"Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30.",
		"Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697",
		"Johnson RW, Bouhassira D, Kassianos G, Leplège A, Schmader KE, Weinke T. The impact of herpes zoster and post-herpetic neuralgia on quality-of-life. BMC Med. 2010;8:37. Published 2010 Jun 21. doi:10.1186/1741-7015-8-37",
		"Cohen EJ, Jeng BH. Herpes Zoster: A Brief Definitive Review. Cornea. 2021 Aug 1;40(8):943-949. doi: 10.1097/ICO.0000000000002754. PMID: 34029242; PMCID: PMC8249351.",
		"Trasmisión de la culebrilla (herpes zóster) | CDC"
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