import Cta from "@/components/ui/Cta"
import H2 from "@/components/ui/H2"

const Blog = () => {
	return (
		<section>
			<div className="text-center">
				<H2 title={`Blog`}/>
				<p>Conocé más sobre el Herpes Zóster.</p>
				<Cta title={`Leer notas`} url={`/notas`}/>
			</div>
		</section>
	)
}

export default Blog