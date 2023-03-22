import Link from "next/link"

interface Button {
	title: string
	slug: string
}

const CategoryButton = ({title, slug}: Button) => {
	return (
		<Link href={`/blog/${slug}`} className="bg-gsk-gray hover:bg-gsk-orange text-xs text-[#959595] hover:text-white rounded-md px-5 py-2 uppercase transition-colors ease-out duration-300">
			{title}
		</Link>
	)
}

export default CategoryButton