interface CardIcon {
	title: string
	image: string
}

const CardIcon = ({title, image}: CardIcon) => {
	return (
		<article>
			{image}
			<h3>{title}</h3>
		</article>
	)
}

export default CardIcon