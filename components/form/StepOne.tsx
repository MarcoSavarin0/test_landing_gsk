import { useForm } from "react-hook-form"
import { useFormState } from "@/components/form/FormContext"

type RadioValue = {
	conocimiento: string
}

export function StepOne() {
	const {onHandleNext, setFormData, formData, step} = useFormState()
	const {register, handleSubmit} = useForm<RadioValue>({
		defaultValues: formData,
	})

	const onHandleFormSubmit = (data: RadioValue) => {
		setFormData((prev: any) => ({ ...prev, ...data }))
		onHandleNext()
	}

	return (
		<form onSubmit={handleSubmit(onHandleFormSubmit)} className="space-y-14">
			<div className="pt-8 space-y-5">
				<div>
					{/* factorize */}
					<span className="text-xs">{step} / 4</span>

					<div className="flex flex-wrap gap-x-1 justify-start items-center">
						<span className={`${step >= 1 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
						<span className={`${step >= 2 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
						<span className={`${step >= 3 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
						<span className={`${step >= 4 ? "bg-gsk-orange" : "bg-gsk-gray"} w-8 sm:w-12 md:w-16 lg:w-20 h-1`}/>
					</div>
					{/* factorize */}
				</div>

				<p className="uppercase text-xl w-full sm:w-10/12 md:w-4/12 font-bold">¿Tuviste varicela en algún momento de tu vida?</p>

				<ul className="flex flex-wrap gap-x-2 gap-y-3">
					<li>
						<input type="radio" id="si" value="si" {...register("conocimiento")} className="hidden peer" required={true} />
						<label htmlFor="si" className="px-4 py-1 rounded-lg uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-100 peer-checked:bg-gsk-orange peer-checked:border-gsk-orange cursor-pointer">
							SÍ
						</label>
					</li>
					<li>
						<input type="radio" id="no" value="no" {...register("conocimiento")} className="hidden peer" required={true} />
						<label htmlFor="no" className="px-4 py-1 rounded-lg uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-100 peer-checked:bg-gsk-orange peer-checked:border-gsk-orange cursor-pointer">
							NO
						</label>
					</li>
					<li>
						<input type="radio" id="norecuerdo" value="norecuerdo" {...register("conocimiento")} className="hidden peer" required={true} />
						<label htmlFor="norecuerdo" className="px-4 py-1 rounded-lg uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-100 peer-checked:bg-gsk-orange peer-checked:border-gsk-orange cursor-pointer">
							NO LO RECUERDO
						</label>
					</li>
				</ul>

				<div className="flex flex-wrap gap-x-2 gap-y-1">
					<button className="px-4 py-1 rounded-lg uppercase border border-gsk-orange hover:border-white bg-gsk-orange hover:bg-white text-white hover:text-gsk-orange transition-colors duration-200">SIGUIENTE</button>
				</div>
			</div>
		</form>
	)
}