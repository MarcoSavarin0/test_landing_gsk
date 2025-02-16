import Cta from "@/components/ui/Cta"
import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"

const Blog = () => {
	return (
		<section className="pb-8">
			<div className="text-center space-y-4">
				<H2 title={`Blog`}/>
				<Description title={`Conocé más sobre el Herpes Zóster.`}/>

				<div className="py-6">
					<Cta title={`Leer más`} url={`/biblioteca`}/>
				</div>
			</div>
		</section>
	)
}

export default Blog