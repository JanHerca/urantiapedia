const {app, BrowserWindow} = require('electron'); // http://electronjs.org/docs/api
const path = require('path'); // https://nodejs.org/api/path.html
// const url = require('url'); // https://nodejs.org/api/url.html

let mainWindow = null;

// Wait until the app is ready
app.once('ready', () => {
	const isMac = process.platform === 'darwin';
	const options = {
		// Set the initial width to 1200px
		// width: 1200,
		// Set the initial height to 800px
		// height: 800,
		// Don't show the window until it ready, this prevents any white flickering
		show: false,
		webPreferences: {
			nodeIntegration: true
		}
	};
	if (!isMac) {
		options.icon = __dirname + '/favicon.ico';
	}
	// Create a new window
	mainWindow = new BrowserWindow(options);

	// Load a URL in the window to the local index.html path
	// mainWindow.loadURL(url.format({
	// 	pathname: path.join(__dirname, 'index.html'),
	// 	protocol: 'file:',
	// 	slashes: true
	// }));
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	// Show window when page is ready
	mainWindow.once('ready-to-show', () => {
		mainWindow.maximize();
		mainWindow.show();
	});

	// Emitted when the window is closed.
	mainWindow.on('closed', function() {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});

	mainWindow.webContents.openDevTools();
});