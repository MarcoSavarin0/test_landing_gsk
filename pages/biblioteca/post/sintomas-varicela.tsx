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

## Síntomas de la varicela y sus posibles complicaciones
La varicela es una enfermedad infecciosa muy contagiosa causada por el virus varicela-zóster (VVZ). Aunque suele ser más común en niños, también puede afectar a adultos y personas con sistemas inmunológicos debilitados. 

En este artículo, te contamos en profundidad los síntomas típicos de la varicela y sus posibles complicaciones. Recordá que ante la aparición de cualquiera de ellos, es recomendable que acudas a un equipo médico para recibir el tratamiento adecuado. 

## Erupción cutánea
La erupción cutánea es uno de los síntomas más característicos de la varicela. Comienza como pequeñas protuberancias rojas que luego se convierten en ampollas llenas de líquido. Con el tiempo, las ampollas se rompen y forman costras que finalmente se caen. 

Las lesiones en la piel suelen aparecer primero en la cabeza y el tronco y luego extenderse a brazos y piernas. Estas erupciones pueden causar picazón intensa, y es importante evitar rascarse para prevenir infecciones secundarias en la piel así como posibles cicatrices a largo plazo.

Por otra parte, es importante destacar que estas lesiones son la principal fuente de transmisión de la enfermedad. Esto sucede debido a que las secreciones que producen las ampollas, tienen partículas virales, por lo cual se recomienda aislar a los pacientes que tienen varicela ya que pueden contagiar la enfermedad a personas que no han tenido contacto previo con el virus que la causa. 

## Fiebre y malestar general
La fiebre es otro síntoma común de la varicela. Puede variar desde una temperatura ligeramente elevada hasta fiebre alta. Por lo general, la fiebre aparece antes o al mismo tiempo que las erupciones cutáneas. 

Este síntoma de la varicela puede hacer que el paciente se sienta cansado y debilitado, y puede ser necesario el uso de medicamentos antipiréticos para controlarla.

De esta manera, las personas con varicela pueden experimentar malestar general, que puede incluir cansancio, debilidad y pérdida de apetito. Este malestar puede dificultar la realización de actividades diarias y hacer que el paciente desee descansar hasta que los síntomas de la varicela mejoren.

## La varicela en personas vacunadas
Si bien algunas personas pueden contraer la enfermedad, a pesar de haber recibido la vacuna contra la varicela, los síntomas habitualmente son más leves, con menos lesiones en piel o ninguna, febrícula o fiebre de menor intensidad y una duración más corta de los síntomas.

## Posibles complicaciones de la varicela
Aunque la mayoría de los casos de varicela son leves, pueden presentarse complicaciones en algunas personas, especialmente en adolescentes y adultos, en recién nacidos o hijos de madres que no tuvieron varicela ni recibieron la vacuna y en personas con sistemas inmunológicos debilitados.

A continuación, te contamos cuáles son algunas de las posibles complicaciones de la varicela:

### 1. Infecciones bacterianas de la piel 
El rascado de las ampollas y las costras puede provocar infecciones bacterianas en la piel, como celulitis o impétigo. Estas infecciones pueden requerir tratamiento con antibióticos y, en casos graves, pueden provocar la formación de abscesos o la propagación de la infección a otras partes del cuerpo

### 2. Neumonía 
La varicela puede causar neumonía, especialmente en adultos y personas con sistemas inmunológicos debilitados. La neumonía por varicela puede ser grave y requerir hospitalización y tratamiento con medicamentos antivirales y antibióticos.

### 3. Infecciones del sistema nervioso
En pocos casos, y sobre todo en niños, la varicela puede afectar el sistema nervioso y causar complicaciones como meningitis, encefalitis o mielitis. En la mayoría de los pacientes que padecen de estas complicaciones, la recuperación es completa   

### 4. Sepsis 
En casos raros, la varicela puede causar sepsis, una respuesta extrema del cuerpo a una infección que puede provocar insuficiencia de órganos y, en casos graves, la muerte. Generalmente, esta complicación de la varicela se presenta en pacientes inmunodeprimidos.

### 5. Complicaciones en el embarazo
Si una mujer embarazada contrae varicela, existe un riesgo de complicaciones para el feto y la madre. Estas complicaciones pueden incluir infecciones congénitas, parto prematuro y, en algunos casos, muerte fetal o neonatal. 

Es importante que las mujeres embarazadas que nunca han tenido varicela ni han recibido la vacuna, eviten el contacto con personas con varicela y consulten a su médico si sospechan que han estado expuestas al virus.

### 6. Herpes zóster
Después de recuperarse de la varicela, el virus varicela-zóster permanece latente en el cuerpo y puede reactivarse en el futuro, causando herpes zóster o "culebrilla". 

El herpes zóster se caracteriza por una erupción dolorosa en un área del cuerpo y puede afectar a personas de cualquier edad, aunque es más común en adultos mayores y personas con sistemas inmunológicos debilitados.

Reconocer los síntomas de la varicela es sumamente importante para detectarlos y buscar atención médica si se presentan complicaciones o si la persona afectada pertenece a un grupo de alto riesgo.

NP-AR-HZU-WCNT-230004 – Abril 2023.

Para mayor información consulte a su médico.GSK Biopharma Argentina S.A. Av del Libertador 7202, Piso 4, CABA, Buenos Aires, Argentina.Para consultas sobre nuestros productos, consultas de calidad o reporte de eventos adversos puede comunicarse al 0800-222-4752.

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
					"title": "Síntomas de la varicela y sus posibles complicaciones",
					"image": "varicela-sintomas",
					"metatitle": "Síntomas de la varicela",
					"metadescription": " ¿Sabés cuáles son los síntomas característicos de la varicela? Ingresá e informate sobre esta infección que afecta a millones de personas en el mundo.",
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