import Image from 'next/image'
import localFont from "@next/font/local"

const gskPrecisionBold = localFont({ src: '../../styles/fonts/gskprecision-bold.woff2' })

const Intro = () => {
	return (
		<div className="pt-10 bg-gsk-dark text-center">
			<div>
				<h1 className={`${gskPrecisionBold} text-gsk-orange font-bold leading-none uppercase text-3xl lg:text-6xl`}>Herpes Zóster</h1>
			</div>
			<article className="bg-gsk-orange text-white -mt-1 lg:-mt-2 py-14">
				<h2 className="text-2xl uppercase">Lorem ipsum</h2>
				<p className="">Lorem ipsum Lorem ipsum Lorem ipsum.</p>
			</article>
			<div className="flex justify-center bg-white">
				<Image src="/shape-gsk.svg" width={80} height={60} alt="" />
			</div>
		</div>
	)
}

export default Intro