const bs = require('browser-sync');

module.exports = function bs2html() {
	bs.init({
		server: {
			baseDir: 'build/',
			host: '192.168.0.92',
		},
		browser: 'google-chrome-stable',
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}
