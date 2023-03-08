import Link from "next/link"
import Image from "next/image"
import localFont from "@next/font/local"

const gskPrecisionLight = localFont({ src: '../../styles/fonts/gskprecision-light.woff2' })

const Footer = () => {
	return (
		<footer className="bg-gsk-dark">
			<div className="flex flex-col mx-auto max-w-7xl gap-y-4 py-12 px-6 md:flex md:items-start md:justify-between lg:px-8">
				<div className="flex flex-col md:flex-row justify-center gap-x-0 md:gap-x-6 gap-y-4 md:gap-y-0 items-center text-center text-left">
					<Image
						className="block h-8 w-auto"
						src="/gsk-logo.svg"
						alt="GSK"
						width={100}
						height={70}
					/>
					<div className={`${gskPrecisionLight} flex flex-col md:flex-row gap-x-0 md:gap-x-6`}>
						<Link href={`#`} className="text-white hover:text-gray-500 font-light">
							Referencias
						</Link>
						<Link href={`#`} className="text-white hover:text-gray-500 font-light">
							Políticas de privacidad
						</Link>
						<Link href={`#`} className="text-white hover:text-gray-500 font-light">
							Términos de uso
						</Link>
					</div>
				</div>
				<div className="mt-8 md:order-1 md:mt-0">
					<p className="text-center text-xs leading-5 text-gray-500">
						&copy; 2001-2023 GSK plc. All rights reserved. <span className="block md:inline">Trade marks are owned by or licensed to the GSK group of companies.</span>
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer