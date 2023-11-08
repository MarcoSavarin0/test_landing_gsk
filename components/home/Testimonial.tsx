import {useState, useEffect} from "react"
import dynamic from 'next/dynamic'
import H2 from "@/components/ui/H2"
import ButtonThumbnail from "@/components/home/ui/ButtonThumbnail"

const VideoplayerSSR = dynamic(() => import('../home/ui/Videoplayer'), { ssr: false })

interface VideoTestimonio {
	name: string
	data: string
	active: boolean
	id: string
}

const medicos: VideoTestimonio[] = [
	{
		name: "Dra. Elena Obieta",
		data: "Médica Infectóloga",
		active: true,
		id: "dIWt8S179ng",
	},
	{
		name: "Dra. Florencia Cahn",
		data: "Médica Infectóloga",
		active: false,
		id: "vBruLfIo-FE",
	},
	{
		name: "Dr. Lucio Criado",
		data: "Médico Clínico",
		active: false,
		id: "vgK0G2UWif4",
	},
	{
		name: "Dr. Roberto Rey",
		data: "Neurólogo",
		active: false,
		id: "0rBIlJ7FP04",
	},

]

const Testimonial = () => {
	const [playerId, setPlayerId] = useState("dIWt8S179ng")

	const selectVideo = (playerId: string, indexVideo: number) => {
		medicos[indexVideo].active = true
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

			<div className="flex flex-col px-12 space-y-6 justify-center items-center">
				{/* <button>|</button> */}
				<VideoplayerSSR id={playerId}/>

				<div className="grid grid-cols-2 md:grid-cols-4 w-full gap-6 justify-between text-center px-2">
					{medicos.map((video, index) => (
						<button key={index} onClick={() => selectVideo(video.id, index)}>
							<ButtonThumbnail name={video.name} data={video.data} active={video.active}/>
						</button>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonial