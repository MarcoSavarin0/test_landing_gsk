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



El Impétigo es una infección de la piel bastante común, especialmente en niños y jóvenes, aunque también puede afectar a adultos. Esta afección, que suele ser superficial y de rápida propagación, es provocada principalmente por dos tipos de bacterias: el estafilococo y el estreptococo. En este artículo, te contaremos todo lo que necesitas saber sobre el Impétigo, sus síntomas y cómo reconocerlo. Recordá consultar con tu médico ante cualquier duda para obtener información y un diagnóstico adecuado.

## Causas del Impétigo

El Impétigo se produce cuando las bacterias, ya sean estafilococos o estreptococos, encuentran una entrada en la piel. Este ingreso puede ser a través de: 
- Lesiones en la piel: Las bacterias que causan el impétigo generalmente ingresan a la piel a través de un pequeño corte, herida, una picadura de insecto, un sarpullido o áreas de la piel previamente afectadas por otras condiciones como eccema o dermatitis.
- Contacto directo: El impétigo puede propagarse a través del contacto directo con una persona infectada o por objetos contaminados, como toallas, ropa o juguetes, también por participar en deportes en los que hay contacto de piel a piel.
- Otras afecciones médicas: Las personas mayores, los diabéticos o las personas que tienen el sistema inmunitario debilitado también son más propensos a contraerlo.

Formas en las que se presenta la enfermedad:
- Ampollas o pústulas: Son pequeñas vesículas llenas de pus que suelen aparecer alrededor de la nariz, la boca, las manos y los brazos. Las ampollas pueden ser de diferentes tamaños y, a medida que se rompen, liberan un líquido amarillento que forma costras de color miel o marrón.
- Lesiones eritematosas: Estas lesiones son áreas planas y enrojecidas en la piel que pueden ser sensibles al tacto y provocar picazón. Con el tiempo, las lesiones pueden volverse más grandes, dejando áreas extensas de piel enrojecida e irritada.
- Descamación y formación de úlceras: En algunos casos, la piel afectada puede comenzar a descamarse y formar úlceras poco profundas.

## Síntomas del Impétigo

Los síntomas del impétigo varían según la forma y la gravedad de la infección. A continuación, los detallamos de manera más específica:
- Dolor y prurito: El Impétigo puede causar molestias y picazón en la zona afectada. Es importante no rascar las lesiones para evitar la propagación de la infección y la aparición de cicatrices.
- Fiebre: Aunque no es un síntoma común, algunas personas con Impétigo pueden experimentar fiebre, especialmente en casos más graves o si la infección se disemina a otras partes del cuerpo.
- Ganglios linfáticos inflamados: Los ganglios linfáticos cercanos a las lesiones pueden inflamarse y volverse sensibles al tacto como resultado de la infección.

## Prevención del Impétigo

Para prevenir el Impétigo, es importante mantener una buena higiene personal y lavar las heridas o raspaduras con agua y jabón para evitar que las bacterias ingresen en la piel. También se recomienda no compartir toallas, ropa de cama o elementos de uso personal con personas infectadas. Además, es importante no rascarse las lesiones para evitar la propagación de la infección a otras áreas del cuerpo o a otras personas y fomentar el lavado de manos regular y a consciencia, y la buena higiene en general.

## Relación entre el Impétigo y el Herpes Zóster

El Impétigo y el Herpes Zóster son dos afecciones de la piel, y aunque pueden parecer similares, tienen algunas diferencias fundamentales. La principal diferencia entre el Impétigo y el Herpes Zóster radica en la causa. El Impétigo es causado por bacterias (generalmente estafilococos o estreptococos), mientras que el Herpes Zóster es causado por la reactivación del virus varicela-zóster, el mismo virus responsable de la varicela.

Otra de las diferencias entre ambas afecciones es que el Impétigo es más común en niños, aunque también puede afectar a adultos, y se propaga fácilmente a través del contacto cercano y objetos contaminados. El Herpes Zóster afecta con mayor frecuencia a personas mayores de 50 años o a aquellas con un sistema inmunológico debilitado.

Por otra parte, ambas afecciones provocan lesiones en la piel, pero son distintas. En el Impétigo, se observan ampollas y pústulas que por lo general se observan alrededor de la nariz o la boca, aunque pueden aparecer en otras partes del cuerpo. Éstas contienen un líquido y cuando se rompen forman costras color miel o marrón. 

Otra diferencia entre estas afecciones es que el Impétigo puede afectar diversas áreas del cuerpo, como la cara, las manos y los brazos, y suele aparecer en áreas donde la piel se ha lesionado debido a cortes, raspaduras o picaduras de insectos. 

Por su parte, en el Herpes Zóster, las lesiones se presentan como un sarpullido rojo con ampollas llenas de líquido que también pueden romperse y formar costras. A su vez, el Herpes Zóster aparece en un área específica del cuerpo siguiendo el recorrido de un nervio, lo que se conoce como dermatoma. El Herpes Zóster es común en el tronco y la cara, y las lesiones suelen ser unilaterales (solo en un lado del cuerpo).

Aunque el Impétigo y el Herpes Zóster son diferentes en términos de causa, apariencia y tratamiento, ambas son afecciones cutáneas que pueden causar molestias y requerir atención médica. Si sospechás que vos o alguien cercano tiene Impétigo o Herpes Zóster, consultá a un especialista para recibir el diagnóstico y el tratamiento adecuado.

**NP-AR-HZU-WCNT-230014**



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
					"title": "¿Qué es el Impétigo y cuáles son sus síntomas?",
					"image": "que-es-impetigo",
					"metatitle": "Impétigo: qué es y cuáles son sus síntomas ",
					"metadescription": " Descubrí qué es el Impétigo, cuáles son sus síntomas y sus causas. ¡Informate y aprendé a cuidar tu salud!",
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
		"May PJ, Tong SYC, Steer AC, Currie BJ, Andrews RM, Carapetis JR, Bowen AC. Treatment, prevention and public health management of impetigo, scabies, crusted scabies and fungal skin infections in endemic populations: a systematic review. Trop Med Int Health. 2019 Mar;24(3):280-293. doi: 10.1111/mi.13198. Epub 2019 Jan 28. PMID: 30582783; PMCID: PMC6850630.",
		"Bryant AE, Stevens DL. Streptococcus pyogenes. In Bennett J, Dolin R, Blaser M, editors. 8th Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases. Philadelphia (PA): Elsevier; 2015:2:2285-300.",
		"Ehrenstein B. Diagnostik, Therapie und Prophylaxe des Herpes zoster [Diagnosis, treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec;79(10):1009-1017. German. doi: 10.1007/00393-020-00915-y. PMID: 33141244.",
		"Bryant AE, Stevens DL. Streptococcus pyogenes. In Bennett J, Dolin R, Blaser M, editors. 8th Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases. Philadelphia (PA): Elsevier; 2015:2:2285-300.",
		"Ehrenstein B. Diagnostik, Therapie und Prophylaxe des Herpes zoster [Diagnosis, treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec; 79(10):1009-1017. German. doi: 10.1007/500393-020-00915-y. PMID: 33141244.",
		"Bryant AE, Stevens DL. Streptococcus pyogenes. In Bennett J, Dolin R, Blaser M, editors. 8th Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases. Philadelphia (PA): Elsevier; 2015:2:2285-300.",
		"Ehrenstein B. Diagnostik, Therapie und Prophylaxe des Herpes zoster [Diagnosis, treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec; 79(10): 1009-1017. German. doi: 10.1007/s00393-020-00915-y. PMID: 33141244."
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
							</article>							<div>
								<div className="mb-8">
									<Botoninformacion />
								</div>
								<div className="w-auto my-5">
									<Cta title={'INICIAR TEST'} url={`/autotest`} gtm={true} gtmTrackName="Autotest"/>
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