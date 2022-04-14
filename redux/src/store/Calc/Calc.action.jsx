export function Soma(n1, n2){
    return {
        type: "MAIS",
        payload: [n1, n2]
    }
}

export function Subtrair(n1, n2){
    return {
        type: "MENOS",
        payload: [n1, n2]
    }
}