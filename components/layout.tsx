import {ReactNode} from "react"

import Navbar from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import PopOut from "./popOut/PopOut"
interface Props {
	children?: ReactNode
	className: string
}

const Layout = ({children, className}: Props) => {
	return (
		<div className={className}>
			<Navbar/>
			<main>{children}</main>
			<PopOut/>
			<Footer/>
			
		</div>
	)
}

export default Layout