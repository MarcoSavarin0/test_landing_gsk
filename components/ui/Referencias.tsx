interface Referencia {
	title: string
}

const referenciasDetail: Referencia[] = [
	{
		title: `Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.`,
	},
	{
		title: `Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697.`,
	}
	,
	{
		title: `Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697.`,
	},
	{
		title: `Centros de Control y Prevención de Enfermedades. MMWR. 2008 May;57(RR-5):1-30.`,
	},
	{
		title: `Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30`,
	},
	{
		title: `Schmader K. Clin Geriatr Med. 2007 Aug;23(3):615-32`,
	}
	,
	{
		title: `Hadley GR, Gayle JA, Ripoll J, et al. Post-herpetic Neuralgia: a Review. Curr Pain Headache Rep. 2016;20(3):17. PMID: 26879875.`,
	}
	,
	{
		title: `Culebrilla | Tratamiento | Herpes zóster | CDC`,
	}
	,
	{
		title: `Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30`,
	}
	,
	{
		title: `Grupo de Trabajo de Vacunación frente al Herpes Zóster (GT-HZ) de la Ponencia de programa y Registro de Vacunaciones. Recomendaciones de vacunación frente a Herpes Zóster [Internet].`,
	}
	,
	{
		title: `Harpaz R, Ortega-Sanchez IR, Seward JF; Prevention of Herpes Zóster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-CE4. PMID: 18528318.`,
	}
	,
	{
		title: `Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.`,
	},
	{
		title: `Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30`,
	}
]

const Referencias = () => {
	return (
		<>
			{referenciasDetail.map(({title}: Referencia, index: number) => (
				<div key={index}>
					<h2 className="text-gsk-dark text-lg">
						{index +1 + `- ` + title}
					</h2>

				</div>
			))}
		</>
	)
}

export default Referencias