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

# Virus del Herpes Humano: Tipos, Síntomas y Prevención

La familia de virus del herpes humano (HHV) causa varias infecciones comunes en la población. Cada tipo tiene características y manifestaciones clínicas específicas, conocerlas es esencial para identificar los síntomas y buscar atención médica adecuada. En esta nota, te contamos acerca de las 6 enfermedades más importantes de esta familia de virus:

## 1. Virus del Herpes Simple Tipo 1 (VHS-1)
- **Causa**: Infecciones orales, como el herpes labial.
- **Transmisión**: Contacto cercano con una persona infectada.
- **Síntomas**: Ampollas o úlceras dolorosas en la boca o alrededor de los labios.

## 2. Virus del Herpes Simple Tipo 2 (VHS-2)
- **Causa**: Herpes genital, transmitido sexualmente.
- **Transmisión**: Contacto sexual, incluido sexo oral, vaginal y anal.
- **Síntomas**: Lesiones ampollares o ulceradas en el área genital o anal.

## 3. Virus de la Varicela-Zóster (VVZ)
- **Causa**: Varicela y Herpes Zóster.
- **Síntomas**: Sarpullido doloroso y vesículas en un área específica del cuerpo.

## 4. Virus de Epstein-Barr (VEB)
- **Causa**: Mononucleosis infecciosa.
- **Transmisión**: Principalmente a través de la saliva.
- **Síntomas**: Fiebre, inflamación de ganglios linfáticos, fatiga, dolor de garganta.

## 5. Citomegalovirus (CMV)
- **Causa**: Síntomas similares a la mononucleosis en algunas personas.
- **Transmisión**: Contacto cercano, transfusiones de sangre, trasplantes de órganos, de madre a hijo durante el embarazo.
- **Síntomas**: Pueden ser asintomáticos o causar enfermedades graves en personas inmunodeprimidas.

## 6. Herpesvirus Humano Tipo 6 (HHV-6)
- **Causa**: Roséola infantil.
- **Síntomas**: Fiebre alta seguida de erupción cutánea rosa o roja.

Estar informados acerca de estas enfermedades nos permite identificar los signos y síntomas tempranos, buscar atención médica adecuada y prevenir la transmisión del virus. Si experimentas síntomas, es crucial consultar con un equipo médico para recibir el diagnóstico y tratamiento adecuados.

**NP-AR-HZU-WCNT-230006**





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
					"title": "Enfermedades causadas por los Virus de la familia del Herpes Humano, ¿cómo identificarlas?",
					"image": "tipos-de-herpes",
					"metatitle": "¿Qué enfermedades provocadas por el virus del Herpes existen?",
					"metadescription": "¿Sabías que el herpes simple y el herpes zoster pertenecen a una familia de virus que tienen algunas similitudes, pero también varias diferencias? Te lo contamos en esta nota. ",
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
		"STD Facts - Genital Herpes (cdc.gov)",
		"Mathew Jr J, Sapra A. Herpes Simplex Type 2. 2022 Aug 8. In: StatPearls [Internet]. Treasure Island (FL): StatPearls Publishing; 2023 Jan-. PMID: 32119314.",
		"CDC STD Facts - Genital Herpes (cdc.gov)",
		"Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):[TC12-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.",
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