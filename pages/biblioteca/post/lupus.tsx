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


El Herpes Zóster y el Lupus son dos condiciones diferentes que pueden afectar la salud de las personas en distintas etapas de su vida. Aunque estas enfermedades tienen sus propias características, existe una posible conexión que puede resultar relevante para quienes padecen Lupus. A continuación, analizaremos en profundidad la potencial relación entre Herpes Zóster y Lupus, cómo afecta a quienes las padecen y qué hacer para prevenir estas enfermedades.

## ¿Qué es el Herpes Zóster y qué es el Lupus?

Antes de profundizar en la posible relación entre Herpes Zóster y Lupus, es importante comprender qué son y cómo afectan a la salud.

El Herpes Zóster, también conocido como culebrilla, es una infección viral causada por la reactivación del virus de la varicela zóster. Esta afección se presenta como una erupción cutánea dolorosa, generalmente en forma de banda en un lado del cuerpo, tronco o en el rostro. Aunque cualquier persona que haya tenido varicela puede desarrollar Herpes Zóster, es más común en adultos mayores y en personas con un sistema inmunológico debilitado.

Por su parte, el Lupus es una enfermedad autoinmune crónica que afecta a diferentes órganos y sistemas del cuerpo. Esto ocurre porque el sistema inmunológico ataca a las células y tejidos sanos, provocando inflamación y daño en distintas partes del organismo. El Lupus puede manifestarse de diversas formas y afectar a diferentes órganos, como la piel, las articulaciones, los riñones, el corazón y los pulmones, entre otros.

## Posible relación entre Herpes Zóster y Lupus

La principal conexión entre el Herpes Zóster y el Lupus radica en la relación de ambas enfermedades con el sistema inmunológico. Las personas con Lupus tienen un sistema inmunológico comprometido debido a su enfermedad autoinmune, lo que las hace más susceptibles a cualquier tipo de enfermedades, incluido el Herpes Zóster.

Además, el tratamiento del Lupus a menudo incluye medicamentos inmunosupresores, que disminuyen la actividad del sistema inmunológico para reducir la inflamación y los síntomas de la enfermedad. Estos medicamentos también pueden aumentar el riesgo de afecciones, como el Herpes Zóster.

Por lo tanto, la relación entre Herpes Zóster y Lupus se encuentra en el hecho de que las personas con Lupus tienen un mayor riesgo de desarrollar culebrilla debido a su sistema inmunológico comprometido, volviéndose esta enfermedad un factor de riesgo para contraer Herpes Zóster.

## ¿Qué se recomienda hacer a las personas con Lupus?

Es crucial que las personas con Lupus estén al tanto de su mayor riesgo de desarrollar Herpes Zóster y tomen medidas preventivas. Para ello, se recomienda mantener un estilo de vida saludable, informarse sobre los síntomas de ambas afecciones, realizar visitas regulares al médico para monitorear el Lupus y consultar sobre las opciones adecuadas de prevención y tratamiento del Herpes Zóster.



`

export const getStaticProps: GetStaticProps = async (context) => {
	console.log(context)

	// const res = await fetch(`${process.env.STRAPI_API_URL}/notas?populate=*&filters[slug][$in][0]=${context.params?.slug}`, {
	// 	headers: {
	// 		'Accept': 'application/json',
	// 		'Content-Type': 'application/json',
	// 		'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
	// 	}
	// })
	// const nota = await res.json()
	const nota = {
		"data": [
			{
				"id": 1,
				"attributes": {
					"title": "Herpes Zóster y Lupus: cómo aumenta el riesgo de contraer Herpes Zóster en personas con Lupus",
					"image": "relacion-herpes-zoster-lupus",
					"metatitle": "Herpes Zóster y Lupus | Riesgos y Recomendaciones | 2024",
					"metadescription": "Te contamos todo lo que necesitas saber sobre el lupus. Desde sus causas y los principales síntomas que presenta.",
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
		"1 Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.",
		"2 Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.",
		"3 Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.",
		"4 Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697.",
		"5 https://www.cdc.gov/shingles/hcp/clinical-overview.html",
		"6 https://www.cdc.gov/shingles/hcp/clinical-overview.html",
		"7 P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009",
		"8 P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009",
		"9 Hayderi L et al. Am J Clin Dermatol 2018;19:893–897.",
		"10 Hayderi L et al. Am J Clin Dermatol 2018;19:893–897.",
		"11 Kawai K, Gebremeskel BG, Acosta CJ. Systematic review of incidence and complications of herpes zoster: towards a global perspective. BMJ Open. 2014.",
		"12 https://www.cdc.gov/shingles/hcp/clinical-overview.html"
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
									<span className="markdown-body">
                                    NP-AR-HZU-WCNT-230011
									</span>
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