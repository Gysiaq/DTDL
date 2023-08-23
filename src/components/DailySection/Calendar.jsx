import React, { useState } from "react";
import "./Calendar.css";
import dayjs from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

function Calendar() {
    const [dateValue, setDateValue] = useState(dayjs(Date()));

    return (
        <LocalizationProvider
            className="calendar-container"
            dateAdapter={AdapterDayjs}
        >
            <DemoItem>
                <DateCalendar
                    value={dateValue}
                    onChange={(newValue) => setDateValue(newValue)}
                    views={["year", "month", "day"]}
                />
            </DemoItem>
        </LocalizationProvider>
    );
}

export default Calendar;
