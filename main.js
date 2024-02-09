const electronApp = require('electron').app;
const electronBrowserWindow = require('electron').BrowserWindow;
const electronIpcMain = require('electron').ipcMain;

const nodePath = require("path");

// Prevent garbage collection
let window;

function createWindow() {
    return new electronBrowserWindow({
        x: 0,
        y: 0,
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: nodePath.join(__dirname, 'preload.js')
        }
    });
}

function showMainWindow() {
    window.loadFile('login.html')
        .then(() => { window.show(); })
}

function showLoginWindow() {
    // window.loadURL('https://www.your-site.com/login')
    window.loadFile('index.html') // For testing purposes only
        .then(() => { window.show(); })
}

electronApp.on('ready', () => {
    window = createWindow();
    showMainWindow();
});

electronApp.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electronApp.quit();
    }
});

electronApp.on('activate', () => {
    if (electronBrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// ----- IPC -----

electronIpcMain.on('message:loginShow', (event) => {
    showLoginWindow();
})

electronIpcMain.on('message:loginSuccessful', (event, session) => {
    showMainWindow();
})