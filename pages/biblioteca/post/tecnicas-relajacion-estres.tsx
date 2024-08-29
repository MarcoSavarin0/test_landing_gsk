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
**El estrés crónico es un problema que cada vez crece más y que afecta a gran parte de la sociedad en todo el mundo**. La constante presencia de estrés en nuestro cuerpo puede tener graves consecuencias para nuestra salud física y mental. En este artículo te presentamos diversas técnicas de relajación para contrarrestar el estrés crónico y ayudarte a tener una mayor calidad de vida.<sup>[1]</sup>



## La relación entre el estrés crónico y la salud

**El estrés crónico es una condición persistente que puede llevar a una variedad de problemas tanto físicos como emocionales.**. Esta forma continua de tensión afecta a nuestro cuerpo de manera más profunda de lo que muchos imaginan.<sup>[2]</sup>

Veamos algunos aspectos claves:

- **Impacto en el sistema cardiovascular**:  El estrés crónico puede elevar la presión arterial y aumentar la frecuencia cardíaca. Esto, a largo plazo, puede llevar a enfermedades cardíacas, incluyendo el riesgo de ataques cardíacos.<sup>[3]</sup>


- **Problemas digestivos**: La tensión constante puede afectar la digestión, llevando a síntomas como indigestión, acidez o incluso el síndrome del intestino irritable (SII).<sup>[4]</sup>


- **  Trastornos del sueño**: El estrés crónico frecuentemente interfiere con el sueño, lo que puede generar insomnio. A su vez, la falta de sueño puede incrementar los niveles de estrés, creando un círculo vicioso.<sup>[5]</sup>


- **Sistema inmunológico debilitado**: La exposición prolongada al estrés puede debilitar nuestro sistema inmunológico, haciéndonos más susceptibles a infecciones y enfermedades.<sup>[6]</sup>


- **Impacto en la salud mental**: No solo el cuerpo sufre; también la mente. El estrés crónico puede llevar a trastornos de ansiedad, depresión y una reducción general en la calidad de vida.<sup>[7]</sup>


- ** Conexión con el peso corporal**: Curiosamente, el estrés crónico también puede tener un impacto en nuestro peso. Puede llevar a hábitos alimenticios poco saludables, como comer en exceso o elegir alimentos poco saludables, lo que contribuye al aumento de peso.<sup>[8]</sup>


## Técnicas de relajación para reducir los niveles de estrés

**Las técnicas de relajación son métodos y prácticas que tienen como objetivo liberar la tensión física y mental**  ayudando a reducir el estrés y la ansiedad.<sup>[9]</sup>

Existen varias técnicas para disminuir el estrés crónico:

- **Meditación**: Ayuda a centrarse en el momento presente y a limpiar la mente. Además, la meditación puede mejorar la conexión entre mente y cuerpo, ofreciendo una sensación de paz y equilibrio que beneficia tanto la salud mental como la física.<sup>[10]</sup>


- **Yoga**: Combina posturas físicas y meditación. A través de la práctica del yoga, no solo se gana flexibilidad y fuerza, sino también se logra una mayor conciencia de la respiración y el cuerpo, lo que puede ayudar a reducir el estrés y aumentar la calma.<sup>[11]</sup>


- **Masajes**: Pueden liberar la tensión muscular y mejorar la circulación. Además, los masajes tienen el potencial de reducir la producción de hormonas relacionadas con el estrés como el cortisol, permitiendo una sensación de relajación y bienestar.<sup>[12]</sup>


- **  Ejercicio físico**: Actividades como correr o nadar también pueden ser útiles. Además de los beneficios cardiovasculares, el ejercicio físico libera endorfinas, conocidas como "las hormonas de la felicidad", que mejoran el estado de ánimo y disminuyen la percepción del dolor.<sup>[13]</sup>


Estas técnicas representan solo algunas de las formas en que puedes enfrentar el estrés crónico. La clave está en probar diferentes métodos y encontrar el que mejor se adapte a tus necesidades y estilo de vida. Si creés que el estrés está afectando tu calidad de vida o tenés algunos de esos síntomas, no dudes en consultar al médico para que te de un diagnóstico adecuado.

## ¿Existe alguna relación entre el estrés y el Herpes Zóster?


**Si bien no existe una relación directa entre el Herpes Zóster y el estrés, ambas condiciones pueden estar vinculadas de alguna manera.**Pero para entender esta conexión, tenemos que definir primero qué es y cómo puede afectar a tu salud.<sup>[14]/sup>

**El Herpes Zóster, también conocido como culebrilla, es una afección causada por el virus varicela-zóster, el mismo que provoca la varicela, y que genera una erupción dolorosa en la piel. Después de la varicela**, el virus permanece latente en el cuerpo y puede reactivarse años más tarde como Herpes Zóster.<sup>[15]/sup>


Por otro lado, el estrés crónico afecta el sistema inmunológico y lo debilita<sup>[16]/sup>. **Un sistema inmunológico debilitado puede ser menos eficiente en mantener el virus varicela-zóster en estado latente, lo que puede llevar a su reactivación.<sup>[17]/sup>**


**La gestión efectiva del estrés puede ser una estrategia preventiva contra el Herpes Zóster**. Practicar técnicas de relajación y llevar un estilo de vida saludable pueden fortalecer el sistema inmunológico y, posiblemente, reducir el riesgo de reactivación del virus.<sup>[18]/sup>

Si crees que vos o alguien que conocés [ síntomas de Herpes Zóster](https://www.hablemosdezoster.com/#sintomas) **no dudes en consultar con tu equipo médico para recibir el tratamiento adecuado.**
 

El Herpes Zóster es una enfermedad causada por el mismo virus que provoca la varicela.

NP-AR-HZU-WCNT-230017


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
					"title": "¿Cómo reducir el estrés crónico con técnicas de relajación?",
					"image": "N33 _HZ y Estres_",
					"metatitle": "Reducir estrés crónico: técnicas y salud | Blog | Hablemos de Zóster",
					"metadescription": "Aprendé a reducir el estrés crónico con estas técnicas. Descubrí cómo puede afectar a tu salud física y emocional. ¡Mejorá tu salud hoy!",
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
		'<sup>[1]</sup> Marin MF, Lord C, Andrews J, Juster RP, Sindi S, Arsenault-Lapierre G, Fiocco AJ, Lupien SJ. Chronic stress, cognitive functioning and mental health. Neurobiol Learn Mem. 2011 Nov;96(4):583-95. doi: 10.1016/j.nlm.2011.02.016. Epub 2011 Mar 2. PMID: 21376129.',

		'<sup>[2]</sup>  McEwen BS. Neurobiological and Systemic Effects of Chronic Stress. Chronic Stress (Thousand Oaks). 2017 Jan-Dec;1:2470547017692328. doi: 10.1177/2470547017692328. Epub 2017 Apr 10. PMID: 28856337; PMCID: PMC5573220.',

		'<sup>[3]</sup>  Iob E, Steptoe A. Cardiovascular Disease and Hair Cortisol: a Novel Biomarker of Chronic Stress. Curr Cardiol Rep. 2019 Aug 30;21(10):116. doi: 10.1007/s11886-019-1208-7. PMID: 31471749; PMCID: PMC6717172 ',

		'<sup>[4]</sup>  Cherpak CE. Mindful Eating: A Review Of How The Stress-Digestion-Mindfulness Triad May Modulate And Improve Gastrointestinal And Digestive Function. Integr Med (Encinitas). 2019 Aug;18(4):48-53. PMID: 32549835; PMCID: PMC7219460 ',

		'<sup>[5] </sup> Agorastos A, Olff M. Sleep, circadian system and traumatic stress. Eur J Psychotraumatol. 2021 Sep 28;12(1):1956746. doi: 10.1080/20008198.2021.1956746. PMID: 34603634; PMCID: PMC8480713',

		'<sup>[6]</sup>  Zefferino R, Di Gioia S, Conese M. Molecular links between endocrine, nervous and immune system during chronic stress. Brain Behav. 2021 Feb;11(2):e01960. doi: 10.1002/brb3.1960. Epub 2020 Dec 8. PMID: 33295155; PMCID: PMC7882157',

		'<sup>[7]</sup> Marin MF, Lord C, Andrews J, Juster RP, Sindi S, Arsenault-Lapierre G, Fiocco AJ, Lupien SJ. Chronic stress, cognitive functioning and mental health. Neurobiol Learn Mem. 2011 Nov;96(4):583-95. doi: 10.1016/j.nlm.2011.02.016. Epub 2011 Mar 2. PMID: 21376129.',

		'<sup>[8]</sup> Torres SJ, Nowson CA. Relationship between stress, eating behavior, and obesity. Nutrition. 2007 Nov-Dec;23(11-12):887-94. doi: 10.1016/j.nut.2007.08.008. Epub 2007 Sep 17. PMID: 17869482.',

		'<sup>[9]</sup> National Heart, Lung, and Blood Institute [2011]. Your guide to healthy sleep. DHHS (NIH) Publication No. 11-5271. Washington, DC: Department of Health and Human Services, National Institutes of Health, National Heart, Lung, and Blood Institute',

		'<sup>[10]</sup> Lemay V, Hoolahan J, Buchanan A. Impact of a Yoga and Meditation Intervention on Students Stress and Anxiety Levels. Am J Pharm Educ. 2019 Jun;83(5):7001. doi: 10.5688/ajpe7001. PMID: 31333265; PMCID: PMC6630857.',

		'<sup>[11]</sup> Lemay V, Hoolahan J, Buchanan A. Impact of a Yoga and Meditation Intervention on Students Stress and Anxiety Levels. Am J Pharm Educ. 2019 Jun;83(5):7001. doi: 10.5688/ajpe7001. PMID: 31333265; PMCID: PMC6630857.',

		'<sup>[12]</sup>  Kurebayashi LF, Turrini RN, Souza TP, Takiguchi RS, Kuba G, Nagumo MT. Massage and Reiki used to reduce stress and anxiety: Randomized Clinical Trial. Rev Lat Am Enfermagem. 2016 Nov 28;24:e2834. doi: 10.1590/1518-8345.1614.2834. PMID: 27901219; PMCID: PMC5172615.',

		'<sup>[13]</sup>   Hamer M, Endrighi R, Poole L. Physical activity, stress reduction, and mood: insight into immunological mechanisms. Methods Mol Biol. 2012;934:89-102. doi: 10.1007/978-1-62703-071-7_5. PMID: 22933142',

		'<sup>[14]</sup>   Schmidt SAJ, Sørensen HT, Langan SM, Vestergaard M. Perceived psychological stress and risk of herpes zoster: a nationwide population-based cohort study. Br J Dermatol. 2021 Jul;185(1):130-138. doi: 10.1111/bjd.19832. Epub 2021 May 7. PMID: 33511645; PMCID: PMC8360205.',

		'<sup>[15]</sup>  Schmader K. Herpes Zoster. Clin Geriatr Med. 2016 Aug;32(3):539-53. doi: 10.1016/j.cger.2016.02.011. Epub 2016 Apr 9. PMID: 27394022.',

		'<sup>[16]</sup>  Reiche EM, Nunes SO, Morimoto HK. Stress, depression, the immune system, and cancer. Lancet Oncol. 2004 Oct;5(10):617-25. doi: 10.1016/S1470-2045(04)01597-9. PMID: 15465465.',

		'<sup>[17]</sup>   Schmader K. Herpes Zoster. Clin Geriatr Med. 2016 Aug;32(3):539-53. doi: 10.1016/j.cger.2016.02.011. Epub 2016 Apr 9. PMID: 27394022.',

		'<sup>[18]</sup>   Schmader K, George LK, Burchett BM, Hamilton JD, Pieper CF. Race and stress in the incidence of herpes zoster in older adults. J Am Geriatr Soc. 1998 Aug;46(8):973-7. doi: 10.1111/j.1532-5415.1998.tb02751.x. PMID: 9706885.',


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