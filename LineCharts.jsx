import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis } from 'recharts'

const pdata = [
    {
        day: "jan",
        student: 5,
        fees:40
    },
    {
        day: "feb",
        student: 10,
        fees:20
    },
    {
        day: "march",
        student: 12,
        fees:30
    },
    {
        day: "april",
        student: 8,
        fees:10
    },
    {
        day: "may",
        student: 18,
        fees:10
    },
    {
        day: "june",
        student: 9,
        fees:10
    },
]
function LineCharts() {
return (
    <>
    <h1 className='chart heading'>Total Revenue</h1> <br></br>
    <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} eidth={500} height={300} margin={{top:5, right:30, left:20,bottom:5}}>
            <XAxis dataKey= "day" interval={"preserveStartEnd"} />
            <YAxis />
            <Line type="monotone" dataKey="student" stroke="red" />
            <Line dataKey="fees"/>
        </LineChart>

    </ResponsiveContainer>
    </>
);

}

export default LineCharts