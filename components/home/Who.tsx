import H2 from "@/components/ui/H2"
import CardIcon from "@/components/home/ui/CardIcon"

const Who = () => {
	return (
		<section className="text-center space-y-6">
			<H2 title={`¿Quiénes están en riesgo?`}/>
			<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.</p>
			<div className="flex justify-between">
				<CardIcon title={`Lorem ipsum`} image={`Img`}/>
				<CardIcon title={`Lorem ipsum`} image={`Img`}/>
				<CardIcon title={`Lorem ipsum`} image={`Img`}/>
			</div>
		</section>
	)
}

export default Who