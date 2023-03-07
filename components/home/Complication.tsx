import H2 from "@/components/ui/H2"
import MirrorContent from "@/components/home/ui/MirrorContent"

const Complication = () => {
	return (
		<section>
			<H2 title={`Posibles complicaciones`}/>
			<div className="">
				<MirrorContent title={`Mirror content`} body={`Lorem ipsum`} image={`Img`} index={1}/>
				<MirrorContent title={`Mirror content`} body={`Lorem ipsum`} image={`Img`} index={2}/>
				<MirrorContent title={`Mirror content`} body={`Lorem ipsum`} image={`Img`} index={3}/>
				<MirrorContent title={`Mirror content`} body={`Lorem ipsum`} image={`Img`} index={4}/>
			</div>
		</section>
	)
}

export default Complication