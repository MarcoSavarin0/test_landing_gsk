import Image from 'next/image'
import { Element } from 'react-scroll'

const IntroNew = () => {
	return (
		<Element name="que-es-herpes-zoster" className="bg-gsk-dark text-center">
			{/* Orange Section */}
			<article className="bg-gsk-orange text-white space-y-12 py-10 px-8 md:px-16 lg:px-24 xl:px-32">
				<div className="space-y-4 md:space-y-0">
					<p className="text-lg md:text-xl lg:text-2xl">
						Ante una baja de defensas, el Herpes Zóster puede activarse.
					</p>
					<p className="text-lg md:text-xl lg:text-2xl">
						Si padeces alguna enfermedad crónica o tu sistema inmune está comprometido, es importante estar alerta.
					</p>
				</div>
			</article>

			{/* White Section with Image */}
			<div className="flex justify-center bg-white">
				<div className="w-20 mx-auto md:w-24 lg:w-28">
					<Image
						priority
						src="/shape-gsk.svg"
						width={80}
						height={60}
						alt="GSK Shape"
						sizes="100vw"
						className="w-full h-full"
					/>
				</div>
			</div>
		</Element>
	)
}

export default IntroNew
