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
	{
		id: 9,
		title: `Muñoz-Quiles C. BMC Infect Dis. 2018 May 3;18(1):203. doi: 10.1186/s12879-018-3121-x. PMID: 29724175; PMCID: PMC5934818. . Forbes HJ. Neurology.2016 Jul 5;87(1):94-102. doi: 10.1212/WNL.0000000000002808 Epub 2016 Jun 10. PMID: 27287218; PMCID: PMC4932239`,
	},
	{
		id: 14,
		title: `Marra F, Parhar K, Huang B, Vadlamudi N. Risk Factors for Herpes Zoster Infection: A Meta-Analysis. Open Forum Infect Dis. 2020 Jan 9;7(1):ofaa005. doi: 10.1093/ofid/ofaa005. PMID: 32010734; PMCID: PMC6984676`,
	},
	{
		id: 11,
		title: `Erskine N, Tran H, Levin L, Ulbricht C, Fingeroth J, Kiefe C, Goldberg RJ, Singh S. A systematic review and meta-analysis on herpes zoster and the risk of cardiac and cerebrovascular events. PLoS One. 2017 Jul 27;12(7):e0181565. doi: 10.1371/journal.pone.0181565. PMID: 28749981; PMCID: PMC5531458.`,
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
