import React, { useContext, useMemo } from "react";
import "./DailyTask.css";
import CalendarSection from "./Calendar";
import DailyTodo from "./DailyTodo";
import TodoContext from "../../context/TodoContext";
import moment from "moment";

function DailyTask() {
    const { todoList } = useContext(TodoContext);

    const dailyTodos = todoList.filter(
        (todo) =>
            todo.deadlineDate === moment().format("YYYY-MM-DD") &&
            !todo.complete
    );
    const dailyCompleteTodos = todoList.filter(
        (todo) =>
            todo.deadlineDate === moment().format("YYYY-MM-DD") && todo.complete
    );

    const isLineSeparatorVisible = useMemo(
        () => dailyCompleteTodos.length > 0 && dailyTodos.length > 0,
        [dailyCompleteTodos, dailyTodos]
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
                        {dailyTodos?.map((todo) => (
                            <DailyTodo todo={todo} key={todo.id} />
                        ))}

                        {isLineSeparatorVisible && (
                            <hr className="dailylist-hr"></hr>
                        )}

                        {dailyCompleteTodos?.map((todo) => (
                            <div>
                                <DailyTodo todo={todo} key={todo.id} />
                            </div>
                        ))}
                    </div>

                    <div></div>

                    {/* <div className="dailylist-none-daily">
                            <h4 className="heading-4">
                                Today relax and have fun!
                            </h4>
                            <img src="src\images\MindfulnessPana.svg"></img>
                        </div>
                    )} */}
                </div>
            </div>
        </div>
    );
}

export default DailyTask;
