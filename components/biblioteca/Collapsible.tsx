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
				<ul style={{ padding: 0 }}>
					{list.map((item, index) => (
						<li key={index} style={{ marginBottom: '1rem' }} dangerouslySetInnerHTML={{ __html: item }}></li>
					))}
				</ul>
			)}
		</div>
	)
}

export default CollapsibleList
