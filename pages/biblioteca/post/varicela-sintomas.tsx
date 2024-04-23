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

# Varicela y Herpes Zóster: Conexión, Síntomas y Complicaciones

La varicela es una enfermedad muy común y altamente contagiosa que suele afectar a niños y adultos en algún momento de sus vidas. Aunque es generalmente benigna, en algunos casos puede presentar complicaciones graves. Esta afección está íntimamente relacionada con el Herpes Zóster. Aunque las enfermedades presentan síntomas diferentes y afectan a las personas en diferentes etapas de la vida, comparten un vínculo común debido a su origen viral.

## ¿Qué es la varicela y cuál es su origen?

La varicela es una enfermedad infecciosa causada por el virus varicela-zóster (VVZ), que pertenece a la familia de los herpesvirus. Esta enfermedad es muy común en la infancia, aunque también puede afectar a adultos. La varicela se propaga de persona a persona a través del contacto con las lesiones cutáneas, la saliva o el aire, especialmente cuando alguien infectado tose o estornuda.

## Signos y síntomas de la varicela

Los síntomas de la varicela suelen aparecer entre 10 y 21 días después de la exposición al virus. Algunos de los síntomas más frecuentes son:
- Erupciones cutáneas.
- Fiebre.
- Cansancio.
- Pérdida de apetito.

## ¿Qué complicaciones puede ocasionar la varicela?

Aunque la varicela es generalmente una enfermedad leve, en algunos casos puede causar complicaciones, especialmente en personas con sistemas inmunológicos debilitados, adultos y mujeres embarazadas. Algunas de estas complicaciones incluyen infecciones bacterianas, neumonía, encefalitis y problemas durante el embarazo.

## ¿Qué relación tiene la varicela con el Herpes Zóster?

La varicela y el Herpes Zóster están estrechamente relacionados porque ambos son causados por el mismo virus: el virus varicela-zóster (VVZ). La varicela es la infección primaria causada por el VVZ y, después de la infección inicial, el virus queda latente en el organismo y puede reactivarse años más tarde, causando Herpes Zóster.

El Herpes Zóster se manifiesta como una erupción dolorosa, con ampollas que generalmente aparecen en un área específica de la piel, siguiendo el trayecto de un nervio. Puede ser más grave que la varicela y causar complicaciones a largo plazo, como la neuralgia posherpética.

## Consulta médica

Si presentas algún síntoma relacionado con la varicela o el Herpes Zóster, no dudes en consultar con tu médico o médica para recibir el tratamiento adecuado.

NP-AR-HZU-WCNT-230003

# Varicela: Síntomas y Complicaciones

La varicela es una enfermedad infecciosa muy contagiosa causada por el virus varicela-zóster (VVZ). Aunque suele ser más común en niños, también puede afectar a adultos y personas con sistemas inmunológicos debilitados. En este artículo, te contamos en profundidad los síntomas típicos de la varicela y sus posibles complicaciones. Recuerda que ante la aparición de cualquiera de ellos, es recomendable que acudas a un equipo médico para recibir el tratamiento adecuado.

## Síntomas Típicos de la Varicela

### Erupción cutánea

La erupción cutánea es uno de los síntomas más característicos de la varicela. Comienza como pequeñas protuberancias rojas que luego se convierten en ampollas llenas de líquido. Con el tiempo, las ampollas se rompen y forman costras que finalmente se caen. Estas lesiones suelen aparecer primero en la cabeza y el tronco y luego extenderse a brazos y piernas. Es importante evitar rascarse para prevenir infecciones secundarias en la piel y posibles cicatrices a largo plazo.

### Fiebre y malestar general

La fiebre es otro síntoma común de la varicela, que puede variar en intensidad. Por lo general, aparece antes o al mismo tiempo que las erupciones cutáneas. Este síntoma puede hacer que el paciente se sienta cansado y debilitado, y puede ser necesario el uso de medicamentos antipiréticos para controlarla.

## Complicaciones de la Varicela

Aunque la mayoría de los casos de varicela son leves, pueden presentarse complicaciones en algunas personas:

### Infecciones bacterianas de la piel

El rascado de las lesiones puede provocar infecciones bacterianas en la piel, como celulitis o impétigo. Estas infecciones pueden requerir tratamiento con antibióticos.

### Neumonía

La varicela puede causar neumonía, especialmente en adultos y personas con sistemas inmunológicos debilitados. La neumonía por varicela puede ser grave y requerir hospitalización y tratamiento con medicamentos.

### Infecciones del sistema nervioso

En casos raros, la varicela puede afectar el sistema nervioso y causar complicaciones como meningitis, encefalitis o mielitis.

### Sepsis

En casos raros, la varicela puede causar sepsis, una respuesta extrema del cuerpo a una infección que puede provocar insuficiencia de órganos y, en casos graves, la muerte.

### Complicaciones en el embarazo

Si una mujer embarazada contrae varicela, existe un riesgo de complicaciones para el feto y la madre. Es importante que las mujeres embarazadas eviten el contacto con personas con varicela y consulten a su médico si sospechan que han estado expuestas al virus.

### Herpes Zóster

Después de recuperarse de la varicela, el virus varicela-zóster puede reactivarse en el futuro, causando herpes zóster o "culebrilla". Esta enfermedad se caracteriza por una erupción dolorosa en un área del cuerpo.

## Reconocer los Síntomas y Buscar Atención Médica

Reconocer los síntomas de la varicela es importante para buscar atención médica si se presentan complicaciones o si la persona afectada pertenece a un grupo de alto riesgo.

Para mayor información consulte a su médico. GSK Biopharma Argentina S.A. Av del Libertador 7202, Piso 4, CABA, Buenos Aires, Argentina. Para consultas sobre nuestros productos, consultas de calidad o reporte de eventos adversos puede comunicarse al 0800-222-4752.

NP-AR-HZU-WCNT-230004 – Abril 2023.


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
					"title": "¿Qué es la varicela y cuáles son sus síntomas?",
					"image": "varicela-sintomas",
					"metatitle": "¿Qué afecciones en la piel puede producir el Herpes Zóster?",
					"metadescription": "¿Sabías que la varicela y el Herpes Zóster son dos enfermedades producidas por el mismo virus? Ingresá e informate sobre esta infección que afecta a millones de personas en el mundo.",
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
		"Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30",
		"P Sampathkumar, LA Drage, DP Martin - Mayo Clinic Proceedings. 2009",
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