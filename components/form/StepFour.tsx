import Link from "next/link"
import {useEffect, useState} from "react"
import { useForm } from "react-hook-form"
import parse from "html-react-parser"

import { useFormState } from "@/components/form/FormContext"
import Cta from "@/components/ui/Cta"

type RadioValue = {
	inmune: string
}

const results = [
	{
		"result": "Bajo Riesgo",
		"title": "Tenés BAJO RIESGO",
		"body": "Independientemente de si tuviste o no varicela, dado que sos menor de 50 años y tu sistema inmunitario no está debilitado, tu riesgo de tener Herpes Zóster es bajo.<sup>1</sup> Si sos familiar o cuidador de una persona de 50 años o más, hablá con el médico o médica sobre los factores de riesgo, la prevención y tratamiento del Herpes Zóster.",
	},
	{
		"result": "Bajo Riesgo",
		"title": "Tenés BAJO RIESGO",
		"body": "Independientemente de si tuviste o no varicela, dado que sos menor de 50 años y tu sistema inmunitario no está debilitado, tu riesgo de tener Herpes Zóster es bajo.<sup>1</sup> Si sos familiar o cuidador de una persona de 50 años o más, hablá con el médico o médica sobre los factores de riesgo, la prevención y tratamiento del Herpes Zóster.",
	},
	{
		"result": "En riesgo",
		"title": "EXISTE UN RIESGO",
		"body": `Se estima que 1 de cada 3 personas desarrollará Herpes Zóster en algún momento de su vida. Algunos de los factores que pueden llevar a desarrollar Herpes Zóster son: haber tenido varicela en algún momento, sufrir alguna enfermedad de base o estar en tratamiento con medicamentos que debilitan el sistema inmunológico o, en algunos casos, la edad. Esto se debe a que, con los años, el sistema inmune comienza a debilitarse, aumentando el riesgo de que el virus se reactive. Las personas mayores de 50 años tienen más posibilidades de contraer Herpes Zóster.<sup>1</sup>`,
	},
	{
		"result": "Mayor Riesgo",
		"title": "Tenés MAYOR RIESGO",
		"body": `Algunos de los factores que pueden llevar a desarrollar Herpes Zóster son: haber tenido varicela en algún momento, sufrir alguna enfermedad de base o estar en tratamiento con medicamentos que debilitan el sistema inmunológico o, en algunos casos, la edad. Esto se debe a que, con los años, el sistema inmune comienza a debilitarse, aumentando el riesgo de que el virus se reactive.<sup>1</sup> Ante la aparición de síntomas, recomendamos visitar a tu médico o médica para obtener más información sobre los factores de riesgo, la prevención y tratamiento del Herpes Zóster.`,
	},
	{
		"result": "Riesgo aumentado",
		"title": "Tenés un RIESGO AUMENTADO",
		"body": `Las enfermedades de base aumentan el riesgo de desarrollar Herpes Zóster en las personas mayores de 50 años que tuvieron varicela en algún momento de sus vidas. Otro factor que puede llevar a desarrollar la enfermedad es estar en tratamiento con medicamentos que debilitan el sistema inmunológico.<sup>1</sup>`,
	},
	{
		"result": "Riesgo aumentado",
		"title": "Tenés un RIESGO AUMENTADO",
		"body": `Las enfermedades de base aumentan el riesgo de desarrollar Herpes Zóster en las personas mayores de 50 años que tuvieron varicela en algún momento de sus vidas. Otro factor que puede llevar a desarrollar la enfermedad es estar en tratamiento con medicamentos que debilitan el sistema inmunológico.<sup>1</sup>`,
	}
]

export function StepFour() {
	const [isCreated, setCreated] = useState(false)

	const { setFormData, formData, onHandleBack, step } = useFormState()
	const { register, handleSubmit } = useForm<RadioValue>({
		defaultValues: formData,
	})

	const onHandleFormSubmit = async (data: RadioValue) => {
		setFormData((prev: any) => ({ ...prev, ...data }))
		setCreated(true)
	}

	const getValue = () => {
		const CONOCIMIENTO = JSON.stringify(formData["conocimiento"]).replaceAll('"', '')
		const EDAD = JSON.stringify(formData["edad"]).replaceAll('"', '')
		const ENFERMEDAD = JSON.stringify(formData["enfermedad"]).replaceAll('"', '')
		const INMUNE = JSON.stringify(formData["inmune"]).replaceAll('"', '')

		if (CONOCIMIENTO == "si" && EDAD == "menos" && ENFERMEDAD == "si" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "si" && EDAD == "menos" && ENFERMEDAD == "no" && INMUNE == "no") {
			return 1
		} else if (CONOCIMIENTO == "si" && EDAD == "menos" && ENFERMEDAD == "si" && INMUNE == "no") {
			return 1
		} else if (CONOCIMIENTO == "si" && EDAD == "menos" && ENFERMEDAD == "no" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "si" && EDAD == "mas" && ENFERMEDAD == "si" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "si" && EDAD == "mas" && ENFERMEDAD == "no" && INMUNE == "no") {
			return 2
		} else if (CONOCIMIENTO == "si" && EDAD == "mas" && ENFERMEDAD == "si" && INMUNE == "no") {
			return 4
		} else if (CONOCIMIENTO == "si" && EDAD == "mas" && ENFERMEDAD == "no" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "no" && EDAD == "menos" && ENFERMEDAD == "si" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "no" && EDAD == "menos" && ENFERMEDAD == "no" && INMUNE == "no") {
			return 1
		} else if (CONOCIMIENTO == "no" && EDAD == "menos" && ENFERMEDAD == "si" && INMUNE == "no") {
			return 1
		} else if (CONOCIMIENTO == "no" && EDAD == "menos" && ENFERMEDAD == "no" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "no" && EDAD == "mas" && ENFERMEDAD == "si" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "no" && EDAD == "mas" && ENFERMEDAD == "no" && INMUNE == "no") {
			return 2
		} else if (CONOCIMIENTO == "no" && EDAD == "mas" && ENFERMEDAD == "si" && INMUNE == "no") {
			return 4
		} else if (CONOCIMIENTO == "no" && EDAD == "mas" && ENFERMEDAD == "no" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "norecuerdo" && EDAD == "menos" && ENFERMEDAD == "si" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "norecuerdo" && EDAD == "menos" && ENFERMEDAD == "no" && INMUNE == "no") {
			return 1
		} else if (CONOCIMIENTO == "norecuerdo" && EDAD == "menos" && ENFERMEDAD == "si" && INMUNE == "no") {
			return 1
		} else if (CONOCIMIENTO == "norecuerdo" && EDAD == "menos" && ENFERMEDAD == "no" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "norecuerdo" && EDAD == "mas" && ENFERMEDAD == "si" && INMUNE == "si") {
			return 3
		} else if (CONOCIMIENTO == "norecuerdo" && EDAD == "mas" && ENFERMEDAD == "no" && INMUNE == "no") {
			return 2
		} else if (CONOCIMIENTO == "norecuerdo" && EDAD == "mas" && ENFERMEDAD == "si" && INMUNE == "no") {
			return 4
		} else if (CONOCIMIENTO == "norecuerdo" && EDAD == "mas" && ENFERMEDAD == "no" && INMUNE == "si") {
			return 3
		} else {
			return 1
		}
	}

	useEffect(() => {
		if(isCreated) {
			fetch(`/api/autotest/resultado`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(formData)
			})
		}
	}, [formData, isCreated])

	return isCreated ? (
		<div>
			<div className="pt-8 space-y-6">
				<div className="text-center space-y-1">
					<div className="flex flex-wrap gap-x-2 justify-center items-end">
						<span className="bg-gsk-orange w-4 md:w-5 h-4"/>
						<span className={`${getValue() >= 2 ? `bg-gsk-orange` : `bg-gsk-gray`} w-4 md:w-5 h-8`}/>
						<span className={`${getValue() >= 3 ? `bg-gsk-orange` : `bg-gsk-gray`} w-4 md:w-5 h-12`}/>
						<span className={`${getValue() >= 4 ? `bg-gsk-orange` : `bg-gsk-gray`} w-4 md:w-5 h-14`}/>
					</div>
					<h3 className="uppercase text-xl md:text-2xl font-bold">{JSON.stringify(results[getValue()].result).split('"').join('')}</h3>
				</div>

				<div className="bg-white px-6 md:px-10 py-6 rounded-lg text-gsk-dark text-center space-y-6">
					<h3 className="text-xl">
						<span className="uppercase text-gsk-orange font-bold">{JSON.stringify(results[getValue()].title).split('"').join('')}</span> de desarrollar Herpes Zóster.
					</h3>

					<p>{parse(JSON.stringify(results[getValue()].body).split('"').join(''))}</p>

					<div>
						<Cta title={`Reiniciar el test`} url={`/autotest`}/>
					</div>

					<p className="italic">Para conocer más sobre el Herpes Zóster, volvé al <Link href="/" className="text-gsk-orange hover:underline">Home</Link> o ingresá en nuestro <Link href="/blog" className="text-gsk-orange hover:underline">Blog</Link>.</p>
				</div>

				<ol className="text-[0.6rem]">
					<li>
						1- Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.
					</li>
				</ol>
			</div>
		</div>
	) : (
		<form onSubmit={handleSubmit(onHandleFormSubmit)} className="space-y-14">
			<div className="pt-8 space-y-5">
				<div>
					<span className="text-xs">{step} / 4</span>
					<div className="flex flex-wrap gap-x-1 justify-start items-center">
						<span className={`${step >= 1 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
						<span className={`${step >= 2 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
						<span className={`${step >= 3 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
						<span className={`${step >= 4 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
					</div>
				</div>

				<p className="uppercase text-xl w-full sm:w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 font-bold">¿Tu sistema inmune está comprometido? <span className="font-normal text-sm block">(Por ejemplo, por tratamientos médicos o uso de medicamentos que debilitan el sistema inmunitario)</span></p>

				<ul className="flex flex-wrap gap-x-2 gap-y-3">
					<li>
						<input type="radio" id="si" value="si" {...register("inmune")} className="hidden peer" required={true} />
						<label htmlFor="si" className="px-4 py-1 rounded-lg uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-100 peer-checked:bg-gsk-orange peer-checked:border-gsk-orange cursor-pointer">
							Sí
						</label>
					</li>
					<li>
						<input type="radio" id="no" value="no" {...register("inmune")} className="hidden peer" required={true} />
						<label htmlFor="no" className="px-4 py-1 rounded-lg uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-100 peer-checked:bg-gsk-orange peer-checked:border-gsk-orange cursor-pointer">
							No
						</label>
					</li>
				</ul>

				<div className="flex flex-wrap gap-x-2 gap-y-1">
					<button type="button" onClick={onHandleBack} className="px-4 py-1 rounded-lg uppercase border border-white hover:border-white bg-gsk-dark hover:bg-white text-white hover:text-gsk-orange transition-colors duration-200">
						ATRÁS
					</button>
					<button className="px-4 py-1 rounded-lg uppercase border border-gsk-orange hover:border-white bg-gsk-orange hover:bg-white text-white hover:text-gsk-orange transition-colors duration-200">
						FINALIZAR
					</button>
				</div>
			</div>
		</form>
	)
}