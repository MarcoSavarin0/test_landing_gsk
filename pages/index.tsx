import {useEffect} from "react"
import { NextSeo } from "next-seo"
import {shallow} from "zustand/shallow"
import parse from "html-react-parser"
import {scroller} from "react-scroll"
import {useRouter} from "next/router"

import useModal from "@/store/store"
import Modal from '@/components/ui/Modal'
import Hero from "@/components/home/Hero"
import Sintomas from "@/components/home/Sintomas"
import Faq from "@/components/home/Faq"
import Who from "@/components/home/Who"
import Complication from "@/components/home/Complication"
import Testimonial from "@/components/home/Testimonial"
import Blog from "@/components/home/Blog"
import Banner from "@/components/home/Banner"
import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"
import Spacer from "@/components/ui/Spacer"
import Share from "@/components/ui/Share"

const Home = () => {
	const { title, body } = useModal((state) => ({title: state.title, body: state.body,}), shallow)

	const router = useRouter()
	const hash = router.asPath.split("#")[1]

	useEffect(() => (
		scroller.scrollTo(hash != undefined ? hash : "nav", {
			duration: 1000,
			delay: 300,
			smooth: true,
			offset: -25,
		})
	), [router.asPath])

	return (
		<>
			<NextSeo
				title="Hablemos de Zóster | Campaña de concientización y prevención"
				description="¿Qué es el Herpes Zóster? ¿Cuál es su origen? ¿Cuáles son sus síntomas? Conocé más sobre esta enfermedad e informate para cuidarte a vos y a quienes te rodean."
				canonical={process.env.NEXT_PUBLIC_SITE_URL}
				openGraph={{
					url: process.env.NEXT_PUBLIC_SITE_URL,
					// title: 'Hablemos de Zóster | Campaña de concientización y prevención',
					title: 'Herpes Zoster | Todo lo que Necesitás Saber | 2024',
					// description: '¿Qué es el Herpes Zóster? ¿Cuál es su origen? ¿Cuáles son sus síntomas? Conocé más sobre esta enfermedad e informate para cuidarte a vos y a quienes te rodean.',
					description: 'No sabes que es el Herpes Zoster? Te contamos todo lo que necesitas saber sobre el virus de la "culebrilla" y cómo prevenirla.',
					images: [
						{
							url: `https://gsk-hdz.b-cdn.net/og.jpg`,
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
				<Hero/>
				<Sintomas/>
				<Spacer/>
				<Faq/>
				<Spacer/>
				<Who/>
				<Spacer/>
				<Complication/>
				<Spacer/>
				<Testimonial/>
				<Blog/>
				<Banner/>

				<div className="flex flex-col justify-center items-center py-10 gap-y-4">
					<Description title={`Cuidá la salud de quienes te rodean`}/>
					<div>
						<Share cta={`Compartí esta información`} url={`${process.env.NEXT_PUBLIC_SITE_URL}`} quote={"Hablemos de Zoster"} hashtag={"#hablemosdezoster"}/>
					</div>
				</div>
			</>

			<Modal>
				<H2 title={parse(title) as string}/>
				<Description title={body} className="text-justify"/>
			</Modal>
		</>
	)
}

export default Home