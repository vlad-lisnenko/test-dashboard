import React, {useEffect, useState} from "react";
import styles from "./Dashboard.module.css";
import Chart from "../../components/chart/Chart";
import {AdMetric} from "../../types/types";
import {fetchMetrics} from "../../api/api";

const DashboardPage: React.FC = () => {
    const [data, setData] = useState<AdMetric[]>([]);

    useEffect(() => {
        fetchMetrics()
            .then(data => {
                setData(data);
                console.log(data)
            })
            .catch(error => console.error('Error fetching metrics:', error));
    }, []);

    return (
        <div className={styles.content}>
            <Chart
                data={data}
                chartName="Costs/Revenue"
                metrics={['cost', 'revenue']}
                colors={['#ff0000', '#00ff00']}
            />
            <Chart
                data={data}
                chartName="Impressions, Clicks and Conversions"
                metrics={['impressions', 'clicks', 'conversions']}
                colors={['#8884d8', '#82ca9d', '#ff7300']}
            />
        </div>
    );
};

export default DashboardPage;
