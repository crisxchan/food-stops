import Appbar from './components/Appbar/Appbar'
import Card from './components/Card/Card'
import foodStopsData from './data'
import './App.css'

function App() {
  const dataCards = foodStopsData.map((foodStop, i) => {
    return <Card 
      key={i}
      {...foodStop}
    />
  })

  return (
    <>
      <Appbar />
      <main>
        {dataCards}
      </main>
    </>
  )
}

export default App
