import Image from 'next/image'
import { Element } from 'react-scroll'

const IntroNew = () => {
	return (
		<Element name="que-es-herpes-zoster" className="bg-gsk-dark text-center">
			<article className="bg-gsk-orange text-white space-y-3 py-10 px-8 md:px-16">
				{/* <h2 className="text-2xl md:text-3xl uppercase">EL HERPES ZÓSTER TAMBIÉN ES CONOCIDO COMO <span className="italic">CULEBRILLA</span></h2> */}
				<div className="space-y-4 md:space-y-0">
					<p className="text-lg md:text-xl">Ante una baja de defensas, el Herpes Zóster puede activarse.   </p>
					<p className="text-lg md:text-xl"> Si padeces alguna enfermedad crónica o tu sistema inmune está comprometido, es importante estar alerta.</p>
				</div>
			</article>
			<div className="flex justify-center bg-white">
				<div className="w-20 mx-auto">
					<Image priority src="/shape-gsk.svg" width={80} height={60} alt="" sizes="100vw" className="w-full h-auto" />
				</div>
			</div>
		</Element>
	)
}

export default IntroNew