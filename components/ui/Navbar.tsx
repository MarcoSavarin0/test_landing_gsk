import {Fragment} from "react"
import Link from "next/link"
import Image from "next/image"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
	return (
		<Disclosure as="header" className="bg-gsk-dark" id="nav">
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
									<Link href="/#que-es-herpes-zoster" scroll={false} className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase">
										¿Qué es Herpes Zóster?
									</Link>
									<Link href="/#sintomas" scroll={false} className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase">
										Síntomas
									</Link>
									<Link href="/#riesgo" scroll={false} className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase">
										¿Quiénes están en riesgo?
									</Link>
									<Link href="/blog" scroll={false}
										className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase">
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
								<Link href="/#que-es-herpes-zoster" scroll={false} className="cursor-pointer block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
									¿Qué es Herpes Zóster?
								</Link>
							</Disclosure.Button>
							<Disclosure.Button as={Fragment}>
								<Link href="/#sintomas" scroll={false} className="cursor-pointer block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
									Síntomas
								</Link>
							</Disclosure.Button>
							<Disclosure.Button as={Fragment}>
								<Link href="/#riesgo" scroll={false} className="cursor-pointer block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
									¿Quiénes están en riesgo?
								</Link>
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