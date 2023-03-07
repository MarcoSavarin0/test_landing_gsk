import Cta from "@/components/ui/Cta"

const Faq = () => {
	return (
		<section className="space-y-6 text-center">
			<div>
				<h2 className="uppercase text-gsk-orange font-bold">Preguntas frecuentes</h2>
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