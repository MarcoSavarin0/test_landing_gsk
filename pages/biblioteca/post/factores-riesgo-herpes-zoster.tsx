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



El Herpes Zóster, también conocido como culebrilla, es una infección causada por el virus varicela-zóster, el mismo virus que causa la varicela. Si tuviste varicela en algún momento de tu vida, el virus puede reactivarse como Herpes Zóster.

## Factores de Riesgo para el Herpes Zóster

Los principales factores de riesgo para el Herpes Zóster son la edad y tener un sistema inmunológico debilitado. El riesgo aumenta con la edad, especialmente después de los 50 años. Además, las personas con un sistema inmunológico debilitado tienen un mayor riesgo de desarrollar culebrilla.

## Enfermedades Crónicas y su Relación con el Herpes Zóster

### Lupus y Herpes Zóster

El lupus es una enfermedad autoinmune que puede aumentar el riesgo de infecciones, incluyendo el Herpes Zóster, debido a la naturaleza de la enfermedad y los medicamentos utilizados para tratarla. Los medicamentos inmunosupresores pueden disminuir la capacidad del cuerpo para combatir infecciones.

### Artritis Reumatoide y Herpes Zóster

La Artritis Reumatoide (AR) es una enfermedad autoinmune que puede provocar un sistema inmunológico deteriorado. Además, los medicamentos inmunosupresores utilizados para tratar la AR pueden aumentar el riesgo de Herpes Zóster.

### Otras Enfermedades Relacionadas con el Riesgo de Herpes Zóster

- **EPOC:** La enfermedad pulmonar obstructiva crónica puede debilitar el sistema inmunológico, aumentando la susceptibilidad al Herpes Zóster.
- **Diabetes:** La diabetes puede causar inmunosupresión, aumentando el riesgo de infecciones, incluyendo el Herpes Zóster. La neuropatía diabética también puede agravar el dolor asociado con el Herpes Zóster.

En conclusión, las enfermedades que debilitan el sistema inmunológico pueden aumentar el riesgo de desarrollar Herpes Zóster. Es importante manejar estas condiciones de manera efectiva y hablar con un médico sobre el tratamiento y la prevención del Herpes Zóster.

Si estás en un grupo de riesgo, como personas mayores de 50 años o tienes una condición médica que debilita tu sistema inmunológico, es importante hablar con tu médico sobre las opciones de tratamiento y prevención del Herpes Zóster.

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
					"title": "Herpes Zóster: ¿por qué las personas con enfermedades crónicas están en mayor riesgo?",
					"image": "factores-riesgo-herpes-zoster",
					"metatitle": "Enfermedades crónicas y Herpes Zóster",
					"metadescription": "Te contamos quiénes tienen mayor riesgo de desarrollar Herpes Zóster y por qué las enfermedades crónicas son un agravante.",
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
		"Christenson SA, Smith BM, Bafadhel M, Putcha N. Chronic obstructive pulmonary disease. Lancet. 2022 Jun 11;399(10342):2227-2242. doi: 10.1016/S0140-6736(22)00470-6Epub 2022 May 6. PMID: 35533707.",
		"Ya-Wen Yang et all. Risk of herpes zoster among patients with chronic obstructive pulmonary disease: a population-based study. CMA, March 22, 2011, 183(5)",
		"KalraS, Chawla A. Herpes zoster and diabetes. J Pak Med Assoc. 2016 Aug; 66(8): 1042-3. PMID: 27524548."
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