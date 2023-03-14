import Cta from "@/components/ui/Cta"
import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"

const Blog = () => {
	return (
		<section className="py-4">
			<div className="text-center space-y-4">
				<H2 title={`Blog`}/>
				<Description title={`Conocé más sobre el Herpes Zóster.`}/>

				<div className="py-6">
					<Cta title={`Leer notas`} url={`/blog`}/>
				</div>
			</div>
		</section>
	)
}

export default Blog