
import './App.css'
import { Carousel } from './Components/Carousel'
import { slides } from './Data/carouselData.json'

function App() {


  return (
    <div className="App">
      <Carousel data={slides} />
    </div>
  )
}

export default App
