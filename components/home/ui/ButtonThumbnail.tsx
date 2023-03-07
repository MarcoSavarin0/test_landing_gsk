interface ButtonThumbnail {
	title: string
	image: string
}

const ButtonThumbnail = ({title, image}: ButtonThumbnail) => {
	return (
		<button>
			{image}
			<h3>{title}</h3>
		</button>
	)
}

export default ButtonThumbnail