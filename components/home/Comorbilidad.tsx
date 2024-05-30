import { Element } from 'react-scroll'

import H2 from "@/components/ui/H2"
import CardIconBackground from "@/components/home/ui/CardIconBackground"
import Description from "@/components/ui/Description"
// import Link from "next/link"

interface Card {
	title: string
	body: string
	image: string
}

const cards: Card[] = [
	{
		title: "ENFERMEDADES RESPIRATORIAS",
		body: "Los pacientes con enfermedades respiratorias tienen un 30% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales.",
		image: "herpes-zoster-epoc",
	},
	{
		title: "DIABETES",
		body: "Los pacientes con diabetes tienen hasta un 40% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales.",
		image: "relacion-entre-diabetes-herpes-zoster",
	},
	{
		title: "ENFERMEDADES CARDIOVASCULAR",
		body: "Los pacientes con enfermedades cardiovasculares tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales.",
		image: "corazon",
	},
	
]

const Who = () => {
	return (
		<section className="text-center space-y-10 relative bg-gsk-gray pt-10 pb-10">
			<Element className="space-y-3 px-4" name="riesgo">
				<H2 title={`Las comorbilidades pueden aumentar el riesgo de contraer Herpes Zoster`}/>
				<Description title={` Descubrí cómo estas enfermedades subyacentes pueden comprometer tu sistema inmunológico, dejándote vulnerable al virus que espera silenciosamente una oportunidad para reactivarse.`}/>
			</Element>

			<div className="grid grid-cols-1 lg:grid-cols-3 content-start gap-x-0 lg:gap-x-10 gap-y-8 lg:gap-y-0 px-8 md:px-20 lg:px-12">
				{cards.map(({title, body, image}: Card, index: number) => (
					<CardIconBackground key={index} index={index} title={title} body={body} image={image}/>
				))}
			</div>

			<div>
				{/* <Link href={`/enfermedades-cronicas`} className="underline text-gsk-orange text-xl"> Conocé más sobre las enfermedades crónicas y el Herpes Zóster </Link> */}
			</div>
		</section>
	)
}

export default Who