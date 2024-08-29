import { useState } from "react"
type ActiveIndex = number | null
export const ButtonFilter = () => {
	const list = [
		"Síntomas del Herpes Zóster",
		"Complicaciones del Herpes Zóster",
		"Enfermedades Autoinmunes",
		"Enfermedades Respiratorias",
		"Enfermedades Cardiovasculares",
	]

	// Estado para guardar el índice del botón activo
	const [activeIndex, setActiveIndex] = useState<ActiveIndex>(null)

	const handleClick = (index : ActiveIndex) => {
		setActiveIndex(index)
	}

	return (
		<>
			<div className="overflow-x-auto whitespace-nowrap md:overscroll-x-none md:whitespace-pre-wrap">
				{list.map((item, index) => (
					<button
						key={index}
						onClick={() => handleClick(index)}
						className={`${
							activeIndex === index ? "bg-gsk-orange text-white" : "bg-gsk-gray text-[#313131]"
						} hover:bg-gsk-orange text-xs hover:text-white rounded-md px-5 py-2 uppercase transition-colors ease-out duration-300 m-2`}
					>
						{item}
					</button>
				))}
			</div>
		</>
	)
}


