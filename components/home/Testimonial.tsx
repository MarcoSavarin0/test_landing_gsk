import H2 from "@/components/ui/H2"
import ButtonThumbnail from "@/components/home/ui/ButtonThumbnail"

const Testimonial = () => {
	return (
		<section>
			<H2 title={`Testimoniales`}/>
			<p>Lorem ipsum Lorem ipsum Lorem ipsum.</p>
			<div>
				<iframe className="w-full aspect-video" src="https://www.youtube.com/embed/bXUKo6pfre8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
				<div className="flex">
					<ButtonThumbnail title={`Lorem ipsum`} image={`Img`}/>
					<ButtonThumbnail title={`Lorem ipsum`} image={`Img`}/>
					<ButtonThumbnail title={`Lorem ipsum`} image={`Img`}/>
					<ButtonThumbnail title={`Lorem ipsum`} image={`Img`}/>
				</div>
			</div>
		</section>
	)
}

export default Testimonial