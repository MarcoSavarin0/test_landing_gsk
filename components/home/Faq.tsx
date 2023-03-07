import Cta from "@/components/ui/Cta"
import H2 from "@/components/ui/H2"

const Faq = () => {
	return (
		<section className="space-y-6 text-center">
			<div>
				<H2 title={`Preguntas frecuentes`}/>
				<p>Lorem ipsum</p>
			</div>
			<div className="flex justify-between">
				<h3>Cta button</h3>
				<h3>Cta button</h3>
				<h3>Cta button</h3>
			</div>
			<div>
				<Cta title={`Ver más`} url={`/preguntas-frecuentes`}/>
			</div>
		</section>
	)
}

export default Faq