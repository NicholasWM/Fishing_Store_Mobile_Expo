const filtraDuplicados = (state:Array, item:Object, parameter:String)=>{
    for(const state_item of state['all']){
        if(state_item[parameter] == item[parameter]) return false
    }
    return true
}

module.exports = {
    filtraDuplicados
}