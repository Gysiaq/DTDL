import './App.css'

import DailyTask from './components/DailyTask'
import Header from './components/Header'
import Home from './components/Home'
import Note from './components/Note'
import ToDoList from './components/ToDoList'
import Waves from './components/Waves'
import Weather from './components/Weather'



function App() {


  return (
    <div>
      <Header />
      <Home name="Marcelina" />
      <Waves />
      <Weather />
      <DailyTask />

      {/* <ToDoList />
      <Note /> */}




    </div>
  )
}

export default App
