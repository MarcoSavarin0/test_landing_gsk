import { NextSeo } from "next-seo"

import H2 from "@/components/ui/H2"
import Description from "@/components/ui/Description"
import PostComponent from '@/components/blog/Post'
import Banner from "@/components/home/Banner"

interface Post {
	id: number
	title: string
	date: string
}

const posts: Post[] = [
	{
		id: 1,
		title: "Título de la nota 1",
		date: "01/05/2023"
	},
	{
		id: 2,
		title: "Título de la nota 2",
		date: "01/05/2023"
	},
	{
		id: 3,
		title: "Título de la nota 3",
		date: "01/05/2023"
	},
	{
		id: 4,
		title: "Título de la nota 1",
		date: "01/05/2023"
	},
	{
		id: 5,
		title: "Título de la nota 2",
		date: "01/05/2023"
	},
	{
		id: 6,
		title: "Título de la nota 3",
		date: "01/05/2023"
	},
	{
		id: 7,
		title: "Título de la nota 2",
		date: "01/05/2023"
	},
	{
		id: 8,
		title: "Título de la nota 3",
		date: "01/05/2023"
	},
]

const Blog = () => {
	return (
		<>
			<NextSeo
				title="Blog de Salud | Hablemos de Zoster"
				description="El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento."
				canonical={process.env.NEXT_PUBLIC_SITE_URL}
				openGraph={{
					url: process.env.NEXT_PUBLIC_SITE_URL,
					title: 'Blog de Salud | Hablemos de Zoster',
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
				<section className="py-10 space-y-10">
					<div className="space-y-3 px-4 text-center">
						<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Blog</h1>
						<H2 title={`Lorem ipsum dolor sit amet?`}/>
						<Description title={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}/>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 px-10">
						{posts.map(({id, title, date}: Post) => (
							<PostComponent key={id} id={id} title={title} date={date}/>
						))}
					</div>

				</section>
				<Banner/>
			</>
		</>
	)
}

export default Blog