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

**La Neuralgia Postherpética es una complicación que se puede producir en algunas personas que han tenido Herpes Zóster.** Al entender los desafíos y las limitaciones que impone esta condición, podemos tomar medidas más informadas para su manejo y mejorar la calidad de vida de quienes la padecen.<sup>[1]</sup>

En este artículo exploramos las maneras en que los pacientes ajustan su vida tras recibir este diagnóstico.

## ¿Qué es la Neuralgia Postherpética?

La Neuralgia Postherpética (NPH) es un tipo de dolor neuropático que puede surgir después de que el Herpes Zóster haya remitido. Aunque la erupción cutánea característica de esta enfermedad se cura, el dolor puede continuar durante meses e incluso años en algunos casos. **Este dolor crónico afecta la calidad de vida y es uno de los aspectos más difíciles de manejar para los pacientes.**<sup>[2]</sup>

La NPH afecta específicamente las fibras nerviosas dañadas por el Herpes Zóster, causando que envíen señales de dolor erráticas. Es un fenómeno que se presenta más frecuentemente en personas mayores de 50 años y cuyo impacto en la vida diaria puede variar desde ser una molestia hasta una condición debilitante.<sup>[3]</sup>

## Riesgos y desafíos de la Neuralgia Postherpética

La Neuralgia Postherpética conlleva varios riesgos y desafíos que van más allá del dolor físico, pudiendo generar una disminución en la calidad de vida que afecta múltiples aspectos del bienestar del paciente.<sup>[4]</sup> A continuación, detallamos algunos ejemplos:

### Impacto emocional

Uno de los primeros desafíos es el impacto emocional que puede tener en el paciente. **El dolor crónico es conocido por afectar el estado emocional, contribuyendo al desarrollo de ansiedad o depresión.**<sup>[5]</sup>

### Interferencia con el sueño

Otro desafío común es la interferencia con los patrones de sueño. **El dolor persistente puede hacer que sea difícil conciliar el sueño o mantenerse dormido, lo cual a su vez puede afectar la salud general del individuo.**<sup>[6]</sup>

### Limitación en las actividades diarias

El dolor continuo puede limitar severamente las actividades diarias. **Tareas que antes eran sencillas, como vestirse o cocinar, pueden convertirse en tareas difíciles de realizar.** Esta limitación puede contribuir a una disminución en la calidad de vida y aumentar la dependencia de otras personas para llevar a cabo tareas básicas.<sup>[7]</sup>

### Aislamiento social

El dolor crónico también puede llevar al aislamiento, ya que el paciente puede evitar actividades que impliquen un esfuerzo físico o social, limitando así su interacción con familiares y amigos. **Este aislamiento puede generar más estrés emocional y aumentar la sensación de soledad o desesperanza.**<sup>[8]</sup>

## Efectos prolongados de la Neuralgia Postherpética

Una de las preocupaciones más significativas sobre la NPH son los posibles impactos a largo plazo que podría tener en la vida del individuo. El dolor crónico puede ser lo suficientemente intenso como para interferir con las actividades cotidianas. Además, **la falta de actividad física y social podría llevar a un deterioro más amplio de la salud.**<sup>[9]</sup>

La vida con Neuralgia Postherpética puede presentar retos tanto físicos como emocionales que son distintos para cada individuo. Es claro que esta afección puede tener diversas implicancias en la vida diaria, desde la calidad del sueño hasta la conexión con los seres queridos. **Por ello, la comprensión y el apoyo desempeñan un rol crucial para ayudar a las personas a adaptarse a esta etapa posterior al Herpes Zóster con mayor bienestar.**<sup>[10]</sup>

Si vos o alguien que conocés están experimentando síntomas que podrían estar relacionados con el Herpes Zóster, es crucial consultar con tu equipo médico para obtener un diagnóstico preciso y un plan de manejo adecuado.

**NP-AR-HZU-WCNT-230020**

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
					"title": "¿Cómo impacta en la vida diaria la Neuralgia Postherpética?",
					"image": "N44-_NPH-Cómo-impacta-en-la-vida-diaria_",
					"metatitle": "¿Cómo impacta en la vida diaria la Neuralgia Postherpética? | Blog | Hablemos de Zóster",
					"metadescription": "Aprendé sobre la Neuralgia Postherpética, una secuela del Herpes Zóster. Conocé los desafíos y riesgos de esta condición. Cuidá tu salud.",
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
		`<sup>1</sup> Lin CS, Lin YC, Lao HC, Chen CC. Interventional Treatments for Postherpetic Neuralgia: A Systematic Review. Pain Physician. 2019 May;22(3):209-228. PMID: 31151330.`,
        
		`<sup>2</sup> Forbes HJ, Thomas SL, Smeeth L, Clayton T, Farmer R, Bhaskaran K, Langan SM. A systematic review and meta-analysis of risk factors for postherpetic neuralgia. Pain. 2016 Jan;157(1):30-54. doi: 10.1097/j.pain.0000000000000307. PMID: 26218719; PMCID: PMC4685754.`,
        
		`<sup>3</sup> Forbes HJ, Thomas SL, Smeeth L, Clayton T, Farmer R, Bhaskaran K, Langan SM. A systematic review and meta-analysis of risk factors for postherpetic neuralgia. Pain. 2016 Jan;157(1):30-54. doi: 10.1097/j.pain.0000000000000307. PMID: 26218719; PMCID: PMC4685754.`,
        
		`<sup>4</sup> Lin CS, Lin YC, Lao HC, Chen CC. Interventional Treatments for Postherpetic Neuralgia: A Systematic Review. Pain Physician. 2019 May;22(3):209-228. PMID: 31151330.`,
        
		`<sup>5</sup> Mizukami A, Sato K, Adachi K, Matthews S, Holl K, Matsuki T, Kaise T, Curran D. Impact of Herpes Zoster and Post-Herpetic Neuralgia on Health-Related Quality of Life in Japanese Adults Aged 60 Years or Older: Results from a Prospective Observational Cohort Study. Clin Drug Investig. 2018 Jan;38(1):29-37. doi: 10.1007/s40261-017-0581-5. PMID: 29086340; PMCID: PMC5762777.`,
        
		`<sup>6</sup> Mizukami A, Sato K, Adachi K, Matthews S, Holl K, Matsuki T, Kaise T, Curran D. Impact of Herpes Zoster and Post-Herpetic Neuralgia on Health-Related Quality of Life in Japanese Adults Aged 60 Years or Older: Results from a Prospective Observational Cohort Study. Clin Drug Investig. 2018 Jan;38(1):29-37. doi: 10.1007/s40261-017-0581-5. PMID: 29086340; PMCID: PMC5762777.`,
        
		`<sup>7</sup> Mizukami A, Sato K, Adachi K, Matthews S, Holl K, Matsuki T, Kaise T, Curran D. Impact of Herpes Zoster and Post-Herpetic Neuralgia on Health-Related Quality of Life in Japanese Adults Aged 60 Years or Older: Results from a Prospective Observational Cohort Study. Clin Drug Investig. 2018 Jan;38(1):29-37. doi: 10.1007/s40261-017-0581-5. PMID: 29086340; PMCID: PMC5762777.`,
        
		`<sup>8</sup> Mizukami A, Sato K, Adachi K, Matthews S, Holl K, Matsuki T, Kaise T, Curran D. Impact of Herpes Zoster and Post-Herpetic Neuralgia on Health-Related Quality of Life in Japanese Adults Aged 60 Years or Older: Results from a Prospective Observational Cohort Study. Clin Drug Investig. 2018 Jan;38(1):29-37. doi: 10.1007/s40261-017-0581-5. PMID: 29086340; PMCID: PMC5762777.`,
        
		`<sup>9</sup> Warner BE, Goins WF, Kramer PR, Kinchington PR. A Guide to Preclinical Models of Zoster-Associated Pain and Postherpetic Neuralgia. Curr Top Microbiol Immunol. 2023;438:189-221. doi: 10.1007/82_2021_240. PMID: 34524508.`,
        
		`<sup>10</sup> Warner BE, Goins WF, Kramer PR, Kinchington PR. A Guide to Preclinical Models of Zoster-Associated Pain and Postherpetic Neuralgia. Curr Top Microbiol Immunol. 2023;438:189-221. doi: 10.1007/82_2021_240. PMID: 34524508.`,
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
