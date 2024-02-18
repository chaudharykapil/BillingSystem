const { EntitySchema, OneToMany } = require("typeorm");

const Address = new EntitySchema({
    name:"address",
    columns:{
        id:{
            type:Number,
            primary:true,
            generated:true
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
    },
    relations:{
        companyid:{
            type:"one-to-one",
            target:"company"
        }
    }
})

module.exports = {Address}