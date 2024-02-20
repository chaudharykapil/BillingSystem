const { EntitySchema } = require("typeorm");

const Address = new EntitySchema({
    name:"address",
    columns:{
        id:{
            type:Number,
            primary:true,
            generated:true
        },
        name:{
            type:String,
            nullable:true
        },
        address:{
            type:String,
            nullable:false
        },
        city:{
            type:String,
            nullable:false
        },
        state:{
            type:String,
            nullable:false
        },
        pincode:{
            type:String,
            nullable:false
        },
        country:{
            type:String,
            nullable:false
        }
    },
    
})

module.exports = {Address}