import { NextSeo } from "next-seo"
// import useModal from "@/store/store"

// import Modal from '@/components/ui/Modal'
import Hero from "@/components/home/Hero"
import Faq from "@/components/home/Faq"
import Who from "@/components/home/Who"
import Testimonial from "@/components/home/Testimonial"
import Complication from "@/components/home/Complication"
import Blog from "@/components/home/Blog"
import Banner from "@/components/home/Banner"

const Home = () => {
	// const [setVisibility] = useModal((state) => [state.setVisibility])

	/* const openModalHandler = (): void => {
		setVisibility()
	} */

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
							alt: 'Alt Image',
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

			{/* <Modal>
				<h1>Title</h1>
			</Modal> */}
		</>
	)
}

export default Home
