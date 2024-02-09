/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			'sans': ["Inter", "ui-sans-serif"],
		},
		extend: {
			screens: {
				'xs': '475px',
			}
		},
	},
	plugins: [],
}
