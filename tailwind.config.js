const conicGradient = (theme, direction, colorList) => {
	const params = [direction, ...colorList.map((color) => theme(`colors.${color}`))];

	return `conic-gradient(${params.join(', ')})`;
};

const colors = require('tailwindcss/colors');
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		
		extend: {
			colors: {
				amber: colors.amber,
				lightBlue: colors.lightBlue,
			
				gray: colors.gray,
			},
		},
		backgroundImage: (theme) => ({
			'conic-gradient': conicGradient(theme, 'from 400deg', [
				

				'lightBlue.500',
				'blue.300',
				'purple.600',
				'pink.500',
			
				
			]),
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
