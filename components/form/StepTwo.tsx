import { useForm } from "react-hook-form"
import { useFormState } from "@/components/form/FormContext"

type RadioValue = {
	edad: string
}

export function StepTwo() {
	const {onHandleNext, setFormData, formData, onHandleBack, step} = useFormState()
	const {register, handleSubmit} = useForm<RadioValue>({
		defaultValues: formData,
	})

	const onHandleFormSubmit = (data: RadioValue) => {
		setFormData((prev: any) => ({ ...prev, ...data }))
		onHandleNext()
	}

	return (
		<form onSubmit={handleSubmit(onHandleFormSubmit)} className="space-y-14">
			<div className="pt-8 space-y-5 lg:flex lg:flex-col lg:items-center lg:justify-center lg:space-y-8">
				<div>
					{/* factorize */}
					<span className="text-xs">{step} / 4</span>

					<div className="flex flex-wrap gap-x-1 justify-start items-center ">
						<span className={`${step >= 1 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
						<span className={`${step >= 2 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
						<span className={`${step >= 3 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
						<span className={`${step >= 4 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
					</div>
					{/* factorize */}
				</div>

				<p className="uppercase text-xl w-full md:w-10/12 lg:w-1/2 font-bold lg:text-center">¿Cuántos años tenés?</p>

				<ul className="flex flex-wrap gap-x-2 gap-y-3 ">
					<li>
						<input type="radio" id="menos" value="menos" {...register("edad")} className="hidden peer" required={true} />
						<label htmlFor="menos" className="px-4 py-1 rounded-lg uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-100 peer-checked:bg-gsk-orange peer-checked:border-gsk-orange cursor-pointer">
							Menos de 50 años
						</label>
					</li>
					<li>
						<input type="radio" id="mas" value="mas" {...register("edad")} className="hidden peer" required={true} />
						<label htmlFor="mas" className="px-4 py-1 rounded-lg uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-100 peer-checked:bg-gsk-orange peer-checked:border-gsk-orange cursor-pointer">
							Más de 50 años
						</label>
					</li>
				</ul>

				<div className="flex flex-wrap gap-x-2 gap-y-1">
					<button type="button" onClick={onHandleBack} className="px-4 py-1 rounded-lg uppercase border border-white hover:border-white bg-gsk-dark hover:bg-white text-white hover:text-gsk-orange transition-colors duration-200">
						ATRÁS
					</button>
					<button className="px-4 py-1 rounded-lg uppercase border border-gsk-orange hover:border-white bg-gsk-orange hover:bg-white text-white hover:text-gsk-orange transition-colors duration-200">
						SIGUIENTE
					</button>
				</div>
			</div>
		</form>
	)
}