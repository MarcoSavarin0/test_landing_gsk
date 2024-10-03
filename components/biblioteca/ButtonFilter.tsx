import { useState } from "react"

interface ButtonFilterProps {
    categories: string[];
    onClick: (filter: string) => void;
  }
export const ButtonFilter = ({ categories, onClick }: ButtonFilterProps) => {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

	const handleClick = (category: string) => {
		setSelectedCategory(category) // Actualiza el estado con la categoría seleccionada
		onClick(category) // Llama a la función onClick pasada como prop
	}

	return (
		<>
			<div className="overflow-x-auto whitespace-nowrap md:overscroll-x-none md:whitespace-pre-wrap">
				{categories.map((category, index) => (
					<button
						key={index}
						onClick={() => handleClick(category)}
						className={`text-xs rounded-md px-5 py-2 uppercase transition-colors ease-out duration-300 m-2 
            ${selectedCategory === category ? 'bg-gsk-orange text-white' : 'bg-gsk-gray text-[#313131] hover:bg-gsk-orange hover:text-white'}`}
					>
						{category}
					</button>
				))}
			</div>
		</>
	)
}


