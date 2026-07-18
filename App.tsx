import { useState } from 'react'

export default function App() {
  const [country, setCountry] = useState('')
  const [result, setResult] = useState('')
  
  const checkVisa = () => {
    if(country.toLowerCase().includes('france')) {
      setResult('✅ Pas besoin de visa pour aller en France avec passeport Congo')
    } else if(country.toLowerCase().includes('canada')) {
      setResult('⚠️ Visa requis pour le Canada')
    } else {
      setResult('⚠️ Visa probablement requis. Vérifiez auprès de l\'ambassade')
    }
  }
  
  return (
    <div style={{background: 'linear-gradient(135deg, #2563eb, #9333ea)', minHeight: '100vh', color: 'white', padding: '20px'}}>
      <div style={{maxWidth: '600px', margin: '0 auto', paddingTop: '80px'}}>
        <h1 style={{fontSize: '48px', fontWeight: 'bold', textAlign: 'center'}}>VisaCheckAI</h1>
        <p style={{textAlign: 'center', marginBottom: '30px'}}>Le ChatGPT des visas ✈️</p>
        
        <div style={{background: 'white', color: 'black', borderRadius: '16px', padding: '24px'}}>
          <input 
            type="text"
            placeholder="Ex: France, Canada, USA..."
            style={{width: '100%', padding: '14px', border: '2px solid #ddd', borderRadius: '8px', marginBottom: '12px'}}
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button 
            onClick={checkVisa}
            style={{width: '100%', background: '#2563eb', color: 'white', padding: '14px', borderRadius: '8px', fontWeight: 'bold', border: 'none'}}>
            Vérifier maintenant
          </button>
          
          {result && <div style={{marginTop: '16px', padding: '12px', background: '#f0f9ff', borderRadius: '8px'}}>{result}</div>}
        </div>
      </div>
    </div>
  )
}
