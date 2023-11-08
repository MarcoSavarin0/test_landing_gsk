import Image from 'next/image'

interface VideoTestimonio {
	name: string
	data: string
	active: boolean
}

const ButtonThumbnail = ({name, data, active}: VideoTestimonio) => {
	return (
		<article className="group relative hover:shadow-lg transition ease-out duration-200 overflow-hidden w-full h-44 flex flex-col justify-center items-center rounded-xl px-4 md:px-6 py-8">
			<div className={`${active ? 'bg-gsk-orange/60' : ''} absolute top-0 left-0 w-full h-full group-hover:bg-gsk-orange/60 z-10 mix-blend-multiply transition ease-out duration-200`}/>
			<Image className="absolute object-cover w-full h-44 top-0 left-0" alt={`Alt`} src={`/assets/images/notas/varicela.webp`} width={100} height={80}/>
			<div className="z-10 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.80)] z-20">
				<h3 className="font-bold text-xl">{name}</h3>
				<p>{data}</p>
			</div>
		</article>
	)
}

export default ButtonThumbnail