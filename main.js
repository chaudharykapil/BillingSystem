
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { DBManager } = require('./utils/DBManager');
const {CompanyModel}  = require("./models/Company");
const { Client } = require('./models/Client');
const { Address } = require('./models/Address');
const { Product } = require('./models/Product');

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

ipcMain.handle("add-new-client",(ev,args)=>{
	var clientrepo = DBManager.getRepository(Client)
	var addressrepo = DBManager.getRepository(Address)
	let shipping_address = {}
	console.log(args)
	const client = {
		client_name:args.name,
		contact_name:args.contact_name,
		phone:args.phone,
		email:args.email,
		gstin:args.gstin,
		tin:args.tin,
		pan:args.pan,
		vat:args.vat,
		private_client_detail:args.private_detail,
		other_client_detail:args.other_detail,
		vendor:args.vendor,
		sez:args.sez,
	}
	let billing_address = {
		address:args.billing_address,
		city:args.city,
		state:args.state,
		pincode:args.pincode,
		country:args.country,
	}
	if(args["shipping_address"]){
		shipping_address = {
			name:args.shiping_name,
			address:args.shiping_address,
			city:args.shiping_city,
			state:args.shiping_state,
			pincode:args.shiping_pincode,
			country:args.shiping_country,
		}
	}

	return addressrepo.insert(billing_address).then(v=>{
		client.billing_address = v.identifiers[0].id
		if(args["shipping_address"]){
			addressrepo.insert(shipping_address).then(v=>{
				client.shiping_address = v.identifiers[0].id
			},e=>{console.log(e)})
		}
	},er=>{console.log(er)}).finally(()=>{
		console.log(client)
		clientrepo.insert(client).then((ev)=>{return "ok"},(err)=>{console.log(err);return "error"})
	})
})

ipcMain.handle("add-new-company",(ev,args)=>{
	var companyrepo = DBManager.getRepository(CompanyModel)
	var addressrepo = DBManager.getRepository(Address)
	var company = {
		companyname:args.company_name,
		companypan:args.pan,
		tin:args.tin,
		vat:args.vat,
		service_tax_no:args.service_tax,
		cst_no:args.cst_no,
		phone:args.phone,
		email:args.email,
		website:args.website,
		additional_detail:args["add_detail"],
	}
	var address = {
		address:args.address,
		city:args.city,
		state:args.state,
		pincode:args.pincode,
		country:args.country,
	}
	return addressrepo.insert(address).then((v)=>{
		company["addressid"] = v.identifiers[0].id
		return companyrepo.insert(company).then((ve)=>{return "ok"},(e)=>{console.log(err);return "error"})
	},(err)=>{console.log(err);return "error"})
})

ipcMain.handle("get-all-client",(ev,args)=>{
	var clientrepo = DBManager.getRepository(Client)
	return clientrepo.find()
})

ipcMain.handle("company-sign-in",(ev,args)=>{
	var companyrepo = DBManager.getRepository(CompanyModel)
	return companyrepo.findOneBy({email:args.email,password:args.password})
})

ipcMain.handle("add-new-product",(ev,args)=>{
	var productRepo = DBManager.getRepository(Product)
	console.log(args)
	var product = {
		p_type:args.type,
		uom:args.uom,
		sku:args.sku,
		product_name:args.product_name,
		purchase_price:args.purchase_price,
		hns:args.hns,
		unit_price:args.unit_price,
		tax:args.tax,
		sac:args.sac,
		quantity:args.qty,
		cess:args.cess,
		additional:args.additional,
		description:args.description
	}
	return productRepo.insert(product).then(v=>{
		return "ok"
	},err=>{
		console.log(err)
		return "error"
	})
})
ipcMain.handle("get-all-product",(ev,args)=>{
	var productRepo = DBManager.getRepository(Product)
	return productRepo.find()
})