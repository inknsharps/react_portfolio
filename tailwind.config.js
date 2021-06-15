module.exports = {
	// mode: "jit",
    purge: {
		content: [
			"./src/**/*.{js,jsx,ts,tsx}", 
			"./public/index.html"
		],
		options: {
			safelist: {
				standard: ["/^bg-|animation|top|bottom|left|right/"]
			}
		}
	},
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
			animation: {
				blob: "blob 20s linear infinite"
			},
			keyframes: {
				blob: {
					"0%": { transform: "translate(0vh, 0vh) scale(1)" },
					"25%": { transform: "translate(1vh, -1vh) scale(1.1)" },
					"50%": { transform: "translate(0vh, -2vh) scale(1.2)" },
					"75%": { transform: "translate(-1vh, -1vh) scale(1.1)" },
					"100%": { transform: "translate(0vh, 0vh) scale(1)" }
				}
			},
			ringOffsetWidth: {
				"16": "16px"
			}
		}
    },
    variants: {
        extend: {}
    },
    plugins: []
};
