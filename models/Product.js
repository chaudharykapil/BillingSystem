const { EntitySchema } = require("typeorm");

const Product = new EntitySchema({
    name:"product",
    columns:{
        id:{
            type:Number,
            primary:true,
            generated:true
        },
        p_type:{
            type:String,
            nullable:false,
            default:"product"
        },
        uom:{
            type:String,
            default:"box",
            nullable:false,
        },
        sku:{
            type:Number,
            default:1
        },
        product_name:{
            type:String,
            nullable:false
        },
        purchase_price:{
            type:Number,
        },
        hns:{
            type:String
        },
        unit_price:{
            type:Number
        },
        tax:{
            type:String,
            default:"1"
        },
        quantity:{
            type:Number
        },
        quantity_sold:{
            type:Number,
            default:0,
        },
        cess:{
            type:String
        },
        additional:{
            type:String,
            nullable:true
        },
        description:{
            type:String,
            nullable:true
        },

    }
})

module.exports = {Product}