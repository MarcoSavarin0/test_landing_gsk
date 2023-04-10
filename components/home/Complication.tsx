import {useEffect, useRef} from "react"
import {motion, useAnimation, useInView} from "framer-motion"

import H2 from "@/components/ui/H2"
import MirrorContent from "@/components/home/ui/MirrorContent"
import Image from "next/image"

interface Complication {
	title: string
	image: string
	body: string
	cta: boolean
}

const complications: Complication[] = [
	{
		title: `NEURALGIA POSTHERPÉTICA`,
		image: `neuralgia-post-herpetica`,
		body: `La Neuralgia Postherpética (NPH) es un dolor neurálgico que persiste después de que la erupción se haya curado. La NPH puede durar de tres a seis meses, o incluso persistir por más tiempo. Suele ser más común y grave en personas mayores que en personas más jóvenes. Después de los 50 años, hasta un 30% de los pacientes con Herpes Zóster desarrollarán Neuralgia Postherpética.`,
		cta: true
	},
	{
		title: `CAMBIOS EN LA PIEL`,
		image: `cambios-piel`,
		body: `Luego de que la erupción por Herpes Zóster haya sanado, pueden quedar cicatrices o incluso desarrollarse cambios en la pigmentación de la piel. Asimismo, en algunos casos es posible manifestar una infección secundaria de la erupción de la culebrilla.`,
		cta: true
	},
	{
		title: `HERPES ZÓSTER OFTÁLMICO`,
		image: `oftalmologico`,
		body: `Ocurre cuando el virus infecta el nervio facial causando erupciones en la frente y una inflamación dolorosa en los tejidos. Los personas pueden desarrollar queratitis , escleritis, uveítis y necrosis retiniana aguda. Las secuelas prolongadas o permanentes del Herpes Zóster Oftálmico pueden dar lugar a pérdida de visión <sup>1</sup>.`,
		cta: true
	},
	{
		title: `OTRAS CONSECUENCIAS`,
		image: `otras-consecuencias`,
		body: `Como consecuencia del Herpes Zóster, se pueden presentar además complicaciones en el sistema nervioso periférico y central, así como complicaciones cardiovasculares. A largo plazo, dichas consecuencias pueden generar un impacto negativo en la calidad de vida de los pacientes.`,
		cta: false
	},
]

const Complication = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const controls = useAnimation()

	const containerVariant = {
		visible: {
			opacity: 1,
			transition: {
				duration: .8,
				when: "beforeChildren",
				staggerChildren: 0.8,
			}
		},
		hidden: {
			opacity: 0,
			transition: {
				when: "afterChildren",
			}
		}
	}

	const complicationVariant = {
		visible: (i: number) => ({
			opacity: 1,
			duration: 1,
			y: 0,
			delay: i * .8,
			transition: {
				duration: .5
			}
		}),
		hidden: {
			opacity: 0,
			y: 150
		},
	}

	useEffect(() => {
		if (isInView) {
			controls.start("visible")
		}
	}, [controls, isInView])


	return (
		<section className="px-4 relative">
			<div className="bg-shape top-8 opacity-80">
				<Image
					alt=""
					src={`/assets/images/bg-complications.png`}
					quality={70}
					fill
					sizes="100vw"
					style={{
						objectFit: 'cover',
						backgroundPositionY: 'top'
					}}
				/>
			</div>

			<div className="bg-shape -bottom-32">
				<Image
					alt=""
					src={`/assets/images/bg-faq.png`}
					quality={70}
					fill
					sizes="100vw"
					style={{
						objectFit: 'cover',
						backgroundPositionY: 'bottom'
					}}
				/>
			</div>

			<div className="space-y-6">
				<H2 title={`Posibles complicaciones`}/>

				<motion.div className="space-y-10 md:space-y-12 px-8 sm:px-12 py-4 overflow-hidden"
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={containerVariant}
				>
					{complications.map((item: Complication, index: number) => (
						<motion.article className="flex flex-col md:flex-row justify-between gap-x-8 gap-y-5 md:gap-y-0"
							key={index} variants={complicationVariant} custom={index}
						>
							<MirrorContent title={item.title} body={item.body} image={`${item.image}.jpg`} index={index} cta={item.cta}/>
						</motion.article>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default Complication
