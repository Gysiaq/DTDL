import './App.css'

import DailyTask from './components/DailySection/DailyTask'
import Header from './components/MainSection/Header'
import Home from './components/MainSection/Home'
import NotesList from './components/NoteSection/NotesList'
import ToDoList from './components/ToDoListSection/ToDoList'
import Waves from './components/MainSection/Waves'
import WavesBottom from './components/ToDoListSection/WavesBottom'

import Weather from './components/WeatherSection/Weather'



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
