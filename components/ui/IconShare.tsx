import {
	FacebookIcon,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterIcon,
	TwitterShareButton, WhatsappIcon, WhatsappShareButton
} from "next-share"

interface ShareData {
	url: string
	quote: string
	hashtag: string
}
export const IconShare = ({url, quote, hashtag}: ShareData) => {
	return (
		<div className="flex gap-x-3">
			<FacebookShareButton url={url} quote={quote} hashtag={hashtag}>
				<FacebookIcon className={`hover:scale-105 transition-transform`} round size={32} />
			</FacebookShareButton>
			<LinkedinShareButton url={url} title={quote}>
				<LinkedinIcon className={`hover:scale-105 transition-transform`} size={32} />
			</LinkedinShareButton>
			<TwitterShareButton url={url} title={quote} >
				<TwitterIcon className={`hover:scale-105 transition-transform`} size={32} round />
			</TwitterShareButton>
			<WhatsappShareButton url={url} title={quote} separator=" 🔗 ">
				<WhatsappIcon className={`hover:scale-105 transition-transform`} size={32} round />
			</WhatsappShareButton>
		</div>
	)
}
