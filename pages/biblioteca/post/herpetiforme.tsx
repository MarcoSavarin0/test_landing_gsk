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
# Dermatitis Herpetiforme: Entendiendo la enfermedad cutánea

La dermatitis herpetiforme es una enfermedad crónica de la piel poco común que afecta tanto a hombres como a mujeres. Esta afección se caracteriza por la aparición de ampollas que producen picazón. A pesar de su nombre, no tiene relación con el virus del herpes.

## Entendiendo la dermatitis herpetiforme y sus causas

La dermatitis herpetiforme es una enfermedad autoinmunitaria en la que el sistema inmunológico del cuerpo ataca a las células sanas de la piel, provocando la aparición de ampollas y erupciones. Esta afección se relaciona estrechamente con la enfermedad celíaca, una intolerancia al gluten que afecta al intestino delgado. Aproximadamente hasta un 13% de las personas con enfermedad celíaca desarrollan dermatitis herpetiforme en algún momento de sus vidas.

La causa exacta de la dermatitis herpetiforme aún no se comprende completamente. Sin embargo, se sabe que el consumo de gluten (una proteína presente en el trigo, la cebada y el centeno) puede desencadenar una respuesta autoinmunitaria en personas susceptibles. Esta reacción lleva a la formación de depósitos de inmunoglobulina A (IgA) en la piel, lo que provoca la inflamación y las ampollas características de la dermatitis herpetiforme.

## Factores de riesgo y diagnóstico de la dermatitis herpetiforme

La dermatitis herpetiforme es considerada una manifestación cutánea de la enfermedad celíaca y como tal, puede asociarse a otras enfermedades autoinmunitarias. Por otra parte, la dermatitis herpetiforme suele afectar a personas entre los 40 y los 50 años en promedio.

El diagnóstico de la dermatitis herpetiforme se realiza a través de una biopsia de piel, en la cual se examina una pequeña muestra de tejido cutáneo bajo un microscopio para identificar la presencia de depósitos de IgA. Además, se pueden realizar pruebas serológicas y biopsias del intestino delgado para confirmar la enfermedad celíaca asociada.

## ¿En qué se relacionan el Herpes Zóster con la Dermatitis Herpetiforme?

El Herpes Zóster y la Dermatitis Herpetiforme son dos afecciones cutáneas distintas, pero comparten algunas similitudes en cuanto a sus síntomas. A pesar de que sus nombres puedan parecer similares, no tienen una relación directa en términos de causa o patología subyacente.

La principal diferencia de estas enfermedades es su causa:

- Por un lado, el Herpes Zóster es causado por la reactivación del virus de la varicela-zóster (VVZ), que permanece en estado latente en el organismo después de haber sufrido varicela. El Herpes Zóster se manifiesta en forma unilateral, habitualmente en tronco, región lumbar o cara.

- Por el otro, como explicamos arriba, la dermatitis herpetiforme es una enfermedad autoinmunitaria de la piel estrechamente relacionada con la enfermedad celíaca, una intolerancia al gluten, y suele mejorar con una dieta libre de gluten. Se manifiesta habitualmente con lesiones bilaterales distribuidas en superficies extensoras de codos, rodillas y glúteos.

La principal similitud entre el Herpes Zóster y la dermatitis herpetiforme es la presencia de erupciones cutáneas con vesículas o ampollas. Sin embargo, el desarrollo y el tratamiento de ambas enfermedades son diferentes.

Si crees que tienes alguna de estas enfermedades, es importante que consultes a un equipo médico para recibir un diagnóstico adecuado y cuidar tu salud.

NP-AR-HZU-WCNT-230012.



`

export const getStaticProps: GetStaticProps = async (context) => {
	console.log(context)

	// const res = await fetch(`${process.env.STRAPI_API_URL}/notas?populate=*&filters[slug][$in][0]=${context.params?.slug}`, {
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json',
	// 		'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
	// 	}
	// })
	// const nota = await res.json()
	const nota = {
		"data": [
			{
				"id": 1,
				"attributes": {
					"title": "¿Qué es y cuál es la causa de la dermatitis herpetiforme?",
					"image": "dermatitis-herpetiforme",
					"metatitle": "Dermatitis Herpetiforme | Causas y Síntomas | 2024",
					"metadescription": " Te contamos todo lo que necesitas saber sobre la dermatitis herpetiforme. Desde sus causas y los principales síntomas que presenta.",
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
		"1 Salmi TT. Dermatitis herpetiformis. Clin Exp Dermatol. 2019 Oct;44(7):728-731. doi: 10.1111/ced.13992. Epub 2019 May 15. PMID: 31093998.",
		"2 Salmi TT. Dermatitis herpetiformis. Clin Exp Dermatol. 2019 Oct;44(7):728-731. doi: 10.1111/ced.13992. Epub 2019 May 15. PMID: 31093998.",
		"3 García C, Araya M. Dermatitis herpetiforme y enfermedad celíaca. Del intestino a la piel [Dermatitis herpetiformis and celiac disease]. Rev Med Chil. 2021 Sep;149(9):1330-1338. Spanish. doi: 10.4067/S0034-98872021000901330. PMID: 35319687.",
		"4 García C, Araya M. Dermatitis herpetiforme y enfermedad celíaca. Del intestino a la piel [Dermatitis herpetiformis and celiac disease]. Rev Med Chil. 2021 Sep;149(9):1330-1338. Spanish. doi: 10.4067/S0034-98872021000901330. PMID: 35319687.",
		"5 García C, Araya M. Dermatitis herpetiforme y enfermedad celíaca. Del intestino a la piel [Dermatitis herpetiformis and celiac disease]. Rev Med Chil. 2021 Sep;149(9):1330-1338. Spanish. doi: 10.4067/S0034-98872021000901330. PMID: 35319687.",
		"6 Reunala T, Hervonen K, Salmi T. Dermatitis Herpetiformis: An Update on Diagnosis and Management. Am J Clin Dermatol. 2021 May;22(3):329-338. doi: 10.1007/s40257-020-00584-2. PMID: 33432477; PMCID: PMC8068693.",
		"7 Nguyen CN, Kim SJ. Dermatitis Herpetiformis: An Update on Diagnosis, Disease Monitoring, and Management. Medicina (Kaunas). 2021 Aug 20;57(8):843. doi: 10.3390/medicina57080843. PMID: 34441049; PMCID: PMC8400185.",
		"8 Ludvigsson JF, Choung RS, Marietta EV, Murray JA, Emilsson L. Increased risk of herpes zoster in patients with coeliac disease - nationwide cohort study. Scand J Public Health. 2018 Dec;46(8):859-866. doi: 10.1177/1403494817714713. Epub 2017 Jul 13. PMID: 28701089.",
		"9 Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.",
		"10 Ludvigsson JF, Choung RS, Marietta EV, Murray JA, Emilsson L. Increased risk of herpes zoster in patients with coeliac disease - nationwide cohort study. Scand J Public Health. 2018 Dec;46(8):859-866. doi: 10.1177/1403494817714713. Epub 2017 Jul 13. PMID: 28701089.",
		"11 Ludvigsson JF, Choung RS, Marietta EV, Murray JA, Emilsson L. Increased risk of herpes zoster in patients with coeliac disease - nationwide cohort study. Scand J Public Health. 2018 Dec;46(8):859-866. doi: 10.1177/1403494817714713. Epub 2017 Jul 13. PMID: 28701089."
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