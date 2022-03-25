
import React from 'react'
import Produto from './components/Produto'

const App =() => {
  const [dados, setDados] = React.useState(null)
  const [loading, setLoading] = React.useState(null)

  async function handelClick(event) {
    setLoading(true)
    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`)
    const json = await response.json()
    setDados(json)
    setLoading(false)
  }

  return (
    <div >
      <button style={{margin: '0 10px'}}onClick={handelClick}>smartphone</button>      
      <button style={{margin: '0 10px'}}onClick={handelClick}>tablet</button>      
      <button style={{margin: '0 10px'}}onClick={handelClick}>notebook</button>   
      {loading && <p>Carregando...</p>}
      {!loading && dados && <Produto dados={dados}/> }
    </div>
  );
}

export default App;
