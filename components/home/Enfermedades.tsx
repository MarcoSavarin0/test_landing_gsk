import { Element } from 'react-scroll'

import H2 from "@/components/ui/H2"
// import Link from "next/link"
import CardIconBackground from './ui/CardIconBackground'

interface Card {
	title: string,
	body: string,
	image: string,
	url: string
}

const cards: Card[] = [
	{
		title: "NEURALGIA POSTHERPÉTICA",
		body: "La Neuralgia Postherpética (NPH) es un dolor neurálgico que persiste después de que la erupción se haya curado. La NPH puede durar de tres a seis meses, o incluso persistir por más tiempo. Suele ser más común y grave en personas mayores que en personas más jóvenes. Después de los 50 años, hasta un 30% de los pacientes con Herpes Zóster desarrollarán Neuralgia Postherpética.",
		image: "neuralgia-postherpetica",
		url: "/biblioteca/post/neuralgia-postherpetica"

	},
	{
		title: "HERPES ZÓSTER OFTÁLMICO",
		body: "Ocurre cuando el virus infecta el nervio facial causando erupciones en la frente y una inflamación dolorosa en los tejidos. Los personas pueden desarrollar queratitis, escleritis, uveítis y necrosis retiniana aguda. Las secuelas prolongadas o permanentes del Herpes Zóster Oftálmico pueden dar lugar a pérdida de visión!",
		image: "herpes-zoster-oftalmico",
		url: "/biblioteca/post/herpes-zoster-oftalmico"

	},
	{
		title: "CAMBIOS EN LA PIEL",
		body: "Luego de que la erupción por Herpes Zóster haya sanado, pueden quedar cicatrices o incluso desarrollarse cambios en la pigmentación de la piel. Asimismo, en algunos casos es posible manifestar una infección secundaria de la erupción de la culebrilla.",
		image: "afecciones-piel-herpes-zoster",
		url: "/biblioteca/post/afecciones-piel-herpes-zoster"

	},
	{
		title: "OTRAS CONSECUENCIAS",
		body: "Los pacientes con enfermedades cardiovasculares tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales.",
		image: "otras-consecuencias",
		url: "/"

	},

]

const Enfermedades = () => {
	return (
		<section className="text-center space-y-10 relative py-20">
			<Element className="space-y-3 px-4" name="riesgo">
				<H2 title={`POSIBLES COMPLICACIONES`} />
				{/* <Description title={` Descubrí cómo estas enfermedades subyacentes pueden comprometer tu sistema inmunológico, dejándote vulnerable al virus que espera silenciosamente una oportunidad para reactivarse.`} /> */}
			</Element>

			<div className="grid grid-cols-1 lg:grid-cols-4 content-start gap-x-0 lg:gap-x-10 lg:gap-y-6 gap-y-8 lg:gap-y-0 px-8 md:px-20 lg:px-12 ">
				{cards.map(({ title, body, image }, index) => (
					<CardIconBackground key={index} index={index} title={title} body={body} image={image}/>
				))}

			</div>

		</section>
	)
}

export default Enfermedades