import {useState, useEffect} from "react"
import dynamic from 'next/dynamic'
import H2 from "@/components/ui/H2"
import ButtonThumbnail from "@/components/home/ui/ButtonThumbnail"

const VideoplayerSSR = dynamic(() => import('../home/ui/Videoplayer'), { ssr: false })

interface VideoTestimonio {
	name: string
	img: string
	data: string
	id: string
}

const medicos: VideoTestimonio[] = [
	{
		name: "Dra. Elena Obieta",
		img: "elenaobieta",
		data: "Médica Infectóloga",
		id: "dIWt8S179ng",
	},
	{
		name: "Dra. Florencia Cahn",
		img: "florenciacahn",
		data: "Médica Infectóloga",
		id: "vBruLfIo-FE",
	},
	{
		name: "Dr. Lucio Criado",
		img: "luciocriado",
		data: "Médico Clínico",
		id: "vgK0G2UWif4",
	},
	{
		name: "Dr. Roberto Rey",
		img: "robertorey",
		data: "Neurólogo",
		id: "0rBIlJ7FP04",
	},

]

const Testimonial = () => {
	const [playerId, setPlayerId] = useState("dIWt8S179ng")
	const [activePlayer, setActivePlayer] = useState(0)

	const selectVideo = (playerId: string, indexVideo: number) => {
		setActivePlayer(indexVideo)
		setPlayerId(playerId)
	}

	useEffect(() => {
		setPlayerId(playerId)
	}, [playerId])

	return (
		<section className="space-y-10 bg-gsk-gray pt-6 pb-10 drop-shadow-[0_0_15px_rgba(0,0,0,0.10)] mb-10">
			<div className="text-center space-y-3 px-4">
				<H2 title={`Herpes Zóster en primera persona`}/>
			</div>

			<div className="flex flex-col px-8 sm:px-12 space-y-6 justify-center items-center">
				{/* <button>|</button> */}
				<VideoplayerSSR id={playerId}/>

				<div className="grid grid-cols-2 md:grid-cols-4 w-full gap-6 justify-between text-center px-0 md:px-2">
					{medicos.map((video, index) => (
						<button key={index} onClick={() => selectVideo(video.id, index)}>
							<ButtonThumbnail name={video.name} img={video.img} alt={video.name} data={video.data} active={activePlayer == index}/>
						</button>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonial