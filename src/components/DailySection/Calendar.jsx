import React, { useContext, useState } from "react";
import "./Calendar.css";
import TodoContext from "../../context/TodoContext";

import RevoCalendar from "revo-calendar";
import moment from "moment";

function CalendarSection(props) {
    const { todoList } = useContext(TodoContext);

    const eventList = todoList
        .filter((todo) => todo.deadlineDate && todo.title)
        .map((todo) =>
            todo.deadlineTime
                ? {
                      name: todo.title,
                      date: +new Date(
                          moment(`${todo.deadlineDate} ${todo.deadlineTime}`)
                      ),
                      allDay: false,
                  }
                : {
                      name: todo.title,
                      date: +new Date(todo.deadlineDate),
                      allDay: true,
                  }
        );

    return (
        <RevoCalendar
            events={eventList}
            className="calendar"
            primaryColor="#025464"
            secondaryColor="white"
            todayColor="#E57C23"
            indicatorColor="#E57C23"
            detailDateFormat="MM/DD/YYYY"
            style={{ height: 600, width: 800 }}
        />
    );
}

export default CalendarSection;
