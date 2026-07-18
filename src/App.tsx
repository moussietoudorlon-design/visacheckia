import { useState } from 'react'
import { Check, AlertCircle } from 'lucide-react'

export default function App() {
  const [country, setCountry] = useState('')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 text-white p-6">
      <div className="max-w-2xl mx-auto pt-20">
        <h1 className="text-5xl font-bold text-center mb-4">VisaCheckAI</h1>
        <p className="text-center text-blue-200 mb-8">Vérifiez si vous avez besoin d'un visa en 10 secondes</p>
        
        <div className="bg-white text-black rounded-2xl p-6">
          <input 
            type="text"
            placeholder="Ex: France, Canada, USA..."
            className="w-full p-4 border-2 rounded-lg mb-4"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <button className="w-full bg-blue-600 text-white p-4 rounded-lg font-bold">
            Vérifier maintenant
          </button>
        </div>
      </div>
    </div>
  )
}
