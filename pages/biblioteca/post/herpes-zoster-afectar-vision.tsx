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
**El Herpes Zóster es una afección que puede manifestarse en diferentes formas y partes del cuerpo, incluidos los ojos**. Aunque muchos están familiarizados con la clásica erupción cutánea que a menudo se asocia con esta afección, pocos son conscientes de las serias implicancias que puede tener para la vista.<sup>[1]</sup>

En este artículo, **abordamos las consecuencias del Herpes Zóster en la salud ocular y cómo esta afección puede desencadenar diferentes complicaciones.**

##Relación entre Herpes Zóster y la visión

Como mencionamos antes, el Herpes Zóster puede manifestarse en diversas áreas del cuerpo como el rostro y los ojos. **Cuando el virus afecta el nervio óptico o el área cercana a los ojos, se habla de Herpes Zóster Oftálmico**. Esta variante puede tener serias repercusiones en la visión y requiere atención médica inmediata.<sup>[2]</sup>.

Además, el Herpes Zóster Oftálmico puede comprometer diferentes estructuras oculares, como la córnea, el iris y la retina. **El impacto en estas estructuras del ojo puede variar desde síntomas menores, como enrojecimiento e irritación, hasta complicaciones más graves que podrían llevar a la pérdida de la visión**.<sup>[3]</sup>

##Diagnóstico y evaluación del Herpes Zóster Oftálmico

**Identificar un caso de Herpes Zóster Oftálmico lo más pronto posible es crucial para minimizar el daño visual**. Normalmente, el diagnóstico se basa en la presencia de síntomas específicos y un examen ocular completo.<sup>[4]</sup> A continuación, te mostramos algunos de ellos:


- **Observación de síntomas**: Los síntomas habituales incluyen dolor, enrojecimiento y erupción alrededor de los ojos.<sup>[5]</sup>


- **Examen oftalmológico**: Incluye pruebas para valorar la superficie ocular, la retina y la presión del ojo.<sup>[6]</sup>


- **Evaluación del nervio óptico**: Se lleva a cabo para descartar afectaciones en esta área crucial.<sup>[7]</sup>


##Consecuencias del Herpes Zóster en los ojos: otras afecciones

El impacto del Herpes Zóster en la salud visual puede ser grave si no se trata de manera oportuna. **La inflamación de los tejidos oculares es una de las más comunes y puede provocar dolor persistente y disminución de la visión**.<sup>[8]</sup>

##Diagnóstico temprano

A largo plazo, la afección puede llevar a la formación de cicatrices en la córnea y otros tejidos oculares, comprometiendo gravemente la calidad visual. Además, existe el riesgo de desarrollar glaucoma secundario, una complicación que puede resultar en pérdida de la visión si no se trata adecuadamente.<sup>[9]</sup>

###Queratitis herpética

Una de las complicaciones oculares más comunes asociadas al Herpes Zóster es la queratitis herpética. **Esta inflamación de la córnea puede resultar en síntomas como sensación de cuerpo extraño en el ojo, enrojecimiento y dolor**. Sin un diagnóstico y atención temprana, la queratitis herpética puede provocar cicatrices en la córnea y disminución de la visión.<sup>[10]</sup>

###Uveítis

La uveítis es otra complicación posible y se refiere a la inflamación de la úvea, que es la capa media del ojo. Los síntomas incluyen enrojecimiento, dolor y sensibilidad a la luz. Esta complicación puede tener efectos serios en la visión si no se aborda de inmediato.<sup>[11]</sup>

###Glaucoma secundario

El Herpes Zóster oftálmico puede llevar al desarrollo de glaucoma secundario, una elevación de la presión intraocular que **puede resultar en daño irreversible al nervio óptico y pérdida de visión si no se trata adecuadamente**.<sup>[12]</sup>


La aparición del Herpes Zóster en la zona ocular es una preocupación seria que va más allá de la incomodidad temporal y el dolor. **Desde la queratitis herpética hasta el glaucoma secundario, las consecuencias pueden ser perjudiciales para la visión y la calidad de vida de una persona**. Es crucial estar informado y actuar rápidamente ante los primeros síntomas.<sup>[13]</sup>

Si tenés síntomas de Herpes Zóster en la zona ocular, o conocés a alguien que los tenga, **es crucial que consultes con tu médico o médica lo antes posible para un diagnóstico y plan de seguimiento adecuado**.

NP-AR-HZU-WCNT-230019
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
					"title": "Herpes Zóster: ¿Cómo puede afectar la visión?",
					"image": "N41-_Herpes-Zóster-Cómo-puede-afectar-la-visión_-_1_",
					"metatitle": "¿Cómo el Herpes Zóster puede afectar la visión? | Blog | Hablemos de Zóster",
					"metadescription": " Conocé el vínculo entre Herpes Zóster y la salud ocular. Aprendé sobre los riesgos, sus síntomas y cómo tratarlos. Cuidá tu salud.",
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
	`<sup>1</sup> Davis AR, Sheppard J. Herpes Zoster Ophthalmicus Review and Prevention. Eye Contact Lens. 2019 Sep;45(5):286-291. doi: 10.1097/ICL.0000000000000591. PMID: 30844951.`,
	
	`<sup>2</sup> Davis AR, Sheppard J. Herpes Zoster Ophthalmicus Review and Prevention. Eye Contact Lens. 2019 Sep;45(5):286-291. doi: 10.1097/ICL.0000000000000591. PMID: 30844951.`,

	`<sup>3</sup>  Davis AR, Sheppard J. Herpes Zoster Ophthalmicus Review and Prevention. Eye Contact Lens. 2019 Sep;45(5):286-291. doi: 10.1097/ICL.0000000000000591. PMID: 30844951.`,

	`<sup>4</sup> Cohen EJ, Jeng BH. Herpes Zoster: A Brief Definitive Review. Cornea. 2021 Aug 1;40(8):943-949. doi: 10.1097/ICO.0000000000002754. PMID: 34029242; PMCID: PMC8249351.`,

	`<sup>5</sup> Vrcek I, Choudhury E, Durairaj V. Herpes Zoster Ophthalmicus: A Review for the Internist. Am J Med. 2017 Jan;130(1):21-26. doi: 10.1016/j.amjmed.2016.08.039. Epub 2016 Sep 17. PMID: 27644149.`,

	`<sup>6</sup> Vrcek I, Choudhury E, Durairaj V. Herpes Zoster Ophthalmicus: A Review for the Internist. Am J Med. 2017 Jan;130(1):21-26. doi: 10.1016/j.amjmed.2016.08.039. Epub 2016 Sep 17. PMID: 27644149.`,

	`<sup>7</sup> Vrcek I, Choudhury E, Durairaj V. Herpes Zoster Ophthalmicus: A Review for the Internist. Am J Med. 2017 Jan;130(1):21-26. doi: 10.1016/j.amjmed.2016.08.039. Epub 2016 Sep 17. PMID: 27644149.`,

	`<sup>8</sup> Davis AR, Sheppard J. Herpes Zoster Ophthalmicus Review and Prevention. Eye Contact Lens. 2019 Sep;45(5):286-291. doi: 10.1097/ICL.0000000000000591. PMID: 30844951.`,

	`<sup>9</sup> Davis AR, Sheppard J. Herpes Zoster Ophthalmicus Review and Prevention. Eye Contact Lens. 2019 Sep;45(5):286-291. doi: 10.1097/ICL.0000000000000591. PMID: 30844951.`,

	`<sup>10</sup> Li JY. Herpes zoster ophthalmicus: acute keratitis. Curr Opin Ophthalmol. 2018 Jul;29(4):328-333. doi: 10.1097/ICU.0000000000000491. PMID: 29794881.`,

	`<sup>11</sup> Thean JH, Hall AJ, Stawell RJ. Uveitis in Herpes zoster ophthalmicus. Clin Exp Ophthalmol. 2001 Dec;29(6):406-10. doi: 10.1046/j.1442-9071.2001.d01-29.x. PMID: 11778812.`,

	`<sup>12</sup> Niederer RL, Meyer JJ, Liu K, Danesh-Meyer HV. Herpes Zoster Ophthalmicus Clinical Presentation and Risk Factors for Loss of Vision. Am J Ophthalmol. 2021 Jun;226:83-89. doi: 10.1016/j.ajo.2021.02.002. Epub 2021 Feb 8. PMID: 33571476.`,

        `<sup>13</sup> Niederer RL, Meyer JJ, Liu K, Danesh-Meyer HV. Herpes Zoster Ophthalmicus Clinical Presentation and Risk Factors for Loss of Vision. Am J Ophthalmol. 2021 Jun;226:83-89. doi: 10.1016/j.ajo.2021.02.002. Epub 2021 Feb 8. PMID: 33571476.`,

	
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
