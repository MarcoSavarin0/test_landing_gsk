import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react"

interface IFormContext {
	formData: any
	setFormData: Dispatch<SetStateAction<any>>
	onHandleBack: () => void
	onHandleNext: () => void
	step: number
}

const FormContext = createContext<IFormContext>({
	formData: {},
	onHandleBack: () => { /* onHandleBack */ },
	onHandleNext: () => { /* onHandleNext */ },
	setFormData: () => { /* setFormData */ },
	step: 0,
})

interface IProps {
	children: ReactNode;
}

export function FormProvider({ children }: IProps) {
	const [formData, setFormData] = useState()
	const [step, setStep] = useState(1)

	const onHandleNext = () => {
		setStep((prev) => prev + 1)
	}

	const onHandleBack = () => {
		setStep((prev) => prev - 1)
	}

	return (
		<FormContext.Provider
			value={{ formData, setFormData, onHandleBack, onHandleNext, step }}
		>
			{children}
		</FormContext.Provider>
	)
}

export function useFormState() {
	return useContext(FormContext)
}