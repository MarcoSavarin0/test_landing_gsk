import parse from "html-react-parser"

interface Header3 {
	title: string
}

const H3 = ({title}: Header3) => {
	return (
		<h3 className="text-lg md:text-xl xl:text-2xl uppercase">{parse(title)}</h3>
	)
}

export default H3