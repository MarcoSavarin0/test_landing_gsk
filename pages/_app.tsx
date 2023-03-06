import type {AppProps} from 'next/app'
import { DefaultSeo } from 'next-seo'

import localFont from '@next/font/local'
import Layout from "@/components/layout"

import '@/styles/globals.css'

const gskPrecision = localFont({ src: [
	{
		path: '../styles/fonts/gskprecision-bold.woff2',
		weight: '700',
		style: 'normal'
	},
	{
		path: '../styles/fonts/gskprecision-bolditalic.woff2',
		weight: '700',
		style: 'italic'
	},
	{
		path: '../styles/fonts/gskprecision-regular.woff2',
		weight: '400',
		style: 'normal'
	},
	{
		path: '../styles/fonts/gskprecision-regularitalic.woff2',
		weight: '400',
		style: 'normal'
	},
	{
		path: '../styles/fonts/gskprecision-light.woff2',
		weight: '200',
		style: 'normal'
	},
	{
		path: '../styles/fonts/gskprecision-lightitalic.woff2',
		weight: '200',
		style: 'italic'
	},
	{
		path: '../styles/fonts/gskprecision-thin.woff2',
		weight: '100',
		style: 'normal'
	},
	{
		path: '../styles/fonts/gskprecision-thinitalic.woff2',
		weight: '100',
		style: 'italic'
	}
] })

function MyApp({Component, pageProps}: AppProps) {

	return (
		<>
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'es_AR',
					url: process.env.NEXT_PUBLIC_SITE_URL,
					siteName: 'Frontend Starter',
				}}
				additionalMetaTags={[{
					name: 'viewport',
					content: 'initial-scale=1.0, maximum-scale=1.0, width=device-width'
				}]}
			/>

			<Layout className={gskPrecision.className}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp