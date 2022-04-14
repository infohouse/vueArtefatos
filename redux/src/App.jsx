//https://www.youtube.com/watch?v=zym1bkoGom4

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Soma, Subtrair} from './store/Calc/Calc.action'

function App() {
  
  const [n1, setN1] = useState(0)
  const [n2, setN2] = useState(0)
  const [acao, setAcao] = useState('')
  const res = useSelector(state => state.calc)  
  const dispatch = useDispatch()


  useEffect(()=> {
    
    if(acao === 'MAIS') dispatch(Soma(n1,n2)) 
     else dispatch(Subtrair(n1,n2))     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[acao])

  return (
    
    <div className="App">
      
      
        Valor 1&nbsp;<input value={n1} 
        
          onChange={(e) => setN1(e.target.value)} 
          type="number"/><br/><br/>

        Valor 2&nbsp;<input  value={n2} 
        
        onChange={(e) => setN2(e.target.value)}
        type="number"/><br/><br/>

        <select  value={acao} onChange={(e) => setAcao(e.target.value)}>
          <option selected>Ação</option>
          <option value="MAIS">somar</option>
          <option value="MENOS">subtrair</option>
        </select><br/><br/>
      

      <b>Resultado:</b>&nbsp;{res}

    </div>
  );
}

export default App;