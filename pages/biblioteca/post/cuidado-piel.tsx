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

Aprender a cuidar la piel en adultos mayores es fundamental para prevenir el envejecimiento prematuro y también para protegerla de cualquier afección o enfermedad cutánea. No solo se trata de cuidar el aspecto físico, sino también de cuidar la salud cutánea en esta etapa de la vida.

En este artículo, te enseñamos cómo cuidar la piel en la adultez brindándote algunos consejos para prevenir el envejecimiento cutáneo, mantener una piel sana y enfrentar los cambios que el paso del tiempo ocasionan.

## Importancia del cuidado de la piel en adultos mayores

El paso del tiempo genera cambios naturales en la piel, como la disminución de colágeno y elastina, lo que provoca flacidez y arrugas. También puede haber una menor producción de aceites naturales, lo que resulta en sequedad y pérdida de elasticidad. Ser consciente de estos cambios te ayudará a adaptar tu rutina de cuidado de la piel adecuadamente.

Es importante consultar con un médico o dermatólogo ante cualquier síntoma o problema cutáneo para recibir el tratamiento adecuado y prevenir complicaciones. Cuidar la piel en adultos mayores es importante por varias razones:

### **Cambios en la piel debido al envejecimiento:**
al envejecer, la piel pierde elasticidad y se vuelve más delgada y seca, lo que la hace más vulnerable a lesiones, infecciones y otros problemas cutáneos. Además, la capacidad de cicatrización disminuye con la edad, lo que hace que cualquier herida o lesión tome más tiempo en sanar.
  
### **Mayor sensibilidad:**
la piel de los adultos mayores puede ser más sensible a factores externos, como la exposición al sol, productos químicos y cambios de temperatura. Esto puede aumentar el riesgo de irritaciones, quemaduras solares y otros problemas cutáneos.
  
### **Prevención de enfermedades y condiciones cutáneas:**
los adultos mayores pueden ser más propensos a desarrollar ciertas afecciones de la piel, como dermatitis, infecciones por hongos, úlceras por presión o cáncer de piel. El cuidado adecuado de la piel puede ayudar a prevenir y detectar tempranamente estos problemas.
  
### **Mejora de la calidad de vida:**
una piel sana y bien cuidada contribuye a una mayor comodidad y bienestar en la adultez. Las afecciones cutáneas pueden causar malestar, picazón, dolor y afectar la autoestima, lo que puede interferir en la calidad de vida.
  
### **Estímulo del sistema circulatorio:**
el cuidado de la piel, como masajes suaves y la aplicación de cremas hidratantes, puede ayudar a estimular la circulación sanguínea, lo que es beneficioso para la salud en general y la prevención de enfermedades.

## Consejos para prevenir el envejecimiento de la piel en adultos mayores

A medida que envejecemos, todo nuestro cuerpo experimenta cambios y el cuidado de la piel se vuelve aún más importante. Te dejamos algunos consejos sobre cómo cuidar la piel en esta etapa y prevenir el envejecimiento prematuro:

### **Limpieza diaria:**
 Lavá tu rostro con un limpiador suave dos veces al día para eliminar la suciedad y el exceso de grasa. Asimismo, procurá higienizar diariamente tu cuerpo con productos beneficiosos para tu piel.

### **Hidratación:**
 Aplicá una crema hidratante específica para tu tipo de piel después de cada limpieza para mantenerla suave y elástica.

### **Protección solar:**
 Usá protector solar con un factor de protección (FPS) alto todos los días, incluso en días nublados, para prevenir el envejecimiento prematuro y el cáncer de piel.

### **Antioxidantes:**
 Incorporá productos con antioxidantes, como la vitamina C y E, para combatir los radicales libres que dañan las células de la piel es un cuidado extra que podés incorporar en tu rutina.

### **Evitar el tabaco y limitar el consumo de alcohol:**
 Ambos hábitos pueden dañar la piel y acelerar el envejecimiento.

## Relación entre el Herpes Zóster y el cuidado de la piel

Cuando hablamos de Herpes Zóster, nos referimos a una afección viral que produce lesiones en la piel, por lo tanto está estrechamente relacionada con el cuidado de la piel, sobre todo cuando se reactiva esta enfermedad desarrollando las lesiones en la piel. 

Esta condición, también conocida como culebrilla, es causada por el virus de la varicela zóster, el mismo que provoca la varicela. Después de haber padecido varicela, el virus permanece latente en el organismo y puede reactivarse años más tarde, ocasionando la aparición de Herpes Zóster.

El Herpes Zóster se manifiesta a través de una erupción cutánea dolorosa, que generalmente se presenta en forma de una banda en un lado del cuerpo o en el rostro. Esta erupción puede causar ampollas, enrojecimiento e inflamación en la piel. Por lo tanto, es importante cuidar la piel adecuadamente durante el episodio de Herpes Zóster y también después de la infección para prevenir complicaciones y favorecer la recuperación.

Algunas medidas para cuidar la piel durante y después de la enfermedad incluyen:
- Mantener la piel limpia y seca: Lavá suavemente la zona afectada con agua y jabón neutro, y sécala con cuidado para evitar irritaciones.
- Evitar rascar o tocar las lesiones: Rascar las ampollas puede provocar infecciones bacterianas y aumentar el riesgo de cicatrices.
- Aplicar compresas frías: Las compresas frías pueden ayudar a aliviar la inflamación, el enrojecimiento y la picazón.
- Utilizar cremas y ungüentos recetados por el médico: Estos productos pueden ayudar a aliviar los síntomas y a acelerar la curación.
- Proteger la piel del sol: La piel afectada por el Herpes Zóster puede ser más sensible al sol, por lo que es fundamental protegerla de la exposición solar utilizando protector solar, ropa adecuada y sombreros.

Cuidar la piel durante y después de un episodio de Herpes Zóster es fundamental para prevenir complicaciones y favorecer una recuperación más rápida y saludable. Recordá que siempre es importante consultar a un profesional de la salud para recibir un diagnóstico adecuado, ante cualquier síntoma o inquietud que tengas.





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
					"title": "¿Cómo cuidar la piel en adultos mayores y prevenir el envejecimiento prematuro?",
					"image": "cuidado-piel",
					"metatitle": "La importancia del cuidado de la piel en la adultez",
					"metadescription": "Conocé cómo cuidar la piel en la adultez. Te damos algunos consejos para prevenir el envejecimiento prematuro. ¡Cuidá tu salud!",
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
		"May PJ, Tong SYC, Steer AC, Currie BJ, Andrews RM, Carapetis JR, Bowen AC. Treatment, prevention and public health management of impetigo, scabies, crusted scabies and fungal skin infections in endemic populations: a systematic review. Trop Med Int Health. 2019 Mar;24(3):280-293. doi: 10.1111/mi.13198. Epub 2019 Jan 28. PMID: 30582783; PMCID: PMC6850630.",
		"Bryant AE, Stevens DL. Streptococcus pyogenes. In Bennett J, Dolin R, Blaser M, editors. 8th Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases. Philadelphia (PA): Elsevier; 2015:2:2285-300.",
		"Ehrenstein B. Diagnostik, Therapie und Prophylaxe des Herpes zoster [Diagnosis, treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec;79(10):1009-1017. German. doi: 10.1007/00393-020-00915-y. PMID: 33141244.",
		"Bryant AE, Stevens DL. Streptococcus pyogenes. In Bennett J, Dolin R, Blaser M, editors. 8th Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases. Philadelphia (PA): Elsevier; 2015:2:2285-300.",
		"Ehrenstein B. Diagnostik, Therapie und Prophylaxe des Herpes zoster [Diagnosis, treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec; 79(10):1009-1017. German. doi: 10.1007/500393-020-00915-y. PMID: 33141244.",
		"Bryant AE, Stevens DL. Streptococcus pyogenes. In Bennett J, Dolin R, Blaser M, editors. 8th Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases. Philadelphia (PA): Elsevier; 2015:2:2285-300.",
		"Ehrenstein B. Diagnostik, Therapie und Prophylaxe des Herpes zoster [Diagnosis, treatment and prophylaxis of herpes zoster]. Z Rheumatol. 2020 Dec; 79(10): 1009-1017. German. doi: 10.1007/s00393-020-00915-y. PMID: 33141244.",
		"John AR, Canaday DH. Herpes Zoster in the Older Adult. Infect Dis Clin North Am. 2017 Dec;31(4):811-826. doi: 10.1016/j.idc.2017.07.016. PMID: 29079160; PMCID: PMC5724974.",
		"Tommasi C, Breuer J. The Biology of Varicella-Zoster Virus Replication in the Skin. Viruses. 2022 May 6;14(5):982. doi: 10.3390/V14050982. PMID: 35632/23; PMCID: PMC/14/561.",
		"Bader MS. Herpes zoster: diagnostic, therapeutic, and preventive approaches. Postgrad Med. 2013 Sep; 125(5):78-91. doi: 10.3810/pgm.2013.09.2703. PMID: 24113666."
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
									<span className="markdown-body">NP-AR-HZU-WCNT-230014</span>
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