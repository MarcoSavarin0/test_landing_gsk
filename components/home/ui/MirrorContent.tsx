interface Complication {
	title: string
	body: string
	image: string
	index: number
}

const MirrorContent = ({title, image, index, body}: Complication) => {
	return (
		<article className="flex justify-between">
			<div className={index % 2 ? '' : 'order-last'}>
				{image}
			</div>
			<div>
				<h3 className="text-gsk-orange text-xl">{title}</h3>
				<p>{body}</p>
			</div>
		</article>
	)
}

export default MirrorContent