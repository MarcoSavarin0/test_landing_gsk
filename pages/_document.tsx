import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
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
						{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KFZ874ZG');`}
					</Script>
				</Head>
				<body className="antialiased">
					<Script id="google-tagmanager" strategy="afterInteractive">
						{`
						<noscript><iframe title="gtm" src="https://www.googletagmanager.com/ns.html?id=GTM-KFZ874ZG" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
						`}
					</Script>
					{/* <!-- Tealium Universal Tag --> */}
					<Script id="tealium-tag" strategy="beforeInteractive">
						{`
					var utag_data={
						"page_type"     : "section",
						"site_section"  : "Campaña de concientización y prevención ",
						"page_name"     : "Hablemos de Zoster",
						"country_code"  : "AR",
						"currency_code" : "ARS"};
						`}
					</Script>
					<Script id="tealium-tag" strategy="beforeInteractive">
						{`
						  (function(a,b,c,d){
							a='https://tags.tiqcdn.com/utag/gsk/profile-rx-ar/prod/utag.js';
							b=document;c='script';d=b.createElement(c);d.src=a;d.type='text/java'+c;d.async=true;
							a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
							})();
						`}
					</Script>

					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument