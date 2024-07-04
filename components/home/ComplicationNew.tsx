import {useEffect, useRef} from "react"
import {motion, useAnimation, useInView} from "framer-motion"

import MirrorContentNew from "./ui/MirrorContentNew"

interface Complication {
	categoryTitle: string
	title: string
	title2: string
	image: string
	slug: string
	body: string
	bgColor: string
	cta: boolean
	doubleTitle:boolean,
}

const complications: Complication[] = [
	{
		title: `ENFERMEDADES RESPIRATORIAS`,
		title2: `(ASMA Y EPOC)`,
		image: `RESPI`,
		slug: `enfermedades-respiratorias-zoster`,
		body: `Las enfermedades respiratorias crónicas, como el asma y la Enfermedad Pulmonar Obstructiva Crónica (EPOC), afectan significativamente al sistema inmunológico haciéndolo más susceptible a infecciones como el Herpes Zóster.`,
		cta: true,
		bgColor: "none",
		categoryTitle: 'ENFERMEDADES  RESPIRATORIAS',
		doubleTitle: true
	},
	{
		title: `DIABETES`,
		title2: `DIABETES`,
		image: `relacion-entre-diabetes-herpes-zoster`,
		slug: `relacion-entre-diabetes-herpes-zoster`,
		body: `La diabetes es una enfermedad crónica que afecta a millones de personas en todo el mundo y el Herpes Zóster es una infección viral que provoca una erupción dolorosa en la piel. Aunque a primera vista, estas dos condiciones parecen no tener conexión, en algunos casos, puede existir una relación entre el Herpes Zóster y la diabetes. Informate acerca de esta posible relación y cómo las personas con diabetes pueden estar en mayor riesgo de desarrollar Herpes Zóster.`,
		cta: true,
		bgColor: "gray",
		categoryTitle: 'DIABETES',
		doubleTitle: false

	},
	{
		title: `ENFERMEDADES  CARDIOVASCULARES`,
		title2: `ENFERMEDADES  CARDIOVASCULARES`,
		image: `CARDIO`,
		slug: `enfermedades-cardiovasculares-zoster`,
		body: `Las enfermedades cardiovasculares como la hipertensión arterial, los accidentes cerebro vasculares y las enfermedades coronarias, pueden comprometer la salud general y debilitar el sistema inmunológico. Esto puede aumentar la susceptibilidad a infecciones como el Herpes Zóster.`,
		cta: true,
		bgColor: "none",
		categoryTitle: 'ENFERMEDADES  CARDIOVASCULARES',
		doubleTitle: false

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
		<section className="px-4 relative ">
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
				<motion.div
					className="space-b-10 md:space-b-12 px-8 sm:px-12 lg:px-0 pb-4 overflow-hidden"
					ref={ref}
					initial="hidden"
					animate={controls}
					variants={containerVariant}
				>
					{/* <h3 className="pt-,
					two-lines-title:boolean,20 text-gsk-orange font-bold text-2xl text-center w-full text-new-title">ENFERMEDADES RESPIRATORIAS</h3> */}

					{complications.map((item: Complication, index: number) => (
						<div className={item.bgColor === 'gray' ? "gray-bg px-8 sm:px-12" : " px-8 sm:px-12"} key={index}>
							<h3 className="text-gsk-orange font-bold text-2xl text-center w-full text-new-title pt-20">
								{item.title}
								{item.doubleTitle && (
									<>
										<br />
										{item.title2}
									</>
								)}
							</h3>
							<motion.article
								className="flex flex-col md:flex-row justify-between gap-x-8 gap-y-5 md:gap-y-0 py-20"
								key={index}
								variants={complicationVariant}
								custom={index}
							>
								<MirrorContentNew
									title={item.title}
									body={item.body}
									image={`${item.image}.webp`}
									slug={item.slug}
									index={index}
									cta={item.cta}
								/>
							</motion.article>
						</div>
					))}
				</motion.div>
			</div>

		</section>
	)
}

export default ComplicationNew
