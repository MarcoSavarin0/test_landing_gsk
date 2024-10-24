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

**El Herpes Zóster, comúnmente conocido como "culebrilla", es una enfermedad causada por la reactivación del virus de la varicela que permanece inactivo o latente en el organismo después de haber padecido esta enfermedad en la infancia.** Aunque es más común en adultos mayores, puede afectar a personas de cualquier edad.<sup>[1]</sup>

Pero ¿existen maneras de identificar el Herpes Zóster antes de que los síntomas clásicos se manifiesten? En el siguiente artículo abordaremos las distintas etapas de esta enfermedad, sus síntomas y lo que puede esperarse en cada fase.

## Las etapas tempranas del Herpes Zóster: Síntomas y diagnóstico

Antes de que aparezcan las características erupciones del Herpes Zóster, es posible que se experimenten síntomas preliminares. Estos pueden incluir:<sup>[2]</sup>

- Sensación de ardor, picazón o cosquilleo en una zona de la piel.
- Fiebre leve.
- Fatiga.
- Dolor de cabeza.
- Sensibilidad a la luz.

Estos síntomas pueden ser confusos y no necesariamente apuntan de inmediato al Herpes Zóster. Sin embargo, la aparición repentina de dolor en un lado del cuerpo o la cara suele ser un indicativo claro.<sup>[3]</sup> El diagnóstico correcto es esencial y se basa principalmente en la identificación de las lesiones de la piel y la descripción de los síntomas.

## Cómo se desarrolla el Herpes Zóster: Fase aguda y complicaciones

Una vez diagnosticado el Herpes Zóster, es fundamental comprender sus etapas de progresión para garantizar un manejo y tratamiento adecuados. Las manifestaciones iniciales de la enfermedad son solo el comienzo de un proceso que avanza hasta las erupciones visibles.<sup>[4]</sup>

### Aparición de erupciones

Después de los primeros síntomas, las erupciones cutáneas toman protagonismo. Aparecen como grupos de ampollas llenas de líquido en el área donde previamente se experimentaron las molestias. Estas erupciones se limitan comúnmente a un solo lado del cuerpo, pudiendo afectar desde el tronco hasta las extremidades o el rostro.<sup>[5]</sup>

### Evolución y ruptura de las ampollas

Las ampollas no duran mucho en su estado inicial. En alrededor de una semana, suelen romperse liberando el líquido que contienen. Al cabo de unos 10 días, las ampollas se convierten en costras que normalmente duran entre 2 y 4 semanas. Es fundamental mantener la zona limpia durante este período para evitar complicaciones.<sup>[6]</sup>

### Cicatrización

Cuando las costras comienzan a caer, se marca el inicio del proceso de recuperación de la piel. Esta nueva piel puede presentarse con un tono rosado o más pálido que el circundante. Aunque las erupciones ya no estén presentes, es importante recordar que en algunos casos puede persistir un dolor posterior conocido como Neuralgia Postherpética: una complicación que requiere atención y seguimiento médico.<sup>[7]</sup>

## La recuperación del Herpes Zóster: ¿Qué esperar?

La mayoría de las personas se recuperan completamente del Herpes Zóster en unas pocas semanas. Las costras formadas sobre las ampollas caen y el dolor y la picazón disminuyen gradualmente. Sin embargo, es crucial mantener el área limpia y evitar rascarse para prevenir infecciones y cicatrices.<sup>[8]</sup>

Aunque hay riesgos de padecer Neuralgia Postherpética y esto puede ser una preocupación, no todos los pacientes experimentan este dolor prolongado. La recuperación puede variar según la edad, los factores de riesgo y la rapidez con que se haya detectado y consultado con un médico.<sup>[9]</sup>

El Herpes Zóster es una enfermedad que puede causar síntomas incómodos y dolorosos. Conocer sus etapas y lo que se puede esperar en cada una de ellas puede ayudar a transitar mejor la enfermedad y a prepararse para su recuperación.

Si estás experimentando síntomas del Herpes Zóster o deseas obtener más información sobre cómo prevenirlo, te recomendamos consultar con tu médico o médica de confianza. La prevención y el diagnóstico temprano son fundamentales.



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
					"title": "¿Cuáles son las etapas del Herpes Zóster?",
					"image": "N-37",
					"metatitle": "¿Cuáles son las etapas del Herpes Zóster? | Blog | Hablemos de Zóster",
					"metadescription": "Descubrí las etapas del Herpes Zóster y sus complicaciones. Conocé síntomas y riesgos. ¡Aprendé a cuidarte!",
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
		`<sup>1</sup> Bader MS. Herpes zoster: diagnostic therapeutic and preventive approaches. Postgrad Med. 2013 Sep;125(5):78-91. doi: 10.3810/pgm.2013.09.2703. PMID: 24113666.`,
        
		`<sup>2</sup> Koshy E, Mengting L, Kumar H, Jianbo W. Epidemiology treatment and prevention of herpes zoster: A comprehensive review. Indian J Dermatol Venereol Leprol. 2018 May-Jun;84(3):251-262. doi: 10.4103/ijdvl.IJDVL_1021_16. PMID: 29516900.`,
        
		`<sup>3</sup> Koshy E, Mengting L, Kumar H, Jianbo W. Epidemiology treatment and prevention of herpes zoster: A comprehensive review. Indian J Dermatol Venereol Leprol. 2018 May-Jun;84(3):251-262. doi: 10.4103/ijdvl.IJDVL_1021_16. PMID: 29516900.`,
        
		`<sup>4</sup> Bader MS. Herpes zoster: diagnostic therapeutic and preventive approaches. Postgrad Med. 2013 Sep;125(5):78-91. doi: 10.3810/pgm.2013.09.2703. PMID: 24113666.`,
        
		`<sup>5</sup> Ehrenstein B. Diagnostik Therapie und Prophylaxe des Herpes zoster [Diagnosis treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec;79(10):1009-1017. German. doi: 10.1007/s00393-020-00915-y. PMID: 33141244.`,
        
		`<sup>6</sup> Ehrenstein B. Diagnostik Therapie und Prophylaxe des Herpes zoster [Diagnosis treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec;79(10):1009-1017. German. doi: 10.1007/s00393-020-00915-y. PMID: 33141244.`,
        
		`<sup>7</sup> Kaikai SM, Dowling Evans D. Presentation Management and Prevention of Herpes Zoster. Adv Emerg Nurs J. 2022 Jan-Mar 01;44(1):3-10. doi: 10.1097/TME.0000000000000395. PMID: 35089273.`,
        
		`<sup>8</sup> Kaikai SM, Dowling Evans D. Presentation Management and Prevention of Herpes Zoster. Adv Emerg Nurs J. 2022 Jan-Mar 01;44(1):3-10. doi: 10.1097/TME.0000000000000395. PMID: 35089273.`,
        
		`<sup>9</sup> Kaikai SM, Dowling Evans D. Presentation Management and Prevention of Herpes Zoster. Adv Emerg Nurs J. 2022 Jan-Mar 01;44(1):3-10. doi: 10.1097/TME.0000000000000395. PMID: 35089273.`,
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
