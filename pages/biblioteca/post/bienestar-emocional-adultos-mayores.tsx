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

# Cuidado del Bienestar Emocional en Adultos Mayores

A medida que envejecemos, es crucial abordar diversos aspectos para mantener nuestro bienestar emocional y cognitivo. En este artículo, exploraremos prácticas y consejos para cuidar la salud emocional en adultos mayores, incluyendo la actividad física, las relaciones sociales, la alimentación, el sueño y el ejercicio mental.

## Importancia de la Actividad Física y Mental

### Actividad Física
El ejercicio regular libera endorfinas, sustancias químicas que promueven el bienestar emocional y la salud cardiovascular, influyendo positivamente en nuestro estado emocional.

### Ejercicio Mental
Mantener la mente activa, a través de actividades como resolver puzzles o aprender cosas nuevas, preserva las habilidades mentales y ayuda a retrasar el deterioro cognitivo.

## Ejercicios Mentales Recomendados

- Resolver puzzles y rompecabezas
- Practicar habilidades matemáticas básicas
- Aprender un nuevo idioma o habilidad
- Leer y discutir libros o artículos
- Jugar juegos de mesa que impliquen estrategia y memoria

## Impacto de las Relaciones Sociales

Las relaciones sociales son fundamentales para combatir la soledad y el aislamiento, contribuyendo al bienestar emocional.

## Efectos Negativos de la Soledad

La soledad puede aumentar el riesgo de depresión y ansiedad en adultos mayores, por lo que es importante mantenerse socialmente activo y buscar apoyo emocional.

## Importancia de la Alimentación y el Sueño

- Una dieta equilibrada rica en nutrientes esenciales contribuye a mantener el cerebro en óptimas condiciones.
- Dormir lo suficiente mejora la memoria y las funciones cognitivas.

## Relación entre Bienestar Emocional y Herpes Zóster

Aunque no existe una relación directa, el bienestar emocional puede influir en la capacidad del cuerpo para enfrentar enfermedades como el Herpes Zóster.

### Fortalecimiento del Sistema Inmunológico
El manejo del estrés y el bienestar emocional pueden fortalecer el sistema inmunológico, ayudando a prevenir la aparición o recurrencia del Herpes Zóster.

### Reducción del Dolor Crónico
El bienestar emocional puede contribuir a reducir el dolor crónico asociado con complicaciones del Herpes Zóster.

En resumen, cuidar el bienestar emocional en general puede contribuir a una mejor salud física y mental en adultos mayores. Si necesitas apoyo emocional, no dudes en consultar a un médico para recibir el tratamiento adecuado.

**NP-AR-HZU-WCNT-230009**




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
					"title": "Las mejores formas de mantener el bienestar emocional en los adultos mayores ",
					"image": "bienestar-emocional-adultos-mayores",
					"metatitle": "Bienestar emocional en los adultos mayores",
					"metadescription": " Te contamos 5 estrategias efectivas para cuidar el bienestar emocional en los adultos mayores y cuál es la importancia de mantener una vida saludable para evitar enfermedades. ",
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
		"O'Keeffe M, Kelly M, O'Herlihy E, O'Toole PW, Kearney PM, Timmons S, O'Shea E, Stanton C, Hickson M, Rolland Y, Sulmont Rossé C, Issanchou S, Maitre I, Stelmach-Mardas M, Nagel G, Flechtner-Mors M, Wolters M, Hebestreit A, De Groot LEGM, van de Rest O, Teh R, Peyron MA, Dardevet D, Papet I, Schindler K, Streicher M, Torbahn G, Kiesswetter E, Visser M, Volkert D, O'Connor EM: MaNuEL consortium. Potentially modifiable determinants of malnutrition in older adults: A systematic review. Clin Nutr. 2019 Dec;38(6):2477-2498. doi: 10.1016/j.c|nu.2018.12.007. Epub 2018 Dec 11. PMID: 30685297.",
		"Dzierzewski JM, Dautovich N, Ravyts S. Sleep and Cognition in Older Adults. Sleep Med Clin. 2018 Mar;13(1):93-106. doi: 10.1016/j.jsmc.2017.09.009. Epub 2017 Dec 8. PMID: 29412987; PMCID: PMC5841581.",
		"https://medlineplus.gov/spanish/howtoimprovementalhealth.html",
		"https://medlineplus.gov/spanish/howtoimprovementalhealth.html",
		"https://espanol.womenshealth.gov/mental-health/good-mental-health/stress-and-your-health",
		"https://www.cdc.gov/vaccines/pubs/pinkbook/herpes-zoster.html",
		"Saguil A, Kane S, Mercado M, Lauters R. Herpes Zoster and Postherpetic Neuralgia: Prevention and Management. Am Fam Physician. 2017 Nov 15;96(10):656-663. PMID: 29431387.",
		"https://medlineplus.gov/spanish/howtoimprovementalhealth.html"
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
						<article className="flex flex-col flex-1 gap-y-4">
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
						<aside className="md:w-2/12 mt-10 border-l-0 lg:border-l pl-0 lg:pl-6 h-fit pb-4 space-y-8">
							<div className="space-y-2">
								<h3 className="text-lg md:text-xl text-gsk-orange">Categorías</h3>
								<ul className="flex flex-row lg:flex-col gap-4 flex-nowrap lg:flex-wrap">
									<li>
										{/* <CategoryButton title={categoria.data.attributes.title} slug={categoria.data.attributes.slug} param={`categoria`}/> */}
									</li>
								</ul>
							</div>
							<div className="space-y-2">
								<h3 className="text-lg md:text-xl text-gsk-orange">Tags</h3>
								<ul className="flex flex-row lg:flex-col gap-4 flex-nowrap lg:flex-wrap">
									<li>
										{/* <CategoryButton title={tags.data[0].attributes.tag} slug={tags.data[0].attributes.slug} param={`tags`}/> */}
									</li>
								</ul>
							</div>
						</aside>
					</div>
				</div>
				<Banner />
			</>
		</>
	)
}

export default Blog