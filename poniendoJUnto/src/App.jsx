import './App.css'
import PersonCard from './assets/components/PersonCard'

function App() {

  return (
    <div>
      <PersonCard
        firstName="Doe, "
        lastName="Jane"
        age="45"
        hairColor="Black"
        boton="Birthday Button for Jane Doe"
      />
      <PersonCard
        firstName="Smith, "
        lastName="John"
        age="88"
        hairColor="Brown"
        boton="Birhday Button for John Smith"
      />
    </div>
  )
}

export default App
