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
La varicela es una enfermedad muy común y altamente contagiosa que suele afectar a niños y adultos en algún momento de sus vidas. Aunque es generalmente benigna, en algunos casos puede presentar complicaciones graves 

Esta afección está íntimamente relacionada con el Herpes Zóster. Aunque las enfermedades presentan síntomas diferentes y afectan a las personas en diferentes etapas de la vida, comparten un vínculo común debido a su origen viral.

En este artículo, abordaremos qué es la varicela, sus síntomas, posibles complicaciones y cómo se relaciona con el Herpes Zóster.

## ¿Qué es la varicela y cuál es su origen?
La varicela es una enfermedad infecciosa causada por el virus varicela-zóster (VVZ), que pertenece a la familia de los herpesvirus. Esta enfermedad es muy común en la infancia, aunque también puede afectar a adultos. 

La varicela se propaga de persona a persona a través del contacto con las lesiones cutáneas, la saliva o el aire, especialmente cuando alguien infectado tose o estornuda. Este contagio ocurre desde uno a dos días antes de la erupción y durante toda la forma vesiculosa. Termina el periodo de diseminación del virus cuando el paciente presenta todas las lesiones en etapa costrosa.

##Signos y síntomas de la varicela
Los síntomas de la varicela suelen aparecer entre 10 y 21 días después de la exposición al virus. Algunos de los síntomas más frecuentes :
- Erupciones cutáneas: la varicela se caracteriza por la aparición de pequeñas ampollas llenas de líquido que, al cabo de unos días, se secan y forman costras. Estas erupciones pueden aparecer a raíz de brotes y aparecer en oleadas durante varios días.
- Fiebre: suele ser el primer síntoma de la varicela y puede variar desde leve hasta alta.
- Cansancio.
- Pérdida de apetito: puede ser un síntoma temprano de la enfermedad y generalmente precede a la aparición de las erupciones.

## ¿Qué complicaciones puede ocasionar la varicela?
Aunque la varicela es generalmente una enfermedad leve, en algunos casos puede causar complicaciones, especialmente en personas con sistemas inmunológicos debilitados, adultos y mujeres embarazadas. Algunas de estas complicaciones incluyen:
- Infecciones bacterianas: las lesiones cutáneas pueden infectarse con bacterias, lo que puede conducir a celulitis, impétigo o incluso septicemia.
- Neumonía: la infección por varicela puede extenderse a los pulmones, causando neumonía, una inflamación del tejido pulmonar.
- Encefalitis: en casos raros, la varicela puede causar inflamación del cerebro, conocida como encefalitis, lo que puede provocar convulsiones, pérdida de conciencia o incluso daño cerebral permanente.
- Problemas durante el embarazo: las mujeres embarazadas que contraen varicela tienen un mayor riesgo de complicaciones para ellas y sus bebés, como parto prematuro, bajo peso al nacer o malformaciones congénitas.

## ¿Qué relación tiene la varicela con el Herpes Zóster?
La varicela y el Herpes Zóster están estrechamente relacionados porque ambos son causados por el mismo virus: el virus varicela-zóster (VVZ). Aunque las enfermedades presentan distintos síntomas y afectan a las personas en diferentes momentos, comparten un vínculo común debido a su origen viral.

La varicela es la infección primaria causada por el VVZ y, como mencionamos anteriormente, suele afectar a niños y adultos que no han sido vacunados ni han tenido contacto con el virus previamente. 

Después de la infección inicial con el VVZ, el virus queda latente en el organismo. Es decir que queda inactivo en las células nerviosas y puede reactivarse años o incluso décadas más tarde, causando Herpes Zóster, también conocido como culebrilla. 

Por su parte, el Herpes Zóster se manifiesta como una erupción dolorosa, con ampollas que generalmente aparece en un área específica de la piel, siguiendo el trayecto de un nervio. 

El Herpes Zóster puede ser más grave que la varicela y causar complicaciones a largo plazo, como la neuralgia posherpética. El riesgo de desarrollar Herpes Zóster aumenta con la edad, especialmente en personas mayores de 50 años, y en aquellos con sistemas inmunológicos debilitados. 

Si presentas algún síntoma relacionado a la varicela o al Herpes Zóster, no dudes en consultar con tu médico o médica para recibir el tratamiento adecuado.

NP-AR-HZU-WCNT-230003

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
					"title": "¿Qué es la varicela y cuáles son sus síntomas?",
					"image": "varicela-sintomas",
					"metatitle": "¿Qué afecciones en la piel puede producir el Herpes Zóster?",
					"metadescription": "¿Sabías que la varicela y el Herpes Zóster son dos enfermedades producidas por el mismo virus? Ingresá e informate sobre esta infección que afecta a millones de personas en el mundo.",
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
		"Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30",
		"P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009",
		"P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009"
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