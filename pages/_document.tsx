import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx)
	}

	render() {
		return (
			<Html lang="es">
				<Head>
					<link rel="shortcut icon" href="/favicon.png" />

					<Script id="google-tagmanager" strategy="afterInteractive">
						{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-WL5WP7P');
					`}
					</Script>
				</Head>
				<body className="antialiased">
					<Script id="google-tagmanager" strategy="afterInteractive">
						{`
						<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WL5WP7P" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
						`}
					</Script>

					<Main/>
					<NextScript/>
				</body>
			</Html>
		)
	}
}

export default MyDocument