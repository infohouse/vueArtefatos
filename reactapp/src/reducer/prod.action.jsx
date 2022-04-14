export function Carrega(){
    return {
        type: 'CARREGA',
        payload: {carregando: true, prod: null, erro: null}
    }
}

export function GetAll(prod){
    return {
        type: 'GET',
        payload: {carregando: false, prod: prod, erro: null}
    }
} 

export function GetErro(erro){
    return {
        type: 'ERRO',
        payload: {carregando: false, prod: null, erro: erro}
    }
}