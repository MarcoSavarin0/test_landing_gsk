import Image from "next/image"

interface VideoHero {
	type: string
}

const VideoHero = ({type}: VideoHero) => {
	return (
		<div className="md:absolute md:bottom-0 md:left-0 w-full h-fit -mt-2 md:-mt-0">
			<div className="visible md:hidden absolute top-0 left-0 w-full h-2 md:h-10 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 mt-4 md:mt-0 z-10"/>
			<video className={`${type} order-last md:order-first block w-full h-auto object-contain object-top aspect-video -mt-0 md:mt-0 lg:-mt-10 xl:-mt-20 2xl:-mt-40 bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="metadata" muted={true} width="1280" height="700" autoPlay={true} controls={false} loop={true}>
				<source src={`/assets/videos/${type}.mp4`} type="video/mp4"/>
				<Image priority src={`/assets/images/hero/${type}.jpg`} alt={`Herpes Zóster`} width="1920" height="800" className="block w-full h-full object-cover object-center"/>
			</video>
			<div className="relative md:absolute bottom-5 sm:bottom-2 md:bottom-3 lg:bottom-3 xl:bottom-5 2xl:bottom-6 left-0 w-full h-4 md:h-5 2xl:h-12 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>
		</div>
	)
}

export default VideoHero