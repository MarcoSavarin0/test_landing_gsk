import React, { useState } from 'react'

const CollapsibleList = ({ list }: { list: string[] }) => {
	const [isActive, setIsActive] = useState(false)

	const toggleList = () => {
		setIsActive(!isActive)
	}

	return (
		<div>
			<button className="text-gsk-orange text-lg" onClick={toggleList}>{isActive ? 'Ocultar Referencias' : 'Referencias'}</button>
			{isActive && (
				<ul>
					{list.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default CollapsibleList
