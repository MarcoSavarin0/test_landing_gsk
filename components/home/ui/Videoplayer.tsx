import ReactPlayer from "react-player"

interface VideoParam {
	id: string
}

const Videoplayer = ({id}: VideoParam) => {
	return (
		<ReactPlayer width="100%" height="100%" className="w-full aspect-video" url={`https://www.youtube.com/embed/${id}`} />
	)
}

export default Videoplayer