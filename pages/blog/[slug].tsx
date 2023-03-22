import Image from 'next/image'
import { NextSeo } from "next-seo"

import PostComponent from '@/components/blog/Post'
import Banner from "@/components/home/Banner"
import CategoryButton from "@/components/blog/CategoryButton"

interface Post {
	id: number
	title: string
	date: string
}

interface Category {
	id: number
	name: string
	slug: string
}

const releated: Post[] = [
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
	}
]

const categories: Category[] = [
	{
		id: 1,
		name: "Ipsum",
		slug: "ipsum"
	},
	{
		id: 2,
		name: "Aliqua",
		slug: "aliqua"
	},
	{
		id: 3,
		name: "Consectetur",
		slug: "consectetur"
	},
	{
		id: 4,
		name: "Voluptatem",
		slug: "voluptatem"
	}
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
				<div className="space-y-8 pb-10">
					<div className="flex w-full h-96 overflow-hidden">
						<Image priority src={`/assets/images/0.jpg`} className="w-full h-auto object-cover" alt="Post" width={100} height={70}/>
					</div>

					<div className="flex flex-col lg:flex-row px-12 gap-x-14">
						<article className="flex flex-col flex-1 gap-y-4">
							<header className="space-y-1">
								<span className="text-xs">01/04/2023 · 8 MINUTOS DE LECTURA</span>
								<h1 className="text-gsk-orange font-bold leading-none text-4xl sm:text-5xl">Título de la nota</h1>
								<h2 className="text-gsk-orange text-xl">Ut enim ad minim veniam, quis nostrud exercitation elit.</h2>
							</header>

							<article className="space-y-4">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								<p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla.</p>
							</article>

							<div className="space-y-2 mt-10">
								<h3 className="text-lg md:text-xl text-gsk-orange">Relacionados</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
									{releated.map(({id, title, date}: Post) => (
										<PostComponent key={id} id={id} title={title} date={date}/>
									))}
								</div>
							</div>
						</article>
						<aside className="md:w-2/12 mt-10 border-l-0 lg:border-l pl-0 lg:pl-6 h-fit pb-4 space-y-2">
							<h3 className="text-lg md:text-xl text-gsk-orange">Categorías</h3>
							<ul className="flex flex-row lg:flex-col gap-4 flex-wrap">
								{categories.map(({id, name, slug}: Category) => (
									<li key={id}>
										<CategoryButton title={name} slug={slug}/>
									</li>
								))}
							</ul>
						</aside>
					</div>
				</div>
				<Banner/>
			</>
		</>
	)
}

export default Blog