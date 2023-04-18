interface VideoProps {
	index: number
	type: string
	top: string
}

const VideoPlayerSlide = ({index, type, top}: VideoProps) => {
	return (
		<video onSeeking={() => console.log("onSeeking")} id={`video${index}`} className={`w-full h-[27rem] md:h-auto object-cover md:object-contain object-[30%] md:object-top brightness-75 md:brightness-100 ${top} md:mt-0 bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="auto" muted={true} width="1280" height="700" autoPlay={false} controls={false} loop={false}>
			<source src={`/assets/videos/${type}.webm`} type="video/webm"/>
		</video>
	)
}

export default VideoPlayerSlide