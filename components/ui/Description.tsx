import parse from "html-react-parser"

interface Paragraph {
	title: string
	color?: string
}

const Description = ({title, color}: Paragraph) => {
	return (
		<p className={`text-lg md:text-xl ${color}`}>{parse(title)}</p>
	)
}

export default Description