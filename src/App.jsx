import "./App.css";

import DailyTask from "./components/DailySection/DailyTask";
import Header from "./components/MainSection/Header";
import Home from "./components/MainSection/Home";
import NotesList from "./components/NoteSection/NotesList";
import ToDoList from "./components/ToDoListSection/ToDoList";
import Waves from "./components/MainSection/Waves";
import WavesBottom from "./components/ToDoListSection/WavesBottom";
import Weather from "./components/WeatherSection/Weather";
import ContextProvider from "./context/ContextProvider";
import Quote from "./components/EndSection/Quote";

function App() {
    return (
        <div>
            <Header name="Marcelina" />
            <Home />
            <Waves />
            <Weather />
            <ContextProvider>
                <DailyTask />
                <ToDoList />
                <WavesBottom />
            </ContextProvider>
            <NotesList />
            <Quote />
        </div>
    );
}

export default App;
