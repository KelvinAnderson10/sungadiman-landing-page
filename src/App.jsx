import './App.css'
import Sejarah from './Components/Sejarah'
import Beranda from './Components/Beranda'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Beranda/>
      <Sejarah/>
    </div>
  )
}

export default App
