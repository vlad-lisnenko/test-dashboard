import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {AdMetric} from "../../types/types";

interface Props {
    data: AdMetric[];
    chartName: string;
    metrics: (keyof AdMetric)[];
    colors: string[];
}

const Chart: React.FC<Props> = ({data, chartName, metrics, colors}) => {
    return (
        <div>
            <h2>{chartName}</h2>
            <ResponsiveContainer width={600} height={400}>
                <LineChart data={data}>
                    {metrics.map((metric, index) => (
                        <Line key={metric} type="monotone" dataKey={metric} stroke={colors[index]}
                              name={metric.charAt(0).toUpperCase() + metric.slice(1)}/>
                    ))}
                    <CartesianGrid stroke="#ccc"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Tooltip labelStyle={{color: "black"}}/>
                    <Legend/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};


export default Chart;