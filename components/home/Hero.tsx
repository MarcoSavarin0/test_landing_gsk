import Intro from "@/components/home/Intro"
import localFont from "@next/font/local"

const gskPrecisionBoldItalic = localFont({ src: '../../styles/fonts/gskprecision-bolditalic.woff2' })
const gskPrecisionLight = localFont({ src: '../../styles/fonts/gskprecision-light.woff2' })

const Hero = () => {
	return (
		<section>
			<div className="relative w-full h-72 md:h-64 bg-gsk-dark px-8 md:px-12">
				video
				<article className="static md:absolute top-12 right-0 md:right-8 w-10/12 md:w-5/12 space-y-4">
					<h2 className={`${gskPrecisionBoldItalic.className} text-white text-2xl md:text-3xl xl:text-4xl font-bold italic leading-[2rem]`}>
						<span className="inline md:block">ACTIVEMOS ANTES DE</span>
						<span className="inline md:block">QUE EL VIRUS SE REACTIVE.</span>
						<span className="inline md:block">HABLEMOS DE ZÓSTER.</span>
					</h2>
					<p className={`${gskPrecisionLight} text-gsk-orange text-xl font-light`}>Conocé más sobre la enfermedad, sus síntomas y las opciones de prevención y tratamiento.</p>
				</article>
			</div>

			<Intro/>
		</section>
	)
}

export default Hero