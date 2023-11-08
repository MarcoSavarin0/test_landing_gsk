import dynamic from 'next/dynamic'
import H2 from "@/components/ui/H2"
import ButtonThumbnail from "@/components/home/ui/ButtonThumbnail"

const VideoplayerSSR = dynamic(() => import('../home/ui/Videoplayer'), { ssr: false })

interface VideoTestimonio {
	name: string
	data: string
	active: boolean
	video: string
}

const medicos: VideoTestimonio[] = [
	{
		name: "Dra. Elena Obieta",
		data: "Médica Infectóloga",
		active: true,
		video: "dIWt8S179ng",
	},
	{
		name: "Dra. Florencia Cahn",
		data: "Médica Infectóloga",
		active: false,
		video: "vBruLfIo-FE",
	},
	{
		name: "Dr. Lucio Criado",
		data: "Médico Clínico",
		active: false,
		video: "vgK0G2UWif4",
	},
	{
		name: "Dr. Roberto Rey",
		data: "Neurólogo",
		active: false,
		video: "0rBIlJ7FP04",
	},

]

const Testimonial = () => {
	return (
		<section className="space-y-10 bg-gsk-gray pt-6 pb-10 drop-shadow-[0_0_15px_rgba(0,0,0,0.10)] mb-10">
			<div className="text-center space-y-3 px-4">
				<H2 title={`Herpes Zóster en primera persona`}/>
			</div>

			<div className="flex flex-col px-12 space-y-6 justify-center items-center">
				{/* <button>|</button> */}
				<VideoplayerSSR id={`dIWt8S179ng`}/>

				<div className="grid grid-cols-2 md:grid-cols-4 w-full gap-6 justify-between text-center px-2">
					{medicos.map((video, index) => (
						<ButtonThumbnail key={index} name={video.name} data={video.data} active={video.active}/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonial