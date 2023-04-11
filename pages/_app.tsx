import type {AppProps} from 'next/app'
import { DefaultSeo } from 'next-seo'

import localFont from '@next/font/local'
import Layout from "@/components/layout"

import '@/styles/globals.css'

const gskPrecision = localFont({ src: '../styles/fonts/gskprecision-regular.woff2' })

function MyApp({Component, pageProps}: AppProps) {

	return (
		<>
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'es_AR',
					url: process.env.NEXT_PUBLIC_SITE_URL,
					siteName: 'Hablemos de Zóster | Campaña de concientización y prevención',
				}}
				additionalMetaTags={[{
					name: 'viewport',
					content: 'initial-scale=1.0, maximum-scale=1.0, width=device-width'
				},
				{
					name: 'google-site-verification',
					content: '2eP-aPKDORW2CTsK4yN_Wy3kdTggHP54JR8j81X81o8'
				}]}
			/>

			<Layout className={gskPrecision.className}>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp