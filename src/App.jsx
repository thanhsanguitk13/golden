
import './App.css'
import { ShoeList } from './components/ShoeList'
import { Cart } from './components/Cart'

function App() {

  return (
    <div className="mainContent flex md:flex justify-between">
     <ShoeList/>
     <Cart/>
    </div>
  )
}

export default App