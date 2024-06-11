import useModal from "@/store/store"

import Cta from "@/components/ui/Cta"
import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"
import parse from "html-react-parser"

interface Faq {
	title: string
	body: string
}

const faqs: Faq[] = [
	{
		title: `¿EL HERPES ZÓSTER ES CONTAGIOSO?`,
		body: `<p>No, el Herpes Zóster no puede contagiarse de una persona a otra. Sin embargo, si una persona tiene Herpes Zóster, el contacto directo con las secreciones de las vesículas del sarpullido puede propagar el Virus Varicela Zóster (VVZ) a las personas que nunca han tenido varicela o que nunca recibieron la vacuna contra la misma. Si ellas se infectan, presentarán varicela, pudiendo desarrollar Herpes Zóster más adelante en su vida.</p>`
	},
	{
		title: `¿SE PUEDE TENER HERPES ZÓSTER MÁS DE UNA VEZ?`,
		body: `<p>Sí. Aunque no es tan común, el virus puede volver a reactivarse.</p>`
	},
	{
		title: `¿Cuál es la diferencia entre Herpes Zóster y Herpes Simple?`,
		body: `<p>Aunque el Herpes Simple y el Herpes Zóster comparten algunas similitudes, presentan diferencias notables en cuanto a sus causas, transmisión y manifestaciones clínicas. La principal distinción radica en su contagiosidad. El Herpes Simple, causado por los virus HSV-1 y HSV-2, se transmite a través del contacto directo con lesiones, mucosas o fluidos, resultando en úlceras dolorosas en boca o genitales, fiebre y malestar general. En contraste, el Herpes Zóster, aunque derivado del virus varicela-zóster, no se contagia como tal. En vez de ello, el contacto con las lesiones puede transmitir varicela a quienes no poseen inmunidad previa, manifestándose típicamente como una erupción dolorosa y localizada en un lado del cuerpo. Además, los síntomas del Herpes Zóster a menudo incluyen un dolor más intenso, sensación de ardor o hormigueo, diferenciándose claramente en su impacto y localización respecto a las manifestaciones del Herpes Simple.<sup>8<sup/></p>`
	}
]

const FaqNew = () => {
	const { setVisibility, setTitle, setBody } = useModal()

	const openModalHandler = (index: number): void => {
		// va.track(`Faq ${index + 1}`)
		setTitle(faqs[index].title)
		setBody(faqs[index].body)
		setVisibility()
	}

	return (
		<section className="space-y-6 text-center">
			<div className="space-y-3 px-4">
				<H2 title={`Preguntas frecuentes`}/>
				<Description title={`Conocé toda la información que necesitás saber sobre el Herpes Zóster.`}/>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 content-start px-12 gap-x-8 xl:gap-x-8 2xl:gap-x-16 gap-y-8 lg:gap-y-0 items-center">
				{faqs.map((item:Faq, index: number) => (
					<button onClick={() => openModalHandler(index)} key={index} className="w-11/12 sm:w-9/12 lg:w-full h-full mx-auto text-center bg-gsk-gray rounded-xl font-bold justify-center px-16 lg:px-12 py-10 text-gsk-orange hover:bg-gsk-orange hover:text-white transition hover:scale-105 ease-out duration-200">
						<h3 className="text-lg md:text-xl uppercase">{parse(item.title)}</h3>
					</button>
				))}
			</div>
			<div className="py-4">
				<Cta title={`Ver más`} url={`/acerca-de-herpes-zoster-new`}/>
			</div>
		</section>
	)
}

export default FaqNew
