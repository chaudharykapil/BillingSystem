const { EntitySchema } = require("typeorm");

const ReportData = new EntitySchema({
    name:"reportData",
    columns:{
        id:{
            type:Number,
            primary:true,
            generated:true
        },
        product_id:{
            type:Number,
        },
        description:{
            type:String,
            nullable:true
        },
        uom:{
            type:String,
        },
        qty:{
            type:Number
        },
        tax:{
            type:String
        },
        discount:{
            type:String
        },
    },
    relations:{
        product_id:{
            type:"one-to-one",
            target:"product"
        }
    }
})

module.exports = {ReportData}