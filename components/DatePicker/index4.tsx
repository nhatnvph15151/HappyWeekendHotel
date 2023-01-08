import React, { useMemo, useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
    DateRangePicker,
    DateRangeDelimiter,
    LocalizationProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns"; // choose your lib
import dayjs from "dayjs";

type props = {
    getDate: any
    settotaldate: any
}

export default function BasicDateRangePicker({ getDate, settotaldate }: props) {
    const defaultSelectedDate = useMemo(() => {
        const currentDate = new Date();
        const futureDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
    
        return [dayjs(currentDate.toISOString()), dayjs(futureDate.toISOString())];
    }, []);

    const [selectedDate, setSelectedDate] = useState<any>(defaultSelectedDate);

    getDate(selectedDate);

    const dateone: any = new Date(selectedDate?.[0])
    const datetwo: any = new Date(selectedDate?.[1])
    const time = Math.abs(datetwo - dateone)
    const days = Math.ceil(time / (1000 * 60 * 60 * 24))
    settotaldate(days);

    return (
        <LocalizationProvider dateAdapter={DateFnsUtils as any}>
            <DateRangePicker
                startText="Nhận phòng"
                endText="Trả phòng"
                inputFormat="dd/MM/YYY"
                value={selectedDate}
                disablePast
                onChange={(date: any) => setSelectedDate(date)}
                renderInput={(startProps, endProps) => (
                    <>
                        <TextField {...startProps} />
                        <DateRangeDelimiter> to </DateRangeDelimiter>
                        <TextField {...endProps} />
                    </>
                )}
            />
        </LocalizationProvider>
    );
}
