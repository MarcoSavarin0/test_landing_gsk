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
En este artículo veremos cómo las personas con enfermedades cardiovasculares tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster<sup>1</sup> y conoceremos la relación entre estas condiciones y sus posibles complicaciones asociadas.

## Relación entre enfermedades cardiovasculares y Herpes Zóster

Las enfermedades cardiovasculares, como la hipertensión, la cardiopatía isquémica y la insuficiencia cardíaca, no solo afectan al corazón y a los vasos sanguíneos, sino que también pueden aumentar la susceptibilidad a infecciones como el Herpes Zóster. Existe una asociación significativa entre las enfermedades cardiovasculares y el Herpes Zóster, sugiriendo que "los pacientes con enfermedades cardiovasculares tienen un riesgo mayor de desarrollar Herpes Zóster". Según un reciente estudio, los pacientes con enfermedades cardiovasculares tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster<sup>1</sup>.

### Hipertensión y Herpes Zóster

La hipertensión arterial es uno de los factores de riesgo más comunes en las enfermedades cardiovasculares. La presión arterial constantemente elevada puede dañar las paredes arteriales, lo que favorece la formación de placas y aumenta el riesgo de eventos cardíacos. Además, se ha observado que este estado inflamatorio crónico puede influir en la reactivación del virus varicela-zóster, elevando el riesgo de padecer Herpes Zóster en estos pacientes<sup>2</sup>.

### Cardiopatía isquémica

La cardiopatía isquémica, que incluye condiciones como el infarto de miocardio y la angina de pecho, implica un flujo sanguíneo insuficiente hacia el corazón. Esta condición perjudica el músculo cardíaco. Estudios han mostrado que los pacientes con cardiopatía isquémica presentan un riesgo considerablemente más alto de reactivación del Herpes Zóster<sup>3</sup>.

### Insuficiencia cardíaca

La insuficiencia cardíaca es una condición en la que el corazón no puede bombear suficiente sangre para satisfacer las necesidades del cuerpo. En pacientes con enfermedades cardiovasculares, la infección por Herpes Zóster está asociada a un mayor riesgo de complicaciones debido a la vasculopatía o la afectación vascular directa del virus varicela-zóster. La investigación indica que aquellos con insuficiencia cardíaca tienen un riesgo elevado de hasta un 30% de desarrollar esta dolorosa afección cutánea<sup>4</sup>.

## Complicaciones del Herpes Zóster

Tanto en pacientes sanos, como en aquellos con alguna enfermedad cardiovascular, el Herpes Zóster puede presentar las siguientes complicaciones:

### Neuralgia postherpética

La neuralgia postherpética es la complicación más frecuente del Herpes Zóster. Se caracteriza por un dolor persistente que puede durar meses o incluso años después de que las ampollas hayan desaparecido. Este dolor crónico puede afectar los ciclos de sueño y empeorar considerablemente la calidad de vida. En pacientes con enfermedades cardiovasculares, puede ser aún más difícil de manejar debido a su ya comprometido estado de salud<sup>5</sup>. ¿[Te gustaría saber más sobre la Neuralgia Postherpética](https://www.hablemosdezoster.com/biblioteca/post/neuralgia-postherpetica)?
### Complicaciones cerebrovasculares y cardiovasculares

Los pacientes con Herpes Zóster tienen un 40% más de riesgo de sufrir un accidente cerebrovascular (ACV) y un 30% más de riesgo de tener un infarto agudo de miocardio<sup>6</sup>. Esto puede ser peligroso para las personas que ya tienen enfermedades cardiovasculares, ya que puede causar inflamación en las arterias, incluyendo las que irrigan el cerebro y el corazón. La inflamación puede llevar a la formación de coágulos sanguíneos, lo que aumenta significativamente el riesgo de eventos cardiovasculares graves<sup>7</sup>.

## Diagnóstico temprano

Ignorar los signos de Herpes Zóster puede llevar a consecuencias que impactan significativamente la calidad de vida. Sin un diagnóstico y manejo temprano, las complicaciones pueden progresar rápidamente. La falta de intervención oportuna en pacientes con enfermedades cardiovasculares no solo aumenta el riesgo de complicaciones severas, sino que también puede resultar en hospitalizaciones prolongadas y una recuperación más difícil<sup>8</sup>.

### Impacto en la calidad de vida

El Herpes Zóster y sus complicaciones pueden afectar significativamente la calidad de vida. El dolor crónico, las cicatrices permanentes y la posible pérdida de visión (en los casos en los que el Herpes Zóster afecta la zona ocular) son algunas de las consecuencias que pueden impedir que los pacientes realicen sus actividades diarias normales. En pacientes con enfermedades cardiovasculares, el riesgo de complicaciones puede ser mayor debido al deterioro vascular y a otras comorbilidades asociadas<sup>9</sup>.

## La importancia de la concientización del Herpes Zoster   

Es crucial entender que el riesgo de complicaciones graves aumenta significativamente si el Herpes Zóster no se maneja de manera adecuada desde sus primeros síntomas. Ignorar los primeros signos de la enfermedad o demorar la consulta médica puede resultar en un tratamiento menos efectivo y en una mayor probabilidad de desarrollar complicaciones severas, especialmente para aquellos pacientes con enfermedades cardiovasculares, quienes ya enfrentan un mayor riesgo de infección y complicaciones.

##**Para conocer cómo tratar y prevenir el Herpes Zóster, te alentamos a que visites a tu médico de confianza.**



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
					"title": "¿Sabías que las personas con enfermedades cardiovasculares tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster?",
					"image": "CARDIO",
					"metatitle": "▷ Enfermedades Cardiovasculares y Herpes Zóster | Riesgos y Complicaciones",
					"metadescription": "Explora la conexión entre la diabetes y el Herpes Zóster y cómo un buen control de la diabetes puede reducir el riesgo de esta dolorosa infección.",
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
		`<sup>1</sup> Marra F, Parhar K, Huang B, Vadlamudi N. Risk Factors for Herpes Zoster Infection: A Meta-Analysis. Open Forum Infect Dis. 2020 Jan 9;7(1):ofaa005. doi: 10.1093/ofid/ofaa005. PMID: 32010734; PMCID: PMC6984676.`,
		`<sup>2</sup> Minako Yamaoka-Tojo. Herpes Zoster and Cardiovascular Disease: Exploring Associations and Preventive Measures through Vaccination <a href="https://www.mdpi.com/2076-393X/12/3/252" target="_blank">https://www.mdpi.com/2076-393X/12/3/252</a>. Shingles associated with increased risks for cardiovascular disease <a href="https://www.nhlbi.nih.gov/news/2022/shingles-associated-increased-risks-cardiovascular-disease" target="_blank">https://www.nhlbi.nih.gov/news/2022/shingles-associated-increased-risks-cardiovascular-disease</a>.`,
		`<sup>3</sup> Breuer J, Pacou M, Gautier A, Brown MM. Herpes zoster as a risk factor for stroke and TIA: A retrospective cohort study in the UK. Neurology. 2014 Jan 21;82(3):206-12. doi: 10.1212/WNL.0000000000000038. PMID: 24384646; PMCID: PMC3915656.`,
		`<sup>4</sup> Kang JH, Lin HC. Increased risk of herpes zoster in patients with coronary artery disease: a population-based study. CMAJ. 2010 Apr 6;182(6). doi: 10.1503/cmaj.091710. PMID: 20231347; PMCID: PMC2850284.`,
		`<sup>5</sup> Dworkin RH, Schmader KE. The epidemiology and natural history of herpes zoster and postherpetic neuralgia. In: Watson CPN, Gershon AA, editors. Herpes Zoster and Postherpetic Neuralgia. 2nd ed. New York: Elsevier Press; 2001. p. 39-64. PMID: 11421304.`,
		`<sup>6</sup> Erskine N, Tran H, Levin L, Ulbricht C, Fingeroth J, Kiefe C, Goldberg RJ, Singh S. A systematic review and meta-analysis on herpes zoster and the risk of cardiac and cerebrovascular events. PLoS One. 2017 Jul 27;12(7):e0181565. doi: 10.1371/journal.pone.0181565. PMID: 28749981; PMCID: PMC5531458. Ping-Hsun Wu et al. Does Herpes Zoster Increase the Risk of Stroke and Myocardial Infarction? A Comprehensive Review. J. Clin. Med. 2019 8 547; doi:10.3390/jcm8040547.`,
		`<sup>7</sup> Yawn BP, Itoga S, Wollan P, et al. Risk of stroke and myocardial infarction after herpes zoster in older adults in a US community population. Mayo Clin Proc. 2016 May;91(5):33-44. doi: 10.1016/j.mayocp.2016.01.008. PMID: 27017118.`,
		`<sup>8</sup> Drolet M, Brisson M, Schmader KE, et al. The impact of herpes zoster and postherpetic neuralgia on health-related quality of life: a prospective study. CMAJ. 2010 Aug 3;182(16):1731-6. doi: 10.1503/cmaj.091711. PMID: 20805495; PMCID: PMC2946894.`,
		`<sup>9</sup> Katz J, Cooper EM, Walther RR, Sweeney EW, Dworkin RH. Acute pain in herpes zoster and its impact on health-related quality of life. Clin Infect Dis. 2004 Jun 1;39(3):342-8. doi: 10.1086/421942. PMID: 15306994.`
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