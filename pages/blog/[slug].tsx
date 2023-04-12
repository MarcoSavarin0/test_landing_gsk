import Image from 'next/image'
import { NextSeo } from "next-seo"
import Markdown from 'markdown-to-jsx'

// import PostComponent from '@/components/blog/Post'
import Banner from "@/components/home/Banner"
// import CategoryButton from "@/components/blog/CategoryButton"

import dynamic from "next/dynamic"
import {GetStaticPaths, GetStaticProps} from "next"
import parse from "html-react-parser"

/* interface Post {
	id: number
	title: string
	date: string
}

interface Category {
	id: number
	name: string
	slug: string
}

type PostContent = Post & Category

const postContent: PostContent = {
	id: 1,
	title: "Lorem ipsum dolor sit amet",
	name: "string",
	date: "01/04/2023",
	slug: "lorem-ipsum-dolor-sit-amet"
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
] */

/* const categories: Category[] = [
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
] */

const DynamicSpeechBlog = dynamic(() => import('@/components/blog/SpeechBlog'), {
	ssr: false,
})

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch(`${process.env.STRAPI_API_URL}/notas?populate=*&filters[slug][$in][0]=${context.params?.slug}`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	})
	const nota = await res.json()

	return {
		props: {
			nota
		},
		revalidate: 10,
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${process.env.STRAPI_API_URL}/notas?fields[0]=slug&sort[0]=publishedAt%3Adesc`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	})
	const slugs = await res.json()

	const paths = slugs.data.map((item: any) => ({
		params: {slug: item.attributes.slug},
	}))

	return {
		paths: paths,
		fallback: false,
	}
}

const Blog = ({nota}: any) => {
	const {title, body, image, metatitle, metadescription} = nota.data[0].attributes

	return (
		<>
			<NextSeo
				title={`${metatitle} | Blog | Hablemos de Zoster`}
				description={`${metadescription}`}
				canonical={process.env.NEXT_PUBLIC_SITE_URL}
				openGraph={{
					url: process.env.NEXT_PUBLIC_SITE_URL,
					title: `${metatitle} | Blog |Hablemos de Zoster`,
					description: `${metadescription}`,
					images: [
						{
							url: '/og.jpg',
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
				<div className="space-y-8 pb-10">
					<div className="flex w-full h-96 overflow-hidden">
						<Image priority src={`/assets/images/notas/${image}.webp`} className="w-full h-auto object-cover" alt="Post" width={100} height={70}/>
					</div>

					<div className="flex flex-col lg:flex-row px-12 gap-x-14">
						<article className="flex flex-col flex-1 gap-y-4">
							<header className="space-y-6">
								{/* <span className="text-xs">01/04/2023 · 8 MINUTOS DE LECTURA</span> */}

								<div className="space-y-1">
									<DynamicSpeechBlog text={parse(title) + " " + parse(body)}/>

									<h1 className="text-gsk-orange font-bold leading-none text-4xl sm:text-5xl">{title}</h1>
									{/* <h2 className="text-gsk-orange text-xl">Ut enim ad minim veniam, quis nostrud exercitation elit.</h2> */}
								</div>
							</header>

							<article>
								<Markdown className="markdown-body">{body}</Markdown>
							</article>

							{/* <div className="space-y-2 mt-10">
								<h3 className="text-lg md:text-xl text-gsk-orange">Relacionados</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
									{releated.map(({id, title, date}: Post) => (
										<PostComponent key={id} id={id} title={title} date={date}/>
									))}
								</div>
							</div> */}
						</article>
						{/* <aside className="md:w-2/12 mt-10 border-l-0 lg:border-l pl-0 lg:pl-6 h-fit pb-4 space-y-2">
							<h3 className="text-lg md:text-xl text-gsk-orange">Categorías</h3>
							<ul className="flex flex-row lg:flex-col gap-4 flex-nowrap lg:flex-wrap">
								{categories.map(({id, name, slug}: Category) => (
									<li key={id}>
										<CategoryButton title={name} slug={slug}/>
									</li>
								))}
							</ul>
						</aside> */}
					</div>
				</div>
				<Banner/>
			</>
		</>
	)
}

export default Blog