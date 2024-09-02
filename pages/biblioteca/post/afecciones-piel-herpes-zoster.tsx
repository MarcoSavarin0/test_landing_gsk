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

El Herpes Zóster es una infección causada por el virus varicela zóster que puede provocar complicaciones graves en la piel, especialmente si no se trata adecuadamente. Algunas de estas afecciones pueden presentarse en la etapa aguda y, en algunos casos, también se pueden presentar como secuelas de la infección del Herpes Zóster.

En esta nota te contamos cuáles son las afecciones en la piel más comunes y cómo prevenirlas. Recordá consultar con tu médico o tu médica para conocer los tratamientos adecuados ante la sospecha de Herpes Zóster. 

## Infecciones secundarias causadas por Herpes Zóster
En la etapa aguda de la enfermedad aparece la erupción cutánea, con vesículas en las zonas afectadas, acompañadas de un dolor agudo. Al cabo de unos 10 días, las vesículas se convierten en costras que, normalmente, duran entre 2 y 4 semanas,.

Una complicación frecuente es la sobreinfección bacteriana de las lesiones cutáneas. Éstas pueden presentarse como impétigo o celulitis. Se suele producir más frecuentemente en personas ancianas y diabéticas.

Si esto ocurre, es necesario recibir un tratamiento adecuado para prevenir una infección secundaria.

## ¿El Herpes Zoster puede generar cicatrices y cambios en la pigmentación?
El Herpes Zóster puede provocar cicatrices y cambios en la pigmentación de la piel en la zona afectada después de que la erupción cutánea haya desaparecido. Estas cicatrices pueden ser permanentes y afectar la apariencia de la piel. Además, los cambios en la pigmentación pueden hacer que la piel se vea más oscura o más clara de lo normal. Aproximadamente el 10 % de los pacientes con herpes zoster grave presentan cicatrices 6 meses después de que haya desaparecido la erupción,.

Es importante cuidar adecuadamente la piel afectada por el Herpes Zóster para minimizar el riesgo de complicaciones. Esto incluye:
- Mantener la zona limpia y seca.
- Evitar rascar o frotar la piel.
- Aplicar cremas hidratantes y calmantes recomendadas por el médico.

## Caso de Herpes diseminado
El Herpes Zóster diseminado se caracteriza por la presencia de 20 o más lesiones en áreas alejadas del dermatoma afectado.

Es una patología que suele presentarse en pacientes con deterioro del sistema inmunológico (por ejemplo, pacientes en tratamiento con inmunosupresores, infecciones por VIH, tratamiento crónico con esteroides, etc.). En estos casos hay un alto grado de afectación sistémica, principalmente afectación pulmonar, hepática y cerebral.

Esta complicación del Herpes Zóster únicamente puede ser diagnosticada por un equipo médico, quien sugerirá el tratamiento adecuado. 

Si presentas síntomas de Herpes Zóster, consultá con tu médico o médica lo antes posible.

NP-AR-HZU-WCNT-230003

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
					"title": "Afecciones en la piel por complicación del Herpes Zóster: cuáles son y cómo identificarlas",
					"image": "afecciones-piel-herpes-zoster",
					"metatitle": "¿Qué afecciones en la piel puede producir el Herpes Zóster?",
					"metadescription": "¿Sabías que el Herpes Zóster puede generar afecciones en la piel? Ingresá e informate sobre esta complicación del virus.",
					"slug": "note-slug",
				
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
		"6 Harpaz R et al. MMWR Recomm Rep 2008;57:1-30",
		"Hayderi Let al. Am J Clin Dermatol 2018;19:893-897",
		"8 M Rev Clin Med Fam vol.5 no. 1 Barcelona feb. 2012, https://dx.doi.org/10.4321/S1699-695X2012000100012.",
		"Rev Clin Med Fam vol.5 no.1 Barcelona feb. 2012, https://dx.doi.org/10.4321/S1699-695X2012000100012."
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

					<div className="flex flex-col lg:flex-row px-12 gap-x-14 ">
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
							</article><div className="w-auto my-5"><Cta title={'INICIAR TEST'} url={`/autotest`} gtm={true} gtmTrackName="Autotest"/></div>


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
							<Botoninformacion />
						</article>
						
					</div>
				</div>
				<Banner />
			</>
		</>
	)
}

export default Blog