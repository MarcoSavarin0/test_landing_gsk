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
En la actualidad, la sociedad es cada vez más consciente de la importancia del ejercicio y la actividad física en la vida cotidiana. **Con el paso de los años, mantener una rutina de ejercicio se vuelve fundamental para disfrutar de una vida plena y saludable en la edad adulta.**<sup>[1]</sup>
En esta nota, **vamos a explorar los beneficios de mantenernos activos en la tercera edad**, así como las actividades recomendadas y consejos para integrar la actividad física en nuestra rutina diaria.

## Los beneficios del ejercicio en la tercera edad

**El ejercicio en la edad adulta aporta múltiples beneficios a nuestra salud**. Algunos de los más destacados son:

- **Mejora la calidad de vida**: El ejercicio regular ayuda a mantener la movilidad, la fuerza y la flexibilidad, lo cual es fundamental para conservar nuestra independencia y calidad de vida en la tercera edad.<sup>[2]</sup>
- **Prevención de enfermedades**: La actividad física contribuye a prevenir enfermedades cardiovasculares, diabetes tipo 2, osteoporosis, entre otras condiciones que afectan a los adultos mayores.<sup>[3]</sup>
- **Mejora el equilibrio y previene caídas**: Al fortalecer los músculos y mejorar la coordinación, el ejercicio ayuda a prevenir caídas, que son una causa común de lesiones en la tercera edad.<sup>[4]</sup>
- **Estimula la función cognitiva**: Estudios demuestran que la actividad física regular ayuda a mantener la agilidad mental y reduce el riesgo de desarrollar demencia y Alzheimer.<sup>[5]</sup>

## Actividades físicas recomendadas para personas mayores de 50 años

Mantenerse activo y comprometido con un estilo de vida físicamente activo es crucial a cualquier edad, y esto incluye a quienes tienen más de 50 años. Las personas en esta etapa de la vida a menudo gozan de una gran variedad de habilidades físicas y es importante seleccionar actividades que no solo se alineen con los intereses individuales, sino que también ofrezcan beneficios para la salud en función de sus niveles de aptitud y experiencia personal.<sup>[6]</sup>

Algunas actividades recomendadas incluyen<sup>[7]</sup>:

- **Caminar**: Caminar puede ser una excelente forma de disfrutar del aire libre y socializar, al mismo tiempo que se fortalece el corazón y los músculos de las piernas. Es versátil y puede adaptarse a cualquier ritmo.
- **Natación**: Esta actividad ofrece un ejercicio completo del cuerpo sin poner estrés en las articulaciones. La natación es ideal para todas las edades y habilidades, proporcionando tanto un desafío cardiovascular como fortalecimiento muscular.
- **Yoga o tai chi**: Estas disciplinas milenarias combinan movimientos suaves y controlados con técnicas de respiración y meditación, lo que contribuye a mejorar la flexibilidad, fuerza y equilibrio.
- **Ejercicios de fuerza y resistencia**: Incorporar ejercicios de fuerza y resistencia, como levantar pesas o realizar ejercicios con bandas elásticas, ayuda a mantener y mejorar la masa muscular.

## ¿Cómo integrar la actividad física en la rutina diaria?

Incorporar la actividad física en nuestra vida cotidiana puede ser más fácil de lo que pensamos. A continuación, te dejamos **algunas ideas para que puedas empezar**<sup>[8]</sup>:

- **Establecer objetivos realistas**: Comenzar con metas pequeñas y alcanzables nos ayuda a mantener la motivación y a progresar de manera gradual.
- **Integrar la actividad física en tus actividades diarias**: Aprovechá las tareas cotidianas para mantener la actividad, como caminar al supermercado o subir escaleras en lugar de usar el ascensor.
- **Buscar compañía**: Realizar actividades físicas con amigos o en grupo puede ser más entretenido y motivador.

## ¿Qué relación hay entre el Herpes Zóster y la actividad física?

**El Herpes Zóster, también conocido como culebrilla, es una infección viral causada por la reactivación del virus de la varicela-zóster (VZV)**. Esto sucede cuando el sistema inmunológico se debilita y afecta generalmente a personas en edad adulta.<sup>[9]</sup>
Aunque la actividad física no tiene un impacto directo sobre la aparición del Herpes Zóster, **mantener una rutina de ejercicio en la edad adulta puede ser beneficioso para estar más saludables**.<sup>[10]</sup>
A continuación, **te mostramos algunos beneficios de realizar ejercicio**<sup>[11]</sup>:

- **Fortalecimiento del sistema inmunológico**: La actividad física regular puede ser un aliado contra la inmunosenescencia, proceso en el que el sistema inmune se debilita a partir de los 50 años.
- **Reducción del estrés**: El estrés puede debilitar el sistema inmunológico y aumentar el riesgo de desarrollar Herpes Zóster. La actividad física es una excelente herramienta para manejar el estrés y mantener nuestro sistema inmunológico en óptimas condiciones.
- **Mejora del bienestar emocional**: El ejercicio también puede ayudar a mejorar nuestro bienestar emocional, lo que es especialmente importante en personas que padecen herpes zóster, ya que el dolor y las molestias asociadas a esta enfermedad pueden generar ansiedad y depresión.
- **Alivio de síntomas**: Aunque la actividad física no es un tratamiento específico para el Herpes Zóster, realizar ejercicios suaves y de bajo impacto, como caminar o practicar yoga, puede contribuir a aliviar el dolor y la tensión muscular asociados a esta enfermedad.

**La importancia del ejercicio y la actividad física en la edad adulta es innegable, tanto para prevenir enfermedades o afecciones como para mejorar nuestra calidad de vida**, manejar el estrés y mejorar nuestro bienestar emocional.<sup>[12]</sup>

Por ello, **es fundamental mantener una rutina de ejercicio adaptada a nuestras necesidades y capacidades en la tercera edad**. Recordá que ante cualquier duda que tengas sobre el estado de tu salud es importante que consultes a tu médico para recibir un diagnóstico adecuado.

NP-AR-HZU-WCNT-230016


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
					"title": "La importancia del ejercicio y actividad física en la edad adulta",
					"image": "importancia-del-ejercicio-en-adultos",
					"metatitle": "¿Por qué los adultos deben hacer ejercicio? | Blog | Hablemos de Zóster",
					"metadescription": "Te contamos cuál es la importancia del ejercicio en la edad adulta, las actividades recomendadas y cómo incorporarlas en tu rutina diaria para potenciar tu bienestar y salud a largo plazo.",
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
        '<sup>[1]</sup> An HY, Chen W, Wang CW, Yang HF, Huang WT, Fan SY. The Relationships between Physical Activity and Life Satisfaction and Happiness among Young, Middle-Aged, and Older Adults. Int J Environ Res Public Health. 2020 Jul 4;17(13):4817. doi: 10.3390/ijerph17134817. PMID: 32635457; PMCID: PMC7369812.',

        '<sup>[2]</sup> Shin CN, Lee YS, Belyea M. Physical activity, benefits, and barriers across the aging continuum. Appl Nurs Res. 2018 Dec;44:107-112. doi: 10.1016/j.apnr.2018.10.003. Epub 2018 Oct 17. PMID: 30389054.',

         '<sup>[3]</sup> Seguin R, Nelson ME. The benefits of strength training for older adults. Am J Prev Med. 2003 Oct;25(3 Suppl 2):141-9. doi: 10.1016/s0749-3797(03)00177-6. PMID: 14552938. ',

         '<sup>[4]</sup> Shin CN, Lee YS, Belyea M. Physical activity, benefits, and barriers across the aging continuum. Appl Nurs Res. 2018 Dec;44:107-112. doi: 10.1016/j.apnr.2018.10.003. Epub 2018 Oct 17. PMID: 30389054. ',

         '<sup>[5] </sup>Bherer L. Cognitive plasticity in older adults: effects of cognitive training and physical exercise. Ann N Y Acad Sci. 2015 Mar;1337:1-6. doi: 10.1111/nyas.12682. PMID: 25773610. ',

        '<sup>[6]</sup> Aparicio García-Molina, V.A.; Cabonell Baeza, A.; Delgado Fernández, M. Beneficios de la actividad física en personas mayores. Revista Internacional de Medicina y Ciencias de la Actividad Física y el Deporte, 10(40): 556-576 (2010). [http://hdl.handle.net/10481/37360]',

        '<sup>[7]</sup> U.S. Department of Health and Human Services. Physical Activity Guidelines for Americans, 2nd edition. Washington, DC: U.S.Department of Health and Human Services; 2018.',

        '<sup>[8]</sup> U.S. Department of Health and Human Services. Physical Activity Guidelines for Americans, 2nd edition. Washington, DC: U.S.Department of Health and Human Services; 2018.',

        '<sup>[9]</sup> Ehrenstein B. Diagnostik, Therapie und Prophylaxe des Herpes zoster [Diagnosis, treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec;79(10):1009-1017. German. doi: 10.1007/s00393-020-00915-y. PMID: 33141244.',

        '<sup>[10]</sup> Schmidt SAJ, Sørensen HT, Langan SM, Vestergaard M. Associations of Lifestyle and Anthropometric Factors With the Risk of Herpes Zoster: A Nationwide Population-Based Cohort Study. Am J Epidemiol. 2021 Jun 1;190(6):1064-1074. doi: 10.1093/aje/kwab027. PMID: 33569573; PMCID: PMC8168175.',

       '<sup>[11]</sup> Warburton DER, Bredin SSD. Health benefits of physical activity: a systematic review of current systematic reviews. Curr Opin Cardiol. 2017 Sep;32(5):541-556. doi: 10.1097/HCO.0000000000000437. PMID: 28708630.',

        '<sup>[12]</sup> Warburton DER, Bredin SSD. Health benefits of physical activity: a systematic review of current systematic reviews. Curr Opin Cardiol. 2017 Sep;32(5):541-556. doi: 10.1097/HCO.0000000000000437. PMID: 28708630.',


    
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