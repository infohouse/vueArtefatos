import { getAllProd } from "../utils/prod.services"
import { Carrega, GetAll, GetErro } from "./prod.action"

export const getAllProdAsync = () => dispatch => {
    dispatch(Carrega())

    getAllProd().then(res => dispatch(GetAll(res.data)))
        .catch(e => dispatch(GetErro(e)))   
    
}