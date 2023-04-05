import Image from "next/image"

interface VideoHero {
	type: string
}

const VideoHero = ({type}: VideoHero) => {
	return (
		<video className={`${type} order-last md:order-first block w-full h-auto object-cover object-center aspect-video -mt-10 md:mt-0 lg:-mt-8 xl:-mt-20 2xl:-mt-40`} playsInline={true} crossOrigin="anonymous" preload="metadata" muted={true} width="1280" height="700" autoPlay={true} controls={false} loop={true}>
			<source src={`/assets/videos/${type}.mp4`} type="video/mp4"/>
			<Image priority src={`/assets/images/hero.jpg`} alt={`Herpes Zóster`} width="1440" height="747" className="block w-full h-full object-cover object-center"/>
		</video>
	)
}

export default VideoHero