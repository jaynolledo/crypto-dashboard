import Newsfeed from "./components/Newsfeed"
import CurrencyConverter from "./components/CurrencyConverter"

function App() {
  return (

    <div className="app">
      <h1>Crypto Dashboard</h1>
      <div className="app-wrapper">
        <CurrencyConverter />
        <Newsfeed />

      </div>
    </div>
  ) 
}

export default App
