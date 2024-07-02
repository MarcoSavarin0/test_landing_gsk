import { Fragment, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false)

	const handleMouseEnter = () => setShowDropdown(true)
	const handleMouseLeave = () => setShowDropdown(false)

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
											className="h-8 w-auto block"
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
									<Link href="/#que-es-herpes-zoster" scroll={false} className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase transition ease-out duration-300">
										¿Qué es Herpes Zóster?
									</Link>
									<Link href="/#risk-who" scroll={false} className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase transition ease-out duration-300">
										¿Quiénes están en riesgo?
									</Link>
									
									<Link href="/enfermedades-cronicas" scroll={false} className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase transition ease-out duration-300">
										Tengo una enfermedad crónica
									</Link>
									
									<Link href="/#enprimerapersona" scroll={false} className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase transition ease-out duration-300">
										En primera persona
									</Link>
									<div
										className="relative"
										onMouseOver={handleMouseEnter}
									>
										<div className="cursor-pointer text-white md:text-sm lg:text-base px-3 uppercase transition ease-out duration-300 dropdown">
											Iniciativas
											<svg className="-mr-1 ml-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
											</svg>
										</div>
										{showDropdown && (
											<div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10"
												onMouseOver={handleMouseEnter}

												onMouseOut={handleMouseLeave}
											>
												<Link
													href="/conciencia"
													scroll={false}
													className="block px-4 py-2 text-gray-800 hover:text-gsk-orange hover:underline"
													onClick={() => setShowDropdown(false)}
												>
													Semana de la Concientización
												</Link>
												<Link
													href="/hz90"
													scroll={false}
													className="block px-4 py-2 text-gray-800 hover:text-gsk-orange hover:underline"
													onClick={() => setShowDropdown(false)}
												>
													HZ_90
												</Link>
											</div>
										)}
									</div>
									<Link href="/biblioteca" scroll={false} className="cursor-pointer text-white hover:text-gsk-orange hover:underline md:text-sm lg:text-base px-3 uppercase transition ease-out duration-300">
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
								<Link href="/#riesgo" scroll={false} className="cursor-pointer block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
									¿Quiénes están en riesgo?
								</Link>
							</Disclosure.Button>
							<Disclosure.Button as={Fragment}>
								<Link href="/#enprimerapersona" className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
									En primera persona
								</Link>
							</Disclosure.Button>
							<div className="space-y-1">
								<Disclosure>
									{({ open }) => (
										<>
											<Disclosure.Button as={Fragment}>
												<button className="cursor-pointer block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
													Iniciativas
													<svg className={`${open ? 'transform rotate-180' : ''} -mr-1 ml-1 h-5 w-5 inline-block`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
														<path fillRule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
													</svg>
												</button>
											</Disclosure.Button>
											<Disclosure.Panel>
												<Link href="/conciencia" className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
													Semana de la Concientización
												</Link>
												<Link href="/hz90" className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-800 hover:text-white">
													HZ_90
												</Link>
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
							
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	)
}

export default Navbar
