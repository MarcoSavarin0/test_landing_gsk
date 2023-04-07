import { render, screen } from '@testing-library/react'
import Hero from "@/components/home/Hero"
import '@testing-library/jest-dom'

describe('Home', () => {
	it('renders a title', () => {
		render(<Hero />)
		expect(screen.getByText("Herpes Zóster")).toBeInTheDocument()
	})
})