import data from"../assets/data/countries+states.json"


console.log(data)
export function getAllCountry(){
    let t = []
    data.map((v,i)=>{
        t.push({text:v.name,value:v.name})
    })
    return t
}

export function getStates(country){
    let s = []
    data.map((v,i)=>{
        if(v.name == country){
            console.log(v.states)
            v.states.map(stat=>{
                s.push({text:stat.name,value:stat.name})
            })
            
        }
    })
    return s
}