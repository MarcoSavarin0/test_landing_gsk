import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterIcon,
	TwitterShareButton, WhatsappIcon, WhatsappShareButton
} from "next-share"

interface ShareData {
	cta: string
	url: string
	quote: string
	hashtag: string
}

export default function Share({cta, url, quote, hashtag}: ShareData) {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="group inline-flex w-full justify-center items-center gap-x-1.5 text-base hover:text-white text-gsk-orange hover:bg-gsk-orange bg-white border-2 border-gsk-orange transition duration-300 ease-out rounded px-8 py-3 uppercase font-bold shadow-sm">
					{cta}
					<ChevronDownIcon className="-mr-1 h-5 w-5 text-gsk-orange group-hover:text-white" aria-hidden="true" />
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute left-0 z-10 mt-2 w-56 py-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1 space-x-1 flex items-center justify-center">
						<Menu.Item>
							<FacebookShareButton url={url} quote={quote} hashtag={hashtag}>
								<FacebookIcon className={`hover:scale-105 transition-transform`} round size={32} />
							</FacebookShareButton>
						</Menu.Item>
						<Menu.Item>
							<TwitterShareButton url={url} title={quote}>
								<TwitterIcon className={`hover:scale-105 transition-transform`} size={32} round />
							</TwitterShareButton>
						</Menu.Item>
						<Menu.Item>
							<LinkedinShareButton url={url}>
								<LinkedinIcon className={`hover:scale-105 transition-transform`} size={32} round />
							</LinkedinShareButton>
						</Menu.Item>
						<Menu.Item>
							<WhatsappShareButton url={url} title={quote} separator=" 🔗 ">
								<WhatsappIcon className={`hover:scale-105 transition-transform`} size={32} round />
							</WhatsappShareButton>
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
