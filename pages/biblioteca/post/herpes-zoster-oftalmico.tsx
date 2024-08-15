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

const DynamicSpeechBlog = dynamic(() => import('@/components/blog/SpeechBlog'), {
	ssr: false,
})


const info = `
El Virus Varicela Zóster es el causante del Herpes Zóster, una infección viral que produce una erupción dolorosa en la piel. Una de sus complicaciones es el Herpes Zóster Oftálmico que, en el peor de los casos, puede derivar en una pérdida parcial o total de la visión.

En esta nota, veremos cuáles son los síntomas del Herpes Zóster Oftálmico, quiénes son más propensos a contraerlo y qué posibles tratamientos se pueden llevar a cabo.

Si pensás que estás sufriendo esta enfermedad, no dudes en consultar a tu médico o médica.
## ¿Qué es el Herpes Zóster Oftálmico?
El Herpes Zóster Oftálmico es una complicación del virus del Herpes Zóster que afecta al nervio trigémino, uno de los nervios craneales que se ubica en la cara y la región ocular.
Se manifiesta mediante una erupción cutánea dolorosa en la frente, el cuero cabelludo, la nariz y el ojo, lo que puede provocar una serie de síntomas oculares graves que pueden afectar la vista. 
Es una afección que se presenta en hasta un 25%  de las personas que desarrollan esta enfermedad y debe ser tratada lo antes posible. Si identificás alguno de sus síntomas en tu cuerpo, acudí a tu médico o médica. 
## 8 síntomas del Herpes Zóster Oftálmico
El Herpes Zóster Oftálmico se presenta en una variedad de síntomas que incluyen: 
- Dolor intenso y punzante en la frente y alrededor del ojo.
- Sensación de ardor y enrojecimiento ocular.
- Inflamación de la córnea, también conocida como queratitis.
- Disminución de la visión, y en algunos casos una necrosis retiniana seguida de pérdida de la visión.
- Lagrimeo.
- Ampollas y costras en la piel de la frente y la nariz.
- Fotofobia (sensibilidad a la luz).
- Escleritis.

## ¿Qué población está considerada como factor de riesgo del Herpes Zóster Oftálmico?
El Herpes Zóster Oftálmico puede desarrollarse cuando las lesiones se producen en la cara. El riesgo de desarrollar Herpes Zóster aumenta con la edad, aunque otros factores que pueden aumentar el riesgo incluyen:
- El estrés.
- El debilitamiento del sistema inmunológico.
- Ciertas enfermedades crónicas.

## Prevención del Herpes Zóster Oftálmico
Se recomienda consultar con el profesional de salud de cabecera para conocer las opciones de prevención y tratamiento del Herpes Zóster y, consecuentemente, evitar su complicación  oftálmica. 

NP-AR-HZU-WCNT-230001






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
					"title": "Herpes Zóster Oftálmico: ¿qué es y cuáles son sus síntomas?",
					"image": "herpes-zoster-oftalmico",
					"metatitle": "¿Qué es el Herpes Zóster Oftálmico?",
					"metadescription": "¿Sabías que el Herpes Zóster puede comprometer el ojo y producir un Herpes Zóster Oftálmico? Ingresá e informate sobre esta complicación del virus.",
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
		"1 Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30.",
		"2 Centros de Control y Prevención de Enfermedades. MMWR. 2008 Jun;57(RR-5):1-30.",
		"3 Kawai K, Gebremeskel BG, Acosta CJ. Systematic review of incidence and complications of herpes zoster: towards a global perspective. BMJ Open. 2014.",
		"4 Centros de Control y Prevención de Enfermedades. MMWR. 2008 Jun;57(RR-5):1-30.",
		"5 Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30",
		"6 S Sanjay, P Huang, R Lavanya - Current treatment options in neurology, 2011",
		"7 Marra F, Parhar K, Huang B, Vadlamudi N. Risk Factors for Herpes Zoster Infection: A Meta-Analysis. Open Forum Infect Dis. 2020;7(1):ofaa005.",
		"8 Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30",
		"9 P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009",
		"10 Johnson RW, Bouhassira D, Kassianos G, Leplège A, Schmader KE, Weinke T. The impact of herpes zoster and post-herpetic neuralgia on quality-of-life. BMC Med. 2010;8:37. Published 2010 Jun 21. doi:10.1186/1741-7015-8-37",
		"11 P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009",
		"12 Grupo de Trabajo de Vacunación frente al Herpes Zóster (GT-HZ) de la Ponencia de programa y Registro de Vacunaciones.",
		"13 P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009",
		"14 p Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009.",
		"15 5J Stankus, M Dlugopolski, D Packer - American family physician, 2000.",
		"16 Massengill JS, Kittredge JL. Practical considerations in the pharmacological treatment of postherpetic neuralgia for the primary care provider. J Pain Res. 2014;7:125-132. Published 2014 Mar 10. doi:10.2147/JPR.S57242.",
		"17 P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009.",
		"18 Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30."
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