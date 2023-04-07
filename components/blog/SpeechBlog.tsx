import {useEffect, useState} from "react"
import {router} from "next/client"

import { PlayCircleIcon, PauseCircleIcon, StopCircleIcon } from '@heroicons/react/24/solid'

interface Text {
	text: string
}

const synth = window.speechSynthesis

export default function SpeechBlog({text}: Text) {
	const [playing, setPlaying] = useState(synth.speaking)

	useEffect(() => {
		router.events.on('routeChangeStart', speechCancelHandler)

		return () => {
			router.events.off('routeChangeStart', speechCancelHandler)
		}
	}, [router])

	const textToSpeech = new SpeechSynthesisUtterance(text)
	textToSpeech.rate = 0.8


	textToSpeech.onend = function () {
		console.log("SpeechSynthesisUtterance.onend")
	}

	const speechToggleHandler = () => {
		if (synth.speaking) {
			setPlaying(false)
			return synth.pause()
		} else if(synth.paused) {
			setPlaying(true)
			return synth.resume()
		} else {
			setPlaying(true)
			return synth.speak(textToSpeech)
		}
	}

	/* const speechPlayHandler = () => {
		setPlaying(true)
		return synth.speak(textToSpeech)
	}

	const speechPauseHandler = () => {
		return synth.pause()
	}

	const speechResumeHandler = () => {
		return synth.resume()
	} */

	const speechCancelHandler = () => {
		setPlaying(false)
		return synth.cancel()
	}

	return (
		<div className="flex gap-x-2 border w-fit p-1">
			<button onClick={() => speechToggleHandler()}>
				{playing ? <PauseCircleIcon className="h-6 w-6 text-gsk-dark" /> : <PlayCircleIcon className="h-6 w-6 text-gsk-dark" />}
			</button>

			{/* <button onClick={() => speechPlayHandler()}>
				<PlayCircleIcon className="h-6 w-6 text-gsk-dark" />
			</button>
			<button onClick={() => speechPauseHandler()}>
				<PauseCircleIcon className="h-6 w-6 text-gsk-dark" />
			</button>
			<button onClick={() => speechResumeHandler()}>
				<PlayCircleIcon className="h-6 w-6 text-gsk-dark" />
			</button> */}
			<button onClick={() => speechCancelHandler()}>
				<StopCircleIcon className="h-6 w-6 text-gsk-dark" />
			</button>
		</div>
	)
}