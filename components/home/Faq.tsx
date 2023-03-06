import Cta from "@/components/ui/Cta"

const Faq = () => {
	return (
		<section>
			<div>
				<h2>Lorem ipsum</h2>
				<p>Lorem ipsum</p>
			</div>
			<div>
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