import H2 from "@/components/ui/H2"
import Banner from "@/components/home/Banner"
import Cta from "@/components/ui/Cta"

import localFont from "@next/font/local"
const gskPrecisionBold = localFont({ src: '../../styles/fonts/gskprecision-bold.woff2' })

const Autotest = () => {
	return (
		<section className="space-y-6 bg-gsk-dark">
			<div>
				<div className="space-y-3 px-4 text-center  pt-10 pb-36 shadow-xl">
					<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Herpes Zóster</h1>
					<H2 title={`TEST: ¿ESTOY EN RIESGO DE TENER HERPES ZÓSTER?`}/>
					<div className={`${gskPrecisionBold.className} text-white font-bold text-lg bold md:text-xl`}>
						<p>¿Cuánto sabés sobre sobre el <span className="text-gsk-orange">Herpes Zóster</span>?</p>
						<p>Completá este test para poner a prueba tu conocimiento.</p>
					</div>
				</div>

				<article className="h-fit lg:h-[40rem] 2xl:h-[50rem] w-11/12 md:w-10/12 mx-auto about px-10 space-y-14 text-white rounded-xl">
					<div className="-mt-24 pt-8 space-y-14">
						<div className="space-y-4">
							<div>
								<p>El <span className="text-gsk-orange">Herpes Zóster</span> una enfermedad causada por la reactivación del Virus Varicela Zóster (VVZ), el mismo virus que causa la varicela. Luego de que una persona contrae varicela, el virus permanece latente en su sistema nervioso, por lo general, sin causar síntomas hasta su reactivación <sup>1, 2</sup>.</p>
							</div>
						</div>

						<div className="bg-white px-6 md:px-10 py-6 rounded-lg text-gsk-dark text-center space-y-6">
							<div>
								<p>Este cuestionario <strong>no solicitará ninguna información personal o sensible, ni está diseñado para utilizarse para el diagnóstico, prevención o tratamiento del Herpes Zóster.</strong> Sus fines son estrictamente informativos y no reemplazan el asesoramiento médico. Si vos o alguna persona cercana está sufriendo Herpes Zóster, o si tenes cualquier duda o pregunta sobre tu salud, no dudes en realizar una consulta con tu médico o médica de confianza.</p>
							</div>
							<div>
								<Cta title={`EMPECEMOS`} url={`/autotest/1`}/>
							</div>
						</div>

						<ol className="text-xs">
							<li>1- Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.</li>
							<li>2- Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697.</li>
						</ol>
					</div>
				</article>
			</div>

			<Banner/>
		</section>
	)
}

export default Autotest