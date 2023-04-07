import Image from "next/image"

interface VideoHero {
	type: string
}

const VideoHero = ({type}: VideoHero) => {
	return (
		<div className="absolute bottom-auto md:bottom-0 md:left-0 w-full h-fit -mt-2 md:-mt-0">
			<div className="visible md:hidden absolute top-0 left-0 w-full h-2 md:h-10 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 mt-2 md:mt-0 z-10"/>

			<video className="w-full h-[27rem] md:h-auto object-cover md:object-contain object-top aspect-video brightness-50 md:brightness-100 -mt-20 md:mt-0 lg:-mt-10 xl:-mt-20 2xl:-mt-40 bg-gsk-dark" playsInline={true} crossOrigin="anonymous" preload="metadata" muted={true} width="1280" height="700" autoPlay={true} controls={false} loop={true}>
				<source src={`/assets/videos/${type}.mp4`} type="video/mp4"/>
				<Image src={`/assets/images/hero/${type}.jpg`} alt={`Herpes Zóster`} width="1280" height="700" className="block w-full h-full object-cover object-center"/>
			</video>

			<div className="relative md:absolute bottom-3 sm:bottom-2 md:bottom-3 lg:bottom-3 xl:bottom-5 2xl:bottom-6 left-0 w-full h-3 2xl:h-12 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>
		</div>
	)
}

export default VideoHero