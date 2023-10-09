import React, { useContext } from "react";
import "./DailyTask.css";
import CalendarSection from "./Calendar";
import DailyTodo from "./DailyTodo";
import TodoContext from "../../context/TodoContext";
import moment from "moment";

function DailyTask() {
    const { todoList, completeTodos } = useContext(TodoContext);
    const today = moment().format("YYYY-MM-DD");

    const dailyTodos = todoList.filter((todo) => todo.deadlineDate === today);
    const dailyCompleteTodos = completeTodos.filter(
        (todo) => todo.deadlineDate === today
    );

    return (
        <div className="daily-container" id="dailytask">
            <h2 className="heading-2 h2-style-daily">Daily Task</h2>

            <div className="daiylist-callender-container">
                <div className="callender">
                    <CalendarSection />
                </div>

                <div>
                    <div className="dailylist paragraph">
                        {dailyTodos.length ? (
                            dailyTodos?.map((todo) => (
                                <div>
                                    <DailyTodo todo={todo} key={todo.id} />
                                </div>
                            ))
                        ) : (
                            <div className="dailylist-none-daily">
                                <h4 className="heading-4">
                                    Today relax and have fun!
                                </h4>
                                <img src="src\images\MindfulnessPana.svg"></img>
                            </div>
                        )}
                        {dailyTodos.length ? (
                            <div className="dailylist paragraph">
                                {dailyCompleteTodos.length ? (
                                    dailyCompleteTodos?.map((todo) => (
                                        <div>
                                            <hr className="dailylist-hr"></hr>
                                            <DailyTodo
                                                todo={todo}
                                                key={todo.id}
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <div className="dailylist-none-daily">
                                        <hr className="dailylist-hr"></hr>
                                        <span>Nothing has complete</span>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DailyTask;
