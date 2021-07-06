const bs = require('browser-sync');

module.exports = function bs2php() {
	bs.init({
		browser: ['google-chrome-stable'],
		watch: true,
		proxy: '',
		logLevel: 'info',
		logPrefix: 'BS-PHP:',
		logConnections: true,
		logFileChanges: true,
	})
}
