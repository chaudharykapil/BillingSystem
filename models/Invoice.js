const { EntitySchema } = require("typeorm");

const Invoice = new EntitySchema({
    name:"invoice",
    column:{
        id:{},
        clientid:{},
        doc_no:{},
        issue_date:{},
        shipto:{},
        po_no:{},
        payment_term:{},
        po_date:{},
        due_date:{},
        supply_place:{},
        total_qty:{},
        discount_all:{},
        shoping_packging_cost:{},
        cess:{},
        notes:{},
        private_notes:{},
        tds:{},
        tcs:{},
        


    }
})
module.exports = {Invoice}