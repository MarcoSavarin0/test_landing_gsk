import { NextSeo } from "next-seo"

import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"
import Banner from "@/components/home/Banner"

const Blog = () => {
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
							url: '/og.jpg',
							width: 1200,
							height: 627,
							alt: 'Herpes Zóster',
							type: 'image/jpeg',
						}
					],
					siteName: 'Hablemos de Zóster | Campaña de concientización y prevensión',
				}}
			/>

			<>
				<section className="py-10">
					<div className="space-y-3 px-4 text-center">
						<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Blog</h1>
						<H2 title={`Lorem ipsum dolor sit amet?`}/>
						<Description title={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}/>
					</div>
				</section>
				<Banner/>
			</>
		</>
	)
}

export default Blog
