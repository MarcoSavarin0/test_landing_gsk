import Image from 'next/image'
import { Element } from 'react-scroll'

const Intro = () => {
	return (
		<Element name="que-es-herpes-zoster" className="pt-10 md:pt-10 bg-gsk-dark text-center">
			<article className="bg-gsk-orange text-white space-y-3 py-10 px-8 md:px-16">
				<h2 className="text-2xl md:text-3xl uppercase">EL HERPES ZÓSTER TAMBIÉN ES CONOCIDO COMO <span className="italic">CULEBRILLA</span></h2>
				<p className="text-lg md:text-xl">Es una enfermedad causada por la reactivación del Virus Varicela Zóster (VVZ), el mismo virus que causa la varicela. Luego de que una persona contrae varicela, el virus permanece latente en su sistema nervioso, por lo general, sin causar síntomas hasta su reactivación <sup>1, 2</sup>.</p>
			</article>
			<div className="flex justify-center bg-white">
				<Image src="/shape-gsk.svg" width={80} height={60} alt="" />
			</div>
		</Element>
	)
}

export default Intro