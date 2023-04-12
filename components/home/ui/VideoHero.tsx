interface VideoHero {
	type: string
	top: string
}

const VideoHero = ({type, top}: VideoHero) => {
	return (
		<div className="absolute bottom-auto md:bottom-0 md:left-0 w-full h-fit">
			<video className={`w-full h-[27rem] md:h-auto object-cover md:object-contain object-[30%] md:object-top  brightness-75 md:brightness-100 ${top} md:mt-0 bg-gsk-dark`} poster={`/assets/images/hero/${type}.webp`} playsInline={true} crossOrigin="anonymous" preload="metadata" muted={true} width="1280" height="700" autoPlay={true} controls={false} loop={true}>
				<source src={`/assets/videos/${type}.webm`} type="video/webm"/>
			</video>
		</div>
	)
}

export default VideoHero