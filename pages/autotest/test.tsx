import H2 from "@/components/ui/H2"
import Banner from "@/components/home/Banner"

const Autotest = () => {
	return (
		<section className="space-y-6 md:space-y-32 bg-gsk-dark">
			<div>
				<div className="space-y-3 px-4 text-center  pt-10 pb-36 shadow-xl">
					<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Herpes Zóster</h1>
					<H2 title={`TEST: ¿ESTOY EN RIESGO DE TENER HERPES ZÓSTER?`}/>
				</div>

				<article className="w-11/12 md:w-10/12 mx-auto about px-10 space-y-14 text-white rounded-xl">
					<div className="-mt-24 pt-8 space-y-5">
						<div>
							<span className="text-xs">1 / 4</span>

							<div className="flex flex-wrap gap-x-1 justify-start items-center">
								<span className="bg-gsk-orange w-8 sm:w-12 md:w-16 lg:w-20 h-1"/>
								<span className="bg-gsk-gray w-8 sm:w-12 md:w-16 lg:w-20 h-1"/>
								<span className="bg-gsk-gray w-8 sm:w-12 md:w-16 lg:w-20 h-1"/>
								<span className="bg-gsk-gray w-8 sm:w-12 md:w-16 lg:w-20 h-1"/>
							</div>
						</div>

						<p className="uppercase text-xl w-full md:w-10/12 lg:w-1/2 font-bold">¿SABÍAS que el <span className="text-gsk-orange">Herpes Zóster</span> es causado por el virus <span className="text-gsk-orange">Varicela-Zóster</span>, el mismo que ocasiona la varicela?</p>

						<div className="flex flex-wrap gap-x-2 gap-y-2">
							<button className="px-4 py-1 rounded-lg  uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-200">SÍ</button>
							<button className="px-4 py-1 rounded-lg  uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-200">NO</button>
							<button className="px-4 py-1 rounded-lg  uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-200">NO LO RECUERDO</button>
						</div>

						<button className="px-4 py-1 rounded-lg uppercase border border-gsk-orange hover:border-white bg-gsk-orange hover:bg-white text-white hover:text-gsk-orange transition-colors duration-200">SIGUIENTE</button>
					</div>
				</article>
			</div>

			<Banner/>
		</section>
	)
}

export default Autotest