import { Element } from 'react-scroll'

import useModal from "@/store/store"

import Cta from "@/components/ui/Cta"
import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"
import H3 from "@/components/ui/H3"

interface Faq {
	title: string
	body: string
}

const faqs: Faq[] = [
	{
		title: `¿QUÉ ES EL <span className="block">HERPES ZÓSTER?</span>`,
		body: `<p>El Herpes Zóster, también llamado coloquialmente culebrilla, es una enfermedad causada por la reactivación del Virus Varicela Zóster (VVZ), el mismo virus que causa la varicela. Luego de que una persona contrae varicela <sup>1 2</sup>, el virus permanece latente en su sistema nervioso, por lo general, sin causar síntomas hasta su reactivación.</p>`
	},
	{
		title: `¿CUÁLES SON<span className="block">LOS SÍNTOMAS?</span>`,
		body: `<p>Generalmente los primeros síntomas del Herpes Zóster son picazón, dolor, hormigueo, sensación molesta o sensibilidad al tacto en el tórax, el abdomen o el rostro <sup>3</sup>. Tras los primeros días, comienza la fase aguda de la enfermedad, en la que aparece la erupción cutánea, con ampollas en las zonas afectadas, acompañadas de un dolor agudo. Al cabo de unos 10 días, las vesículas se convierten en costras que, normalmente, duran entre 2 y 4 semanas.</p>`
	}
	,
	{
		title: `¿EL HERPES ZÓSTER<span className="block">ES CONTAGIOSO?</span>`,
		body: `<p>No, el Herpes Zóster no puede contagiarse de una persona a otra. Sin embargo, si una persona tiene Herpes Zóster, el contacto directo con las secreciones de las vesículas del sarpullido puede propagar el Virus Varicela Zóster (VVZ) a las personas que nunca han tenido varicela o que nunca recibieron la vacuna contra la misma. Si ellas se infectan, presentarán varicela, pudiendo desarrollar Herpes Zóster más adelante en su vida.</p>`
	},
]

const Faq = () => {
	const { setVisibility, setTitle, setBody } = useModal()

	const openModalHandler = (index: number): void => {
		setTitle(faqs[index].title)
		setBody(faqs[index].body)
		setVisibility()
	}

	return (
		<section className="space-y-6 text-center pt-10">
			<Element className="space-y-3 px-4" name="preguntas-frecuentes">
				<H2 title={`Preguntas frecuentes`}/>
				<Description title={`Conocé toda la información que necesitás saber sobre el Herpes Zóster.`}/>
			</Element>
			<div className="flex flex-col lg:flex-row justify-between px-12 gap-x-8 gap-y-8 lg:gap-y-0 items-center">
				{faqs.map((item:Faq, index: number) => (
					<button onClick={() => openModalHandler(index)} key={index} className="flex w-10/12 sm:w-7/12 lg:w-auto lg:grow text-center bg-gsk-gray rounded-xl font-bold justify-center lg:px-20 py-10 text-gsk-orange hover:bg-gsk-orange hover:text-white transition-colors ease-out duration-200">
						<H3 title={item.title}/>
					</button>
				))}
			</div>
			<div className="py-4">
				<Cta title={`Ver más`} url={`/acerca-de-herpes-zoster`}/>
			</div>
		</section>
	)
}

export default Faq