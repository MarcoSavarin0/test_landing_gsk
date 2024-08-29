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

**El Herpes Zóster, también conocido como culebrilla, es una afección que suscita muchas preguntas, especialmente en cuanto a su transmisión y los cuidados que se deben tener.** Si bien no requiere aislamiento, es fundamental entender cuándo y por qué es recomendable que una persona con Herpes Zóster evite el contacto cercano con ciertos grupos de riesgo.

En este artículo abordaremos las situaciones específicas en las que se debe ser cauteloso al interactuar con otros, especialmente con aquellos que podrían estar en mayor riesgo si se exponen al virus.

## Entendiendo el riesgo asociado al Herpes Zóster

El Herpes Zóster se produce debido a la reactivación del virus varicela-zóster, el mismo virus que causa la varicela. Esto significa que una persona que previamente padeció varicela puede, en un momento posterior de su vida, experimentar una infección de Herpes Zóster. Es importante aclarar que lo contagioso no es la enfermedad en sí denominada Herpes Zóster, sino el virus que la origina.<sup>[1]</sup>

Cuando alguien presenta lesiones activas de Herpes Zóster, tiene la capacidad de transmitir el virus varicela-zóster. Si alguien que no ha tenido varicela entra en contacto con las lesiones de la persona que tiene Herpes Zóster, puede contagiarse de varicela.<sup>[2]</sup>

Por lo tanto, aunque no se recomienda un aislamiento como tal, es prudente que las personas con Herpes Zóster eviten el contacto cercano con personas que no han tenido varicela, con mujeres embarazadas y con personas con sistemas inmunológicos debilitados.<sup>[3]</sup>

La contagiosidad se produce a través del contacto directo con el líquido de las ampollas del sarpullido. Las personas con culebrilla no pueden propagar el virus antes de que aparezcan ampollas o después de que el sarpullido se convierta en costras.<sup>[4]</sup>

## Cuidados recomendados para quienes tienen Herpes Zóster

Si bien la culebrilla no requiere de un aislamiento, existen ciertos cuidados que son recomendables adoptar.<sup>[5]</sup> A continuación te brindamos algunos detalles para que te guíes en estos casos:

- **Cubrir las lesiones:** Si las lesiones están en áreas que pueden cubrirse, como el torso o las piernas, hacerlo puede ayudar a reducir el riesgo de transmisión del virus.
- **Duración de los cuidados:** Se aconseja mantener las precauciones hasta que todas las lesiones hayan formado costras, lo que generalmente sucede entre 7 a 10 días después de la aparición de la erupción.<sup>[6]</sup>
- **Higiene:** Practicar una buena higiene de manos es esencial. Las manos deben lavarse regularmente, especialmente después de tocar las lesiones o cambiar las vendas.<sup>[7]</sup>

## Recomendaciones para el día a día con Herpes Zóster

Realizar las actividades cotidianas mientras se tienen cuidados específicos debido al Herpes Zóster es posible siguiendo algunos consejos prácticos:<sup>[8]</sup>

- **Planificación:** Intenta limitar las salidas de casa mientras las lesiones están activas y puedan contagiar.
- **Comunicación:** Informa a tu familia y amigos cercanos sobre tu situación para que puedan brindarte apoyo, ya sea ayudándote con las compras o simplemente entendiendo tu ausencia en eventos o reuniones.
- **Higiene:** Asegúrate de mantener limpias las lesiones, cambiar regularmente las vendas y lavarte las manos con frecuencia.
- **Descanso:** El Herpes Zóster puede causar malestar y fatiga. Prioriza tu bienestar y asegúrate de descansar lo suficiente.
- **Ropa cómoda:** Utiliza ropa suelta y cómoda que no roce las lesiones.

Si crees que podrías tener Herpes Zóster o si alguien que conoces muestra síntomas o tiene preguntas sobre esta afección, te recomendamos que consultes con tu médico o médica de confianza. La prevención y el conocimiento son esenciales para transitar el Herpes Zóster de manera efectiva y proteger a aquellos a tu alrededor.

NP-AR-HZU-WCNT-230018

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
					"title": "¿Requiere aislamiento el herpes zóster?",
					"image": "N-38",
					"metatitle": "¿Requiere aislamiento el herpes zóster? | Blog | Hablemos de Zóster",
					"metadescription": "Si tenés Herpes Zóster, debés tomar algunas precauciones. Aprendé sobre las medidas de protección para vos y para prevenir riesgos en los demás.",
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
		`<sup>1</sup> Ehrenstein B. Diagnostik Therapie und Prophylaxe des Herpes zoster [Diagnosis treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec;79(10):1009-1017. German. doi: 10.1007/s00393-020-00915-y. PMID: 33141244.`,
        
		`<sup>2</sup> Ehrenstein B. Diagnostik Therapie und Prophylaxe des Herpes zoster [Diagnosis treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec;79(10):1009-1017. German. doi: 10.1007/s00393-020-00915-y. PMID: 33141244.`,
        
		`<sup>3</sup> BRODKIN RH. ZOSTER CAUSING VARICELLA. CURRENT DANGERS OF CONTAGION WITHOUT ISOLATION. Arch Dermatol. 1963 Sep;88:322-4. doi: 10.1001/archderm.1963.01590210080012. PMID: 14043626.`,
        
		`<sup>4</sup> Trasmisión de la culebrilla (Herpes Zóster) | CDC. (s. f.). https://www.cdc.gov/shingles/about/transmission-sp.html#:~:text=Estas%20personas%20pueden%20contraer%20elm%C3%A1s%20adelante%20en%20la%20vida`,
        
		`<sup>5</sup> Gross GE, Eisert L, Doerr HW, Fickenscher H, Knuf M, Maier P, Maschke M, Müller R, Pleyer U, Schäfer M, Sunderkötter C, Werner RN, Wutzler P, Nast A. S2k guidelines for the diagnosis and treatment of herpes zoster and postherpetic neuralgia. J Dtsch Dermatol Ges. 2020 Jan;18(1):55-78. doi: 10.1111/ddg.14013. Epub 2020 Jan 17. PMID: 31951098.`,
        
		`<sup>6</sup> Gross GE, Eisert L, Doerr HW, Fickenscher H, Knuf M, Maier P, Maschke M, Müller R, Pleyer U, Schäfer M, Sunderkötter C, Werner RN, Wutzler P, Nast A. S2k guidelines for the diagnosis and treatment of herpes zoster and postherpetic neuralgia. J Dtsch Dermatol Ges. 2020 Jan;18(1):55-78. doi: 10.1111/ddg.14013. Epub 2020 Jan 17. PMID: 31951098.`,
        
		`<sup>7</sup> Gross GE, Eisert L, Doerr HW, Fickenscher H, Knuf M, Maier P, Maschke M, Müller R, Pleyer U, Schäfer M, Sunderkötter C, Werner RN, Wutzler P, Nast A. S2k guidelines for the diagnosis and treatment of herpes zoster and postherpetic neuralgia. J Dtsch Dermatol Ges. 2020 Jan;18(1):55-78. doi: 10.1111/ddg.14013. Epub 2020 Jan 17. PMID: 31951098.`,
        
		`<sup>8</sup> Dworkin RH, Johnson RW, Breuer J, Gnann JW, Levin MJ, Backonja M, Betts RF, Gershon AA, Haanpaa ML, McKendrick MW, Nurmikko TJ, Oaklander AL, Oxman MN, Pavan-Langston D, Petersen KL, Rowbotham MC, Schmader KE, Stacey BR, Tyring SK, van Wijck AJ, Wallace MS, Wassilew SW, Whitley RJ. Recommendations for the management of herpes zoster. Clin Infect Dis. 2007 Jan 1;44 Suppl 1:S1-26. doi: 10.1086/510206. PMID: 17143845.`,
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
