import H2 from "@/components/ui/H2"
import Banner from "@/components/home/Banner"
import Link from "next/link"

const Autotest = () => {
	return (
		<section className="space-y-20 lg:space-y-6 bg-gsk-dark">
			<div>
				<div className="space-y-3 px-4 text-center  pt-10 pb-36 shadow-xl">
					<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Herpes Zóster</h1>
					<H2 title={`TEST: ¿ESTOY EN RIESGO DE TENER HERPES ZÓSTER?`}/>
				</div>

				<article className="h-fit lg:h-[40rem] 2xl:h-[50rem] w-11/12 md:w-10/12 mx-auto about px-10 space-y-14 text-white rounded-xl">
					<div className="-mt-24 pt-8 space-y-5">
						<div>
							<span className="text-xs">2 / 4</span>

							<div className="flex flex-wrap gap-x-1 justify-start items-center">
								<span className="bg-gsk-orange w-8 sm:w-12 md:w-16 lg:w-20 h-1"/>
								<span className="bg-gsk-orange w-8 sm:w-12 md:w-16 lg:w-20 h-1"/>
								<span className="bg-gsk-gray w-8 sm:w-12 md:w-16 lg:w-20 h-1"/>
								<span className="bg-gsk-gray w-8 sm:w-12 md:w-16 lg:w-20 h-1"/>
							</div>
						</div>

						<p className="uppercase text-xl w-full md:w-10/12 lg:w-1/2 font-bold">¿Cuántos años tenés?</p>

						<ul className="flex flex-wrap gap-x-2 gap-y-3">
							<li>
								<input type="radio" id="menos" name="edad" value="menos" className="hidden peer" required />
								<label htmlFor="menos" className="px-4 py-1 rounded-lg uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-100 peer-checked:bg-gsk-orange peer-checked:border-gsk-orange cursor-pointer">
									Menos de 50 años
								</label>
							</li>
							<li>
								<input type="radio" id="mas" name="edad" value="mas" className="hidden peer" required />
								<label htmlFor="mas" className="px-4 py-1 rounded-lg uppercase border border-white hover:border-gsk-orange bg-gsk-dark hover:bg-gsk-orange transition-colors duration-100 peer-checked:bg-gsk-orange peer-checked:border-gsk-orange cursor-pointer">
									Más de 50 años
								</label>
							</li>
						</ul>

						<div className="flex flex-wrap gap-x-2 gap-y-1">
							<Link href="/autotest/1" className="px-4 py-1 rounded-lg uppercase border border-white hover:border-white bg-gsk-dark hover:bg-white text-white hover:text-gsk-orange transition-colors duration-200">ATRÁS</Link>
							<Link href="/autotest/3" className="px-4 py-1 rounded-lg uppercase border border-gsk-orange hover:border-white bg-gsk-orange hover:bg-white text-white hover:text-gsk-orange transition-colors duration-200">SIGUIENTE</Link>
						</div>
					</div>
				</article>
			</div>

			<Banner/>
		</section>
	)
}

export default Autotest