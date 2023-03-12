import Image from 'next/image'
import localFont from "@next/font/local"

const gskPrecisionBold = localFont({ src: '../../styles/fonts/gskprecision-bold.woff2' })

const Intro = () => {
	return (
		<div className="pt-10 bg-gsk-dark text-center">
			<div>
				<h1 className={`${gskPrecisionBold} text-gsk-orange font-bold leading-none uppercase text-3xl sm:text-5xl lg:text-6xl`}>Herpes Zóster</h1>
			</div>
			<article className="bg-gsk-orange text-white -mt-1 sm:-mt-2 lg:-mt-2 py-14 px-8 md:px-12">
				<h2 className="text-2xl uppercase">EL HERPES ZÓSTER TAMBIÉN ES CONOCIDO COMO <span className="italic">CULEBRILLA</span></h2>
				<p className="">Es una enfermedad causada por la reactivación del Virus Varicela Zóster (VVZ), el mismo virus que causa la varicela. <sup>1 2</sup>  Luego de que una persona contrae varicela, el virus permanece latente en su sistema nervioso, por lo general, sin causar síntomas hasta su reactivación.</p>
			</article>
			<div className="flex justify-center bg-white">
				<Image src="/shape-gsk.svg" width={80} height={60} alt="" />
			</div>
		</div>
	)
}

export default Intro