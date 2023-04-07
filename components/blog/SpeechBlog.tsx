import {useEffect} from "react"
import {router} from "next/client"

interface Text {
	text: string
}

const synth = window.speechSynthesis

export default function SpeechBlog({text}: Text) {
	useEffect(() => {
		router.events.on('routeChangeStart', speechCancelHandler)

		return () => {
			router.events.off('routeChangeStart', speechCancelHandler)
		}
	}, [router])

	const textToSpeech = new SpeechSynthesisUtterance(text)
	textToSpeech.rate = 0.8

	const speechPlayHandler = () => {
		console.log("play", synth)
		return synth.speak(textToSpeech)
	}

	const speechPauseHandler = () => {
		console.log("pause", synth)
		return synth.pause()
	}

	const speechResumeHandler = () => {
		console.log("resume", synth)
		return synth.resume()
	}

	const speechCancelHandler = () => {
		console.log("cancel", synth)
		return synth.cancel()
	}

	return (
		<>
			<button onClick={() => speechPlayHandler()}>Play</button>
			<button onClick={() => speechPauseHandler()}>Pause</button>
			<button onClick={() => speechResumeHandler()}>Resume</button>
			<button onClick={() => speechCancelHandler()}>Cancel</button>
		</>
	)
}