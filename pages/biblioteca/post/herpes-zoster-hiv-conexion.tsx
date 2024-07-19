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
**Aunque el Herpes Zóster y el HIV son dos afecciones diferentes, puede existir un vínculo entre ambas** especialmente relevante para aquellos que viven con HIV.<sup>[1]</sup>

En este artículo, vamos a explorar la posible relación entre el Herpes Zóster y el HIV, **cómo el sistema inmunológico está implicado y qué medidas preventivas podrían ser útiles para personas con HIV.**

##El papel del sistema inmunológico en el Herpes Zóster y el HIV

El sistema inmunológico desempeña un papel crucial tanto en el Herpes Zóster como en el HIV. **El Herpes Zóster es causado por la reactivación del virus varicela-zóster, y es más probable que eso ocurra cuando el sistema inmunológico está debilitado<sup>[2]</sup>**. El HIV, por otro lado, es un virus que afecta directamente al sistema inmunológico, reduciendo su capacidad para combatir infecciones y otras enfermedades<sup>[3]</sup>.

De esta forma, **la infección por HIV es un factor de riesgo para el desarrollo de Herpes Zóster y sus complicaciones, particularmente quienes no se encuentran bajo tratamiento antirretroviral o no lo reciben en forma adecuada**.<sup>[4]</sup> La interacción entre estas dos afecciones subraya la importancia de monitorear el estado inmunológico de estos pacientes para minimizar el riesgo y las complicaciones asociadas.

##Manejo y cuidado del Herpes Zóster en pacientes con HIV

Es fundamental mantener una **colaboración estrecha con profesionales de la salud** para recibir asesoramiento y tratamiento adecuados en el manejo del Herpes Zóster, especialmente si también se vive con HIV. A continuación, te ofrecemos algunos consejos clave para cuidar mejor tu salud y abordar de manera efectiva estas afecciones:


##Diagnóstico temprano

Uno de los aspectos más importantes en el manejo del Herpes Zóster es el diagnóstico temprano. **Los síntomas del Herpes Zóster, como las erupciones cutáneas y el dolor, pueden ser más severos en personas con HIV**. Un diagnóstico temprano permite que los médicos tomen medidas preventivas contra complicaciones potenciales.<sup>[5]</sup>

###Seguimiento médico

**La relación entre el Herpes Zóster y el HIV requiere un enfoque multidisciplinario para el cuidado**. Es importante tener un seguimiento médico regular para evaluar cualquier cambio en su estado de salud y adecuar el manejo según sea necesario.<sup>[6]</sup>

##Consideraciones psicológicas

**La presencia de Herpes Zóster puede tener un impacto emocional en los pacientes con HIV, aumentando los niveles de estrés y ansiedad**. Un acompañamiento psicológico es recomendable como parte del plan de manejo integral.<sup>[7]</sup>

##Manejo y reducción del riesgo de Herpes Zóster en personas con HIV

El manejo adecuado del Herpes Zóster y la reducción del riesgo de su aparición en pacientes con HIV, así como de otras enfermedades, son esenciales para mejorar la calidad de vida y minimizar las complicaciones asociadas. **Más allá del tratamiento médico, se deben considerar factores como el estilo de vida, el estado emocional y el monitoreo continuo para asegurar un enfoque integral**. <sup>[8]</sup>

Algunos puntos importantes a tener en cuenta son:

- **Mantener una buena adherencia al tratamiento antirretroviral indicado para el HIV**: Esto es crucial para controlar eficazmente el virus y mantener el sistema inmunológico lo más fuerte posible.<sup>[9]</sup>


- **Monitoreo constante**: Realizar chequeos médicos regulares y análisis de sangre pueden ser vitales para evaluar la eficacia del tratamiento del HIV y el estado del sistema inmunológico.<sup>[10]</sup>


- **Estilo de vida saludable**: Mantener un estilo de vida equilibrado con una dieta nutritiva y ejercicio regular puede ayudar a fortalecer el sistema inmunológico.<sup>[11]</sup>


- **Conciencia de síntomas**: Estar atentos a los primeros signos del Herpes Zóster puede permitir un diagnóstico temprano y un manejo más efectivo.

El vínculo entre el Herpes Zóster y el HIV resalta la necesidad de un seguimiento médico riguroso en pacientes con HIV, con el objetivo de prevenir las complicaciones asociadas al Herpes Zóster.<sup>[12]</sup>

Si tenés síntomas de Herpes Zóster y padecés HIV, o conocés a alguien que los tenga, **es importante consultar con tu equipo médico para un diagnóstico y plan de tratamiento adecuado**.

NP-AR-HZU-WCNT-230019
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
					"title": "Herpes Zóster y HIV: ¿Existe una relación?",
					"image": "N40-_Herpes-Zóster-y-HIV-Existe-una-relación_-_1_",
					"metatitle": "Herpes Zóster y HIV: ¿Existe una relación?",
					"metadescription": "¿Cómo se relacionan el Herpes Zóster y el HIV? Conocé sobre el manejo y cuidado de ambas afecciones. Aprendé a mejorar tu calidad de vida.",
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
		`<sup>1</sup> McKay SL, Guo A, Pergam SA, Dooling K. Herpes Zoster Risk in Immunocompromised Adults in the United States: A Systematic Review. Clin Infect Dis. 2020 Oct 23;71(7):e125-e134. doi: 10.1093/cid/ciz1090. PMID: 31677266; PMCID: PMC7195255.`,
		
		`<sup>2</sup> Rosamilia LL. Herpes Zoster Presentation, Management, and Prevention: A Modern Case-Based Review. Am J Clin Dermatol. 2020 Feb;21(1):97-107. doi: 10.1007/s40257-019-00483-1. PMID: 31741185.`,
        
		`<sup>3</sup> Turner BG, Summers MF. Structural biology of HIV. J Mol Biol. 1999 Jan 8;285(1):1-32. doi: 10.1006/jmbi.1998.2354. PMID: 9878383.`,

		`<sup>4</sup> Blank LJ, Polydefkis MJ, Moore RD, Gebo KA. Herpes zoster among persons living with HIV in the current antiretroviral therapy era. J Acquir Immune Defic Syndr. 2012;61(2):203-207. doi:10.1097/QAI.0b013e318266cd3c`,

		`<sup>5</sup> McLigeyo SO. Herpes zoster in HIV/AIDS--a little recognised opportunistic infection with important clinical and cost implications. East Afr Med J. 1998 Jul;75(7):377-8. PMID: 9803625.`,

		`<sup>6</sup> McLigeyo SO. Herpes zoster in HIV/AIDS--a little recognised opportunistic infection with important clinical and cost implications. East Afr Med J. 1998 Jul;75(7):377-8. PMID: 9803625.`,

		`<sup>7</sup>  McLigeyo SO. Herpes zoster in HIV/AIDS--a little recognised opportunistic infection with important clinical and cost implications. East Afr Med J. 1998 Jul;75(7):377-8. PMID: 9803625.`,

		`<sup>8</sup> Gershon AA. Prevention and treatment of VZV infections in patients with HIV. Herpes. 2001 Jul;8(2):32-6. PMID: 11867015.`,

		`<sup>9</sup> Blank LJ, Polydefkis MJ, Moore RD, Gebo KA. Herpes zoster among persons living with HIV in the current antiretroviral therapy era. J Acquir Immune Defic Syndr. 2012;61(2):203-207. doi:10.1097/QAI.0b013e318266cd3c`,

		`<sup>10</sup> Gershon AA. Prevention and treatment of VZV infections in patients with HIV. Herpes. 2001 Jul;8(2):32-6. PMID: 11867015.`,

		`<sup>11</sup> Weyh C, Krüger K, Strasser B. Physical Activity and Diet Shape the Immune System during Aging. Nutrients. 2020 Feb 28;12(3):622. doi: 10.3390/nu12030622. PMID: 32121049; PMCID: PMC7146449.`,

		`<sup>12</sup> Volpi A, Stanberry L. Herpes zoster in immunocompromised patients. Herpes. 2007 Sep;14(2):31. PMID: 17939899.`,

	
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
