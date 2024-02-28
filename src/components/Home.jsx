import React from "react";

import DailyTask from "./DailySection/DailyTask";
import Header from "./MainSection/Header";
import MainPage from "./MainSection/MainPage";
import NotesList from "./NoteSection/NotesList";
import ToDoList from "./ToDoListSection/ToDoList";
import Waves from "./MainSection/Waves";
import WavesBottom from "./ToDoListSection/WavesBottom";
import Weather from "./WeatherSection/Weather";
import ContextProvider from "../context/ContextProvider";
import Quote from "./EndSection/Quote";
import { useUserAuth } from "../context/UserAuthContext";

function Home() {
    const { user } = useUserAuth();
    console.log("User:", user);
    return (
        <div>
            <Header />
            <MainPage />
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

export default Home;
