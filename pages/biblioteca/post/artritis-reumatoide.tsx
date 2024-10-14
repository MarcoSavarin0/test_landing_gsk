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

# Relación entre el Herpes Zóster y la Artritis Reumatoide

La Artritis Reumatoide (AR) es una enfermedad autoinmune crónica que afecta las articulaciones, provocando dolor, inflamación y, en última instancia, daño en las mismas. Por otro lado, el Herpes Zóster es una infección viral causada por la reactivación del virus de la varicela-zóster (VVZ). Aunque estas dos condiciones pueden no estar relacionadas, existen vínculos entre ambas que vale la pena explorar. En este artículo, analizaremos la posible relación entre el Herpes Zóster y la Artritis Reumatoide y además aprenderemos sobre los síntomas y prevención de ambas condiciones para que puedas mejorar tu calidad de vida.

## Artritis Reumatoide: qué es, síntomas y causas

Como mencionamos anteriormente, la Artritis Reumatoide (AR) es una enfermedad crónica, inflamatoria y autoinmune que afecta principalmente las articulaciones. En esta enfermedad, el sistema inmunológico del cuerpo ataca las articulaciones, lo que provoca inflamación, dolor y, con el tiempo, puede causar daño articular y deformidad. La causa exacta de la Artritis Reumatoide es desconocida, pero se cree que una combinación de factores genéticos, ambientales y hormonales contribuyen a su desarrollo. También puede afectar a personas de cualquier edad, pero es más común en mujeres y suele comenzar entre los 30 y los 60 años de edad.

### ¿Cuáles son los síntomas de la Artritis Reumatoide?

Aunque la Artritis Reumatoide afecta con mayor frecuencia las articulaciones de las manos, las muñecas y los pies, también puede afectar otras áreas del cuerpo, como los hombros, los codos, las rodillas y los tobillos. Además, la inflamación asociada con la Artritis Reumatoide puede afectar a otros órganos y sistemas del cuerpo, como el corazón, los pulmones y la piel. Quienes padecen Artritis Reumatoide duplican el riesgo de desarrollar afecciones herpéticas en comparación con población de igual edad y sexo. Conocer los síntomas de ambas condiciones y acceder a un tratamiento temprano disminuye las posibilidades de complicaciones severas.

## Factores que conectan el Herpes Zóster y la Artritis Reumatoide

Existen una serie de factores que relacionan al Herpes Zóster con la Artritis Reumatoide que exploraremos a continuación:

### Sistema inmunológico debilitado

Una posible relación entre el Herpes Zóster y la Artritis Reumatoide radica en que ambas afecciones están relacionadas con un sistema inmunológico debilitado. Por una parte, la Artritis Reumatoide es una enfermedad autoinmune, lo que significa que el sistema inmunológico del cuerpo ataca a sus propias articulaciones, causando inflamación y daño. Como resultado, las personas con AR pueden tener un sistema inmunológico comprometido. El Herpes Zóster, por otro lado, se desarrolla cuando el VVZ se reactiva en el cuerpo, lo que generalmente ocurre cuando el sistema inmunológico está debilitado. Por lo tanto, las personas con AR pueden ser más susceptibles a desarrollar Herpes Zóster debido a su sistema inmunológico comprometido.

### Efecto de los medicamentos inmunosupresores

Otro factor que contribuye a la relación entre el Herpes Zóster y la Artritis Reumatoide es el uso de medicamentos inmunosupresores en el tratamiento de la AR, como los corticosteroides y los fármacos antirreumáticos modificadores de la enfermedad (FAME). Ambos ayudan a controlar la inflamación y el dolor en pacientes con AR, pero también pueden debilitar el sistema inmunológico y, por lo tanto, aumenta el riesgo de que el VVZ se reactive causando Herpes Zóster.

### La edad como factor de riesgo

Otro de los puntos en común entre ambas enfermedades es la edad. Tanto para el caso del Herpes Zóster como para el caso de la Artritis Reumatoide, la edad avanzada es un factor que presenta mayores riesgos para contraer la afección.

De esta manera, es crucial entender la relación entre el Herpes Zóster y la Artritis Reumatoide, ya que ambos trastornos tienen implicaciones en la salud de quienes los padecen. Comprender cómo interactúan estas condiciones y cómo pueden impactar en la salud es esencial para mejorar la calidad de vida del paciente. Si experimentás síntomas relacionados con el Herpes Zóster o la Artritis Reumatoide, es fundamental que consultes a un médico para obtener un diagnóstico adecuado y recibir el tratamiento más apropiado para tu caso.







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
					"title": "¿Existe una relación entre el Herpes Zóster y la Artritis Reumatoide?",
					"image": "relacion-artritis-reumatoide-herpes-zoster",
					"metatitle": "Artritis Reumatoide | Causas y Síntomas | 2024",
					"metadescription": "Te contamos lo que necesitas saber sobre la Artritis reumatoide, desde que es, hasta los principales síntomas y causas.",
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
		"1 Smolen JS, Aletaha D, McInnes IB. Rheumatoid arthritis. Lancet. 2016 Oct 22;388(10055):2023-2038. doi: 10.1016/S0140-6736(16)30173-8. Epub 2016 May 3. Erratum in: Lancet. 2016 Oct 22;388(10055):1984. PMID: 27156434.",
		"2 Schmader K. Herpes Zoster. Ann Intern Med. 2018 Aug 7;169(3):ITC19-ITC31. doi: 10.7326/AITC201808070. Erratum in: Ann Intern Med. 2018 Oct 2;169(7):516. PMID: 30083718.",
		"3 Smolen JS, Aletaha D, McInnes IB. Rheumatoid arthritis. Lancet. 2016 Oct 22;388(10055):2023-2038. doi: 10.1016/S0140-6736(16)30173-8. Epub 2016 May 3. Erratum in: Lancet. 2016 Oct 22;388(10055):1984. PMID: 27156434.",
		"4 Smolen JS, Aletaha D, McInnes IB. Rheumatoid arthritis. Lancet. 2016 Oct 22;388(10055):2023-2038. doi: 10.1016/S0140-6736(16)30173-8. Epub 2016 May 3. Erratum in: Lancet. 2016 Oct 22;388(10055):1984. PMID: 27156434.",
		"5 Smolen JS, Aletaha D, McInnes IB. Rheumatoid arthritis. Lancet. 2016 Oct 22;388(10055):2023-2038. doi: 10.1016/S0140-6736(16)30173-8. Epub 2016 May 3. Erratum in: Lancet. 2016 Oct 22;388(10055):1984. PMID: 27156434.",
		"6 Silvariño, Ricardo, Tafuri, Josefina, Mérola, Valentina, Romero, Cecilia, & Alonso, Juan. (2010). Herpes zóster cutáneo diseminado en paciente con artritis reumatoide. Archivos de Medicina Interna, 32(1), 22-24. Recuperado en 01 de junio de 2023, de http://www.scielo.edu.uy/scielo.php?script=sci_arttext&pid=S1688-423X2010000100007&lng=es&tlng=es",
		"7 Marra F, Parhar K, Huang B, Vadlamudi N. Risk Factors for Herpes Zoster Infection: A Meta-Analysis. Open Forum Infect Dis. 2020 Jan 9;7(1):ofaa005. doi: 10.1093/ofid/ofaa005. PMID: 32010734; PMCID: PMC6984676.",
		"8 Wasserman AM. Diagnosis and management of rheumatoid arthritis. Am Fam Physician. 2011 Dec 1;84(11):1245-52. PMID: 22150658.",
		"9 Marra F, Parhar K, Huang B, Vadlamudi N. Risk Factors for Herpes Zoster Infection: A Meta-Analysis. Open Forum Infect Dis. 2020 Jan 9;7(1):ofaa005. doi: 10.1093/ofid/ofaa005. PMID: 32010734; PMCID: PMC6984676.",
		"10 Meneghini M, Bestard O, Grinyo JM. Immunosuppressive drugs modes of action. Best Pract Res Clin Gastroenterol. 2021 Oct-Dec;54-55:101757. doi: 10.1016/j.bpg.2021.101757. Epub 2021 Jun 16. PMID: 34874841.",
		"11 Meneghini M, Bestard O, Grinyo JM. Immunosuppressive drugs modes of action. Best Pract Res Clin Gastroenterol. 2021 Oct-Dec;54-55:101757. doi: 10.1016/j.bpg.2021.101757. Epub 2021 Jun 16. PMID: 34874841.",
		"12 Silvariño, Ricardo, Tafuri, Josefina, Mérola, Valentina, Romero, Cecilia, & Alonso, Juan. (2010). Herpes zóster cutáneo diseminado en paciente con artritis reumatoide. Archivos de Medicina Interna, 32(1), 22-24. Recuperado en 01 de junio de 2023, de http://www.scielo.edu.uy/scielo.php?script=sci_arttext&pid=S1688-423X2010000100007&lng=es&tlng=es"
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
								<div>
									<span className="markdown-body">NP-AR-HZU-WCNT-230011.</span>
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