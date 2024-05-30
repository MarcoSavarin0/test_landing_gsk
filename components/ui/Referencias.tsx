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
	{
		id: 4,
		title: `Schmader K. Clin Geriatr Med. 2007 Aug;23(3):615-32.`,
	},
	{
		id: 5,
		title: `Hadley GR, Gayle JA, Ripoll J, et al. Post-herpetic Neuralgia: a Review. Curr Pain Headache Rep. 2016;20(3):17. PMID: 26879875.`,
	},
	{
		id: 6,
		title: `Culebrilla | Tratamiento | Herpes zóster | CDC.`,
	},
	{
		id: 7,
		title: `Grupo de Trabajo de Vacunación frente al Herpes Zóster (GT-HZ) de la Ponencia de programa y Registro de Vacunaciones. Recomendaciones de vacunación frente a Herpes Zóster [Internet].`,
	},
	{
		id: 8,
		title: `Kim J, Kim BE, Leung DYM. Pathophysiology of atopic dermatitis: Clinical implications. Allergy Asthma Proc. 2019 Mar 1;40(2):84-92. doi: 10.2500/aap.2019.40.4202. PMID: 30819278; PMCID: PMC6399565.`,
	},
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