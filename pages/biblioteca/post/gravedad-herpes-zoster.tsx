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
## ¿Sabías que los pacientes con diabetes tienen hasta un 40% más de riesgo de desarrollar Herpes Zóster?

**El Herpes Zóster es una enfermedad causada por el mismo virus que provoca la varicela**. Después de superar esta afección cutánea, el virus permanece en el cuerpo y puede reactivarse años después como Herpes Zóster.  Aunque es más conocido por sus erupciones dolorosas en la piel, las complicaciones asociadas pueden ser graves, especialmente en adultos mayores y personas con sistemas inmunológicos comprometidos.<sup>[1]</sup>

**En esta nota, profundizaremos en las complicaciones del Herpes Zóster y sus consecuencias potenciales**. En caso de estar experimentando alguno de estos síntomas es importante que consultes a tu médico de confianza para recibir un diagnóstico adecuado.

## ¿Principales complicaciones del Herpes Zóster?

El Herpes Zóster, como ya mencionamos, es conocido por la característica erupción que produce, pero las ramificaciones de esta enfermedad pueden ser mucho más profundas y severas que una simple erupción. Para minimizar los riesgos, es importante conocer estas complicaciones y consultar a un especialista en caso de tener alguno de estos síntomas.<sup>[2]</sup>

A continuación, te contamos cuáles son:

### Neuralgia postherpética

Esta es una de las complicaciones más comunes del Herpes Zóster, **presentándose hasta en un 30% de todos los casos**. Se caracteriza por un dolor neuropático crónico que persiste después de que la erupción se haya curado.
La Neuralgia Postherpética (NPH) puede durar de tres a seis meses, o incluso persistir por más tiempo. Las personas describen este dolor como agudo, ardiente y, en ocasiones, punzante, lo que puede dificultar las actividades diarias y afectar significativamente la calidad de vida.<sup>[3]</sup>

### Problemas de visión

El Herpes Zóster Oftálmico ocurre cuando el virus infecta el nervio facial, causando erupciones en la frente y, potencialmente, afectando la región del ojo. Esta condición no solo puede provocar dolor y erupciones en el área afectada, sino que también puede comprometer seriamente la visión. En casos graves, si no se trata adecuadamente, el Herpes Zóster Oftálmico puede llevar a una disminución permanente de la visión o incluso ceguera.<sup>[4]</sup>

### Infecciones cutáneas secundarias

**Las lesiones producidas por el Herpes Zóster pueden volverse puertas de entrada para bacterias y otros patógenos**. Es esencial mantener la piel limpia y monitorear cualquier signo de infección adicional, como enrojecimiento creciente, pus o calor en la zona.<sup>[5]</sup>

### Otras consecuencias

Además de las complicaciones cutáneas, el Herpes Zóster puede tener efectos más amplios, **incluyendo complicaciones en el sistema nervioso periférico y central**, así como complicaciones cardiovasculares. Estas consecuencias pueden manifestarse a largo plazo y tienen el potencial de impactar negativamente en la calidad de vida de los pacientes. Es importante estar atentos a estos efectos adicionales y buscar atención médica adecuada para manejarlos de manera efectiva.<sup>[6]</sup>

## Factores de riesgo que pueden agravar el Herpes Zóster

**Existen varios factores que pueden aumentar la severidad del Herpes Zóster o predisponer a una persona a enfrentar mayores complicaciones**. Es fundamental conocer estos factores para estar alerta, cuidarse más para evitar la aparición de la afección y buscar atención médica adecuada si alguno se presenta.<sup>[7]</sup> Acá te contamos cuáles son:


- **Edad avanzada**: El debilitamiento del sistema inmunológico con la edad aumenta la susceptibilidad al Herpes Zóster, especialmente en personas mayores de 50 años.<sup>[8]</sup>

- **Enfermedades crónicas**: Condiciones como diabetes y enfermedades pulmonares pueden aumentar la susceptibilidad al Herpes Zóster debido a su impacto en el sistema inmunológico.<sup>[9]</sup>

- **Tratamientos inmunosupresores**: Pacientes bajo tratamientos que suprimen el sistema inmunológico, como la quimioterapia o medicamentos que disminuyen las defensas, por ejemplo, las drogas que reciben los pacientes luego de un trasplante, enfrentan un riesgo elevado.<sup>[10]</sup>

## El impacto del Herpes Zóster en la salud global de los adultos

El Herpes Zóster puede ser un desafío para la salud de los adultos, particularmente en aquellos de mayor edad. A medida que la población envejece, se observa un aumento en los casos de Herpes Zóster y sus complicaciones.
El Herpes Zóster va más allá de una erupción en la piel. Aunque la mayoría de los casos pueden ser leves o responder a los tratamientos habituales, **es importante saber que pueden existir complicaciones que afecten el bienestar general y la calidad de vida**. Por este motivo, es crucial estar informado, reconocer los síntomas y buscar atención médica adecuada.<sup>[11]</sup>
Si vos o alguien que conocés tiene síntomas relacionados con el Herpes Zóster, es fundamental que consultes con un médico para que te den el asesoramiento y el apoyo que necesitás.

Si vos o alguien que conocés tiene síntomas relacionados con el Herpes Zóster, es fundamental que consultes con un médico para que te den el asesoramiento y el apoyo que necesitás.


NP-AR-HZU-WCNT-230017





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
					"title": "¿Qué tan grave es el Herpes Zóster?",
					"image": "N34 _Gravedad Herpes Zóster_",
					"metatitle": "¿Qué tan grave es el Herpes Zóster?",
					"metadescription": " El Herpes Zóster es mucho más que una simple erupción cutánea. Descubre sus complicaciones y factores de riesgo. ¡Aprendé a cuidarte!",
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
		`<sup>1</sup>Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718`,
		
		`<sup>2</sup> < Koshy E, Mengting L, Kumar H, Jianbo W. Epidemiology, treatment and prevention of herpes zoster: A comprehensive review. Indian J Dermatol Venereol Leprol. 2018 May-Jun;84(3):251-262. doi: 10.4103/ijdvl.IJDVL_1021_16. PMID: 29516900`,

		`<sup>3</sup> Kawai K, Gebremeskel BG, Acosta CJ. Systematic review of incidence and complications of herpes zoster: towards a global perspective. BMJ Open. 2014;4(6):e004833. Published 2014 Jun 10. doi:10.1136/bmjopen-2014-004833`,

		`<sup>4</sup> Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.`,

		`<sup>5</sup>  Bader MS. Herpes zoster: diagnostic, therapeutic, and preventive approaches. Postgrad Med. 2013 Sep;125(5):78-91. doi: 10.3810/pgm.2013.09.2703. PMID: 24113666.`,

		`<sup>6</sup> Kawai K, Gebremeskel BG, Acosta CJ. Systematic review of incidence and complications of herpes zoster: towards a global perspective. BMJ Open. 2014`,

		`<sup>7</sup> Patil A, Goldust M, Wollina U. Herpes zoster: A Review of Clinical Manifestations and Management. Viruses. 2022 Jan 19;14(2):192. doi: 10.3390/v14020192. PMID: 35215786; PMCID: PMC8876683.`,
        
		`<sup>8</sup>  John AR, Canaday DH. Herpes Zoster in the Older Adult. Infect Dis Clin North Am. 2017 Dec;31(4):811-826. doi: 10.1016/j.idc.2017.07.016. PMID: 29079160; PMCID: PMC5724974.`,

		`<sup>9</sup> JSullivan KM, Farraye FA, Winthrop KL, Willer DO, Vink P, Tavares-Da-Silva F. Safety and efficacy of recombinant and live herpes zoster vaccines for prevention in at-risk adults with chronic diseases and immunocompromising conditions. Vaccine. 2023 Jan 4;41(1):36-48. doi: 10.1016/j.vaccine.2022.10.063. Epub 2022 Nov 29. PMID: 36460534`,

		`<sup>10</sup> Sullivan KM, Farraye FA, Winthrop KL, Willer DO, Vink P, Tavares-Da-Silva F. Safety and efficacy of recombinant and live herpes zoster vaccines for prevention in at-risk adults with chronic diseases and immunocompromising conditions. Vaccine. 2023 Jan 4;41(1):36-48. doi: 10.1016/j.vaccine.2022.10.063. Epub 2022 Nov 29. PMID: 36460534`,

		`<sup>11</sup> Marra Y, Lalji F. Prevention of Herpes Zoster: A Focus on the Effectiveness and Safety of Herpes Zoster Vaccines. Viruses. 2022 Nov 29;14(12):2667. doi: 10.3390/v14122667. PMID: 36560671; PMCID: PMC9782228`,

	
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
							</article><div className="w-auto my-5"><Cta title={'Haz el autotest'} url={`/autotest`} gtm={true} gtmTrackName="Autotest"/></div>

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
