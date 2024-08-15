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

const DynamicSpeechBlog = dynamic(() => import('@/components/blog/SpeechBlog'), {
	ssr: false,
})

const info = `
Las parálisis faciales pueden tener diversas causas, y una de ellas puede ser el Herpes Zóster. Sin embargo, en aproximadamente el 60-75% de los casos, cuando no se determina el origen de la parálisis facial, se denomina parálisis facial idiopática o parálisis de Bell.<sup>[1]</sup>

Este artículo se enfoca en las diferencias y similitudes entre la parálisis de Bell y el Herpes Zóster, para ayudarte a comprender mejor estas dos condiciones.


##¿Qué es el Herpes Zóster?

El Herpes Zóster es una afección provocada por la reactivación del virus de la varicela-zóster. **Sus síntomas se manifiestan en forma de una erupción cutánea dolorosa, generalmente en un lado del cuerpo o del rostro**. Suele ser más común en adultos mayores o en personas con un sistema inmunológico debilitado.<sup>[2]</sup>.


##¿Qué es la parálisis de Bell?

**La parálisis de Bell es una afección que causa la pérdida repentina de la función muscular en un lado del rostro**, por lo cual también es conocida como parálisis facial periférica. Aunque su origen exacto no se conoce con certeza, se cree que la inflamación del nervio facial podría estar involucrada. La parálisis de Bell puede afectar a personas de cualquier edad, pero es más común en adultos jóvenes y de mediana edad.<sup>[3]</sup>


##Síntomas de la parálisis de Bell

La parálisis de Bell se caracteriza por una serie de síntomas específicos que ayudan a su identificación:


- **Debilidad muscular en el rostro**: El síntoma más distintivo es la debilidad o parálisis repentina en un lado del rostro. Este síntoma es constante en los casos de parálisis de Bell y es un indicador clave para su diagnóstico.


- **Alteración de la sensibilidad facial**: Algunos pacientes pueden notar una sensación de hormigueo o entumecimiento en el rostro. Estos síntomas son menos comunes y pueden variar entre individuos.


- **Dolor facial leve**: Aunque puede presentarse, el dolor facial en la parálisis de Bell suele ser leve. Un dolor intenso es menos común y podría sugerir otras causas.

##Diferencias entre la parálisis de Bell y el Herpes Zóster:

Para evitar la confusión entre estas dos afecciones, es fundamental reconocer sus diferencias.


- **Origen**: La parálisis de Bell es la forma idiopática de la parálisis facial periférica. Esto significa que su causa exacta no se conoce y representa el 60-75% de todos los casos de parálisis facial. En el 25-40% restante de los casos, se puede identificar una causa específica. Una de las más frecuentes es el herpes zóster ótico, conocido también como síndrome de Ramsay Hunt. Por lo tanto, en casos de parálisis facial con dolor intenso, incluso si no se observan ampollas herpéticas, el Herpes Zóster debe considerarse como una posible causa.<sup>[4]</sup>


- **Zona afectada**: La parálisis de Bell se manifiesta exclusivamente en la cara, mientras que el Herpes Zóster puede aparecer en diferentes áreas del cuerpo.<sup>[5]</sup>


- **Tipo de dolor**: El dolor en la parálisis de Bell puede ser sordo o agudo, mientras que el Herpes Zóster a menudo produce un dolor ardiente o punzante, habitualmente de mayor intensidad. <sup>[6]</sup>


- **Presencia de erupciones**: El Herpes Zóster se caracteriza por una erupción cutánea que puede llenarse de ampollas, algo que no ocurre en la parálisis de Bell.<sup>[7]</sup>

Aunque la parálisis de Bell y el Herpes Zóster son afecciones distintas, sus síntomas pueden ser lo suficientemente similares como para generar confusión. **Un diagnóstico preciso es crucial para un tratamiento médico adecuado**.

Si tenés síntomas que podrían corresponder a la parálisis de Bell o al Herpes Zóster, o conocés a alguien en esa situación, **es importante consultar con tu equipo médico para un diagnóstico preciso y un plan de seguimiento adecuado**.


NP-AR-HZU-WCNT-230020


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
					"title": "Similitudes y diferencias entre la parálisis de Bell y el Herpes Zóster",
					"image": "N42-_Parálisis-de-Bell_",
					"metatitle": "Parálisis de Bell y Herpes Zóster: ¿Cómo diferenciarlos? | Blog | Hablemos de Zóster",
					"metadescription": "¿ Descubrí cómo distinguir la parálisis de Bell y el Herpes Zóster. Conocé sus síntomas, señales y características. Aprendé a cuidar tu salud.",
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
		`<sup>1</sup>  Heckmann JG, Urban PP, Pitz S, Guntinas-Lichius O, Gágyor I. The Diagnosis and Treatment of Idiopathic Facial Paresis (Bell's Palsy). Dtsch Arztebl Int. 2019 Oct 11;116(41):692-702. doi: 10.3238/arztebl.2019.0692. PMID: 31709978; PMCID: PMC6865187.`,
		
		`<sup>2</sup>  Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.`,
        
		`<sup>3</sup> Tiemstra JD, Khatkhate N. Bell's palsy: diagnosis and management. Am Fam Physician. 2007 Oct 1;76(7):997-1002. PMID: 17956069.`,

		`<sup>4</sup> Heckmann JG, Urban PP, Pitz S, Guntinas-Lichius O, Gágyor I. The Diagnosis and Treatment of Idiopathic Facial Paresis (Bell's Palsy). Dtsch Arztebl Int. 2019 Oct 11;116(41):692-702. doi: 10.3238/arztebl.2019.0692. PMID: 31709978; PMCID: PMC6865187.`,

		`<sup>5</sup>  Heckmann JG, Urban PP, Pitz S, Guntinas-Lichius O, Gágyor I. The Diagnosis and Treatment of Idiopathic Facial Paresis (Bell's Palsy). Dtsch Arztebl Int. 2019 Oct 11;116(41):692-702. doi: 10.3238/arztebl.2019.0692. PMID: 31709978; PMCID: PMC6865187.`,

		`<sup>6</sup> Heckmann JG, Urban PP, Pitz S, Guntinas-Lichius O, Gágyor I. The Diagnosis and Treatment of Idiopathic Facial Paresis (Bell's Palsy). Dtsch Arztebl Int. 2019 Oct 11;116(41):692-702. doi: 10.3238/arztebl.2019.0692. PMID: 31709978; PMCID: PMC6865187.`,

		`<sup>7</sup>  Heckmann JG, Urban PP, Pitz S, Guntinas-Lichius O, Gágyor I. The Diagnosis and Treatment of Idiopathic Facial Paresis (Bell's Palsy). Dtsch Arztebl Int. 2019 Oct 11;116(41):692-702. doi: 10.3238/arztebl.2019.0692. PMID: 31709978; PMCID: PMC6865187`,


	
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
