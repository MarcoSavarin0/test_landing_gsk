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

Prevenir enfermedades crónicas en los adultos mayores se vuelve especialmente importante para quienes quieren mantener una vida activa y saludable. A través de la adopción de hábitos saludables y la realización de chequeos médicos regulares, es posible reducir el riesgo de padecer enfermedades crónicas. En este artículo, veremos cómo la prevención primaria y secundaria pueden ayudar a prevenir enfermedades crónicas en los adultos mayores y también pueden beneficiar la calidad de vida de las personas.

## Los beneficios de la prevención primaria para evitar enfermedades crónicas

La prevención primaria se enfoca en adoptar hábitos saludables que reduzcan el riesgo de desarrollar enfermedades. Algunos ejemplos de prevención primaria de enfermedades crónicas son:

- No fumar
- Reducir el consumo de alcohol
- Dormir lo suficiente y manejar el estrés
- Alimentación equilibrada y actividad física

Estos hábitos tienen un impacto significativo en la salud en los adultos mayores y pueden prevenir enfermedades crónicas como:

- Diabetes
- Enfermedades cardiovasculares
- Cáncer
- Enfermedades pulmonares

## ¿Cómo la dieta y el ejercicio pueden prevenir enfermedades crónicas en los adultos mayores?

Una alimentación equilibrada y la práctica regular de actividad física son fundamentales para prevenir enfermedades crónicas en los adultos mayores. La dieta debe ser rica en frutas, verduras, proteínas magras y granos enteros, mientras que se deben evitar las grasas saturadas, el azúcar y la sal en exceso. Por otro lado, realizar ejercicio moderado de forma regular, como caminar, nadar o practicar yoga, ayuda a mantener un peso saludable, fortalecer los músculos y mejorar la función cardiovascular en los adultos mayores.

## Prevención secundaria: la importancia de los chequeos médicos regulares en los adultos mayores

La prevención secundaria se enfoca en la detección temprana y el tratamiento de enfermedades crónicas en los adultos mayores para evitar su progresión y complicaciones. Los chequeos médicos regulares son fundamentales, ya que permiten detectar problemas de salud antes de que se vuelvan más graves. Los adultos mayores deben realizarse pruebas de detección como análisis de sangre, pruebas de presión arterial y mamografías, entre otras, según las indicaciones de su médico. Por eso, es importante realizar una consulta con el médico de forma regular y así prevenir cualquier tipo de enfermedad crónica.

## ¿Cuáles son las enfermedades crónicas más comunes en los adultos mayores?

En esta etapa de la vida, hay que prestar especial cuidado a la salud y fundamentalmente realizar consultas médicas de manera regular para evitar que aparezcan enfermedades crónicas que dificultan llevar una buena calidad de vida. Algunas de las enfermedades crónicas de los adultos mayores más comunes incluyen:

- La hipertensión
- Diabetes tipo 2
- Enfermedades cardiovasculares
- Osteoporosis

Existen riesgos de contraer enfermedades, relacionados al debilitamiento del sistema inmunológico y como resultado, quedar expuesto a afecciones tales como el Herpes Zóster. De esta manera, prevenir enfermedades crónicas en los adultos mayores es esencial para disfrutar de una vida plena y saludable. La adopción de hábitos saludables, la práctica de ejercicio regular y una alimentación equilibrada, junto con la realización de chequeos médicos regulares, pueden reducir significativamente el riesgo de padecer enfermedades crónicas. Consulta a tu médico para conocer cuáles son los métodos de prevención adecuados para tu caso.


NP-AR-HZU-WCNT-230011.




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
					"title": "¿Cómo prevenir enfermedades crónicas en los adultos mayores?",
					"image": "enfermedades-cronicas-adultos-mayores",
					"metatitle": "Enfermedades Crónicas en Adultos Mayores | Consejos 2024",
					"metadescription": "Te contamos tips y consejos sobre cómo prevenir enfermedades crónicas en adultos mayores.",
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
		"1 Kastner M, Cardoso R, Lai Y, Treister V, Hamid JS, Hayden L, Wong G, Ivers NM, Liu B, Marr S, Holroyd-Leduc J, Straus SE. Effectiveness of interventions for managing multiple high-burden chronic diseases in older adults: a systematic review and meta-analysis. CMAJ. 2018 Aug 27;190(34):E1004-E1012. doi: 10.1503/cmaj.171391. PMID: 30150242; PMCID: PMC6110649.",
		"2 Niveles de atención, de prevención y atención primaria de la salud (scielo.edu.uy)",
		"3 Enfermedades no transmisibles - OPS/OMS | Organización Panamericana de la Salud (paho.org)",
		"4 Krepker FF, Arreguy-Sena C, Braga LM, Krempser P, Santos JC, Dutra HS. Nursing protocol in chronic kidney disease prevention in older adults in primary care. Rev Bras Enferm. 2022 Nov 28;76(1):e20220052. doi: 10.1590/0034-7167-2022-0052. PMID: 36449972; PMCID: PMC9728820.",
		"5 Bruins MJ, Van Dael P, Eggersdorfer M. The Role of Nutrients in Reducing the Risk for Noncommunicable Diseases during Aging. Nutrients. 2019 Jan 4;11(1):85. doi: 10.3390/nu11010085. PMID: 30621135; PMCID: PMC6356205.",
		"6 Lee PG, Jackson EA, Richardson CR. Exercise Prescriptions in Older Adults. Am Fam Physician. 2017 Apr 1;95(7):425-432. PMID: 28409595.",
		"7 Kastner M, Cardoso R, Lai Y, Treister V, Hamid JS, Hayden L, Wong G, Ivers NM, Liu B, Marr S, Holroyd-Leduc J, Straus SE. Effectiveness of interventions for managing multiple high-burden chronic diseases in older adults: a systematic review and meta-analysis. CMAJ. 2018 Aug 27;190(34):E1004-E1012. doi: 10.1503/cmaj.171391. PMID: 30150242; PMCID: PMC6110649.",
		"8 Kastner M, Cardoso R, Lai Y, Treister V, Hamid JS, Hayden L, Wong G, Ivers NM, Liu B, Marr S, Holroyd-Leduc J, Straus SE. Effectiveness of interventions for managing multiple high-burden chronic diseases in older adults: a systematic review and meta-analysis. CMAJ. 2018 Aug 27;190(34):E1004-E1012. doi: 10.1503/cmaj.171391. PMID: 30150242; PMCID: PMC6110649.",
		"9 Enfermedades no transmisibles - OPS/OMS | Organización Panamericana de la Salud (paho.org)",
		"10 Harpaz R, Ortega-Sanchez IR, Seward JF; Advisory Committee on Immunization Practices (ACIP) Centers for Disease Control and Prevention (CDC). Prevention of herpes zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008 Jun 6;57(RR-5):1-30; quiz CE2-4. PMID: 18528318.",
		"11 Enfermedades no transmisibles - OPS/OMS | Organización Panamericana de la Salud (paho.org)"
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