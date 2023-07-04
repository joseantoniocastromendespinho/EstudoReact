import React ,{useState} from 'react'

import './App.css'

function App() {
 
const [lista,setLista] = useState(()=>{return []});
const [tarefa,setTarefa] = useState(()=>{return ''});
  return (
    <>
    <h3>Gestor de tarefas</h3>{}
    <input type="text"/>
    <div>
      <button>Adicionar</button>
      <button>Limpar</button>
    </div>
    <hr/>
    <p>Tarefas:</p>
     
    </>
  )
}

export default App
