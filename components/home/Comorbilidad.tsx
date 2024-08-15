import { Element } from 'react-scroll'

import CardIconBackground from "@/components/home/ui/CardIconBackground"
import Link from "next/link"
import Cta from '../ui/Cta'

interface Card {
	title: string,
	body: string,
	image: string,
	
}

const cards: Card[] = [
	{
		title: "ENFERMEDADES RESPIRATORIAS",
		body: "Los pacientes con enfermedades respiratorias tienen un 30% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales<sup>9<sup/>.",
		image: "RESPI",
		
		

	},
	{
		title: "DIABETES",
		body: "Los pacientes con diabetes tienen hasta un 40% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales<sup>10<sup/>.",
		image: "relacion-entre-diabetes-herpes-zoster",
	},
	{
		title: "ENFERMEDADES CARDIOVASCULARES",
		body: "Los pacientes con enfermedades cardiovasculares tienen hasta un 30% más de riesgo de desarrollar Herpes Zóster. Explorá como esta enfermedad crónica puede afectar el sistema inmunológico, dando lugar a infecciones virales<sup>10<sup/>.",
		image: "CARDIO",
		
		
	},
	
]

const Who = () => {
	return (
		<section className="text-center space-y-10 relative bg-gsk-gray pt-10 pb-10">
			<Element className="space-y-3 px-4" name="riesgo">
				<div className="container-mid">
							
					<div className="title-new-big mx-auto">Las enfermedades crónicas pueden aumentar el riesgo de contraer Herpes Zóster</div>
				</div>

				<div className={`text-md md:text-lg`}>¿Sabías que determinadas enfermedades afectan al sistema inmune dando lugar a infecciones como el Herpes Zóster? <span className="bold"> Conocé cuáles son.</span></div>

			</Element>

			<div className="grid grid-cols-1 lg:grid-cols-3 content-start gap-x-0 lg:gap-x-10 gap-y-8 lg:gap-y-0 px-8 md:px-20 lg:px-12">
				{cards.map(({title, body, image}: Card, index: number) => (
					<CardIconBackground key={index} index={index} title={title} body={body} image={image}/>
				))}
			</div>

			<div>
				<Link href={`/enfermedades-cronicas`} className="text-footer-link"> Conocé más sobre las enfermedades crónicas y el Herpes Zóster </Link>
			</div>
			<div>
				<Cta title={`INICIAR TEST`} url="/autotest"/>
			</div>

		</section>
	)
}

export default Who
