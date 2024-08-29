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


La dermatitis de contacto es una afección común de la piel que se presenta cuando una persona entra en contacto con sustancias irritantes o alergénicas. Aunque puede ser molesta y causar incomodidad, generalmente no es una enfermedad grave. En este artículo, veremos cuáles son las causas y síntomas de la dermatitis de contacto y cómo podemos identificarla. Recuerda que ante la duda, siempre es recomendable acudir a un equipo médico para obtener la atención adecuada.

## Causas de la dermatitis de contacto

Existen dos tipos principales de dermatitis de contacto: la dermatitis de contacto irritativa y la dermatitis de contacto alérgica. Ambas tienen causas diferentes, pero sus síntomas pueden ser similares. A continuación te mostramos con detalle cada tipo:

### Dermatitis de contacto irritativa

Este tipo de dermatitis de contacto es la forma más común y se produce cuando la piel entra en contacto con sustancias irritantes, como por ejemplo:

- Productos químicos
- Detergentes
- Jabones
- Disolventes 
- Incluso agua caliente

Cabe destacar que las personas con piel sensible son más propensas a desarrollar dermatitis de contacto irritativa.

### Dermatitis de contacto alérgica

A diferencia de la irritativa, la dermatitis de contacto alérgica es una reacción alérgica a una sustancia específica. Algunas de las sustancias más comunes que causan esta reacción incluyen:

- Níquel
- Látex 
- Fragancias
- Conservantes en productos cosméticos

## Síntomas de la dermatitis de contacto

La dermatitis de contacto puede presentar una variedad de síntomas, y estos pueden variar en intensidad y apariencia dependiendo de la causa y la sensibilidad de la persona afectada. A continuación, te contamos con más detalle cuáles son los síntomas más comunes de la dermatitis de contacto:

- **Enrojecimiento e hinchazón de la piel:** La zona de la piel que ha estado en contacto con el irritante o alérgeno puede volverse roja e inflamada. Esta inflamación puede ser leve o intensa, y puede extenderse más allá del área de contacto directo.
- **Picazón intensa:** Uno de los síntomas más notables y molestos de la dermatitis de contacto es la picazón intensa. La picazón puede ser constante o intermitente y puede empeorar al rascarse.
- **Ardor o dolor en la zona afectada:** Además de la picazón, la piel afectada por la dermatitis de contacto puede experimentar una sensación de ardor o dolor. Este síntoma puede ser más notable cuando se toca o se aplica presión sobre la zona.
- **Piel seca, agrietada o escamosa:** La dermatitis de contacto puede causar que la piel se reseque, lo que puede llevar a la aparición de grietas o descamación. Esto puede ser más común en casos de dermatitis de contacto irritativa.
- **Ampollas o vesículas:** En algunos casos, la dermatitis de contacto puede causar la formación de ampollas o vesículas pequeñas en la piel. Estas ampollas pueden estar llenas de líquido y pueden supurar o formar costras al romperse.
- **Cambios en la pigmentación de la piel:** A medida que la dermatitis de contacto mejora, puede haber cambios temporales en la pigmentación de la piel, como oscurecimiento o aclaramiento en el área afectada.

Es importante tener en cuenta que los síntomas de la dermatitis de contacto pueden tardar horas o incluso días en aparecer después del contacto con el irritante o alérgeno, y su duración puede variar desde unos pocos días hasta varias semanas, dependiendo de la gravedad de la reacción.

## ¿Existe una relación entre la dermatitis de contacto y el Herpes Zóster?

La dermatitis de contacto y el Herpes Zóster son dos afecciones cutáneas distintas, pero pueden presentar ciertas similitudes en cuanto a síntomas y apariencia, y es por esta razón que muchas personas las confunden. A continuación, te contamos algunas de las similitudes que pueden presentar a simple vista entre estas dos condiciones:

- **Síntomas cutáneos parecidos:** Ambas afecciones pueden causar enrojecimiento. Sin embargo, la distribución y el patrón de las lesiones suelen ser diferentes. Por un lado, la dermatitis de contacto generalmente afecta las áreas de la piel que han estado en contacto directo con el irritante o alérgeno, mientras que el Herpes Zóster aparece en un área del cuerpo siguiendo el trayecto de un nervio, lo que se conoce como dermatoma.
- **Causas de origen diferentes:** Como mencionamos anteriormente, la dermatitis de contacto es una reacción inflamatoria de la piel provocada por el contacto con sustancias irritantes o alérgenas. Por otro lado, el Herpes Zóster es una enfermedad infecciosa causada por la reactivación del virus de la varicela-zóster, que permanece latente en el cuerpo después de haber padecido varicela.

Si sospechas que tienes dermatitis de contacto o Herpes Zóster, te recomendamos consultar a un equipo médico para obtener un diagnóstico preciso y recibir el tratamiento adecuado.

**NP-AR-HZU-WCNT-230013**



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
					"title": "¿Qué es la dermatitis de contacto y cuáles son sus síntomas?",
					"image": "dermatitis-contacto",
					"metatitle": "Herpes Zóster y la Diabetes | Factores de Riesgo | 2024",
					"metadescription": "Te contamos que es la Dermatitis de contacto y cuales son sus principales síntomas según expertos médicos.",
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
		"1 Li Y, Li L. Contact Dermatitis: Classifications and Management. Clin Rev Allergy Immunol. 2021 Dec;61(3):245-281. doi: 10.1007/s12016-021-08875-0. Epub 2021 Jul 15. PMID: 34264448.",
		"2 Usatine RP, Riojas M. Diagnosis and management of contact dermatitis. Am Fam Physician. 2010 Aug 1;82(3):249-55. PMID: 20672788.",
		"3 Usatine RP, Riojas M. Diagnosis and management of contact dermatitis. Am Fam Physician. 2010 Aug 1;82(3):249-55. PMID: 20672788.",
		"4 Brar KK. A review of contact dermatitis. Ann Allergy Asthma Immunol. 2021 Jan;126(1):32-39. doi: 10.1016/j.anai.2020.10.003. Epub 2020 Oct 20. PMID: 33091591.",
		"5 Brar KK. A review of contact dermatitis. Ann Allergy Asthma Immunol. 2021 Jan;126(1):32-39. doi: 10.1016/j.anai.2020.10.003. Epub 2020 Oct 20. PMID: 33091591.",
		"6 Brar KK. A review of contact dermatitis. Ann Allergy Asthma Immunol. 2021 Jan;126(1):32-39. doi: 10.1016/j.anai.2020.10.003. Epub 2020 Oct 20. PMID: 33091591.",
		"7 Scheinman PL, Vocanson M, Thyssen JP, Johansen JD, Nixon RL, Dear K, Botto NC, Morot J, Goldminz AM. Contact dermatitis. Nat Rev Dis Primers. 2021 May 27;7(1):38. doi: 10.1038/s41572-021-00271-4. PMID: 34045488.",
		"8 Scheinman PL, Vocanson M, Thyssen JP, Johansen JD, Nixon RL, Dear K, Botto NC, Morot J, Goldminz AM. Contact dermatitis. Nat Rev Dis Primers. 2021 May 27;7(1):38. doi: 10.1038/s41572-021-00271-4. PMID: 34045488.",
		"9 Scheinman PL, Vocanson M, Thyssen JP, Johansen JD, Nixon RL, Dear K, Botto NC, Morot J, Goldminz AM. Contact dermatitis. Nat Rev Dis Primers. 2021 May 27;7(1):38. doi: 10.1038/s41572-021-00271-4. PMID: 34045488.",
		"10 Kobayashi T, Ono Y, Fujita N, Tanaka Y. Herpes Zoster with Contact Dermatitis Developing under a Patch. Intern Med. 2023 Jan 1;62(1):151. doi: 10.2169/internalmedicine.9766-22. Epub 2022 May 21. PMID: 35598999; PMCID: PMC9876713.",
		"11 Lu LY, Yen H, Chen WT. Zosteriform contact dermatitis mimicking herpes zoster. Contact Dermatitis. 2021 Dec;85(6):706-707. doi: 10.1111/cod.13942. Epub 2021 Jul 24. PMID: 34272746.",
		"12 Kobayashi T, Ono Y, Fujita N, Tanaka Y. Herpes Zoster with Contact Dermatitis Developing under a Patch. Intern Med. 2023 Jan 1;62(1):151. doi: 10.2169/internalmedicine.9766-22. Epub 2022 May 21. PMID: 35598999; PMCID: PMC9876713.",
		"13 Kobayashi T, Ono Y, Fujita N, Tanaka Y. Herpes Zoster with Contact Dermatitis Developing under a Patch. Intern Med. 2023 Jan 1;62(1):151. doi: 10.2169/internalmedicine.9766-22. Epub 2022 May 21. PMID: 35598999; PMCID: PMC9876713."
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