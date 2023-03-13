import Image from "next/image"

const Banner = () => {
	return (
		<section className="relative bg-gsk-orange text-center py-14">
			<div className="absolute top-0 flex w-full justify-center">
				<Image src="/shape-gsk-white.svg" width={80} height={60} alt="" />
			</div>
			<h2 className="text-white text-xl md:text-3xl leading-relaxed uppercase font-bold px-6">CONSULTÁ CON TU MÉDICO O MÉDICA ACERCA DE LA PREVENCIÓN DEL HÉRPES ZÓSTER</h2>
		</section>
	)
}

export default Banner