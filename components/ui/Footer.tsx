import Link from "next/link"
import Image from "next/image"
import localFont from "@next/font/local"

const gskPrecisionLight = localFont({ src: '../../styles/fonts/gskprecision-light.woff2' })

const Footer = () => {
	return (
		<footer className="bg-gsk-dark">
			<div className="flex flex-col mx-auto max-w-7xl gap-y-4 py-12 px-6 md:flex md:items-start md:justify-between lg:px-8">
				<div className="w-full flex flex-col md:flex-row justify-between">

					<div className={`flex flex-col md:flex-row gap-x-0 md:gap-x-6 gap-y-4 md:gap-y-0 items-center text-center md:text-left`}>
						<Image
							className="block h-8 w-auto"
							src="/gsk-logo.svg"
							alt="GSK"
							width={100}
							height={70}
						/>
						<div className={`${gskPrecisionLight} flex flex-col md:flex-row gap-x-0 md:gap-x-4 lg:gap-x-6 text-base md:text-sm`}>
							<Link href={`/referencias`} className="text-white hover:text-gsk-orange transition-colors duration-200 ease-out font-light">
								Referencias
							</Link>
							<Link href="https://privacy.gsk.com/es-ar/privacy-notice/" target="_blank" className="text-white hover:text-gsk-orange transition-colors duration-200 ease-out font-light">
								Políticas de Cookies
							</Link>
							<Link href="https://privacy.gsk.com/es-ar/privacy-notice/general/general-full-text/" target="_blank" className="text-white hover:text-gsk-orange transition-colors duration-200 ease-out font-light">
								Políticas de privacidad
							</Link>
							<Link href="https://terms.gsk.com/es-ar/pharmaceuticals/default/" target="_blank" className="text-white hover:text-gsk-orange transition-colors duration-200 ease-out font-light">
								Términos y condiciones
							</Link>
						</div>
					</div>

					<div className="flex flex-row mt-3 md:mt-0 gap-x-3 md:gap-x-2 items-center justify-center">
						<Link href={`https://www.facebook.com/Hablemos-de-Zoster-102244729434697`} target="_blank" className="text-white hover:text-gsk-orange transition-colors duration-200 ease-out font-light">
							<span className="sr-only">Facebook</span>
							<svg fill="currentColor" viewBox="0 0 24 24" className="h-9 md:h-7 w-9 md:w-7" aria-hidden="true">
								<path
									fillRule="evenodd"
									d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
									clipRule="evenodd"
								/>
							</svg>
						</Link>
						<Link href={`https://www.instagram.com/hablemosdezoster/`} target="_blank" className="text-white hover:text-gsk-orange transition-colors duration-200 ease-out font-light">
							<span className="sr-only">Instagram</span>
							<svg fill="currentColor" viewBox="0 0 24 24" className="h-9 md:h-7 w-9 md:w-7" aria-hidden="true">
								<path
									fillRule="evenodd"
									d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
									clipRule="evenodd"
								/>
							</svg>
						</Link>
						<Link href={`https://www.instagram.com/hablemosdezoster/`} target="_blank" className="text-white hover:text-gsk-orange transition-colors duration-200 ease-out font-light">
							<span className="sr-only">Youtube</span>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-9 md:h-7 w-9 md:w-7" aria-hidden="true">
								<path
									fill-rule="evenodd"
									d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-3.5 15.23l8-5.143-8-5.143v10.286z"
									clip-rule="evenodd"
								/>
							</svg>


						</Link>
					</div>
				</div>

				<div className="mt-8 md:mt-0">
					<p className="text-center md:text-left text-xs leading-5 text-gray-500">
						NP-AR-HZU-WCNT-230002- Abril 2023
						<span className="block">Para mayor información consulte a su médico.</span>
						<span className="block">GSK Biopharma Argentina S.A. Av del Libertador 7202, Piso 4, CABA, Buenos Aires, Argentina.</span>
						<span className="block">Para consultas sobre nuestros productos, consultas de calidad o reporte de eventos adversos puede comunicarse al 0800 220 4752.</span>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer