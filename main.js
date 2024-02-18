const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { DBManager } = require('./utils/DBManager');
const {CompanyModel}  = require("./models/Company")

let mainWindow;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: false, 
    },
    title:"Billing System"
  });
  const startURL = 'http://localhost:3000'
  if(!DBManager.isInitialized){
    DBManager.initialize().then(v=>{
      mainWindow.loadURL(startURL);
    })
  }
  mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on("add-new-company",(ev,args)=>{
	var repo = DBManager.getRepository(CompanyModel)
	console.log(args)
	const company = {
		companyname:"ABC",
		companypan:"CNJPC6964P",
		tin:"1233134223",
		vat:"2332erf3423",
		service_tax_no:"23e43rfft65",
		cst_no:"998878",
		phone:"90867342",
		email:"abc@gmail.com",
		website:"www.abc.com",
	}
	repo.insert(company).then(v=>{
		console.log("done",v)
	})
	ev.reply = "done"
})