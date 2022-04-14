// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = 0, action){
    switch(action.type){
        case "MAIS":
            return parseFloat(action.payload[0]) + parseFloat(action.payload[1])
        case "MENOS":
            return parseFloat(action.payload[0]) - parseFloat(action.payload[1])
        default:
            return state
    }
}