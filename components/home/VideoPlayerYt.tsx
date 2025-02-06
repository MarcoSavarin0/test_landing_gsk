import dynamic from 'next/dynamic'

const VideoplayerSSR = dynamic(() => import('../home/ui/Videoplayer'), { ssr: false })

const VideoPlayerYt = () => {
	return (
		<div className="max-w-5xl mx-auto">
			<VideoplayerSSR id={"b4chKSwGZnY"}/>
		</div>
	)
}

export default VideoPlayerYt