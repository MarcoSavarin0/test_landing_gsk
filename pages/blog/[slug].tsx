import Image from 'next/image'
import { NextSeo } from "next-seo"
import Markdown from 'markdown-to-jsx'

import Banner from "@/components/home/Banner"
import CategoryButton from "@/components/blog/CategoryButton"

import dynamic from "next/dynamic"
import {GetStaticPaths, GetStaticProps} from "next"
import parse from "html-react-parser"
import Link from "next/link"
import Share from "@/components/ui/Share"

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
	const res = await fetch(`${process.env.STRAPI_API_URL}/notas?fields[0]=slug&sort[0]=publishedAt%3Adesc&pagination[pageSize]=26`, {
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

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str: string) =>
	typeof window === 'undefined'
		? Buffer.from(str).toString('base64')
		: window.btoa(str)

const Blog = ({nota}: any) => {
	const {title, body, image, metatitle, metadescription, slug, categoria, tags} = nota.data[0].attributes

	return (
		<>
			<NextSeo
				title={`${metatitle} | Blog | Hablemos de Zoster`}
				description={`${metadescription}`}
				canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`}
				openGraph={{
					url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`,
					title: `${metatitle} | Blog |Hablemos de Zoster`,
					description: `${metadescription}`,
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
				<div className="space-y-8 pb-10">
					<div className="flex w-full h-96 md:h-[25rem] lg:h-[34rem] xl:h-[42rem] overflow-hidden">
						<Image src={`https://gsk-hdz.b-cdn.net/notas/${image}.webp`}
							className="w-full h-auto object-cover" alt="Post" width={1920} height={1080}
							placeholder="blur"
							blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1920, 1080))}`}
							style={{
								maxWidth: '100%',
								height: 'auto'
							}}
						/>
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
								<Markdown
									options={{
										overrides: {
											a: ({ href, children }) => {
												return (
													<Link href={href}>
														{children}
													</Link>
												)
											},
										}
									}}
									className="markdown-body">{body}</Markdown>
							</article>

							{/* <div className="space-y-2 mt-10">
								<h3 className="text-lg md:text-xl text-gsk-orange">Relacionados</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
									{releated.map(({id, title, date}: Post) => (
										<PostComponent key={id} id={id} title={title} date={date}/>
									))}
								</div>
							</div> */}
							<div className="space-y-2 mt-2">
								<p>Cuidá la salud de quienes te rodean:</p>
								<Share cta={`Compartir en`} url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${slug}`} quote={title} hashtag={`#${categoria.data.attributes.slug.replaceAll('-', '')}`}/>
							</div>
						</article>
						<aside className="md:w-2/12 mt-10 border-l-0 lg:border-l pl-0 lg:pl-6 h-fit pb-4 space-y-8">
							<div className="space-y-2">
								<h3 className="text-lg md:text-xl text-gsk-orange">Categorías</h3>
								<ul className="flex flex-row lg:flex-col gap-4 flex-nowrap lg:flex-wrap">
									<li>
										<CategoryButton title={categoria.data.attributes.title} slug={categoria.data.attributes.slug} param={`categoria`}/>
									</li>
								</ul>
							</div>
							<div className="space-y-2">
								<h3 className="text-lg md:text-xl text-gsk-orange">Tags</h3>
								<ul className="flex flex-row lg:flex-col gap-4 flex-nowrap lg:flex-wrap">
									<li>
										<CategoryButton title={tags.data[0].attributes.tag} slug={tags.data[0].attributes.slug} param={`tags`}/>
									</li>
								</ul>
							</div>
						</aside>
					</div>
				</div>
				<Banner/>
			</>
		</>
	)
}

export default Blog