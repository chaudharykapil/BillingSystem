const {DataSource} = require("typeorm")
const { CompanyModel } = require("../models/Company")
const { Address } = require("../models/Address")

const DBManager = new DataSource({
    name:"maindb",
    type:"sqlite",
    database:"./db/main.sqlite",
    entities:[CompanyModel,Address],
    synchronize:true
})

module.exports  = {DBManager}


