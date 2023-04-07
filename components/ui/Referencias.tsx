interface Referencia {
	id: number
	title: string
}

const referenciasDetail: Referencia[] = [
	{
		id: 1,
		title: `Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.`,
	},
	{
		id: 2,
		title: `Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697.`,
	},
	{
		id: 3,
		title: `Mueller NH et al. Varicella Zoster Virus Infection: Clinical Features, Molecular Pathogenesis of Disease and Latency. Neurologic Clinics. 2008;26;675-697.`,
	},
	/* {
		id: 4,
		title: `Centros de Control y Prevención de Enfermedades. MMWR. 2008 May;57(RR-5):1-30.`,
	}, */
	/* {
		id: 5,
		title: `Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30`,
	}, */
	{
		id: 4, /* 6 */
		title: `Schmader K. Clin Geriatr Med. 2007 Aug;23(3):615-32.`,
	},
	{
		id: 5, /* 7 */
		title: `Hadley GR, Gayle JA, Ripoll J, et al. Post-herpetic Neuralgia: a Review. Curr Pain Headache Rep. 2016;20(3):17. PMID: 26879875.`,
	},
	{
		id: 6, /* 8 */
		title: `Culebrilla | Tratamiento | Herpes zóster | CDC.`,
	},
	/* {
		id: 9,
		title: `Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30`,
	}, */
	{
		id: 7, /* 10 */
		title: `Grupo de Trabajo de Vacunación frente al Herpes Zóster (GT-HZ) de la Ponencia de programa y Registro de Vacunaciones. Recomendaciones de vacunación frente a Herpes Zóster [Internet].`,
	},
	/* {
		id: 11,
		title: `Harpaz R, Ortega-Sanchez IR, Seward JF; Prevention of Herpes Zóster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-CE4. PMID: 18528318.`,
	},
	{
		id: 12,
		title: `Harpaz R et al. Advisory Committee on Immunization Practices (ACIP), Centers for Disease Control and Prevention (CDC). Prevention of Herpes Zoster: recommendations of the Advisory Committee on Immunization Practices (ACIP). MMWR Recomm Rep. 2008;57(RR-5):1-30.`,
	},
	{
		id: 13,
		title: `Harpaz R, et al. MMWR Recomm Rep. 2008 June;57(RR-5):1-30`,
	} */
]

const Referencias = () => {
	return (
		<>
			{referenciasDetail.map(({title, id}: Referencia, index: number) => (
				<div key={index}>
					<h2 className="text-gsk-dark text-lg">
						{id + `- ` + title}
					</h2>
				</div>
			))}
		</>
	)
}

export default Referencias