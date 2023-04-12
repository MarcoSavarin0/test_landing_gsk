import { NextSeo } from "next-seo"

import Blog from "@/components/home/Blog"
import Banner from "@/components/home/Banner"
import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"
import About from "@/components/acercade/About"

const AcercaDe = () => {
	return (
		<>
			<NextSeo
				title="¿Qué es el Herpes Zoster (culebrilla)? | Hablemos de Zóster"
				description="El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento."
				canonical={process.env.NEXT_PUBLIC_SITE_URL}
				openGraph={{
					url: process.env.NEXT_PUBLIC_SITE_URL,
					title: '¿Qué es el Herpes Zoster (culebrilla)? | Hablemos de Zóster',
					description: 'El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento.',
					images: [
						{
							url: '/og.webp',
							width: 1200,
							height: 627,
							alt: 'Herpes Zóster',
							type: 'image/jpeg',
						}
					],
					siteName: 'Hablemos de Zóster | Campaña de concientización y prevención',
				}}
			/>

			<>
				<section>
					<div className="space-y-3 px-4 text-center bg-gsk-dark pt-10 pb-36 shadow-xl">
						<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Herpes Zóster</h1>
						<H2 title={`¿QUÉ TENÉS QUE SABER?`}/>
						<Description title={`Conocé toda la información que necesitás saber sobre el Herpes Zóster.`} color={`text-white`}/>
					</div>

					<article className="w-11/12 md:w-10/12 mx-auto about px-10 space-y-14 bg-white rounded-xl">
						<div className="-mt-24 pt-8 space-y-6">
							<About/>
						</div>
					</article>

				</section>
				<hr className="w-6/12 border-b border-gsk-orange m-auto my-10"/>
				<Blog/>
				<Banner/>
			</>
		</>
	)
}

export default AcercaDe
