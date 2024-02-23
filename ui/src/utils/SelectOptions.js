const {ipcRenderer} = window.require("electron")
export const uom_type = ()=>{
    return [
    {
        text:"Boxes",
        value:"box"
    },
    {
        text:"CFT",
        value:"cft"
    },
    {
        text:"Centimeter",
        value:"cm"
    },
    {
        text:"Cubic Meter",
        value:"c_meter"
    },
    {
        text:"Hours",
        value:"hour"
    },
    {
        text:"Kilogram",
        value:"kg"
    },
    {
        text:"Gram",
        value:"g"
    },
    {
        text:"Inche",
        value:"inche"
    },
]}

export const tax_type = ()=>{
    return [
        {
            text:"GST Rate 1%",
            value:"1"
        },
        {
            text:"GST Rate 3%",
            value:"3"
        },
        {
            text:"GST Rate 5%",
            value:"5"
        },
        {
            text:"GST Rate 12%",
            value:"12"
        },
        {
            text:"GST Rate 18%",
            value:"18"
        },
        {
            text:"GST Rate 28%",
            value:"28"
        },
    ]
    
}

export const get_all_client_option = ()=>{
    let option = []
    var res = ipcRenderer.invoke("get-all-client")
    return res.then(v=>{
        v.map((c,idx)=>{
            option.push({
                text:c.client_name,
                value:c.id
            })
        })
    }).finally(()=>option)
}