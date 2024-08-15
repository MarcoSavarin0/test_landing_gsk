import React, { useState } from 'react'
import Image from 'next/image'

type Selected = 'like' | 'dislike' | null;

export const Botoninformacion = () => {
	
	const [selected, setSelected] = useState<Selected>(null)
	const handleLike = () => setSelected('like')
	const handleDislike = () => setSelected('dislike')

	return (
		<>
			<div className="">
				<p className="text-s">Esta información me fue de utilidad</p>
				<div className="mt-3 flex gap-x-5 align-items-center">
					<Image src="/dislike.svg"
						alt="dislike"
						width={20}
						height={10}
						title="Me gusta"
						className={`hover:scale-110 hover:cursor-pointer transition ease-out duration-200 rotate-180 ${selected === 'like' ? 'opacity-50 cursor-not-allowed' : ''}`}
						onClick={selected !== 'like' ? handleLike : undefined}
					/>
					<Image src="/dislike.svg"
						alt="dislike"
						width={20}
						height={10}
						title="No me gusta"
						className={`hover:scale-110 hover:cursor-pointer transition ease-out duration-200 ${selected === 'dislike' ? 'opacity-50 cursor-not-allowed' : ''}`}
						onClick={selected !== 'dislike' ? handleDislike : undefined}
					/>
				</div>
				{selected && <p className="text-sm mt-3 text-green-500">¡Gracias por tu feedback!</p>}
			</div>
		</>
	)
}

