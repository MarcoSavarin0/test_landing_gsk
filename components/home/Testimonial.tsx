import {useState, useEffect, useRef} from "react"
import dynamic from 'next/dynamic'
import { Element } from 'react-scroll'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

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
		data: "Médico Neurólogo",
		id: "0rBIlJ7FP04",
	},
	{
		name: "Dr. Luis Cicco",
		img: "",
		data: "Médico Cardiólogo",
		id: "ApvlA_W0ZkY",
	},
	{
		name: "Dra. Pierina Bachetti",
		img: "",
		data: "Especialista en tratamientos del dolor",
		id: "1MLay6lg-1U",
	},
]

const pacientes: VideoTestimonio[] = [
	{
		name: "Norma Rut Frost",
		img: "normarutfrost",
		data: "",
		id: "QjgeRBhgaRw",
	},
	{
		name: "Máximo Jorge Fioravanti",
		img: "maximojorgefioravanti",
		data: "",
		id: "yBuRSLW1AhQ-FE",
	},
	{
		name: "Gastón Domingues Caetano",
		img: "gastondominguescaetano",
		data: "",
		id: "HEbhzJtwIMw",
	},
	{
		name: "Eduardo Adolfo González",
		img: "eduardoadolfogonzalez",
		data: "",
		id: "Gt29lKyD1TI",
	},
]

const Testimonial = () => {
	const [playerId, setPlayerId] = useState("dIWt8S179ng")
	const [activePlayer, setActivePlayer] = useState(0)
	const [pacientesState, setPacientesState] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const [visibleMedicos, setVisibleMedicos] = useState(medicos.slice(0, 4))
	console.log(activePlayer)
	const handleNext = () => {
		const container = containerRef.current
		if (container && container.children.length > 0) {
			const firstItem = container.children[0] as HTMLElement
			const itemWidth = firstItem.offsetWidth
			const gap = 24
			container.scrollBy({
				left: itemWidth + gap,
				behavior: 'smooth'
			})
			setVisibleMedicos(medicos.slice(4, 6))
		}
	}

	const handlePrev = () => {
		const container = containerRef.current
		if (container && container.children.length > 0) {
			const firstItem = container.children[0] as HTMLElement
			const itemWidth = firstItem.offsetWidth
			const gap = 24
			container.scrollBy({
				left: -(itemWidth + gap),
				behavior: 'smooth'
			})
			setVisibleMedicos(medicos.slice(0, 4))
		}
	}
	const selectVideo = (playerId: string, indexVideo: number) => {
		if(playerId == visibleMedicos[indexVideo].id){
			setActivePlayer(indexVideo)
		}
		setPlayerId(playerId)
	}

	const switchPlayer = (playerId: string, isPaciente: boolean) => {
		setPlayerId(playerId)
		setPacientesState(isPaciente)

	}

	useEffect(() => {
		setPlayerId(playerId)
	}, [playerId])

	return (
		<section className="space-y-10 bg-gsk-gray pt-6 pb-10 drop-shadow-[0_0_15px_rgba(0,0,0,0.10)] mb-10">
			<Element className="text-center space-y-3 px-4" name="enprimerapersona">
				<H2 title={`Herpes Zóster en primera persona`}/>
			</Element>

			<div className="flex flex-col px-8 md:px-24 lg:px-56 space-y-6 justify-center items-center">
				<div className="flex flex-col sm:flex-row">
					<button className={`rounded-l-none sm:rounded-l-lg text-center text-sm lg:text-lg px-10 py-2 ${pacientesState ? "bg-slate-300 text-gsk-dark" : "bg-gsk-orange text-white"}`} onClick={() => switchPlayer("dIWt8S179ng", false)}>Entrevistas a Médicos</button>
					<button className={`rounded-r-none sm:rounded-r-lg text-center text-sm lg:text-lg px-10 py-2 ${!pacientesState ? "bg-slate-300 text-gsk-dark" : "bg-gsk-orange text-white"}`} onClick={() => switchPlayer("QjgeRBhgaRw", true)}>Testimoniales de pacientes</button>
				</div>

				<VideoplayerSSR id={playerId}/>

				<div className="w-full h-auto relative ">
					<div className="relative">
						<div ref={containerRef} className={`${pacientesState ? "hidden" : "visible"} grid grid-cols-none grid-flow-col overflow-x-scroll md:overflow-x-auto md:grid-cols-4 w-full gap-6 justify-start md:justify-between text-center px-0 lg:px-2`}>
							{visibleMedicos.map((video, index) => (
								<button key={index} onClick={() => selectVideo(video.id, index)} className="w-full h-auto">
									<ButtonThumbnail name={video.name} img={video.img} alt={video.name} data={video.data} active={video.id == playerId} />
								</button>
							))}
						</div>
						{medicos.length > 4 && !pacientesState && (
							<>
								<button onClick={handlePrev} className="absolute -left-10 z-50 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"><FaArrowLeft />
								</button>
								<button onClick={handleNext} className="absolute -right-10 z-50 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"><FaArrowRight />
								</button>
							</>
						)}
					</div>

					<div className={`${pacientesState ? "visible" : "hidden"} grid grid-cols-none grid-flow-col overflow-x-scroll md:overflow-x-auto md:grid-cols-4 w-full gap-6 justify-start md:justify-between text-center px-0 lg:px-2`}>
						{pacientes.map((video, index) => (
							<button key={index} onClick={() => selectVideo(video.id, index)} className="w-full h-auto">
								<ButtonThumbnail name={video.name} img={video.img} alt={video.name} active={video.id == playerId} data={video.data}/>
							</button>
						))}
					</div>
					<div className="block md:hidden absolute w-[1px] h-full top-0 right-[-2px] shadow-[-1px_0_4px_2px_rgba(0,0,0,0.5)] z-10 bg-transparent"/>
				</div>
			</div>
		</section>
	)
}

export default Testimonial