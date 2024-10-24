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

**El Herpes Zóster es una afección que impacta no sólo por su erupción característica y el dolor asociado sino también por las consecuencias a largo plazo que puede generar.** Estas secuelas varían de una persona a otra y pueden persistir incluso después de que la enfermedad se haya resuelto.<sup>[1]</sup>
En este artículo veremos cuáles son esas secuelas y cómo pueden afectar la vida diaria de quienes las padecen.

## Posibles secuelas del Herpes Zoster

El Herpes Zóster, llamado también culebrilla, es causado por la reactivación del Virus Varicela Zóster. Aunque muchas personas lo identifican principalmente con una erupción cutánea, sus efectos pueden extenderse más allá de las manifestaciones en la piel. De hecho, **sus secuelas pueden influir en las actividades diarias, la movilidad y otras funciones físicas, complicando la rutina de quienes lo padecen.**<sup>[2]</sup>

A continuación detallamos algunas de las secuelas que pueden aparecer.

### Neuralgia Postherpética (NPH)

La Neuralgia Postherpética (NPH) es un dolor neurálgico que persiste después de que la erupción se haya curado. La NPH puede durar de tres a seis meses, o incluso persistir por más tiempo. Suele ser más común y grave en personas mayores que en personas más jóvenes. Después de los 50 años, hasta un 30% de los pacientes con Herpes Zóster desarrollarán Neuralgia Postherpética.<sup>[3]</sup>

### Trastornos de la visión

Ocurre cuando el virus infecta el nervio facial causando erupciones en la frente y una inflamación dolorosa en los tejidos. Las secuelas prolongadas o permanentes del Herpes Zóster Oftálmico pueden dar lugar a pérdida de visión.<sup>[4]</sup>

### Lesiones en la piel

Aunque la erupción del Herpes Zóster suele sanar en unas pocas semanas, **en algunos casos puede dejar cicatrices o cambios de pigmentación en la piel.**<sup>[5]</sup>

## Otras complicaciones

Como consecuencia del Herpes Zóster, se pueden presentar, además, complicaciones en el sistema nervioso periférico y central, así como complicaciones cardiovasculares. A largo plazo, dichas consecuencias pueden generar un impacto negativo en la calidad de vida de los pacientes.<sup>[6]</sup>

## ¿Cómo manejar las secuelas del Herpes Zóster?

Es fundamental abordar las secuelas del Herpes Zóster para mejorar la calidad de vida del paciente. **Las repercusiones pueden variar en cada individuo y, a menudo, van más allá del dolor o las lesiones visibles.**<sup>[7]</sup> Algunas consideraciones incluyen:

- Monitorear y evaluar regularmente el nivel de dolor, para adaptar el manejo del mismo.<sup>[8]</sup>
- Realizar revisiones oftalmológicas si se presentan problemas visuales.<sup>[9]</sup>
- Estar atento a cualquier signo de complicaciones neurológicas.<sup>[10]</sup>
- Consultar al médico sobre cuidados de la piel para minimizar el riesgo de infecciones o cicatrices.<sup>[11]</sup>

## ¿Cómo prevenir las secuelas más graves del Herpes Zoster?

La prevención es un pilar fundamental en el manejo del Herpes Zóster. Mientras más pronto se detecte y trate esta afección, menores serán las posibilidades de desarrollar secuelas. Es esencial estar informado y atento a los síntomas iniciales, que a menudo incluyen dolor o ardor en una zona específica de la piel antes de que aparezca la erupción.<sup>[12]</sup>

Quienes hayan tenido varicela en el pasado deben estar atentos a la posibilidad de desarrollar Herpes Zóster. Por eso, es importante conocer que ambas enfermedades son causadas por el mismo virus, el Virus Varicela Zóster.<sup>[13]</sup>

Después de que una persona se recupera de la varicela, el virus permanece inactivo en el cuerpo y puede reactivarse años después en forma de Herpes Zóster. Esta reactivación suele estar acompañada de síntomas más severos y complicaciones, de ahí la importancia de reconocer los signos y síntomas tempranos y buscar atención médica.<sup>[14]</sup>

Finalmente, mantener un sistema inmunológico fuerte y saludable también puede desempeñar un papel en la prevención de las secuelas más graves del Herpes Zóster. Un estilo de vida saludable, con una dieta equilibrada y ejercicio regular, puede ser de gran ayuda.<sup>[15]</sup>

**Las secuelas del Herpes Zóster pueden variar en gravedad y duración.** Sin embargo, con el conocimiento adecuado y una consulta médica temprana, es posible minimizar su impacto en la vida diaria.<sup>[16]</sup>

Si vos o alguien que conocés sospecha estar desarrollando Herpes Zóster, no duden en consultar con su médico o médica de confianza.


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
				"id": 36,
				"attributes": {
					"title": "¿Cuáles son las secuelas del Herpes Zoster?",
					"image": "N-36",
					"metatitle": "¿Cuáles son las secuelas del Hérpes Zóster? | Blog | Hablemos de Zóster",
					"metadescription": "Conocé las secuelas del Herpes Zóster. Descubrí cómo puede afectar a tu salud más allá de la erupción cutánea. ¡Aprendé a cuidarte!",
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
		`<sup>1</sup> Bardach AE, Palermo C, Alconada T, Sandoval M, Balan DJ, Nieto Guevara J, Gómez J, Ciapponi A. Herpes zoster epidemiology in Latin America: A systematic review and meta-analysis. PLoS One. 2021 Aug 12;16(8):e0255877. doi: 10.1371/journal.pone.0255877. PMID: 34383851; PMCID: PMC8360515.`,
        
		`<sup>2</sup> Dayan RR, Peleg R. Herpes zoster - typical and atypical presentations. Postgrad Med. 2017 Aug;129(6):567-571. doi: 10.1080/00325481.2017.1335574. Epub 2017 Jun 5. PMID: 28540752.`,
        
		`<sup>3</sup> Saguil A, Kane S, Mercado M, Lauters R. Herpes Zoster and Postherpetic Neuralgia: Prevention and Management. Am Fam Physician. 2017 Nov 15;96(10):656-663. PMID: 29431387.`,
        
		`<sup>4</sup> Davis AR, Sheppard J. Herpes Zoster Ophthalmicus Review and Prevention. Eye Contact Lens. 2019 Sep;45(5):286-291. doi: 10.1097/ICL.0000000000000591. PMID: 30844951.`,
        
		`<sup>5</sup> Gupta S, Gupta S, Aggarwal K, Jain VK. Necrodestructive herpes zoster. Indian J Dermatol. 2012 Mar;57(2):136-7. doi: 10.4103/0019-5154.94286. PMID: 22615514; PMCID: PMC3352639.`,
        
		`<sup>6</sup> Alvarez JC, Alvarez J, Tinoco J, Mellado P, Miranda H, Ferrés M, Forero J, Álvarez C. Varicella-Zoster Virus Meningitis and Encephalitis: An Understated Cause of Central Nervous System Infections. Cureus. 2020 Nov 20;12(11):e11583. doi: 10.7759/cureus.11583. PMID: 33364107; PMCID: PMC7749804.`,
        
		`<sup>7</sup> Dworkin RH, Johnson RW, Breuer J, Gnann JW, Levin MJ, Backonja M, Betts RF, Gershon AA, Haanpaa ML, McKendrick MW, Nurmikko TJ, Oaklander AL, Oxman MN, Pavan-Langston D, Petersen KL, Rowbotham MC, Schmader KE, Stacey BR, Tyring SK, van Wijck AJ, Wallace MS, Wassilew SW, Whitley RJ. Recommendations for the management of herpes zoster. Clin Infect Dis. 2007 Jan 1;44 Suppl 1:S1-26. doi: 10.1086/510206. PMID: 17143845.`,
        
		`<sup>8</sup> Patil A, Goldust M, Wollina U. Herpes zoster: A Review of Clinical Manifestations and Management. Viruses. 2022 Jan 19;14(2):192. doi: 10.3390/v14020192. PMID: 35215786; PMCID: PMC8876683.`,
        
		`<sup>9</sup> Davis AR, Sheppard J. Herpes Zoster Ophthalmicus Review and Prevention. Eye Contact Lens. 2019 Sep;45(5):286-291. doi: 10.1097/ICL.0000000000000591. PMID: 30844951.`,
        
		`<sup>10</sup> Nagel MA, Gilden D. Neurological complications of varicella zoster virus reactivation. Curr Opin Neurol. 2014 Jun;27(3):356-60. doi: 10.1097/WCO.0000000000000092. PMID: 24792344; PMCID: PMC4189810.`,
        
		`<sup>11</sup> Bader MS. Herpes zoster: diagnostic, therapeutic and preventive approaches. Postgrad Med. 2013 Sep;125(5):78-91. doi: 10.3810/pgm.2013.09.2703. PMID: 24113666.`,
        
		`<sup>12</sup> Bader MS. Herpes zoster: diagnostic, therapeutic and preventive approaches. Postgrad Med. 2013 Sep;125(5):78-91. doi: 10.3810/pgm.2013.09.2703. PMID: 24113666.`,
        
		`<sup>13</sup> Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.`,
        
		`<sup>14</sup> Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.`,
        
		`<sup>15</sup> Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.`,
        
		`<sup>16</sup> Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.`,
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

							<div>
								<div className="mb-8">
									<Botoninformacion />
								</div>
								<div className="w-auto my-5">
									<Cta title={'INICIAR TEST'} url={`/autotest`} gtm={true} gtmTrackName="Autotest"/>
								</div>
								<div>
									<span className="markdown-body">NP-AR-HZU-WCNT-230018</span>
								</div>
								<CollapsibleList list={list} />
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
