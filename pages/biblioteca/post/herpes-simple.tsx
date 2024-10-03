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

## El Herpes Simple: Tipos, Síntomas y Prevención

El Herpes Simple es una infección viral común, denominada habitualmente como Herpes, que afecta a millones de personas en todo el mundo. Es muy común confundir al Herpes Zóster con el Herpes Simple, sin embargo, la principal diferencia radica en el tipo de virus que los causa y en sus manifestaciones clínicas. 

En esta nota, vamos a explorar en detalle qué es el Herpes Simple, sus tipos, síntomas y prevención.

## ¿Qué es el Herpes Simple?
El Herpes Simple es un virus que pertenece a la familia Herpesviridae, misma familia de virus que el virus que causa el Herpes Zóster, y existen dos tipos: el Herpes Simple tipo 1 (HSV-1) y el Herpes Simple tipo 2 (HSV-2). 

Si bien ambos tipos pueden causar infecciones orales y genitales, el HSV-1 suele estar asociado con el herpes labial, mientras que el HSV-2 se relaciona principalmente con el herpes genital.

## Síntomas del Herpes Simple: ¿cómo reconocerlos?
Las lesiones del herpes generalmente se manifiestan como una o múltiples ampollas en la boca (herpes labial u oral) o en los genitales o el recto (herpes genital). 

Las ampollas se rompen, dejando úlceras dolorosas que pueden demorar una semana o más en sanar. También pueden presentarse síntomas similares a los de la gripe, por ejemplo, fiebre, malestar corporal o inflamación de los ganglios linfáticos. 

Tras la desaparición de los síntomas, tanto el VHS-1 como el VHS-2 permanecen en el organismo en un estado inactivo, aunque pueden reactivarse y provocar síntomas de nuevo.

## ¿Cómo se contagia el Herpes Simple?
El Herpes Simple se propaga principalmente a través del contacto directo con las lesiones de una persona infectada. Esto puede ocurrir durante las relaciones sexuales en el contacto piel a piel.

## Tratamiento del Herpes Simple: ¿cómo controlar los síntomas?
Dado que el virus permanece latente en los ganglios nerviosos, no existe una cura definitiva para el Herpes Simple, se cuenta con tratamientos antivirales que pueden ayudar a reducir la gravedad y la duración de los síntomas. 

Además, el uso de analgésicos y cremas tópicas puede aliviar el dolor y la picazón de las lesiones que el herpes simple provoca en la piel.

## Prevención del Herpes Simple: ¿cómo protegerse?
Para prevenir el contagio del herpes simple, te recomendamos que sigas estas prácticas:

- Evita el contacto directo con las lesiones de personas infectadas.
- Usa preservativos durante las relaciones sexuales.
- No compartas objetos personales como toallas, cepillos de dientes o utensilios de comida.
- Lávate las manos con frecuencia y evita tocar tus ojos, nariz y boca.

El Herpes Simple es una infección viral común que puede causar síntomas incómodos y dolorosos. Aunque no existe una cura, el tratamiento y la prevención adecuados pueden ayudar a controlar los síntomas y reducir el riesgo de propagación del virus. Recordá consultar a un profesional médico para obtener un diagnóstico y tratamiento adecuados.

---

**NP-AR-HZU-WCNT-230005 – Mayo 2023.** 

Para mayor información consulte a su médico.GSK Biopharma Argentina S.A. Av del Libertador 7202, Piso 4, CABA, Buenos Aires, Argentina. Para consultas sobre nuestros productos, consultas de calidad o reporte de eventos adversos puede comunicarse al 0800-222-4752.


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
					"title": "Herpes Simple: todo lo que necesitas saber sobre este virus",
					"image": "herpes-simple",
					"metatitle": "¿Qué es el Herpes Simple? ",
					"metadescription": "¿Sabías que muchas personas confunden al Herpes Zóster con el Herpes Simple? Descubrí todo sobre el Herpes Simple: tipos, síntomas, tratamientos y prevención. ",
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
		"Omarova S, Cannon A, Weiss W, Bruccoleri A, Puccio J. Genital Herpes Simplex Virus-An Updated Review. Adv Pediatr. 2022 Aug; 69(1):149-162. doi: 10.1016/j.yapd.2022.03.010. Epub 2022 Jun 21. PMID: 35985707.",
		"Välimaa H, Seppänen M, Hukkanen V. Herpes simplex-virusinfektioiden nykykuva ja hoito [Herpes simplex]. Duodecim. 2013;129(1):31-40. Finnish. PMID: 23431880."
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