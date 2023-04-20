import {useEffect, useState} from "react"
import {router} from "next/client"
import { PlayCircleIcon, PauseCircleIcon, StopCircleIcon } from '@heroicons/react/24/solid'
import va from "@vercel/analytics"

interface Text {
	text: string
	slug: string
}

type ActionsType = {
	[key: string]: any
}

export default function SpeechBlog({text, slug}: Text) {
	const synth = window.speechSynthesis
	const textToSpeech = new SpeechSynthesisUtterance(text)
	textToSpeech.rate = 0.8

	const [playing, setPlaying] = useState(false)

	const letsSpeech = (type: string): void => {
		const speechSynth: ActionsType = {
			'play': () => {
				setPlaying(true)
				synth.speak(textToSpeech)
			},
			'pause': () => {
				setPlaying(false)
				synth.pause()
			},
			'resume': () => {
				setPlaying(true)
				synth.resume()
			},
			'cancel': () => {
				setPlaying(false)
				synth.cancel()
			}
		};

		(speechSynth[type] || speechSynth['cancel'])()
	}

	useEffect(() => {
		router.events.on('routeChangeStart', speechCancelHandler)

		return () => {
			router.events.off('routeChangeStart', speechCancelHandler)
		}
	}, [router])

	textToSpeech.onend = function () {
		return letsSpeech('cancel')
	}

	const speechToggleHandler = () => {
		if (synth.paused) {
			va.track(`Resume SpeechSynth ${slug}`)
			return letsSpeech('resume')
		} else if(synth.speaking) {
			va.track(`Pause SpeechSynth ${slug}`)
			return letsSpeech('pause')
		} else {
			va.track(`Play SpeechSynth ${slug}`)
			return letsSpeech('play')
		}
	}

	const speechCancelHandler = () => {
		va.track(`Stop SpeechSynth ${slug}`)
		setPlaying(false)
		return letsSpeech('cancel')
	}

	return (
		<div className="flex gap-x-2 border w-fit p-1">
			<button onClick={() => speechToggleHandler()}>
				{playing ? <PauseCircleIcon className="h-6 w-6 text-gsk-dark" /> : <PlayCircleIcon className="h-6 w-6 text-gsk-dark" />}
			</button>
			<button onClick={() => speechCancelHandler()}>
				<StopCircleIcon className="h-6 w-6 text-gsk-dark" />
			</button>
		</div>
	)
}