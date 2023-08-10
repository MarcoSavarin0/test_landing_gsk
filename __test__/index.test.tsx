import { render } from '@testing-library/react'
import Intro from "@/components/home/Intro"
import '@testing-library/jest-dom'

describe('Hero', () => {
	it('renders a title', () => {
		render(<Intro />)
	})
})