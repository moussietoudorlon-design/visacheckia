import { useState } from 'react'
import './App.css'

function App() {
  const [pays, setPays] = useState('')
  const [resultat, setResultat] = useState('')

  const verifierVisa = () => {
    if(pays === '') {
      setResultat('Veuillez entrer un pays')
    } else {
      setResultat(`Vérification pour ${pays}... Bientôt dispo !`)
    }
  }

  return (
    <div className="container">
      <h1>🌍 VisaCheckAI</h1>
      <p>Vérifiez si vous avez besoin d'un visa en 10 secondes</p>
      
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Ex: France, Canada, USA..."
          value={pays}
          onChange={(e) => setPays(e.target.value)}
        />
        <button onClick={verifierVisa}>Vérifier maintenant</button>
      </div>

      {resultat && <div className="result">{resultat}</div>}
    </div>
  )
}

export default App
