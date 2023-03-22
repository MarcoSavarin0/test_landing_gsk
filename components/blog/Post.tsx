import Image from "next/image"
import Link from "next/link"

interface Post {
	id: number
	title: string
	date: string
}

const Post = ({id, title, date}: Post) => {
	return (
		<Link key={id} href="/blog/post">
			<article className="group w-full rounded-xl shadow-md hover:shadow-xl active:shadow-md space-y-2 pb-5 bg-white hover:bg-gsk-orange transition ease-out duration-300 overflow-hidden">
				<div className="overflow-hidden flex">
					<Image src={`/assets/images/${id}.jpg`} className="w-full group-hover:scale-105 transition-transform ease-in-out duration-500" alt="Post" width={100} height={70}/>
				</div>
				<div className="px-4 text-gsk-orange group-hover:text-white transition-colors ease-out duration-100">
					<span className="text-xs">{date}</span>
					<h3 className="text-xl">{title}</h3>
				</div>
			</article>
		</Link>
	)
}

export default Post