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

## El Herpes Zóster es una infección viral que puede ser muy dolorosa e incómoda para quienes la padecen

Los síntomas pueden ser bastante variados y afectar diferentes partes del cuerpo, por lo que es importante estar atentos a cualquier señal que indique su presencia.

### Origen del Herpes Zóster

Antes de conocer los síntomas de esta enfermedad, es importante conocer cómo se origina y quiénes pueden padecerla.

La culebrilla o Herpes Zóster es una enfermedad provocada por la reactivación del Virus Varicela Zóster (VVZ), el mismo que causa la varicela. Luego de contraer esta enfermedad, el virus permanece inactivo en el sistema nervioso del cuerpo, sin generar síntomas, hasta que se reactiva y deriva en el conocido Herpes Zóster. Solo las personas que tuvieron varicela pueden padecer de Herpes Zóster.

### ¿Cuáles son los síntomas del Herpes Zóster?

El Herpes Zóster se caracteriza por un sarpullido doloroso en la piel que se presenta en forma de ampollas agrupadas en una sola área del cuerpo. Este sarpullido suele estar precedido por síntomas como dolor, ardor, picazón o sensibilidad en la piel. Otros síntomas comunes del Herpes Zóster incluyen:

- Dolor intenso y agudo en un lado del cuerpo, que puede ser constante o intermitente.
- Sensación de hormigueo o cosquilleo en la piel afectada.
- Fiebre y dolor de cabeza.
- Sensación de debilidad o fatiga generalizada.
- Sensibilidad a la luz.
- Problemas de visión, si el Herpes Zóster afecta la zona alrededor del ojo.

Es importante destacar que los síntomas del Herpes Zóster pueden variar de una persona a otra, y que algunas personas pueden presentar síntomas leves.

Si sospechas que tienes Herpes Zóster, te recomendamos consultar con un médico para recibir un diagnóstico preciso y un tratamiento adecuado.

### ¿Cómo es la evolución del Herpes Zóster?

La culebrilla o Herpes Zóster comienza con una sensación de picor o dolor en un área determinada de la piel, especialmente en la parte superior del cuerpo, seguida por la aparición de ampollas rodeadas de enrojecimiento. Durante esta etapa, las lesiones son altamente contagiosas debido a que el virus se encuentra en el líquido de las vesículas.

Tras 7-10 días, las ampollas se secan y forman costras que finalmente se desprenden, dejando cicatrices. Las áreas del cuerpo más afectadas son el tronco y la cara, dentro de esta última localización, si afecta el ojo, existe el riesgo de comprometer la visión, pudiendo producir inclusive ceguera.

### ¿Existen complicaciones del Herpes Zóster?

Aunque la mayoría de las personas se recuperan completamente, algunas pueden experimentar complicaciones graves. La complicación más común del Zóster es la Neuralgia Postherpética (NPH), un dolor nervioso que persiste después de que la erupción se ha curado.

La NPH puede durar de tres a seis meses, o incluso más tiempo, y es más común y grave en personas mayores de 50 años, afectando aproximadamente a entre un 5% y 30% de los pacientes con culebrilla o Herpes Zóster.

Otras complicaciones pueden incluir:

- Cambios en la piel, como cicatrices o cambios en la pigmentación después de que la erupción haya sanado.
- Sobreinfección de las lesiones en la piel que puede requerir el tratamiento con antibióticos y en casos de mayor gravedad, internación.
- Herpes Zóster Oftálmico que se produce hasta en el 25% de los casos de Herpes Zóster y puede ocurrir cuando el virus afecta el nervio facial.
- Complicaciones del sistema nervioso periférico y central, complicaciones cardiovasculares.

En caso de que el paciente presente alguna de las complicaciones mencionadas, puede haber un impacto negativo en la calidad de vida. Por ello, es fundamental conocer los síntomas de esta infección viral para tratarla a tiempo. No dudes en consultar con un médico para conocer los modos de prevenir y tratar el Herpes Zóster.

NP-AR-HZU-WCNT-230013.

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
					"title": "Síntomas del Herpes Zóster: cuáles son y cómo evoluciona el virus",
					"image": "sintomas-herpes-zoster-cuales-son",
					"metatitle": "Herpes Zóster | Principales Síntomas | 2024",
					"metadescription": "Te contamos según médicos especializados, cuáles son los principales síntomas que aparecen para el virus del Herpes Zóster.",
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