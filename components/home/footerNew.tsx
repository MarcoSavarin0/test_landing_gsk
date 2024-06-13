
import localFont from "@next/font/local"

const barlowSemicondensedBoldItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-bolditalic.woff2' })
const barlowSemicondensedItalic = localFont({ src: '../../styles/fonts/barlowsemicondensed-italic.woff2' })



const FooterNew = () => {
	return (
		// <Element name="que-es-herpes-zoster" className="bg-gsk-dark text-center">
		// 	<article className="bg-gsk-orange text-white space-y-3 py-10 px-8 md:px-16">
		// 		<h2 className="text-5xl width-full uppercase bolder">ACTIVEMOS </h2>
		// 		<h2 className="text-4xl width-full uppercase"> ANTES DE QUE <span className="bold italic"> EL VIRUS SE REACTIVE</span></h2>
		// 		<div className="space-y-4 md:space-y-0">
		// 			<p className="text-lg md:text-2xl">¿Ya consultaste con tu médico o médica sobre el Herpes Zóster?</p>
		// 			{/* <p className="text-lg md:text-2xl"> ¡Tu salud está primero!</p> */}
		// 		</div>
		// 	</article>
		// </Element>
		<section className="relative bg-gsk-orange text-white text-center py-14">
			<div className="space-y-2 px-3 sm:px-6">
				<h2 className={`${barlowSemicondensedItalic.className} text-2xl md:text-4xl leading-relaxed uppercase font-bold`}><span className={`${barlowSemicondensedBoldItalic.className} text-4xl md:text-5xl`}>Activemos</span> <span className="block">antes de que el <span className={`${barlowSemicondensedBoldItalic.className}`}>virus se reactive</span></span></h2>
				<p className="text-lg md:text-xl">¿Ya consultaste con tu médico o médica sobre el Herpes Zóster?</p>
			</div>
		</section>
	)
}



export default FooterNew