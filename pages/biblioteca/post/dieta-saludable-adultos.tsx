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

**Mantener una dieta saludable en la edad adulta es fundamental para garantizar una buena calidad de vida y prevenir enfermedades**. A medida que envejecemos nuestras necesidades nutricionales pueden cambiar por eso cuidar la alimentación cotidianamente puede marcar la diferencia en nuestro bienestar general.<sup>[1]</sup>
En este artículo te contamos cuáles son los **beneficios de una dieta saludable para adultos y cómo podemos incorporar alimentos nutritivos en nuestro día a día**.

## ¿Por qué es importante tener una dieta saludable en la adultez?
Una dieta saludable en la edad adulta **es clave para mantener un peso adecuado, fortalecer el sistema inmunológico, prevenir enfermedades crónicas como la diabetes y la hipertensión e incluso para mejorar nuestra salud mental y emocional.<sup>[2]</sup>**
Además una alimentación equilibrada también contribuye a mantener la energía y la vitalidad necesarias para enfrentar las actividades diarias y disfrutar de una vida plena y activa.<sup>[3]</sup>

## Los nutrientes esenciales para una dieta saludable en adultos mayores
Para llevar adelante una dieta saludable en la edad adulta es importante incluir los siguientes nutrientes esenciales:<sup>[4]</sup>
- **Proteínas**: Son fundamentales para mantener y reparar los tejidos del cuerpo. Las fuentes de proteínas incluyen carnes magras, pescado, huevos, legumbres, frutos secos y lácteos bajos en grasas.
- **Grasas saludables**: Las grasas insaturadas como las que se encuentran en el aceite de oliva, aguacate y frutos secos ayudan a mantener el corazón y el cerebro sanos.
- **Fibra**: Ayuda a mantener el sistema digestivo en óptimas condiciones y a controlar los niveles de azúcar en sangre. La fibra se encuentra en alimentos como frutas, verduras, legumbres y cereales integrales.
- **Vitaminas y minerales**: Son esenciales para el correcto funcionamiento del organismo. Incluir una variedad de frutas, verduras, lácteos y proteínas en nuestra dieta nos asegurará obtener las cantidades adecuadas de estos micronutrientes.

## Consejos para incorporar alimentos saludables en su dieta diaria

**Para incluir todos esos nutrientes esenciales es importante tener en cuenta algunos alimentos que debés consumir y así lograr tener una dieta saludable en tu rutina.**

### **1. Consumir al menos cinco porciones de frutas y verduras al día** 

**Las frutas y verduras son ricas en vitaminas, minerales y fibra, lo que las convierte en alimentos esenciales en una dieta saludable para adultos**. Ayudan a mantener un peso adecuado, fortalecer el sistema inmunológico, prevenir enfermedades crónicas y mejorar la salud digestiva.<sup>[5]</sup>

### **2. Reemplazar productos refinados por cereales integrales**

Otro consejo es optar por cereales integrales en lugar de productos refinados, ya que **los cereales integrales tienen un alto contenido de fibra y nutrientes esenciales que ayudan a mantener una digestión saludable.<sup>[6]</sup>**

### **3. Incluir proteínas y alimentos de calidad**

Es importante también incluir proteínas magras en nuestra dieta como pescado, pollo sin piel, legumbres y lácteos bajos en grasas, ya que estas **proteínas son esenciales para mantener la masa muscular y evitar la sarcopenia**. Es decir, la pérdida de masa muscular, fuerza y funcionamiento de musculatura en adultos mayores.<sup>[7]</sup>

### **4. Limitar el consumo de azúcares añadidos, grasas saturadas y sal**  

Para mantener una dieta saludable también es recomendable limitar el consumo de azúcares añadidos, grasas saturadas y sal. Los alimentos procesados y las bebidas azucaradas **suelen tener altos niveles de estos ingredientes, lo que puede aumentar el riesgo de enfermedades crónicas como diabetes y enfermedades del corazón.<sup>[8]</sup>**

### **5. Beber suficiente agua para mantenerse hidratado**  

Por último, beber suficiente agua es esencial para mantenerse hidratado y ayudar al cuerpo a funcionar correctamente. Es recomendable beber al menos 8 vasos de agua al día y limitar el consumo de bebidas azucaradas o alcohólicas.<sup>[9]</sup>

## ¿Existe algún vínculo entre el Herpes Zóster y mantener una dieta saludable?
Si bien no hay evidencia directa que afirme que una alimentación saludable previene el Herpes Zóster, es importante mencionar que tener una dieta equilibrada puede ayudar a prevenir enfermedades asociadas a malos hábitos alimenticios como la diabetes o enfermedades cardiovasculares. Estas condiciones de salud pueden debilitar el sistema inmunológico y aumentar el riesgo de padecer Herpes Zóster.<sup>[10]</sup>
El ¿[Herpes Zóster ](https://www.hablemosdezoster.com/#que-es-herpes-zoster)? es una condición causada por el virus varicela-zóster, el mismo que causa la varicela. Después de haber padecido varicela en la infancia, el virus permanece en el organismo y puede reactivarse. **Esta afección afecta con mayor frecuencia a personas en edad adulta y personas con el sistema inmunológico debilitado.<sup>[11]</sup>**
Por lo tanto, aunque no haya un vínculo directo entre la dieta y el Herpes Zóster, mantener una alimentación balanceada y prevenir enfermedades crónicas puede ser beneficioso para el fortalecimiento general del sistema inmunológico.<sup>[12]</sup>

En general, **una dieta saludable es una parte importante del cuidado preventivo de la salud para los adultos mayores y puede ayudar a reducir el riesgo de diversas enfermedades y condiciones de salud.**<sup>[13]</sup>

**Si tenés alguna duda o creés que tenés algún problema con tu salud, no dudes en consultar al médico para recibir un diagnóstico adecuado.**
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
					"title": "Beneficios de una dieta saludable en la edad adulta",
					"image": "Nota30",
					"metatitle": "▷ Enfermedades Respiratorias y Herpes Zóster | Beneficio & dieta",
					"metadescription": "Conocé los beneficios de una dieta saludable en la edad adulta. Te damos algunos consejos de alimentación para tus días. ¡Cuidá tu salud!",
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
        `<sup>1</sup> Álvarez, J., Cuenllas, A., Gómez, F., López, M., Mañas, M., Hidalgo, D. y Sánchez, B. Alimentación y nutrición saludable en los mayores. Mitos y realidades. Recuperado de <a href="https://www.segg.es/download.asp?" target="_blank">https://www.segg.es/download.asp?</a>.`,
        `<sup>2</sup> Álvarez, J., Cuenllas, A., Gómez, F., López, M., Mañas, M., Hidalgo, D. y Sánchez, B. Alimentación y nutrición saludable en los mayores. Mitos y realidades. Recuperado de <a href="https://www.segg.es/download.asp?" target="_blank">https://www.segg.es/download.asp?</a>.`,
        `<sup>3</sup> Cheng J, Burke LE, Venditti EM, Sereika SM, Glynn NW, Albert SM, Newman AB. Diet Improvements in Community-Dwelling Older Adults in the Mobility and Vitality Lifestyle Program. J Appl Gerontol. 2022 May;41(5):1480-1484. doi: 10.1177/07334648211066916. Epub 2022 Feb 2. PMID: 35109691; PMCID: PMC9035039.`,
        `<sup>4</sup> Roberts SB, Silver RE, Das SK, Fielding RA, Gilhooly CH, Jacques PF, Kelly JM, Mason JB, McKeown NM, Reardon MA, Rowan S, Saltzman E, Shukitt-Hale B, Smith CE, Taylor AA, Wu D, Zhang FF, Panetta K, Booth S. Healthy Aging-Nutrition Matters: Start Early and Screen Often. Adv Nutr. 2021 Jul 30;12(4):1438-1448. doi: 10.1093/advances/nmab032. Erratum in: Adv Nutr. 2021 Jul 30;12(4):1597-1598. PMID: 33838032; PMCID: PMC8994693.`,
        `<sup>5</sup> Głąbska D, Guzek D, Groele B, Gutkowska K. Fruit and Vegetable Intake and Mental Health in Adults: A Systematic Review. Nutrients. 2020 Jan 1;12(1):115. doi: 10.3390/nu12010115. PMID: 31906271; PMCID: PMC7019743.`,
        `<sup>6</sup> Roberts SB, Silver RE, Das SK, Fielding RA, Gilhooly CH, Jacques PF, Kelly JM, Mason JB, McKeown NM, Reardon MA, Rowan S, Saltzman E, Shukitt-Hale B, Smith CE, Taylor AA, Wu D, Zhang FF, Panetta K, Booth S. Healthy Aging-Nutrition Matters: Start Early and Screen Often. Adv Nutr. 2021 Jul 30;12(4):1438-1448. doi: 10.1093/advances/nmab032. Erratum in: Adv Nutr. 2021 Jul 30;12(4):1597-1598. PMID: 33838032; PMCID: PMC8994693.`,
        `<sup>7</sup> Granic A, Sayer AA, Robinson SM. Dietary Patterns, Skeletal Muscle Health, and Sarcopenia in Older Adults. Nutrients. 2019 Mar 30;11(4):745. doi: 10.3390/nu11040745. PMID: 30935012; PMCID: PMC6521630.`,
        `<sup>8</sup> Zhou X, Perez-Cueto FJA, Santos QD, Monteleone E, Giboreau A, Appleton KM, Bjørner T, Bredie WLP, Hartwell H. A Systematic Review of Behavioural Interventions Promoting Healthy Eating among Older People. Nutrients. 2018 Jan 26;10(2):128. doi: 10.3390/nu10020128. PMID: 29373529; PMCID: PMC5852704.`,
        `<sup>9</sup> Nakamura Y, Watanabe H, Tanaka A, Yasui M, Nishihira J, Murayama N. Effect of Increased Daily Water Intake and Hydration on Health in Japanese Adults. Nutrients. 2020 Apr 23;12(4):1191. doi: 10.3390/nu12041191. PMID: 32340375; PMCID: PMC7231288.`,
        `<sup>10</sup> Venter C, Eyerich S, Sarin T, Klatt KC. Nutrition and the Immune System: A Complicated Tango. Nutrients. 2020 Mar 19;12(3):818. doi: 10.3390/nu12030818. PMID: 32204518; PMCID: PMC7146186.`,
        `<sup>11</sup> John AR, Canaday DH. Herpes Zoster in the Older Adult. Infect Dis Clin North Am. 2017 Dec;31(4):811-826. doi: 10.1016/j.idc.2017.07.016. PMID: 29079160; PMCID: PMC5724974.`,
        `<sup>12</sup> Maggi S, Gabutti G, Franco E, Bonanni P, Conversano M, Ferro A, Lazzari M, Rossi A, Scotti S, Vitale F, Volpi A, Greco D. Preventing and managing herpes zoster: key actions to foster healthy aging. Aging Clin Exp Res. 2015 Feb;27(1):5-11. doi: 10.1007/s40520-015-0314-7. Epub 2015 Feb 5. PMID: 25652328.`,
        `<sup>13</sup> Maggi S, Gabutti G, Franco E, Bonanni P, Conversano M, Ferro A, Lazzari M, Rossi A, Scotti S, Vitale F, Volpi A, Greco D. Preventing and managing herpes zoster: key actions to foster healthy aging. Aging Clin Exp Res. 2015 Feb;27(1):5-11. doi: 10.1007/s40520-015-0314-7. Epub 2015 Feb 5. PMID: 25652328.`
    ];
     
    
    
	
	
	
	

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