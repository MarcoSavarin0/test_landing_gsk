import parse from "html-react-parser"

interface Paragraph {
	title: string
}

const Description = ({title}: Paragraph) => {
	return (
		<div className="text-lg md:text-xl">{parse(title)}</div>
	)
}

export default Description