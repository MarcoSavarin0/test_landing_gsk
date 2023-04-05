import {Element} from 'react-scroll'

import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"
import Image from "next/image"

const Sintomas = () => {
	return (
		<section className="space-y-6 text-center pt-10 relative">
			<div className="bg-shape top-10">
				<Image
					alt="Mountains"
					src={`/assets/images/bg-faq.png`}
					quality={70}
					fill
					sizes="100vw"
					style={{
						objectFit: 'fill',
					}}
				/>
			</div>

			<Element className="space-y-3 px-4 mx-auto w-10/12" name="sintomas">
				<H2 title={`Síntomas`}/>
				<Description title={`Generalmente los primeros síntomas del Herpes Zóster son picazón, dolor, hormigueo, sensación molesta o sensibilidad al tacto en el tórax, el abdomen o el rostro. Tras los primeros días, comienza la fase aguda de la enfermedad, en la que aparece la erupción cutánea, con ampollas en las zonas afectadas, acompañadas de un dolor agudo. Al cabo de unos 10 días, las vesículas se convierten en costras que, normalmente, duran entre 2 y 4 semanas <sup>3</sup>.`}/>
			</Element>
		</section>
	)
}

export default Sintomas