import {Fragment} from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from 'react-scroll'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

/* function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
} */

const Navbar = () => {
	return (
		<Disclosure as="header" className="bg-gsk-dark">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
						<div className="flex h-16 items-center justify-between">
							<div className="flex items-center">
								<div className="flex-shrink-0">
									<Link href="/">
										<Image
											className="block h-8 w-auto lg:hidden"
											src="/gsk-logo.svg"
											alt="GSK"
											width={100}
											height={70}
										/>
										<Image
											className="hidden h-8 w-auto lg:block"
											src="/gsk-logo.svg"
											alt="GSK"
											width={100}
											height={70}
										/>
									</Link>
								</div>
							</div>
							<nav className="hidden sm:ml-6 md:block">
								<div className="flex items-center">
									<Button to="faq" spy={true} smooth={true} duration={500} type="submit" offset={-10} value="¿Qué es Herpes Zóster?"
										className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase"/>
									<Button to="who" spy={true} smooth={true} duration={500} type="submit" offset={-10} value="¿Quiénes están en riesgo?"
										className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase"/>
									<Button to="complications" spy={true} smooth={true} duration={500} type="submit" offset={-10} value="Síntomas"
										className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase"/>
									<Link href="/blog" className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase">
										Blog
									</Link>
								</div>
							</nav>
							<div className="-mr-2 flex md:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Abrir menu de navegación</span>
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
						</div>
					</div>

					<Disclosure.Panel as="nav" className="md:hidden">
						<div className="space-y-1 px-2 pt-2 pb-3">
							<Disclosure.Button as={Fragment}>
								<Button
									to="faq" spy={true} smooth={true} duration={500} type="submit" offset={-10} value="¿Qué es Herpes Zóster?"
									className="cursor-pointer block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
								/>
							</Disclosure.Button>
							<Disclosure.Button as={Fragment}>
								<Button
									to="who" spy={true} smooth={true} duration={500} type="submit" offset={-10} value="¿Quiénes están en riesgo?"
									className="cursor-pointer block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
								/>
							</Disclosure.Button>
							<Disclosure.Button as={Fragment}>
								<Button
									to="complications" spy={true} smooth={true} duration={500} type="submit" offset={-10} value="Síntomas"
									className="cursor-pointer block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white"
								/>
							</Disclosure.Button>
							<Disclosure.Button as={Fragment}>
								<Link href="/blog" className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
									Blog
								</Link>
							</Disclosure.Button>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default Navbar