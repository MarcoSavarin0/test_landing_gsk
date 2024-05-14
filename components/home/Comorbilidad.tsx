import { Element } from 'react-scroll'

import H2 from "@/components/ui/H2"
import CardIconBackground from "@/components/home/ui/CardIconBackground"
import Description from "@/components/ui/Description"
import Link from "next/link"

interface Card {
	title: string
	body: string
	image: string
}

const cards: Card[] = [
	{
		title: "EPOC",
		body: "Después de la varicela, el Virus Varicela Zóster permanece latente en el sistema nervioso y puede reactivarse con la edad <sup>1</sup>.",
		image: "herpes-zoster-epoc",
	},
	{
		title: "DIABETES",
		body: "A medida que las personas envejecen, las células del sistema inmune se debilitan, por lo que aumenta el riesgo de desarrollar la enfermedad. Se calcula que aproximadamente más del 90% de los adultos mayores a 50 años han sido infectados por el virus que causa la varicela y, por tanto, se encuentran en riesgo de desarrollar Herpes Zóster <sup>1</sup>.",
		image: "relacion-entre-diabetes-herpes-zoster",
	},
	{
		title: "MI SISTEMA INMUNE ESTÁ COMPROMETIDO",
		body: "La incidencia del Herpes Zóster en poblaciones inmunocomprometidas crece exponencialmente. Por ejemplo, en personas que hayan recibido trasplante de médula ósea o células madre, la probabilidad de incidencia respecto a la población total es 9 veces mayor.",
		image: "enfermedades-respiratorias",
	},
	{
		title: "ENFERMEDADES RESPIRATORIAS",
		body: "La incidencia del Herpes Zóster en poblaciones inmunocomprometidas crece exponencialmente. Por ejemplo, en personas que hayan recibido trasplante de médula ósea o células madre, la probabilidad de incidencia respecto a la población total es 9 veces mayor.",
		image: "neuralgia-postherpetica",
	},
	{
		title: "ENFERMEDADES CARDIOVASCULAR",
		body: "La incidencia del Herpes Zóster en poblaciones inmunocomprometidas crece exponencialmente. Por ejemplo, en personas que hayan recibido trasplante de médula ósea o células madre, la probabilidad de incidencia respecto a la población total es 9 veces mayor.",
		image: "corazon",
	},
	{
		title: "LUPUS",
		body: "La incidencia del Herpes Zóster en poblaciones inmunocomprometidas crece exponencialmente. Por ejemplo, en personas que hayan recibido trasplante de médula ósea o células madre, la probabilidad de incidencia respecto a la población total es 9 veces mayor.",
		image: "lupus",
	},
	
]

const Who = () => {
	return (
		<section className="text-center space-y-10 relative">
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
				<Link href={`/biblioteca`} className="underline text-gsk-orange text-xl"> Conocer más sobre las comorbilidades y el Herpes Zoster </Link>

			</div>
		</section>
	)
}

export default Who