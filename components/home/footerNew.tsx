import { Element } from 'react-scroll'

const FooterNew = () => {
	return (
		<Element name="que-es-herpes-zoster" className="bg-gsk-dark text-center">
			<article className="bg-gsk-orange text-white space-y-3 py-10 px-8 md:px-16">
				<h2 className="text-5xl width-full uppercase bolder">ACTIVEMOS </h2>
				<h2 className="text-4xl width-full uppercase"> ANTES DE QUE <span className="bold italic"> EL VIRUS SE REACTIVE</span></h2>
				<div className="space-y-4 md:space-y-0">
					<p className="text-lg md:text-2xl">¿Ya consultaste con tu médico o médica sobre el Herpes Zóster?</p>
					{/* <p className="text-lg md:text-2xl"> ¡Tu salud está primero!</p> */}
				</div>
			</article>
		</Element>
	)
}

export default FooterNew