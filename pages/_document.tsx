import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'
import Script from 'next/script'
// import Script from 'next/script'

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		return await Document.getInitialProps(ctx)
	}

	render() {
		return (
			<Html>
				<Head>
					<link rel="shortcut icon" href="/favicon.png" />

					<Script id="google-analytics" strategy="afterInteractive">
						{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-5YDSHRMYES');
					`}
					</Script>

					<Script id="meta-pixel">
						{
							`
								!function(f,b,e,v,n,t,s)
								{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
								n.callMethod.apply(n,arguments):n.queue.push(arguments)};
								if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
								n.queue=[];t=b.createElement(e);t.async=!0;
								t.src=v;s=b.getElementsByTagName(e)[0];
								s.parentNode.insertBefore(t,s)}(window, document,'script',
								'https://connect.facebook.net/en_US/fbevents.js');
								fbq('init', '1929643777386048');
								fbq('track', 'PageView');
							`
						}
					</Script>

					<Script id="meta-pixel-img">
						{
							`
								<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1929643777386048&ev=PageView&noscript=1"/>
							`
						}
					</Script>

					{/* <Script id="analytics" async src="https://www.googletagmanager.com/gtag/js?id=AW-11138119089">
						{`
							window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments)}
							gtag('js', new Date()); gtag('config', 'AW-11138119089');
						`}
					</Script> */}
				</Head>
				<body>
					<Script id="google-analytics" strategy="afterInteractive">
						{`
						<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5YDSHRMYES" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
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