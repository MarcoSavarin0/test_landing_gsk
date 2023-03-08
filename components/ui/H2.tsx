interface Header2 {
	title: string
}

const H2 = ({title}: Header2) => {
	return (
		<h2 className="uppercase text-gsk-orange font-bold text-center">{title}</h2>
	)
}

export default H2