/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			merriweather: ['Merriweather', 'serif'],
		},
		screens: {
			xs: '400px',
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				gold: '#d4af37',
				'quartz-gray': '#534b52',
				'button-color':'#70a9a1',
				'solitude':'#EEF1F8',
				'madison':'#2d3e50',
				'white-smoke':'#f5f5f5'
				
			},
			boxShadow: {
				'2x': '0px 2px 4px rgba(0, 0, 0, 0.4), 0px 7px 13px -3px rgba(0, 0, 0, 0.3), inset 0px -3px 0px rgba(0, 0, 0, 0.2)',
				'3x': ' 0px 1px 2px 0px rgba(60, 64, 67, 0.3),0px 1px 3px 1px rgba(60, 64, 67, 0.15)',
				'4x': ' inset 0px -23px 25px 0px rgba(0, 0, 0, 0.17), inset  0px -36px 30px 0px rgba(0, 0, 0, 0.15), inset  0px -79px 40px 0px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06),0px 4px 2px rgba(0, 0, 0, 0.09),  0px 8px 4px rgba(0, 0, 0, 0.09), 0px 16px 8px rgba(0, 0, 0, 0.09),0px 32px 16px rgba(0, 0, 0, 0.09)',
			},
			animation: {
				opacity: 'opacity .3s forwards',
			},
			keyframes: {
				opacity: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
		},
	},
	plugins: [],
};
