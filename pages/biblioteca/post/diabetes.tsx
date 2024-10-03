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


# La diabetes y su posible relación con el Herpes Zóster

La diabetes es una enfermedad crónica que afecta a millones de personas en todo el mundo, y el Herpes Zóster es una infección viral que provoca una erupción dolorosa en la piel. Aunque a primera vista, estas dos condiciones parecen no tener conexión, en algunos casos, puede existir una relación entre el Herpes Zóster y la diabetes.

## ¿Qué es la diabetes?

Antes de ver en qué punto se relacionan la diabetes con el Herpes Zóster, entendamos un poco más sobre esta enfermedad.

La diabetes es una enfermedad crónica que se produce cuando el cuerpo no es capaz de regular adecuadamente los niveles de azúcar (glucosa) en la sangre. La glucosa es la principal fuente de energía para las células del cuerpo y proviene de los alimentos que consumimos. Este proceso está directamente relacionado a la insulina, una hormona producida por el páncreas, ayuda a que la glucosa entre en las células para ser utilizada como energía.

## ¿Cuáles son los tipos de diabetes?

Existen dos tipos principales de diabetes: la diabetes tipo 1 y la diabetes tipo 2.

La diabetes tipo 1 es una enfermedad autoinmune en la cual el sistema inmunológico ataca y destruye las células productoras de insulina en el páncreas. Las personas con diabetes tipo 1 necesitan inyecciones de insulina de por vida para regular sus niveles de glucosa en la sangre.

Por su parte, la diabetes tipo 2 es la forma más común de diabetes y ocurre cuando el cuerpo no utiliza la insulina de manera eficiente, es decir que provoca una resistencia a la insulina, o cuando el páncreas no produce suficiente insulina para mantener los niveles de glucosa en la sangre dentro de un rango normal.

La diabetes tipo 2 puede ser manejada mediante cambios en la dieta, actividad física, medicamentos y, en algunos casos, también con inyecciones de insulina.

## ¿Cuáles son las consecuencias de la diabetes?

La diabetes mal controlada puede tener serias complicaciones a largo plazo:

- Enfermedades cardiovasculares
- Daño renal
- Problemas de visión
- Daño en los nervios

Por lo tanto, es fundamental para las personas con diabetes llevar un control adecuado de sus niveles de glucosa en sangre y seguir las recomendaciones médicas para reducir el riesgo de complicaciones.

## La influencia de la diabetes en el riesgo de desarrollar Herpes Zóster

La relación entre el Herpes Zóster y la diabetes se debe principalmente al efecto que tiene la diabetes en el sistema inmunológico.

La diabetes puede debilitar el sistema inmunitario, lo que hace que las personas con diabetes sean más susceptibles a enfermedades como el Herpes Zóster. Algunos estudios han demostrado que las personas con diabetes tienen un 20% más de riesgo de desarrollar Herpes Zóster que las personas sin diabetes.

## Control de la diabetes y prevención del Herpes Zóster

Mantener un buen control de la diabetes es esencial para reducir el riesgo de desarrollar Herpes Zóster. Al mantener los niveles de azúcar en sangre bajo control, las personas con diabetes pueden fortalecer su sistema inmunológico y disminuir la probabilidad de infecciones.

Además, llevar un estilo de vida saludable, como mantener una dieta equilibrada y hacer ejercicio regularmente, también puede ayudar a fortalecer el sistema inmunológico y prevenir el Herpes Zóster.

De esta manera, la relación entre el Herpes Zóster y la diabetes se debe al efecto debilitante que tiene la diabetes en el sistema inmunológico, lo que aumenta el riesgo de tener otras infecciones y enfermedades. Si tenés diabetes, es fundamental hablar con tu médico acerca de las medidas que podés tomar para prevenir el Herpes Zóster y mantener una buena salud en general.

NP-AR-HZU-WCNT-230009.




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
					"title": "¿Hay relación entre el Herpes Zóster y la diabetes? La diabetes como factor de riesgo",
					"image": "relacion-entre-diabetes-herpes-zoster",
					"metatitle": "Herpes Zóster y la Diabetes | Factores de Riesgo | 2024",
					"metadescription": "Te contamos la principal relación que existe entre el herpes zoster y la diabetes. Los principales riesgos pueden surgir y cómo prevenir estos problemas",
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