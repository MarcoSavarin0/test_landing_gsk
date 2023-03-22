import { Accordion } from "flowbite-react"
import parse from "html-react-parser"

interface Faq {
	title: string
	body: string
}

const faqs: Faq[] = [
	{
		title: `¿QUÉ ES EL HERPES ZÓSTER?`,
		body: `<p>El Herpes Zóster, también llamado coloquialmente culebrilla, es una enfermedad causada por la reactivación del Virus Varicela Zóster (VVZ), el mismo virus que causa la varicela. Luego de que una persona contrae varicela <sup>1 2</sup>, el virus permanece latente en su sistema nervioso, por lo general, sin causar síntomas hasta su reactivación.</p>`
	},
	{
		title: `¿CUÁLES SON LOS SÍNTOMAS?`,
		body: `<p>Generalmente los primeros síntomas del Herpes Zóster son picazón, dolor, hormigueo, sensación molesta o sensibilidad al tacto en el tórax, el abdomen o el rostro <sup>3</sup>. Tras los primeros días, comienza la fase aguda de la enfermedad, en la que aparece la erupción cutánea, con ampollas en las zonas afectadas, acompañadas de un dolor agudo. Al cabo de unos 10 días, las vesículas se convierten en costras que, normalmente, duran entre 2 y 4 semanas.</p>`
	}
	,
	{
		title: `¿EL HERPES ZÓSTER ES CONTAGIOSO?`,
		body: `<p>No, el Herpes Zóster no puede contagiarse de una persona a otra. Sin embargo, si una persona tiene Herpes Zóster, el contacto directo con las secreciones de las vesículas del sarpullido puede propagar el Virus Varicela Zóster (VVZ) a las personas que nunca han tenido varicela o que nunca recibieron la vacuna contra la misma. Si ellas se infectan, presentarán varicela, pudiendo desarrollar Herpes Zóster más adelante en su vida.<br><br/>Para prevenir la transmisión del Virus Varicela Zóster (VVZ) se recomienda:<br/><ul><li>Mantener el sarpullido cubierto</li><li>Evitar tocar o rascarse el sarpullido</li><li>Lavarse las manos frecuentemente con agua y jabón, al menos 20 segundos</li><li>Evitar el contacto directo con personas mayores de 50 años, personas con sistema inmunitario debilitado y mujeres embarazadas que nunca hayan contraído varicela, o no estén vacunadas contra la misma</li></ul></p>`
	},
	{
		title: `¿SE PUEDE DESARROLLAR HERPES ZÓSTER SIN HABER TENIDO VARICELA?`,
		body: `<p>No. Para desarrollar Herpes Zóster es necesario haber tenido varicela, ya que el virus es el mismo y queda latente una vez que desarrolla la enfermedad primaria, es decir la varicela.</p>`
	},
	{
		title: `¿QUIÉNES PUEDEN TENER HERPES ZÓSTER?`,
		body: `<p>Todas las personas que hayan tenido varicela pueden tener Herpes Zóster, sin importar su edad. Sin embargo, a medida que las personas envejecen, las células del sistema inmune se debilitan, por lo que aumenta el riesgo de desarrollar la enfermedad. Se calcula que 1 de cada 3 personas desarrollará Herpes Zóster a lo largo de su vida <sup>4</sup>, y que el riesgo de padecer la enfermedad aumenta de los 40 a los 50 años y continúa aumentando cada año <sup>5</sup>. A la edad de 85 años, el riesgo de desarrollar Herpes Zóster aumenta a 1 de cada 2 personas <sup>6</sup>.<br>Asimismo, la incidencia del Herpes Zóster en poblaciones inmunocomprometidas crece exponencialmente. Por ejemplo, en personas que hayan recibido trasplante de médula ósea o células madre, la probabilidad de incidencia respecto a la población total es 9 veces mayor.</p>`
	},
	{
		title: `¿CÓMO ES LA EVOLUCIÓN DEL HERPES ZÓSTER?`,
		body: `<p>La fase aguda dura entre dos y cuatro semanas. El Herpes Zóster, a pesar de presentar una baja mortalidad, puede implicar complicaciones como por ejemplo la Neuralgia Postherpética, que es la más frecuente. Esta puede ocasionar discapacidad y afectar de forma importante a la calidad de vida de quienes viven con ella. La Neuralgia Postherpética se caracteriza por un dolor que puede ser de leve a insoportable, constante o intermitente, pudiendo persistir más de tres meses e incluso durar años <sup>7</sup>. Otras de las complicaciones, aunque menos frecuentes, son aquellas que pueden afectar a la visión con secuelas prolongadas o permanentes, que pueden dar lugar a la pérdida de la visión, complicaciones neurológicas y otros eventos como infartos o enfermedades cardiovasculares.</p>`
	}
	,
	{
		title: `¿CUÁLES SON LAS POSIBLES COMPLICACIONES QUE PUEDE TENER EL HERPES ZÓSTER?`,
		body: `<p>Si bien la mayoría de las personas se recupera por completo, algunas pueden experimentar mayores complicaciones. La complicación más común es la Neuralgia Postherpética (PHN, por sus siglas en inglés), un dolor neurálgico que persiste después de que la erupción se haya curado. La PHN puede durar de tres a seis meses, o incluso persistir por más tiempo. Suele ser más común y grave en personas mayores que en personas más jóvenes. Después de los 50 años, alrededor del 20 % de los pacientes con Herpes Zóster desarrollarán Neuralgia Postherpética.<br/><br/>Otras complicaciones también pueden incluir:<br/><ul><li>Cambios en la piel: cicatrices o cambios en la pigmentación después de que la erupción haya sanado.</li><li>Infección secundaria de la erupción de la culebrilla.</li><li>Herpes Zóster Oftálmico: ocurre cuando el virus infecta el nervio facial.</li><li>Complicaciones del sistema nervioso periférico y central.</li><li>Complicaciones cardiovasculares.</li><li>Impacto negativo en la calidad de vida.</li></ul></p>`
	}
	,
	{
		title: `¿CÓMO SE TRATA EL HERPES ZÓSTER?`,
		body: `<p>Hay medicamentos antivirales disponibles para tratar el Herpes Zóster. Estos medicamentos ayudan a acortar la duración y severidad de la enfermedad, pero para que sean efectivos, se debe comenzar el tratamiento tan pronto como sea posible después de que aparezca la erupción. Los analgésicos pueden ayudar a aliviar el dolor y los paños húmedos, cremas recomendadas y los baños de avena coloidal <sup>8</sup> pueden ayudar a aliviar la picazón. Las personas que padezcan el Herpes Zóster o creen que pueden tenerlo deben acudir a su médico lo antes posible.</p>`
	}
	,
	{
		title: `¿SE PUEDE PREVENIR EL HERPES ZÓSTER?`,
		body: `<p>Se recomienda hablar su médico o médica para obtener más información acerca de la prevención del Herpes Zóster.</p>`
	}
	,
	{
		title: `¿SE PUEDE TENER HERPES ZÓSTER MÁS UNA VEZ?`,
		body: `<p>Sí. Aunque no es tan común, el virus puede volver a reactivarse.</p>`
	}
	,
	{
		title: `¿LOS NIÑOS PUEDEN TENER HERPES ZÓSTER?`,
		body: `<p>Cualquier persona que haya tenido varicela puede desarrollar Herpes Zóster. Sin embargo, los casos en niños son poco frecuentes y los riesgos de padecer la patología incrementan en la adultez con el envejecimiento natural del sistema inmune. Se estima que el riesgo de contraer la enfermedad aumenta drásticamente de los 40 a los 50 años y continúa aumentando cada año.</p>`
	}
	,
	{
		title: `¿EL HERPES ZÓSTER ES MORTAL? ¿ES PELIGROSO?`,
		body: `<p>El Herpes Zóster presenta una baja mortalidad, pero sus complicaciones, especialmente la Neuralgia Postherpética, pueden ocasionar discapacidad y afectar a la calidad de vida de quienes lo padecen. El dolor puede alterar el sueño, el estado de ánimo, el trabajo y las actividades de la vida diaria, lo que repercute negativamente en la calidad de vida y provoca retraimiento social y depresión.</p>`
	}
]

const AboutAccordion = () => {
	return (
		<Accordion>

			{faqs.map(({title, body}: Faq, index: number) => (
				<Accordion.Panel key={index}>
					<Accordion.Title>
						{index +1 + `- ` + title}
					</Accordion.Title>
					<Accordion.Content>
						{parse(body)}
					</Accordion.Content>
				</Accordion.Panel>
			))}

		</Accordion>
	)
}

export default AboutAccordion