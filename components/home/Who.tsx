import { Element } from 'react-scroll'

import H2 from "@/components/ui/H2"
import CardIcon from "@/components/home/ui/CardIcon"
import Description from "@/components/ui/Description"

interface Card {
	title: string
	body: string
	image: string
}

const cards: Card[] = [
	{
		title: "TUVE VARICELA",
		body: "Después de la varicela, el Virus Varicela Zóster permanece latente en el sistema nervioso y puede reactivarse con la edad <sup>1</sup>.",
		image: "varicela",
	},
	{
		title: "TENGO 50 AÑOS O MÁS",
		body: "A medida que las personas envejecen, las células del sistema inmune se debilitan, por lo que aumenta el riesgo de desarrollar la enfermedad. Se calcula que aproximadamente más del 90% de los adultos mayores a 50 años han sido infectados por el virus que causa la varicela y, por tanto, se encuentran en riesgo de desarrollar Herpes Zóster <sup>1</sup>.",
		image: "mayor",
	},
	{
		title: "MI SISTEMA INMUNE ESTÁ COMPROMETIDO",
		body: "La incidencia del Herpes Zóster en poblaciones inmunocomprometidas crece exponencialmente. Por ejemplo, en personas que hayan recibido trasplante de médula ósea o células madre, la probabilidad de incidencia respecto a la población total es 9 veces mayor.",
		image: "inmune",
	},
]

const Who = () => {
	return (
		<section className="text-center space-y-6 relative">
			<Element className="space-y-3 px-4" name="riesgo">
				<H2 title={`¿Quiénes están en riesgo?`}/>
				<Description title={`Enterate si estás en riesgo de contraer Herpes Zóster.`}/>
			</Element>

			<div className="grid grid-cols-1 lg:grid-cols-3 content-start gap-x-0 lg:gap-x-10 gap-y-8 lg:gap-y-0 px-8 md:px-20 lg:px-12">
				{cards.map(({title, body, image}: Card, index: number) => (
					<CardIcon key={index} title={title} body={body} image={image}/>
				))}
			</div>
		</section>
	)
}

export default Who