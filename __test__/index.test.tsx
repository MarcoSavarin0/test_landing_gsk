import { render, screen } from '@testing-library/react'
import Intro from "@/components/home/Intro"
import '@testing-library/jest-dom'

describe('Home', () => {
	it('renders a title', () => {
		render(<Intro />)
		expect(screen.getByText("Herpes Zóster")).toBeInTheDocument()
	})
})