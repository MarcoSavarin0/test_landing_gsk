module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				'gsk-orange': '#F36633',
				'gsk-dark': '#08101E',
				'gsk-gray': '#F0EFED',
			},
		}
	},
	plugins: [],
}