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
			},
			fontSize: {
				// 'sm': "clamp(0.53rem, 0.3vw + 0.43rem, 0.75rem)",
				// 'base': "clamp(0.67rem, 0.45vw + 0.52rem, 1rem)",
				// 'lg': "clamp(0.83rem, 0.68vw + 0.61rem, 1.33rem)",
				// 'xl': "clamp(1.04rem, 1vw + 0.71rem, 1.78rem)",
				// '2xl': "clamp(1.3rem, 1.45vw + 0.82rem, 2.37rem)",
				// '3xl': "clamp(1.63rem, 2.09vw + 0.93rem, 3.16rem)",
				// '4xl': "clamp(2.03rem, 2.96vw + 1.05rem, 4.21rem)",
				// '5xl': "clamp(2.54rem, 4.18vw + 1.15rem, 5.61rem)",
				// '6xl': "clamp(3.18rem, 5.86vw + 1.22rem, 7.48rem)",
			}
		},
	},
	plugins: [],
}
