import data from"../assets/data/countries+states.json"


console.log(data)
export function getAllCountry(){
    let t = []
    data.map((v,i)=>{
        t.push({text:v.name,value:v.numeric_code})
    })
    return t
}

export function getStates(country){
    let s = []
    data.map((v,i)=>{
        if(v.numeric_code == country){
            s =  v.states
        }
    })
    return s
}