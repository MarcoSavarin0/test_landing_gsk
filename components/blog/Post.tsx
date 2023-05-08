import Image from "next/image"
import Link from "next/link"

interface Post {
	image: string
	title: string
	slug: string
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

const Post = ({image, title, slug}: Post) => {
	return (
		<Link href={`/blog/${slug}`}>
			<article className="group w-full h-auto sm:h-full rounded-xl shadow-md hover:shadow-xl active:shadow-md space-y-3 pb-4 bg-white hover:bg-gsk-orange transition ease-out duration-300 overflow-hidden">
				<div className="overflow-hidden flex">
					<Image src={`https://gsk-hdz.b-cdn.net/notas/${image}.webp`}
						className="w-full group-hover:scale-105 transition-transform ease-in-out duration-500" alt={title} width={600} height={337}
						placeholder="blur"
						blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 337))}`}
					/>
				</div>
				<div className="px-4 text-gsk-orange group-hover:text-white transition-colors ease-out duration-100">
					{/* <span className="text-xs">DATE</span> */}
					<h3 className="text-xl">{title}</h3>
				</div>
			</article>
		</Link>
	)
}

export default Post