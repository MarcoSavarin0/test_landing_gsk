import Image from "next/image"

interface ImageHero {
	type: string
}

const ImageHero = ({type}: ImageHero) => {
	return (
		<Image priority src={`/assets/images/hero/${type}.jpg`} alt={`Herpes Zóster`} width="1920" height="800" className="block w-full h-full object-cover object-center"/>
	)
}

export default ImageHero