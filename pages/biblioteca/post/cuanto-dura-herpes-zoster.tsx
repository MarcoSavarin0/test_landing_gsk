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

**El Herpes Zóster, comúnmente conocido como culebrilla, es una manifestación del virus de la varicela que puede reactivarse en cualquier momento de nuestra vida**. Su reaparición puede traer consigo síntomas dolorosos y preocupantes para quienes lo padecen.<sup>[1]</sup>

**En este artículo, exploramos la duración y fases del Herpes Zóster**, así como el impacto que puede tener en tu salud.

##¿Cuánto dura en promedio un episodio de Herpes Zóster?

El Herpes Zóster **suele iniciar con síntomas como picazón, dolor, hormigueo, sensación molesta o sensibilidad al tacto en el tórax, el abdomen o el rostro**. Estos son los primeros indicios de la enfermedad. Tras los primeros días, comienza la fase aguda, en la que aparece la erupción cutánea caracterizada por ampollas en las zonas afectadas, acompañadas de un dolor agudo. Al cabo de unos 10 días, estas vesículas se convierten en costras que, normalmente, duran entre 2 y 4 semanas.<sup>[2]</sup>

**A pesar de que las erupciones y ampollas suelen desaparecer en este período de tiempo, el dolor, conocido como neuralgia postherpética, puede persistir en algunos casos**. En algunos pacientes, esta complicación puede durar meses e incluso años.<sup>[3]</sup>


##Fases del virus Herpes Zóster: desde la infección hasta la recuperación

Comprender las fases del Herpes Zóster es esencial para identificar y manejar adecuadamente los síntomas. **Esta enfermedad no solo se manifiesta a través de las erupciones cutáneas** que comúnmente se asocian con ella; **sino que hay una serie de etapas que preceden y siguen a estas erupciones**, que es crucial reconocer para una mejor atención y recuperación.<sup>[4]</sup>

###Inicio de síntomas

Antes de que se manifiesten los signos visibles del Herpes Zóster, el cuerpo emite señales de advertencia. **Es posible que experimentes molestias como dolor, picazón o sensaciones de ardor en una zona específica de la piel**. Estos síntomas iniciales pueden durar entre 1 a 5 días.<sup>[5]</sup>



###Aparición de erupciones

Después del período inicial, la enfermedad avanza hacia su fase más reconocible. Una erupción cutánea con ampollas llenas de líquido aparece en la zona donde se experimentaron las primeras molestias. Estas erupciones tienen una distribución particular, presentándose generalmente en un solo lado del cuerpo, y suelen aparecer en el tronco, cara, cuello o las extremidades.<sup>[6]</sup>


##Evolución y ruptura de las ampollas

**En una semana aproximadamente, las ampollas comienzan a romperse, liberando el líquido y eventualmente formando costras**. Durante este período, es vital mantener la zona limpia y evitar rascarse para prevenir infecciones secundarias.<sup>[7]</sup>


##Cicatrización 

El final de la enfermedad se acerca cuando las costras empiezan a caerse. **La piel debajo puede quedar rosada o pálida por un tiempo mientras comienza el proceso de cicatrización**. Aunque las manifestaciones visibles del Herpes Zóster pueden haber desaparecido, es importante señalar que el dolor, conocido como neuralgia postherpética, puede persistir en algunas personas.<sup>[8]</sup>

##¿Cómo impacta la duración del virus en tu salud general?

El impacto del Herpes Zóster en la salud general va más allá de las erupciones cutáneas. **El dolor y las molestias pueden interferir con las actividades diarias, afectando la calidad de vida**. Además, la persistencia del dolor postherpético puede causar ansiedad, insomnio y depresión en algunos pacientes.<sup>[9]</sup>

**Por otro lado, el virus puede causar complicaciones en ciertas áreas del cuerpo**. Por ejemplo, si afecta los ojos, puede derivar en pérdida de visión<sup>[10]</sup>. Asimismo, la aparición del Herpes Zóster puede ser un indicador de que el sistema inmunológico está debilitado, lo que puede hacer a la persona más susceptible a otras infecciones.<sup>[11]</sup>

El Herpes Zóster tiene un impacto significativo en la salud y bienestar de quien lo padece. **Estar informado sobre sus etapas y el tiempo que dura es esencial para enfrentarlo de manera efectiva y minimizar sus efectos adversos**.<sup>[12]</sup>

**Es fundamental tratar este virus desde el primer momento para asegurar tu bienestar y salud general**. Si vos o alguien que conocés tiene síntomas de Herpes Zóster, es clave que consultar con tu médico de confianza para conocer las opciones de prevención y tratamiento.


NP-AR-HZU-WCNT-230017

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
					"title": "¿Cuánto dura el virus del Herpes Zóster?",
					"image": "N35 _Duración Herpes Zóster_",
					"metatitle": " ¿Cuánto dura el virus de Herpes Zóster? | Blog | Hablemos de Zóste",
					"metadescription": " Conocé las frases del Herpes Zóster. Desde sus primeros síntomas hasta su recuperación y también cómo afecta la salud. ¡Cuidate!",
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
		`<sup>1</sup> Werner RN, Ghoreschi K. Herpes zoster – Prävention, Diagnostik und Behandlung [Herpes zoster-prevention, diagnosis, and treatment]. Hautarzt. 2022 Jun;73(6):442-451. German. doi: 10.1007/s00105-022-04992-9. Epub 2022 Apr 27. PMID: 35477786.`,
		
		`<sup>2</sup> Sampathkumar P, Drage LA, Martin DP. Herpes zoster (shingles) and postherpetic neuralgia. Mayo Clin Proc. 2009 Mar;84(3):274-80. doi: 10.1016/S0025-6196(11)61146-4. PMID: 19252116; PMCID: PMC2664599.`,

		`<sup>3</sup> Sampathkumar P, Drage LA, Martin DP. Herpes zoster (shingles) and postherpetic neuralgia. Mayo Clin Proc. 2009 Mar;84(3):274-80. doi: 10.1016/S0025-6196(11)61146-4. PMID: 19252116; PMCID: PMC2664599.`,

		`<sup>4</sup> Gan EY, Tian EA, Tey HL. Management of herpes zoster and post-herpetic neuralgia. Am J Clin Dermatol. 2013 Apr;14(2):77-85. doi: 10.1007/s40257-013-0011-2. PMID: 23456596.`,

		`<sup>5</sup>  ] Saibara T, Maeda T, Onishi S, Yamamoto Y. Depressed immune functions in the early phase of varicella-zoster virus reactivation. J Med Virol. 1993 Mar;39(3):242-5. doi: 10.1002/jmv.1890390312. PMID: 8385706.`,

		`<sup>6</sup>  Bader MS. Herpes zoster: diagnostic, therapeutic, and preventive approaches. Postgrad Med. 2013 Sep;125(5):78-91. doi: 10.3810/pgm.2013.09.2703. PMID: 24113666.`,

		`<sup>7</sup> Bader MS. Herpes zoster: diagnostic, therapeutic, and preventive approaches. Postgrad Med. 2013 Sep;125(5):78-91. doi: 10.3810/pgm.2013.09.2703. PMID: 24113666.`,
        
		`<sup>8</sup>  Tommasi C, Breuer J. The Biology of Varicella-Zoster Virus Replication in the Skin. Viruses. 2022 May 6;14(5):982. doi: 10.3390/v14050982. PMID: 35632723; PMCID: PMC9147561..`,

		`<sup>9</sup>  Saguil A, Kane S, Mercado M, Lauters R. Herpes Zoster and Postherpetic Neuralgia: Prevention and Management. Am Fam Physician. 2017 Nov 15;96(10):656-663. PMID: 29431387.`,

		`<sup>10</sup> Kaufman AR, Myers EM, Moster ML, Stanley J, Kline LB, Golnik KC. Herpes Zoster Optic Neuropathy. J Neuroophthalmol. 2018 Jun;38(2):179-189. doi: 10.1097/WNO.0000000000000607. PMID: 29266031.`,

		`<sup>11</sup>  Freer G, Pistello M. Varicella-zoster virus infection: natural history, clinical manifestations, immunity and current and future vaccination strategies. New Microbiol. 2018 Apr;41(2):95-105. Epub 2018 Mar 2. PMID: 29498740.`,

		`<sup>12</sup> Flem E, Graham J, Yi Z, Wisløff T, Johnson KD. Cost and health impact analysis of herpes zoster vaccination in Norway. Expert Rev Pharmacoecon Outcomes Res. 2022 Mar;22(2):315-326. doi: 10.1080/14737167.2021.1973893. Epub 2021 Sep 12. PMID: 34488508.`,

	
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
							</article><div className="w-auto my-5"><Cta title={'Haz el autotest'} url={`/autotest`} gtm={true} gtmTrackName="Autotest"/></div>

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
