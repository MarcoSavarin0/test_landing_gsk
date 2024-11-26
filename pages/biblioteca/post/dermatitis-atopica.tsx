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

La dermatitis atópica es una afección cutánea crónica que suele aparecer con frecuencia y que afecta a personas de todas las edades. Comúnmente conocida como eczema, puede ser una condición incómoda y, a veces, dolorosa. Pero, ¿qué es exactamente la dermatitis atópica y qué la provoca? 

En este artículo hablaremos de las diferencias entre esta patología y el Herpes Zóster y también abordaremos en profundidad la dermatitis atópica, sus causas y cómo manejar esta afección de la piel.

## Causas de la Dermatitis Atópica

La dermatitis atópica es una forma de eczema que se caracteriza por la inflamación crónica de la piel, provocando enrojecimiento, sequedad, picazón y, en ocasiones, descamación. Afecta principalmente a bebés y niños, aunque también puede presentarse en adultos. 

La Dermatitis Atópica es una enfermedad compleja con un amplio espectro de presentaciones clínicas y combinaciones de síntomas. Las primeras manifestaciones de la Dermatitis Atópica suelen aparecer a una edad temprana y a menudo preceden a otras enfermedades alérgicas como el asma o la rinitis alérgica. Sin embargo, se ha identificado una serie de factores que contribuyen a su desarrollo:

### **Genética:**
La predisposición genética juega un papel fundamental en la dermatitis atópica. Si un padre o ambos padecen eczema o alergias, es más probable que sus hijos también desarrollen dermatitis atópica.

### **Sistema inmunológico:**
Se cree que las personas con dermatitis atópica tienen un sistema inmunológico hiperactivo que responde de manera exagerada a ciertos estímulos, lo que provoca inflamación en la piel.

### **Barrera cutánea:**
Las personas con dermatitis atópica a menudo tienen una alteración o deterioro de la barrera cutánea, lo que permite la entrada de alérgenos e irritantes y la pérdida de humedad, lo que a su vez provoca la inflamación y el enrojecimiento asociados con el eczema.

### **Factores ambientales:**
La exposición a irritantes y alérgenos presentes en el entorno, como el polen, el moho, los ácaros del polvo, los productos químicos y los detergentes, puede desencadenar o agravar la dermatitis atópica.

### **Estrés:**
Si bien el estrés no causa directamente la dermatitis atópica, puede empeorar los síntomas en algunas personas, ya que afecta el sistema inmunológico y puede provocar brotes de eczema.

## Síntomas de la Dermatitis Atópica

Algunos de los síntomas más comunes de la dermatitis atópica incluyen:

- Picazón intensa
- Piel seca y escamosa
- Enrojecimiento e inflamación
- Engrosamiento de la piel en áreas afectadas

## ¿En qué se relaciona la dermatitis atópica con el Herpes Zóster?

La dermatitis atópica y el Herpes Zóster son dos afecciones cutáneas diferentes, pero están relacionadas debido a la desregulación y debilitación del sistema inmune. 

Si experimentás síntomas de cualquiera de estas afecciones, es fundamental consultar a un médico o dermatólogo para obtener un diagnóstico y tratamiento adecuados.

## Consecuencias de la dermatitis atópica

Si bien la dermatitis atópica no es una enfermedad potencialmente mortal, puede tener un impacto significativo en la calidad de vida de quienes la padecen. Algunas de las consecuencias de la dermatitis atópica pueden incluir:

### **Infecciones secundarias:**
El rascado constante puede causar lesiones en la piel, lo que aumenta el riesgo de infecciones bacterianas, virales o fúngicas.
### **Trastornos del sueño:**
La picazón intensa puede provocar insomnio y dificultad para dormir, lo que puede llevar a problemas de salud adicionales.
### **Ansiedad y depresión:**
Lidiar con una enfermedad crónica de la piel puede afectar la autoestima y provocar ansiedad o depresión en algunas personas.
### **Efectos secundarios del tratamiento:**
Algunos tratamientos para la dermatitis atópica, como corticosteroides tópicos, pueden causar efectos secundarios a largo plazo si se usan en exceso.

##¿Qué tan grave es la dermatitis atópica?

Por lo general, se considera que la situación es "seria" cuando más del 10% de la superficie del cuerpo de un paciente presenta placas de eczema, si áreas específicas como la cara, el cuello, los genitales, las palmas de las manos o las plantas de los pies se ven afectadas, o si la enfermedad tiene un gran efecto en la calidad de vida.

De esta manera, podemos concluir en que la dermatitis atópica es una afección cutánea crónica y compleja que puede afectar la calidad de vida de quienes la padecen. Aunque no existe una cura definitiva, comprender sus síntomas, causas y consecuencias es fundamental para manejarla de manera efectiva y minimizar sus efectos negativos. 

Aunque el Herpes Zóster no causa Dermatitis Atópica directamente, los síntomas de ambas afecciones pueden confundirse, ya que ambas presentan erupciones cutáneas y picazón.

Si creés que tenés alguno de los síntomas mencionados, consultá a un médico o médica para tener un diagnóstico adecuado.






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
					"title": "¿Qué es la dermatitis atópica y cuáles son sus causas y síntomas?",
					"image": "dermatitis-atopica",
					"metatitle": "¿Qué es la dermatitis atópica?",
					"metadescription": " En este artículo te contamos las causas y los síntomas de la dermatitis atópica. ¡Cuidá tu salud!",
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
		"Kim J, Kim BE, Leung DYM. Pathophysiology of atopic dermatitis: Clinical implications. Allergy Asthma Proc. 2019 Mar 1;40(2):84-92. doi: 10.2500/aap.2019.40.4202. PMID: 30819278; PMCID: PMC6399565.",
		"Kim J, Kim BE, Leung DYM. Pathophysiology of atopic dermatitis: Clinical implications. Allergy Asthma Proc. 2019 Mar 1;40(2):84-92. doi: 10.2500/aap.2019.40.4202. PMID: 30819278; PMCID: PMC6399565.",
		"Kim J, Kim BE, Leung DYM. Pathophysiology of atopic dermatitis: Clinical implications. Allergy Asthma Proc. 2019 Mar 1;40(2):84-92. doi: 10.2500/aap.2019.40.4202. PMID: 30819278; PMCID: PMC6399565."
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
<<<<<<< Updated upstream
								<div>
									<span className="markdown-body">NP-AR-HZU-WCNT-230007</span>
								</div>
=======
>>>>>>> Stashed changes
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