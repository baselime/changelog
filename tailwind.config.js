const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
	addUtilities({
		".backface-visible": {
			"backface-visibility": "visible",
			"-moz-backface-visibility": "visible",
			"-webkit-backface-visibility": "visible",
			"-ms-backface-visibility": "visible",
		},
		".backface-hidden": {
			"backface-visibility": "hidden",
			"-moz-backface-visibility": "hidden",
			"-webkit-backface-visibility": "hidden",
			"-ms-backface-visibility": "hidden",
		},
	});
});

export default {
	mode: "jit",
	content: ["./src/**"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				scroll: "scroll 50s linear infinite",
				fadeIn: "fadeIn 0.3s ease-in-out",
				fadeOut: "fadeOut 0.3s ease-in-out",
			},
			keyframes: {
				scroll: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(calc(-150px * 12))" },
				},
				fadeIn: {
					"0%": { transform: "translateY(-200px)" },
					"100%": { transform: "translateY(0px)" },
				},
				fadeOut: {
					"0%": { transform: "translateY(0px)" },
					"100%": { transform: "translateY(-200px)" },
				},
			},
			fontSize: {
				"h-2xl-r": [
					"72px",
					{
						lineHeight: "90px",
						letterSpacing: "-0.02em",
						fontWeight: "400",
					},
				],

				"h-2xl-m": [
					"72px",
					{
						lineHeight: "90px",
						letterSpacing: "-0.02em",
						fontWeight: "500",
					},
				],

				"h-2xl-s": [
					"72px",
					{
						lineHeight: "90px",
						letterSpacing: "-0.02em",
						fontWeight: "600",
					},
				],

				"h-2xl-b": [
					"72px",
					{
						lineHeight: "90px",
						letterSpacing: "-0.02em",
						fontWeight: "700",
					},
				],

				/* Display XL */
				"h-xl-r": [
					"60px",
					{
						lineHeight: "72px",
						letterSpacing: "-0.02em",
						fontWeight: "400",
					},
				],

				"h-xl-m": [
					"60px",
					{
						lineHeight: "72px",
						letterSpacing: "-0.02em",
						fontWeight: "500",
					},
				],

				"h-xl-s": [
					"60px",
					{
						lineHeight: "72px",
						letterSpacing: "-0.02em",
						fontWeight: "600",
					},
				],

				"h-xl-b": [
					"60px",
					{
						lineHeight: "72px",
						letterSpacing: "-0.02em",
						fontWeight: "700",
					},
				],

				/* Display LG */
				"h-lg-r": [
					"46px",
					{
						lineHeight: "60px",
						letterSpacing: "-0.02em",
						fontWeight: "400",
					},
				],

				"h-lg-m": [
					"46px",
					{
						lineHeight: "60px",
						letterSpacing: "-0.02em",
						fontWeight: "500",
					},
				],

				"h-lg-s": [
					"46px",
					{
						lineHeight: "60px",
						letterSpacing: "-0.02em",
						fontWeight: "600",
					},
				],

				"h-lg-b": [
					"46px",
					{
						lineHeight: "60px",
						letterSpacing: "-0.02em",
						fontWeight: "700",
					},
				],

				/* Display md */
				"h-md-r": [
					"36px",
					{
						lineHeight: "44px",
						letterSpacing: "-0.02em",
						fontWeight: "400",
					},
				],

				"h-md-m": [
					"36px",
					{
						lineHeight: "44px",
						letterSpacing: "-0.02em",
						fontWeight: "500",
					},
				],

				"h-md-s": [
					"36px",
					{
						lineHeight: "44px",
						letterSpacing: "-0.02em",
						fontWeight: "600",
					},
				],

				"h-md-b": [
					"36px",
					{
						lineHeight: "44px",
						letterSpacing: "-0.02em",
						fontWeight: "700",
					},
				],

				/* Display sm */
				"h-sm-r": [
					"30px",
					{
						lineHeight: "38px",
						fontWeight: "400",
					},
				],

				"h-sm-m": [
					"30px",
					{
						lineHeight: "38px",
						fontWeight: "500",
					},
				],

				"h-sm-s": [
					"30px",
					{
						lineHeight: "38px",
						fontWeight: "600",
					},
				],

				"h-sm-b": [
					"30px",
					{
						lineHeight: "38px",
						fontWeight: "700",
					},
				],

				/* Display xs */
				"h-xs-r": [
					"24px",
					{
						lineHeight: "32px",
						fontWeight: "400",
					},
				],

				"h-xs-m": [
					"24px",
					{
						lineHeight: "32px",
						fontWeight: "500",
					},
				],

				"h-xs-s": [
					"24px",
					{
						lineHeight: "32px",
						fontWeight: "600",
					},
				],

				"h-xs-b": [
					"24px",
					{
						lineHeight: "32px",
						fontWeight: "700",
					},
				],

				/* Body xl */
				"b-xl-r": [
					"20px",
					{
						lineHeight: "30px",
						fontWeight: "400",
					},
				],

				"b-xl-m": [
					"20px",
					{
						lineHeight: "30px",
						fontWeight: "500",
					},
				],

				"b-xl-s": [
					"20px",
					{
						lineHeight: "30px",
						fontWeight: "600",
					},
				],

				"b-xl-b": [
					"20px",
					{
						lineHeight: "30px",
						fontWeight: "700",
					},
				],

				/* Body lg */
				"b-lg-r": [
					"18px",
					{
						lineHeight: "28px",
						fontWeight: "400",
					},
				],

				"b-lg-m": [
					"18px",
					{
						lineHeight: "28px",
						fontWeight: "500",
					},
				],

				"b-lg-s": [
					"18px",
					{
						lineHeight: "28px",
						fontWeight: "600",
					},
				],

				"b-lg-b": [
					"18px",
					{
						lineHeight: "28px",
						fontWeight: "700",
					},
				],

				/* Body md */
				"b-md-r": [
					"16px",
					{
						lineHeight: "24px",
						fontWeight: "400",
					},
				],

				"b-md-m": [
					"16px",
					{
						lineHeight: "24px",
						fontWeight: "500",
					},
				],

				"b-md-s": [
					"16px",
					{
						lineHeight: "24px",
						fontWeight: "600",
					},
				],

				"b-md-b": [
					"16px",
					{
						lineHeight: "24px",
						fontWeight: "700",
					},
				],

				/* Body sm */
				"b-sm-r": [
					"14px",
					{
						lineHeight: "20px",
						fontWeight: "400",
					},
				],

				"b-sm-m": [
					"14px",
					{
						lineHeight: "20px",
						fontWeight: "500",
					},
				],

				"b-sm-s": [
					"14px",
					{
						lineHeight: "20px",
						fontWeight: "600",
					},
				],

				"b-sm-b": [
					"14px",
					{
						lineHeight: "20px",
						fontWeight: "700",
					},
				],

				/* Body xs */
				"b-xs-r": [
					"12px",
					{
						lineHeight: "18px",
						fontWeight: "400",
					},
				],

				"b-xs-m": [
					"12px",
					{
						lineHeight: "18px",
						fontWeight: "500",
					},
				],

				"b-xs-s": [
					"12px",
					{
						lineHeight: "18px",
						fontWeight: "600",
					},
				],

				"b-xs-b": [
					"12px",
					{
						lineHeight: "18px",
						fontWeight: "700",
					},
				],
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				greenSplash: "url('@/assets/images/background-1@1x.png')",
				multiSplash: "url('@/assets/images/background-2@1x.png')",
			},
			dropShadow: {
				"3xl": "31.3727px 31.3727px 53.3336px rgba(10, 18, 51, 0.1)",
				"4xl": "20px 24px 44px rgba(20, 29, 67, 0.06)",
			},
			borderWidth: {
				"1/2": "0.5px",
			},
			colors: {
				baseRed: "#F94E1E",
				baseYellow: "#FFC71E",
				baseGreen: "#0BB859",
				darkbaseGreen: "#007334",
				lightBlue: "#1A6AE3",
				baseBlue: "#317EF1",
				darkBlue: "#0A1233",
				baseGrey: "#80868b",
				darkGrey: "#585251",
				e4: "#e4e4e4",
				mainBackground: "#F9F9F9",
				white: "#fcfcfc",
				paper: "#F7F6F3",
				n: {
					100: "#A7A9B1",
				},
				l: {
					p: {
						1: "#5577EB",
						2: "#EB7D41",
						3: "#AB69EB",
					},
					s: {
						1: "#E8EB50",
						2: "#EA608E",
						3: "#35BAEB",
						4: "#EB5D5E",
					},
					g: {
						1: "#000000",
						2: "#0B0C0D",
						3: "#131416",
						4: "#1B1C1F",
						5: "#222326",
						6: "#35363A",
						7: "#47484D",
						8: "#777A7E",
						9: "#A7A9B1",
						10: "#FFFFFF",
						11: "#F6F7FB",
					},
					a: "#A8E840",
					a2: "#BCFC54",
					a3: "#94D32E",
					info: "#A8E840",
					success: "#A8E840",
					warning: "#A8E840",
					critical: "#A8E840",
				},
			},
		},
	},
	variants: {
		extend: {},
		animation: ["motion-safe"],
	},
	plugins: [require("@tailwindcss/forms"), backfaceVisibility],
};
