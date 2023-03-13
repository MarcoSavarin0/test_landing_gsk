import H2 from "@/components/ui/H2"
import CardIcon from "@/components/home/ui/CardIcon"
import Description from "@/components/ui/Description"

const Who = () => {
	return (
		<section className="text-center space-y-6">
			<div className="space-y-3 px-4">
				<H2 title={`¿Quiénes están en riesgo?`}/>
				<Description title={`Enterate si estás en riesgo de contraer Herpes Zóster.`}/>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 content-start gap-x-10 gap-y-8 lg:gap-y-0 px-12">
				<CardIcon title={`TUVE VARICELA`} image={`varicela`}/>
				<CardIcon title={`TENGO 50 AÑOS O MÁS `} image={`mayor`}/>
				<CardIcon title={`MI SISTEMA INMUNE ESTÁ COMPROMETIDO`} image={`inmune`}/>
			</div>
		</section>
	)
}

export default Who