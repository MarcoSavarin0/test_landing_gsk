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
								<p>El <span className="text-gsk-orange">Herpes Zóster</span>, también conocido como culebrilla, es la reactivación del Virus Herpes-Zóster, el mismo que causa la varicela.<sup>1</sup></p>
								<p>A medida que las personas envejecen, su sistema inmune se debilita, por lo que aumenta el riesgo de desarrollar la enfermedad. Las posibilidades de padecer Herpes Zóster es mayor a partir de los 50 años. Se estima que <span className="text-gsk-orange">1 de cada 3 personas desarrollará Herpes Zóster en algún momento de su vida</span>.<sup>1</sup></p>
							</div>

							<p>Los síntomas pueden variar de una persona a la otra. Las primeras señales son picazón, dolor, hormigueo, sensación molesta o sensibilidad al tacto en el tórax, el abdomen o el rostro.<sup>2</sup></p>

							<p>Aunque la mayoría de los pacientes se recupera por completo, algunos pueden sufrir complicaciones. La más frecuente es la Neuralgia Postherpética, un dolor que persiste incluso cuando las lesiones en la piel han desaparecido.<sup>3</sup></p>
						</div>

						<div className="bg-white px-10 py-6 rounded-lg text-gsk-dark text-center space-y-6">
							<div>
								<p>Este cuestionario <strong>no está diseñado para utilizarse para arribar al diagnóstico, prevención o tratamiento del Herpes Zóster</strong>. Sus fines son estrictamente informativos y no reemplazan el asesoramiento de un profesional de la salud. Si vos o alguna persona cercana está sufriendo Herpes Zóster, no dudes en realizar una consulta con tu médico o médica de confianza.</p>
							</div>
							<div>
								<Cta title={`EMPECEMOS`} url={`/autotest/test`}/>
							</div>
						</div>

						<ol className="text-xs">
							<li>1- Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.</li>
							<li>2- Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697.</li>
							<li>3- Lukas, K, Edte, A, Bertrand, I. The impact of herpes zoster and post-herpetic neuralgia on quality of life: patient-reported outcomes in six European countries. Z Gesundh Wiss. 2012;20(4):441–451.</li>
						</ol>
					</div>
				</article>
			</div>

			<Banner/>
		</section>
	)
}

export default Autotest