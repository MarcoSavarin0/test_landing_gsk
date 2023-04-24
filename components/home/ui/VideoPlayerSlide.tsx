interface VideoProps {
	index: number
	type: string
	top: string
}

const VideoPlayerSlide = ({index, type, top}: VideoProps) => {
	return (
		<video id={`video${index}`} className={`w-full h-[27rem] md:h-auto object-cover md:object-contain object-[30%] md:object-top brightness-75 md:brightness-100 ${top} md:mt-0 bg-gsk-dark`} playsInline={true} crossOrigin="anonymous" preload="auto" muted={true} width="1280" height="700" autoPlay={false} controls={false} loop={false}>
			<source src={`https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_PUBLIC_REGION}.amazonaws.com/hero/${type}.webm`} type="video/webm"/>
		</video>
	)
}

export default VideoPlayerSlide