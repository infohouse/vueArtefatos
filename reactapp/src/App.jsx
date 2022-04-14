import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProdAsync } from "./reducer/prod.thunk";
import './App.css'

function App() {
  
  
  const { carregando, erro, prod } = useSelector(state => state.prod)
  
  const dispatch = useDispatch()
  
  useEffect(()=>{

    dispatch(getAllProdAsync())
    
  }, [])
  
  
  return (

    <div className="App">
      <h1 id="titulo">Produtos</h1>
      <h2>{carregando ? <img src="Settings.gif" id="wait"/> : ''}</h2>
      <h2>{erro ? console.log(erro) : ''}</h2>
      
      <div className="container">
      
      {prod && prod.map(e => {
        return (
          
            
              <section className="item">
                <div><img src={e.image}/></div>
                <div id="tit">{e.title}</div>                 
                <div id="desc">{e.description}</div>
                <div id="preco"> R$ {e.price}</div>
             </section>
          
          
        )
      })}
      </div>
    </div>
  );
}

export default App;