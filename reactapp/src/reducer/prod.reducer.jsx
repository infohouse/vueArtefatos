const initialize = {

    carregando: false,
    erro: null,
    dados: null
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialize, action) {

    switch(action.type){
        
        case "GET":
            return action.payload
        
        case "CARREGA":
            return action.payload

        case "ERRO":
            return action.payload
    
        default:
            return state
    }
    
}