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
## ¿Sabías que los pacientes con diabetes tienen hasta un 40% más de riesgo de desarrollar Herpes Zóster?
La diabetes es una enfermedad crónica que afecta a 540 millones de personas en todo el mundo<sup>[1]</sup>. En Argentina, la prevalencia de glucemia elevada/diabetes en la población adulta por autoreporte fue de un 12%<sup>[2]</sup>. El Herpes Zóster es una infección viral que provoca una erupción dolorosa en la piel<sup>[3]</sup>. En este artículo vamos a conocer cómo influye la diabetes con el desarrollo del Herpes Zóster.

## ¿Qué es la diabetes?
Antes de ver en qué punto se relacionan la diabetes con el Herpes Zóster, entendamos un poco más sobre esta enfermedad.
La diabetes es una enfermedad crónica que se produce cuando el cuerpo no es capaz de regular adecuadamente los niveles de azúcar (glucosa) en la sangre. La glucosa es la principal fuente de energía para las células del cuerpo y proviene de los alimentos que consumimos. Este proceso está directamente relacionado a la insulina, una hormona producida por el páncreas que ayuda a que la glucosa entre en las células para ser utilizada como energía<sup>[4]</sup>.

## ¿Cuáles son los tipos de diabetes?
Existen dos tipos principales de diabetes: la diabetes tipo 1 y la diabetes tipo 2.

### La diabetes tipo 1
Es una enfermedad autoinmune en la cual el **sistema inmunológico ataca y destruye las células productoras de insulina** en el páncreas. Las personas con diabetes tipo 1 necesitan inyecciones de insulina de por vida para regular sus niveles de glucosa en la sangre<sup>[5]</sup>.

### La diabetes tipo 2
Es la forma más común de diabetes y ocurre cuando **el cuerpo no utiliza la insulina de manera eficiente**, es decir que provoca una resistencia a la insulina, o cuando el páncreas no produce suficiente insulina para mantener los niveles de glucosa en la sangre dentro de un rango normal<sup>[5]</sup>. La diabetes tipo 2 puede ser manejada mediante cambios en la dieta, actividad física, medicamentos y, en algunos casos, también con inyecciones de insulina<sup>[5]</sup>.

## ¿Cuáles son las consecuencias de la diabetes?
La diabetes mal controlada puede tener serias complicaciones a largo plazo<sup>[5]</sup>:
- Enfermedades cardiovasculares
- Daño renal
- Problemas de visión
- Daño en los nervios

Por lo tanto, es fundamental para las personas con diabetes llevar un control adecuado de sus niveles de glucosa en sangre y seguir las recomendaciones médicas para reducir el riesgo de complicaciones. Por otra parte, aunque esté bien controlada, la diabetes puede hacer que su sistema inmunológico le sea más difícil luchar contra las infecciones. Si tiene diabetes, puede estar en riesgo de sufrir complicaciones más graves a causa de una enfermedad en comparación con las personas sin diabetes<sup>[6]</sup>.

## La influencia de la diabetes en el riesgo de desarrollar Herpes Zóster
La relación entre el Herpes Zóster y la diabetes se debe principalmente al efecto que tiene la diabetes en el sistema inmunológico<sup>[7]</sup>. La diabetes puede debilitar el sistema inmunitario, lo que hace que las personas con diabetes sean más susceptibles a enfermedades como el Herpes Zóster. Algunos estudios han demostrado que **las personas con diabetes tienen un 40% más de riesgo de desarrollar Herpes Zóster** que las personas sin diabetes<sup>[8]</sup>.

## Complicaciones del Herpes Zóster en pacientes diabéticos
Es importante saber que, aunque el paciente pueda empezar un tratamiento antiviral o un tratamiento para el Herpes Zóster a tiempo, no le garantiza que pueda evitar alguna complicación en el futuro. Algunas de las complicaciones que puede generar el Herpes Zóster son:

### Aumento de los niveles de glucosa en sangre
La infección por Herpes Zóster puede llevar a un mal control de la glucemia en pacientes diabéticos. El dolor y la inflamación asociados con el Herpes Zóster pueden provocar niveles elevados de glucosa en sangre, complicando aún más el manejo de la diabetes<sup>[9]</sup>.

### Neuralgia Postherpética
La complicación más común del Herpes Zóster es la Neuralgia Postherpética (NPH), un dolor neurálgico intenso que persiste después de que la erupción por Herpes Zóster se haya curado. Es importante saber que los pacientes con diabetes tienen un 19% más de riesgo de tener NPH y un 63% más de riesgo de hospitalizarse por Herpes Zóster<sup>[10,11]</sup>. La NPH puede durar de tres a seis meses, o incluso persistir por más tiempo, interfiriendo con las actividades cotidianas de quienes la padecen<sup>[8]</sup>. Se calcula que hasta un 30% de los pacientes con Herpes Zóster desarrollará Neuralgia Posherpética y que dicha complicación suele ser más común y grave en personas mayores de 60 años y en aquellas que padecen ciertas enfermedades que comprometen su sistema inmune<sup>[12]</sup>. ¿[Querés saber más sobre esta complicación](https://www.hablemosdezoster.com/biblioteca/post/neuralgia-postherpetica)?

### Complicaciones Oculares
Si el Herpes Zóster afecta la región oftálmica, puede llevar a complicaciones graves como queratitis, uveítis y, en casos extremos, pérdida de visión. Los pacientes diabéticos son más susceptibles a estas complicaciones<sup>[13]</sup>. ¿[Querés saber más sobre esta complicación](https://www.hablemosdezoster.com/biblioteca/post/herpes-zoster-oftalmico)?

## Control de la diabetes y prevención del Herpes Zóster
Aunque tengan un buen control de la diabetes, el riesgo de desarrollar Herpes Zóster sigue estando presente. Al mantener los niveles de azúcar en sangre bajo control, las personas con diabetes pueden fortalecer su sistema inmunológico y disminuir la probabilidad de infecciones<sup>[7]</sup>.

Además, llevar un estilo de vida saludable, como mantener una dieta equilibrada y hacer ejercicio regularmente, también puede ayudar a fortalecer el sistema inmunológico y prevenir el Herpes Zóster<sup>[7]</sup>. De esta manera, **la relación entre el Herpes Zóster y la diabetes se debe al efecto debilitante que tiene la diabetes en el sistema inmunológico, lo que aumenta el riesgo de tener otras infecciones y enfermedades**<sup>[14]</sup>. Si tenés diabetes, es fundamental hablar con tu médico acerca de las medidas que podés tomar para prevenir el Herpes Zóster y mantener una buena salud en general.

NP-AR-HZU-WCNT-230009.
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
				"id": 8,
				"attributes": {
					"title": "¿Hay relación entre el Herpes Zóster y la diabetes? La diabetes como factor de riesgo",
					"image": "diabetes",
					"metatitle": "Relación entre el Herpes Zóster y la diabetes",
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
		`<sup>1</sup> <a href="https://idf.org/aboutdiabetes/what-is-diabetes/facts-figures.html" target="_blank">Datos y cifras sobre la diabetes | Federación Internacional de Diabetes (idf.org)</a>`,
		
		`<sup>2</sup> <a href="https://www.indec.gob.ar/ftp/cuadros/publicaciones/enfr_2018_resultados_definitivos.pdf" target="_blank">4° Encuesta Nacional de Factores de Riesgo. Resultados definitivos Octubre de 2019 Instituto Nacional de Estadística y Censos (INDEC). Secretaría de Gobierno de Salud de la Nación. enfr 2018 resultados_definitivos.pdf (indec.gob.ar)</a>`,
		`<sup>3</sup> Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.`,
		`<sup>4</sup> <a href="https://www.diabetes.org/resources/ada-what_is_diabetes_flyer-span-r2.pdf" target="_blank">ada-what_is_diabetes_flyer-span-r2.pdf</a>`,
		`<sup>5</sup> Khan RMM, Chua ZJY, Tan JC, Yang Y, Liao Z, Zhao Y. From Pre-Diabetes to Diabetes: Diagnosis, Treatments and Translational Research. Medicina (Kaunas). 2019 Aug 29;55(9):546. doi: 10.3390/medicina55090546. PMID: 31470636; PMCID: PMC6780236.`,
		`<sup>6</sup> <a href="https://www.cdc.gov/vaccines/hcp/adults/downloads/NCIRD-P3_fs_adults_diabetes_sp_4_16_20.pdf" target="_blank">https://www.cdc.gov/vaccines/hcp/adults/downloads/NCIRD-P3_fs_adults_diabetes_sp_4_16_20.pdf</a>`,
		`<sup>7</sup> Kalra S, Chawla A. Herpes zoster and diabetes. J Pak Med Assoc. 2016 Aug;66(8):1042-3. PMID: 27524548.`,
		`<sup>8</sup> Marra F, Parhar K, Huang B, Vadlamudi N. Risk Factors for Herpes Zoster Infection: A Meta-Analysis. Open Forum Infect Dis. 2020 Jan 9;7(1):ofaa005. doi: 10.1093/ofid/ofaa005. PMID: 32010734; PMCID: PMC6984676.`,
		`<sup>9</sup> Jeon, C. Y., & Murray, M. B. (2008). Diabetes Mellitus Increases the Risk of Active Tuberculosis: A Systematic Review of 13 Observational Studies. PLOS Medicine, 5(7), e152. doi:10.1371/journal.pmed.0050152`,
		`<sup>10</sup> Papagiani M et al. Diabetes Ther. 2018:9 515-50`,
		`<sup>11</sup> Muñoz-Quiles C et al. Hum Vaccine Immunother 2017;13: 2606-11`,
		`<sup>12</sup> P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009`,
		`<sup>13</sup> Liesegang, T. J. (2008). Herpes Zoster Ophthalmicus Natural History, Risk Factors, Clinical Presentation, and Morbidity. Ophthalmology, 115(2 Suppl), S3-S12. doi:10.1016/j.ophtha.2007.10.006`,
		`<sup>14</sup> Saadatian-Elahi M, Bauduceau B, Del-Signore C, Vanhems P. Diabetes as a risk factor for herpes zoster in adults: A synthetic literature review. Diabetes Res Clin Pract. 2020 Jan;159:107983. doi: 10.1016/j.diabres.2019.107983. Epub 2019 Dec 14. PMID: 31846665.`
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
