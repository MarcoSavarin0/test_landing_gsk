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
Los riñones son uno de los órganos más importantes del cuerpo y su función es vital para mantener nuestro cuerpo en equilibrio. **A medida que envejecemos, es crucial prestar atención a nuestra salud y cuidar los riñones es fundamental para evitar problemas como enfermedades renales crónicas o insuficiencia renal.<sup>[1]**</sup>
En este artículo, te damos una serie de **consejos para mantener una buena salud renal en la tercera edad.**
##¿Cuál es la importancia de la salud renal en la tercera edad?
La salud renal es fundamental para nuestra calidad de vida. **Los riñones son responsables de filtrar los desechos y las toxinas de nuestro cuerpo, y eliminarlos a través de la orina<sup>[2]</sup>.**
**A medida que envejecemos, la función renal puede disminuir, lo que puede llevar a problemas graves de salud.** Es importante cuidar los riñones a través de hábitos alimentarios y prácticas saludables para evitar este tipo de complicaciones en la tercera edad.<sup>[3]</sup>
##Hábitos alimentarios para una buena salud renal
Los hábitos alimentarios son fundamentales para mantener una buena salud renal en la tercera edad. Para ponerlos en práctica, **es importante reducir el consumo de sodio y de proteínas de origen animal**. En su lugar, se recomienda **consumir alimentos con proteínas magras y preferir lácteos bajos en grasas.<sup>[4]</sup>**
Además, se recomienda **consumir alimentos ricos en antioxidantes, fibras y vitaminas, y limitar el consumo de alimentos procesados, altos en grasas saturadas y azúcares añadidos**<sup>[5]</sup>.
Por último, se debe **evitar el consumo excesivo de alcohol y de bebidas azucaradas como los refrescos, ya que pueden ser perjudiciales para la salud renal**<sup>[6]</sup>. Siguiendo estos consejos y manteniendo una dieta equilibrada y saludable, se puede prevenir la enfermedad renal y mejorar la salud en la tercera edad.
###La importancia de la hidratación para cuidar los riñones en la tercera edad
La hidratación es fundamental para cuidar los riñones en la tercera edad. **Beber suficiente agua ayuda a reducir el riesgo de cálculos renales**. Los adultos mayores deben **asegurarse de beber al menos ocho vasos de agua al día** y evitar el consumo excesivo de alcohol y bebidas azucaradas.<sup>[7]</sup>
##Ejercicio físico y su impacto en la salud renal en adultos mayores
Por su parte, el ejercicio es beneficioso para la salud renal en la tercera edad, porque **ayuda a controlar el peso corporal, lo que es importante ya que la obesidad es un factor de riesgo para la enfermedad renal crónica**. Los adultos mayores deben realizar ejercicio moderado, como caminar, nadar o hacer yoga, al menos 30 minutos al día.<sup>[8]</sup>
##¿Existe algún tipo de relación entre el Herpes Zóster y las enfermedades renales?
En primera instancia, debemos definir ¿[qué es el Herpes Zóster](https://www.hablemosdezoster.com/#que-es-herpes-zoster)?. **Se trata de una afección causada por la reactivación del virus de la varicela-zóster (VZV), cuando el sistema inmunológico se debilita**. Afecta, en su mayoría, a adultos mayores.<sup>[9]</sup>
Los pacientes con enfermedad renal tienen un mayor riesgo de desarrollar Herpes Zóster. Un sistema inmunológico comprometido, como puede suceder en personas con afecciones renales, es un factor de riesgo para la reactivación del VZV.<sup>[10]</sup>
Así, en el contexto de una enfermedad renal, es vital estar alerta a los síntomas del Herpes Zóster para obtener un diagnóstico temprano y evitar complicaciones asociadas.
De esta manera, **mantener una buena salud renal en la edad adulta es fundamental para prevenir enfermedades graves y mejorar nuestra calidad de vida**. Siempre te recomendamos consultar a tu médico y seguir las recomendaciones profesionales ante cualquier duda que tengas sobre tu salud.
 
NP-AR-HZU-WCNT-230016


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
					"title": "Consejos para cuidar los riñones en la tercera edad",
					"image": "Nota31",
					"metatitle": "¿Cómo cuidar los riñones en la tercera edad? | Blog | Hablemos de Zóster",
					"metadescription": "Conocé la importancia de cuidar los riñones en la tercera edad. Seguí estos consejos para prevenir enfermedades renales. ¡Protegé tu cuerpo!¡Cuidá tu salud!",
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
		`<sup>[1] </sup>Anderson S, Halter JB, Hazzard WR, Himmelfarb J, Horne FM, Kaysen GA, Kusek JW, Nayfield SG, Schmader K, Tian Y, Ashworth JR, Clayton CP, Parker RP, Tarver ED, Woolard NF, High KP; workshop participants. Prediction, progression, and outcomes of chronic kidney disease in older adults. J Am Soc Nephrol. 2009 Jun;20(6):1199-209. doi: 10.1681/ASN.2008080860. Epub 2009 May 21. PMID: 19470680.`,

		`<sup>[2]</sup> Fang Y, Gong AY, Haller ST, Dworkin LD, Liu Z, Gong R. The ageing kidney: Molecular mechanisms and clinical implications. Ageing Res Rev. 2020 Nov;63:101151. doi: 10.1016/j.arr.2020.101151. Epub 2020 Aug 22. PMID: 32835891; PMCID: PMC7595250.`,

		`<sup>[3] </sup>Fang Y, Gong AY, Haller ST, Dworkin LD, Liu Z, Gong R. The ageing kidney: Molecular mechanisms and clinical implications. Ageing Res Rev. 2020 Nov;63:101151. doi: 10.1016/j.arr.2020.101151. Epub 2020 Aug 22. PMID: 32835891; PMCID: PMC7595250.`,

		`<sup>[4]</sup> Kwon YJ, Park K, Lee JH. Low-protein diet is inversely related to the incidence of chronic kidney disease in middle-aged and older adults: results from a community-based prospective cohort study. Eur J Nutr. 2022 Oct;61(7):3795-3807. doi: 10.1007/s00394-022-02981-1. Epub 2022 Aug 10. PMID: 35947164.`,

		`<sup>[5] </sup>Picard K, Senior PA, Adame Perez S, Jindal K, Richard C, Mager DR. Low Mediterranean Diet scores are associated with reduced kidney function and health related quality of life but not other markers of cardiovascular risk in adults with diabetes and chronic kidney disease. Nutr Metab Cardiovasc Dis. 2021 May 6;31(5):1445-1453. doi: 10.1016/j.numecd.2021.02.002. Epub 2021 Feb 11. PMID: 33812736.`,


		`<sup>[6] </sup>Zhou Z, Huang Z, Ai G, Guo X, Zeng G, Zhu W. Association between alcohol consumption and kidney stones in American adults: 2007-2016 NHANES. Front Public Health. 2023 Apr 14;11:1156097. doi: 10.3389/fpubh.2023.1156097. PMID: 37124825; PMCID: PMC10140583.`,


		`<sup>[7]</sup> Nakamura Y, Watanabe H, Tanaka A, Yasui M, Nishihira J, Murayama N. Effect of Increased Daily Water Intake and Hydration on Health in Japanese Adults. Nutrients. 2020 Apr 23;12(4):1191. doi: 10.3390/nu12041191. PMID: 32340375; PMCID: PMC7231288.`,


		`<sup>[8]</sup>K. Hiraki, Y. Shibagaki, K.P. Izawa, C. Hotta, A. Wakamiya, T. Sakurada, et al.
		Effects of home-based exercises on pre-dialysis patients: A randomized pilot and feasibility trial. BMC Nephrol, 18 (2017), pp. 198 http://dx.doi.org/10.1186/s12882-017-0613-7 | Medline`,

		`<sup>[9] </sup>Ehrenstein B. Diagnostik, Therapie und Prophylaxe des Herpes zoster [Diagnosis, treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec;79(10):1009-1017. German. doi: 10.1007/s00393-020-00915-y. PMID: 33141244.`,

		`<sup>[10]</sup> Lai SW, Kuo YH, Lin CL, Liao KF. Risk of herpes zoster among patients with predialysis chronic kidney disease in a cohort study in Taiwan. Int J Clin Pract. 2020 Oct;74(10):e13566. doi: 10.1111/ijcp.13566. Epub 2020 Jul 14. PMID: 32479686.`,

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
							</article><div className="w-auto my-5"><Cta title={'INICIAR TEST'} url={`/autotest`} gtm={true} gtmTrackName="Autotest"/></div>


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
