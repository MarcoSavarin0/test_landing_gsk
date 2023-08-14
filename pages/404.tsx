import Link from "next/link"
import Cta from "@/components/ui/Cta"

const Custom404 = () => {
	return (
		<section className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="text-base font-semibold text-gsk-orange">404</p>
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-gsk-dark sm:text-5xl">Página no encontrada</h1>
				<p className="mt-6 text-base leading-7 text-gsk-dark/80">Lo sentimos, no pudimos encontrar la página que estás buscando.</p>
				<div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-y-0 md:gap-x-6">
					<Cta title={`Volver al inicio`} url="/"/>
					<Link href="/blog" className="text-sm font-semibold text-gsk-dark hover:underline">
						Visitar nuestro blog <span aria-hidden="true">&rarr;</span>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Custom404