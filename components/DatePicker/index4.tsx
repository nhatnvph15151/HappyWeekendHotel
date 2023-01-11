import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
    DateRangePicker,
    DateRangeDelimiter,
    LocalizationProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@material-ui/pickers/adapter/date-fns"; // choose your lib
import { API_URL } from "../../constants";

type props = {
    id: any,
    getDate: any
    settotaldate: any
}

export default function BasicDateRangePicker({ id, getDate, settotaldate }: props) {
    const [selectedDate, handleDateChange] = React.useState<any>([null, null]);
    const [dataDate, setDataDate] = useState([])
    const bookedDates: any[] = []

    useEffect(() => {
        const getData = async () => {
            const data = await fetch(`${API_URL}/dateBooked`).then((res) => res.json())
            setDataDate(data)
        }
        getData()
    }, [])
    getDate(selectedDate)
    const dateone: any = new Date(selectedDate?.[0])
    const datetwo: any = new Date(selectedDate?.[1])
    const time = Math.abs(datetwo - dateone)
    const days = Math.ceil(time / (1000 * 60 * 60 * 24))
    settotaldate(days)
    const getBookedDates = (date: any = null) => {
        dataDate?.forEach((item: any) => {
            if (item.room == id ) {
                const startDate = new Date(item.dateFrom).getTime()
                const endDate = new Date(item.dateTo).getTime()
                const rangeDate = ((((endDate - startDate) / 1000) / 60) / 60) / 24
                let rangeDateValue = startDate;
                for (let i = 0; i < rangeDate; i++) {
                    bookedDates.push(rangeDateValue += 86400000)
                }
                bookedDates.push(startDate, endDate)
            }
            // else if (selectedDate[0]) {
            //     if (item.room == id ) {
            //         const startDate = new Date(item.dateFrom).getTime()
            //         const endDate = new Date(item.dateTo).getTime()
            //         const rangeDate = ((((endDate - startDate) / 1000) / 60) / 60) / 24
            //         let rangeDateValue = startDate;
            //         for (let i = 0; i < rangeDate; i++) {
            //             bookedDates.push(rangeDateValue += 86400000)
            //         }
            //         bookedDates.push(startDate, endDate)
            //     }
            // }
            else return bookedDates
        })

    }
    getBookedDates();

    const disableBookedDays = (date: any) => {
        const convertedIntoDateObject = bookedDates.map((bookedDate) => {
            // console.log(new Date(bookedDate));
            return new Date(bookedDate).getTime();
        });

        return date.getTime() === 0 || date.getTime() === 6 || convertedIntoDateObject.includes(date.getTime());
    };

    // const disabledDate = (date: any) => {
    //     let _disabledDate = disableBookedDays(date);
    //     let disable = _disabledDate;
    //     if (selectedDate[0] && _disabledDate) {
    //         console.log(_disabledDate);
    //         // debugger
    //         disable = true;
    //     }
    //     return _disabledDate;
    // }
    return (
        <LocalizationProvider dateAdapter={DateFnsUtils}>
            <DateRangePicker
                startText="Check-in"
                endText="Check-out"
                shouldDisableDate={disableBookedDays}
                value={selectedDate}
                disablePast
                onChange={(date: any) => handleDateChange(date)}
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
