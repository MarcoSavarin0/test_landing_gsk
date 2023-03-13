import parse from "html-react-parser"

interface Paragraph {
	title: string
}

const Description = ({title}: Paragraph) => {
	return (
		<p className="text-lg md:text-xl">{parse(title)}</p>
	)
}

export default Description