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
La familia de virus del herpes humano (HHV) es causa de varias infecciones muy comunes en la población. Aunque muchas personas pueden no ser conscientes de ello, existen varios tipos diferentes, cada uno con sus propias características y manifestaciones clínicas. 

Conocer estos diferentes tipos de enfermedades es esencial para aprender a identificar los síntomas específicos de cada uno y buscar atención médica adecuada cuando sea necesario. 

Además, entender las diferencias entre las diferentes manifestaciones puede ayudar a prevenir la transmisión del virus a otras personas. En esta nota te contamos acerca de las 6 enfermedades más importantes de esta familia de virus:
- Virus del Herpes Simple Tipo 1
- Virus del Herpes Simple Tipo 2
- Virus de la Varicela-Zóster
- Virus de Epstein-Barr
- Citomegalovirus
- Herpesvirus humano tipo 6


## Virus del Herpes Simple Tipo 1

El VHS-1 o Virus de Herpes Simple tipo 1 es más conocido por causar infecciones orales, como el Herpes Labial. La transmisión ocurre principalmente a través del contacto cercano con una persona infectada. 

Aunque es más común en la región oral, también puede causar infecciones genitales a través del contacto oral-genital. 

### Síntomas del Herpes Simple tipo 1

Los síntomas del VHS-1 pueden variar desde leves hasta severos y pueden incluir ampollas o úlceras dolorosas en la boca o alrededor de los labios.

## Virus del Herpes Simple Tipo 2

El VHS-2 o Herpes Simple del tipo 2 es el principal causante del Herpes Genital, una infección de transmisión sexual que se contagia mediante el contacto sexual, incluidos el sexo oral, vaginal y anal. 

Es importante saber que se puede contraer el herpes genital de una pareja sexual que no tenga una lesión visible o que no sepa de su infección, al ser un paciente asintomático.

### Síntomas del Herpes Simple tipo 2

Las personas infectadas pueden experimentar la aparición de lesiones tipo ampollares o ulceradas, con picazón e irritación en el área genital o anal.

## Virus de la Varicela-Zóster

Es muy común confundir al Herpes Zóster con el Herpes Simple, sin embargo, la principal diferencia radica en el tipo de virus que los causa y en sus manifestaciones clínicas. 

El Virus Varicela Zóster causa la varicela.

### ¿Cuáles son los síntomas de este tipo de Herpes? 

El Herpes Zóster se presenta como un sarpullido doloroso y vesículas en un área específica del cuerpo, generalmente afecta un solo lado. En su evolución, puede causar complicaciones como la neuralgia postherpética, que se manifiesta como dolor crónico en el área afectada.

## Virus de Epstein-Barr (VEB)

El Virus de Epstein-Barr es el principal causante de la mononucleosis infecciosa, también conocida como "enfermedad del beso". La transmisión de este tipo de Herpes ocurre principalmente a través de la saliva.

### Síntomas del Virus de Epstein-Barr

Los síntomas pueden incluir fiebre, inflamación de los ganglios linfáticos, fatiga, dolor de garganta y agrandamiento del bazo. La mayoría de las personas se infectan con este tipo de Herpes en algún momento de su vida, pero no todas desarrollan síntomas.

## Citomegalovirus (CMV)

El Citomegalovirus puede causar síntomas similares a los de la mononucleosis en algunas personas, aunque muchas personas infectadas no presentan síntomas. 

La transmisión del Citomegalovirus puede ocurrir a través de contacto cercano con una persona infectada, transfusiones de sangre, trasplantes de órganos y de madre a hijo durante el embarazo. 

En personas con sistemas inmunológicos debilitados, el CMV puede causar enfermedades graves, como neumonía o retinitis.

## Herpesvirus Humano Tipo 6 (HHV-6)

El HHV-6 es el principal causante de la roséola infantil, también conocida como sexta enfermedad o exantema súbito post febril, una enfermedad viral que afecta principalmente a niños menores de 2 años.

### ¿Cuáles son los síntomas de este tipo de Herpes? 

La infección por este tipo de virus se caracteriza por una fiebre alta que dura de 3 a 5 días, seguida de la aparición de una erupción cutánea de color rosa o rojo. Esta erupción generalmente comienza en el tronco y luego se extiende a los brazos y las piernas. Otros síntomas pueden incluir irritabilidad, hinchazón de los ganglios linfáticos y diarrea. 

La mayoría de los casos de roséola son leves y se resuelven sin tratamiento específico, pero en raras ocasiones puede causar complicaciones como convulsiones febriles o encefalitis.

Al estar informados acerca de todas estas enfermedades causadas por virus de la familia herpes, podemos estar mejor preparados para identificar los signos y síntomas tempranos de la infección, lo que nos permite buscar atención médica adecuada cuando sea necesario. 

Además, al comprender las diferencias entre los tipos de Herpes, podemos tomar medidas para prevenir la transmisión del virus a otras personas. Al seguir estos pasos, no solo protegemos nuestra salud, sino también la salud de aquellos a nuestro alrededor. 

Si sospechás que puedes estar experimentando alguno de los síntomas descriptos en esta nota, es crucial que consultes con un equipo médico para recibir el diagnóstico y tratamiento adecuados.

**NP-AR-HZU-WCNT-230006**





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
					"title": "Enfermedades causadas por los Virus de la familia del Herpes Humano, ¿cómo identificarlas?",
					"image": "tipos-de-herpes",
					"metatitle": "¿Qué enfermedades provocadas por el virus del Herpes existen?",
					"metadescription": "¿Sabías que el herpes simple y el herpes zoster pertenecen a una familia de virus que tienen algunas similitudes, pero también varias diferencias? Te lo contamos en esta nota. ",
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
		"STD Facts - Genital Herpes (cdc.gov)",
		"Mathew Jr J, Sapra A. Herpes Simplex Type 2. 2022 Aug 8. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2023 Jan-. PMID: 32119314.",
		"CDC STD Facts - Genital Herpes (cdc.gov)",
		"Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):[TC12-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.",
		"P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009"
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