import './App.css'

import DailyTask from './components/DailyTask'
import Header from './components/Header'
import Home from './components/Home'
import Note from './components/Note'
import ToDoList from './components/ToDoList'
import Waves from './components/Waves'
import WavesBottom from './components/WavesBottom'
import WavesTop from './components/WavesTop'
import Weather from './components/Weather'



function App() {


  return (
    <div>
      <Header />
      <Home name="Marcelina" />
      <Waves />
      <Weather />
      <DailyTask />

      <WavesTop />
      <ToDoList />
      <WavesBottom />
      <Note />




    </div>
  )
}

export default App
