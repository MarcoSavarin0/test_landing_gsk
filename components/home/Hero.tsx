import Intro from "@/components/home/Intro"
import localFont from "@next/font/local"

const gskPrecisionBoldItalic = localFont({ src: '../../styles/fonts/gskprecision-bolditalic.woff2' })
const gskPrecisionLight = localFont({ src: '../../styles/fonts/gskprecision-light.woff2' })

const Hero = () => {
	return (
		<section>
			<div className="bg-gsk-dark px-8 md:px-12">
				video
				<article className="w-5/12 space-y-4">
					<h2 className={`${gskPrecisionBoldItalic.className} text-white text-2xl md:text-3xl xl:text-4xl font-bold italic leading-[2rem]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h2>
					<p className={`${gskPrecisionLight} text-gsk-orange text-xl font-light`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</article>
			</div>

			<Intro/>
		</section>
	)
}

export default Hero