import { NextSeo } from "next-seo"

import Description from "@/components/ui/Description"
import PostComponent from '@/components/blog/Post'
import Banner from "@/components/home/Banner"
import {GetStaticPaths, GetStaticProps} from "next"

export const getStaticProps: GetStaticProps = async (context) => {
	const res = await fetch(`${process.env.STRAPI_API_URL}/notas?populate=*&filters[categoria][slug][$eq]=${context.params?.slug}`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	})
	const notas = await res.json()

	return {
		props: {
			notas
		},
		revalidate: 10,
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const res = await fetch(`${process.env.STRAPI_API_URL}/categories?populate=*`, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${process.env.STRAPI_API_TOKEN}`
		}
	})
	const categories = await res.json()

	const paths = categories.data.map((item: any) => ({
		params: {slug: item.attributes.slug},
	}))

	return {
		paths: paths,
		fallback: false,
	}
}

const Blog = ({notas}: any) => {
	return (
		<>
			<NextSeo
				title="Blog de Salud | Hablemos de Zoster"
				description="El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento."
				canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/blog`}
				openGraph={{
					url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
					title: 'Blog de Salud | Hablemos de Zoster',
					description: 'El Herpes Zóster es un virus muy común, pero que pocos lo conocen. Ingresá e informate sobre su origen, síntomas y tratamiento.',
					images: [
						{
							url: `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_PUBLIC_REGION}.amazonaws.com/meta/og.webp`,
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
				<section className="py-10 space-y-10">
					<div className="space-y-3 px-10 text-center">
						<h1 className={`text-gsk-orange font-bold leading-none uppercase text-4xl sm:text-5xl lg:text-6xl xl:text-7xl`}>Hablemos de Salud</h1>
						<Description title={`En este blog encontrarás información actualizada y consejos útiles para prevenir y tratar el Herpes Zóster.`}/>
						<Description title={`Además, abordaremos temas relevantes en el ámbito de la salud y compartiremos algunos conocimientos para contribuir a tu bienestar integral. ¡Navegá las notas y tomá acción en tu futuro!`}/>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-y-4 gap-x-4 px-10">
						{notas.data.map((item: any, index: number) => (
							<PostComponent key={index} image={item.attributes.image} title={item.attributes.title} slug={item.attributes.slug}/>
						))}
					</div>

				</section>
				<Banner/>
			</>
		</>
	)
}

export default Blog