import Link from "next/link"

interface Button {
	title: string
	slug: string
	param?: string
}

const CategoryButton = ({title, slug, param}: Button) => {
	return (
		<Link href={`/blog/${param ? param + "/" : ""}${slug}`} className="bg-gsk-gray hover:bg-gsk-orange text-xs text-[#959595] hover:text-white rounded-md px-5 py-2 uppercase transition-colors ease-out duration-300">
			{title}
		</Link>
	)
}

export default CategoryButton