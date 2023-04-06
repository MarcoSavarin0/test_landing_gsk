import Image from "next/image"

interface ImageHero {
	type: string
}

const ImageHero = ({type}: ImageHero) => {
	return (
		<Image priority src={`/assets/images/hero/${type}.jpg`} alt={`Herpes Zóster`} width="1280" height="700" className="block w-full h-full object-cover object-bottom -mt-2 md:-mt-0"/>
	)
}

export default ImageHero