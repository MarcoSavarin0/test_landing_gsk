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

# Todo lo que Necesitas Saber sobre el Impétigo

El Impétigo es una infección cutánea común que afecta principalmente a niños y jóvenes, causada por bacterias como el estafilococo y el estreptococo. Aquí te proporcionamos información detallada sobre sus causas, síntomas, formas de presentación y prevención.

## Causas del Impétigo

El Impétigo se produce cuando las bacterias ingresan a la piel a través de lesiones, contacto directo con personas infectadas u objetos contaminados, o en personas con sistemas inmunológicos debilitados.

## Formas en que se presenta la enfermedad

- **Ampollas o Pústulas:** Vesículas llenas de pus alrededor de la nariz, la boca, las manos y los brazos, que forman costras al romperse.
- **Lesiones Eritematosas:** Áreas planas y enrojecidas en la piel que pueden crecer con el tiempo.
- **Descamación y Úlceras:** La piel afectada puede descamarse y formar úlceras poco profundas.

## Síntomas del Impétigo

- **Dolor y Picazón:** Molestias y comezón en la zona afectada.
- **Fiebre:** Algunas personas pueden experimentar fiebre, especialmente en casos graves.
- **Ganglios Linfáticos Inflamados:** Inflamación y sensibilidad en los ganglios linfáticos cercanos.

## Prevención del Impétigo

- **Buena Higiene Personal:** Lavar heridas con agua y jabón.
- **Evitar Contacto Directo:** No compartir objetos personales y evitar rascarse las lesiones.
- **Lavado de Manos Regular:** Promover una buena higiene en general.

## Relación entre el Impétigo y el Herpes Zóster

El Impétigo y el Herpes Zóster son afecciones cutáneas distintas en términos de causa, apariencia y tratamiento. Mientras que el Impétigo es causado por bacterias, el Herpes Zóster es resultado de la reactivación del virus varicela-zóster. Ambas condiciones pueden causar molestias y requerir atención médica, por lo que es importante buscar un diagnóstico y tratamiento adecuados si se sospecha de su presencia.


NP-AR-HZU-WCNT-230014




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
						<article className="flex flex-col flex-1 gap-y-4">
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
						<aside className="md:w-2/12 mt-10 border-l-0 lg:border-l pl-0 lg:pl-6 h-fit pb-4 space-y-8">
							<div className="space-y-2">
								<h3 className="text-lg md:text-xl text-gsk-orange">Categorías</h3>
								<ul className="flex flex-row lg:flex-col gap-4 flex-nowrap lg:flex-wrap">
									<li>
										{/* <CategoryButton title={categoria.data.attributes.title} slug={categoria.data.attributes.slug} param={`categoria`}/> */}
									</li>
								</ul>
							</div>
							<div className="space-y-2">
								<h3 className="text-lg md:text-xl text-gsk-orange">Tags</h3>
								<ul className="flex flex-row lg:flex-col gap-4 flex-nowrap lg:flex-wrap">
									<li>
										{/* <CategoryButton title={tags.data[0].attributes.tag} slug={tags.data[0].attributes.slug} param={`tags`}/> */}
									</li>
								</ul>
							</div>
						</aside>
					</div>
				</div>
				<Banner />
			</>
		</>
	)
}

export default Blog