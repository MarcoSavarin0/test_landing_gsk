interface VideoHero {
	type: string
	top: string
}

const VideoHero = ({type, top}: VideoHero) => {
	return (
		<div className="absolute bottom-auto md:bottom-0 md:left-0 w-full h-fit">
			<div className="visible md:hidden absolute top-0 left-0 w-full h-2 md:h-10 bg-gradient-to-b from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 md:mt-0 z-10"/>

			<video className={`w-full h-[27rem] md:h-auto object-cover md:object-contain object-[30%] md:object-top aspect-video brightness-75 md:brightness-100 ${top} md:mt-0 lg:-mt-10 xl:-mt-20 2xl:-mt-40 bg-gsk-dark`} poster={`/assets/images/hero/${type}.jpg`} playsInline={true} crossOrigin="anonymous" preload="metadata" muted={true} width="1280" height="700" autoPlay={true} controls={false} loop={true}>
				<source src={`/assets/videos/${type}.mp4`} type="video/mp4"/>
			</video>

			<div className="relative md:absolute bottom-3 sm:bottom-2 md:bottom-3 lg:bottom-3 xl:bottom-5 2xl:bottom-6 left-0 w-full h-3 2xl:h-12 bg-gradient-to-t from-gsk-dark via-gsk-dark/60 to-gsk-dark/0 z-10"/>
		</div>
	)
}

export default VideoHero