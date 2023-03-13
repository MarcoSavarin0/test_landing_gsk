interface Paragraph {
	title: string
}

const Description = ({title}: Paragraph) => {
	return (
		<p className="text-lg md:text-xl">{title}</p>
	)
}

export default Description