import Image from 'next/image'
import localFont from "@next/font/local"
import { Element } from 'react-scroll'

const gskPrecisionBold = localFont({ src: '../../styles/fonts/gskprecision-bold.woff2' })

const Intro = () => {
	return (
		<div className="pt-10 bg-gsk-dark text-center">
			<Element name="que-es-herpes-zoster">
				<h1 className={`${gskPrecisionBold} text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Herpes Zóster</h1>
			</Element>
			<article className="bg-gsk-orange text-white space-y-3 -mt-[0.3rem] sm:-mt-2 lg:-mt-2 xl:-mt-3 py-14 px-8 md:px-16">
				<h2 className="text-2xl md:text-3xl uppercase">EL HERPES ZÓSTER TAMBIÉN ES CONOCIDO COMO <span className="italic">CULEBRILLA</span></h2>
				<p className="text-lg md:text-xl">Es una enfermedad causada por la reactivación del Virus Varicela Zóster (VVZ), el mismo virus que causa la varicela. <sup>1 2</sup>  Luego de que una persona contrae varicela, el virus permanece latente en su sistema nervioso, por lo general, sin causar síntomas hasta su reactivación.</p>
			</article>
			<div className="flex justify-center bg-white">
				<Image src="/shape-gsk.svg" width={80} height={60} alt="" />
			</div>
		</div>
	)
}

export default Intro