module.exports = {
	stories: [
		'../**/*.stories.json'
	],

    addons: [
		'@storybook/addon-webpack5-compiler-babel'
	],

	framework: {
		name: '@storybook/server-webpack5'
	},

	core: {
		disableTelemetry: true
	}
}
