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

**El Herpes Zóster, también conocido como "culebrilla", es una afección que despierta muchas preguntas y a menudo malentendidos.** Se manifiesta como una erupción cutánea dolorosa y aunque sus síntomas son bastante conocidos, hay muchos mitos que rodean esta afección.<sup>[1]</sup>

Este artículo tiene como objetivo desmentir cinco de los mitos más comunes sobre el Herpes Zóster para brindarte una comprensión más clara y precisa.

## Mito 1: Solo las personas mayores pueden desarrollar Herpes Zóster

Si bien es cierto que la probabilidad aumenta con la edad, en realidad cualquier persona que haya tenido varicela en algún momento de su vida podría desarrollar esta afección. Esto se debe a que el Herpes Zóster surge de la reactivación del virus de la varicela zóster que permanece en estado latente en el cuerpo.<sup>[2]</sup>

## Mito 2: Si nunca tuviste varicela no vas a tener Herpes Zóster

Es cierto que si uno nunca tuvo contacto con el virus de la varicela no es posible presentar luego un Herpes Zóster. Sin embargo, es importante destacar que algunas personas pueden haber tenido una manifestación leve de la varicela que haya pasado desapercibida. Esa persona, a pesar de no recordar haber manifestado la enfermedad, tiene latente el virus por lo cual puede reactivarse luego como Herpes Zóster.<sup>[3]</sup>

## Mito 3: El Herpes Zóster es altamente contagioso

El Herpes Zóster se puede transmitir solo si alguien tiene un contacto directo con las lesiones abiertas. Además, la persona expuesta desarrollará varicela, no Herpes Zóster, si no ha tenido varicela previamente o no está vacunada contra ella.<sup>[4]</sup>

## Mito 4: Si tenés Herpes Zóster significa que estás en mal estado de salud

Se puede tener la falsa creencia de que desarrollar Herpes Zóster es un signo de mala salud general o de un sistema inmunológico débil. Aunque tener un sistema inmunológico comprometido puede aumentar el riesgo, muchas personas con buen estado de salud también desarrollan esta afección. Factores como el estrés o ciertos medicamentos también pueden contribuir a su aparición.<sup>[5]</sup>

## Mito 5: Las erupciones solo aparecen en el torso

Aunque es más común que las erupciones causadas por el Herpes Zóster aparezcan en el torso, también pueden manifestarse en la cara, los ojos (conocido como Herpes Zóster Oftálmico) y otras partes del cuerpo. De hecho, la localización de las erupciones puede variar considerablemente de una persona a otra y no está limitada a un área específica.<sup>[6]</sup>

Entender qué es el Herpes Zóster y los mitos que lo rodean es el primer paso para desmitificar esta afección y abordarla de manera efectiva. Al estar informados, podemos estar mejor preparados para reconocer sus síntomas y buscar asesoramiento médico de manera oportuna.

Si tenés síntomas de Herpes Zóster o conocés a alguien que los tenga, es importante consultar con tu equipo médico para un diagnóstico y plan de manejo adecuado.

NP-AR-HZU-WCNT-230020


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
					"title": "5 mitos sobre el Herpes Zóster",
					"image": "N43-_5-mitos-sobre-el-HZ_",
					"metatitle": "5 mitos sobre el Herpes Zóster | Blog | Hablemos de Zóster",
					"metadescription": "Descubre mitos y verdades sobre el  Herpes Zóster. Aprendé más sobre esta afección y cuidá tu salud.",
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
		`<sup>1</sup> Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697.`,
        
		`<sup>2</sup> Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.`,
        
		`<sup>3</sup> Arvin AM. Varicella-zoster virus. Clin Microbiol Rev. 1996 Jul;9(3):361-81. doi: 10.1128/CMR.9.3.361. PMID: 8809466; PMCID: PMC172899.`,
        
		`<sup>4</sup> Is Herpes Zoster Contagious? Ind Med Gaz. 1885 Jun;20(6):175. PMID: 29001403; PMCID: PMC5184725.`,
        
		`<sup>5</sup> Koshy E, Mengting L, Kumar H, Jianbo W. Epidemiology, treatment, and prevention of herpes zoster: A comprehensive review. Indian J Dermatol Venereol Leprol. 2018 May-Jun;84(3):251-262. doi: 10.4103/ijdvl.IJDVL_1021_16. PMID: 29516900.`,
        
		`<sup>6</sup> Dayan RR, Peleg R. Herpes zoster - typical and atypical presentations. Postgrad Med. 2017 Aug;129(6):567-571. doi: 10.1080/00325481.2017.1335574. Epub 2017 Jun 5. PMID: 28540752.`,
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
