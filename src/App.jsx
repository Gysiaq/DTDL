import './App.css'

import DailyTask from './components/DailyTask'
import Header from './components/Header'
import Home from './components/Home'
import NotesList from './components/NotesList'
import ToDoList from './components/ToDoList'
import Waves from './components/Waves'
import WavesBottom from './components/WavesBottom'

import Weather from './components/Weather'



function App() {


  return (
    <div>
      <Header />
      <Home name="Marcelina" />
      <Waves />
      <Weather />
      <DailyTask />


      <ToDoList />
      <WavesBottom />
      <NotesList />




    </div>
  )
}

export default App
