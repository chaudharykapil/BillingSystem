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

export const get_all_client_option = async ()=>{
    let option = [{text:"Add new Client",value:"*"}]
    var res = await ipcRenderer.invoke("get-all-client")
    res.map((c,idx)=>{
        option.push({
            text:c.client_name,
            value:c.id
        })
    })
    return option

}

export const get_all_product_option = async ()=>{
    var res = await ipcRenderer.invoke("get-all-product")
    let product_option = [{text:"Add New Product",value:"*"}]
    console.log(res)
    res.map((c,idx)=>{
      
      product_option.push({text:c.product_name,value:c.id})
    })
    return product_option
}