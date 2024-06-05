import {useEffect, useRef} from "react"
import {motion, useAnimation, useInView} from "framer-motion"

import MirrorContentNew from "./ui/MirrorContentNew"

interface Complication {
	categoryTitle: string
	title: string
	image: string
	slug: string
	body: string
	cta: boolean
}

const complications: Complication[] = [
	{
		title: `(ASMA Y EPOC)`,
		image: `herpes-zoster-epoc`,
		slug: `epoc`,
		body: `Las enfermedades respiratorias crónicas, como el asma y la Enfermedad Pulmonar Obstructiva Crónica (EPOC), afectan significativamente al sistema inmunológico haciéndolo más susceptible a infecciones como el Herpes Zóster. Una reactivación del virus varicela - zóster.`,
		cta: true,
		categoryTitle: 'ENFERMEDADES  RESPIRATORIAS'
	},
	{
		title: `DIABETES`,
		image: `relacion-entre-diabetes-herpes-zoster`,
		slug: `diabetes`,
		body: `La diabetes es una enfermedad crónica que afecta a millones de personas en todo el mundo y el Herpes Zóster es una infección viral que provoca una erupción dolorosa en la piel. Aunque a primera vista, estas dos condiciones parecen no tener conexión, en algunos casos, puede existir una relación entre el Herpes Zóster y la diabetes. Informate acerca de esta posible relación y cómo las personas con diabetes pueden estar en mayor riesgo de desarrollar Herpes Zóster.`,
		cta: true,
		categoryTitle: 'DIABETES'

	},
	{
		title: `ENFERMEDADES  CARDIOVASCULARES`,
		image: `corazon`,
		slug: `corazon`,
		body: `Las enfermedades cardiovasculares como la hipertensión arterial, los accidentes cerebro vasculares y las enfermedades coronarias, pueden comprometer la salud general y debilitar el sistema inmunológico. Esto puede aumentar la susceptibilidad a infecciones como el Herpes Zóster, una reactivación del virus varicela - zóster.`,
		cta: true,
		categoryTitle: 'ENFERMEDADES  CARDIOVASCULARES'

	},
	
]

const ComplicationNew = () => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })
	const controls = useAnimation()

	const containerVariant = {
		visible: {
			opacity: 1,
			transition: {
				duration: .8,
				when: "beforeChildren",
				staggerChildren: 0.6,
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
			delay: i * .1,
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
			{/* <div className="bg-shape top-8 opacity-80">
				<Image
					alt=""
					src={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_PUBLIC_REGION}.amazonaws.com/assets/bg-complications.png`}
					quality={70}
					fill
					sizes="100vw"
					style={{
						objectFit: 'cover',
						backgroundPositionY: 'top'
					}}
				/>
			</div> */}

			{/* <div className="bg-shape -bottom-32">
				<Image
					alt=""
					src={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_PUBLIC_REGION}.amazonaws.com/assets/bg-faq.png`}
					quality={70}
					fill
					sizes="100vw"
					style={{
						objectFit: 'cover',
						backgroundPositionY: 'bottom'
					}}
				/>
			</div> */}

			<div className="space-y-6">

				<motion.div className="space-y-10 md:space-y-12 px-8 sm:px-12 py-4 overflow-hidden"
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={containerVariant}
				>
					<h3 className="text-gsk-orange font-bold text-2xl text-center w-full text-new-title">ENFERMEDADES RESPIRATORIAS</h3>

					{complications.map((item: Complication, index: number) => (
						<>
							<h3 className="text-gsk-orange font-bold text-2xl text-center w-full text-new-title">{item.title}</h3>

							<motion.article className="flex flex-col md:flex-row justify-between gap-x-8 gap-y-5 md:gap-y-0 py-12" key={index} variants={complicationVariant} custom={index} >
								<MirrorContentNew title={item.title} body={item.body} image={`${item.image}.webp`} slug={item.slug} index={index} cta={item.cta}/>
							</motion.article>
						</>
						
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default ComplicationNew
