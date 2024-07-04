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

El herpes es una infección viral que afecta a muchas personas en todo el mundo. Aunque es posible que hayas oído hablar de los términos "Herpes Simple" y "Herpes Zóster", puede que no sepas exactamente cuál es la diferencia entre estos dos tipos de afecciones. 

En este artículo, te contamos en profundidad cuáles son las diferencias entre Herpes Zóster y Herpes Simple, abordando sus causas y síntomas.

## Causas del Herpes Simple y del Herpes Zóster

La diferencia entre Herpes Zóster y Herpes Simple comienza con las causas de la enfermedad. El Herpes Simple es causado por dos tipos de virus: el Herpes Simple tipo 1 (HSV-1) y el Herpes Simple tipo 2 (HSV-2). El Herpes Simple tipo 1 suele causar herpes labial o úlceras bucales, mientras que el Herpes Simple tipo 2 está asociado con el herpes genital. 

Ambos virus son altamente contagiosos y se transmiten principalmente a través del contacto directo con la piel, las mucosas o los fluidos corporales de una persona infectada.

Por otro lado, el Herpes Zóster, también conocido como culebrilla, es causado por el virus de la varicela-zóster (VVZ), el mismo virus que causa la varicela. Después de la infección inicial, el virus permanece latente en el cuerpo y, posteriormente, puede reactivarse en forma de Herpes Zóster.

## Transmisión y contagio del Herpes Simple y del Herpes Zóster

Otra diferencia entre Herpes Zóster y Herpes Simple es la forma en que se transmiten y contagian. Mientras que el Herpes Simple se propaga a través del contacto directo con la piel o las mucosas de una persona infectada, el Herpes Zóster no se contagia de la misma manera. 

Aunque el Herpes Zóster puede transmitirse a través del contacto directo con el líquido de las lesiones de una persona con esta enfermedad, lo que se contagia es el virus de la varicela, no el Herpes Zóster en sí mismo. De esta manera, la persona expuesta desarrollará varicela si no ha sido previamente infectada o vacunada contra ella.

## Síntomas y manifestaciones clínicas del Herpes Simple y del Herpes Zóster

Los síntomas del Herpes Simple y del Herpes Zóster también presentan diferencias. En el caso del Herpes Simple, pueden aparecer úlceras o ampollas dolorosas en la boca, los labios o la zona genital, acompañadas de fiebre, dolor de cabeza y malestar general. 

Por otro lado, el Herpes Zóster se caracteriza por la aparición de una erupción cutánea con ampollas en un área específica de un lado del cuerpo, a menudo acompañada de dolor intenso, hormigueo o ardor.

En resumen, aunque el Herpes Simple y el Herpes Zóster comparten algunas similitudes, presentan diferencias notables en cuanto a sus causas, transmisión y manifestaciones clínicas. Es esencial recordar que ambas condiciones requieren la atención de un profesional médico para un diagnóstico adecuado y la prescripción del tratamiento más apropiado. 

Si sospechás que podés estar sufriendo de alguna de estas afecciones, te recomendamos acudir a tu médico de cabecera para obtener el mejor diagnóstico y orientación sobre cómo manejar tu situación específica.

**NP-AR-HZU-WCNT-230008**





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
					"title": "Herpes Simple: ¿en qué se diferencia del Herpes Zóster?",
					"image": "herpessimple",
					"metatitle": "Diferencias entre el Herpes Zóster y el Herpes Simple",
					"metadescription": "Conocé las diferencias entre el Herpes Simple y el Herpes Zóster. Te contamos sus causas y síntomas. ¡Aprendé más y cuidá tu salud!",
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
	const { title, metatitle, metadescription, slug } = nota.data[0].attributes

	

	const list = [
		"Kim J, Kim BE, Leung DYM. Pathophysiology of atopic dermatitis: Clinical implications. Allergy Asthma Proc. 2019 Mar 1;40(2):84-92. doi: 10.2500/aap.2019.40.4202. PMID: 30819278; PMCID: PMC6399565.",
		"Kim J, Kim BE, Leung DYM. Pathophysiology of atopic dermatitis: Clinical implications. Allergy Asthma Proc. 2019 Mar 1;40(2):84-92. doi: 10.2500/aap.2019.40.4202. PMID: 30819278; PMCID: PMC6399565.",
		"Kim J, Kim BE, Leung DYM. Pathophysiology of atopic dermatitis: Clinical implications. Allergy Asthma Proc. 2019 Mar 1;40(2):84-92. doi: 10.2500/aap.2019.40.4202. PMID: 30819278; PMCID: PMC6399565."
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
						<Image src={`https://gsk-hdz-2.b-cdn.net/posts/herpessimple.jpeg`}
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