module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{svg,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};