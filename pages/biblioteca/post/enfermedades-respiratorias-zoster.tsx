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
## ¿Sabías que las personas con enfermedades respiratorias tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster?
El Herpes Zóster, conocido comúnmente como culebrilla, es una infección viral producida por el virus varicela-zóster, el mismo virus que causa la varicela. Luego de que la persona haya contraído varicela, el virus permanece latente en los nervios y tiempo después puede reactivarse como Herpes Zóster.<sup>[1]</sup>
Si bien los síntomas pueden variar notablemente entre los pacientes que la padecen, la erupción cutánea acompañada por picazón, dolor, hormigueo, sensación molesta o sensibilidad al tacto son los más frecuentes.<sup>[2]</sup>
Aunque cualquier persona que haya tenido varicela puede desarrollar Herpes Zóster, existen ciertos factores que aumentan significativamente este riesgo. Los pacientes con enfermedades respiratorias tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster. En este artículo exploraremos la relación entre las enfermedades respiratorias y el Herpes Zóster y las posibles complicaciones asociadas.<sup>[3]</sup>

## Enfermedades respiratorias y su impacto en el sistema inmunológico
Las enfermedades respiratorias crónicas, como el asma y la Enfermedad Pulmonar Obstructiva Crónica (EPOC), afectan significativamente al sistema inmunológico. La inflamación crónica y las infecciones recurrentes que caracterizan estas condiciones pueden debilitar la respuesta inmunitaria del organismo, haciéndolo más susceptible a diversas infecciones, incluido el Herpes Zóster. Esta vulnerabilidad inmunológica explica por qué los pacientes con enfermedades respiratorias tienen un 30% más de riesgo de desarrollar Herpes Zóster. <sup>[3]</sup>

### Asma y Herpes Zóster
El asma es una enfermedad inflamatoria crónica de las vías respiratorias que provoca episodios de sibilancias, dificultad para respirar, opresión en el pecho y tos. La inflamación constante y el uso prolongado de corticosteroides para controlar los síntomas pueden comprometer el sistema inmunológico, aumentando el riesgo de desarrollar Herpes Zóster. Se han demostrado que los asmáticos tienen un mayor riesgo de desarrollar Herpes Zóster comparado con la población general.<sup>[4]</sup>

### EPOC y Herpes Zóster
La Enfermedad Pulmonar Obstructiva Crónica es otra enfermedad respiratoria que incrementa el riesgo de Herpes Zóster. La EPOC incluye patologías como la bronquitis crónica y el enfisema que causan una obstrucción persistente del flujo aéreo. Al igual que en el asma, el manejo de la EPOC a menudo implica el uso de corticosteroides que pueden suprimir la función inmunológica. Además, la inflamación sistémica y el daño tisular crónico asociados con la EPOC pueden debilitar aún más las defensas del organismo y aumentar el riesgo de desarrollar Herpes Zóster.<sup>[5]</sup>

## Complicaciones del Herpes Zóster
Aunque la mayoría de las personas se recuperan, algunas —especialmente las que padecen enfermedades crónicas— pueden experimentar complicaciones que pueden afectar notablemente su calidad de vida. Algunas de estas posibles complicaciones son: 

### Neuralgia postherpética
La complicación más común es la Neuralgia Postherpética (NPH), un dolor neurálgico intenso que persiste después de que la erupción por Herpes Zóster se haya curado. La NPH puede durar de tres a seis meses o incluso persistir por más tiempo, interfiriendo con las actividades cotidianas de quienes la padecen.<sup>[6]</sup>
Se calcula que hasta un 30% de los pacientes con Herpes Zóster desarrollará Neuralgia Posherpética y que dicha complicación suele ser más común y grave en personas mayores de 60 años y en aquellas que padecen ciertas enfermedades que comprometen su sistema inmune.<sup>[7]</sup> Además, los pacientes con EPOC tienen un 53% más de riesgo de desarrollar NPH y los pacientes con asma un 21% más de riesgo de desarrollar NPH.<sup>[8]</sup>  ¿[Querés saber más sobre esta complicación](https://www.hablemosdezoster.com/biblioteca/post/neuralgia-postherpetica)?

### Complicaciones oculares
El Herpes Zóster oftálmico ocurre cuando el virus infecta el nervio facial causando erupciones en la frente y una inflamación dolorosa en los tejidos. Las personas pueden desarrollar queratitis, escleritis, uveítis y necrosis retiniana aguda. Las secuelas prolongadas o permanentes del Herpes Zóster Oftálmico pueden dar lugar a pérdida de visión.<sup>[9]</sup> ¿[Querés saber más sobre esta complicación](https://www.hablemosdezoster.com/biblioteca/post/herpes-zoster-oftalmico)?

### Complicaciones neurológicas
El virus varicela-zóster puede afectar el sistema nervioso central, provocando encefalitis, mielitis y síndrome de Ramsay Hunt, una complicación que causa parálisis facial y pérdida de audición en el lado afectado. Estas complicaciones neurológicas pueden ser extremadamente graves y requieren intervención médica urgente. En este artículo encontrarás más detalles sobre el síndrome de Ramsay Hunt.<sup>[10]</sup>

## La importancia de la concientización del Herpes Zoster 
Es crucial entender que el riesgo de complicaciones graves aumenta significativamente si el Herpes Zóster no se maneja de manera adecuada desde sus primeros síntomas. Ignorar los primeros signos de la enfermedad o demorar la consulta médica puede resultar en un tratamiento menos efectivo y en una mayor probabilidad de desarrollar complicaciones severas, especialmente para aquellos pacientes con enfermedades respiratorias, quienes ya enfrentan un mayor riesgo de infección y complicaciones.<sup>[11]</sup>
Para conocer cómo tratar y prevenir el Herpes Zóster, te alentamos a que visites a tu médico de confianza.
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
					"title": "¿Sabías que las personas con enfermedades respiratorias tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster?",
					"image": "RESPI",
					"metatitle": "▷ Enfermedades Respiratorias y Herpes Zóster | Riesgos y Complicaciones",
					"metadescription": "Sabías que las personas con enfermedades respiratorias tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster? Conocé la relación que existe en Hablemos de Zóster",
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
		`<sup>1</sup> Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.`,
		`<sup>2</sup> Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697. Clinical Features of Shingles (Herpes Zoster) by CDC <a href="https://www.cdc.gov/shingles/hcp/clinical-signs/index.html" target="_blank">https://www.cdc.gov/shingles/hcp/clinical-signs/index.html</a>. Shingles by Johns Hopkins Medicine <a href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/shingles" target="_blank">https://www.hopkinsmedicine.org/health/conditions-and-diseases/shingles</a>.`,
		`<sup>3</sup> Muñoz-Quiles C. BMC Infect Dis. 2018 May 3;18(1):203. doi: 10.1186/s12879-018-3121-x. PMID: 29724175; PMCID: PMC5934818. Forbes HJ. Neurology.2016 Jul 5;87(1):94-102. doi: 10.1212/WNL.0000000000002808 Epub 2016 Jun 10. PMID: 27287218; PMCID: PMC4932239.`,
		`<sup>4</sup> Warren-Gash C, Forbes HJ, Williamson E, et al. Risk of Herpes Zoster in Adults with Asthma: A Population-Based Cohort Study. J Allergy Clin Immunol. 2015;136(6):1432-1436. doi:10.1016/j.jaci.2015.06.034.`,
		`<sup>5</sup> McDonald JR, Zeringue AL, Caplan L, et al. Herpes Zoster Risk Factors in a National Cohort of Veterans With Rheumatoid Arthritis. Clin Infect Dis. 2009;48(10):1364-1371. doi:10.1086/598337.`,
		`<sup>6</sup> Drolet M, Brisson M, Schmader KE, et al. The Impact of Herpes Zoster and Postherpetic Neuralgia on Health-Related Quality of Life: A Prospective Study. CMAJ. 2010;182(16):1731-1736. doi:10.1503/cmaj.091711.`,
		`<sup>7</sup> P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009.`,
		`<sup>8</sup> Forbes HJ et al. Quantification of risk factors for postherpetic neuralgia in herpes zoster patients. Neurology 2016 Jul 5:87(1) 94-102.`,
		`<sup>9</sup> Liesegang TJ. Herpes Zoster Ophthalmicus: Natural History, Risk Factors, Clinical Presentation, and Morbidity. Ophthalmology. 2008;115(2 Suppl):S3-S12. doi:10.1016/j.ophtha.2007.10.009.`,
		`<sup>10</sup> Gilden DH, Kleinschmidt-DeMasters BK, Wellish M, et al. Varicella Zoster Virus, a Cause of Encephalitis, Myelitis, and Multiple Cranial Neuropathies. J Neurol Sci. 1996;143(1-2):131-134. doi:10.1016/s0022-510x(96)00294-6.`,
		`<sup>11</sup> Drolet M, Brisson M, Schmader KE, et al. The Impact of Herpes Zoster and Postherpetic Neuralgia on Health-Related Quality of Life: A Prospective Study. CMAJ. 2010;182(16):1731-1736. doi:10.1503/cmaj.091711.`
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
