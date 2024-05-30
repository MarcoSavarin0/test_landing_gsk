import { Element } from 'react-scroll'

import H2 from "@/components/ui/H2"
import CardIconBackgroundNoFlip from "@/components/home/ui/CardIconBackgroundNoFlip"
import Description from "@/components/ui/Description"
import Link from "next/link"
import CardIconBackground from './ui/CardIconBackground'

interface Card {
	title: string
	body: string
	image: string
	link: string
}

const cards: Card[] = [
	{
		title: "NEURALGIA POSTHERPÉTICA",
		body: "Los pacientes con enfermedades respiratorias tienen un 30% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales.",
		image: "neuralgia-postherpetica",
		link: '/biblioteca/post/neuralgia-postherpetica'

	},
	{
		title: "HERPES ZÓSTER OFTÁLMICO",
		body: "Los pacientes con diabetes tienen hasta un 40% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales.",
		image: "herpes-zoster-oftalmico",
		link: '/biblioteca/post/herpes-zoster-oftalmico'

	},
	{
		title: "CAMBIOS EN LA PIEL",
		body: "Los pacientes con enfermedades cardiovasculares tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales.",
		image: "afecciones-piel-herpes-zoster",
		link: '/biblioteca/post/afecciones-piel-herpes-zoster'

	},
	{
		title: "OTRAS CONSECUENCIAS",
		body: "Los pacientes con enfermedades cardiovasculares tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales.",
		image: "otras-consecuencias",
		link: ''

	},

]

const Enfermedades = () => {
	return (
		<section className="text-center space-y-10 relative">
			<Element className="space-y-3 px-4" name="riesgo">
				<H2 title={`POSIBLES COMPLICACIONES`} />
				<Description title={` Descubrí cómo estas enfermedades subyacentes pueden comprometer tu sistema inmunológico, dejándote vulnerable al virus que espera silenciosamente una oportunidad para reactivarse.`} />
			</Element>

			<div className="grid grid-cols-1 lg:grid-cols-2 content-start gap-x-0 lg:gap-x-10 gap-y-8 lg:gap-y-0 px-8 md:px-20 lg:px-12">
				{cards.map(({ title, body, image, link }, index) => (
					<>
						{index == 3 ? <> <CardIconBackground index={index} title={title} body={body} image={image} /> </> : <Link href={link} key={index}>
							<CardIconBackgroundNoFlip index={index} title={title} body={body} image={image} />
						</Link>}
					</>
				))}

			</div>

		</section>
	)
}

export default Enfermedades