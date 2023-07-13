import H2 from "@/components/ui/H2"
import Banner from "@/components/home/Banner"
import Link from "next/link"

const Resultado = () => {
	return (
		<section className="space-y-6 bg-gsk-dark">
			<div>
				<div className="space-y-3 px-4 text-center  pt-10 pb-36 shadow-xl">
					<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Herpes Zóster</h1>
					<H2 title={`RESULTADO`}/>
				</div>

				<article className="h-fit lg:h-[40rem] 2xl:h-[50rem] w-11/12 md:w-10/12 mx-auto about px-10 space-y-14 text-white rounded-xl">
					<div className="-mt-24 pt-8 space-y-6">
						<div className="text-center space-y-1">
							<div className="flex flex-wrap gap-x-2 justify-center items-end">
								<span className="bg-gsk-orange w-4 md:w-5 h-4"/>
								<span className="bg-gsk-gray w-4 md:w-5 h-8"/>
								<span className="bg-gsk-gray w-4 md:w-5 h-12"/>
								<span className="bg-gsk-gray w-4 md:w-5 h-14"/>
							</div>
							<h3 className="uppercase text-xl md:text-2xl font-bold">BAJO RIESGO</h3>
						</div>

						<div className="bg-white px-6 md:px-10 py-6 rounded-lg text-gsk-dark text-center space-y-6">
							<h3 className="text-xl">Tenés <span className="uppercase text-gsk-orange font-bold">BAJO RIESGO</span> de desarrollar Herpes Zóster.</h3>

							<p>Independientemente de si tuviste o no varicela, dado que sos menor de 50 años y tu sistema inmunitario no está debilitado, tu riesgo de tener Herpes Zóster es bajo.1 Si sos familiar o cuidador de una persona de 50 años o más, hablá con el médico o médica sobre los factores de riesgo, la prevención y tratamiento del Herpes Zóster.</p>

							<p className="italic">También podés acceder a <Link href="/" className="text-gsk-orange hover:underline">hablemosdezoster.com</Link> para conocer más sobre el Herpes Zóster.</p>
						</div>

						<ol className="text-xs">
							<li>
								1- Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.
							</li>
						</ol>
					</div>
				</article>
			</div>

			<Banner/>
		</section>
	)
}

export default Resultado