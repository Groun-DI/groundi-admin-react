import { createContext, useContext, useState } from "react";
import { useCallback } from "react";
import moment from 'moment-timezone';

interface Value {
    format: moment.unitOfTime.DurationConstructor;
    today: moment.Moment;
    weekDays: moment.Moment[];
    SetWeekDays: (days: moment.Moment[]) => void,
}

const defaultValue: Value = {
    format: "day",
    today: moment(),
    weekDays: [],
    SetWeekDays: (days: moment.Moment[]) => { }
}

export const calenderContext = createContext<Value>(defaultValue);

export const useCalendarContext = (): Value => {
    return useContext(calenderContext);
}

export const CalendarProvider = (props: { children: React.ReactNode }) => {
    const [weekDays, setWeekDays] = useState<moment.Moment[]>([]);
    const today = moment();
    const format: moment.unitOfTime.DurationConstructor = "day";

    const SetWeekDays = useCallback((days: moment.Moment[]) => {
        setWeekDays(days);
    }, []);

    const value = { format, today, weekDays, SetWeekDays };
    return <calenderContext.Provider value={value} {...props} />
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { CalendarProvider, useCalendarContext, calenderContext };