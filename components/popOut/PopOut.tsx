"use client"

import { useState, useEffect } from "react"

const PopOut: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [response, setResponse] = useState<string>("")
	const MODAL_INTERVAL_DAYS = 7
	const SCROLL_THRESHOLD = 0.7

	useEffect(() => {
		const lastShown = localStorage.getItem("lastModalShown")
		const now = new Date()
  
		if (lastShown) {
			const lastShownDate = new Date(lastShown)
			const daysSinceLastShown =
          Math.floor((now.getTime() - lastShownDate.getTime()) / (1000 * 60 * 60 * 24))
  
			if (daysSinceLastShown < MODAL_INTERVAL_DAYS) {
				return
			}
		}
  
		const handleScroll = (): void => {
			const scrollPosition = window.scrollY + window.innerHeight
			const pageHeight = document.documentElement.scrollHeight
  
			if (scrollPosition / pageHeight >= SCROLL_THRESHOLD) {
				setIsOpen(true)
				window.removeEventListener("scroll", handleScroll)
			}
		}
  
		window.addEventListener("scroll", handleScroll)
  
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])
  
	const handleClose = (response : string): void => {
		setResponse(response)
		setIsOpen(false)
		localStorage.setItem("lastModalShown", new Date().toISOString())
	}
	return (
		<>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
					<div className="relative p-9 w-full max-w-lg max-h-full bg-white rounded-lg shadow dark:bg-gray-700">
						<div className="p-4 md:p-5 text-center">
							<h3 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
                            Después de leer esta información,
							</h3>
							<h2 className="text-xl">¿vas a consultarle a tu médico acerca del Herpes Zóster?
							</h2>
							<div className="flex justify-center gap-4 mt-6">
								<button
									onClick={() => handleClose("si")}
									className="text-base text-center text-white hover:text-gsk-orange  bg-gsk-orange hover:bg-white border-2 border-gsk-orange transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold w-1/2"
								>
                Sí
								</button>
								<button
									onClick={() => handleClose("no")}
									className="text-base text-center text-white hover:text-gsk-orange  bg-gsk-orange hover:bg-white border-2 border-gsk-orange transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold w-1/2"
								>
                No
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
			{
				response == "si" && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
						<div className="relative p-9 w-full max-w-lg max-h-full bg-white rounded-lg shadow ">
							<div className="p-4 md:p-5 text-center">
								<h3 className="mb-5 text-base font-normal text-black  ">
                                ¡Gracias por tu respuesta!
								</h3>
								<h2 className="text-base text-gray-500">Hablar con el médico es un gran paso para proteger tu salud.
								</h2>
								<div className="w-full mt-5">
									<button
										onClick={() => handleClose("")}
										className="text-base text-center text-white hover:text-gsk-orange  bg-gsk-orange hover:bg-white border-2 border-gsk-orange transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold"
									>
                                        Cerrar
									</button>
								</div>
							</div>
						</div>
					</div>
				)
			}
			{
				response == "no" && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
						<div className="relative p-9 w-full max-w-lg max-h-full bg-white rounded-lg shadow ">
							<div className="p-4 md:p-5 text-center">
								<h3 className="mb-5 text-base font-normal text-black  ">
                                    ¡Gracias por tu respuesta!
								</h3>
								<h2 className="text-base text-gray-500">Haber llegado hasta acá es el primer paso. Siempre podés consultar con el médico cuando estés listo/a.
								</h2>
								<div className="w-full mt-5">
									<button
										onClick={() => handleClose("")}
										className="text-base text-center text-white hover:text-gsk-orange  bg-gsk-orange hover:bg-white border-2 border-gsk-orange transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold"
									>
                                        Cerrar
									</button>
								</div>
							</div>
						</div>
					</div>
				)
			}
		</>
	)
}

export default PopOut
