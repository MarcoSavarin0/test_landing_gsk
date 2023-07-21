import H2 from "@/components/ui/H2"
import Banner from "@/components/home/Banner"

import { FormProvider } from "@/components/form/FormContext"
import { StepOne } from "@/components/form/StepOne"
import { StepTwo } from "@/components/form/StepTwo"
import { StepThree } from "@/components/form/StepThree"
import { useFormState } from "@/components/form/FormContext"
import { StepFour } from "@/components/form/StepFour"

const ActiveStepFormComponent = () => {
	const { step } = useFormState()

	switch (step) {
	case 1:
		return <StepOne />
	case 2:
		return <StepTwo />
	case 3:
		return <StepThree />
	case 4:
		return <StepFour />
	default:
		return null
	}
}

const Autotest = () => {
	return (
		<section className="space-y-20 lg:space-y-6 bg-gsk-dark">
			<div>
				<div className="space-y-3 px-4 text-center pt-10 lg:pb-36">
					<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Herpes Zóster</h1>
					<H2 title={`TEST: ¿ESTOY EN RIESGO DE TENER HERPES ZÓSTER?`}/>
				</div>

				<article className="h-fit lg:h-[40rem] 2xl:h-[50rem] w-full md:w-10/12 mx-auto about px-10 space-y-14 text-white rounded-xl">
					<FormProvider>
						<ActiveStepFormComponent />
					</FormProvider>
				</article>
			</div>

			<Banner color="dark"/>
		</section>
	)
}

export default Autotest