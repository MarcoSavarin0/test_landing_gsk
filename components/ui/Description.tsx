import parse from "html-react-parser"

interface Paragraph {
	title: string
	color?: string
}

const Description = ({title, color}: Paragraph) => {
	return (
		<div className={`text-lg md:text-xl ${color}`}>{parse(title)}</div>
	)
}

export default Description