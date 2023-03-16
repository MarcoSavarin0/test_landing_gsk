import { NextSeo } from "next-seo"
import {shallow} from "zustand/shallow"
import parse from "html-react-parser"

import useModal from "@/store/store"
import Modal from '@/components/ui/Modal'
import Hero from "@/components/home/Hero"
import Faq from "@/components/home/Faq"
import Who from "@/components/home/Who"
import Testimonial from "@/components/home/Testimonial"
import Complication from "@/components/home/Complication"
import Blog from "@/components/home/Blog"
import Banner from "@/components/home/Banner"
import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"

const Home = () => {
	const { title, body } = useModal((state) => ({title: state.title, body: state.body,}), shallow)

	return (
		<>
			<NextSeo
				title="Hablemos de Zóster | Campaña de concientización y prevensión"
				description="¿Qué es el Herpes Zóster? ¿Cuál es su origen? ¿Cuáles son sus síntomas? Informándote sobre este virus, ayudás a prevenir su propagación."
				canonical={process.env.NEXT_PUBLIC_SITE_URL}
				openGraph={{
					url: process.env.NEXT_PUBLIC_SITE_URL,
					title: 'Hablemos de Zóster | Campaña de concientización y prevensión',
					description: '¿Qué es el Herpes Zóster? ¿Cuál es su origen? ¿Cuáles son sus síntomas? Informándote sobre este virus, ayudás a prevenir su propagación.',
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
				<Hero/>
				<Faq/>
				<hr className="w-6/12 border-b border-gsk-orange m-auto my-10"/>
				<Who/>
				<hr className="w-6/12 border-b border-gsk-orange m-auto my-10"/>
				<Testimonial/>
				<hr className="w-6/12 border-b border-gsk-orange m-auto my-10"/>
				<Complication/>
				<hr className="w-6/12 border-b border-gsk-orange m-auto my-10"/>
				<Blog/>
				<Banner/>
			</>

			<Modal>
				<H2 title={parse(title) as string}/>
				<Description title={body}/>
			</Modal>
		</>
	)
}

export default Home
