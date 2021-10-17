const {app, BrowserWindow} = require('electron'); // http://electronjs.org/docs/api
const path = require('path'); // https://nodejs.org/api/path.html
const url = require('url'); // https://nodejs.org/api/url.html

let mainWindow = null;

// Wait until the app is ready
app.once('ready', () => {
	// Create a new window
	mainWindow = new BrowserWindow({
		// Set the initial width to 400px
		// width: 400,
		// Set the initial height to 500px
		// height: 500,
		// Don't show the window until it ready, this prevents any white flickering
		show: false,
		webPreferences: {
			nodeIntegration: true
		},
		icon: __dirname + '/favicon.ico'
	});

	// Load a URL in the window to the local index.html path
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	// Show window when page is ready
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()
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