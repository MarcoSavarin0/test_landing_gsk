import {motion, useAnimation, useInView} from "framer-motion"

import H2 from "@/components/ui/H2"
import MirrorContent from "@/components/home/ui/MirrorContent"
import {useEffect, useRef} from "react"

interface Complication {
	title: string
	body: string
}

const complications: Complication[] = [
	{
		title: `NEURALGIA POSTHERPÉTICA`,
		body: `La Neuralgia Posherpética (PHN, por sus siglas en inglés) es un dolor neurálgico que persiste después de que la erupción se haya curado. La PHN puede durar de tres a seis meses, o incluso persistir por más tiempo. Suele ser más común y grave en personas mayores que en personas más jóvenes. Después de los 50 años, alrededor del 20 % de los pacientes con Herpes Zóster desarrollarán Neuralgia Posherpética.`
	},
	{
		title: `CAMBIOS EN LA PIEL`,
		body: `Luego de que la erupción por Herpes Zóster haya sanado, pueden quedar cicatrices o incluso desarrollarse cambios en la pigmentación de la piel. Asimismo, en algunos casos es posible manifestar una infección secundaria de la erupción de la culebrilla.`
	},
	{
		title: `HERPES ZÓSTER OFTALMOLÓGICO`,
		body: `Ocurre cuando el virus infecta el nervio facial causando erupciones en la frente y una inflamación dolorosa en los tejidos.`
	},
	{
		title: `OTRAS CONSECUENCIAS`,
		body: `Como consecuencia del Herpes Zóster, se pueden presentar además complicaciones en el sistema nervioso periférico y central, así como complicaciones cardiovasculares. A largo plazo, dichas consecuencias pueden generar un impacto negativo en la calidad de vida de los pacientes.`
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
				duration: .1,
				when: "beforeChildren",
				staggerChildren: 0.3,
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
			delay: i * .5
		}),
		hidden: {
			opacity: 0,
			y: 100
		},
	}

	useEffect(() => {
		if (isInView) {
			controls.start("visible")
		}
	}, [controls, isInView])


	return (
		<section className="space-y-6 px-4">
			<H2 title={`Posibles complicaciones`}/>

			<motion.div className="space-y-10 md:space-y-12 px-8 sm:px-12 py-4"
				ref={ref}
				animate={controls}
				initial="hidden"
				variants={containerVariant}
			>
				{complications.map((item: Complication, index: number) => (
					<motion.article className="flex flex-col md:flex-row justify-between gap-x-8 gap-y-5 md:gap-y-0"
						key={index} variants={complicationVariant} custom={index}
					>
						<MirrorContent title={item.title} body={item.body} image={`${index}.jpg`} index={index}/>
					</motion.article>
				))}
			</motion.div>
		</section>
	)
}

export default Complication
