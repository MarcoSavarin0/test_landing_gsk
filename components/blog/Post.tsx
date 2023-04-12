import Image from "next/image"
import Link from "next/link"

interface Post {
	image: string
	title: string
	slug: string
}

const Post = ({image, title, slug}: Post) => {
	return (
		<Link href={`/blog/${slug}`}>
			<article className="group w-full rounded-xl shadow-md hover:shadow-xl active:shadow-md space-y-2 pb-5 bg-white hover:bg-gsk-orange transition ease-out duration-300 overflow-hidden">
				<div className="overflow-hidden flex">
					<Image src={`/assets/images/notas/${image}.webp`} className="w-full group-hover:scale-105 transition-transform ease-in-out duration-500" alt={title} width={100} height={70}/>
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