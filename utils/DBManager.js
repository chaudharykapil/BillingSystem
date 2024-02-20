const {DataSource} = require("typeorm")
const { CompanyModel } = require("../models/Company")
const { Address } = require("../models/Address")
const { Client } = require("../models/Client")

const DBManager = new DataSource({
    name:"maindb",
    type:"sqlite",
    database:"./db/main.sqlite",
    entities:[Address,Client,CompanyModel],
    synchronize:true,
    
})

module.exports  = {DBManager}


