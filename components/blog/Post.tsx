import Image from "next/image"
import Link from "next/link"
import va from "@vercel/analytics"

interface Post {
	image: string
	title: string
	slug: string
}

const Post = ({image, title, slug}: Post) => {
	return (
		<Link href={`/blog/${slug}`} onClick={() => va.track(`Open Blog ${slug} post`)}>
			<article className="group w-full h-auto sm:h-full rounded-xl shadow-md hover:shadow-xl active:shadow-md space-y-3 pb-4 bg-white hover:bg-gsk-orange transition ease-out duration-300 overflow-hidden">
				<div className="overflow-hidden flex">
					<Image src={`/assets/images/notas/${image}.webp`} className="w-full group-hover:scale-105 transition-transform ease-in-out duration-500" alt={title} width={1920} height={1080}/>
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