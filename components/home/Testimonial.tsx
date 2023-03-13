import H2 from "@/components/ui/H2"
// import ButtonThumbnail from "@/components/home/ui/ButtonThumbnail"
import Description from "@/components/ui/Description"

const Testimonial = () => {
	return (
		<section className="space-y-6">
			<div className="text-center space-y-3 px-4">
				<H2 title={`Testimoniales`}/>
				<Description title={`Escuchá las historias de algunos pacientes que tuvieron Herpes Zóster.`}/>
			</div>

			<div className="px-12">
				<iframe className="w-full aspect-video" src="https://www.youtube.com/embed/bXUKo6pfre8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
				{/*
				<div className="flex">
					<ButtonThumbnail title={`Lorem ipsum`} image={`Img`}/>
					<ButtonThumbnail title={`Lorem ipsum`} image={`Img`}/>
					<ButtonThumbnail title={`Lorem ipsum`} image={`Img`}/>
					<ButtonThumbnail title={`Lorem ipsum`} image={`Img`}/>
				</div>
				*/}
			</div>
		</section>
	)
}

export default Testimonial